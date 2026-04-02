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
    { key: "noticeNo", label: "고지번호" },
    { key: "companyName", label: "업체명" },
    { key: "noticeMonth", label: "고지월" },
    { key: "rentAmount", label: "임대료" },
    { key: "mgmtFee", label: "관리비" },
    { key: "totalAmount", label: "합계" },
    { key: "noticeDate", label: "고지일" },
    { key: "noticeStatus", label: "고지상태" }
];

const mockData: Row[] = [
    { noticeNo: "NTC-202503-001", companyName: "스카이푸드", noticeMonth: "2025-03", rentAmount: "3,500,000", mgmtFee: "500,000", totalAmount: "4,000,000", noticeDate: "2025-03-01", noticeStatus: "발송완료" },
    { noticeNo: "NTC-202503-002", companyName: "블루커피", noticeMonth: "2025-03", rentAmount: "2,800,000", mgmtFee: "400,000", totalAmount: "3,200,000", noticeDate: "2025-03-01", noticeStatus: "발송완료" },
    { noticeNo: "NTC-202503-003", companyName: "옐로키친", noticeMonth: "2025-03", rentAmount: "3,750,000", mgmtFee: "350,000", totalAmount: "4,100,000", noticeDate: "2025-03-05", noticeStatus: "미발송" }
];

export default function ScrErp026() {
  type SearchPanelViewProps = Parameters<typeof SearchPanel>[0] & { loading?: boolean };
  type DataGridViewProps = Parameters<typeof DataGrid>[0] & { loading?: boolean; loadingMessage?: string };
  const SearchPanelView = SearchPanel as unknown as (props: SearchPanelViewProps) => JSX.Element;
  const DataGridView = DataGrid as unknown as (props: DataGridViewProps) => JSX.Element;
  const [search, setSearch] = useState({ companyName: "", noticeMonth: "", noticeStatus: "" });
  const [data, setData] = useState<Row[]>(mockData);
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef<number | null>(null);

  const applySearch = () => {
    const normalized = {
      companyName: search.companyName.trim(),
      noticeMonth: search.noticeMonth.trim(),
      noticeStatus: search.noticeStatus.trim(),
    };

    const filtered = mockData.filter((row) => {
      if (normalized.companyName && !String(row.companyName ?? "").includes(normalized.companyName)) return false;
      if (normalized.noticeMonth && !String(row.noticeMonth ?? "").includes(normalized.noticeMonth)) return false;
      if (normalized.noticeStatus && !String(row.noticeStatus ?? "").includes(normalized.noticeStatus)) return false;
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
    setSearch({ companyName: "", noticeMonth: "", noticeStatus: "" });
    setData(mockData);
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-026 임대료 고지 내역 조회</h2>
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
          <label className="text-xs text-muted-foreground">고지월</label>
          <Input
            placeholder="고지월"
            value={search.noticeMonth}
            onChange={(e) => setSearch({ ...search, noticeMonth: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">고지상태</label>
          <Input
            placeholder="고지상태"
            value={search.noticeStatus}
            onChange={(e) => setSearch({ ...search, noticeStatus: e.target.value })}
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
