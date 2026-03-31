"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; rentId: string; companyName: string; storeName: string; fixedRent: string; applyPeriod: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", rentId: "임대료ID 샘플1", companyName: "업체명 데이터1", storeName: "매장명 A", fixedRent: "2025-01-15", applyPeriod: "정상" },
  { id: "2", rentId: "임대료ID 샘플2", companyName: "업체명 데이터2", storeName: "매장명 B", fixedRent: "2025-01-16", applyPeriod: "처리중" },
  { id: "3", rentId: "임대료ID 샘플3", companyName: "업체명 데이터3", storeName: "매장명 C", fixedRent: "2025-01-17", applyPeriod: "완료" },
];

const columns: Column<Row>[] = [
  { key: "rentId", label: "임대료ID" },
  { key: "companyName", label: "업체명" },
  { key: "storeName", label: "매장명" },
  { key: "fixedRent", label: "고정임대료" },
  { key: "applyPeriod", label: "적용기간" },
];

export default function ScrInt031() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">고정/기본 임대료 조회</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">업체명/매장명</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
