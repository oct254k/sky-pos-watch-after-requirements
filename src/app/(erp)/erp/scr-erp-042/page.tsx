"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";

type Row = Record<string, unknown>;

const columns: Column<Row>[] = [
    { key: "errorNo", label: "오류번호" },
    { key: "storeName", label: "매장명" },
    { key: "errorDate", label: "오류일" },
    { key: "errorType", label: "오류유형" },
    { key: "txNo", label: "거래번호" },
    { key: "errorDetail", label: "오류내용" },
    { key: "status", label: "처리상태" },
    { key: "processor", label: "처리자" }
];

const mockData: Row[] = [
    { errorNo: "ERR-2025-001", storeName: "스카이푸드", errorDate: "2025-03-29", errorType: "금액불일치", txNo: "TX-20250329-001", errorDetail: "POS금액과 VAN금액 불일치", status: "미처리", processor: "-" },
    { errorNo: "ERR-2025-002", storeName: "그린마트", errorDate: "2025-03-29", errorType: "품목누락", txNo: "TX-20250329-015", errorDetail: "미매핑 품목 포함 거래", status: "처리중", processor: "김관리" },
    { errorNo: "ERR-2025-003", storeName: "그린마트", errorDate: "2025-03-29", errorType: "중복전송", txNo: "TX-20250329-020", errorDetail: "동일 거래 2회 수신", status: "처리완료", processor: "이담당" }
];

export default function ScrErp042() {
  const [search, setSearch] = useState({ storeName: "", errorDate: "", errorType: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-042 매출 데이터 오류 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ storeName: "", errorDate: "", errorType: "" })}>
        
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
          <label className="text-xs text-muted-foreground">오류일</label>
          <Input
            placeholder="오류일"
            value={search.errorDate}
            onChange={(e) => setSearch({ ...search, errorDate: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">오류유형</label>
          <Input
            placeholder="오류유형"
            value={search.errorType}
            onChange={(e) => setSearch({ ...search, errorType: e.target.value })}
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
