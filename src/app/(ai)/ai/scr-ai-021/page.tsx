"use client";

import { MockBanner } from "@/components/common/MockBanner";
import { ChartCard } from "@/components/common/ChartCard";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid,
} from "recharts";

const kpis = [
  { label: "총 매출", value: "12.5억", color: "text-blue-600" },
  { label: "평당 매출", value: "320만", color: "text-green-600" },
  { label: "고객 동선율", value: "78%", color: "text-purple-600" },
  { label: "공간 효율", value: "85%", color: "text-orange-600" },
];

const floorData = [
  { floor: "1층", 매출: 480, 효율: 92 },
  { floor: "2층", 매출: 350, 효율: 78 },
  { floor: "3층", 매출: 280, 효율: 70 },
  { floor: "4층", 매출: 140, 효율: 55 },
];

export default function ScrAi021() {
  return (
    <div className="space-y-4">
      <MockBanner message="AI 분석 결과 - Mock 데이터" />
      <h2 className="text-lg font-bold">공간 기반 성과지표</h2>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {kpis.map((k) => (
          <Card key={k.label}>
            <CardContent className="pt-4">
              <p className="text-xs text-muted-foreground">{k.label}</p>
              <p className={`text-2xl font-bold ${k.color}`}>{k.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <ChartCard title="층별 매출(백만)/효율(%)">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={floorData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="floor" fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip />
            <Bar dataKey="매출" fill="#3b82f6" />
            <Bar dataKey="효율" fill="#22c55e" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}
