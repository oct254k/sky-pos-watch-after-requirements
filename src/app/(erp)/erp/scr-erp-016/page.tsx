"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";

type Row = Record<string, unknown>;

const columns: Column<Row>[] = [
    { key: "itemCode", label: "품목코드" },
    { key: "itemName", label: "품목명" },
    { key: "category", label: "분류" },
    { key: "storeName", label: "매장명" },
    { key: "source", label: "출처" },
    { key: "regDate", label: "등록일" },
    { key: "daysUnmapped", label: "미매핑일수" }
];

const mockData: Row[] = [
    { itemCode: "ITM-003", itemName: "샌드위치", category: "식품", storeName: "스카이푸드", source: "ERP", regDate: "2024-03-15", daysUnmapped: "380" },
    { itemCode: "P-010", itemName: "시즌메뉴1", category: "음료", storeName: "블루커피", source: "POS", regDate: "2025-02-01", daysUnmapped: "57" },
    { itemCode: "P-015", itemName: "한정판매A", category: "디저트", storeName: "핑크베이커리", source: "POS", regDate: "2025-03-01", daysUnmapped: "29" }
];

export default function ScrErp016() {
  const [search, setSearch] = useState({ itemCode: "", storeName: "", category: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-016 미매핑 품목 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ itemCode: "", storeName: "", category: "" })}>
        
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">품목코드</label>
          <Input
            placeholder="품목코드"
            value={search.itemCode}
            onChange={(e) => setSearch({ ...search, itemCode: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">매장명</label>
          <Input
            placeholder="매장명"
            value={search.storeName}
            onChange={(e) => setSearch({ ...search, storeName: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">분류</label>
          <Input
            placeholder="분류"
            value={search.category}
            onChange={(e) => setSearch({ ...search, category: e.target.value })}
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
