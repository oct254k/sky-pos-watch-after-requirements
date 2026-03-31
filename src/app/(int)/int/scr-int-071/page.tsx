"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; requestId: string; requesterName: string; dept: string; applyDate: string; approvalStatus: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", requestId: "신청ID 샘플1", requesterName: "신청자명 데이터1", dept: "부서 A", applyDate: "2025-01-15", approvalStatus: "정상" },
  { id: "2", requestId: "신청ID 샘플2", requesterName: "신청자명 데이터2", dept: "부서 B", applyDate: "2025-01-16", approvalStatus: "처리중" },
  { id: "3", requestId: "신청ID 샘플3", requesterName: "신청자명 데이터3", dept: "부서 C", applyDate: "2025-01-17", approvalStatus: "완료" },
];

const columns: Column<Row>[] = [
  { key: "requestId", label: "신청ID" },
  { key: "requesterName", label: "신청자명" },
  { key: "dept", label: "부서" },
  { key: "applyDate", label: "신청일" },
  { key: "approvalStatus", label: "승인상태" },
];

export default function ScrInt071() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">회원가입 승인</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">신청자명/신청일</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
