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
    { key: "adType", label: "광고유형" },
    { key: "adLocation", label: "광고위치" },
    { key: "requestDate", label: "신청일" },
    { key: "period", label: "희망기간" },
    { key: "cost", label: "비용" },
    { key: "approvalStatus", label: "승인상태" }
];

const mockData: Row[] = [
    { requestNo: "AD-2025-001", companyName: "블루커피", adType: "배너광고", adLocation: "1층 중앙", requestDate: "2025-03-01", period: "2025-04~2025-06", cost: "3,000,000", approvalStatus: "승인" },
    { requestNo: "AD-2025-002", companyName: "스카이푸드", adType: "전단지", adLocation: "전 층", requestDate: "2025-03-10", period: "2025-04", cost: "500,000", approvalStatus: "심사중" },
    { requestNo: "AD-2025-003", companyName: "레드패션", adType: "디지털사이니지", adLocation: "엘리베이터 옆", requestDate: "2025-03-15", period: "2025-04~2025-05", cost: "2,000,000", approvalStatus: "반려" }
];

export default function ScrErp036() {
  const [search, setSearch] = useState({ companyName: "", adType: "", approvalStatus: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-036 광고/판촉 신청 현황 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ companyName: "", adType: "", approvalStatus: "" })}>
        
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
          <label className="text-xs text-muted-foreground">광고유형</label>
          <Input
            placeholder="광고유형"
            value={search.adType}
            onChange={(e) => setSearch({ ...search, adType: e.target.value })}
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
