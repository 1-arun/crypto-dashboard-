import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export type CrytopData = {
  name: string;
  icon: string;
  price: number;
  volume: number;
  marketRank: number;
  marketCap: number;
  changePercentage: number;
  highIn24: number;
  lowIn24: number;
};

export const cryptoColumns: ColumnDef<CrytopData>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <button
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex items-center gap-1 font-semibold text-left w-full"
      >
        Name{" "}
        <span className="flex flex-col text-xs leading-none">
          <span
            className={
              column.getIsSorted() === "asc" ? "text-black" : "text-gray-300"
            }
          >
            ▲
          </span>
          <span
            className={
              column.getIsSorted() === "desc" ? "text-black" : "text-gray-300"
            }
          >
            ▼
          </span>
        </span>
      </button>
    ),
    cell: ({ row }) => (
      <div className="flex items-center space-x-2">
        <Image
          src={row.original.icon}
          alt={row.original.name}
          className="w-6 h-6"
          width={20}
          height={20}
        />
        <span className="font-medium">{row.original.name}</span>
      </div>
    ),
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <button
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex items-center gap-1 font-semibold"
      >
        Price
        <span className="flex flex-col text-xs leading-none">
          <span
            className={
              column.getIsSorted() === "asc" ? "text-black" : "text-gray-300"
            }
          >
            ▲
          </span>
          <span
            className={
              column.getIsSorted() === "desc" ? "text-black" : "text-gray-300"
            }
          >
            ▼
          </span>
        </span>
      </button>
    ),
    cell: ({ getValue }) => {
      const price = getValue() as number;
      const formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(price);
      return <span className="font-medium">{formattedPrice}</span>;
    },
  },
  {
    accessorKey: "volume",
    header: ({ column }) => (
      <button
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex items-center gap-1 font-semibold"
      >
        Volume
        <span className="flex flex-col text-xs leading-none">
          <span
            className={
              column.getIsSorted() === "asc" ? "text-black" : "text-gray-300"
            }
          >
            ▲
          </span>
          <span
            className={
              column.getIsSorted() === "desc" ? "text-black" : "text-gray-300"
            }
          >
            ▼
          </span>
        </span>
      </button>
    ),
    cell: ({ getValue }) => {
      const volume = getValue() as number;
      return <span className="font-medium">${volume.toLocaleString()}</span>;
    },
  },
  {
    accessorKey: "marketRank",
    header: ({ column }) => (
      <button
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex items-center gap-1 font-semibold"
      >
        Market Rank
        <span className="flex flex-col text-xs leading-none">
          <span
            className={
              column.getIsSorted() === "asc" ? "text-black" : "text-gray-300"
            }
          >
            ▲
          </span>
          <span
            className={
              column.getIsSorted() === "desc" ? "text-black" : "text-gray-300"
            }
          >
            ▼
          </span>
        </span>
      </button>
    ),
    cell: ({ getValue }) => (
      <span className="font-medium">{String(getValue())}</span>
    ),
  },
  {
    accessorKey: "marketCap",
    header: ({ column }) => (
      <button
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex items-center gap-1 font-semibold"
      >
        Market Cap
        <span className="flex flex-col text-xs leading-none">
          <span
            className={
              column.getIsSorted() === "asc" ? "text-black" : "text-gray-300"
            }
          >
            ▲
          </span>
          <span
            className={
              column.getIsSorted() === "desc" ? "text-black" : "text-gray-300"
            }
          >
            ▼
          </span>
        </span>
      </button>
    ),
    cell: ({ getValue }) => {
      const cap = getValue() as number;
      return <span className="font-medium">${cap.toLocaleString()}</span>;
    },
  },
  {
    accessorKey: "highIn24",
    header: ({ column }) => (
      <button
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex items-center gap-1 font-semibold"
      >
        Highest Price
        <span className="flex flex-col text-xs leading-none">
          <span
            className={
              column.getIsSorted() === "asc" ? "text-black" : "text-gray-300"
            }
          >
            ▲
          </span>
          <span
            className={
              column.getIsSorted() === "desc" ? "text-black" : "text-gray-300"
            }
          >
            ▼
          </span>
        </span>
      </button>
    ),
    cell: ({ getValue }) => {
      const price = getValue() as number;
      const formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(price);
      return <span className="font-medium">{formattedPrice}</span>;
    },
  },
  {
    accessorKey: "lowIn24",
    header: ({ column }) => (
      <button
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex items-center gap-1 font-semibold"
      >
        Lowest Price
        <span className="flex flex-col text-xs leading-none">
          <span
            className={
              column.getIsSorted() === "asc" ? "text-black" : "text-gray-300"
            }
          >
            ▲
          </span>
          <span
            className={
              column.getIsSorted() === "desc" ? "text-black" : "text-gray-300"
            }
          >
            ▼
          </span>
        </span>
      </button>
    ),
    cell: ({ getValue }) => {
      const price = getValue() as number;
      const formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(price);
      return <span className="font-medium">{formattedPrice}</span>;
    },
  },
  {
    accessorKey: "changePercentage",
    header: ({ column }) => (
      <button
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex items-center gap-1 font-semibold"
      >
        24h Change
        <span className="flex flex-col text-xs leading-none">
          <span
            className={
              column.getIsSorted() === "asc" ? "text-black" : "text-gray-300"
            }
          >
            ▲
          </span>
          <span
            className={
              column.getIsSorted() === "desc" ? "text-black" : "text-gray-300"
            }
          >
            ▼
          </span>
        </span>
      </button>
    ),
    cell: ({ getValue }) => {
      const value = getValue() as number;
      const colorClass = value >= 0 ? "text-green-500" : "text-red-500";
      return (
        <span className={`font-semibold ${colorClass}`}>
          {value.toFixed(2)}%
        </span>
      );
    },
  },
];
