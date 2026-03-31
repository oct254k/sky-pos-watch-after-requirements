"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; historyId: string; storeName: string; changeDate2: string; changeItem: string; changeContent: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", historyId: "이력ID 샘플1", storeName: "매장명 데이터1", changeDate2: "변경일시 A", changeItem: "2025-01-15", changeContent: "정상" },
  { id: "2", historyId: "이력ID 샘플2", storeName: "매장명 데이터2", changeDate2: "변경일시 B", changeItem: "2025-01-16", changeContent: "처리중" },
  { id: "3", historyId: "이력ID 샘플3", storeName: "매장명 데이터3", changeDate2: "변경일시 C", changeItem: "2025-01-17", changeContent: "완료" },
];

const columns: Column<Row>[] = [
  { key: "historyId", label: "이력ID" },
  { key: "storeName", label: "매장명" },
  { key: "changeDate2", label: "변경일시" },
  { key: "changeItem", label: "변경항목" },
  { key: "changeContent", label: "변경내용" },
];

export default function ScrInt075() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">매출변경 이력 관리</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">변경일/매장명</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
