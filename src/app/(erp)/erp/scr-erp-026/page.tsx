"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";

type Row = Record<string, unknown>;

const columns: Column<Row>[] = [
    { key: "noticeNo", label: "고지번호" },
    { key: "companyName", label: "업체명" },
    { key: "noticeMonth", label: "고지월" },
    { key: "rentAmount", label: "임대료" },
    { key: "mgmtFee", label: "관리비" },
    { key: "totalAmount", label: "합계" },
    { key: "noticeDate", label: "고지일" },
    { key: "noticeStatus", label: "고지상태" }
];

const mockData: Row[] = [
    { noticeNo: "NTC-202503-001", companyName: "스카이푸드", noticeMonth: "2025-03", rentAmount: "3,500,000", mgmtFee: "500,000", totalAmount: "4,000,000", noticeDate: "2025-03-01", noticeStatus: "발송완료" },
    { noticeNo: "NTC-202503-002", companyName: "블루커피", noticeMonth: "2025-03", rentAmount: "2,800,000", mgmtFee: "400,000", totalAmount: "3,200,000", noticeDate: "2025-03-01", noticeStatus: "발송완료" },
    { noticeNo: "NTC-202503-003", companyName: "옐로키친", noticeMonth: "2025-03", rentAmount: "3,750,000", mgmtFee: "350,000", totalAmount: "4,100,000", noticeDate: "2025-03-05", noticeStatus: "미발송" }
];

export default function ScrErp026() {
  const [search, setSearch] = useState({ companyName: "", noticeMonth: "", noticeStatus: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-026 임대료 고지 내역 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ companyName: "", noticeMonth: "", noticeStatus: "" })}>
        
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
          <label className="text-xs text-muted-foreground">고지월</label>
          <Input
            placeholder="고지월"
            value={search.noticeMonth}
            onChange={(e) => setSearch({ ...search, noticeMonth: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">고지상태</label>
          <Input
            placeholder="고지상태"
            value={search.noticeStatus}
            onChange={(e) => setSearch({ ...search, noticeStatus: e.target.value })}
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
