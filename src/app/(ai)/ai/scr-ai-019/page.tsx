"use client";

import { MockBanner } from "@/components/common/MockBanner";
import { ChartCard } from "@/components/common/ChartCard";
import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid, Legend,
} from "recharts";

const data = [
  { month: "9월", 실적: 4200, 예측: null, 상한: null, 하한: null },
  { month: "10월", 실적: 4500, 예측: null, 상한: null, 하한: null },
  { month: "11월", 실적: 4800, 예측: null, 상한: null, 하한: null },
  { month: "12월", 실적: 5100, 예측: null, 상한: null, 하한: null },
  { month: "1월", 실적: 4900, 예측: 4900, 상한: 4900, 하한: 4900 },
  { month: "2월", 실적: null, 예측: 5200, 상한: 5500, 하한: 4900 },
  { month: "3월", 실적: null, 예측: 5500, 상한: 5900, 하한: 5100 },
  { month: "4월", 실적: null, 예측: 5800, 상한: 6300, 하한: 5300 },
];

export default function ScrAi019() {
  return (
    <div className="space-y-4">
      <MockBanner message="AI 분석 결과 - Mock 데이터" />
      <h2 className="text-lg font-bold">수요 예측</h2>

      <ChartCard title="월별 매출 실적 및 예측 (만원)">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="실적" stroke="#3b82f6" strokeWidth={2} connectNulls={false} />
            <Line type="monotone" dataKey="예측" stroke="#f59e0b" strokeWidth={2} strokeDasharray="5 5" />
            <Line type="monotone" dataKey="상한" stroke="#d1d5db" strokeWidth={1} strokeDasharray="3 3" />
            <Line type="monotone" dataKey="하한" stroke="#d1d5db" strokeWidth={1} strokeDasharray="3 3" />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <p className="text-sm text-muted-foreground">점선: 예측 구간 / 회색 점선: 상한/하한 신뢰 구간 (95%)</p>
    </div>
  );
}
