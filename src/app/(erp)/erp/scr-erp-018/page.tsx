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
    { key: "storeName", label: "매장명" },
    { key: "changeDate", label: "변동일" },
    { key: "beforePrice", label: "변경전가격" },
    { key: "afterPrice", label: "변경후가격" },
    { key: "changeRate", label: "변동률" }
];

const mockData: Row[] = [
    { itemCode: "ITM-001", itemName: "아메리카노", storeName: "블루커피", changeDate: "2025-03-01", beforePrice: "4,000", afterPrice: "4,500", changeRate: "+12.5%" },
    { itemCode: "ITM-010", itemName: "과일주스", storeName: "스카이푸드", changeDate: "2025-02-15", beforePrice: "6,000", afterPrice: "5,500", changeRate: "-8.3%" },
    { itemCode: "ITM-020", itemName: "케이크세트", storeName: "핑크베이커리", changeDate: "2025-03-10", beforePrice: "15,000", afterPrice: "16,000", changeRate: "+6.7%" }
];

export default function ScrErp018() {
  type SearchPanelViewProps = Parameters<typeof SearchPanel>[0] & { loading?: boolean };
  type DataGridViewProps = Parameters<typeof DataGrid>[0] & { loading?: boolean; loadingMessage?: string };
  const SearchPanelView = SearchPanel as unknown as (props: SearchPanelViewProps) => JSX.Element;
  const DataGridView = DataGrid as unknown as (props: DataGridViewProps) => JSX.Element;
  const [search, setSearch] = useState({ itemCode: "", itemName: "", changeDate: "" });
  const [data, setData] = useState<Row[]>(mockData);
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef<number | null>(null);

  const applySearch = () => {
    const normalized = {
      itemCode: search.itemCode.trim(),
      itemName: search.itemName.trim(),
      changeDate: search.changeDate.trim(),
    };

    const filtered = mockData.filter((row) => {
      if (normalized.itemCode && !String(row.itemCode ?? "").includes(normalized.itemCode)) return false;
      if (normalized.itemName && !String(row.itemName ?? "").includes(normalized.itemName)) return false;
      if (normalized.changeDate && !String(row.changeDate ?? "").includes(normalized.changeDate)) return false;
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
    setSearch({ itemCode: "", itemName: "", changeDate: "" });
    setData(mockData);
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-018 품목 가격 변동 조회</h2>
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
          <label className="text-xs text-muted-foreground">품목명</label>
          <Input
            placeholder="품목명"
            value={search.itemName}
            onChange={(e) => setSearch({ ...search, itemName: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">변동일</label>
          <Input
            placeholder="변동일"
            value={search.changeDate}
            onChange={(e) => setSearch({ ...search, changeDate: e.target.value })}
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
