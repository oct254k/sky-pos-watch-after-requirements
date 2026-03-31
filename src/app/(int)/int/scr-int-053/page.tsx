"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; cancelId: string; storeName: string; cancelDate: string; cancelAmount: string; reason: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", cancelId: "취소ID 샘플1", storeName: "매장명 데이터1", cancelDate: "취소일시 A", cancelAmount: "2025-01-15", reason: "정상" },
  { id: "2", cancelId: "취소ID 샘플2", storeName: "매장명 데이터2", cancelDate: "취소일시 B", cancelAmount: "2025-01-16", reason: "처리중" },
  { id: "3", cancelId: "취소ID 샘플3", storeName: "매장명 데이터3", cancelDate: "취소일시 C", cancelAmount: "2025-01-17", reason: "완료" },
];

const columns: Column<Row>[] = [
  { key: "cancelId", label: "취소ID" },
  { key: "storeName", label: "매장명" },
  { key: "cancelDate", label: "취소일시" },
  { key: "cancelAmount", label: "취소금액" },
  { key: "reason", label: "사유" },
];

export default function ScrInt053() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">현금영수증 취소 관리</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">일자/매장명</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
