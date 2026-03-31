"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; logId: string; logType: string; occurDate: string; detail: string; logLevel: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", logId: "로그ID 샘플1", logType: "로그유형 데이터1", occurDate: "발생일시 A", detail: "2025-01-15", logLevel: "정상" },
  { id: "2", logId: "로그ID 샘플2", logType: "로그유형 데이터2", occurDate: "발생일시 B", detail: "2025-01-16", logLevel: "처리중" },
  { id: "3", logId: "로그ID 샘플3", logType: "로그유형 데이터3", occurDate: "발생일시 C", detail: "2025-01-17", logLevel: "완료" },
];

const columns: Column<Row>[] = [
  { key: "logId", label: "로그ID" },
  { key: "logType", label: "로그유형" },
  { key: "occurDate", label: "발생일시" },
  { key: "detail", label: "상세내용" },
  { key: "logLevel", label: "레벨" },
];

export default function ScrInt081() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">시스템 로그 관리</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">로그유형/기간</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
