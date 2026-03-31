"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";

type Row = Record<string, unknown>;

const columns: Column<Row>[] = [
    { key: "roomName", label: "호실명" },
    { key: "workType", label: "공사유형" },
    { key: "workDate", label: "공사일" },
    { key: "cost", label: "비용" },
    { key: "status", label: "상태" }
];

const mockData: Row[] = [
    { roomName: "A-101", workType: "인테리어", workDate: "2025-01-10", cost: "12,000,000", status: "완료" },
    { roomName: "B-301", workType: "전기공사", workDate: "2025-02-15", cost: "3,500,000", status: "진행중" },
    { roomName: "A-201", workType: "배관공사", workDate: "2024-11-20", cost: "8,000,000", status: "완료" }
];

export default function ScrErp006() {
  const [search, setSearch] = useState({ roomName: "", workType: "", workDate: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-006 시설 개선 이력/도면 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ roomName: "", workType: "", workDate: "" })}>
        
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">호실명</label>
          <Input
            placeholder="호실명"
            value={search.roomName}
            onChange={(e) => setSearch({ ...search, roomName: e.target.value })}
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
          <label className="text-xs text-muted-foreground">공사일</label>
          <Input
            placeholder="공사일"
            value={search.workDate}
            onChange={(e) => setSearch({ ...search, workDate: e.target.value })}
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
