"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; propertyId: string; propertyName: string; location: string; area: string; purpose: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", propertyId: "물건ID 샘플1", propertyName: "물건명 데이터1", location: "위치 A", area: "2025-01-15", purpose: "정상" },
  { id: "2", propertyId: "물건ID 샘플2", propertyName: "물건명 데이터2", location: "위치 B", area: "2025-01-16", purpose: "처리중" },
  { id: "3", propertyId: "물건ID 샘플3", propertyName: "물건명 데이터3", location: "위치 C", area: "2025-01-17", purpose: "완료" },
];

const columns: Column<Row>[] = [
  { key: "propertyId", label: "물건ID" },
  { key: "propertyName", label: "물건명" },
  { key: "location", label: "위치" },
  { key: "area", label: "면적" },
  { key: "purpose", label: "용도" },
];

export default function ScrInt055() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">임대물건 등록/관리</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">물건명/위치</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
