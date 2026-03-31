"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { ActionButton } from "@/components/common/ActionBar";
import { aiMappings } from "@/data/mock/aiMappings";

export default function ScrAi016() {
  const [data, setData] = useState(aiMappings.filter((m) => m.status === "오매핑"));

  const handleCorrect = (id: string) => {
    setData((prev) => prev.map((r) => r.id === id ? { ...r, status: "확정" } : r));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns: Column<any>[] = [
    { key: "id", label: "ID", width: "80px" },
    { key: "sourceItem", label: "원본 품목명" },
    { key: "targetCategory", label: "현재 매핑" },
    { key: "confidence", label: "신뢰도%", width: "100px", render: (r) => <span className="text-red-600 font-semibold">{r.confidence}%</span> },
    { key: "status", label: "상태", width: "100px", render: (r) => <StatusBadge status={r.status} /> },
    { key: "_action", label: "작업", width: "100px", render: (r) => (
      <ActionButton label="보정" onClick={() => handleCorrect(r.id)} />
    )},
  ];

  return (
    <div className="space-y-4">
      <MockBanner message="AI 분석 결과 - Mock 데이터" />
      <h2 className="text-lg font-bold">오매핑 탐지 및 보정</h2>
      <p className="text-sm text-muted-foreground">상태가 &apos;오매핑&apos;인 항목입니다. (총 {data.length}건)</p>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} keyField="id" />
    </div>
  );
}
