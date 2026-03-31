"use client";

import { ChartCard } from "@/components/common/ChartCard";
import { Card, CardContent } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const dailyData = [
  { date: "01/10", 스카이푸드: 185, 에어라운지: 320, 듀티프리마트: 1580, 클라우드카페: 65 },
  { date: "01/11", 스카이푸드: 192, 에어라운지: 280, 듀티프리마트: 1650, 클라우드카페: 72 },
  { date: "01/12", 스카이푸드: 210, 에어라운지: 310, 듀티프리마트: 1820, 클라우드카페: 68 },
  { date: "01/13", 스카이푸드: 178, 에어라운지: 295, 듀티프리마트: 1450, 클라우드카페: 61 },
  { date: "01/14", 스카이푸드: 225, 에어라운지: 340, 듀티프리마트: 1920, 클라우드카페: 78 },
  { date: "01/15", 스카이푸드: 198, 에어라운지: 325, 듀티프리마트: 1780, 클라우드카페: 70 },
  { date: "01/16", 스카이푸드: 215, 에어라운지: 310, 듀티프리마트: 1850, 클라우드카페: 75 },
];

const kpis = [
  { label: "금일 총매출", value: "24,570만원", change: "+5.2%", positive: true },
  { label: "금일 거래건수", value: "1,284건", change: "+3.1%", positive: true },
  { label: "미확정 마감", value: "3건", change: "", positive: false },
  { label: "이상거래 알림", value: "4건", change: "+2건", positive: false },
];

export default function ScrInt002() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">매출추이 현황 분석</h2>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {kpis.map((k) => (
          <Card key={k.label}>
            <CardContent className="pt-4">
              <p className="text-xs text-muted-foreground">{k.label}</p>
              <p className="mt-1 text-2xl font-bold">{k.value}</p>
              {k.change && (
                <p className={`text-xs ${k.positive ? "text-green-600" : "text-red-600"}`}>{k.change}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <ChartCard title="일별 매출 추이 (단위: 만원)">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={dailyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="스카이푸드" stroke="#2563eb" />
            <Line type="monotone" dataKey="에어라운지" stroke="#16a34a" />
            <Line type="monotone" dataKey="듀티프리마트" stroke="#dc2626" />
            <Line type="monotone" dataKey="클라우드카페" stroke="#9333ea" />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}
