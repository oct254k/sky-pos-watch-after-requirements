"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; reconcileId: string; yearMonth: string; companyName: string; calcRent: string; reconcileStatus: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", reconcileId: "대사ID 샘플1", yearMonth: "년월 데이터1", companyName: "업체명 A", calcRent: "2025-01-15", reconcileStatus: "정상" },
  { id: "2", reconcileId: "대사ID 샘플2", yearMonth: "년월 데이터2", companyName: "업체명 B", calcRent: "2025-01-16", reconcileStatus: "처리중" },
  { id: "3", reconcileId: "대사ID 샘플3", yearMonth: "년월 데이터3", companyName: "업체명 C", calcRent: "2025-01-17", reconcileStatus: "완료" },
];

const columns: Column<Row>[] = [
  { key: "reconcileId", label: "대사ID" },
  { key: "yearMonth", label: "년월" },
  { key: "companyName", label: "업체명" },
  { key: "calcRent", label: "산정임대료" },
  { key: "reconcileStatus", label: "대사상태" },
];

export default function ScrInt030() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">월 변동임대료 대사 관리</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">년월</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
