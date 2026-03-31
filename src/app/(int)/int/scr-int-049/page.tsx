"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; historyId: string; agentName: string; eventType: string; occurDate: string; detail: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", historyId: "이력ID 샘플1", agentName: "Agent명 데이터1", eventType: "이벤트유형 A", occurDate: "2025-01-15", detail: "정상" },
  { id: "2", historyId: "이력ID 샘플2", agentName: "Agent명 데이터2", eventType: "이벤트유형 B", occurDate: "2025-01-16", detail: "처리중" },
  { id: "3", historyId: "이력ID 샘플3", agentName: "Agent명 데이터3", eventType: "이벤트유형 C", occurDate: "2025-01-17", detail: "완료" },
];

const columns: Column<Row>[] = [
  { key: "historyId", label: "이력ID" },
  { key: "agentName", label: "Agent명" },
  { key: "eventType", label: "이벤트유형" },
  { key: "occurDate", label: "발생일시" },
  { key: "detail", label: "상세내용" },
];

export default function ScrInt049() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Agent 연계 상태 이력 조회</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">Agent명/기간</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
