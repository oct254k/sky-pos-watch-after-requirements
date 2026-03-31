"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; errorId: string; errorType: string; storeName: string; occurDate: string; errorDetail: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", errorId: "오류ID 샘플1", errorType: "오류유형 데이터1", storeName: "매장명 A", occurDate: "2025-01-15", errorDetail: "정상" },
  { id: "2", errorId: "오류ID 샘플2", errorType: "오류유형 데이터2", storeName: "매장명 B", occurDate: "2025-01-16", errorDetail: "처리중" },
  { id: "3", errorId: "오류ID 샘플3", errorType: "오류유형 데이터3", storeName: "매장명 C", occurDate: "2025-01-17", errorDetail: "완료" },
];

const columns: Column<Row>[] = [
  { key: "errorId", label: "오류ID" },
  { key: "errorType", label: "오류유형" },
  { key: "storeName", label: "매장명" },
  { key: "occurDate", label: "발생일시" },
  { key: "errorDetail", label: "오류내용" },
];

export default function ScrInt054() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">매출정보 오류 현황</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">일자/오류유형</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
