import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CryptoTable } from "./data-table";
import { cryptoColumns, CrytopData } from "./crypto-column";
import { allCryptosSchema } from "../../data/allCryptos";
import { z } from "zod";
import { useMemo } from "react";

type allCryptosType = z.infer<typeof allCryptosSchema>;

type SingleCoinType = Pick<
  allCryptosType[number],
  | "name"
  | "image"
  | "current_price"
  | "total_volume"
  | "market_cap_rank"
  | "market_cap"
  | "price_change_percentage_24h"
  | "high_24h"
  | "low_24h"
>;

export default function CryptoTableDialog({
  allCoins,
}: {
  allCoins: allCryptosType;
}) {
  const cryptoData = useMemo<CrytopData[]>(
    () =>
      allCoins.map((coin: SingleCoinType) => ({
        name: coin.name,
        icon: coin.image,
        price: coin.current_price,
        volume: coin.total_volume,
        marketRank: coin.market_cap_rank,
        marketCap: coin.market_cap,
        changePercentage: coin.price_change_percentage_24h,
        highIn24: coin.high_24h,
        lowIn24: coin.low_24h,
      })),
    [allCoins],
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"link"} className="h-10">
          See all
        </Button>
      </DialogTrigger>
      <DialogContent className="poppins w-[85vw]! max-w-none! h-[92vh]! p-8 overflow-x-hidden flex flex-col left-1/2! -translate-x-1/2! top-1/2! -translate-y-1/2!">
        <DialogHeader>
          <DialogTitle className="text-[22px]">
            All CryptoCurrencies
          </DialogTitle>
          <DialogDescription>
            View a comprehensive list of all available
            cryptopcurrencies,including their prices, market capitalization, and
            other key details.
          </DialogDescription>
        </DialogHeader>
        <Separator className="my-4" />
        <div className="flex-1 overflow-y-auto overflow-x-hidden min-w-0">
          <CryptoTable columns={cryptoColumns} data={cryptoData} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
