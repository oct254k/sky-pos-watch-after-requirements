"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; productCode: string; productName: string; regPrice: string; marketPrice: string; diffRate: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", productCode: "품목코드 샘플1", productName: "품목명 데이터1", regPrice: "등록가격 A", marketPrice: "2025-01-15", diffRate: "정상" },
  { id: "2", productCode: "품목코드 샘플2", productName: "품목명 데이터2", regPrice: "등록가격 B", marketPrice: "2025-01-16", diffRate: "처리중" },
  { id: "3", productCode: "품목코드 샘플3", productName: "품목명 데이터3", regPrice: "등록가격 C", marketPrice: "2025-01-17", diffRate: "완료" },
];

const columns: Column<Row>[] = [
  { key: "productCode", label: "품목코드" },
  { key: "productName", label: "품목명" },
  { key: "regPrice", label: "등록가격" },
  { key: "marketPrice", label: "시장가격" },
  { key: "diffRate", label: "차이율" },
];

export default function ScrInt018() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">품목 판매가격 비교/검증</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">품목명/업체명</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
