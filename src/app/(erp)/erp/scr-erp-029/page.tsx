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
    { key: "depositAmount", label: "보증금액" },
    { key: "paidDeposit", label: "납부액" },
    { key: "remainDeposit", label: "잔액" },
    { key: "depositStatus", label: "상태" },
    { key: "lastPayDate", label: "최종납부일" }
];

const mockData: Row[] = [
    { contractNo: "CT-2025-001", companyName: "스카이푸드", depositAmount: "35,000,000", paidDeposit: "35,000,000", remainDeposit: "0", depositStatus: "완납", lastPayDate: "2025-01-05" },
    { contractNo: "CT-2025-002", companyName: "블루커피", depositAmount: "28,000,000", paidDeposit: "28,000,000", remainDeposit: "0", depositStatus: "완납", lastPayDate: "2025-03-01" },
    { contractNo: "CT-2025-003", companyName: "그린마트", depositAmount: "42,000,000", paidDeposit: "30,000,000", remainDeposit: "12,000,000", depositStatus: "분납중", lastPayDate: "2025-02-15" }
];

export default function ScrErp029() {
  type SearchPanelViewProps = Parameters<typeof SearchPanel>[0] & { loading?: boolean };
  type DataGridViewProps = Parameters<typeof DataGrid>[0] & { loading?: boolean; loadingMessage?: string };
  const SearchPanelView = SearchPanel as unknown as (props: SearchPanelViewProps) => JSX.Element;
  const DataGridView = DataGrid as unknown as (props: DataGridViewProps) => JSX.Element;
  const [search, setSearch] = useState({ companyName: "", contractNo: "", depositStatus: "" });
  const [data, setData] = useState<Row[]>(mockData);
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const applySearch = () => {
    const normalized = {
      companyName: search.companyName.trim(),
      contractNo: search.contractNo.trim(),
      depositStatus: search.depositStatus.trim(),
    };

    const filtered = mockData.filter((row) => {
      if (normalized.companyName && !String(row.companyName ?? "").includes(normalized.companyName)) return false;
      if (normalized.contractNo && !String(row.contractNo ?? "").includes(normalized.contractNo)) return false;
      if (normalized.depositStatus && !String(row.depositStatus ?? "").includes(normalized.depositStatus)) return false;
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
    setSearch({ companyName: "", contractNo: "", depositStatus: "" });
    setData(mockData);
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-029 보증금 현황 조회</h2>
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
          <label className="text-xs text-muted-foreground">계약번호</label>
          <Input
            placeholder="계약번호"
            value={search.contractNo}
            onChange={(e) => setSearch({ ...search, contractNo: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">보증금상태</label>
          <Input
            placeholder="보증금상태"
            value={search.depositStatus}
            onChange={(e) => setSearch({ ...search, depositStatus: e.target.value })}
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
