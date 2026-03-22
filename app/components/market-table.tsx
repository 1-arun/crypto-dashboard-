import React, { useState, useEffect } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useAllCryptos } from "../hooks/useAllCryptos";
import { allCryptosSchema } from "../data/allCryptos";
import Image from "next/image";
import CryptoTableDialog from "../components/crypto-dialog/crypto-dailog";
import { z } from "zod";

interface TopCurrencies {
  name: string;
  price: string;
  change: string;
  volume: string;
  marketRank: string;
  isPositive: boolean;
  icon: string;
}

type AllCryptosType = z.infer<typeof allCryptosSchema>;

export function MarketTable() {
  const { data: allCoinsData, isLoading, isError } = useAllCryptos();
  const [topFiveCurrencies, setTopFiveCurrencies] = useState<TopCurrencies[]>(
    [],
  );
  const [validatedCoins, setValidatedCoins] = useState<AllCryptosType>([]);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        if (allCoinsData) {
          const validationSchema = allCryptosSchema.parse(allCoinsData);
          setValidatedCoins(validationSchema);
          const mappedData: TopCurrencies[] = validationSchema
            .slice(0, 5)
            .map((coin) => ({
              name: coin.name,
              price: `$${coin.current_price.toLocaleString()}`,
              change: `${coin.price_change_percentage_24h.toFixed(2)}%`,
              volume: `$${coin.total_volume.toLocaleString()}`,
              marketRank: coin.market_cap_rank.toString(),
              isPositive: coin.price_change_percentage_24h >= 0,
              icon: coin.image,
            }));
          setTopFiveCurrencies(mappedData);
        }
      } catch (error) {
        console.error("Error fetching market data:", error);
      }
    };
    fetchMarketData();
  }, [allCoinsData]);

  return (
    <Card className="space-y-4 p-6 px-5 shadow-none border-none">
      <div className="flex items-center justify-between mb-9">
        <div>
          <h2 className="text-xl font-medium">Market Value</h2>
          <p className=" text-xs text-slate-600 ">5 Top CryptoCurrencies</p>
        </div>
        <CryptoTableDialog allCoins={validatedCoins} />
      </div>
      <Table className="min-w-max">
        <TableHeader className="sticky top-0 border-none bg-muted/70 dark:bg-secondary/70 backdrop-blur">
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Assets Price</TableHead>
            <TableHead>Change</TableHead>
            <TableHead>Volume</TableHead>
            <TableHead>Rank</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isError && (
            <TableRow>
              <TableCell colSpan={5} className="text-center text-red-500">
                Failed to fetch data
              </TableCell>
            </TableRow>
          )}
          {isLoading ? (
            <>
              {[...Array(5)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell colSpan={5}>
                    <Skeleton className="h-9 w-full" />
                  </TableCell>
                </TableRow>
              ))}
            </>
          ) : (
            topFiveCurrencies.map((item: TopCurrencies) => (
              <TableRow key={item.name}>
                <TableCell className="flex items-center gap-2">
                  <div className="size-7 rounded-md flex items-center justify-center text-primary font-bold">
                    {item && (
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={20}
                        height={20}
                      />
                    )}
                  </div>
                  <span>{item.name}</span>
                </TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell
                  className={
                    item.isPositive
                      ? "text-green-500 font-medium"
                      : "text-red-500"
                  }
                >
                  {item.change}
                </TableCell>
                <TableCell>{item.volume}</TableCell>
                <TableCell className="text-center">{item.marketRank}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </Card>
  );
}
