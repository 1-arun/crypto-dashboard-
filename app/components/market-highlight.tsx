"use client";

import { Card } from "@/components/ui/card";
import { BiCategory } from "react-icons/bi";
import { useAllCategories } from "../hooks/useAllCategories";
import { useExchanges } from "../hooks/useAllExchanges";
import { useMemo } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { IoStorefrontOutline } from "react-icons/io5";
import { Exchange } from "../data/exchanges";

type Category = { name: string }; // Define the Category type

// Type guard to check if an object is of type Category
function isCategory(category: unknown): category is Category {
  return (
    typeof category === "object" &&
    category !== null &&
    "name" in category &&
    typeof (category as { name?: unknown }).name === "string"
  );
}

export function MarketHighlight() {
  const {
    data: allCategoriesData,
    isLoading: isCategoryLoading,
    error: isCategoryError,
  } = useAllCategories();

  const {
    data: allExchanges,
    isLoading: isExchangesLoading,
    error: isExchangeError,
  } = useExchanges();

  const categories = useMemo(() => {
    if (allCategoriesData) {
      return allCategoriesData
        .slice(0, 3)
        .map((category: unknown) => {
          if (isCategory(category)) {
            return { name: category.name };
          }
          return null;
        })
        .filter((item): item is Category => item !== null);
    }
    return null;
  }, [allCategoriesData]);

  const totalPairs = useMemo(() => {
    if (allExchanges && Array.isArray(allExchanges)) {
      return (allExchanges as Exchange[]).reduce(
        (sum: number, exchange) => sum + exchange.trade_volume_24h_btc,
        0
      );
    }
    return null;
  }, [allExchanges]);

  return (
    <div>
      <Card className="p-6 py-7 space-y-6 shadow-none border mt-5">
        <h2 className="text-xl font-semibold">Market Highlights</h2>
        {/* Show Error if data is fails to load */}
        {isCategoryError ? (
          <div className="text-center text-sm text-red-500">
            Failed to load categories. Please try again later.
          </div>
        ) : categories !== null && !isCategoryLoading ? (
          // Render category if available
          <div className="space-y-3">
            <CryptoCategories categories={categories} />
          </div>
        ) : (
          // Show Skeleton while loading
          <div className="text-center text-sm text-muted-foreground">
            <Skeleton className="w-full h-28 rounded-md" />
          </div>
        )}

        {/*Show Error if exchanges data fails to load */}
        {isExchangeError ? (
          <div className="text-center text-sm text-red-500">
            Failed to load exchanges data. Please try again later.
          </div>
        ) : allExchanges !== null && !isExchangesLoading ? (
          // Render categories if Available
          <div className="space-y-3">
            <MarketPaires totalPairs={totalPairs} />
          </div>
        ) : (
          // Show Skeleton while loading
          <div className="text-center text-sm text-muted-foreground">
            <Skeleton className="w-full h-11 rounded-md" />
          </div>
        )}
      </Card>
    </div>
  );
}

function MarketPaires({ totalPairs }: { totalPairs: number | null }) {
  const formattedNumber = (num: number) =>
    new Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(num);

  return (
    <Card className="p-4 flex items-center justify-between shadow-none border">
      <div className="flex items-center gap-3">
        <div className="bg-primary/15 size-10 flex items-center justify-center text-primary rounded-md">
          <IoStorefrontOutline size={18} />
        </div>
        <p className="text-sm font-medium text-muted-foreground">
          Market Pairs
        </p>
      </div>
      <p className="text-xl font-bold text-primary">
        {formattedNumber(totalPairs || 0)}
      </p>
    </Card>
  );
}

function CryptoCategories({ categories }: { categories: Category[] }) {
  return (
    <Card className="p-4 shadow-none border">
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-primary/15 size-10 flex items-center justify-center text-primary rounded-md">
          <BiCategory size={18} />
        </div>
        <p className="text-sm font-medium text-muted-foreground">
          Top Categories
        </p>
      </div>

      <div className="flex flex-wrap gap-2 ml-13">
        {categories.map((category, index) => (
          <span
            key={index}
            className="text-xs font-medium bg-primary/10 px-3 py-1.5 text-primary rounded-md"
          >
            {category.name}
          </span>
        ))}
      </div>
    </Card>
  );
}
