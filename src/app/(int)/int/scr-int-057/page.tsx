"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; processId: string; processType: string; targetProperty: string; resultProperty: string; processDay: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", processId: "처리ID 샘플1", processType: "처리유형 데이터1", targetProperty: "대상물건 A", resultProperty: "2025-01-15", processDay: "정상" },
  { id: "2", processId: "처리ID 샘플2", processType: "처리유형 데이터2", targetProperty: "대상물건 B", resultProperty: "2025-01-16", processDay: "처리중" },
  { id: "3", processId: "처리ID 샘플3", processType: "처리유형 데이터3", targetProperty: "대상물건 C", resultProperty: "2025-01-17", processDay: "완료" },
];

const columns: Column<Row>[] = [
  { key: "processId", label: "처리ID" },
  { key: "processType", label: "처리유형" },
  { key: "targetProperty", label: "대상물건" },
  { key: "resultProperty", label: "결과물건" },
  { key: "processDay", label: "처리일" },
];

export default function ScrInt057() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">임대물건 합병/분할 관리</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">물건명/처리유형</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
