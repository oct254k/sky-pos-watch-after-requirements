"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";

type Row = Record<string, unknown>;

const columns: Column<Row>[] = [
    { key: "companyCode", label: "업체코드" },
    { key: "companyName", label: "업체명" },
    { key: "bizNo", label: "사업자번호" },
    { key: "ceo", label: "대표자" },
    { key: "bizType", label: "업종" },
    { key: "contractCount", label: "계약수" }
];

const mockData: Row[] = [
    { companyCode: "V-001", companyName: "스카이푸드", bizNo: "123-45-67890", ceo: "홍길동", bizType: "음식점", contractCount: "2" },
    { companyCode: "V-002", companyName: "블루커피", bizNo: "234-56-78901", ceo: "김영희", bizType: "카페", contractCount: "1" },
    { companyCode: "V-003", companyName: "그린마트", bizNo: "345-67-89012", ceo: "박철수", bizType: "소매", contractCount: "1" },
    { companyCode: "V-004", companyName: "레드패션", bizNo: "456-78-90123", ceo: "이미영", bizType: "의류", contractCount: "3" }
];

export default function ScrErp007() {
  const [search, setSearch] = useState({ companyCode: "", companyName: "", bizNo: "", bizType: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-007 업체 통합 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ companyCode: "", companyName: "", bizNo: "", bizType: "" })}>
        
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">업체코드</label>
          <Input
            placeholder="업체코드"
            value={search.companyCode}
            onChange={(e) => setSearch({ ...search, companyCode: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">업체명</label>
          <Input
            placeholder="업체명"
            value={search.companyName}
            onChange={(e) => setSearch({ ...search, companyName: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">사업자번호</label>
          <Input
            placeholder="사업자번호"
            value={search.bizNo}
            onChange={(e) => setSearch({ ...search, bizNo: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">업종</label>
          <Input
            placeholder="업종"
            value={search.bizType}
            onChange={(e) => setSearch({ ...search, bizType: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={mockData} />
      <ActionBar>
        <ActionButton label="엑셀 다운로드" variant="outline" onClick={() => alert("엑셀 다운로드")} />
      </ActionBar>
    </div>
  );
}
