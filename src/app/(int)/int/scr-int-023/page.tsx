"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; controlId: string; yearMonth: string; startDate: string; endDate: string; status: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", controlId: "통제ID 샘플1", yearMonth: "년월 데이터1", startDate: "시작일 A", endDate: "2025-01-15", status: "정상" },
  { id: "2", controlId: "통제ID 샘플2", yearMonth: "년월 데이터2", startDate: "시작일 B", endDate: "2025-01-16", status: "처리중" },
  { id: "3", controlId: "통제ID 샘플3", yearMonth: "년월 데이터3", startDate: "시작일 C", endDate: "2025-01-17", status: "완료" },
];

const columns: Column<Row>[] = [
  { key: "controlId", label: "통제ID" },
  { key: "yearMonth", label: "년월" },
  { key: "startDate", label: "시작일" },
  { key: "endDate", label: "종료일" },
  { key: "status", label: "상태" },
];

export default function ScrInt023() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">월마감 기간 통제 관리</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">년월</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
