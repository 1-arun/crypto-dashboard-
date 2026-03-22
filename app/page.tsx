"use client";
import { useTheme } from "next-themes";
import { Header } from "./components/Header";
import { useMemo } from "react";
import { PriceCards } from "./components/price-cards";
import { CryptoChart } from "./components/crypto-chart";
import { CryptoOverview } from "./components/crypto-overview";
import { MarketHighlight } from "./components/market-highlight";  
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MarketTable } from "./components/market-table";


const queryClient = new QueryClient();

export default function Home() {
  const { theme } = useTheme();
  const bgColor = useMemo(
    () => (theme === "dark" ? "bg-gray-900" : "bg-white"),
    [theme]
  );

  return (
    <div className={`poppins ${bgColor} p-2 min-h-screen`}>
      <QueryClientProvider client={queryClient}>
      <Header />
      <div className="grid grid-cols-[2fr_1.1fr] gap-2">
        <div className="">
          <PriceCards />
          <CryptoChart />
          <MarketTable/>
        </div>
        <div className="m-5 ml-0">
          <CryptoOverview />
          <MarketHighlight />
        </div>
      </div>
      </QueryClientProvider>
    </div>
  );
}
