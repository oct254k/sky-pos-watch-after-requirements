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
    { key: "overdueMonths", label: "체납개월수" },
    { key: "totalOverdue", label: "체납총액" },
    { key: "overdueGrade", label: "체납등급" },
    { key: "lastPayDate", label: "최종납부일" },
    { key: "manager", label: "담당자" },
    { key: "status", label: "조치상태" }
];

const mockData: Row[] = [
    { companyName: "옐로키친", contractNo: "CT-2025-005", overdueMonths: "2", totalOverdue: "4,221,000", overdueGrade: "주의", lastPayDate: "2025-01-10", manager: "김담당", status: "독촉중" },
    { companyName: "퍼플뷰티", contractNo: "CT-2025-006", overdueMonths: "3", totalOverdue: "6,690,000", overdueGrade: "경고", lastPayDate: "2024-12-15", manager: "이매니저", status: "법적조치예정" },
    { companyName: "오렌지델리", contractNo: "CT-2025-007", overdueMonths: "1", totalOverdue: "804,000", overdueGrade: "관심", lastPayDate: "2025-02-20", manager: "박관리", status: "독촉중" }
];

export default function ScrErp033() {
  const initialSearch = { companyName: "", overdueMonth: "", overdueGrade: "" };
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
      <h2 className="text-lg font-semibold">SCR-ERP-033 체납 현황 조회</h2>
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
          <label className="text-xs text-muted-foreground">체납월</label>
          <Input
            placeholder="체납월"
            value={search.overdueMonth}
            onChange={(e) => setSearch({ ...search, overdueMonth: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">체납등급</label>
          <Input
            placeholder="체납등급"
            value={search.overdueGrade}
            onChange={(e) => setSearch({ ...search, overdueGrade: e.target.value })}
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
