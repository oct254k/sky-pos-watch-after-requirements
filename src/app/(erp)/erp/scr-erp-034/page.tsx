"use client";

import { useEffect, useRef, useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

type Row = Record<string, unknown>;

const columns: Column<Row>[] = [
    { key: "companyName", label: "업체명" },
    { key: "contractNo", label: "계약번호" },
    { key: "actionDate", label: "조치일" },
    { key: "actionType", label: "조치유형" },
    { key: "actionContent", label: "조치내용" },
    { key: "result", label: "결과" },
    { key: "processor", label: "처리자" }
];

const mockData: Row[] = [
    { companyName: "옐로키친", contractNo: "CT-2025-005", actionDate: "2025-03-01", actionType: "유선독촉", actionContent: "납부 요청 전화", result: "3/15 납부 약속", processor: "김담당" },
    { companyName: "퍼플뷰티", contractNo: "CT-2025-006", actionDate: "2025-03-05", actionType: "내용증명", actionContent: "내용증명 발송", result: "수령확인", processor: "이매니저" },
    { companyName: "옐로키친", contractNo: "CT-2025-005", actionDate: "2025-03-15", actionType: "유선독촉", actionContent: "2차 납부 독촉", result: "3/25 재약속", processor: "김담당" }
];

export default function ScrErp034() {
  const initialSearch = { companyName: "", actionDate: "", actionType: "" };
  const [search, setSearch] = useState(initialSearch);
  const [data, setData] = useState<Row[]>(mockData);
  const [isLoading, setIsLoading] = useState(false);
  const searchTimerRef = useRef<number | null>(null);

  const clearSearchTimer = () => {
    if (searchTimerRef.current !== null) {
      window.clearTimeout(searchTimerRef.current);
      searchTimerRef.current = null;
    }
  };

  useEffect(() => clearSearchTimer, []);

  const applySearch = () => {
    clearSearchTimer();
    setIsLoading(true);
    searchTimerRef.current = window.setTimeout(() => {
      const filtered = mockData.filter((row) =>
        Object.entries(search).every(([key, value]) => {
          const searchValue = String(value ?? "").trim().toLowerCase();
          if (!searchValue) return true;
          return String(row[key] ?? "").toLowerCase().includes(searchValue);
        })
      );

      setData(filtered);
      setIsLoading(false);
      searchTimerRef.current = null;
    }, 800);
  };

  const handleReset = () => {
    clearSearchTimer();
    setSearch(initialSearch);
    setData(mockData);
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-034 체납 조치이력 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel loading={isLoading} onSearch={applySearch} onReset={handleReset}>
        
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
          <label className="text-xs text-muted-foreground">조치일</label>
          <Input
            placeholder="조치일"
            value={search.actionDate}
            onChange={(e) => setSearch({ ...search, actionDate: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">조치유형</label>
          <Input
            placeholder="조치유형"
            value={search.actionType}
            onChange={(e) => setSearch({ ...search, actionType: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} loading={isLoading} loadingMessage="데이터를 불러오는 중입니다" />
      <ActionBar>
        <ActionButton label="엑셀 다운로드" variant="outline" onClick={() => toast.info("엑셀 다운로드를 시작합니다.")} />
      </ActionBar>
    </div>
  );
}
