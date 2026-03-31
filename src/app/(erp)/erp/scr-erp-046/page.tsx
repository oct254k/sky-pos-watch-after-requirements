"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";

type Row = Record<string, unknown>;

const columns: Column<Row>[] = [
    { key: "systemName", label: "시스템명" },
    { key: "syncType", label: "동기화유형" },
    { key: "syncDate", label: "동기화일시" },
    { key: "totalRecords", label: "대상건수" },
    { key: "successRecords", label: "성공건수" },
    { key: "failRecords", label: "실패건수" },
    { key: "syncStatus", label: "상태" },
    { key: "duration", label: "소요시간" }
];

const mockData: Row[] = [
    { systemName: "POS시스템", syncType: "매출데이터", syncDate: "2025-03-29 01:00", totalRecords: "1,245", successRecords: "1,230", failRecords: "15", syncStatus: "완료(일부오류)", duration: "3분 25초" },
    { systemName: "VAN시스템", syncType: "결제데이터", syncDate: "2025-03-29 02:00", totalRecords: "1,200", successRecords: "1,200", failRecords: "0", syncStatus: "완료", duration: "2분 10초" },
    { systemName: "회계시스템", syncType: "정산데이터", syncDate: "2025-03-29 06:00", totalRecords: "52", successRecords: "52", failRecords: "0", syncStatus: "완료", duration: "30초" }
];

export default function ScrErp046() {
  const [search, setSearch] = useState({ systemName: "", syncDate: "", syncStatus: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-046 데이터 동기화 상태 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ systemName: "", syncDate: "", syncStatus: "" })}>
        
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">시스템명</label>
          <Input
            placeholder="시스템명"
            value={search.systemName}
            onChange={(e) => setSearch({ ...search, systemName: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">동기화일</label>
          <Input
            placeholder="동기화일"
            value={search.syncDate}
            onChange={(e) => setSearch({ ...search, syncDate: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">동기화상태</label>
          <Input
            placeholder="동기화상태"
            value={search.syncStatus}
            onChange={(e) => setSearch({ ...search, syncStatus: e.target.value })}
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
