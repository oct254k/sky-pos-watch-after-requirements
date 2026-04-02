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
    { key: "itemCode", label: "품목코드" },
    { key: "itemName", label: "품목명" },
    { key: "changeDate", label: "변경일" },
    { key: "changeType", label: "변경유형" },
    { key: "beforeMapping", label: "변경전매핑" },
    { key: "afterMapping", label: "변경후매핑" },
    { key: "processor", label: "처리자" }
];

const mockData: Row[] = [
    { itemCode: "ITM-001", itemName: "아메리카노", changeDate: "2025-02-15", changeType: "매핑변경", beforeMapping: "P-001", afterMapping: "P-001-A", processor: "김관리" },
    { itemCode: "ITM-005", itemName: "녹차라떼", changeDate: "2025-03-01", changeType: "신규매핑", beforeMapping: "-", afterMapping: "P-020", processor: "이담당" },
    { itemCode: "ITM-010", itemName: "과일주스", changeDate: "2025-03-10", changeType: "매핑해제", beforeMapping: "P-030", afterMapping: "-", processor: "박매니저" }
];

export default function ScrErp017() {
  type SearchPanelViewProps = Parameters<typeof SearchPanel>[0] & { loading?: boolean };
  type DataGridViewProps = Parameters<typeof DataGrid>[0] & { loading?: boolean; loadingMessage?: string };
  const SearchPanelView = SearchPanel as unknown as (props: SearchPanelViewProps) => JSX.Element;
  const DataGridView = DataGrid as unknown as (props: DataGridViewProps) => JSX.Element;
  const [search, setSearch] = useState({ itemCode: "", changeDate: "", processor: "" });
  const [data, setData] = useState<Row[]>(mockData);
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef<number | null>(null);

  const applySearch = () => {
    const normalized = {
      itemCode: search.itemCode.trim(),
      changeDate: search.changeDate.trim(),
      processor: search.processor.trim(),
    };

    const filtered = mockData.filter((row) => {
      if (normalized.itemCode && !String(row.itemCode ?? "").includes(normalized.itemCode)) return false;
      if (normalized.changeDate && !String(row.changeDate ?? "").includes(normalized.changeDate)) return false;
      if (normalized.processor && !String(row.processor ?? "").includes(normalized.processor)) return false;
      return true;
    });

    setData(filtered);
  };

  const handleSearch = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }
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
    setSearch({ itemCode: "", changeDate: "", processor: "" });
    setData(mockData);
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-017 매핑 변경이력 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanelView loading={isLoading} onSearch={handleSearch} onReset={handleReset}>
        
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">품목코드</label>
          <Input
            placeholder="품목코드"
            value={search.itemCode}
            onChange={(e) => setSearch({ ...search, itemCode: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">변경일</label>
          <Input
            placeholder="변경일"
            value={search.changeDate}
            onChange={(e) => setSearch({ ...search, changeDate: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">처리자</label>
          <Input
            placeholder="처리자"
            value={search.processor}
            onChange={(e) => setSearch({ ...search, processor: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
      </SearchPanelView>
      <DataGridView
        columns={columns}
        data={data}
        loading={isLoading}
        loadingMessage="데이터를 불러오는 중입니다"
      />
      <ActionBar>
        <ActionButton label="엑셀 다운로드" variant="outline" onClick={() => toast.info("엑셀 다운로드를 시작합니다.")} />
      </ActionBar>
    </div>
  );
}
