declare module "jspdf-autotable" {
  import { jsPDF } from "jspdf";

  type StyleOptions = Record<string, unknown>;

  interface AutoTableOptions {
    head?: unknown[][];
    body?: unknown[][];
    startY?: number;
    theme?: "striped" | "grid" | "plain";
    headStyles?: StyleOptions;
    bodyStyles?: StyleOptions;
    alternateRowStyles?: StyleOptions;
    margin?: { top?: number; right?: number; bottom?: number; left?: number };
  }

  function autoTable(doc: jsPDF, options: AutoTableOptions): void;

  export default autoTable;
}
