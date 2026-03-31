"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";

type Row = Record<string, unknown>;

const columns: Column<Row>[] = [
    { key: "requestNo", label: "신청번호" },
    { key: "companyName", label: "업체명" },
    { key: "popupName", label: "팝업매장명" },
    { key: "location", label: "희망위치" },
    { key: "startDate", label: "시작일" },
    { key: "endDate", label: "종료일" },
    { key: "rentFee", label: "사용료" },
    { key: "approvalStatus", label: "승인상태" }
];

const mockData: Row[] = [
    { requestNo: "PU-2025-001", companyName: "화이트코스메틱", popupName: "봄신상팝업", location: "1층 중앙광장", startDate: "2025-04-01", endDate: "2025-04-15", rentFee: "5,000,000", approvalStatus: "승인" },
    { requestNo: "PU-2025-002", companyName: "블랙디자인", popupName: "아트마켓", location: "2층 로비", startDate: "2025-04-10", endDate: "2025-04-20", rentFee: "3,000,000", approvalStatus: "심사중" },
    { requestNo: "PU-2025-003", companyName: "실버주얼리", popupName: "주얼리페어", location: "1층 입구", startDate: "2025-05-01", endDate: "2025-05-10", rentFee: "4,000,000", approvalStatus: "승인" }
];

export default function ScrErp039() {
  const [search, setSearch] = useState({ companyName: "", location: "", approvalStatus: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-039 팝업매장 신청 현황 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ companyName: "", location: "", approvalStatus: "" })}>
        
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
          <label className="text-xs text-muted-foreground">희망위치</label>
          <Input
            placeholder="희망위치"
            value={search.location}
            onChange={(e) => setSearch({ ...search, location: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">승인상태</label>
          <Input
            placeholder="승인상태"
            value={search.approvalStatus}
            onChange={(e) => setSearch({ ...search, approvalStatus: e.target.value })}
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
