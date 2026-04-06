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
    { key: "itemCode", label: "품목코드" },
    { key: "itemName", label: "품목명" },
    { key: "storeName", label: "매장명" },
    { key: "requestDate", label: "요청일" },
    { key: "approvalStatus", label: "승인상태" },
    { key: "approver", label: "승인자" },
    { key: "approvalDate", label: "승인일" }
];

const mockData: Row[] = [
    { itemCode: "ITM-050", itemName: "신메뉴A", storeName: "블루커피", requestDate: "2025-03-10", approvalStatus: "승인완료", approver: "김관리", approvalDate: "2025-03-12" },
    { itemCode: "ITM-051", itemName: "신메뉴B", storeName: "스카이푸드", requestDate: "2025-03-15", approvalStatus: "심사중", approver: "-", approvalDate: "-" },
    { itemCode: "ITM-052", itemName: "신메뉴C", storeName: "그린마트", requestDate: "2025-03-18", approvalStatus: "반려", approver: "이담당", approvalDate: "2025-03-19" }
];

export default function ScrErp014() {
  const [search, setSearch] = useState({ itemCode: "", approvalStatus: "", requestDate: "" });
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
    setSearch({ itemCode: "", approvalStatus: "", requestDate: "" });
    setData(mockData);
    setIsLoading(false);
    searchTimerRef.current = null;
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-014 품목 승인 현황 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel loading={isLoading} onSearch={handleSearch} onReset={handleReset}>
        
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">품목코드</label>
          <Input
            placeholder="품목코드"
            value={search.itemCode}
            onChange={(e) => setSearch({ ...search, itemCode: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">승인상태</label>
          <Input
            placeholder="승인상태"
            value={search.approvalStatus}
            onChange={(e) => setSearch({ ...search, approvalStatus: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">요청일</label>
          <Input
            placeholder="요청일"
            value={search.requestDate}
            onChange={(e) => setSearch({ ...search, requestDate: e.target.value })}
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
