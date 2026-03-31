"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; inspectionId: string; storeName: string; inspectionDate: string; score: string; result: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", inspectionId: "점검ID 샘플1", storeName: "매장명 데이터1", inspectionDate: "점검일 A", score: "2025-01-15", result: "정상" },
  { id: "2", inspectionId: "점검ID 샘플2", storeName: "매장명 데이터2", inspectionDate: "점검일 B", score: "2025-01-16", result: "처리중" },
  { id: "3", inspectionId: "점검ID 샘플3", storeName: "매장명 데이터3", inspectionDate: "점검일 C", score: "2025-01-17", result: "완료" },
];

const columns: Column<Row>[] = [
  { key: "inspectionId", label: "점검ID" },
  { key: "storeName", label: "매장명" },
  { key: "inspectionDate", label: "점검일" },
  { key: "score", label: "점수" },
  { key: "result", label: "점검결과" },
];

export default function ScrInt065() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">미스터리 쇼퍼 운영관리</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">매장명/점검일</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
