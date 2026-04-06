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
    { key: "posItemCode", label: "POS품목코드" },
    { key: "posItemName", label: "POS품목명" },
    { key: "storeCode", label: "매장코드" },
    { key: "storeName", label: "매장명" },
    { key: "price", label: "판매가" },
    { key: "useYn", label: "사용여부" },
    { key: "syncDate", label: "동기화일" }
];

const mockData: Row[] = [
    { posItemCode: "P-001", posItemName: "아메리카노(ICE)", storeCode: "S-001", storeName: "블루커피 1호점", price: "4,500", useYn: "Y", syncDate: "2025-03-01" },
    { posItemCode: "P-002", posItemName: "카페라떼(HOT)", storeCode: "S-001", storeName: "블루커피 1호점", price: "5,000", useYn: "Y", syncDate: "2025-03-01" },
    { posItemCode: "P-003", posItemName: "클럽샌드위치", storeCode: "S-002", storeName: "스카이푸드", price: "8,500", useYn: "Y", syncDate: "2025-02-28" }
];

export default function ScrErp011() {
  const [search, setSearch] = useState({ posItemCode: "", posItemName: "", storeCode: "" });
  const [data, setData] = useState<Row[]>(mockData);
  const [isLoading, setIsLoading] = useState(false);
  const searchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const applySearch = () => {
    const filtered = mockData.filter((row) =>
      Object.entries(search).every(([key, value]) => {
        const query = String(value ?? "").trim().toLowerCase();
        return !query || String(row[key] ?? "").toLowerCase().includes(query);
      })
    );
    setData(filtered);
  };

  const handleSearch = () => {
    if (searchTimerRef.current) clearTimeout(searchTimerRef.current);
    setIsLoading(true);
    searchTimerRef.current = setTimeout(() => {
      applySearch();
      setIsLoading(false);
      searchTimerRef.current = null;
    }, 800);
  };

  const handleReset = () => {
    if (searchTimerRef.current) clearTimeout(searchTimerRef.current);
    setSearch({ posItemCode: "", posItemName: "", storeCode: "" });
    setData(mockData);
    setIsLoading(false);
    searchTimerRef.current = null;
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-011 POS 품목코드 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel loading={isLoading} onSearch={handleSearch} onReset={handleReset}>
        
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">POS품목코드</label>
          <Input
            placeholder="POS품목코드"
            value={search.posItemCode}
            onChange={(e) => setSearch({ ...search, posItemCode: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">POS품목명</label>
          <Input
            placeholder="POS품목명"
            value={search.posItemName}
            onChange={(e) => setSearch({ ...search, posItemName: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">매장코드</label>
          <Input
            placeholder="매장코드"
            value={search.storeCode}
            onChange={(e) => setSearch({ ...search, storeCode: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
      </SearchPanel>
      <DataGrid
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
