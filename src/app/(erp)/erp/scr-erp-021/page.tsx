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
    { key: "type", label: "구분" },
    { key: "qty", label: "수량" },
    { key: "amount", label: "금액" },
    { key: "processDate", label: "처리일" },
    { key: "reason", label: "사유" }
];

const mockData: Row[] = [
    { itemCode: "ITM-030", itemName: "유통기한임박식품", storeName: "그린마트", type: "폐기", qty: "25", amount: "125,000", processDate: "2025-03-20", reason: "유통기한 초과" },
    { itemCode: "ITM-040", itemName: "불량원두", storeName: "블루커피", type: "반품", qty: "10", amount: "200,000", processDate: "2025-03-18", reason: "품질불량" },
    { itemCode: "ITM-055", itemName: "파손제품", storeName: "레드패션", type: "반품", qty: "3", amount: "150,000", processDate: "2025-03-22", reason: "운송중 파손" }
];

export default function ScrErp021() {
  type SearchPanelViewProps = Parameters<typeof SearchPanel>[0] & { loading?: boolean };
  type DataGridViewProps = Parameters<typeof DataGrid>[0] & { loading?: boolean; loadingMessage?: string };
  const SearchPanelView = SearchPanel as unknown as (props: SearchPanelViewProps) => JSX.Element;
  const DataGridView = DataGrid as unknown as (props: DataGridViewProps) => JSX.Element;
  const [search, setSearch] = useState({ itemCode: "", storeName: "", type: "", processDate: "" });
  const [data, setData] = useState<Row[]>(mockData);
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const applySearch = () => {
    const normalized = {
      itemCode: search.itemCode.trim(),
      storeName: search.storeName.trim(),
      type: search.type.trim(),
      processDate: search.processDate.trim(),
    };

    const filtered = mockData.filter((row) => {
      if (normalized.itemCode && !String(row.itemCode ?? "").includes(normalized.itemCode)) return false;
      if (normalized.storeName && !String(row.storeName ?? "").includes(normalized.storeName)) return false;
      if (normalized.type && !String(row.type ?? "").includes(normalized.type)) return false;
      if (normalized.processDate && !String(row.processDate ?? "").includes(normalized.processDate)) return false;
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
    setSearch({ itemCode: "", storeName: "", type: "", processDate: "" });
    setData(mockData);
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-021 품목 폐기/반품 현황 조회</h2>
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
          <label className="text-xs text-muted-foreground">구분</label>
          <Input
            placeholder="구분"
            value={search.type}
            onChange={(e) => setSearch({ ...search, type: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">처리일</label>
          <Input
            placeholder="처리일"
            value={search.processDate}
            onChange={(e) => setSearch({ ...search, processDate: e.target.value })}
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
