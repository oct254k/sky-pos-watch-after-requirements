"use client";

import { MockBanner } from "@/components/common/MockBanner";
import { ChartCard } from "@/components/common/ChartCard";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid,
} from "recharts";

const factors = [
  { name: "여객 증가", impact: 35, direction: "증가", color: "text-green-600" },
  { name: "프로모션 효과", impact: 25, direction: "증가", color: "text-green-600" },
  { name: "계절 요인", impact: -15, direction: "감소", color: "text-red-600" },
  { name: "경쟁사 입점", impact: -10, direction: "감소", color: "text-red-600" },
  { name: "환율 변동", impact: 8, direction: "증가", color: "text-green-600" },
];

const chartData = factors.map((f) => ({ name: f.name, 영향도: Math.abs(f.impact) }));

export default function ScrAi010() {
  return (
    <div className="space-y-4">
      <MockBanner message="AI 분석 결과 - Mock 데이터" />
      <h2 className="text-lg font-bold">매출 증감 요인 자동 분석</h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {factors.map((f) => (
          <Card key={f.name}>
            <CardContent className="pt-4">
              <p className="text-sm font-medium">{f.name}</p>
              <p className={`text-xl font-bold ${f.color}`}>
                {f.impact > 0 ? "+" : ""}{f.impact}%
              </p>
              <p className="text-xs text-muted-foreground">매출 {f.direction} 요인</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <ChartCard title="요인별 영향도 (%)">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" fontSize={12} />
            <YAxis dataKey="name" type="category" fontSize={12} width={100} />
            <Tooltip />
            <Bar dataKey="영향도" fill="#6366f1" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}
