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
    { key: "salesQty", label: "판매수량" },
    { key: "salesAmount", label: "판매금액" },
    { key: "avgDailySales", label: "일평균판매" },
    { key: "rank", label: "순위" }
];

const mockData: Row[] = [
    { itemCode: "ITM-001", itemName: "아메리카노", storeName: "블루커피", salesQty: "3,200", salesAmount: "14,400,000", avgDailySales: "107", rank: "1" },
    { itemCode: "ITM-002", itemName: "카페라떼", storeName: "블루커피", salesQty: "2,100", salesAmount: "10,500,000", avgDailySales: "70", rank: "2" },
    { itemCode: "ITM-050", itemName: "불고기세트", storeName: "스카이푸드", salesQty: "800", salesAmount: "9,600,000", avgDailySales: "27", rank: "1" }
];

export default function ScrErp020() {
  type SearchPanelViewProps = Parameters<typeof SearchPanel>[0] & { loading?: boolean };
  type DataGridViewProps = Parameters<typeof DataGrid>[0] & { loading?: boolean; loadingMessage?: string };
  const SearchPanelView = SearchPanel as unknown as (props: SearchPanelViewProps) => JSX.Element;
  const DataGridView = DataGrid as unknown as (props: DataGridViewProps) => JSX.Element;
  const [search, setSearch] = useState({ itemCode: "", storeName: "", period: "" });
  const [data, setData] = useState<Row[]>(mockData);
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const applySearch = () => {
    const normalized = {
      itemCode: search.itemCode.trim(),
      storeName: search.storeName.trim(),
      period: search.period.trim(),
    };

    const filtered = mockData.filter((row) => {
      const rowText = Object.values(row).map((value) => String(value ?? "")).join(" ");
      if (normalized.itemCode && !String(row.itemCode ?? "").includes(normalized.itemCode)) return false;
      if (normalized.storeName && !String(row.storeName ?? "").includes(normalized.storeName)) return false;
      if (normalized.period && !rowText.includes(normalized.period)) return false;
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
    setSearch({ itemCode: "", storeName: "", period: "" });
    setData(mockData);
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-020 품목 판매 통계 조회</h2>
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
          <label className="text-xs text-muted-foreground">조회기간</label>
          <Input
            placeholder="조회기간"
            value={search.period}
            onChange={(e) => setSearch({ ...search, period: e.target.value })}
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
