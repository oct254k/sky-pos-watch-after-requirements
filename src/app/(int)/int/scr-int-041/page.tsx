"use client";

import { ChartCard } from "@/components/common/ChartCard";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const chartData = [
  { time: "06-08", 매출: 120 }, { time: "08-10", 매출: 450 }, { time: "10-12", 매출: 820 },
  { time: "12-14", 매출: 1100 }, { time: "14-16", 매출: 950 }, { time: "16-18", 매출: 780 },
  { time: "18-20", 매출: 650 }, { time: "20-22", 매출: 320 },
];

interface Row { id: string; timeSlot: string; sales: number; count: number; avgSale: number; }
const tableData: Row[] = chartData.map((d, i) => ({ id: `R${i + 1}`, timeSlot: d.time, sales: d.매출 * 10000, count: d.매출 * 2, avgSale: 5000 }));

const columns: Column<Row>[] = [
  { key: "timeSlot", label: "시간대", width: "100px" },
  { key: "sales", label: "매출액", render: (row) => <span>{Number(row.sales).toLocaleString()}원</span> },
  { key: "count", label: "거래건수", width: "90px" },
  { key: "avgSale", label: "건당평균", render: (row) => <span>{Number(row.avgSale).toLocaleString()}원</span> },
];

export default function ScrInt041() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">시간대별 매출 분석</h2>
      <ChartCard title="시간대별 매출 (단위: 만원)">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
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
