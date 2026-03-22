import { useMemo } from "react";
import { useGlobalMarket } from "../hooks/useGlobalMarket";
import { marketGlobaltSchema } from "../data/globalMarketSchema";
import { Skeleton } from "@/components/ui/skeleton";
import { z } from "zod";
import { Card } from "@/components/ui/card";

type GlobalData = {
  activeCryptos: number;
  totalMarketCap: number;
  totalVolume: number;
  marketCapChange: number;
  bitCoinDominance: number;
};

export function CryptoOverview() {
  const { data: globalMarketData } = useGlobalMarket();

  const globalData = useMemo(() => {
    if (!globalMarketData) return undefined;

    try {
      // Directly access the data property
      const parsedData = marketGlobaltSchema.parse(globalMarketData);

      if (!parsedData.data) {
        console.error("Parsed data is empty");
        return undefined;
      }

      const {
        total_market_cap = {},
        total_volume = {},
        market_cap_percentage = {},
        market_cap_change_percentage_24h_usd = 0,
        active_cryptocurrencies = 0,
      } = parsedData.data;

      // use reduce to sum up the values

      const totalMarketCapSum = Object.values(total_market_cap).reduce<number>(
        (sum, value) => sum + (value as number),
        0
      );

      const totalVolumeSum = Object.values(total_volume).reduce<number>(
        (sum, value) => sum + (value as number),
        0
      );

      const bitCoinDominance = market_cap_percentage.btc
        ? parseFloat(market_cap_percentage.btc.toFixed(2))
        : 0;

      const formattedData: GlobalData = {
        activeCryptos: active_cryptocurrencies,
        totalMarketCap: totalMarketCapSum,
        totalVolume: totalVolumeSum,
        bitCoinDominance,
        marketCapChange: market_cap_change_percentage_24h_usd,
      };
      return formattedData;
    } catch (error) {
      console.error("Error parsing global market data:", error);

      // if its a zod error, log more details
      if (error instanceof z.ZodError) {
        console.error(
          "Zod errors details:",
          JSON.stringify(error.issues, null, 2)
        );
      }
      return undefined;
    }
  }, [globalMarketData]);
  const formattedNumber = (num: number) =>
    new Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 0,
    }).format(num);

  return (
    <div className="p-7 space-y-6 rounded-lg shadow-none border  w-[600px] bg-card ">
      <h2 className="text-xl font-semibold mb-5"> Market Overview</h2>
      {/* Top Matrics section */}
      <div className="grid gap-4 sm:grid-cols-2 pb-4 pt-3 ">
        {globalData ? (
          <>
            <Card className="p-2 py-8 flex flex-col items-center justify-center gap-2 shadow-none">
              <span className=" text-sm bg-primary/10 p[6px] px-7 rounded-md text-primary">
                {globalData?.marketCapChange.toFixed(2)}%
              </span>
              <p className="text-2xl font-bold">
                ${formattedNumber(globalData.totalMarketCap)}
              </p>
              <p className="text-xs font-medium text-muted-foreground">
                Total Market Cap
              </p>
            </Card>
            <Card className="p-4 flex flex-col gap-2 items-center justify-center  shadow-none">
              <span className=" text-sm bg-primary/10 p[6px] px-7 rounded-md text-primary">
                -
              </span>
              <p className="text-2xl font-bold">
                ${formattedNumber(globalData.totalVolume)}
              </p>
              <p className="text-xs font-medium text-muted-foreground">
                24h Volume
              </p>
            </Card>

            <Card className="p-4 flex flex-col gap-2 items-center justify-center shadow-none py">
              <p>{formattedNumber(globalData.activeCryptos)}</p>
              <p className="text-xs font-medium text-muted-foreground">
                Total Cryptocurrencies
              </p>
            </Card>

            <Card className="p-4 flex flex-col gap-2 items-center justify-center shadow-none">
              <p className="text-2xl font-bold">
                {globalData.bitCoinDominance}%
              </p>
              <p className="text-xs font-medium text-muted-foreground">
                Bitcoin Dominance
              </p>
            </Card>
          </>
        ) : (
          // Show skeleton loaders while data is loading
          <div className=" col-span-2 text-center">
            <div className=" grid grid-cols-2 gap-4">
              <Skeleton className="h-36" />
              <Skeleton className="h-36" />
              <Skeleton className="h-24" />
              <Skeleton className="h-24" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
