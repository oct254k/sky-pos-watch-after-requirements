"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; reportId: string; reportPeriod: string; reportType: string; author: string; status: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", reportId: "보고ID 샘플1", reportPeriod: "보고기간 데이터1", reportType: "보고유형 A", author: "2025-01-15", status: "정상" },
  { id: "2", reportId: "보고ID 샘플2", reportPeriod: "보고기간 데이터2", reportType: "보고유형 B", author: "2025-01-16", status: "처리중" },
  { id: "3", reportId: "보고ID 샘플3", reportPeriod: "보고기간 데이터3", reportType: "보고유형 C", author: "2025-01-17", status: "완료" },
];

const columns: Column<Row>[] = [
  { key: "reportId", label: "보고ID" },
  { key: "reportPeriod", label: "보고기간" },
  { key: "reportType", label: "보고유형" },
  { key: "author", label: "작성자" },
  { key: "status", label: "상태" },
];

export default function ScrInt067() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">상업시설 현황 보고 관리</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">보고기간/유형</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
