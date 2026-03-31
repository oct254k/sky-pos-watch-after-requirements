"use client";

import { MockBanner } from "@/components/common/MockBanner";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { aiDetections } from "@/data/mock/aiDetections";

const filtered = aiDetections.filter((d) => d.type === "매출누락");

export default function ScrAi008() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns: Column<any>[] = [
    { key: "id", label: "ID", width: "80px" },
    { key: "storeName", label: "매장" },
    { key: "companyName", label: "업체" },
    { key: "score", label: "탐지점수", width: "100px" },
    { key: "description", label: "상세 내용" },
    { key: "detectedAt", label: "탐지일시", width: "130px" },
    { key: "status", label: "상태", width: "100px", render: (r) => <StatusBadge status={r.status} /> },
  ];

  return (
    <div className="space-y-4">
      <MockBanner message="AI 분석 결과 - Mock 데이터" />
      <h2 className="text-lg font-bold">매출 누락 탐지</h2>
      <p className="text-sm text-muted-foreground">유형이 &apos;매출누락&apos;인 탐지 결과만 표시됩니다. (총 {filtered.length}건)</p>
      <DataGrid columns={columns} data={filtered as unknown as Record<string, unknown>[]} keyField="id" />
    </div>
  );
}
