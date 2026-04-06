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
    { key: "contractNo", label: "계약번호" },
    { key: "changeDate", label: "변경일" },
    { key: "changeContent", label: "변경내용" },
    { key: "beforeValue", label: "변경전" },
    { key: "afterValue", label: "변경후" },
    { key: "processor", label: "처리자" }
];

const mockData: Row[] = [
    { contractNo: "CT-2025-001", changeDate: "2025-03-15", changeContent: "임대료 조정", beforeValue: "3,000,000", afterValue: "3,500,000", processor: "김관리" },
    { contractNo: "CT-2025-002", changeDate: "2025-04-01", changeContent: "계약기간 연장", beforeValue: "2025-12-31", afterValue: "2026-02-28", processor: "이담당" },
    { contractNo: "CT-2025-003", changeDate: "2025-02-20", changeContent: "보증금 변경", beforeValue: "40,000,000", afterValue: "42,000,000", processor: "박매니저" }
];

export default function ScrErp002() {
  const [search, setSearch] = useState({ contractNo: "", changeDate: "", processor: "" });
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
    setSearch({ contractNo: "", changeDate: "", processor: "" });
    setData(mockData);
    setIsLoading(false);
    searchTimerRef.current = null;
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-002 계약 변경이력 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel loading={isLoading} onSearch={handleSearch} onReset={handleReset}>
        
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">계약번호</label>
          <Input
            placeholder="계약번호"
            value={search.contractNo}
            onChange={(e) => setSearch({ ...search, contractNo: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">변경일</label>
          <Input
            placeholder="변경일"
            value={search.changeDate}
            onChange={(e) => setSearch({ ...search, changeDate: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">처리자</label>
          <Input
            placeholder="처리자"
            value={search.processor}
            onChange={(e) => setSearch({ ...search, processor: e.target.value })}
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
