"use client";

import { MockBanner } from "@/components/common/MockBanner";
import { Card, CardContent } from "@/components/ui/card";

const migrations = [
  { name: "음료 카테고리", total: 150, done: 148, status: "완료" },
  { name: "식품 카테고리", total: 320, done: 280, status: "진행중" },
  { name: "면세 카테고리", total: 200, done: 195, status: "완료" },
  { name: "패션 카테고리", total: 180, done: 90, status: "진행중" },
  { name: "기타 카테고리", total: 100, done: 30, status: "대기" },
];

export default function ScrAi013() {
  return (
    <div className="space-y-4">
      <MockBanner message="AI 분석 결과 - Mock 데이터" />
      <h2 className="text-lg font-bold">품목 데이터 이행 관리</h2>

      <div className="space-y-3">
        {migrations.map((m) => {
          const pct = Math.round((m.done / m.total) * 100);
          return (
            <Card key={m.name}>
              <CardContent className="pt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">{m.name}</span>
                  <span className="text-xs text-muted-foreground">{m.done}/{m.total} ({pct}%)</span>
                </div>
                <div className="h-4 w-full rounded-full bg-gray-200">
                  <div
                    className={`h-4 rounded-full ${pct >= 95 ? "bg-green-500" : pct >= 50 ? "bg-blue-500" : "bg-yellow-500"}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">상태: {m.status}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
