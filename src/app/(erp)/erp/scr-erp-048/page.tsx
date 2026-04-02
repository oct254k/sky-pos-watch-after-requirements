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
    { key: "exceptionNo", label: "예외번호" },
    { key: "exceptionType", label: "예외유형" },
    { key: "occurDate", label: "발생일" },
    { key: "storeName", label: "매장명" },
    { key: "description", label: "내용" },
    { key: "impact", label: "영향도" },
    { key: "status", label: "처리상태" },
    { key: "resolveDate", label: "해결일" }
];

const mockData: Row[] = [
    { exceptionNo: "EX-2025-001", exceptionType: "데이터누락", occurDate: "2025-03-28", storeName: "레드패션", description: "3/28 매출데이터 미수신", impact: "높음", status: "처리중", resolveDate: "-" },
    { exceptionNo: "EX-2025-002", exceptionType: "금액불일치", occurDate: "2025-03-27", storeName: "그린마트", description: "POS-VAN 금액 차이 50만원", impact: "중간", status: "해결", resolveDate: "2025-03-28" },
    { exceptionNo: "EX-2025-003", exceptionType: "시스템오류", occurDate: "2025-03-29", storeName: "전체", description: "동기화 지연 발생", impact: "높음", status: "모니터링", resolveDate: "-" }
];

export default function ScrErp048() {
  const [search, setSearch] = useState({ exceptionType: "", occurDate: "", status: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Row[]>(mockData);

  const applySearch = () => {
    const filtered = mockData.filter((row) => {
      const matchesExceptionType =
        !search.exceptionType || String(row.exceptionType ?? "").toLowerCase().includes(search.exceptionType.toLowerCase());
      const matchesOccurDate =
        !search.occurDate || String(row.occurDate ?? "").toLowerCase().includes(search.occurDate.toLowerCase());
      const matchesStatus =
        !search.status || String(row.status ?? "").toLowerCase().includes(search.status.toLowerCase());

      return matchesExceptionType && matchesOccurDate && matchesStatus;
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
    setSearch({ exceptionType: "", occurDate: "", status: "" });
    setData(mockData);
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-048 예외 처리 관리 현황 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel {...({ loading: isLoading } as Record<string, unknown>)} onSearch={handleSearch} onReset={handleReset}>
        
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">예외유형</label>
          <Input
            placeholder="예외유형"
            value={search.exceptionType}
            onChange={(e) => setSearch({ ...search, exceptionType: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">발생일</label>
          <Input
            placeholder="발생일"
            value={search.occurDate}
            onChange={(e) => setSearch({ ...search, occurDate: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">처리상태</label>
          <Input
            placeholder="처리상태"
            value={search.status}
            onChange={(e) => setSearch({ ...search, status: e.target.value })}
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
