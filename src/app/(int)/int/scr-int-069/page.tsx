"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; commandId: string; agentName: string; commandType: string; execDate: string; execResult: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", commandId: "명령ID 샘플1", agentName: "Agent명 데이터1", commandType: "명령유형 A", execDate: "2025-01-15", execResult: "정상" },
  { id: "2", commandId: "명령ID 샘플2", agentName: "Agent명 데이터2", commandType: "명령유형 B", execDate: "2025-01-16", execResult: "처리중" },
  { id: "3", commandId: "명령ID 샘플3", agentName: "Agent명 데이터3", commandType: "명령유형 C", execDate: "2025-01-17", execResult: "완료" },
];

const columns: Column<Row>[] = [
  { key: "commandId", label: "명령ID" },
  { key: "agentName", label: "Agent명" },
  { key: "commandType", label: "명령유형" },
  { key: "execDate", label: "실행일시" },
  { key: "execResult", label: "결과" },
];

export default function ScrInt069() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Agent 원격명령 관리</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">Agent명/명령유형</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
