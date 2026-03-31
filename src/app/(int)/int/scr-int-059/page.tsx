"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; spaceId: string; spaceName: string; floor: string; area: string; purpose: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", spaceId: "공간ID 샘플1", spaceName: "공간명 데이터1", floor: "층 A", area: "2025-01-15", purpose: "정상" },
  { id: "2", spaceId: "공간ID 샘플2", spaceName: "공간명 데이터2", floor: "층 B", area: "2025-01-16", purpose: "처리중" },
  { id: "3", spaceId: "공간ID 샘플3", spaceName: "공간명 데이터3", floor: "층 C", area: "2025-01-17", purpose: "완료" },
];

const columns: Column<Row>[] = [
  { key: "spaceId", label: "공간ID" },
  { key: "spaceName", label: "공간명" },
  { key: "floor", label: "층" },
  { key: "area", label: "면적" },
  { key: "purpose", label: "용도" },
];

export default function ScrInt059() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Space(물리공간) 관리</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">공간명/층</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
