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
    { key: "regNo", label: "등록번호" },
    { key: "companyName", label: "업체명" },
    { key: "salesType", label: "매출유형" },
    { key: "salesDate", label: "매출일" },
    { key: "amount", label: "금액" },
    { key: "description", label: "적요" },
    { key: "approvalStatus", label: "승인상태" },
    { key: "regDate", label: "등록일" }
];

const mockData: Row[] = [
    { regNo: "IR-2025-001", companyName: "옐로키친", salesType: "케이터링", salesDate: "2025-03-15", amount: "5,000,000", description: "외부 케이터링 매출", approvalStatus: "승인", regDate: "2025-03-16" },
    { regNo: "IR-2025-002", companyName: "블루커피", salesType: "단체주문", salesDate: "2025-03-20", amount: "2,000,000", description: "기업 단체 주문", approvalStatus: "심사중", regDate: "2025-03-21" },
    { regNo: "IR-2025-003", companyName: "그린마트", salesType: "온라인판매", salesDate: "2025-03-22", amount: "1,500,000", description: "온라인 배송 매출", approvalStatus: "승인", regDate: "2025-03-23" }
];

export default function ScrErp040() {
  const initialSearch = { companyName: "", salesType: "", regDate: "" };
  const [search, setSearch] = useState(initialSearch);
  const [data, setData] = useState<Row[]>(mockData);
  const [isLoading, setIsLoading] = useState(false);
  const searchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearSearchTimer = () => {
    if (searchTimerRef.current !== null) {
      clearTimeout(searchTimerRef.current);
      searchTimerRef.current = null;
    }
  };

  useEffect(() => clearSearchTimer, []);

  const applySearch = () => {
    clearSearchTimer();
    setIsLoading(true);
    searchTimerRef.current = setTimeout(() => {
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
      <h2 className="text-lg font-semibold">SCR-ERP-040 비정형 매출 등록 현황 조회</h2>
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
          <label className="text-xs text-muted-foreground">매출유형</label>
          <Input
            placeholder="매출유형"
            value={search.salesType}
            onChange={(e) => setSearch({ ...search, salesType: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">등록일</label>
          <Input
            placeholder="등록일"
            value={search.regDate}
            onChange={(e) => setSearch({ ...search, regDate: e.target.value })}
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
