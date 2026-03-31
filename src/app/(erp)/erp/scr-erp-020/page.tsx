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
    { key: "salesQty", label: "판매수량" },
    { key: "salesAmount", label: "판매금액" },
    { key: "avgDailySales", label: "일평균판매" },
    { key: "rank", label: "순위" }
];

const mockData: Row[] = [
    { itemCode: "ITM-001", itemName: "아메리카노", storeName: "블루커피", salesQty: "3,200", salesAmount: "14,400,000", avgDailySales: "107", rank: "1" },
    { itemCode: "ITM-002", itemName: "카페라떼", storeName: "블루커피", salesQty: "2,100", salesAmount: "10,500,000", avgDailySales: "70", rank: "2" },
    { itemCode: "ITM-050", itemName: "불고기세트", storeName: "스카이푸드", salesQty: "800", salesAmount: "9,600,000", avgDailySales: "27", rank: "1" }
];

export default function ScrErp020() {
  const [search, setSearch] = useState({ itemCode: "", storeName: "", period: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-020 품목 판매 통계 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ itemCode: "", storeName: "", period: "" })}>
        
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
          <label className="text-xs text-muted-foreground">조회기간</label>
          <Input
            placeholder="조회기간"
            value={search.period}
            onChange={(e) => setSearch({ ...search, period: e.target.value })}
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
