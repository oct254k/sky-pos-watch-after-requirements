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
    { key: "promoCode", label: "프로모션코드" },
    { key: "promoName", label: "프로모션명" },
    { key: "itemCode", label: "품목코드" },
    { key: "itemName", label: "품목명" },
    { key: "storeName", label: "매장명" },
    { key: "discountRate", label: "할인율" },
    { key: "startDate", label: "시작일" },
    { key: "endDate", label: "종료일" }
];

const mockData: Row[] = [
    { promoCode: "PM-2025-01", promoName: "봄맞이할인", itemCode: "ITM-001", itemName: "아메리카노", storeName: "블루커피", discountRate: "20%", startDate: "2025-03-01", endDate: "2025-03-31" },
    { promoCode: "PM-2025-02", promoName: "오픈기념", itemCode: "ITM-050", itemName: "불고기세트", storeName: "스카이푸드", discountRate: "15%", startDate: "2025-03-15", endDate: "2025-04-15" },
    { promoCode: "PM-2025-03", promoName: "1+1행사", itemCode: "ITM-030", itemName: "샐러드", storeName: "그린마트", discountRate: "50%", startDate: "2025-03-10", endDate: "2025-03-20" }
];

export default function ScrErp022() {
  type SearchPanelViewProps = Parameters<typeof SearchPanel>[0] & { loading?: boolean };
  type DataGridViewProps = Parameters<typeof DataGrid>[0] & { loading?: boolean; loadingMessage?: string };
  const SearchPanelView = SearchPanel as unknown as (props: SearchPanelViewProps) => JSX.Element;
  const DataGridView = DataGrid as unknown as (props: DataGridViewProps) => JSX.Element;
  const [search, setSearch] = useState({ promoCode: "", itemName: "", storeName: "" });
  const [data, setData] = useState<Row[]>(mockData);
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef<number | null>(null);

  const applySearch = () => {
    const normalized = {
      promoCode: search.promoCode.trim(),
      itemName: search.itemName.trim(),
      storeName: search.storeName.trim(),
    };

    const filtered = mockData.filter((row) => {
      if (normalized.promoCode && !String(row.promoCode ?? "").includes(normalized.promoCode)) return false;
      if (normalized.itemName && !String(row.itemName ?? "").includes(normalized.itemName)) return false;
      if (normalized.storeName && !String(row.storeName ?? "").includes(normalized.storeName)) return false;
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
    setSearch({ promoCode: "", itemName: "", storeName: "" });
    setData(mockData);
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-022 품목 프로모션 연계 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanelView loading={isLoading} onSearch={handleSearch} onReset={handleReset}>
        
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">프로모션코드</label>
          <Input
            placeholder="프로모션코드"
            value={search.promoCode}
            onChange={(e) => setSearch({ ...search, promoCode: e.target.value })}
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
          <label className="text-xs text-muted-foreground">매장명</label>
          <Input
            placeholder="매장명"
            value={search.storeName}
            onChange={(e) => setSearch({ ...search, storeName: e.target.value })}
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
