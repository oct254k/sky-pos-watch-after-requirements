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
    { key: "contractType", label: "계약유형" },
    { key: "startDate", label: "시작일" },
    { key: "endDate", label: "종료일" },
    { key: "status", label: "상태" },
    { key: "monthlyRent", label: "월임대료" },
    { key: "deposit", label: "보증금" }
];

const mockData: Row[] = [
    { contractNo: "CT-2025-001", companyName: "스카이푸드", contractType: "일반임대", startDate: "2025-01-01", endDate: "2025-12-31", status: "계약중", monthlyRent: "3,500,000", deposit: "35,000,000" },
    { contractNo: "CT-2025-002", companyName: "블루커피", contractType: "특약임대", startDate: "2025-03-01", endDate: "2026-02-28", status: "계약중", monthlyRent: "2,800,000", deposit: "28,000,000" },
    { contractNo: "CT-2025-003", companyName: "그린마트", contractType: "일반임대", startDate: "2024-06-01", endDate: "2025-05-31", status: "만료예정", monthlyRent: "4,200,000", deposit: "42,000,000" },
    { contractNo: "CT-2025-004", companyName: "레드패션", contractType: "수수료임대", startDate: "2025-02-01", endDate: "2026-01-31", status: "계약중", monthlyRent: "1,500,000", deposit: "15,000,000" }
];

export default function ScrErp001() {
  const [search, setSearch] = useState({ contractNo: "", companyName: "", contractType: "", status: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-001 계약 통합 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ contractNo: "", companyName: "", contractType: "", status: "" })}>
        
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
          <label className="text-xs text-muted-foreground">계약유형</label>
          <Input
            placeholder="계약유형"
            value={search.contractType}
            onChange={(e) => setSearch({ ...search, contractType: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">상태</label>
          <Input
            placeholder="상태"
            value={search.status}
            onChange={(e) => setSearch({ ...search, status: e.target.value })}
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
