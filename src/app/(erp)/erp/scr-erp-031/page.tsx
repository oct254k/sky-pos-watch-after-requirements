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
    { key: "companyName", label: "업체명" },
    { key: "unpaidMonth", label: "미납월" },
    { key: "unpaidAmount", label: "미납금액" },
    { key: "overdueDays", label: "연체일수" },
    { key: "overdueRate", label: "연체이율(%)" },
    { key: "overdueFee", label: "연체료" },
    { key: "totalDue", label: "총납부액" },
    { key: "status", label: "상태" }
];

const mockData: Row[] = [
    { companyName: "옐로키친", unpaidMonth: "2025-02", unpaidAmount: "2,100,000", overdueDays: "30", overdueRate: "12", overdueFee: "21,000", totalDue: "2,121,000", status: "미납" },
    { companyName: "퍼플뷰티", unpaidMonth: "2025-01", unpaidAmount: "1,500,000", overdueDays: "60", overdueRate: "12", overdueFee: "30,000", totalDue: "1,530,000", status: "미납" },
    { companyName: "오렌지델리", unpaidMonth: "2025-02", unpaidAmount: "800,000", overdueDays: "15", overdueRate: "12", overdueFee: "4,000", totalDue: "804,000", status: "일부납" }
];

export default function ScrErp031() {
  const initialSearch = { companyName: "", calcMonth: "", overdueStatus: "" };
  const [search, setSearch] = useState(initialSearch);
  const [data, setData] = useState<Row[]>(mockData);
  const [isLoading, setIsLoading] = useState(false);
  const searchTimerRef = useRef<number | null>(null);

  const clearSearchTimer = () => {
    if (searchTimerRef.current !== null) {
      window.clearTimeout(searchTimerRef.current);
      searchTimerRef.current = null;
    }
  };

  useEffect(() => clearSearchTimer, []);

  const applySearch = () => {
    clearSearchTimer();
    setIsLoading(true);
    searchTimerRef.current = window.setTimeout(() => {
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
      <h2 className="text-lg font-semibold">SCR-ERP-031 연체료 산정 내역 조회</h2>
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
          <label className="text-xs text-muted-foreground">산정월</label>
          <Input
            placeholder="산정월"
            value={search.calcMonth}
            onChange={(e) => setSearch({ ...search, calcMonth: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">연체상태</label>
          <Input
            placeholder="연체상태"
            value={search.overdueStatus}
            onChange={(e) => setSearch({ ...search, overdueStatus: e.target.value })}
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
