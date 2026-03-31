"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; alertId: string; alertType: string; occurDate: string; content: string; readYn: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", alertId: "알림ID 샘플1", alertType: "알림유형 데이터1", occurDate: "발생일시 A", content: "2025-01-15", readYn: "정상" },
  { id: "2", alertId: "알림ID 샘플2", alertType: "알림유형 데이터2", occurDate: "발생일시 B", content: "2025-01-16", readYn: "처리중" },
  { id: "3", alertId: "알림ID 샘플3", alertType: "알림유형 데이터3", occurDate: "발생일시 C", content: "2025-01-17", readYn: "완료" },
];

const columns: Column<Row>[] = [
  { key: "alertId", label: "알림ID" },
  { key: "alertType", label: "알림유형" },
  { key: "occurDate", label: "발생일시" },
  { key: "content", label: "내용" },
  { key: "readYn", label: "읽음여부" },
];

export default function ScrInt083() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">알림 조회</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">알림유형/기간</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
