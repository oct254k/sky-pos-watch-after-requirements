"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; companyCode: string; vanCompany: string; phone: string; contractStatus: string; regDate: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", companyCode: "업체코드 샘플1", vanCompany: "VAN업체명 데이터1", phone: "연락처 A", contractStatus: "2025-01-15", regDate: "정상" },
  { id: "2", companyCode: "업체코드 샘플2", vanCompany: "VAN업체명 데이터2", phone: "연락처 B", contractStatus: "2025-01-16", regDate: "처리중" },
  { id: "3", companyCode: "업체코드 샘플3", vanCompany: "VAN업체명 데이터3", phone: "연락처 C", contractStatus: "2025-01-17", regDate: "완료" },
];

const columns: Column<Row>[] = [
  { key: "companyCode", label: "업체코드" },
  { key: "vanCompany", label: "VAN업체명" },
  { key: "phone", label: "연락처" },
  { key: "contractStatus", label: "계약상태" },
  { key: "regDate", label: "등록일" },
];

export default function ScrInt014() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">VAN 업체 관리</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">VAN업체명</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
