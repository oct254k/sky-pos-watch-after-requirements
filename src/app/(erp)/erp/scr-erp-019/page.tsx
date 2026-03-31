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
    { key: "storeName", label: "매장명" },
    { key: "currentStock", label: "현재고" },
    { key: "safetyStock", label: "안전재고" },
    { key: "stockStatus", label: "재고상태" },
    { key: "lastInDate", label: "최종입고일" }
];

const mockData: Row[] = [
    { itemCode: "ITM-100", itemName: "원두(브라질)", storeName: "블루커피", currentStock: "50", safetyStock: "30", stockStatus: "정상", lastInDate: "2025-03-20" },
    { itemCode: "ITM-101", itemName: "우유(1L)", storeName: "블루커피", currentStock: "15", safetyStock: "20", stockStatus: "부족", lastInDate: "2025-03-25" },
    { itemCode: "ITM-200", itemName: "밀가루(20kg)", storeName: "핑크베이커리", currentStock: "8", safetyStock: "10", stockStatus: "부족", lastInDate: "2025-03-18" }
];

export default function ScrErp019() {
  const [search, setSearch] = useState({ itemCode: "", storeName: "", stockStatus: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-019 품목 재고 현황 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ itemCode: "", storeName: "", stockStatus: "" })}>
        
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
          <label className="text-xs text-muted-foreground">재고상태</label>
          <Input
            placeholder="재고상태"
            value={search.stockStatus}
            onChange={(e) => setSearch({ ...search, stockStatus: e.target.value })}
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
