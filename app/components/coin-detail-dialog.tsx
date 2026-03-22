"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { Card } from "@/components/ui/card";

interface CoinData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_percentage_24h: number;
}

interface CoinDetailDialogProps {
  coinId: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CoinDetailDialog({
  coinId,
  open,
  onOpenChange,
}: CoinDetailDialogProps) {
  const [coinDataById, setCoinDataById] = useState<Record<string, CoinData>>(
    {},
  );
  const [errorById, setErrorById] = useState<Record<string, string>>({});

  const coinData = coinId ? (coinDataById[coinId] ?? null) : null;
  const error = coinId ? (errorById[coinId] ?? null) : null;
  const isLoading = Boolean(coinId && open && !coinData && !error);

  useEffect(() => {
    if (!coinId || !open || coinDataById[coinId] || errorById[coinId]) {
      return;
    }

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false`)
      .then((res) => res.json())
      .then((data) => {
        const parsedData: CoinData = {
          id: data.id,
          name: data.name,
          symbol: data.symbol.toUpperCase(),
          image: data.image?.large || "",
          current_price: data.market_data?.current_price?.usd || 0,
          market_cap: data.market_data?.market_cap?.usd || 0,
          market_cap_rank: data.market_cap_rank || 0,
          total_volume: data.market_data?.total_volume?.usd || 0,
          high_24h: data.market_data?.high_24h?.usd || 0,
          low_24h: data.market_data?.low_24h?.usd || 0,
          price_change_percentage_24h:
            data.market_data?.price_change_percentage_24h || 0,
          market_cap_change_percentage_24h:
            data.market_data?.market_cap_change_percentage_24h || 0,
        };

        setCoinDataById((prev) => ({ ...prev, [coinId]: parsedData }));
      })
      .catch((err) => {
        setErrorById((prev) => ({
          ...prev,
          [coinId]: "Failed to load coin details",
        }));
        console.error(err);
      });
  }, [coinId, open, coinDataById, errorById]);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 2,
    }).format(num);
  };

  const formatPrice = (num: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        {isLoading ? (
          <div className="space-y-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-8 w-full" />
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-24" />
              <Skeleton className="h-24" />
              <Skeleton className="h-24" />
              <Skeleton className="h-24" />
            </div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : coinData ? (
          <>
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                {coinData.image && (
                  <Image
                    src={coinData.image}
                    alt={coinData.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <div>
                  <DialogTitle className="text-2xl">
                    {coinData.name}
                  </DialogTitle>
                  <span className="text-sm text-muted-foreground">
                    {coinData.symbol}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold">
                    {formatPrice(coinData.current_price)}
                  </p>
                  <span
                    className={`text-sm font-semibold ${
                      coinData.price_change_percentage_24h >= 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {coinData.price_change_percentage_24h >= 0 ? "+" : ""}
                    {coinData.price_change_percentage_24h.toFixed(2)}%
                  </span>
                </div>
              </div>
            </DialogHeader>

            <div className="mt-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 shadow-none">
                  <p className="text-sm text-muted-foreground mb-1">
                    Market Cap Rank
                  </p>
                  <p className="text-2xl font-bold">
                    #{coinData.market_cap_rank}
                  </p>
                </Card>

                <Card className="p-4 shadow-none">
                  <p className="text-sm text-muted-foreground mb-1">
                    Market Cap
                  </p>
                  <p className="text-lg font-bold">
                    {formatNumber(coinData.market_cap)}
                  </p>
                </Card>

                <Card className="p-4 shadow-none">
                  <p className="text-sm text-muted-foreground mb-1">
                    24h Volume
                  </p>
                  <p className="text-lg font-bold">
                    {formatNumber(coinData.total_volume)}
                  </p>
                </Card>

                <Card className="p-4 shadow-none">
                  <p className="text-sm text-muted-foreground mb-1">
                    Market Cap Change (24h)
                  </p>
                  <p
                    className={`text-lg font-bold ${
                      coinData.market_cap_change_percentage_24h >= 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {coinData.market_cap_change_percentage_24h >= 0 ? "+" : ""}
                    {coinData.market_cap_change_percentage_24h.toFixed(2)}%
                  </p>
                </Card>

                <Card className="p-4 shadow-none">
                  <p className="text-sm text-muted-foreground mb-1">24h High</p>
                  <p className="text-lg font-bold">
                    {formatPrice(coinData.high_24h)}
                  </p>
                </Card>

                <Card className="p-4 shadow-none">
                  <p className="text-sm text-muted-foreground mb-1">24h Low</p>
                  <p className="text-lg font-bold">
                    {formatPrice(coinData.low_24h)}
                  </p>
                </Card>
              </div>
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
