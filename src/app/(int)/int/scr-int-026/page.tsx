"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

interface CompareRow { id: string; storeName: string; closeDate: string; posSales: number; vanSales: number; diff: number; diffRate: number; matchStatus: string; }

const compareData: CompareRow[] = [
  { id: "V001", storeName: "1층 A-101", closeDate: "2025-01-15", posSales: 1850000, vanSales: 1850000, diff: 0, diffRate: 0, matchStatus: "일치" },
  { id: "V002", storeName: "2층 B-201", closeDate: "2025-01-15", posSales: 3200000, vanSales: 3185000, diff: 15000, diffRate: 0.47, matchStatus: "불일치" },
  { id: "V003", storeName: "3층 C-301", closeDate: "2025-01-15", posSales: 15800000, vanSales: 15800000, diff: 0, diffRate: 0, matchStatus: "일치" },
  { id: "V004", storeName: "1층 A-105", closeDate: "2025-01-15", posSales: 650000, vanSales: 650000, diff: 0, diffRate: 0, matchStatus: "일치" },
  { id: "V005", storeName: "1층 A-101", closeDate: "2025-01-16", posSales: 2100000, vanSales: 2072000, diff: 28000, diffRate: 1.33, matchStatus: "불일치" },
];

const columns: Column<CompareRow>[] = [
  { key: "id", label: "ID", width: "80px" },
  { key: "storeName", label: "매장명" },
  { key: "closeDate", label: "마감일", width: "120px" },
  { key: "posSales", label: "POS매출", width: "130px", render: (row) => <span>{Number(row.posSales).toLocaleString()}원</span> },
  { key: "vanSales", label: "VAN매출", width: "130px", render: (row) => <span>{Number(row.vanSales).toLocaleString()}원</span> },
  { key: "diff", label: "차이", width: "120px", render: (row) => <span className={Number(row.diff) > 0 ? "text-red-600 font-medium" : ""}>{Number(row.diff).toLocaleString()}원</span> },
  { key: "diffRate", label: "차이율(%)", width: "100px" },
  { key: "matchStatus", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.matchStatus === "일치" ? "정상" : "확인필요"} /> },
];

export default function ScrInt026() {
  const [date, setDate] = useState("");
  const [data, setData] = useState(compareData);

  const handleSearch = () => setData(compareData.filter((d) => !date || d.closeDate === date));
  const matchCount = data.filter((d) => d.matchStatus === "일치").length;
  const mismatchCount = data.filter((d) => d.matchStatus === "불일치").length;

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">일마감/VAN결제 검증</h2>
      <SearchPanel onSearch={handleSearch} onReset={() => { setDate(""); setData(compareData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">마감일</label>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-40" />
        </div>
      </SearchPanel>
      <div className="grid grid-cols-3 gap-4">
        <Card><CardContent className="pt-4"><p className="text-xs text-muted-foreground">총 검증</p><p className="text-2xl font-bold">{data.length}건</p></CardContent></Card>
        <Card><CardContent className="pt-4"><p className="text-xs text-muted-foreground">일치</p><p className="text-2xl font-bold text-green-600">{matchCount}건</p></CardContent></Card>
        <Card><CardContent className="pt-4"><p className="text-xs text-muted-foreground">불일치</p><p className="text-2xl font-bold text-red-600">{mismatchCount}건</p></CardContent></Card>
      </div>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} />
    </div>
  );
}
