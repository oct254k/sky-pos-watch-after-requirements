"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; evalId: string; facilityName: string; evalPeriod: string; evalScore: string; grade: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", evalId: "평가ID 샘플1", facilityName: "시설명 데이터1", evalPeriod: "평가기간 A", evalScore: "2025-01-15", grade: "정상" },
  { id: "2", evalId: "평가ID 샘플2", facilityName: "시설명 데이터2", evalPeriod: "평가기간 B", evalScore: "2025-01-16", grade: "처리중" },
  { id: "3", evalId: "평가ID 샘플3", facilityName: "시설명 데이터3", evalPeriod: "평가기간 C", evalScore: "2025-01-17", grade: "완료" },
];

const columns: Column<Row>[] = [
  { key: "evalId", label: "평가ID" },
  { key: "facilityName", label: "시설명" },
  { key: "evalPeriod", label: "평가기간" },
  { key: "evalScore", label: "평가점수" },
  { key: "grade", label: "등급" },
];

export default function ScrInt066() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">상업시설 평가관리</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">시설명/평가기간</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
