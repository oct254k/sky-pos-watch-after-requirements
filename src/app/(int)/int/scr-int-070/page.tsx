"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; memberId: string; memberName: string; dept: string; position: string; regDate: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", memberId: "회원ID 샘플1", memberName: "회원명 데이터1", dept: "부서 A", position: "2025-01-15", regDate: "정상" },
  { id: "2", memberId: "회원ID 샘플2", memberName: "회원명 데이터2", dept: "부서 B", position: "2025-01-16", regDate: "처리중" },
  { id: "3", memberId: "회원ID 샘플3", memberName: "회원명 데이터3", dept: "부서 C", position: "2025-01-17", regDate: "완료" },
];

const columns: Column<Row>[] = [
  { key: "memberId", label: "회원ID" },
  { key: "memberName", label: "회원명" },
  { key: "dept", label: "부서" },
  { key: "position", label: "직급" },
  { key: "regDate", label: "등록일" },
];

export default function ScrInt070() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">회원정보 조회/검색</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">회원명/ID</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
