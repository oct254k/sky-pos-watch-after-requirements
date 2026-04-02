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
    { key: "roomName", label: "호실" },
    { key: "monthlyRent", label: "월임대료" },
    { key: "mgmtFee", label: "관리비" },
    { key: "applyStart", label: "적용시작" },
    { key: "applyEnd", label: "적용종료" },
    { key: "status", label: "상태" }
];

const mockData: Row[] = [
    { contractNo: "CT-2025-001", companyName: "스카이푸드", roomName: "A-101", monthlyRent: "3,500,000", mgmtFee: "500,000", applyStart: "2025-01", applyEnd: "2025-12", status: "적용중" },
    { contractNo: "CT-2025-002", companyName: "블루커피", roomName: "A-201", monthlyRent: "2,800,000", mgmtFee: "400,000", applyStart: "2025-03", applyEnd: "2026-02", status: "적용중" },
    { contractNo: "CT-2025-004", companyName: "레드패션", roomName: "B-102", monthlyRent: "1,500,000", mgmtFee: "300,000", applyStart: "2025-02", applyEnd: "2026-01", status: "적용중" }
];

export default function ScrErp023() {
  type SearchPanelViewProps = Parameters<typeof SearchPanel>[0] & { loading?: boolean };
  type DataGridViewProps = Parameters<typeof DataGrid>[0] & { loading?: boolean; loadingMessage?: string };
  const SearchPanelView = SearchPanel as unknown as (props: SearchPanelViewProps) => JSX.Element;
  const DataGridView = DataGrid as unknown as (props: DataGridViewProps) => JSX.Element;
  const [search, setSearch] = useState({ contractNo: "", companyName: "", applyYear: "" });
  const [data, setData] = useState<Row[]>(mockData);
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef<number | null>(null);

  const applySearch = () => {
    const normalized = {
      contractNo: search.contractNo.trim(),
      companyName: search.companyName.trim(),
      applyYear: search.applyYear.trim(),
    };

    const filtered = mockData.filter((row) => {
      const rowText = Object.values(row).map((value) => String(value ?? "")).join(" ");
      if (normalized.contractNo && !String(row.contractNo ?? "").includes(normalized.contractNo)) return false;
      if (normalized.companyName && !String(row.companyName ?? "").includes(normalized.companyName)) return false;
      if (normalized.applyYear && !rowText.includes(normalized.applyYear)) return false;
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
    setSearch({ contractNo: "", companyName: "", applyYear: "" });
    setData(mockData);
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-023 고정 임대료 현황 조회</h2>
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
          <label className="text-xs text-muted-foreground">적용연도</label>
          <Input
            placeholder="적용연도"
            value={search.applyYear}
            onChange={(e) => setSearch({ ...search, applyYear: e.target.value })}
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
