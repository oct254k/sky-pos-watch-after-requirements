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
    { key: "contractNo", label: "계약번호" },
    { key: "reductionType", label: "감면유형" },
    { key: "originalRent", label: "원임대료" },
    { key: "reductionAmount", label: "감면액" },
    { key: "finalRent", label: "최종임대료" },
    { key: "applyPeriod", label: "적용기간" },
    { key: "status", label: "상태" }
];

const mockData: Row[] = [
    { companyName: "그린마트", contractNo: "CT-2025-003", reductionType: "경영지원", originalRent: "4,200,000", reductionAmount: "1,200,000", finalRent: "3,000,000", applyPeriod: "2025-03~2025-05", status: "적용중" },
    { companyName: "옐로키친", contractNo: "CT-2025-005", reductionType: "시설공사", originalRent: "3,750,000", reductionAmount: "750,000", finalRent: "3,000,000", applyPeriod: "2025-03", status: "적용중" },
    { companyName: "핑크베이커리", contractNo: "CT-2024-008", reductionType: "재계약혜택", originalRent: "2,500,000", reductionAmount: "250,000", finalRent: "2,250,000", applyPeriod: "2025-01~2025-06", status: "적용중" }
];

export default function ScrErp030() {
  const initialSearch = { companyName: "", reductionType: "", applyMonth: "" };
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
      <h2 className="text-lg font-semibold">SCR-ERP-030 임대료 감면 현황 조회</h2>
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
          <label className="text-xs text-muted-foreground">감면유형</label>
          <Input
            placeholder="감면유형"
            value={search.reductionType}
            onChange={(e) => setSearch({ ...search, reductionType: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">적용월</label>
          <Input
            placeholder="적용월"
            value={search.applyMonth}
            onChange={(e) => setSearch({ ...search, applyMonth: e.target.value })}
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
