"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; terminalId: string; terminalNo: string; storeName: string; vanProvider: string; status: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", terminalId: "단말ID 샘플1", terminalNo: "단말기번호 데이터1", storeName: "매장명 A", vanProvider: "2025-01-15", status: "정상" },
  { id: "2", terminalId: "단말ID 샘플2", terminalNo: "단말기번호 데이터2", storeName: "매장명 B", vanProvider: "2025-01-16", status: "처리중" },
  { id: "3", terminalId: "단말ID 샘플3", terminalNo: "단말기번호 데이터3", storeName: "매장명 C", vanProvider: "2025-01-17", status: "완료" },
];

const columns: Column<Row>[] = [
  { key: "terminalId", label: "단말ID" },
  { key: "terminalNo", label: "단말기번호" },
  { key: "storeName", label: "매장명" },
  { key: "vanProvider", label: "VAN사" },
  { key: "status", label: "상태" },
];

export default function ScrInt015() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">VAN 단말 관리</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">단말기번호/매장명</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
