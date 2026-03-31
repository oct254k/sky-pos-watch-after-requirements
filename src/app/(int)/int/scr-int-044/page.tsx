"use client";

import { ChartCard } from "@/components/common/ChartCard";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const chartData = [
  { range: "~1만", 건수: 450 }, { range: "1~3만", 건수: 820 }, { range: "3~5만", 건수: 350 },
  { range: "5~10만", 건수: 280 }, { range: "10~30만", 건수: 120 }, { range: "30만~", 건수: 45 },
];

interface Row { id: string; range: string; count: number; sales: number; ratio: string; }
const tableData: Row[] = chartData.map((d, i) => ({ id: `R${i + 1}`, range: d.range, count: d.건수, sales: d.건수 * [5000, 20000, 40000, 75000, 200000, 500000][i], ratio: `${Math.round((d.건수 / 2065) * 100)}%` }));

const columns: Column<Row>[] = [
  { key: "range", label: "금액대" },
  { key: "count", label: "거래건수", width: "90px" },
  { key: "sales", label: "매출액", render: (row) => <span>{Number(row.sales).toLocaleString()}원</span> },
  { key: "ratio", label: "비율", width: "100px" },
];

export default function ScrInt044() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">금액대별 매출 분석</h2>
      <ChartCard title="금액대별 거래건수 분포">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="range" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="건수" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
      <DataGrid columns={columns} data={tableData as unknown as Record<string, unknown>[]} />
    </div>
  );
}
