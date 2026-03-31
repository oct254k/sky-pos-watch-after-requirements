"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { ActionButton } from "@/components/common/ActionBar";
import { aiMappings } from "@/data/mock/aiMappings";

export default function ScrAi004() {
  const [data, setData] = useState(aiMappings.filter((m) => m.status !== "확정"));

  const handle = (id: string, action: string) => {
    setData((prev) => prev.map((r) => r.id === id ? { ...r, status: action === "확정" ? "확정" : "검토필요" } : r));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns: Column<any>[] = [
    { key: "id", label: "ID", width: "80px" },
    { key: "sourceItem", label: "원본 품목명" },
    { key: "targetCategory", label: "매핑 카테고리" },
    { key: "targetCode", label: "표준코드", width: "110px" },
    { key: "confidence", label: "신뢰도%", width: "100px", render: (r) => <span>{r.confidence}%</span> },
    { key: "status", label: "상태", width: "100px", render: (r) => <StatusBadge status={r.status} /> },
    { key: "_action", label: "작업", width: "160px", render: (r) => (
      <div className="flex gap-1">
        <ActionButton label="확정" onClick={() => handle(r.id, "확정")} />
        <ActionButton label="재분류" variant="outline" onClick={() => handle(r.id, "재분류")} />
      </div>
    )},
  ];

  return (
    <div className="space-y-4">
      <MockBanner message="AI 분석 결과 - Mock 데이터" />
      <h2 className="text-lg font-bold">매핑 확정/재분류</h2>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} keyField="id" />
    </div>
  );
}
