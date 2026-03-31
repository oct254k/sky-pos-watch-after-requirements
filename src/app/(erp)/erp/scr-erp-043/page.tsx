"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";

type Row = Record<string, unknown>;

const columns: Column<Row>[] = [
    { key: "storeName", label: "매장명" },
    { key: "matchDate", label: "대사일" },
    { key: "posTxCount", label: "POS거래건" },
    { key: "vanTxCount", label: "VAN거래건" },
    { key: "matchCount", label: "일치건수" },
    { key: "unmatchCount", label: "불일치건수" },
    { key: "matchRate", label: "대사율(%)" },
    { key: "matchStatus", label: "대사상태" }
];

const mockData: Row[] = [
    { storeName: "블루커피", matchDate: "2025-03-29", posTxCount: "245", vanTxCount: "245", matchCount: "245", unmatchCount: "0", matchRate: "100", matchStatus: "완료" },
    { storeName: "스카이푸드", matchDate: "2025-03-29", posTxCount: "180", vanTxCount: "178", matchCount: "176", unmatchCount: "4", matchRate: "97.8", matchStatus: "불일치" },
    { storeName: "그린마트", matchDate: "2025-03-29", posTxCount: "520", vanTxCount: "519", matchCount: "505", unmatchCount: "15", matchRate: "97.1", matchStatus: "불일치" }
];

export default function ScrErp043() {
  const [search, setSearch] = useState({ storeName: "", matchDate: "", matchStatus: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-043 VAN 대사 현황 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ storeName: "", matchDate: "", matchStatus: "" })}>
        
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
          <label className="text-xs text-muted-foreground">대사일</label>
          <Input
            placeholder="대사일"
            value={search.matchDate}
            onChange={(e) => setSearch({ ...search, matchDate: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">대사상태</label>
          <Input
            placeholder="대사상태"
            value={search.matchStatus}
            onChange={(e) => setSearch({ ...search, matchStatus: e.target.value })}
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
