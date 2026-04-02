"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

type Row = Record<string, unknown>;

const columns: Column<Row>[] = [
    { key: "storeName", label: "매장명" },
    { key: "matchDate", label: "대사일" },
    { key: "posTxCount", label: "POS거래건" },
    { key: "vanTxCount", label: "VAN거래건" },
    { key: "matchCount", label: "일치건수" },
    { key: "unmatchCount", label: "불일치건수" },
    { key: "matchRate", label: "대사율(%)" },
    { key: "matchStatus", label: "대사상태" }
];

const mockData: Row[] = [
    { storeName: "블루커피", matchDate: "2025-03-29", posTxCount: "245", vanTxCount: "245", matchCount: "245", unmatchCount: "0", matchRate: "100", matchStatus: "완료" },
    { storeName: "스카이푸드", matchDate: "2025-03-29", posTxCount: "180", vanTxCount: "178", matchCount: "176", unmatchCount: "4", matchRate: "97.8", matchStatus: "불일치" },
    { storeName: "그린마트", matchDate: "2025-03-29", posTxCount: "520", vanTxCount: "519", matchCount: "505", unmatchCount: "15", matchRate: "97.1", matchStatus: "불일치" }
];

export default function ScrErp043() {
  const [search, setSearch] = useState({ storeName: "", matchDate: "", matchStatus: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Row[]>(mockData);

  const applySearch = () => {
    const filtered = mockData.filter((row) => {
      const matchesStoreName =
        !search.storeName || String(row.storeName ?? "").toLowerCase().includes(search.storeName.toLowerCase());
      const matchesMatchDate =
        !search.matchDate || String(row.matchDate ?? "").toLowerCase().includes(search.matchDate.toLowerCase());
      const matchesMatchStatus =
        !search.matchStatus || String(row.matchStatus ?? "").toLowerCase().includes(search.matchStatus.toLowerCase());

      return matchesStoreName && matchesMatchDate && matchesMatchStatus;
    });

    setData(filtered);
  };

  const handleSearch = () => {
    setIsLoading(true);
    window.setTimeout(() => {
      applySearch();
      setIsLoading(false);
    }, 800);
  };

  const handleReset = () => {
    setSearch({ storeName: "", matchDate: "", matchStatus: "" });
    setData(mockData);
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-043 VAN 대사 현황 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel {...({ loading: isLoading } as Record<string, unknown>)} onSearch={handleSearch} onReset={handleReset}>
        
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
          <label className="text-xs text-muted-foreground">대사일</label>
          <Input
            placeholder="대사일"
            value={search.matchDate}
            onChange={(e) => setSearch({ ...search, matchDate: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">대사상태</label>
          <Input
            placeholder="대사상태"
            value={search.matchStatus}
            onChange={(e) => setSearch({ ...search, matchStatus: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
      </SearchPanel>
      <DataGrid {...({ loading: isLoading, loadingMessage: "데이터를 불러오는 중입니다" } as Record<string, unknown>)} columns={columns} data={data} />
      <ActionBar>
        <ActionButton label="엑셀 다운로드" variant="outline" onClick={() => toast.info("엑셀 다운로드를 시작합니다.")} />
      </ActionBar>
    </div>
  );
}
