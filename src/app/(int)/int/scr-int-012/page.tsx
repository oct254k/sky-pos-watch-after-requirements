"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; companyCode: string; companyName: string; posCompany: string; syncStatus: string; regDate: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", companyCode: "업체코드 샘플1", companyName: "업체명 데이터1", posCompany: "POS업체명 A", syncStatus: "2025-01-15", regDate: "정상" },
  { id: "2", companyCode: "업체코드 샘플2", companyName: "업체명 데이터2", posCompany: "POS업체명 B", syncStatus: "2025-01-16", regDate: "처리중" },
  { id: "3", companyCode: "업체코드 샘플3", companyName: "업체명 데이터3", posCompany: "POS업체명 C", syncStatus: "2025-01-17", regDate: "완료" },
];

const columns: Column<Row>[] = [
  { key: "companyCode", label: "업체코드" },
  { key: "companyName", label: "업체명" },
  { key: "posCompany", label: "POS업체명" },
  { key: "syncStatus", label: "연동상태" },
  { key: "regDate", label: "등록일" },
];

export default function ScrInt012() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">입점업체별 POS업체 관리</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">업체명/POS업체</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
