"use client";

import { useEffect, useRef, useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import type { ComponentProps } from "react";

type Row = Record<string, unknown>;
type SearchPanelProps = ComponentProps<typeof SearchPanel> & { loading?: boolean };
type DataGridProps = ComponentProps<typeof DataGrid> & { loading?: boolean; loadingMessage?: string };

function ResponsiveSearchPanel({ loading: _loading, ...props }: SearchPanelProps) {
  void _loading;
  return <SearchPanel {...props} />;
}

function ResponsiveDataGrid({ loading: _loading, loadingMessage: _loadingMessage, ...props }: DataGridProps) {
  void _loading;
  void _loadingMessage;
  return <DataGrid {...props} />;
}

const columns: Column<Row>[] = [
    { key: "contractNo", label: "계약번호" },
    { key: "companyName", label: "업체명" },
    { key: "contractType", label: "계약유형" },
    { key: "startDate", label: "시작일" },
    { key: "endDate", label: "종료일" },
    { key: "status", label: "상태" },
    { key: "monthlyRent", label: "월임대료" },
    { key: "deposit", label: "보증금" }
];

const mockData: Row[] = [
    { contractNo: "CT-2025-001", companyName: "스카이푸드", contractType: "일반임대", startDate: "2025-01-01", endDate: "2025-12-31", status: "계약중", monthlyRent: "3,500,000", deposit: "35,000,000" },
    { contractNo: "CT-2025-002", companyName: "블루커피", contractType: "특약임대", startDate: "2025-03-01", endDate: "2026-02-28", status: "계약중", monthlyRent: "2,800,000", deposit: "28,000,000" },
    { contractNo: "CT-2025-003", companyName: "그린마트", contractType: "일반임대", startDate: "2024-06-01", endDate: "2025-05-31", status: "만료예정", monthlyRent: "4,200,000", deposit: "42,000,000" },
    { contractNo: "CT-2025-004", companyName: "레드패션", contractType: "수수료임대", startDate: "2025-02-01", endDate: "2026-01-31", status: "계약중", monthlyRent: "1,500,000", deposit: "15,000,000" }
];

export default function ScrErp001() {
  const [search, setSearch] = useState({ contractNo: "", companyName: "", contractType: "", status: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Row[]>(mockData);
  const searchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearSearchTimer = () => {
    if (searchTimerRef.current !== null) {
      clearTimeout(searchTimerRef.current);
      searchTimerRef.current = null;
    }
  };

  useEffect(() => clearSearchTimer, []);

  const applySearch = (searchValue = search) => {
    const normalized = {
      contractNo: searchValue.contractNo.trim(),
      companyName: searchValue.companyName.trim(),
      contractType: searchValue.contractType.trim(),
      status: searchValue.status.trim(),
    };

    const filtered = mockData.filter((row) => {
      if (normalized.contractNo && !String(row.contractNo ?? "").includes(normalized.contractNo)) return false;
      if (normalized.companyName && !String(row.companyName ?? "").includes(normalized.companyName)) return false;
      if (normalized.contractType && !String(row.contractType ?? "").includes(normalized.contractType)) return false;
      if (normalized.status && !String(row.status ?? "").includes(normalized.status)) return false;
      return true;
    });

    setData(filtered);
  };

  return (
    <div className="space-y-4 overflow-x-hidden">
      <div className="space-y-1">
        <h2 className="text-[18px] font-semibold tracking-[-0.02em] sm:text-lg">SCR-ERP-001 계약 통합 조회</h2>
        <p className="text-xs text-muted-foreground sm:text-sm">계약 조건을 조회하고 결과를 검토할 수 있습니다.</p>
      </div>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <ResponsiveSearchPanel
        onSearch={() => {
          clearSearchTimer();
          setIsLoading(true);
          const snapshot = { ...search };
          searchTimerRef.current = setTimeout(() => {
            applySearch(snapshot);
            setIsLoading(false);
            searchTimerRef.current = null;
          }, 900);
        }}
        onReset={() => {
          clearSearchTimer();
          setSearch({ contractNo: "", companyName: "", contractType: "", status: "" });
          setIsLoading(false);
          setData(mockData);
        }}
      >
        <div className="flex min-w-0 flex-1 flex-col gap-1.5 sm:min-w-[180px]">
          <label className="mb-1.5 block text-[11px] font-semibold tracking-[0.01em] text-[#64748b]">계약번호</label>
          <Input
            placeholder="계약번호 입력"
            value={search.contractNo}
            onChange={(e) => setSearch({ ...search, contractNo: e.target.value })}
            className="h-10 w-full border-[#d6e0ea] bg-white text-sm focus-visible:border-[#1d4f91] focus-visible:ring-[#1d4f91]/15"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-1.5 sm:min-w-[180px]">
          <label className="mb-1.5 block text-[11px] font-semibold tracking-[0.01em] text-[#64748b]">업체명</label>
          <Input
            placeholder="업체명을 입력하세요"
            value={search.companyName}
            onChange={(e) => setSearch({ ...search, companyName: e.target.value })}
            className="h-10 w-full border-[#d6e0ea] bg-white text-sm focus-visible:border-[#1d4f91] focus-visible:ring-[#1d4f91]/15"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-1.5 sm:min-w-[180px]">
          <label className="mb-1.5 block text-[11px] font-semibold tracking-[0.01em] text-[#64748b]">계약유형</label>
          <Input
            placeholder="일반임대 / 특약임대"
            value={search.contractType}
            onChange={(e) => setSearch({ ...search, contractType: e.target.value })}
            className="h-10 w-full border-[#d6e0ea] bg-white text-sm focus-visible:border-[#1d4f91] focus-visible:ring-[#1d4f91]/15"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-1.5 sm:min-w-[180px]">
          <label className="mb-1.5 block text-[11px] font-semibold tracking-[0.01em] text-[#64748b]">상태</label>
          <Input
            placeholder="계약중 / 만료예정"
            value={search.status}
            onChange={(e) => setSearch({ ...search, status: e.target.value })}
            className="h-10 w-full border-[#d6e0ea] bg-white text-sm focus-visible:border-[#1d4f91] focus-visible:ring-[#1d4f91]/15"
          />
        </div>
      </ResponsiveSearchPanel>
      <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <div className="min-w-[760px]">
          <ResponsiveDataGrid columns={columns} data={data} loading={isLoading} loadingMessage="데이터를 불러오는 중입니다" />
        </div>
      </div>
      <ActionBar>
        <ActionButton label="엑셀 다운로드" variant="outline" onClick={() => toast.info("엑셀 다운로드를 시작합니다.")} />
      </ActionBar>
    </div>
  );
}
