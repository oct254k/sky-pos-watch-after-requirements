"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";
import { products, Product } from "@/data/mock";

export default function ScrInt017() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(products);

  const handleSearch = () => {
    setData(products.filter((p) => p.name.includes(keyword) || p.companyName.includes(keyword) || p.category.includes(keyword)));
  };

  const handleApprove = () => {
    const pending = data.filter((p) => p.status === "미승인");
    if (pending.length === 0) { alert("미승인 품목이 없습니다."); return; }
    setData((prev) => prev.map((p) => p.status === "미승인" ? { ...p, status: "승인" } : p));
    alert(`${pending.length}건 승인 처리되었습니다. (Mock)`);
  };

  const handleReject = () => {
    const pending = data.filter((p) => p.status === "미승인");
    if (pending.length === 0) { alert("미승인 품목이 없습니다."); return; }
    setData((prev) => prev.map((p) => p.status === "미승인" ? { ...p, status: "반려" } : p));
    alert(`${pending.length}건 반려 처리되었습니다. (Mock)`);
  };

  const columns: Column<Product>[] = [
    { key: "id", label: "품목ID", width: "80px" },
    { key: "name", label: "품목명" },
    { key: "category", label: "카테고리", width: "80px" },
    { key: "subCategory", label: "소분류", width: "80px" },
    { key: "price", label: "가격", width: "120px", render: (row) => <span>{Number(row.price).toLocaleString()}원</span> },
    { key: "companyName", label: "업체명" },
    { key: "barcode", label: "바코드", width: "120px" },
    { key: "status", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.status} /> },
    { key: "regDate", label: "등록일", width: "120px" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">품목(가격) 승인 관리</h2>
      <SearchPanel onSearch={handleSearch} onReset={() => { setKeyword(""); setData(products); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">품목명/업체명/카테고리</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <ActionBar>
        <ActionButton label="일괄 승인" onClick={handleApprove} />
        <ActionButton label="일괄 반려" variant="destructive" onClick={handleReject} />
      </ActionBar>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} />
    </div>
  );
}
