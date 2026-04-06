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
    { key: "brandName", label: "브랜드명" },
    { key: "brandCode", label: "브랜드코드" },
    { key: "totalItems", label: "총품목수" },
    { key: "activeItems", label: "사용품목" },
    { key: "inactiveItems", label: "미사용품목" },
    { key: "lastUpdateDate", label: "최종갱신일" }
];

const mockData: Row[] = [
    { brandName: "블루커피", brandCode: "BR-001", totalItems: "45", activeItems: "42", inactiveItems: "3", lastUpdateDate: "2025-03-01" },
    { brandName: "스카이푸드", brandCode: "BR-002", totalItems: "120", activeItems: "110", inactiveItems: "10", lastUpdateDate: "2025-02-28" },
    { brandName: "그린마트", brandCode: "BR-003", totalItems: "350", activeItems: "320", inactiveItems: "30", lastUpdateDate: "2025-03-05" }
];

export default function ScrErp012() {
  const [search, setSearch] = useState({ brandName: "", category: "", useYn: "" });
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
    setSearch({ brandName: "", category: "", useYn: "" });
    setData(mockData);
    setIsLoading(false);
    searchTimerRef.current = null;
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-012 브랜드별 품목 현황 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel loading={isLoading} onSearch={handleSearch} onReset={handleReset}>
        
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">브랜드명</label>
          <Input
            placeholder="브랜드명"
            value={search.brandName}
            onChange={(e) => setSearch({ ...search, brandName: e.target.value })}
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
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">사용여부</label>
          <Input
            placeholder="사용여부"
            value={search.useYn}
            onChange={(e) => setSearch({ ...search, useYn: e.target.value })}
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
