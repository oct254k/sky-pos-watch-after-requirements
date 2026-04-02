"use client";

import { useRef, useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

type Row = Record<string, unknown>;

const columns: Column<Row>[] = [
    { key: "contractNo", label: "계약번호" },
    { key: "companyName", label: "업체명" },
    { key: "calcMonth", label: "산정월" },
    { key: "totalSales", label: "총매출액" },
    { key: "calcRate", label: "적용요율(%)" },
    { key: "calcRent", label: "산정임대료" },
    { key: "finalRent", label: "확정임대료" },
    { key: "status", label: "상태" }
];

const mockData: Row[] = [
    { contractNo: "CT-2025-005", companyName: "옐로키친", calcMonth: "2025-02", totalSales: "25,000,000", calcRate: "15", calcRent: "3,750,000", finalRent: "3,750,000", status: "확정" },
    { contractNo: "CT-2025-006", companyName: "퍼플뷰티", calcMonth: "2025-02", totalSales: "18,000,000", calcRate: "12", calcRent: "2,160,000", finalRent: "2,160,000", status: "확정" },
    { contractNo: "CT-2025-007", companyName: "오렌지델리", calcMonth: "2025-02", totalSales: "8,000,000", calcRate: "10", calcRent: "1,000,000", finalRent: "1,000,000", status: "미확정" }
];

export default function ScrErp025() {
  type SearchPanelViewProps = Parameters<typeof SearchPanel>[0] & { loading?: boolean };
  type DataGridViewProps = Parameters<typeof DataGrid>[0] & { loading?: boolean; loadingMessage?: string };
  const SearchPanelView = SearchPanel as unknown as (props: SearchPanelViewProps) => JSX.Element;
  const DataGridView = DataGrid as unknown as (props: DataGridViewProps) => JSX.Element;
  const [search, setSearch] = useState({ contractNo: "", companyName: "", calcMonth: "" });
  const [data, setData] = useState<Row[]>(mockData);
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef<number | null>(null);

  const applySearch = () => {
    const normalized = {
      contractNo: search.contractNo.trim(),
      companyName: search.companyName.trim(),
      calcMonth: search.calcMonth.trim(),
    };

    const filtered = mockData.filter((row) => {
      if (normalized.contractNo && !String(row.contractNo ?? "").includes(normalized.contractNo)) return false;
      if (normalized.companyName && !String(row.companyName ?? "").includes(normalized.companyName)) return false;
      if (normalized.calcMonth && !String(row.calcMonth ?? "").includes(normalized.calcMonth)) return false;
      return true;
    });

    setData(filtered);
  };

  const handleSearch = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    setIsLoading(true);
    timerRef.current = window.setTimeout(() => {
      applySearch();
      setIsLoading(false);
    }, 800);
  };

  const handleReset = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setSearch({ contractNo: "", companyName: "", calcMonth: "" });
    setData(mockData);
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-025 임대료 산정 결과 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanelView loading={isLoading} onSearch={handleSearch} onReset={handleReset}>
        
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">계약번호</label>
          <Input
            placeholder="계약번호"
            value={search.contractNo}
            onChange={(e) => setSearch({ ...search, contractNo: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
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
      </SearchPanelView>
      <DataGridView columns={columns} data={data} loading={isLoading} loadingMessage="데이터를 불러오는 중입니다" />
      <ActionBar>
        <ActionButton label="엑셀 다운로드" variant="outline" onClick={() => toast.info("엑셀 다운로드를 시작합니다.")} />
      </ActionBar>
    </div>
  );
}
