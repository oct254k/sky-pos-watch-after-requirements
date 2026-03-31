"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const reportTemplates = [
  { id: "R01", name: "월간 매출 분석 리포트", period: "2025년 1월" },
  { id: "R02", name: "이상거래 탐지 리포트", period: "2025년 1월" },
  { id: "R03", name: "AI 매핑 현황 리포트", period: "2025년 1월" },
];

const dummyReport = {
  title: "월간 매출 분석 리포트 - 2025년 1월",
  sections: [
    { heading: "1. 총 매출 현황", content: "2025년 1월 총 매출: 12.5억원 (전월 대비 +8.2%)" },
    { heading: "2. 업체별 매출 순위", content: "1위 듀티프리마트(4.2억), 2위 스카이푸드(3.1억), 3위 에어라운지(2.5억)" },
    { heading: "3. 이상거래 요약", content: "총 10건 탐지, 고위험 4건, 조치완료 6건" },
    { heading: "4. AI 매핑 현황", content: "총 15건 매핑, 확정 10건(66.7%), 검토필요 3건, 오매핑 1건" },
  ],
};

export default function ScrAi024() {
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => { setGenerated(true); setLoading(false); }, 800);
  };

  return (
    <div className="space-y-4">
      <MockBanner message="AI 분석 결과 - Mock 데이터" />
      <h2 className="text-lg font-bold">맞춤형 리포트 자동 생성</h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {reportTemplates.map((t) => (
          <Card key={t.id}>
            <CardContent className="pt-4">
              <p className="text-sm font-medium">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.period}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button onClick={handleGenerate} disabled={loading}>
        {loading ? "생성 중..." : "리포트 생성"}
      </Button>

      {generated && (
        <Card>
          <CardHeader><CardTitle className="text-base">{dummyReport.title}</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {dummyReport.sections.map((s) => (
              <div key={s.heading}>
                <h4 className="text-sm font-semibold">{s.heading}</h4>
                <p className="text-sm text-muted-foreground">{s.content}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
