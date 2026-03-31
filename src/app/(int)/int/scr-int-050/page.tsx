"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; receiveId: string; companyName: string; receiveDate: string; receiveCount: string; processStatus: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", receiveId: "수신ID 샘플1", companyName: "업체명 데이터1", receiveDate: "수신일시 A", receiveCount: "2025-01-15", processStatus: "정상" },
  { id: "2", receiveId: "수신ID 샘플2", companyName: "업체명 데이터2", receiveDate: "수신일시 B", receiveCount: "2025-01-16", processStatus: "처리중" },
  { id: "3", receiveId: "수신ID 샘플3", companyName: "업체명 데이터3", receiveDate: "수신일시 C", receiveCount: "2025-01-17", processStatus: "완료" },
];

const columns: Column<Row>[] = [
  { key: "receiveId", label: "수신ID" },
  { key: "companyName", label: "업체명" },
  { key: "receiveDate", label: "수신일시" },
  { key: "receiveCount", label: "수신건수" },
  { key: "processStatus", label: "처리상태" },
];

export default function ScrInt050() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">업체 매출 수신 현황 모니터링</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">업체명/일자</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
