"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; orderId: string; orderNo: string; storeName: string; payAmount: string; payDate: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", orderId: "주문ID 샘플1", orderNo: "주문번호 데이터1", storeName: "매장명 A", payAmount: "2025-01-15", payDate: "정상" },
  { id: "2", orderId: "주문ID 샘플2", orderNo: "주문번호 데이터2", storeName: "매장명 B", payAmount: "2025-01-16", payDate: "처리중" },
  { id: "3", orderId: "주문ID 샘플3", orderNo: "주문번호 데이터3", storeName: "매장명 C", payAmount: "2025-01-17", payDate: "완료" },
];

const columns: Column<Row>[] = [
  { key: "orderId", label: "주문ID" },
  { key: "orderNo", label: "주문번호" },
  { key: "storeName", label: "매장명" },
  { key: "payAmount", label: "결제금액" },
  { key: "payDate", label: "결제일시" },
];

export default function ScrInt027() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">스마트오더 결제수신 조회</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">주문번호/매장명</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
