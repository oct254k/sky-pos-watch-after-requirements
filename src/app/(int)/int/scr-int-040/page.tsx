"use client";

import { ChartCard } from "@/components/common/ChartCard";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const chartData = [
  { month: "2024-08", 여객수: 420, 매출: 5800 },
  { month: "2024-09", 여객수: 450, 매출: 6200 },
  { month: "2024-10", 여객수: 480, 매출: 6500 },
  { month: "2024-11", 여객수: 510, 매출: 6800 },
  { month: "2024-12", 여객수: 550, 매출: 7300 },
  { month: "2025-01", 여객수: 520, 매출: 7800 },
];

interface Row { id: string; month: string; passengers: number; sales: number; perCapita: number; }
const tableData: Row[] = chartData.map((d, i) => ({ id: `R${i + 1}`, month: d.month, passengers: d.여객수 * 1000, sales: d.매출 * 10000, perCapita: Math.round((d.매출 * 10000) / (d.여객수 * 1000)) }));

const columns: Column<Row>[] = [
  { key: "month", label: "월", width: "100px" },
  { key: "passengers", label: "여객수", render: (row) => <span>{Number(row.passengers).toLocaleString()}명</span> },
  { key: "sales", label: "매출", render: (row) => <span>{Number(row.sales).toLocaleString()}원</span> },
  { key: "perCapita", label: "1인당매출", render: (row) => <span>{Number(row.perCapita).toLocaleString()}원</span> },
];

export default function ScrInt040() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">여객 변동별 매출 분석</h2>
      <ChartCard title="여객수 vs 매출 추이">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="여객수" stroke="#2563eb" />
            <Line yAxisId="right" type="monotone" dataKey="매출" stroke="#dc2626" />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
      <DataGrid columns={columns} data={tableData as unknown as Record<string, unknown>[]} />
    </div>
  );
}
