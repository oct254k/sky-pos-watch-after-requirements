"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Input } from "@/components/ui/input";
import { products as mockProducts, Product } from "@/data/mock";

const unapproved = mockProducts.filter((p) => p.status === "미승인");

export default function ScrExt005() {
  const [data, setData] = useState<Product[]>(unapproved);
  const [searchName, setSearchName] = useState("");

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

  const handleSearch = () => {
    let filtered = unapproved;
    if (searchName) filtered = filtered.filter((p) => p.name.includes(searchName));
    setData(filtered);
  };

  const handleReset = () => {
    setSearchName("");
    setData(unapproved);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">미승인 품목 조회</h2>
      <SearchPanel onSearch={handleSearch} onReset={handleReset}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">품목명</label>
          <Input value={searchName} onChange={(e) => setSearchName(e.target.value)} placeholder="품목명" className="w-40" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} />
      <ActionBar>
        <ActionButton label="엑셀" variant="outline" onClick={() => alert("엑셀 다운로드")} />
      </ActionBar>
    </div>
  );
}
