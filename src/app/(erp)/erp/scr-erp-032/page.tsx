"use client";

import { useEffect, useRef, useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

type Row = Record<string, unknown>;

const columns: Column<Row>[] = [
    { key: "settleNo", label: "정산번호" },
    { key: "companyName", label: "업체명" },
    { key: "settleMonth", label: "정산월" },
    { key: "rentAmount", label: "임대료" },
    { key: "mgmtFee", label: "관리비" },
    { key: "otherFee", label: "기타" },
    { key: "totalAmount", label: "합계" },
    { key: "settleStatus", label: "정산상태" }
];

const mockData: Row[] = [
    { settleNo: "STL-202503-001", companyName: "스카이푸드", settleMonth: "2025-03", rentAmount: "3,500,000", mgmtFee: "500,000", otherFee: "0", totalAmount: "4,000,000", settleStatus: "완료" },
    { settleNo: "STL-202503-002", companyName: "블루커피", settleMonth: "2025-03", rentAmount: "2,800,000", mgmtFee: "400,000", otherFee: "50,000", totalAmount: "3,250,000", settleStatus: "완료" },
    { settleNo: "STL-202503-003", companyName: "옐로키친", settleMonth: "2025-03", rentAmount: "3,750,000", mgmtFee: "350,000", otherFee: "21,000", totalAmount: "4,121,000", settleStatus: "미완료" }
];

export default function ScrErp032() {
  const initialSearch = { companyName: "", settleMonth: "", settleType: "" };
  const [search, setSearch] = useState(initialSearch);
  const [data, setData] = useState<Row[]>(mockData);
  const [isLoading, setIsLoading] = useState(false);
  const searchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearSearchTimer = () => {
    if (searchTimerRef.current !== null) {
      clearTimeout(searchTimerRef.current);
      searchTimerRef.current = null;
    }
  };

  useEffect(() => clearSearchTimer, []);

  const applySearch = () => {
    clearSearchTimer();
    setIsLoading(true);
    searchTimerRef.current = setTimeout(() => {
      const filtered = mockData.filter((row) =>
        Object.entries(search).every(([key, value]) => {
          const searchValue = String(value ?? "").trim().toLowerCase();
          if (!searchValue) return true;
          return String(row[key] ?? "").toLowerCase().includes(searchValue);
        })
      );

      setData(filtered);
      setIsLoading(false);
      searchTimerRef.current = null;
    }, 800);
  };

  const handleReset = () => {
    clearSearchTimer();
    setSearch(initialSearch);
    setData(mockData);
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-032 정산 내역 통합 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel loading={isLoading} onSearch={applySearch} onReset={handleReset}>
        
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
          <label className="text-xs text-muted-foreground">정산월</label>
          <Input
            placeholder="정산월"
            value={search.settleMonth}
            onChange={(e) => setSearch({ ...search, settleMonth: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">정산유형</label>
          <Input
            placeholder="정산유형"
            value={search.settleType}
            onChange={(e) => setSearch({ ...search, settleType: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} loading={isLoading} loadingMessage="데이터를 불러오는 중입니다" />
      <ActionBar>
        <ActionButton label="엑셀 다운로드" variant="outline" onClick={() => toast.info("엑셀 다운로드를 시작합니다.")} />
      </ActionBar>
    </div>
  );
}
