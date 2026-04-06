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
    { key: "currentStock", label: "현재고" },
    { key: "safetyStock", label: "안전재고" },
    { key: "stockStatus", label: "재고상태" },
    { key: "lastInDate", label: "최종입고일" }
];

const mockData: Row[] = [
    { itemCode: "ITM-100", itemName: "원두(브라질)", storeName: "블루커피", currentStock: "50", safetyStock: "30", stockStatus: "정상", lastInDate: "2025-03-20" },
    { itemCode: "ITM-101", itemName: "우유(1L)", storeName: "블루커피", currentStock: "15", safetyStock: "20", stockStatus: "부족", lastInDate: "2025-03-25" },
    { itemCode: "ITM-200", itemName: "밀가루(20kg)", storeName: "핑크베이커리", currentStock: "8", safetyStock: "10", stockStatus: "부족", lastInDate: "2025-03-18" }
];

export default function ScrErp019() {
  type SearchPanelViewProps = Parameters<typeof SearchPanel>[0] & { loading?: boolean };
  type DataGridViewProps = Parameters<typeof DataGrid>[0] & { loading?: boolean; loadingMessage?: string };
  const SearchPanelView = SearchPanel as unknown as (props: SearchPanelViewProps) => JSX.Element;
  const DataGridView = DataGrid as unknown as (props: DataGridViewProps) => JSX.Element;
  const [search, setSearch] = useState({ itemCode: "", storeName: "", stockStatus: "" });
  const [data, setData] = useState<Row[]>(mockData);
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const applySearch = () => {
    const normalized = {
      itemCode: search.itemCode.trim(),
      storeName: search.storeName.trim(),
      stockStatus: search.stockStatus.trim(),
    };

    const filtered = mockData.filter((row) => {
      if (normalized.itemCode && !String(row.itemCode ?? "").includes(normalized.itemCode)) return false;
      if (normalized.storeName && !String(row.storeName ?? "").includes(normalized.storeName)) return false;
      if (normalized.stockStatus && !String(row.stockStatus ?? "").includes(normalized.stockStatus)) return false;
      return true;
    });

    setData(filtered);
  };

  const handleSearch = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
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
    setSearch({ itemCode: "", storeName: "", stockStatus: "" });
    setData(mockData);
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-019 품목 재고 현황 조회</h2>
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
          <label className="text-xs text-muted-foreground">매장명</label>
          <Input
            placeholder="매장명"
            value={search.storeName}
            onChange={(e) => setSearch({ ...search, storeName: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">재고상태</label>
          <Input
            placeholder="재고상태"
            value={search.stockStatus}
            onChange={(e) => setSearch({ ...search, stockStatus: e.target.value })}
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
