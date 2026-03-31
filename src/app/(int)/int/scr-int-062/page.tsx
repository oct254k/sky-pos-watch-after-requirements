"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; connectionId: string; contractNo: string; storeName: string; connectionDate: string; status: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", connectionId: "연결ID 샘플1", contractNo: "계약번호 데이터1", storeName: "매장명 A", connectionDate: "2025-01-15", status: "정상" },
  { id: "2", connectionId: "연결ID 샘플2", contractNo: "계약번호 데이터2", storeName: "매장명 B", connectionDate: "2025-01-16", status: "처리중" },
  { id: "3", connectionId: "연결ID 샘플3", contractNo: "계약번호 데이터3", storeName: "매장명 C", connectionDate: "2025-01-17", status: "완료" },
];

const columns: Column<Row>[] = [
  { key: "connectionId", label: "연결ID" },
  { key: "contractNo", label: "계약번호" },
  { key: "storeName", label: "매장명" },
  { key: "connectionDate", label: "연결일" },
  { key: "status", label: "상태" },
];

export default function ScrInt062() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">계약/매장 연결 관리</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">계약번호/매장명</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
