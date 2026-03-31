"use client";

import { MockBanner } from "@/components/common/MockBanner";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { aiDetections } from "@/data/mock/aiDetections";

const detail = aiDetections[0];

const infoRows = [
  { label: "탐지 ID", value: detail.id },
  { label: "유형", value: detail.type },
  { label: "매장", value: detail.storeName },
  { label: "업체명", value: detail.companyName },
  { label: "탐지 점수", value: `${detail.score}점` },
  { label: "탐지일시", value: detail.detectedAt },
  { label: "설명", value: detail.description },
];

export default function ScrAi006() {
  return (
    <div className="space-y-4">
      <MockBanner message="AI 분석 결과 - Mock 데이터" />
      <h2 className="text-lg font-bold">이상거래 업체 상세 정보</h2>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            {detail.companyName} - {detail.storeName}
            <StatusBadge status={detail.status} />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {infoRows.map((r) => (
              <div key={r.label}>
                <dt className="text-xs text-muted-foreground">{r.label}</dt>
                <dd className="text-sm font-medium">{r.value}</dd>
              </div>
            ))}
            <div>
              <dt className="text-xs text-muted-foreground">위험도</dt>
              <dd><StatusBadge status={detail.riskLevel === "high" ? "확인필요" : detail.riskLevel === "medium" ? "조사중" : "정상처리"} /></dd>
            </div>
          </dl>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="text-sm">관련 탐지 이력</CardTitle></CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            {aiDetections.filter((d) => d.companyName === detail.companyName).map((d) => (
              <li key={d.id} className="flex items-center gap-2 rounded border p-2">
                <StatusBadge status={d.status} />
                <span className="font-medium">{d.type}</span>
                <span className="text-muted-foreground">{d.description}</span>
                <span className="ml-auto text-xs text-muted-foreground">{d.detectedAt}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
