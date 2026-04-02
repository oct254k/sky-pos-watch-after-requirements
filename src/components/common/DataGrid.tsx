"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useSearchFeedback } from "./SearchFeedbackProvider";

export interface Column<T> {
  key: string;
  label: string;
  width?: string;
  render?: (row: T) => React.ReactNode;
}

interface DataGridProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: Column<any>[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  pageSize?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onRowClick?: (row: any) => void;
  keyField?: string;
  loading?: boolean;
  loadingMessage?: string;
}

export function DataGrid({
  columns,
  data,
  pageSize = 10,
  onRowClick,
  keyField = "id",
  loading,
  loadingMessage = "데이터를 불러오는 중입니다",
}: DataGridProps) {
  const feedback = useSearchFeedback();
  const [page, setPage] = useState(0);
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const sorted = sortKey
    ? [...data].sort((a, b) => {
        const av = a[sortKey], bv = b[sortKey];
        const cmp = String(av ?? "").localeCompare(String(bv ?? ""), "ko");
        return sortDir === "asc" ? cmp : -cmp;
      })
    : data;

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
  const paged = sorted.slice(page * pageSize, (page + 1) * pageSize);

  const handleSort = (key: string) => {
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else { setSortKey(key); setSortDir("asc"); }
  };

  const isLoading = loading ?? feedback?.loading ?? false;
  const resolvedLoadingMessage = loading !== undefined ? loadingMessage : feedback?.loadingMessage ?? loadingMessage;

  return (
    <div className="relative">
      <div className="overflow-x-auto rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((col) => (
                <TableHead
                  key={col.key}
                  style={{ width: col.width }}
                  className="cursor-pointer select-none text-xs"
                  onClick={() => handleSort(col.key)}
                >
                  {col.label}
                  {sortKey === col.key && (sortDir === "asc" ? " ▲" : " ▼")}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paged.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center py-8 text-muted-foreground">
                  데이터가 없습니다.
                </TableCell>
              </TableRow>
            ) : (
              paged.map((row, ri) => (
                <TableRow
                  key={String(row[keyField] ?? ri)}
                  className={onRowClick ? "cursor-pointer hover:bg-muted/50" : ""}
                  onClick={() => onRowClick?.(row)}
                >
                  {columns.map((col) => (
                    <TableCell key={col.key} className="text-sm">
                      {col.render ? col.render(row) : String(row[col.key] ?? "")}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-md bg-white/70 backdrop-blur-[1px]">
          <div className="mx-4 flex items-center gap-2 rounded-full border border-[#d7e2ee] bg-white px-4 py-2 text-center text-sm font-medium text-[#334155] shadow-[0_6px_18px_rgba(15,23,42,0.08)]">
            <Loader2 className="h-4 w-4 animate-spin text-[#1d4f91]" />
            {resolvedLoadingMessage}
          </div>
        </div>
      )}
      {totalPages > 1 && (
        <div className="mt-2 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>총 {data.length}건 (페이지 {page + 1}/{totalPages})</span>
          <div className="flex gap-1">
            <Button size="sm" variant="outline" disabled={page === 0} onClick={() => setPage(page - 1)}>이전</Button>
            <Button size="sm" variant="outline" disabled={page >= totalPages - 1} onClick={() => setPage(page + 1)}>다음</Button>
          </div>
        </div>
      )}
    </div>
  );
}
