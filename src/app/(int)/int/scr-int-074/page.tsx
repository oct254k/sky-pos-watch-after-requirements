"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; historyId: string; userName: string; loginDate: string; ipAddress: string; execResult: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", historyId: "이력ID 샘플1", userName: "사용자명 데이터1", loginDate: "로그인일시 A", ipAddress: "2025-01-15", execResult: "정상" },
  { id: "2", historyId: "이력ID 샘플2", userName: "사용자명 데이터2", loginDate: "로그인일시 B", ipAddress: "2025-01-16", execResult: "처리중" },
  { id: "3", historyId: "이력ID 샘플3", userName: "사용자명 데이터3", loginDate: "로그인일시 C", ipAddress: "2025-01-17", execResult: "완료" },
];

const columns: Column<Row>[] = [
  { key: "historyId", label: "이력ID" },
  { key: "userName", label: "사용자명" },
  { key: "loginDate", label: "로그인일시" },
  { key: "ipAddress", label: "IP주소" },
  { key: "execResult", label: "결과" },
];

export default function ScrInt074() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">로그인 이력 관리</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">사용자/기간</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
