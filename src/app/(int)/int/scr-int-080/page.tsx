"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; partitionId: string; tableName: string; partitionName: string; dataCount: string; createDate: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", partitionId: "파티션ID 샘플1", tableName: "테이블명 데이터1", partitionName: "파티션명 A", dataCount: "2025-01-15", createDate: "정상" },
  { id: "2", partitionId: "파티션ID 샘플2", tableName: "테이블명 데이터2", partitionName: "파티션명 B", dataCount: "2025-01-16", createDate: "처리중" },
  { id: "3", partitionId: "파티션ID 샘플3", tableName: "테이블명 데이터3", partitionName: "파티션명 C", dataCount: "2025-01-17", createDate: "완료" },
];

const columns: Column<Row>[] = [
  { key: "partitionId", label: "파티션ID" },
  { key: "tableName", label: "테이블명" },
  { key: "partitionName", label: "파티션명" },
  { key: "dataCount", label: "데이터건수" },
  { key: "createDate", label: "생성일" },
];

export default function ScrInt080() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">파티션 현황</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">테이블명/상태</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
