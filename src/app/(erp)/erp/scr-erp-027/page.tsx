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
    { key: "companyName", label: "업체명" },
    { key: "roomName", label: "호실" },
    { key: "calcMonth", label: "산정월" },
    { key: "commonMgmt", label: "공용관리비" },
    { key: "privateMgmt", label: "전용관리비" },
    { key: "utilityFee", label: "공과금" },
    { key: "totalMgmt", label: "합계" },
    { key: "status", label: "상태" }
];

const mockData: Row[] = [
    { companyName: "스카이푸드", roomName: "A-101", calcMonth: "2025-03", commonMgmt: "200,000", privateMgmt: "150,000", utilityFee: "150,000", totalMgmt: "500,000", status: "확정" },
    { companyName: "블루커피", roomName: "A-201", calcMonth: "2025-03", commonMgmt: "180,000", privateMgmt: "120,000", utilityFee: "100,000", totalMgmt: "400,000", status: "확정" },
    { companyName: "레드패션", roomName: "B-102", calcMonth: "2025-03", commonMgmt: "150,000", privateMgmt: "80,000", utilityFee: "70,000", totalMgmt: "300,000", status: "미확정" }
];

export default function ScrErp027() {
  type SearchPanelViewProps = Parameters<typeof SearchPanel>[0] & { loading?: boolean };
  type DataGridViewProps = Parameters<typeof DataGrid>[0] & { loading?: boolean; loadingMessage?: string };
  const SearchPanelView = SearchPanel as unknown as (props: SearchPanelViewProps) => JSX.Element;
  const DataGridView = DataGrid as unknown as (props: DataGridViewProps) => JSX.Element;
  const [search, setSearch] = useState({ companyName: "", calcMonth: "", mgmtType: "" });
  const [data, setData] = useState<Row[]>(mockData);
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const applySearch = () => {
    const normalized = {
      companyName: search.companyName.trim(),
      calcMonth: search.calcMonth.trim(),
      mgmtType: search.mgmtType.trim(),
    };

    const filtered = mockData.filter((row) => {
      if (normalized.companyName && !String(row.companyName ?? "").includes(normalized.companyName)) return false;
      if (normalized.calcMonth && !String(row.calcMonth ?? "").includes(normalized.calcMonth)) return false;
      const rowText = Object.values(row).map((value) => String(value ?? "")).join(" ");
      if (normalized.mgmtType && !rowText.includes(normalized.mgmtType)) return false;
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
    setSearch({ companyName: "", calcMonth: "", mgmtType: "" });
    setData(mockData);
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-027 관리비 산정 내역 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanelView loading={isLoading} onSearch={handleSearch} onReset={handleReset}>
        
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
          <label className="text-xs text-muted-foreground">관리비유형</label>
          <Input
            placeholder="관리비유형"
            value={search.mgmtType}
            onChange={(e) => setSearch({ ...search, mgmtType: e.target.value })}
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
