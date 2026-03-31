"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { ChartCard } from "@/components/common/ChartCard";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const chartData = [
  { metric: "총매출", 금월: 7850, 전월: 7200 },
  { metric: "면세매출", 금월: 5500, 전월: 5000 },
  { metric: "비면세매출", 금월: 2350, 전월: 2200 },
  { metric: "거래건수", 금월: 3200, 전월: 2980 },
];

interface Row { id: string; metric: string; current: number; previous: number; change: string; }
const tableData: Row[] = chartData.map((d, i) => ({ id: `R${i + 1}`, metric: d.metric, current: d.금월 * 10000, previous: d.전월 * 10000, change: `${(((d.금월 - d.전월) / d.전월) * 100).toFixed(1)}%` }));

const columns: Column<Row>[] = [
  { key: "metric", label: "지표" },
  { key: "current", label: "금월", render: (row) => <span>{Number(row.current).toLocaleString()}</span> },
  { key: "previous", label: "전월", render: (row) => <span>{Number(row.previous).toLocaleString()}</span> },
  { key: "change", label: "증감률", width: "100px" },
];

export default function ScrInt046() {
  const [yearMonth, setYearMonth] = useState("2025-01");

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">사용자 구성 매출분석</h2>
      <SearchPanel>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">기준년월</label>
          <Input type="month" value={yearMonth} onChange={(e) => setYearMonth(e.target.value)} className="w-40" />
        </div>
      </SearchPanel>
      <ChartCard title="주요 매출지표 비교 (단위: 만원)">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="metric" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="금월" fill="#2563eb" />
            <Bar dataKey="전월" fill="#9ca3af" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
      <DataGrid columns={columns} data={tableData as unknown as Record<string, unknown>[]} />
    </div>
  );
}
