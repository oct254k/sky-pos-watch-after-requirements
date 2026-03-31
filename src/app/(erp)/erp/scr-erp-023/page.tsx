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
    { key: "roomName", label: "호실" },
    { key: "monthlyRent", label: "월임대료" },
    { key: "mgmtFee", label: "관리비" },
    { key: "applyStart", label: "적용시작" },
    { key: "applyEnd", label: "적용종료" },
    { key: "status", label: "상태" }
];

const mockData: Row[] = [
    { contractNo: "CT-2025-001", companyName: "스카이푸드", roomName: "A-101", monthlyRent: "3,500,000", mgmtFee: "500,000", applyStart: "2025-01", applyEnd: "2025-12", status: "적용중" },
    { contractNo: "CT-2025-002", companyName: "블루커피", roomName: "A-201", monthlyRent: "2,800,000", mgmtFee: "400,000", applyStart: "2025-03", applyEnd: "2026-02", status: "적용중" },
    { contractNo: "CT-2025-004", companyName: "레드패션", roomName: "B-102", monthlyRent: "1,500,000", mgmtFee: "300,000", applyStart: "2025-02", applyEnd: "2026-01", status: "적용중" }
];

export default function ScrErp023() {
  const [search, setSearch] = useState({ contractNo: "", companyName: "", applyYear: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-023 고정 임대료 현황 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ contractNo: "", companyName: "", applyYear: "" })}>
        
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
          <label className="text-xs text-muted-foreground">적용연도</label>
          <Input
            placeholder="적용연도"
            value={search.applyYear}
            onChange={(e) => setSearch({ ...search, applyYear: e.target.value })}
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
