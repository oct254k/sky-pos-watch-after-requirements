"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const presets = [
  { id: "P01", name: "품목 매핑 프롬프트", content: "다음 품목을 표준분류에 매핑하세요.\n\n품목명: {{itemName}}\n업체: {{companyName}}\n\n출력 형식: JSON\n- targetCategory: 표준 카테고리 경로\n- targetCode: 표준 코드\n- confidence: 신뢰도(0~100)" },
  { id: "P02", name: "이상거래 분석 프롬프트", content: "다음 거래 데이터를 분석하여 이상 여부를 판단하세요.\n\n매장: {{storeName}}\n거래내역: {{transactions}}\n\n출력 형식: JSON\n- riskLevel: high/medium/low\n- reason: 사유\n- score: 위험점수(0~100)" },
  { id: "P03", name: "매출 예측 프롬프트", content: "다음 매출 데이터를 기반으로 향후 3개월 매출을 예측하세요.\n\n과거 데이터: {{salesData}}\n\n출력 형식: JSON array\n- month, predicted, lower, upper" },
];

export default function ScrAi017() {
  const [selected, setSelected] = useState(presets[0]);
  const [content, setContent] = useState(presets[0].content);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-4">
      <MockBanner message="AI 분석 결과 - Mock 데이터" />
      <h2 className="text-lg font-bold">프롬프트 관리</h2>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <div className="space-y-2">
          <p className="text-sm font-semibold">프롬프트 목록</p>
          {presets.map((p) => (
            <Card
              key={p.id}
              className={`cursor-pointer ${selected.id === p.id ? "border-blue-400 bg-blue-50" : ""}`}
              onClick={() => { setSelected(p); setContent(p.content); }}
            >
              <CardContent className="py-3">
                <p className="text-sm font-medium">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.id}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">{selected.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input value={selected.name} readOnly className="text-sm" />
              <textarea
                className="w-full rounded-md border p-3 text-sm font-mono min-h-[300px] focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <div className="flex items-center gap-2">
                <Button onClick={handleSave}>저장</Button>
                {saved && <span className="text-sm text-green-600">저장되었습니다.</span>}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
