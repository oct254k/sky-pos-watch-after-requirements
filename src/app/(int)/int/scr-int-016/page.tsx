"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; linkId: string; linkType: string; targetCount: string; processStatus: string; processDate: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", linkId: "연계ID 샘플1", linkType: "연계유형 데이터1", targetCount: "대상건수 A", processStatus: "2025-01-15", processDate: "정상" },
  { id: "2", linkId: "연계ID 샘플2", linkType: "연계유형 데이터2", targetCount: "대상건수 B", processStatus: "2025-01-16", processDate: "처리중" },
  { id: "3", linkId: "연계ID 샘플3", linkType: "연계유형 데이터3", targetCount: "대상건수 C", processStatus: "2025-01-17", processDate: "완료" },
];

const columns: Column<Row>[] = [
  { key: "linkId", label: "연계ID" },
  { key: "linkType", label: "연계유형" },
  { key: "targetCount", label: "대상건수" },
  { key: "processStatus", label: "처리상태" },
  { key: "processDate", label: "처리일시" },
];

export default function ScrInt016() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">ERP 수동연계</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">연계일자</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
