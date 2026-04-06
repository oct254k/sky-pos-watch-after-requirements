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
    { key: "category", label: "분류" },
    { key: "unit", label: "단위" },
    { key: "taxYn", label: "과세여부" },
    { key: "useYn", label: "사용여부" },
    { key: "regDate", label: "등록일" }
];

const mockData: Row[] = [
    { itemCode: "ITM-001", itemName: "아메리카노", category: "음료", unit: "잔", taxYn: "과세", useYn: "Y", regDate: "2024-01-01" },
    { itemCode: "ITM-002", itemName: "카페라떼", category: "음료", unit: "잔", taxYn: "과세", useYn: "Y", regDate: "2024-01-01" },
    { itemCode: "ITM-003", itemName: "샌드위치", category: "식품", unit: "개", taxYn: "면세", useYn: "Y", regDate: "2024-03-15" },
    { itemCode: "ITM-004", itemName: "케이크", category: "디저트", unit: "조각", taxYn: "과세", useYn: "N", regDate: "2024-06-01" }
];

export default function ScrErp010() {
  const [search, setSearch] = useState({ itemCode: "", itemName: "", category: "" });
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
    setSearch({ itemCode: "", itemName: "", category: "" });
    setData(mockData);
    setIsLoading(false);
    searchTimerRef.current = null;
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-010 ERP 품목코드 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel loading={isLoading} onSearch={handleSearch} onReset={handleReset}>
        
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
          <label className="text-xs text-muted-foreground">분류</label>
          <Input
            placeholder="분류"
            value={search.category}
            onChange={(e) => setSearch({ ...search, category: e.target.value })}
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
