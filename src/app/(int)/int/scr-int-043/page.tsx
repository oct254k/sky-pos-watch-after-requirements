"use client";

import { ChartCard } from "@/components/common/ChartCard";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#2563eb", "#16a34a", "#f59e0b", "#9333ea"];
const chartData = [
  { name: "신용카드", value: 62 },
  { name: "체크카드", value: 18 },
  { name: "현금", value: 12 },
  { name: "간편결제", value: 8 },
];

interface Row { id: string; method: string; sales: number; count: number; ratio: string; }
const tableData: Row[] = chartData.map((d, i) => ({ id: `R${i + 1}`, method: d.name, sales: d.value * 1200000, count: d.value * 45, ratio: `${d.value}%` }));

const columns: Column<Row>[] = [
  { key: "method", label: "결제수단" },
  { key: "sales", label: "매출액", render: (row) => <span>{Number(row.sales).toLocaleString()}원</span> },
  { key: "count", label: "거래건수", width: "90px" },
  { key: "ratio", label: "비율", width: "100px" },
];

export default function ScrInt043() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">결제수단별 매출 분석</h2>
      <ChartCard title="결제수단별 매출 비중">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={chartData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label={({ name, value }) => `${name} ${value}%`}>
              {chartData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>
      <DataGrid columns={columns} data={tableData as unknown as Record<string, unknown>[]} />
    </div>
  );
}
