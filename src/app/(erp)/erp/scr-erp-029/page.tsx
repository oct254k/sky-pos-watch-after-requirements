"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";

type Row = Record<string, unknown>;

const columns: Column<Row>[] = [
    { key: "contractNo", label: "계약번호" },
    { key: "companyName", label: "업체명" },
    { key: "depositAmount", label: "보증금액" },
    { key: "paidDeposit", label: "납부액" },
    { key: "remainDeposit", label: "잔액" },
    { key: "depositStatus", label: "상태" },
    { key: "lastPayDate", label: "최종납부일" }
];

const mockData: Row[] = [
    { contractNo: "CT-2025-001", companyName: "스카이푸드", depositAmount: "35,000,000", paidDeposit: "35,000,000", remainDeposit: "0", depositStatus: "완납", lastPayDate: "2025-01-05" },
    { contractNo: "CT-2025-002", companyName: "블루커피", depositAmount: "28,000,000", paidDeposit: "28,000,000", remainDeposit: "0", depositStatus: "완납", lastPayDate: "2025-03-01" },
    { contractNo: "CT-2025-003", companyName: "그린마트", depositAmount: "42,000,000", paidDeposit: "30,000,000", remainDeposit: "12,000,000", depositStatus: "분납중", lastPayDate: "2025-02-15" }
];

export default function ScrErp029() {
  const [search, setSearch] = useState({ companyName: "", contractNo: "", depositStatus: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-029 보증금 현황 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ companyName: "", contractNo: "", depositStatus: "" })}>
        
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
          <label className="text-xs text-muted-foreground">계약번호</label>
          <Input
            placeholder="계약번호"
            value={search.contractNo}
            onChange={(e) => setSearch({ ...search, contractNo: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">보증금상태</label>
          <Input
            placeholder="보증금상태"
            value={search.depositStatus}
            onChange={(e) => setSearch({ ...search, depositStatus: e.target.value })}
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
