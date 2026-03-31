"use client";

import { ChartCard } from "@/components/common/ChartCard";
import { Card, CardContent } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const monthlyData = [
  { month: "2024-08", 면세: 4200, 비면세: 1800 },
  { month: "2024-09", 면세: 4500, 비면세: 1900 },
  { month: "2024-10", 면세: 4800, 비면세: 2000 },
  { month: "2024-11", 면세: 4600, 비면세: 1850 },
  { month: "2024-12", 면세: 5200, 비면세: 2100 },
  { month: "2025-01", 면세: 5500, 비면세: 2300 },
];

const kpis = [
  { label: "당월 누적매출", value: "78.5억원", change: "+8.3% (전월비)" },
  { label: "면세점 매출비중", value: "72.5%", change: "" },
  { label: "영업매장 수", value: "9개", change: "" },
  { label: "계약업체 수", value: "4개", change: "" },
];

export default function ScrInt003() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">누적매출 현황 분석</h2>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {kpis.map((k) => (
          <Card key={k.label}>
            <CardContent className="pt-4">
              <p className="text-xs text-muted-foreground">{k.label}</p>
              <p className="mt-1 text-2xl font-bold">{k.value}</p>
              {k.change && <p className="text-xs text-muted-foreground">{k.change}</p>}
            </CardContent>
          </Card>
        ))}
      </div>
      <ChartCard title="월별 누적매출 현황 (단위: 백만원)">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="면세" fill="#2563eb" />
            <Bar dataKey="비면세" fill="#16a34a" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}
