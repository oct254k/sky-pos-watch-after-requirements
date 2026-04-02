"use client";

import { useRef, useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Input } from "@/components/ui/input";
import { products as mockProducts, Product } from "@/data/mock";
import { toast } from "sonner";

const unapproved = mockProducts.filter((p) => p.status === "미승인");

export default function ScrExt005() {
  const [data, setData] = useState<Product[]>(unapproved);
  const [searchName, setSearchName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const searchTimerRef = useRef<ReturnType<typeof window.setTimeout> | null>(null);

  const columns: Column<Product>[] = [
    { key: "id", label: "품목코드", width: "100px" },
    { key: "name", label: "품목명" },
    { key: "category", label: "카테고리", width: "100px" },
    { key: "subCategory", label: "세부분류", width: "100px" },
    { key: "price", label: "가격", width: "100px", render: (row) => `${row.price.toLocaleString()}원` },
    { key: "companyName", label: "업체명", width: "120px" },
    { key: "status", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.status} /> },
    { key: "regDate", label: "등록일", width: "110px" },
  ];

  const applySearch = () => {
    let filtered = unapproved;
    if (searchName) filtered = filtered.filter((p) => p.name.includes(searchName));
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
    setSearchName("");
    setData(unapproved);
    setIsLoading(false);
    searchTimerRef.current = null;
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">미승인 품목 조회</h2>
      <SearchPanel loading={isLoading} onSearch={handleSearch} onReset={handleReset}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">품목명</label>
          <Input value={searchName} onChange={(e) => setSearchName(e.target.value)} placeholder="품목명" className="w-40" />
        </div>
      </SearchPanel>
      <DataGrid
        columns={columns}
        data={data as unknown as Record<string, unknown>[]}
        loading={isLoading}
        loadingMessage="미승인 품목을 불러오는 중입니다"
      />
      <ActionBar>
        <ActionButton label="엑셀 다운로드" variant="outline" onClick={() => toast.info("엑셀 다운로드를 시작합니다.")} />
      </ActionBar>
    </div>
  );
}
