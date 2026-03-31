"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; ruleId: string; ruleName: string; category: string; effectiveDate: string; status: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", ruleId: "규정ID 샘플1", ruleName: "규정명 데이터1", category: "카테고리 A", effectiveDate: "2025-01-15", status: "정상" },
  { id: "2", ruleId: "규정ID 샘플2", ruleName: "규정명 데이터2", category: "카테고리 B", effectiveDate: "2025-01-16", status: "처리중" },
  { id: "3", ruleId: "규정ID 샘플3", ruleName: "규정명 데이터3", category: "카테고리 C", effectiveDate: "2025-01-17", status: "완료" },
];

const columns: Column<Row>[] = [
  { key: "ruleId", label: "규정ID" },
  { key: "ruleName", label: "규정명" },
  { key: "category", label: "카테고리" },
  { key: "effectiveDate", label: "시행일" },
  { key: "status", label: "상태" },
];

export default function ScrInt063() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">규정 및 방침 관리</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">규정명/카테고리</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
