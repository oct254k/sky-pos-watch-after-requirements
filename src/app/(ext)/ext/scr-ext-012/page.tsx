"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Input } from "@/components/ui/input";

interface McProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  mcCompany: string;
  status: string;
}

const mockData: McProduct[] = [
  { id: "MP001", name: "MC 아메리카노", category: "음료", price: 4800, mcCompany: "듀티프리마트", status: "승인" },
  { id: "MP002", name: "MC 샌드위치 세트", category: "식품", price: 8500, mcCompany: "듀티프리마트", status: "승인" },
  { id: "MP003", name: "MC 선물세트 A", category: "면세", price: 55000, mcCompany: "듀티프리마트", status: "미승인" },
];

export default function ScrExt012() {
  const [data, setData] = useState<McProduct[]>(mockData);
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  const columns: Column<McProduct>[] = [
    { key: "id", label: "코드", width: "90px" },
    { key: "name", label: "품목명" },
    { key: "category", label: "카테고리", width: "100px" },
    { key: "price", label: "가격", width: "100px", render: (row) => `${row.price.toLocaleString()}원` },
    { key: "mcCompany", label: "MC업체", width: "130px" },
    { key: "status", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.status} /> },
  ];

  const handleSearch = () => {
    setData(
      mockData.filter((row) => {
        const matchName = !searchName || row.name.includes(searchName);
        const matchCategory = !searchCategory || row.category.includes(searchCategory);
        return matchName && matchCategory;
      })
    );
  };

  const handleReset = () => {
    setSearchName("");
    setSearchCategory("");
    setData(mockData);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">MC 판매품목(가격) 등록</h2>
      <MockBanner message="이 화면은 Mock 데이터로 구성된 읽기전용 화면입니다." />
      <SearchPanel onSearch={handleSearch} onReset={handleReset}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">품목명</label>
          <Input value={searchName} onChange={(e) => setSearchName(e.target.value)} placeholder="품목명" className="w-40" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">카테고리</label>
          <Input value={searchCategory} onChange={(e) => setSearchCategory(e.target.value)} placeholder="카테고리" className="w-32" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} />
    </div>
  );
}
