"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";

type Row = Record<string, unknown>;

const columns: Column<Row>[] = [
    { key: "companyName", label: "업체명" },
    { key: "phone", label: "연락처" },
    { key: "email", label: "이메일" },
    { key: "changeDate", label: "변경일" },
    { key: "changeContent", label: "변경내용" }
];

const mockData: Row[] = [
    { companyName: "스카이푸드", phone: "02-1234-5678", email: "sky@food.com", changeDate: "2025-02-01", changeContent: "연락처 변경" },
    { companyName: "블루커피", phone: "02-2345-6789", email: "blue@coffee.com", changeDate: "2025-01-20", changeContent: "이메일 변경" },
    { companyName: "레드패션", phone: "02-3456-7890", email: "red@fashion.com", changeDate: "2025-03-10", changeContent: "담당자 변경" }
];

export default function ScrErp009() {
  const [search, setSearch] = useState({ companyName: "", changeDate: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-009 업체 연락정보/변경이력 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ companyName: "", changeDate: "" })}>
        
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
          <label className="text-xs text-muted-foreground">변경일</label>
          <Input
            placeholder="변경일"
            value={search.changeDate}
            onChange={(e) => setSearch({ ...search, changeDate: e.target.value })}
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
