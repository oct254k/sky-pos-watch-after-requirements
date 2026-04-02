"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface DutyFreeRate { id: string; companyName: string; storeName: string; category: string; rate: number; minRent: number; effectiveDate: string; status: string; }

const data: DutyFreeRate[] = [
  { id: "DFR001", companyName: "듀티프리마트", storeName: "3층 C-301", category: "주류", rate: 20, minRent: 15000000, effectiveDate: "2023-06-20", status: "적용중" },
  { id: "DFR002", companyName: "듀티프리마트", storeName: "3층 C-302", category: "화장품", rate: 22, minRent: 12000000, effectiveDate: "2023-06-20", status: "적용중" },
  { id: "DFR003", companyName: "듀티프리마트", storeName: "3층 C-303", category: "패션잡화", rate: 18, minRent: 10000000, effectiveDate: "2024-01-01", status: "적용중" },
];

const columns: Column<DutyFreeRate>[] = [
  { key: "id", label: "요율ID", width: "80px" },
  { key: "companyName", label: "업체명" },
  { key: "storeName", label: "매장명" },
  { key: "category", label: "품목구분", width: "100px" },
  { key: "rate", label: "요율(%)", width: "100px" },
  { key: "minRent", label: "최소보증임대료", render: (row) => <span>{Number(row.minRent).toLocaleString()}원</span> },
  { key: "effectiveDate", label: "적용일", width: "120px" },
  { key: "status", label: "상태", width: "100px" },
];

export default function ScrInt008() {
  const [keyword, setKeyword] = useState("");
  const [filtered, setFiltered] = useState(data);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">면세점 요율 관리</h2>
      <SearchPanel onSearch={() => setFiltered(data.filter((d) => d.companyName.includes(keyword) || d.category.includes(keyword)))} onReset={() => { setKeyword(""); setFiltered(data); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">업체명/품목구분</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <ActionBar><ActionButton label="신규 등록" onClick={() => toast.success("요율 등록 화면을 준비했습니다.")} /></ActionBar>
      <DataGrid columns={columns} data={filtered as unknown as Record<string, unknown>[]} />
    </div>
  );
}
