"use client";

import { MockBanner } from "@/components/common/MockBanner";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { aiDetections } from "@/data/mock/aiDetections";

const riskBadge = (level: string) => {
  const map: Record<string, string> = { high: "확인필요", medium: "조사중", low: "정상처리" };
  return <StatusBadge status={map[level] || level} />;
};

export default function ScrAi005() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns: Column<any>[] = [
    { key: "id", label: "ID", width: "80px" },
    { key: "type", label: "유형", width: "100px" },
    { key: "storeName", label: "매장" },
    { key: "companyName", label: "업체" },
    { key: "riskLevel", label: "위험도", width: "100px", render: (r) => riskBadge(r.riskLevel) },
    { key: "score", label: "점수", width: "100px" },
    { key: "description", label: "설명" },
    { key: "detectedAt", label: "탐지일시", width: "130px" },
    { key: "status", label: "상태", width: "100px", render: (r) => <StatusBadge status={r.status} /> },
  ];

  return (
    <div className="space-y-4">
      <MockBanner message="AI 분석 결과 - Mock 데이터" />
      <h2 className="text-lg font-bold">이상거래 탐지 결과 조회</h2>
      <DataGrid columns={columns} data={aiDetections as unknown as Record<string, unknown>[]} keyField="id" />
    </div>
  );
}
