"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface OnlineRate { id: string; companyName: string; channel: string; category: string; rate: number; minRent: number; effectiveDate: string; status: string; }

const data: OnlineRate[] = [
  { id: "OLR001", companyName: "듀티프리마트", channel: "공식몰", category: "전체", rate: 12, minRent: 5000000, effectiveDate: "2024-06-01", status: "적용중" },
  { id: "OLR002", companyName: "듀티프리마트", channel: "제휴몰", category: "주류", rate: 10, minRent: 3000000, effectiveDate: "2024-06-01", status: "적용중" },
  { id: "OLR003", companyName: "듀티프리마트", channel: "제휴몰", category: "화장품", rate: 14, minRent: 4000000, effectiveDate: "2024-06-01", status: "적용중" },
];

const columns: Column<OnlineRate>[] = [
  { key: "id", label: "요율ID", width: "80px" },
  { key: "companyName", label: "업체명" },
  { key: "channel", label: "채널", width: "100px" },
  { key: "category", label: "품목구분", width: "100px" },
  { key: "rate", label: "요율(%)", width: "100px" },
  { key: "minRent", label: "최소보증임대료", render: (row) => <span>{Number(row.minRent).toLocaleString()}원</span> },
  { key: "effectiveDate", label: "적용일", width: "120px" },
  { key: "status", label: "상태", width: "100px" },
];

export default function ScrInt009() {
  const [keyword, setKeyword] = useState("");
  const [filtered, setFiltered] = useState(data);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">온라인면세점 요율 관리</h2>
      <SearchPanel onSearch={() => setFiltered(data.filter((d) => d.companyName.includes(keyword) || d.channel.includes(keyword)))} onReset={() => { setKeyword(""); setFiltered(data); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">업체명/채널</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <ActionBar><ActionButton label="신규 등록" onClick={() => toast.success("요율 등록 화면을 준비했습니다.")} /></ActionBar>
      <DataGrid columns={columns} data={filtered as unknown as Record<string, unknown>[]} />
    </div>
  );
}
