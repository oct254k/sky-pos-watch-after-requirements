"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

interface RateRow { id: string; companyName: string; storeName: string; category: string; rate: number; minRent: number; effectiveDate: string; status: string; }

const rateData: Record<string, RateRow[]> = {
  general: [
    { id: "RT001", companyName: "스카이푸드", storeName: "1층 A-101", category: "F&B", rate: 15, minRent: 5000000, effectiveDate: "2024-01-15", status: "적용중" },
    { id: "RT002", companyName: "에어라운지", storeName: "2층 B-201", category: "라운지", rate: 18, minRent: 8000000, effectiveDate: "2024-03-01", status: "적용중" },
    { id: "RT003", companyName: "클라우드카페", storeName: "1층 A-105", category: "카페", rate: 8, minRent: 2500000, effectiveDate: "2024-07-10", status: "적용중" },
  ],
  dutyfree: [
    { id: "RT004", companyName: "듀티프리마트", storeName: "3층 C-301", category: "면세-주류", rate: 20, minRent: 15000000, effectiveDate: "2023-06-20", status: "적용중" },
    { id: "RT005", companyName: "듀티프리마트", storeName: "3층 C-302", category: "면세-화장품", rate: 20, minRent: 12000000, effectiveDate: "2023-06-20", status: "적용중" },
  ],
  online: [
    { id: "RT006", companyName: "듀티프리마트", storeName: "온라인몰", category: "온라인면세", rate: 12, minRent: 5000000, effectiveDate: "2024-06-01", status: "적용중" },
  ],
};

const columns: Column<RateRow>[] = [
  { key: "id", label: "요율ID", width: "80px" },
  { key: "companyName", label: "업체명" },
  { key: "storeName", label: "매장명" },
  { key: "category", label: "업종", width: "120px" },
  { key: "rate", label: "요율(%)", width: "100px" },
  { key: "minRent", label: "최소보증금", width: "120px", render: (row) => <span>{Number(row.minRent).toLocaleString()}원</span> },
  { key: "effectiveDate", label: "적용일", width: "120px" },
  { key: "status", label: "상태", width: "100px" },
];

export default function ScrInt007() {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">영업요율 관리</h2>
      <SearchPanel onSearch={() => {}} onReset={() => setKeyword("")}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">업체명/매장명</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <Tabs defaultValue="general">
        <TabsList>
          <TabsTrigger value="general">면세점 외</TabsTrigger>
          <TabsTrigger value="dutyfree">면세점</TabsTrigger>
          <TabsTrigger value="online">온라인면세점</TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <ActionBar><ActionButton label="요율 등록" /></ActionBar>
          <DataGrid columns={columns} data={rateData.general as unknown as Record<string, unknown>[]} />
        </TabsContent>
        <TabsContent value="dutyfree">
          <ActionBar><ActionButton label="요율 등록" /></ActionBar>
          <DataGrid columns={columns} data={rateData.dutyfree as unknown as Record<string, unknown>[]} />
        </TabsContent>
        <TabsContent value="online">
          <ActionBar><ActionButton label="요율 등록" /></ActionBar>
          <DataGrid columns={columns} data={rateData.online as unknown as Record<string, unknown>[]} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
