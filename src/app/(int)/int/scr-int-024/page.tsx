"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; processId: string; yearMonth: string; companyName: string; processType: string; processStatus: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", processId: "처리ID 샘플1", yearMonth: "년월 데이터1", companyName: "업체명 A", processType: "2025-01-15", processStatus: "정상" },
  { id: "2", processId: "처리ID 샘플2", yearMonth: "년월 데이터2", companyName: "업체명 B", processType: "2025-01-16", processStatus: "처리중" },
  { id: "3", processId: "처리ID 샘플3", yearMonth: "년월 데이터3", companyName: "업체명 C", processType: "2025-01-17", processStatus: "완료" },
];

const columns: Column<Row>[] = [
  { key: "processId", label: "처리ID" },
  { key: "yearMonth", label: "년월" },
  { key: "companyName", label: "업체명" },
  { key: "processType", label: "처리유형" },
  { key: "processStatus", label: "처리상태" },
];

export default function ScrInt024() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">월마감 변경/이월처리 관리</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">년월/업체명</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
