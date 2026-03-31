"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; processId: string; processType: string; processDate: string; target: string; processResult: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", processId: "처리ID 샘플1", processType: "처리유형 데이터1", processDate: "처리일시 A", target: "2025-01-15", processResult: "정상" },
  { id: "2", processId: "처리ID 샘플2", processType: "처리유형 데이터2", processDate: "처리일시 B", target: "2025-01-16", processResult: "처리중" },
  { id: "3", processId: "처리ID 샘플3", processType: "처리유형 데이터3", processDate: "처리일시 C", target: "2025-01-17", processResult: "완료" },
];

const columns: Column<Row>[] = [
  { key: "processId", label: "처리ID" },
  { key: "processType", label: "처리유형" },
  { key: "processDate", label: "처리일시" },
  { key: "target", label: "대상" },
  { key: "processResult", label: "처리결과" },
];

export default function ScrInt082() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">처리 내역 조회</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">처리유형/기간</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
