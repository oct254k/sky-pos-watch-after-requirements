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
    { key: "totalOverdue", label: "체납총액" },
    { key: "recoveredAmount", label: "회수금액" },
    { key: "remainAmount", label: "잔여금액" },
    { key: "recoveryRate", label: "회수율(%)" },
    { key: "lastRecoveryDate", label: "최종회수일" },
    { key: "recoveryStatus", label: "회수상태" }
];

const mockData: Row[] = [
    { companyName: "옐로키친", contractNo: "CT-2025-005", totalOverdue: "4,221,000", recoveredAmount: "2,100,000", remainAmount: "2,121,000", recoveryRate: "49.7", lastRecoveryDate: "2025-03-15", recoveryStatus: "회수중" },
    { companyName: "퍼플뷰티", contractNo: "CT-2025-006", totalOverdue: "6,690,000", recoveredAmount: "0", remainAmount: "6,690,000", recoveryRate: "0", lastRecoveryDate: "-", recoveryStatus: "미회수" },
    { companyName: "오렌지델리", contractNo: "CT-2025-007", totalOverdue: "804,000", recoveredAmount: "804,000", remainAmount: "0", recoveryRate: "100", lastRecoveryDate: "2025-03-20", recoveryStatus: "회수완료" }
];

export default function ScrErp035() {
  const initialSearch = { companyName: "", recoveryMonth: "", recoveryStatus: "" };
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
      <h2 className="text-lg font-semibold">SCR-ERP-035 체납 회수현황 조회</h2>
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
          <label className="text-xs text-muted-foreground">회수월</label>
          <Input
            placeholder="회수월"
            value={search.recoveryMonth}
            onChange={(e) => setSearch({ ...search, recoveryMonth: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">회수상태</label>
          <Input
            placeholder="회수상태"
            value={search.recoveryStatus}
            onChange={(e) => setSearch({ ...search, recoveryStatus: e.target.value })}
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
