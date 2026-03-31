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
    { key: "calcType", label: "산정유형" },
    { key: "baseRate", label: "기본요율(%)" },
    { key: "minRent", label: "최저보증임대료" },
    { key: "calcCycle", label: "산정주기" },
    { key: "applyMonth", label: "적용월" }
];

const mockData: Row[] = [
    { contractNo: "CT-2025-005", companyName: "옐로키친", calcType: "매출연동", baseRate: "15", minRent: "2,000,000", calcCycle: "월", applyMonth: "익월" },
    { contractNo: "CT-2025-006", companyName: "퍼플뷰티", calcType: "매출연동", baseRate: "12", minRent: "1,500,000", calcCycle: "월", applyMonth: "익월" },
    { contractNo: "CT-2025-007", companyName: "오렌지델리", calcType: "혼합형", baseRate: "10", minRent: "1,000,000", calcCycle: "분기", applyMonth: "분기익월" }
];

export default function ScrErp024() {
  const [search, setSearch] = useState({ contractNo: "", companyName: "", calcType: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-024 변동 임대료 산정 기준 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ contractNo: "", companyName: "", calcType: "" })}>
        
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
          <label className="text-xs text-muted-foreground">업체명</label>
          <Input
            placeholder="업체명"
            value={search.companyName}
            onChange={(e) => setSearch({ ...search, companyName: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">산정유형</label>
          <Input
            placeholder="산정유형"
            value={search.calcType}
            onChange={(e) => setSearch({ ...search, calcType: e.target.value })}
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
