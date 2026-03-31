"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; historyId: string; companyName: string; changeType: string; changeDate: string; remark: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", historyId: "이력ID 샘플1", companyName: "업체명 데이터1", changeType: "변동유형 A", changeDate: "2025-01-15", remark: "정상" },
  { id: "2", historyId: "이력ID 샘플2", companyName: "업체명 데이터2", changeType: "변동유형 B", changeDate: "2025-01-16", remark: "처리중" },
  { id: "3", historyId: "이력ID 샘플3", companyName: "업체명 데이터3", changeType: "변동유형 C", changeDate: "2025-01-17", remark: "완료" },
];

const columns: Column<Row>[] = [
  { key: "historyId", label: "이력ID" },
  { key: "companyName", label: "업체명" },
  { key: "changeType", label: "변동유형" },
  { key: "changeDate", label: "변동일" },
  { key: "remark", label: "비고" },
];

export default function ScrInt064() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">시설 입주/변동/퇴거 이력 관리</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">업체명/유형</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
