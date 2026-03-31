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
    { key: "workType", label: "공사유형" },
    { key: "workScope", label: "공사범위" },
    { key: "startDate", label: "공사시작일" },
    { key: "endDate", label: "공사종료일" },
    { key: "cost", label: "예상비용" },
    { key: "approvalStatus", label: "승인상태" }
];

const mockData: Row[] = [
    { requestNo: "WK-2025-001", companyName: "스카이푸드", workType: "인테리어", workScope: "매장 전체 리모델링", startDate: "2025-04-01", endDate: "2025-04-20", cost: "25,000,000", approvalStatus: "승인" },
    { requestNo: "WK-2025-002", companyName: "블루커피", workType: "전기공사", workScope: "조명 교체", startDate: "2025-04-05", endDate: "2025-04-07", cost: "3,000,000", approvalStatus: "심사중" },
    { requestNo: "WK-2025-003", companyName: "핑크베이커리", workType: "배관공사", workScope: "주방 배관 보수", startDate: "2025-04-10", endDate: "2025-04-12", cost: "5,000,000", approvalStatus: "승인" }
];

export default function ScrErp038() {
  const [search, setSearch] = useState({ companyName: "", workType: "", approvalStatus: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-038 공사/인테리어 신청 현황 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ companyName: "", workType: "", approvalStatus: "" })}>
        
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
          <label className="text-xs text-muted-foreground">공사유형</label>
          <Input
            placeholder="공사유형"
            value={search.workType}
            onChange={(e) => setSearch({ ...search, workType: e.target.value })}
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
