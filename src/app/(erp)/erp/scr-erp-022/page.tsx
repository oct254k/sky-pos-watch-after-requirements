"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";

type Row = Record<string, unknown>;

const columns: Column<Row>[] = [
    { key: "promoCode", label: "프로모션코드" },
    { key: "promoName", label: "프로모션명" },
    { key: "itemCode", label: "품목코드" },
    { key: "itemName", label: "품목명" },
    { key: "storeName", label: "매장명" },
    { key: "discountRate", label: "할인율" },
    { key: "startDate", label: "시작일" },
    { key: "endDate", label: "종료일" }
];

const mockData: Row[] = [
    { promoCode: "PM-2025-01", promoName: "봄맞이할인", itemCode: "ITM-001", itemName: "아메리카노", storeName: "블루커피", discountRate: "20%", startDate: "2025-03-01", endDate: "2025-03-31" },
    { promoCode: "PM-2025-02", promoName: "오픈기념", itemCode: "ITM-050", itemName: "불고기세트", storeName: "스카이푸드", discountRate: "15%", startDate: "2025-03-15", endDate: "2025-04-15" },
    { promoCode: "PM-2025-03", promoName: "1+1행사", itemCode: "ITM-030", itemName: "샐러드", storeName: "그린마트", discountRate: "50%", startDate: "2025-03-10", endDate: "2025-03-20" }
];

export default function ScrErp022() {
  const [search, setSearch] = useState({ promoCode: "", itemName: "", storeName: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-022 품목 프로모션 연계 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ promoCode: "", itemName: "", storeName: "" })}>
        
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">프로모션코드</label>
          <Input
            placeholder="프로모션코드"
            value={search.promoCode}
            onChange={(e) => setSearch({ ...search, promoCode: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">품목명</label>
          <Input
            placeholder="품목명"
            value={search.itemName}
            onChange={(e) => setSearch({ ...search, itemName: e.target.value })}
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
      </SearchPanel>
      <DataGrid columns={columns} data={mockData} />
      <ActionBar>
        <ActionButton label="엑셀 다운로드" variant="outline" onClick={() => alert("엑셀 다운로드")} />
      </ActionBar>
    </div>
  );
}
