"use client";

import { MockBanner } from "@/components/common/MockBanner";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { aiMappings } from "@/data/mock/aiMappings";

const filtered = aiMappings.filter((m) => m.status === "미승인" || m.status === "오매핑");

export default function ScrAi003() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns: Column<any>[] = [
    { key: "id", label: "ID", width: "80px" },
    { key: "sourceItem", label: "원본 품목명" },
    { key: "targetCategory", label: "매핑 카테고리" },
    { key: "confidence", label: "신뢰도%", width: "100px", render: (r) => <span>{r.confidence}%</span> },
    { key: "status", label: "상태", width: "100px", render: (r) => <StatusBadge status={r.status} /> },
    { key: "companyName", label: "업체" },
    { key: "mappedAt", label: "매핑일", width: "120px" },
  ];

  return (
    <div className="space-y-4">
      <MockBanner message="AI 분석 결과 - Mock 데이터" />
      <h2 className="text-lg font-bold">미승인/오매핑 품목 조회</h2>
      <p className="text-sm text-muted-foreground">상태가 &apos;미승인&apos; 또는 &apos;오매핑&apos;인 품목만 표시됩니다.</p>
      <DataGrid columns={columns} data={filtered as unknown as Record<string, unknown>[]} keyField="id" />
    </div>
  );
}
