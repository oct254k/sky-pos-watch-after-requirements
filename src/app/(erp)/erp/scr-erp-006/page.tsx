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
    { key: "roomName", label: "호실명" },
    { key: "workType", label: "공사유형" },
    { key: "workDate", label: "공사일" },
    { key: "cost", label: "비용" },
    { key: "status", label: "상태" }
];

const mockData: Row[] = [
    { roomName: "A-101", workType: "인테리어", workDate: "2025-01-10", cost: "12,000,000", status: "완료" },
    { roomName: "B-301", workType: "전기공사", workDate: "2025-02-15", cost: "3,500,000", status: "진행중" },
    { roomName: "A-201", workType: "배관공사", workDate: "2024-11-20", cost: "8,000,000", status: "완료" }
];

export default function ScrErp006() {
  const [search, setSearch] = useState({ roomName: "", workType: "", workDate: "" });
  const [data, setData] = useState<Row[]>(mockData);
  const [isLoading, setIsLoading] = useState(false);
  const searchTimerRef = useRef<ReturnType<typeof window.setTimeout> | null>(null);

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
    if (searchTimerRef.current) window.clearTimeout(searchTimerRef.current);
    setIsLoading(true);
    searchTimerRef.current = window.setTimeout(() => {
      applySearch();
      setIsLoading(false);
      searchTimerRef.current = null;
    }, 800);
  };

  const handleReset = () => {
    if (searchTimerRef.current) window.clearTimeout(searchTimerRef.current);
    setSearch({ roomName: "", workType: "", workDate: "" });
    setData(mockData);
    setIsLoading(false);
    searchTimerRef.current = null;
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-006 시설 개선 이력/도면 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel loading={isLoading} onSearch={handleSearch} onReset={handleReset}>
        
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">호실명</label>
          <Input
            placeholder="호실명"
            value={search.roomName}
            onChange={(e) => setSearch({ ...search, roomName: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">공사유형</label>
          <Input
            placeholder="공사유형"
            value={search.workType}
            onChange={(e) => setSearch({ ...search, workType: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">공사일</label>
          <Input
            placeholder="공사일"
            value={search.workDate}
            onChange={(e) => setSearch({ ...search, workDate: e.target.value })}
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
