"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; collectId2: string; collectDate2: string; targetStore: string; collectCount: string; status: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", collectId2: "수집ID 샘플1", collectDate2: "수집일시 데이터1", targetStore: "대상매장 A", collectCount: "2025-01-15", status: "정상" },
  { id: "2", collectId2: "수집ID 샘플2", collectDate2: "수집일시 데이터2", targetStore: "대상매장 B", collectCount: "2025-01-16", status: "처리중" },
  { id: "3", collectId2: "수집ID 샘플3", collectDate2: "수집일시 데이터3", targetStore: "대상매장 C", collectCount: "2025-01-17", status: "완료" },
];

const columns: Column<Row>[] = [
  { key: "collectId2", label: "수집ID" },
  { key: "collectDate2", label: "수집일시" },
  { key: "targetStore", label: "대상매장" },
  { key: "collectCount", label: "수집건수" },
  { key: "status", label: "상태" },
];

export default function ScrInt051() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">매출 데이터 수집 모니터링</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">수집일/상태</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
