"use client";

import { ChartCard } from "@/components/common/ChartCard";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const chartData = [
  { store: "3층 C-301", 면적당매출: 1053 },
  { store: "2층 B-201", 면적당매출: 400 },
  { store: "1층 A-105", 면적당매출: 325 },
  { store: "1층 A-101", 면적당매출: 406 },
  { store: "4층 E-401", 면적당매출: 300 },
];

interface Row { id: string; store: string; area: number; sales: number; salesPerArea: number; }
const tableData: Row[] = [
  { id: "R1", store: "3층 C-301", area: 150, sales: 158000000, salesPerArea: 1053333 },
  { id: "R2", store: "2층 B-201", area: 80, sales: 32000000, salesPerArea: 400000 },
  { id: "R3", store: "1층 A-105", area: 20, sales: 6500000, salesPerArea: 325000 },
  { id: "R4", store: "1층 A-101", area: 45.5, sales: 18500000, salesPerArea: 406593 },
  { id: "R5", store: "4층 E-401", area: 40, sales: 12000000, salesPerArea: 300000 },
];

const columns: Column<Row>[] = [
  { key: "store", label: "매장명" },
  { key: "area", label: "면적(m2)", width: "90px" },
  { key: "sales", label: "월매출", render: (row) => <span>{Number(row.sales).toLocaleString()}원</span> },
  { key: "salesPerArea", label: "m2당매출", render: (row) => <span>{Number(row.salesPerArea).toLocaleString()}원</span> },
];

export default function ScrInt045() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">매장 면적별 매출 분석</h2>
      <ChartCard title="매장별 면적당 매출 (단위: 만원/m2)">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="store" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="면적당매출" fill="#16a34a" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
      <DataGrid columns={columns} data={tableData as unknown as Record<string, unknown>[]} />
    </div>
  );
}
