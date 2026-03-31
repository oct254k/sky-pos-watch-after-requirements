"use client";

import { useState } from "react";
import { ChartCard } from "@/components/common/ChartCard";
import { SearchPanel } from "@/components/common/SearchPanel";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const weeklyData = [
  { week: "1주", 금년: 1820, 전년: 1650 },
  { week: "2주", 금년: 1950, 전년: 1720 },
  { week: "3주", 금년: 2100, 전년: 1800 },
  { week: "4주", 금년: 1880, 전년: 1690 },
  { week: "5주", 금년: 2200, 전년: 1850 },
];

export default function ScrInt004() {
  const [startDate, setStartDate] = useState("2025-01-01");
  const [endDate, setEndDate] = useState("2025-01-31");

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">기간별 매출 추세 분석</h2>
      <SearchPanel>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">시작일</label>
          <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-40" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">종료일</label>
          <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-40" />
        </div>
      </SearchPanel>
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-4">
            <p className="text-xs text-muted-foreground">기간 총매출</p>
            <p className="mt-1 text-2xl font-bold">99.5억원</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <p className="text-xs text-muted-foreground">전년 동기 대비</p>
            <p className="mt-1 text-2xl font-bold text-green-600">+12.8%</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <p className="text-xs text-muted-foreground">일평균 매출</p>
            <p className="mt-1 text-2xl font-bold">3.2억원</p>
          </CardContent>
        </Card>
      </div>
      <ChartCard title="주간 매출 추세 비교 (단위: 백만원)">
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="금년" stroke="#2563eb" fill="#2563eb" fillOpacity={0.3} />
            <Area type="monotone" dataKey="전년" stroke="#9ca3af" fill="#9ca3af" fillOpacity={0.2} />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}
