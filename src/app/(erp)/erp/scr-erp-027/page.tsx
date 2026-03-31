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
    { key: "roomName", label: "호실" },
    { key: "calcMonth", label: "산정월" },
    { key: "commonMgmt", label: "공용관리비" },
    { key: "privateMgmt", label: "전용관리비" },
    { key: "utilityFee", label: "공과금" },
    { key: "totalMgmt", label: "합계" },
    { key: "status", label: "상태" }
];

const mockData: Row[] = [
    { companyName: "스카이푸드", roomName: "A-101", calcMonth: "2025-03", commonMgmt: "200,000", privateMgmt: "150,000", utilityFee: "150,000", totalMgmt: "500,000", status: "확정" },
    { companyName: "블루커피", roomName: "A-201", calcMonth: "2025-03", commonMgmt: "180,000", privateMgmt: "120,000", utilityFee: "100,000", totalMgmt: "400,000", status: "확정" },
    { companyName: "레드패션", roomName: "B-102", calcMonth: "2025-03", commonMgmt: "150,000", privateMgmt: "80,000", utilityFee: "70,000", totalMgmt: "300,000", status: "미확정" }
];

export default function ScrErp027() {
  const [search, setSearch] = useState({ companyName: "", calcMonth: "", mgmtType: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-027 관리비 산정 내역 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ companyName: "", calcMonth: "", mgmtType: "" })}>
        
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
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">관리비유형</label>
          <Input
            placeholder="관리비유형"
            value={search.mgmtType}
            onChange={(e) => setSearch({ ...search, mgmtType: e.target.value })}
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
