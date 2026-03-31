"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; collectId: string; collectDate: string; companyName: string; collectAmount: string; collectMethod: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", collectId: "수납ID 샘플1", collectDate: "수납일 데이터1", companyName: "업체명 A", collectAmount: "2025-01-15", collectMethod: "정상" },
  { id: "2", collectId: "수납ID 샘플2", collectDate: "수납일 데이터2", companyName: "업체명 B", collectAmount: "2025-01-16", collectMethod: "처리중" },
  { id: "3", collectId: "수납ID 샘플3", collectDate: "수납일 데이터3", companyName: "업체명 C", collectAmount: "2025-01-17", collectMethod: "완료" },
];

const columns: Column<Row>[] = [
  { key: "collectId", label: "수납ID" },
  { key: "collectDate", label: "수납일" },
  { key: "companyName", label: "업체명" },
  { key: "collectAmount", label: "수납금액" },
  { key: "collectMethod", label: "수납방법" },
];

export default function ScrInt035() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">수납내역 조회</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">수납일/업체명</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
