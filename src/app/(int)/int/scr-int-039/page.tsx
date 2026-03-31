"use client";

import { ChartCard } from "@/components/common/ChartCard";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const chartData = [
  { floor: "B1", 매출: 350 },
  { floor: "1F", 매출: 2800 },
  { floor: "2F", 매출: 3200 },
  { floor: "3F", 매출: 15800 },
  { floor: "4F", 매출: 1200 },
];

interface Row { id: string; floor: string; storeCount: number; sales: number; avgSales: number; }
const tableData: Row[] = chartData.map((d, i) => ({ id: `R${i + 1}`, floor: d.floor, storeCount: [1, 3, 2, 3, 1][i], sales: d.매출 * 10000, avgSales: Math.round((d.매출 * 10000) / [1, 3, 2, 3, 1][i]) }));

const columns: Column<Row>[] = [
  { key: "floor", label: "층", width: "80px" },
  { key: "storeCount", label: "매장수", width: "80px" },
  { key: "sales", label: "총매출", render: (row) => <span>{Number(row.sales).toLocaleString()}원</span> },
  { key: "avgSales", label: "매장평균매출", render: (row) => <span>{Number(row.avgSales).toLocaleString()}원</span> },
];

export default function ScrInt039() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">위치별 매출 분석</h2>
      <ChartCard title="층별 매출 현황 (단위: 만원)">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="floor" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="매출" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
      <DataGrid columns={columns} data={tableData as unknown as Record<string, unknown>[]} />
    </div>
  );
}
