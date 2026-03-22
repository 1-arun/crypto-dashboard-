"use client";

import * as React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  CommandList,
  Command,
  CommandInput,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

// Define the type of a single coin option
export interface CryptoComboBox {
  value: string; // coin id
  label: string; // coin name
  icon: string; // Url for the coin icon
  price: string;
  change: string;
}

interface CoinComboboxProps {
  coins: CryptoComboBox[] | undefined;
  isLoading: boolean;
  isError: boolean;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onCoinSelect?: (coinId: string) => void;
}

export default function CoinCombobox({
  coins,
  isLoading,
  isError,
  value,
  setValue,
  onCoinSelect,
}: CoinComboboxProps) {
  const [open, setOpen] = React.useState<boolean>(false);
  if (isLoading) {
    return (
      <div className="flex flex-col gap-2">
        <Skeleton className="w-36 h-11 " />
        <Skeleton className="w-32 h-7 " />
      </div>
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between h-11"
          disabled={isLoading}
        >
          {value ? (
            <div className="flex gap-2 items-center">
              {coins?.find((coin) => coin.value === value)?.icon ? (
                <Image
                  src={
                    coins.find((coin) => coin.value === value)!.icon as string
                  }
                  alt={` ${
                    coins.find((coin) => coin.value === value)!.label || "coin"
                  } icon `}
                  className="w-5 h-5 mr-2"
                  width={20}
                  height={20}
                />
              ) : null}
              <span>{coins?.find((coin) => coin.value === value)?.label}</span>
            </div>
          ) : (
            "Select a coin..."
          )}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search coin..." />
          <CommandList>
            {isLoading ? (
              <CommandEmpty>Loading...</CommandEmpty>
            ) : isError ? (
              <CommandEmpty>Failed to load coins.</CommandEmpty>
            ) : coins && coins.length === 0 ? (
              <CommandEmpty>No coin found.</CommandEmpty>
            ) : (
              <CommandGroup>
                {coins?.map((coin) => (
                  <CommandItem
                    key={coin.value}
                    value={coin.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue);
                      if (onCoinSelect) {
                        onCoinSelect(currentValue);
                      }
                      setOpen(false);
                    }}
                    className="flex items-center"
                  >
                    <Image
                      src={coin.icon}
                      alt={`${coin.label} icon`}
                      className="w-5 h-5 mr-2"
                      width={20}
                      height={20}
                    />
                    {coin.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === coin.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
