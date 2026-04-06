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
    { key: "calcType", label: "산정유형" },
    { key: "baseRate", label: "기본요율(%)" },
    { key: "minRent", label: "최저보증임대료" },
    { key: "calcCycle", label: "산정주기" },
    { key: "applyMonth", label: "적용월" }
];

const mockData: Row[] = [
    { contractNo: "CT-2025-005", companyName: "옐로키친", calcType: "매출연동", baseRate: "15", minRent: "2,000,000", calcCycle: "월", applyMonth: "익월" },
    { contractNo: "CT-2025-006", companyName: "퍼플뷰티", calcType: "매출연동", baseRate: "12", minRent: "1,500,000", calcCycle: "월", applyMonth: "익월" },
    { contractNo: "CT-2025-007", companyName: "오렌지델리", calcType: "혼합형", baseRate: "10", minRent: "1,000,000", calcCycle: "분기", applyMonth: "분기익월" }
];

export default function ScrErp024() {
  type SearchPanelViewProps = Parameters<typeof SearchPanel>[0] & { loading?: boolean };
  type DataGridViewProps = Parameters<typeof DataGrid>[0] & { loading?: boolean; loadingMessage?: string };
  const SearchPanelView = SearchPanel as unknown as (props: SearchPanelViewProps) => JSX.Element;
  const DataGridView = DataGrid as unknown as (props: DataGridViewProps) => JSX.Element;
  const [search, setSearch] = useState({ contractNo: "", companyName: "", calcType: "" });
  const [data, setData] = useState<Row[]>(mockData);
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const applySearch = () => {
    const normalized = {
      contractNo: search.contractNo.trim(),
      companyName: search.companyName.trim(),
      calcType: search.calcType.trim(),
    };

    const filtered = mockData.filter((row) => {
      if (normalized.contractNo && !String(row.contractNo ?? "").includes(normalized.contractNo)) return false;
      if (normalized.companyName && !String(row.companyName ?? "").includes(normalized.companyName)) return false;
      if (normalized.calcType && !String(row.calcType ?? "").includes(normalized.calcType)) return false;
      return true;
    });

    setData(filtered);
  };

  const handleSearch = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsLoading(true);
    timerRef.current = setTimeout(() => {
      applySearch();
      setIsLoading(false);
    }, 800);
  };

  const handleReset = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setSearch({ contractNo: "", companyName: "", calcType: "" });
    setData(mockData);
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-024 변동 임대료 산정 기준 조회</h2>
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
          <label className="text-xs text-muted-foreground">산정유형</label>
          <Input
            placeholder="산정유형"
            value={search.calcType}
            onChange={(e) => setSearch({ ...search, calcType: e.target.value })}
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
