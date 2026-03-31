"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { ChartCard } from "@/components/common/ChartCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid,
} from "recharts";

const baseData = [
  { month: "1월", 매출: 480 },
  { month: "2월", 매출: 520 },
  { month: "3월", 매출: 550 },
];

export default function ScrAi023() {
  const [growth, setGrowth] = useState(10);
  const [discount, setDiscount] = useState(5);

  const simulated = baseData.map((d) => ({
    ...d,
    예측매출: Math.round(d.매출 * (1 + growth / 100) * (1 - discount / 100)),
  }));

  return (
    <div className="space-y-4">
      <MockBanner message="AI 분석 결과 - Mock 데이터" />
      <h2 className="text-lg font-bold">매출 예측 시뮬레이션</h2>

      <Card>
        <CardHeader><CardTitle className="text-sm">시뮬레이션 파라미터</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm">여객 증가율: {growth}%</label>
            <input
              type="range" min={-20} max={50} value={growth}
              onChange={(e) => setGrowth(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="text-sm">할인율: {discount}%</label>
            <input
              type="range" min={0} max={30} value={discount}
              onChange={(e) => setDiscount(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </CardContent>
      </Card>

      <ChartCard title="매출 시뮬레이션 결과 (백만원)">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={simulated}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip />
            <Bar dataKey="매출" fill="#94a3b8" name="기존매출" />
            <Bar dataKey="예측매출" fill="#6366f1" name="예측매출" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}
