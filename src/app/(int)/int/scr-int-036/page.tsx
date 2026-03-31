"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { ChartCard } from "@/components/common/ChartCard";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const chartData = [
  { date: "01/01", 매출: 2100, 건수: 320 },
  { date: "01/05", 매출: 2450, 건수: 365 },
  { date: "01/10", 매출: 2800, 건수: 420 },
  { date: "01/15", 매출: 2350, 건수: 350 },
  { date: "01/20", 매출: 3100, 건수: 480 },
  { date: "01/25", 매출: 2900, 건수: 445 },
  { date: "01/31", 매출: 3200, 건수: 510 },
];

interface TrendRow { id: string; date: string; sales: number; count: number; avgSale: number; }
const tableData: TrendRow[] = chartData.map((d, i) => ({ id: `T${i + 1}`, date: `2025-${d.date.replace("/", "-")}`, sales: d.매출 * 10000, count: d.건수, avgSale: Math.round((d.매출 * 10000) / d.건수) }));

const columns: Column<TrendRow>[] = [
  { key: "date", label: "일자", width: "120px" },
  { key: "sales", label: "매출액", render: (row) => <span>{Number(row.sales).toLocaleString()}원</span> },
  { key: "count", label: "거래건수", width: "90px" },
  { key: "avgSale", label: "건당평균", render: (row) => <span>{Number(row.avgSale).toLocaleString()}원</span> },
];

export default function ScrInt036() {
  const [startDate, setStartDate] = useState("2025-01-01");
  const [endDate, setEndDate] = useState("2025-01-31");

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">매출 추이 분석</h2>
      <SearchPanel>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">시작일</label>
          <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-40" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">종료일</label>
          <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-40" />
        </div>
      </SearchPanel>
      <ChartCard title="매출 추이 (단위: 만원)">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="매출" stroke="#2563eb" />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
      <DataGrid columns={columns} data={tableData as unknown as Record<string, unknown>[]} />
    </div>
  );
}
