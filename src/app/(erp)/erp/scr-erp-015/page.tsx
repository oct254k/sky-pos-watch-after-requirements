"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";

type Row = Record<string, unknown>;

const columns: Column<Row>[] = [
    { key: "erpItemCode", label: "ERP품목코드" },
    { key: "erpItemName", label: "ERP품목명" },
    { key: "posItemCode", label: "POS품목코드" },
    { key: "posItemName", label: "POS품목명" },
    { key: "mappingStatus", label: "매핑상태" },
    { key: "mappingDate", label: "매핑일" },
    { key: "storeName", label: "매장명" }
];

const mockData: Row[] = [
    { erpItemCode: "ITM-001", erpItemName: "아메리카노", posItemCode: "P-001", posItemName: "아메리카노(ICE)", mappingStatus: "매핑완료", mappingDate: "2025-01-10", storeName: "블루커피" },
    { erpItemCode: "ITM-002", erpItemName: "카페라떼", posItemCode: "P-002", posItemName: "카페라떼(HOT)", mappingStatus: "매핑완료", mappingDate: "2025-01-10", storeName: "블루커피" },
    { erpItemCode: "ITM-003", erpItemName: "샌드위치", posItemCode: "-", posItemName: "-", mappingStatus: "미매핑", mappingDate: "-", storeName: "스카이푸드" }
];

export default function ScrErp015() {
  const [search, setSearch] = useState({ erpItemCode: "", posItemCode: "", mappingStatus: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-015 품목 매핑 현황 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ erpItemCode: "", posItemCode: "", mappingStatus: "" })}>
        
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">ERP품목코드</label>
          <Input
            placeholder="ERP품목코드"
            value={search.erpItemCode}
            onChange={(e) => setSearch({ ...search, erpItemCode: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">POS품목코드</label>
          <Input
            placeholder="POS품목코드"
            value={search.posItemCode}
            onChange={(e) => setSearch({ ...search, posItemCode: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">매핑상태</label>
          <Input
            placeholder="매핑상태"
            value={search.mappingStatus}
            onChange={(e) => setSearch({ ...search, mappingStatus: e.target.value })}
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
