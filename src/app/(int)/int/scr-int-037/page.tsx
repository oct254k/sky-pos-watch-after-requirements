"use client";

import { ChartCard } from "@/components/common/ChartCard";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const chartData = [
  { company: "스카이푸드", 매출: 5200, 전월: 4800 },
  { company: "에어라운지", 매출: 8800, 전월: 8200 },
  { company: "듀티프리마트", 매출: 45000, 전월: 42000 },
  { company: "클라우드카페", 매출: 1950, 전월: 1800 },
];

interface Row { id: string; company: string; sales: number; prevSales: number; growth: string; }
const tableData: Row[] = chartData.map((d, i) => ({ id: `R${i + 1}`, company: d.company, sales: d.매출 * 10000, prevSales: d.전월 * 10000, growth: `${(((d.매출 - d.전월) / d.전월) * 100).toFixed(1)}%` }));

const columns: Column<Row>[] = [
  { key: "company", label: "업체명" },
  { key: "sales", label: "당월매출", render: (row) => <span>{Number(row.sales).toLocaleString()}원</span> },
  { key: "prevSales", label: "전월매출", render: (row) => <span>{Number(row.prevSales).toLocaleString()}원</span> },
  { key: "growth", label: "증감률", width: "100px" },
];

export default function ScrInt037() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">업체별 매출 분석</h2>
      <ChartCard title="업체별 매출 비교 (단위: 만원)">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="company" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="매출" fill="#2563eb" />
            <Bar dataKey="전월" fill="#9ca3af" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
      <DataGrid columns={columns} data={tableData as unknown as Record<string, unknown>[]} />
    </div>
  );
}
