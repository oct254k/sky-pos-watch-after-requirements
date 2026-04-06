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
    { key: "floor", label: "층" },
    { key: "area", label: "면적(㎡)" },
    { key: "status", label: "상태" },
    { key: "lastChangeDate", label: "최종변경일" }
];

const mockData: Row[] = [
    { roomName: "A-301", floor: "3F", area: "40.0", status: "공실", lastChangeDate: "2025-02-01" },
    { roomName: "B-201", floor: "2F", area: "35.5", status: "입점", lastChangeDate: "2025-01-15" },
    { roomName: "C-101", floor: "1F", area: "60.0", status: "공실", lastChangeDate: "2025-03-01" },
    { roomName: "A-102", floor: "1F", area: "25.0", status: "입점", lastChangeDate: "2024-12-01" }
];

export default function ScrErp005() {
  const [search, setSearch] = useState({ roomName: "", floor: "", status: "" });
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
    setSearch({ roomName: "", floor: "", status: "" });
    setData(mockData);
    setIsLoading(false);
    searchTimerRef.current = null;
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-005 공실/입점 현황 조회</h2>
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
          <label className="text-xs text-muted-foreground">층</label>
          <Input
            placeholder="층"
            value={search.floor}
            onChange={(e) => setSearch({ ...search, floor: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">상태</label>
          <Input
            placeholder="상태"
            value={search.status}
            onChange={(e) => setSearch({ ...search, status: e.target.value })}
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
