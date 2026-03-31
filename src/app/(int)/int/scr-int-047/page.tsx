"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { ChartCard } from "@/components/common/ChartCard";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const chartData = [
  { date: "01/10", 전대매장A: 120, 전대매장B: 85 },
  { date: "01/11", 전대매장A: 135, 전대매장B: 92 },
  { date: "01/12", 전대매장A: 110, 전대매장B: 78 },
  { date: "01/13", 전대매장A: 145, 전대매장B: 98 },
  { date: "01/14", 전대매장A: 128, 전대매장B: 88 },
  { date: "01/15", 전대매장A: 155, 전대매장B: 105 },
];

interface Row { id: string; date: string; storeName: string; sales: number; count: number; }
const tableData: Row[] = [
  { id: "R1", date: "2025-01-15", storeName: "2층 B-202 (전대)", sales: 1550000, count: 42 },
  { id: "R2", date: "2025-01-14", storeName: "2층 B-202 (전대)", sales: 1280000, count: 38 },
  { id: "R3", date: "2025-01-13", storeName: "2층 B-202 (전대)", sales: 1450000, count: 45 },
];

const columns: Column<Row>[] = [
  { key: "date", label: "일자", width: "120px" },
  { key: "storeName", label: "전대매장명" },
  { key: "sales", label: "매출액", render: (row) => <span>{Number(row.sales).toLocaleString()}원</span> },
  { key: "count", label: "거래건수", width: "90px" },
];

export default function ScrInt047() {
  const [date, setDate] = useState("");

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">전대매장 매출 일집계</h2>
      <SearchPanel>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">기준일</label>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-40" />
        </div>
      </SearchPanel>
      <ChartCard title="전대매장 일별 매출 추이 (단위: 만원)">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="전대매장A" stroke="#2563eb" />
            <Line type="monotone" dataKey="전대매장B" stroke="#16a34a" />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
      <DataGrid columns={columns} data={tableData as unknown as Record<string, unknown>[]} />
    </div>
  );
}
