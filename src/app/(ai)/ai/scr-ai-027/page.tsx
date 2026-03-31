"use client";

import { MockBanner } from "@/components/common/MockBanner";
import { Card, CardContent } from "@/components/ui/card";

const gauges = [
  { label: "매출 달성률", value: 87, target: "12.5억 / 14.3억", color: "#3b82f6" },
  { label: "고객 만족도", value: 92, target: "4.6 / 5.0", color: "#22c55e" },
  { label: "매장 가동률", value: 95, target: "38 / 40개", color: "#6366f1" },
  { label: "이상거래 처리율", value: 73, target: "8 / 11건", color: "#f59e0b" },
];

const kpis = [
  { label: "일 평균 매출", value: "4,030만원", delta: "+5.2%", positive: true },
  { label: "일 평균 방문객", value: "12,400명", delta: "+3.8%", positive: true },
  { label: "객단가", value: "32,500원", delta: "-1.2%", positive: false },
  { label: "재방문율", value: "28.5%", delta: "+2.1%", positive: true },
];

function GaugeCircle({ value, color, size = 120 }: { value: number; color: string; size?: number }) {
  const radius = (size - 16) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - value / 100);

  return (
    <svg width={size} height={size} className="block mx-auto">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#e5e7eb" strokeWidth={10} />
      <circle
        cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={10}
        strokeDasharray={circumference} strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text x="50%" y="50%" textAnchor="middle" dy="0.35em" className="text-lg font-bold" fill={color}>
        {value}%
      </text>
    </svg>
  );
}

export default function ScrAi027() {
  return (
    <div className="space-y-4">
      <MockBanner message="AI 분석 결과 - Mock 데이터" />
      <h2 className="text-lg font-bold">KPI 대시보드</h2>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {gauges.map((g) => (
          <Card key={g.label}>
            <CardContent className="pt-4 text-center">
              <GaugeCircle value={g.value} color={g.color} />
              <p className="mt-2 text-sm font-medium">{g.label}</p>
              <p className="text-xs text-muted-foreground">{g.target}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {kpis.map((k) => (
          <Card key={k.label}>
            <CardContent className="pt-4">
              <p className="text-xs text-muted-foreground">{k.label}</p>
              <p className="text-xl font-bold">{k.value}</p>
              <p className={`text-sm font-medium ${k.positive ? "text-green-600" : "text-red-600"}`}>{k.delta}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
