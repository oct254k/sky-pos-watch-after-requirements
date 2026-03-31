"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; settleId: string; year: string; companyName: string; settleAmount: string; settleStatus: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", settleId: "정산ID 샘플1", year: "년도 데이터1", companyName: "업체명 A", settleAmount: "2025-01-15", settleStatus: "정상" },
  { id: "2", settleId: "정산ID 샘플2", year: "년도 데이터2", companyName: "업체명 B", settleAmount: "2025-01-16", settleStatus: "처리중" },
  { id: "3", settleId: "정산ID 샘플3", year: "년도 데이터3", companyName: "업체명 C", settleAmount: "2025-01-17", settleStatus: "완료" },
];

const columns: Column<Row>[] = [
  { key: "settleId", label: "정산ID" },
  { key: "year", label: "년도" },
  { key: "companyName", label: "업체명" },
  { key: "settleAmount", label: "정산금액" },
  { key: "settleStatus", label: "정산상태" },
];

export default function ScrInt033() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">연 임대료 정산</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">년도/업체명</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
