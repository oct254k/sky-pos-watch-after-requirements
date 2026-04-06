"use client";

import { useRef, useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Input } from "@/components/ui/input";
import { products as mockProducts, Product } from "@/data/mock";
import { toast } from "sonner";

export default function ScrExt004() {
  const [data, setData] = useState<Product[]>(mockProducts);
  const [startDate, setStartDate] = useState("2024-01-01");
  const [endDate, setEndDate] = useState("2025-12-31");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const searchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const columns: Column<Product>[] = [
    { key: "id", label: "품목코드", width: "100px" },
    { key: "name", label: "품목명" },
    { key: "category", label: "카테고리", width: "100px" },
    { key: "price", label: "가격", width: "100px", render: (row) => `${row.price.toLocaleString()}원` },
    { key: "companyName", label: "업체명", width: "120px" },
    { key: "status", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.status} /> },
    { key: "regDate", label: "신청일", width: "110px" },
  ];

  const applySearch = () => {
    let filtered = [...mockProducts];
    if (startDate) filtered = filtered.filter((p) => p.regDate >= startDate);
    if (endDate) filtered = filtered.filter((p) => p.regDate <= endDate);
    if (status) filtered = filtered.filter((p) => p.status.includes(status));
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
    setStartDate("2024-01-01");
    setEndDate("2025-12-31");
    setStatus("");
    setData(mockProducts);
    setIsLoading(false);
    searchTimerRef.current = null;
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">품목 신청내역 조회</h2>
      <SearchPanel loading={isLoading} onSearch={handleSearch} onReset={handleReset}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">시작일</label>
          <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-40" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">종료일</label>
          <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-40" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">상태</label>
          <Input value={status} onChange={(e) => setStatus(e.target.value)} placeholder="승인/미승인" className="w-32" />
        </div>
      </SearchPanel>
      <DataGrid
        columns={columns}
        data={data as unknown as Record<string, unknown>[]}
        loading={isLoading}
        loadingMessage="품목 신청내역을 불러오는 중입니다"
      />
      <ActionBar>
        <ActionButton label="엑셀 다운로드" variant="outline" onClick={() => toast.info("엑셀 다운로드를 시작합니다.")} />
      </ActionBar>
    </div>
  );
}
