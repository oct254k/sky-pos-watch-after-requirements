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
    { key: "classCode", label: "분류코드" },
    { key: "className", label: "분류명" },
    { key: "level", label: "레벨" },
    { key: "parentClass", label: "상위분류" },
    { key: "itemCount", label: "품목수" },
    { key: "useYn", label: "사용여부" },
    { key: "regDate", label: "등록일" }
];

const mockData: Row[] = [
    { classCode: "CL-01", className: "음료", level: "대분류", parentClass: "-", itemCount: "85", useYn: "Y", regDate: "2024-01-01" },
    { classCode: "CL-01-01", className: "커피", level: "중분류", parentClass: "음료", itemCount: "35", useYn: "Y", regDate: "2024-01-01" },
    { classCode: "CL-02", className: "식품", level: "대분류", parentClass: "-", itemCount: "200", useYn: "Y", regDate: "2024-01-01" },
    { classCode: "CL-03", className: "의류", level: "대분류", parentClass: "-", itemCount: "150", useYn: "Y", regDate: "2024-03-01" }
];

export default function ScrErp013() {
  const [search, setSearch] = useState({ classCode: "", className: "", level: "" });
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
    setSearch({ classCode: "", className: "", level: "" });
    setData(mockData);
    setIsLoading(false);
    searchTimerRef.current = null;
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-013 품목 분류체계 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel loading={isLoading} onSearch={handleSearch} onReset={handleReset}>
        
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">분류코드</label>
          <Input
            placeholder="분류코드"
            value={search.classCode}
            onChange={(e) => setSearch({ ...search, classCode: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">분류명</label>
          <Input
            placeholder="분류명"
            value={search.className}
            onChange={(e) => setSearch({ ...search, className: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">분류레벨</label>
          <Input
            placeholder="분류레벨"
            value={search.level}
            onChange={(e) => setSearch({ ...search, level: e.target.value })}
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
