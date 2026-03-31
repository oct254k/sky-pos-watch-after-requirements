"use client";

import { ChartCard } from "@/components/common/ChartCard";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const chartData = [
  { category: "주류", 국내: 1800, 해외: 2400 },
  { category: "화장품", 국내: 1200, 해외: 3500 },
  { category: "패션잡화", 국내: 800, 해외: 1500 },
  { category: "식품", 국내: 600, 해외: 900 },
  { category: "기타", 국내: 400, 해외: 500 },
];

interface Row { id: string; category: string; domestic: number; international: number; total: number; ratio: string; }
const tableData: Row[] = chartData.map((d, i) => ({ id: `R${i + 1}`, category: d.category, domestic: d.국내 * 10000, international: d.해외 * 10000, total: (d.국내 + d.해외) * 10000, ratio: `${Math.round((d.해외 / (d.국내 + d.해외)) * 100)}%` }));

const columns: Column<Row>[] = [
  { key: "category", label: "품목" },
  { key: "domestic", label: "국내선", render: (row) => <span>{Number(row.domestic).toLocaleString()}원</span> },
  { key: "international", label: "국제선", render: (row) => <span>{Number(row.international).toLocaleString()}원</span> },
  { key: "total", label: "합계", render: (row) => <span>{Number(row.total).toLocaleString()}원</span> },
  { key: "ratio", label: "국제선비율", width: "100px" },
];

export default function ScrInt042() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">면세점 매출 분석</h2>
      <ChartCard title="면세점 품목별 매출 (단위: 만원)">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="국내" fill="#2563eb" />
            <Bar dataKey="해외" fill="#dc2626" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
      <DataGrid columns={columns} data={tableData as unknown as Record<string, unknown>[]} />
    </div>
  );
}
