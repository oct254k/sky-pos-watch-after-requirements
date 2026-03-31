"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { FormPanel, FormField } from "@/components/common/FormPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";

interface ShopperRequest {
  id: string;
  storeName: string;
  reason: string;
  requestDate: string;
  status: string;
}

const initial: ShopperRequest[] = [
  { id: "MS001", storeName: "1층 A-101", reason: "매출누락 의심", requestDate: "2025-01-16", status: "대기" },
  { id: "MS002", storeName: "2층 B-201", reason: "이상금액 반복", requestDate: "2025-01-15", status: "진행중" },
  { id: "MS003", storeName: "3층 C-301", reason: "현금비율 이상", requestDate: "2025-01-14", status: "확인완료" },
];

export default function ScrAi007() {
  const [list, setList] = useState(initial);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns: Column<any>[] = [
    { key: "id", label: "요청ID", width: "80px" },
    { key: "storeName", label: "매장" },
    { key: "reason", label: "사유" },
    { key: "requestDate", label: "요청일", width: "120px" },
    { key: "status", label: "상태", width: "100px", render: (r) => <StatusBadge status={r.status} /> },
  ];

  const handleAdd = () => {
    const newReq: ShopperRequest = {
      id: `MS${String(list.length + 1).padStart(3, "0")}`,
      storeName: "1층 A-103",
      reason: "신규 점검 요청",
      requestDate: "2025-01-17",
      status: "대기",
    };
    setList((prev) => [newReq, ...prev]);
  };

  return (
    <div className="space-y-4">
      <MockBanner message="AI 분석 결과 - Mock 데이터" />
      <h2 className="text-lg font-bold">미스터리 쇼퍼 점검 요청</h2>

      <FormPanel title="점검 요청">
        <FormField label="매장명"><Input placeholder="매장명 입력" defaultValue="1층 A-103" /></FormField>
        <FormField label="점검 사유"><Input placeholder="사유 입력" defaultValue="신규 점검 요청" /></FormField>
        <FormField label="요청일"><Input type="date" defaultValue="2025-01-17" /></FormField>
      </FormPanel>

      <ActionBar>
        <ActionButton label="점검 요청" onClick={handleAdd} />
      </ActionBar>

      <DataGrid columns={columns} data={list as unknown as Record<string, unknown>[]} keyField="id" />
    </div>
  );
}
