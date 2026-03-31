"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";

interface UnregisteredItem {
  id: string;
  itemName: string;
  companyName: string;
  frequency: number;
  suggestedCode: string;
  status: string;
}

const initial: UnregisteredItem[] = [
  { id: "UI001", itemName: "딸기스무디 L", companyName: "클라우드카페", frequency: 45, suggestedCode: "STD-BEV-040", status: "미등록" },
  { id: "UI002", itemName: "치즈토스트세트", companyName: "스카이푸드", frequency: 32, suggestedCode: "STD-FOD-050", status: "미등록" },
  { id: "UI003", itemName: "고급티백세트", companyName: "듀티프리마트", frequency: 28, suggestedCode: "STD-DF-040", status: "미등록" },
  { id: "UI004", itemName: "에그샌드위치", companyName: "스카이푸드", frequency: 55, suggestedCode: "STD-FOD-055", status: "미등록" },
  { id: "UI005", itemName: "레몬에이드 R", companyName: "클라우드카페", frequency: 38, suggestedCode: "STD-BEV-045", status: "미등록" },
];

export default function ScrAi015() {
  const [data, setData] = useState(initial);

  const handleGenerate = () => {
    setData((prev) => prev.map((r) => ({ ...r, status: "자동생성완료" })));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns: Column<any>[] = [
    { key: "id", label: "ID", width: "80px" },
    { key: "itemName", label: "단품명" },
    { key: "companyName", label: "업체" },
    { key: "frequency", label: "출현빈도", width: "100px" },
    { key: "suggestedCode", label: "추천 표준코드", width: "130px" },
    { key: "status", label: "상태", width: "110px", render: (r) => <StatusBadge status={r.status} /> },
  ];

  return (
    <div className="space-y-4">
      <MockBanner message="AI 분석 결과 - Mock 데이터" />
      <h2 className="text-lg font-bold">미등록 단품 자동 생성</h2>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} keyField="id" />
      <ActionBar>
        <ActionButton label="일괄 자동생성" onClick={handleGenerate} />
      </ActionBar>
    </div>
  );
}
