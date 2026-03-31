"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";

type Row = Record<string, unknown>;

const columns: Column<Row>[] = [
    { key: "companyName", label: "업체명" },
    { key: "contractNo", label: "계약번호" },
    { key: "totalOverdue", label: "체납총액" },
    { key: "recoveredAmount", label: "회수금액" },
    { key: "remainAmount", label: "잔여금액" },
    { key: "recoveryRate", label: "회수율(%)" },
    { key: "lastRecoveryDate", label: "최종회수일" },
    { key: "recoveryStatus", label: "회수상태" }
];

const mockData: Row[] = [
    { companyName: "옐로키친", contractNo: "CT-2025-005", totalOverdue: "4,221,000", recoveredAmount: "2,100,000", remainAmount: "2,121,000", recoveryRate: "49.7", lastRecoveryDate: "2025-03-15", recoveryStatus: "회수중" },
    { companyName: "퍼플뷰티", contractNo: "CT-2025-006", totalOverdue: "6,690,000", recoveredAmount: "0", remainAmount: "6,690,000", recoveryRate: "0", lastRecoveryDate: "-", recoveryStatus: "미회수" },
    { companyName: "오렌지델리", contractNo: "CT-2025-007", totalOverdue: "804,000", recoveredAmount: "804,000", remainAmount: "0", recoveryRate: "100", lastRecoveryDate: "2025-03-20", recoveryStatus: "회수완료" }
];

export default function ScrErp035() {
  const [search, setSearch] = useState({ companyName: "", recoveryMonth: "", recoveryStatus: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-035 체납 회수현황 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ companyName: "", recoveryMonth: "", recoveryStatus: "" })}>
        
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">업체명</label>
          <Input
            placeholder="업체명"
            value={search.companyName}
            onChange={(e) => setSearch({ ...search, companyName: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">회수월</label>
          <Input
            placeholder="회수월"
            value={search.recoveryMonth}
            onChange={(e) => setSearch({ ...search, recoveryMonth: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">회수상태</label>
          <Input
            placeholder="회수상태"
            value={search.recoveryStatus}
            onChange={(e) => setSearch({ ...search, recoveryStatus: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={mockData} />
      <ActionBar>
        <ActionButton label="엑셀 다운로드" variant="outline" onClick={() => alert("엑셀 다운로드")} />
      </ActionBar>
    </div>
  );
}
