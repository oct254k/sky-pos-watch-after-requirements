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
    { key: "calcMonth", label: "산정월" },
    { key: "totalSales", label: "총매출액" },
    { key: "calcRate", label: "적용요율(%)" },
    { key: "calcRent", label: "산정임대료" },
    { key: "finalRent", label: "확정임대료" },
    { key: "status", label: "상태" }
];

const mockData: Row[] = [
    { contractNo: "CT-2025-005", companyName: "옐로키친", calcMonth: "2025-02", totalSales: "25,000,000", calcRate: "15", calcRent: "3,750,000", finalRent: "3,750,000", status: "확정" },
    { contractNo: "CT-2025-006", companyName: "퍼플뷰티", calcMonth: "2025-02", totalSales: "18,000,000", calcRate: "12", calcRent: "2,160,000", finalRent: "2,160,000", status: "확정" },
    { contractNo: "CT-2025-007", companyName: "오렌지델리", calcMonth: "2025-02", totalSales: "8,000,000", calcRate: "10", calcRent: "1,000,000", finalRent: "1,000,000", status: "미확정" }
];

export default function ScrErp025() {
  const [search, setSearch] = useState({ contractNo: "", companyName: "", calcMonth: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-025 임대료 산정 결과 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ contractNo: "", companyName: "", calcMonth: "" })}>
        
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
          <label className="text-xs text-muted-foreground">산정월</label>
          <Input
            placeholder="산정월"
            value={search.calcMonth}
            onChange={(e) => setSearch({ ...search, calcMonth: e.target.value })}
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
