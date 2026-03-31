"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";

type Row = Record<string, unknown>;

const columns: Column<Row>[] = [
    { key: "classCode", label: "분류코드" },
    { key: "className", label: "분류명" },
    { key: "level", label: "레벨" },
    { key: "parentClass", label: "상위분류" },
    { key: "itemCount", label: "품목수" },
    { key: "useYn", label: "사용여부" },
    { key: "regDate", label: "등록일" }
];

const mockData: Row[] = [
    { classCode: "CL-01", className: "음료", level: "대분류", parentClass: "-", itemCount: "85", useYn: "Y", regDate: "2024-01-01" },
    { classCode: "CL-01-01", className: "커피", level: "중분류", parentClass: "음료", itemCount: "35", useYn: "Y", regDate: "2024-01-01" },
    { classCode: "CL-02", className: "식품", level: "대분류", parentClass: "-", itemCount: "200", useYn: "Y", regDate: "2024-01-01" },
    { classCode: "CL-03", className: "의류", level: "대분류", parentClass: "-", itemCount: "150", useYn: "Y", regDate: "2024-03-01" }
];

export default function ScrErp013() {
  const [search, setSearch] = useState({ classCode: "", className: "", level: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-013 품목 분류체계 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ classCode: "", className: "", level: "" })}>
        
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">분류코드</label>
          <Input
            placeholder="분류코드"
            value={search.classCode}
            onChange={(e) => setSearch({ ...search, classCode: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">분류명</label>
          <Input
            placeholder="분류명"
            value={search.className}
            onChange={(e) => setSearch({ ...search, className: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">분류레벨</label>
          <Input
            placeholder="분류레벨"
            value={search.level}
            onChange={(e) => setSearch({ ...search, level: e.target.value })}
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
