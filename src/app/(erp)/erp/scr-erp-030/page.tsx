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
    { key: "reductionType", label: "감면유형" },
    { key: "originalRent", label: "원임대료" },
    { key: "reductionAmount", label: "감면액" },
    { key: "finalRent", label: "최종임대료" },
    { key: "applyPeriod", label: "적용기간" },
    { key: "status", label: "상태" }
];

const mockData: Row[] = [
    { companyName: "그린마트", contractNo: "CT-2025-003", reductionType: "경영지원", originalRent: "4,200,000", reductionAmount: "1,200,000", finalRent: "3,000,000", applyPeriod: "2025-03~2025-05", status: "적용중" },
    { companyName: "옐로키친", contractNo: "CT-2025-005", reductionType: "시설공사", originalRent: "3,750,000", reductionAmount: "750,000", finalRent: "3,000,000", applyPeriod: "2025-03", status: "적용중" },
    { companyName: "핑크베이커리", contractNo: "CT-2024-008", reductionType: "재계약혜택", originalRent: "2,500,000", reductionAmount: "250,000", finalRent: "2,250,000", applyPeriod: "2025-01~2025-06", status: "적용중" }
];

export default function ScrErp030() {
  const [search, setSearch] = useState({ companyName: "", reductionType: "", applyMonth: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-030 임대료 감면 현황 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ companyName: "", reductionType: "", applyMonth: "" })}>
        
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
          <label className="text-xs text-muted-foreground">감면유형</label>
          <Input
            placeholder="감면유형"
            value={search.reductionType}
            onChange={(e) => setSearch({ ...search, reductionType: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">적용월</label>
          <Input
            placeholder="적용월"
            value={search.applyMonth}
            onChange={(e) => setSearch({ ...search, applyMonth: e.target.value })}
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
