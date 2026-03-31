"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; sendId: string; sendType: string; receiver: string; sendDate: string; status: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", sendId: "전송ID 샘플1", sendType: "전송유형 데이터1", receiver: "수신자 A", sendDate: "2025-01-15", status: "정상" },
  { id: "2", sendId: "전송ID 샘플2", sendType: "전송유형 데이터2", receiver: "수신자 B", sendDate: "2025-01-16", status: "처리중" },
  { id: "3", sendId: "전송ID 샘플3", sendType: "전송유형 데이터3", receiver: "수신자 C", sendDate: "2025-01-17", status: "완료" },
];

const columns: Column<Row>[] = [
  { key: "sendId", label: "전송ID" },
  { key: "sendType", label: "전송유형" },
  { key: "receiver", label: "수신자" },
  { key: "sendDate", label: "전송일시" },
  { key: "status", label: "상태" },
];

export default function ScrInt076() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">메일/SMS 전송이력 관리</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">수신자/전송일</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
