"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

type PdfRowData = {
  name?: string;
  price?: number;
  volume?: number;
  marketRank?: number;
  marketCap?: number;
  highIn24?: number;
  lowIn24?: number;
  changePercentage?: number;
};

export function CryptoTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const handleDownloadPDF = () => {
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });

    // Add title
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("Cryptocurrency Market Data", 14, 15);

    // Add timestamp
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const currentDate = new Date().toLocaleString();
    doc.text(`Generated on: ${currentDate}`, 14, 22);

    // Prepare table data
    const tableHeaders = [
      "Name",
      "Price",
      "Volume",
      "Market Rank",
      "Market Cap",
      "Highest Price",
      "Lowest Price",
      "24h Change (%)",
    ];

    const tableRows = table.getRowModel().rows.map((row) => {
      const original = row.original as PdfRowData;
      return [
        original.name ?? "",
        `$${Number(original.price ?? 0).toFixed(2)}`,
        `$${Number(original.volume ?? 0).toLocaleString()}`,
        Number(original.marketRank ?? 0),
        `$${Number(original.marketCap ?? 0).toLocaleString()}`,
        `$${Number(original.highIn24 ?? 0).toFixed(2)}`,
        `$${Number(original.lowIn24 ?? 0).toFixed(2)}`,
        `${Number(original.changePercentage ?? 0).toFixed(2)}%`,
      ];
    });

    // Generate table
    autoTable(doc, {
      head: [tableHeaders],
      body: tableRows,
      startY: 28,
      theme: "grid",
      headStyles: {
        fillColor: [147, 51, 234],
        textColor: 255,
        fontStyle: "bold",
        halign: "center",
      },
      bodyStyles: {
        fontSize: 9,
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245],
      },
      margin: { top: 28 },
    });

    // Save the PDF
    doc.save("cryptocurrencies.pdf");
  };

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      columnFilters,
      sorting,
    },
  });

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center py-4 mb-6 gap-4">
        {/* input search */}
        <Input
          placeholder="Filter by crypto..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm h-10 border-gray-300"
        />
        <Button
          onClick={handleDownloadPDF}
          className="bg-purple-600 hover:bg-purple-700 text-white h-10"
        >
          Download as PDF
        </Button>
      </div>
      <div className="flex-1 overflow-y-auto overflow-x-hidden rounded-lg border border-gray-200 shadow-sm min-w-0">
        <Table className="w-full text-sm table-fixed">
          <TableHeader className="sticky top-0 bg-gray-50 border-b border-gray-200 z-10">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border-b border-gray-200"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="px-4 py-3 text-left">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="px-4 py-3">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-gray-500"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* Pagination Controls */}
      <div className="flex items-center justify-between py-6 mt-6 px-2">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-700">
            Rows Per Page
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="border border-gray-300 rounded px-3 py-1 text-sm font-medium bg-white hover:bg-gray-50 cursor-pointer"
          >
            {[4, 10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-gray-700">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </span>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            className="font-semibold"
          >
            ⏮
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="font-semibold"
          >
            ◀
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="font-semibold"
          >
            ▶
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
            className="font-semibold"
          >
            ⏭
          </Button>
        </div>
      </div>
    </div>
  );
}
