import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SiMarketo } from "react-icons/si";
import { ModeToggle } from "@/app/mode-toogle";
import { Card } from "@/components/ui/card";
import { useAllCryptos } from "../hooks/useAllCryptos";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import { allCryptosSchema } from "../data/allCryptos";
import { z } from "zod";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CoinDetailDialog } from "./coin-detail-dialog";

type AllCryptosType = z.infer<typeof allCryptosSchema>;

export function Header() {
  const [mainSearch, setMainSearch] = useState("");
  const [selectedCoinId, setSelectedCoinId] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { data } = useAllCryptos();
  const allCoins = useMemo<AllCryptosType>(
    () => (data ? allCryptosSchema.parse(data) : []),
    [data],
  );

  return (
    <nav className="flex h-[73px] items-center justify-between px-6">
      <Logo />
      <div className="flex items-center justify-between gap-4 w-[30%] relative">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-primary" />
          <Input
            type="search"
            placeholder="Search a coin..."
            className="pl-8 border-none shadow-none w-full"
            value={mainSearch}
            onChange={(e) => setMainSearch(e.target.value)}
          />
          {mainSearch.trim().length > 0 && (
            <LiveSearch
              allCoins={allCoins}
              mainSearch={mainSearch}
              setMainSearch={setMainSearch}
              onSelectCoin={(coinId) => {
                setSelectedCoinId(coinId);
                setDialogOpen(true);
              }}
            />
          )}
        </div>
        <ModeToggle />
      </div>
      <CoinDetailDialog
        coinId={selectedCoinId}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </nav>
  );
}

function LiveSearch({
  allCoins,
  mainSearch,
  setMainSearch,
  onSelectCoin,
}: {
  allCoins: AllCryptosType;
  mainSearch: string;
  setMainSearch: Dispatch<SetStateAction<string>>;
  onSelectCoin: (coinId: string) => void;
}) {
  const filterCoins = allCoins.filter((coin: AllCryptosType[number]) =>
    coin.name.toLowerCase().includes(mainSearch.toLowerCase()),
  );

  const handleSelect = (coinId: string) => {
    onSelectCoin(coinId);
    setMainSearch("");
  };

  return (
    <Card className="absolute z-20 p-1 top-11 w-full border shadow-md bg-background">
      {filterCoins.length > 0 ? (
        <>
          {filterCoins.slice(0, 5).map((coin: AllCryptosType[number]) => (
            <div
              key={coin.id}
              onClick={() => handleSelect(coin.id)}
              className="flex items-center justify-between gap-1 px-2 py-1 hover:bg-primary/10 rounded-md cursor-pointer select-none"
            >
              <div className="flex items-center gap-1">
                <Image
                  src={coin.image}
                  alt={`${coin.name} icon`}
                  width={16}
                  height={16}
                  className="rounded-full"
                />
                <div className="text-[12px] leading-tight font-medium opacity-80">
                  {coin.name}
                </div>
              </div>
              <span className="text-[12px] leading-tight font-semibold opacity-80">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(coin.current_price)}
              </span>
            </div>
          ))}
          {filterCoins.length > 5 && (
            <Button
              variant={"link"}
              className="w-full text-center text-[12px] my-0.5 cursor-pointer hover:text-primary"
              onClick={() => handleSelect(filterCoins[0].id)}
            >
              See more coins (+{filterCoins.length - 5})
            </Button>
          )}
        </>
      ) : (
        <div className="text-[13px] opacity-70 p-2">No coins found</div>
      )}
    </Card>
  );
}

function Logo() {
  return (
    <header className="flex items-center gap-2  left-10 top-8">
      <div className="size-9 bg-primary rounded-md flex justify-center items-center">
        <SiMarketo className="size-6 text-white" />
      </div>
      <h1 className="font-semibold text-2xl font-poppins max-md:hidden">
        Coin <span className="font-normal text-primary">Dash</span>
      </h1>
    </header>
  );
}
