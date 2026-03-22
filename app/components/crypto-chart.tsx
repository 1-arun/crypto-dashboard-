"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect, useMemo } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import CoinCombobox, { CryptoComboBox } from "./coin-combobox";
import { useAllCryptos } from "../hooks/useAllCryptos";
import { fetchCryptoPrices } from "../data/allCoinPrices";
import { Skeleton } from "@/components/ui/skeleton";
import { CoinDetailDialog } from "./coin-detail-dialog";
import {
  Area,
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

type ChartData = {
  date: number;
  price: number;
};

type PriceData = {
  prices: [number, number][];
};

type ChartTooltipProps = {
  active?: boolean;
  payload?: ReadonlyArray<{ value?: number | string }>;
  label?: number | string;
};

export function CryptoChart() {
  const { data: cryptos, isLoading, isError } = useAllCryptos();
  const [value, setValue] = useState<string>("");
  const [selectedCoinDetail, setSelectedCoinDetail] = useState<string | null>(
    null,
  );
  const [dialogOpen, setDialogOpen] = useState(false);

  const [selectedPeriod, setSelectedPeriod] = useState<string>("7D");
  const [chartData, setChartData] = useState<ChartData[]>([]);

  const comboBoxCoins = useMemo(() => {
    if (cryptos) {
      const formattedData: CryptoComboBox[] = (cryptos as unknown[])
        .map((crypto: unknown) => {
          if (
            typeof crypto === "object" &&
            crypto !== null &&
            "id" in crypto &&
            "name" in crypto &&
            "image" in crypto &&
            "current_price" in crypto &&
            "price_change_percentage_24h" in crypto
          ) {
            return {
              value: crypto.id as string,
              label: crypto.name as string,
              icon: crypto.image as string,
              price: String(crypto.current_price),
              change:
                (crypto.price_change_percentage_24h as number).toFixed(4)[0] !==
                "-"
                  ? `+${(crypto.price_change_percentage_24h as number).toFixed(
                      4,
                    )}`
                  : (crypto.price_change_percentage_24h as number).toFixed(4),
            };
          }
          return null; // Explicitly return null for invalid entries
        })
        .filter((item): item is CryptoComboBox => item !== null); //  filter out null vlaues
      return formattedData;
    }
    return [];
  }, [cryptos]);

  const selectedValue = value || comboBoxCoins[0]?.value || "";

  const selectedCoin = useMemo(
    () => comboBoxCoins?.find((coin) => coin.value === selectedValue),
    [comboBoxCoins, selectedValue],
  );

  const formattedPrice = useMemo(() => {
    if (selectedCoin) {
      const numericCoinPrice = parseFloat(selectedCoin.price);
      return numericCoinPrice.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    }
    return "";
  }, [selectedCoin]);

  // Fetch chart data
  useEffect(() => {
    if (selectedValue) {
      fetchCryptoPrices(selectedValue).then((data) => {
        const priceData = data as PriceData;
        if (priceData && priceData.prices) {
          const periodDays = Number.parseInt(selectedPeriod, 10) || 7;
          const msInDay = 24 * 60 * 60 * 1000;
          const latestTimestamp =
            priceData.prices[priceData.prices.length - 1]?.[0];
          const filteredPrices = latestTimestamp
            ? priceData.prices.filter(
                ([timestamp]) =>
                  timestamp >= latestTimestamp - periodDays * msInDay,
              )
            : priceData.prices;

          console.log(
            `Period: ${selectedPeriod}, Filtered data points: ${filteredPrices.length}`,
          );
          const dailyData = new Map<string, number>();
          filteredPrices.forEach(([timestamp, price]) => {
            const date = new Date(timestamp).toISOString().split("T")[0]; // YYYY-MM-DD
            dailyData.set(date, price); // last price of the day
          });
          const formatted = Array.from(dailyData.entries())
            .map(([dateStr, price]) => {
              const timestamp = new Date(dateStr + "T00:00:00").getTime();
              return { date: timestamp, price };
            })
            .sort((a, b) => a.date - b.date);
          setChartData(formatted);
        }
      });
    }
  }, [selectedValue, selectedPeriod]);

  function onChangeToggleGroup(item: string) {
    setSelectedPeriod(item);
  }

  const chartColor = "#8b5cf6"; // purple color

  const CustomTooltip = ({ active, payload, label }: ChartTooltipProps) => {
    if (active && payload && payload.length) {
      const date = new Date(
        typeof label === "number" || typeof label === "string" ? label : 0,
      );
      const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      const price = payload[0]?.value;
      const formattedPrice =
        typeof price === "number"
          ? price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })
          : price;
      return (
        <div className="bg-background border border-border rounded p-2 shadow">
          <p className="text-sm font-medium">{formattedDate}</p>
          <p className="text-sm text-muted-foreground">
            Price: {formattedPrice}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="m-5 border shadow-lg bg-card">
      <CardHeader className="flex flex-ro items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-normal">
          <CoinCombobox
            coins={comboBoxCoins}
            value={selectedValue}
            isLoading={isLoading}
            isError={isError}
            setValue={setValue}
            onCoinSelect={(coinId) => {
              setSelectedCoinDetail(coinId);
              setDialogOpen(true);
            }}
          />
          <div className=" mt-4">
            <span className="text-2xl font-bold">{formattedPrice}</span>
            <span
              className={`ml-2 text-sm ${
                selectedCoin?.change[0] === "-"
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {selectedCoin?.change}
            </span>
          </div>
        </CardTitle>
        {/* single toggle */}
        <div className="flex gap-2">
          <ToggleGroup
            value={selectedPeriod}
            onValueChange={onChangeToggleGroup}
            type="single"
          >
            {["7D", "15D", "30D"].map((period, key) => (
              <ToggleGroupItem key={key} value={`${period}`}>
                {period}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="h-[230px]">
            <Skeleton className="h-full w-full" />
          </div>
        ) : (
          <div className="h-[230px] mt-5">
            <ResponsiveContainer
              width="100%"
              height={236}
              className="text-[12px]"
            >
              <AreaChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorWords" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor={chartColor}
                      stopOpacity={0.8}
                    />
                    <stop offset="95%" stopColor={chartColor} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="date"
                  color="#64748b"
                  tickFormatter={(value: number) =>
                    new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }
                />
                <YAxis dataKey="price" />
                <Tooltip content={CustomTooltip} />
                <Area
                  type="monotone"
                  dataKey="price"
                  stroke={chartColor}
                  fillOpacity={1}
                  fill="url(#colorWords)"
                  dot={true}
                  activeDot={{ r: 6 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </CardContent>
      <CoinDetailDialog
        coinId={selectedCoinDetail}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </Card>
  );
}
