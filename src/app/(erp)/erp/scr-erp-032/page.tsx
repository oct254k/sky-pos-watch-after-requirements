"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";

type Row = Record<string, unknown>;

const columns: Column<Row>[] = [
    { key: "settleNo", label: "정산번호" },
    { key: "companyName", label: "업체명" },
    { key: "settleMonth", label: "정산월" },
    { key: "rentAmount", label: "임대료" },
    { key: "mgmtFee", label: "관리비" },
    { key: "otherFee", label: "기타" },
    { key: "totalAmount", label: "합계" },
    { key: "settleStatus", label: "정산상태" }
];

const mockData: Row[] = [
    { settleNo: "STL-202503-001", companyName: "스카이푸드", settleMonth: "2025-03", rentAmount: "3,500,000", mgmtFee: "500,000", otherFee: "0", totalAmount: "4,000,000", settleStatus: "완료" },
    { settleNo: "STL-202503-002", companyName: "블루커피", settleMonth: "2025-03", rentAmount: "2,800,000", mgmtFee: "400,000", otherFee: "50,000", totalAmount: "3,250,000", settleStatus: "완료" },
    { settleNo: "STL-202503-003", companyName: "옐로키친", settleMonth: "2025-03", rentAmount: "3,750,000", mgmtFee: "350,000", otherFee: "21,000", totalAmount: "4,121,000", settleStatus: "미완료" }
];

export default function ScrErp032() {
  const [search, setSearch] = useState({ companyName: "", settleMonth: "", settleType: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-032 정산 내역 통합 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ companyName: "", settleMonth: "", settleType: "" })}>
        
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
          <label className="text-xs text-muted-foreground">정산월</label>
          <Input
            placeholder="정산월"
            value={search.settleMonth}
            onChange={(e) => setSearch({ ...search, settleMonth: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">정산유형</label>
          <Input
            placeholder="정산유형"
            value={search.settleType}
            onChange={(e) => setSearch({ ...search, settleType: e.target.value })}
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
