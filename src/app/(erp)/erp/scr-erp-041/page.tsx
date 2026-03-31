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
    { key: "storeCode", label: "매장코드" },
    { key: "receiveDate", label: "수신일" },
    { key: "totalTx", label: "총거래건수" },
    { key: "totalAmount", label: "총거래금액" },
    { key: "receiveStatus", label: "수신상태" },
    { key: "receiveTime", label: "수신시간" },
    { key: "errorCount", label: "오류건수" }
];

const mockData: Row[] = [
    { storeName: "블루커피", storeCode: "S-001", receiveDate: "2025-03-29", totalTx: "245", totalAmount: "3,500,000", receiveStatus: "정상", receiveTime: "00:30", errorCount: "0" },
    { storeName: "스카이푸드", storeCode: "S-002", receiveDate: "2025-03-29", totalTx: "180", totalAmount: "5,200,000", receiveStatus: "정상", receiveTime: "00:32", errorCount: "2" },
    { storeName: "그린마트", storeCode: "S-003", receiveDate: "2025-03-29", totalTx: "520", totalAmount: "8,900,000", receiveStatus: "일부오류", receiveTime: "00:45", errorCount: "15" },
    { storeName: "레드패션", storeCode: "S-004", receiveDate: "2025-03-29", totalTx: "0", totalAmount: "0", receiveStatus: "미수신", receiveTime: "-", errorCount: "0" }
];

export default function ScrErp041() {
  const [search, setSearch] = useState({ storeName: "", receiveDate: "", receiveStatus: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-041 매출자료 수신 현황 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ storeName: "", receiveDate: "", receiveStatus: "" })}>
        
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
          <label className="text-xs text-muted-foreground">수신일</label>
          <Input
            placeholder="수신일"
            value={search.receiveDate}
            onChange={(e) => setSearch({ ...search, receiveDate: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">수신상태</label>
          <Input
            placeholder="수신상태"
            value={search.receiveStatus}
            onChange={(e) => setSearch({ ...search, receiveStatus: e.target.value })}
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
