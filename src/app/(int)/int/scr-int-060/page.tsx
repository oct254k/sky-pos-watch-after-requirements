"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; customerId: string; customerName: string; customerType: string; parentCustomer: string; status: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", customerId: "고객ID 샘플1", customerName: "고객명 데이터1", customerType: "고객유형 A", parentCustomer: "2025-01-15", status: "정상" },
  { id: "2", customerId: "고객ID 샘플2", customerName: "고객명 데이터2", customerType: "고객유형 B", parentCustomer: "2025-01-16", status: "처리중" },
  { id: "3", customerId: "고객ID 샘플3", customerName: "고객명 데이터3", customerType: "고객유형 C", parentCustomer: "2025-01-17", status: "완료" },
];

const columns: Column<Row>[] = [
  { key: "customerId", label: "고객ID" },
  { key: "customerName", label: "고객명" },
  { key: "customerType", label: "고객유형" },
  { key: "parentCustomer", label: "상위고객" },
  { key: "status", label: "상태" },
];

export default function ScrInt060() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">고객구조 관리</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">고객명/유형</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
