"use client";

import { MockBanner } from "@/components/common/MockBanner";
import { ChartCard } from "@/components/common/ChartCard";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid,
} from "recharts";

const kpi = [
  { label: "탐지 건수", value: "127건", color: "text-red-600" },
  { label: "매핑 완료율", value: "94.2%", color: "text-blue-600" },
  { label: "이상거래 수", value: "23건", color: "text-orange-600" },
  { label: "AI 정확도", value: "96.8%", color: "text-green-600" },
];

const monthlyData = [
  { month: "10월", 탐지: 85, 매핑: 120 },
  { month: "11월", 탐지: 102, 매핑: 135 },
  { month: "12월", 탐지: 95, 매핑: 140 },
  { month: "1월", 탐지: 127, 매핑: 148 },
];

const accuracyData = [
  { month: "10월", 정확도: 93.2 },
  { month: "11월", 정확도: 94.5 },
  { month: "12월", 정확도: 95.8 },
  { month: "1월", 정확도: 96.8 },
];

export default function ScrAi001() {
  return (
    <div className="space-y-4">
      <MockBanner message="AI 분석 결과 - Mock 데이터" />
      <h2 className="text-lg font-bold">AI 서비스 통합 현황 대시보드</h2>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {kpi.map((k) => (
          <Card key={k.label}>
            <CardContent className="pt-4">
              <p className="text-xs text-muted-foreground">{k.label}</p>
              <p className={`text-2xl font-bold ${k.color}`}>{k.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ChartCard title="월별 탐지/매핑 건수">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" fontSize={12} />
              <YAxis fontSize={12} />
              <Tooltip />
              <Bar dataKey="탐지" fill="#ef4444" />
              <Bar dataKey="매핑" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="AI 정확도 추이">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={accuracyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" fontSize={12} />
              <YAxis domain={[90, 100]} fontSize={12} />
              <Tooltip />
              <Line type="monotone" dataKey="정확도" stroke="#22c55e" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}
