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
    { key: "companyName", label: "업체명" },
    { key: "surveyRound", label: "조사차수" },
    { key: "score", label: "점수" },
    { key: "grade", label: "등급" },
    { key: "surveyDate", label: "조사일" }
];

const mockData: Row[] = [
    { companyName: "스카이푸드", surveyRound: "1차", score: "92", grade: "A", surveyDate: "2025-01-15" },
    { companyName: "블루커피", surveyRound: "1차", score: "85", grade: "B", surveyDate: "2025-01-15" },
    { companyName: "그린마트", surveyRound: "2차", score: "78", grade: "C", surveyDate: "2025-03-01" }
];

export default function ScrErp008() {
  const [search, setSearch] = useState({ companyName: "", surveyRound: "", grade: "" });
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
    setSearch({ companyName: "", surveyRound: "", grade: "" });
    setData(mockData);
    setIsLoading(false);
    searchTimerRef.current = null;
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-008 만족도 조사 누적 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel loading={isLoading} onSearch={handleSearch} onReset={handleReset}>
        
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">업체명</label>
          <Input
            placeholder="업체명"
            value={search.companyName}
            onChange={(e) => setSearch({ ...search, companyName: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">조사차수</label>
          <Input
            placeholder="조사차수"
            value={search.surveyRound}
            onChange={(e) => setSearch({ ...search, surveyRound: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">등급</label>
          <Input
            placeholder="등급"
            value={search.grade}
            onChange={(e) => setSearch({ ...search, grade: e.target.value })}
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
