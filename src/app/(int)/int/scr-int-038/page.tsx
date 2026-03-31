"use client";

import { ChartCard } from "@/components/common/ChartCard";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const COLORS = ["#2563eb", "#16a34a", "#dc2626", "#f59e0b", "#9333ea", "#06b6d4"];
const chartData = [
  { name: "커피", value: 35 },
  { name: "한식", value: 20 },
  { name: "면세-주류", value: 18 },
  { name: "면세-화장품", value: 15 },
  { name: "베이커리", value: 7 },
  { name: "기타", value: 5 },
];

interface Row { id: string; category: string; sales: number; ratio: string; count: number; }
const tableData: Row[] = chartData.map((d, i) => ({ id: `R${i + 1}`, category: d.name, sales: d.value * 1500000, ratio: `${d.value}%`, count: d.value * 12 }));

const columns: Column<Row>[] = [
  { key: "category", label: "품목분류" },
  { key: "sales", label: "매출액", render: (row) => <span>{Number(row.sales).toLocaleString()}원</span> },
  { key: "ratio", label: "비율", width: "100px" },
  { key: "count", label: "거래건수", width: "90px" },
];

export default function ScrInt038() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">품목별 매출 분석</h2>
      <ChartCard title="품목별 매출 비중">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={chartData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label={({ name, value }) => `${name} ${value}%`}>
              {chartData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
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
