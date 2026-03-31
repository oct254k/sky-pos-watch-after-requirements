"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { ActionButton } from "@/components/common/ActionBar";
import { aiMappings } from "@/data/mock/aiMappings";

export default function ScrAi002() {
  const [data, setData] = useState(aiMappings);

  const handleConfirm = (id: string) => {
    setData((prev) => prev.map((r) => r.id === id ? { ...r, status: "확정" } : r));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns: Column<any>[] = [
    { key: "id", label: "ID", width: "80px" },
    { key: "sourceItem", label: "원본 품목명" },
    { key: "sourceCode", label: "원본코드", width: "100px" },
    { key: "targetCategory", label: "매핑 카테고리" },
    { key: "targetCode", label: "표준코드", width: "110px" },
    { key: "confidence", label: "신뢰도%", width: "100px", render: (r) => <span className={r.confidence >= 90 ? "text-green-600 font-semibold" : r.confidence >= 80 ? "text-yellow-600" : "text-red-600"}>{r.confidence}%</span> },
    { key: "status", label: "상태", width: "100px", render: (r) => <StatusBadge status={r.status} /> },
    { key: "companyName", label: "업체" },
    { key: "mappedAt", label: "매핑일", width: "120px" },
    { key: "_action", label: "작업", width: "140px", render: (r) => (
      <div className="flex gap-1">
        <ActionButton label="확정" onClick={() => handleConfirm(r.id)} />
        <ActionButton label="재분류" variant="outline" onClick={() => alert(`${r.id} 재분류`)} />
      </div>
    )},
  ];

  return (
    <div className="space-y-4">
      <MockBanner message="AI 분석 결과 - Mock 데이터" />
      <h2 className="text-lg font-bold">AI 매핑 결과 검토</h2>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} keyField="id" />
    </div>
  );
}
