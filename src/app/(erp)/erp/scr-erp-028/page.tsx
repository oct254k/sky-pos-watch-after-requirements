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
    { key: "payMonth", label: "수납월" },
    { key: "noticeAmount", label: "고지금액" },
    { key: "paidAmount", label: "수납금액" },
    { key: "unpaidAmount", label: "미납금액" },
    { key: "payDate", label: "수납일" },
    { key: "payMethod", label: "수납방법" },
    { key: "payStatus", label: "수납상태" }
];

const mockData: Row[] = [
    { companyName: "스카이푸드", payMonth: "2025-03", noticeAmount: "4,000,000", paidAmount: "4,000,000", unpaidAmount: "0", payDate: "2025-03-10", payMethod: "계좌이체", payStatus: "완납" },
    { companyName: "블루커피", payMonth: "2025-03", noticeAmount: "3,200,000", paidAmount: "3,200,000", unpaidAmount: "0", payDate: "2025-03-15", payMethod: "자동이체", payStatus: "완납" },
    { companyName: "옐로키친", payMonth: "2025-03", noticeAmount: "4,100,000", paidAmount: "2,000,000", unpaidAmount: "2,100,000", payDate: "2025-03-20", payMethod: "계좌이체", payStatus: "일부납" }
];

export default function ScrErp028() {
  type SearchPanelViewProps = Parameters<typeof SearchPanel>[0] & { loading?: boolean };
  type DataGridViewProps = Parameters<typeof DataGrid>[0] & { loading?: boolean; loadingMessage?: string };
  const SearchPanelView = SearchPanel as unknown as (props: SearchPanelViewProps) => JSX.Element;
  const DataGridView = DataGrid as unknown as (props: DataGridViewProps) => JSX.Element;
  const [search, setSearch] = useState({ companyName: "", payMonth: "", payStatus: "" });
  const [data, setData] = useState<Row[]>(mockData);
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const applySearch = () => {
    const normalized = {
      companyName: search.companyName.trim(),
      payMonth: search.payMonth.trim(),
      payStatus: search.payStatus.trim(),
    };

    const filtered = mockData.filter((row) => {
      if (normalized.companyName && !String(row.companyName ?? "").includes(normalized.companyName)) return false;
      if (normalized.payMonth && !String(row.payMonth ?? "").includes(normalized.payMonth)) return false;
      if (normalized.payStatus && !String(row.payStatus ?? "").includes(normalized.payStatus)) return false;
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
    setSearch({ companyName: "", payMonth: "", payStatus: "" });
    setData(mockData);
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-028 수납 현황 조회</h2>
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
          <label className="text-xs text-muted-foreground">수납월</label>
          <Input
            placeholder="수납월"
            value={search.payMonth}
            onChange={(e) => setSearch({ ...search, payMonth: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">수납상태</label>
          <Input
            placeholder="수납상태"
            value={search.payStatus}
            onChange={(e) => setSearch({ ...search, payStatus: e.target.value })}
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
