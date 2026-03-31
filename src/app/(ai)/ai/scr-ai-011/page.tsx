"use client";

import { MockBanner } from "@/components/common/MockBanner";
import { ChartCard } from "@/components/common/ChartCard";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Card, CardContent } from "@/components/ui/card";
import { aiDetections } from "@/data/mock/aiDetections";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const riskCount = {
  high: aiDetections.filter((d) => d.riskLevel === "high").length,
  medium: aiDetections.filter((d) => d.riskLevel === "medium").length,
  low: aiDetections.filter((d) => d.riskLevel === "low").length,
};

const pieData = [
  { name: "높음", value: riskCount.high },
  { name: "보통", value: riskCount.medium },
  { name: "낮음", value: riskCount.low },
];
const COLORS = ["#ef4444", "#f59e0b", "#22c55e"];

export default function ScrAi011() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns: Column<any>[] = [
    { key: "id", label: "ID", width: "80px" },
    { key: "type", label: "유형", width: "100px" },
    { key: "storeName", label: "매장" },
    { key: "riskLevel", label: "위험도", width: "100px", render: (r) => <StatusBadge status={r.riskLevel === "high" ? "확인필요" : r.riskLevel === "medium" ? "조사중" : "정상처리"} /> },
    { key: "score", label: "점수", width: "100px" },
    { key: "status", label: "상태", width: "100px", render: (r) => <StatusBadge status={r.status} /> },
  ];

  return (
    <div className="space-y-4">
      <MockBanner message="AI 분석 결과 - Mock 데이터" />
      <h2 className="text-lg font-bold">이상거래 탐지 대시보드</h2>

      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "높음", count: riskCount.high, color: "text-red-600" },
          { label: "보통", count: riskCount.medium, color: "text-yellow-600" },
          { label: "낮음", count: riskCount.low, color: "text-green-600" },
        ].map((r) => (
          <Card key={r.label}>
            <CardContent className="pt-4 text-center">
              <p className="text-xs text-muted-foreground">위험도 {r.label}</p>
              <p className={`text-2xl font-bold ${r.color}`}>{r.count}건</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <ChartCard title="위험도 분포">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
              {pieData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>

      <DataGrid columns={columns} data={aiDetections as unknown as Record<string, unknown>[]} keyField="id" />
    </div>
  );
}
