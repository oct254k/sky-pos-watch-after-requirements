"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Input } from "@/components/ui/input";
import { monthlyCloses, MonthlyClose } from "@/data/mock";

export default function ScrInt022() {
  const [yearMonth, setYearMonth] = useState("");
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(monthlyCloses);

  const handleSearch = () => {
    setData(monthlyCloses.filter((m) => {
      const matchYm = !yearMonth || m.yearMonth === yearMonth;
      const matchKw = !keyword || m.companyName.includes(keyword) || m.storeName.includes(keyword);
      return matchYm && matchKw;
    }));
  };

  const columns: Column<MonthlyClose>[] = [
    { key: "id", label: "마감ID", width: "80px" },
    { key: "yearMonth", label: "년월", width: "80px" },
    { key: "companyName", label: "업체명" },
    { key: "storeName", label: "매장명" },
    { key: "totalSales", label: "총매출", width: "130px", render: (row) => <span>{Number(row.totalSales).toLocaleString()}원</span> },
    { key: "variableRent", label: "변동임대료", width: "130px", render: (row) => <span>{Number(row.variableRent).toLocaleString()}원</span> },
    { key: "fixedRent", label: "고정임대료", width: "130px", render: (row) => <span>{Number(row.fixedRent).toLocaleString()}원</span> },
    { key: "status", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.status} /> },
    { key: "closedAt", label: "마감일시", width: "130px" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">임대매장 월마감 관리</h2>
      <SearchPanel onSearch={handleSearch} onReset={() => { setYearMonth(""); setKeyword(""); setData(monthlyCloses); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">년월</label>
          <Input type="month" value={yearMonth} onChange={(e) => setYearMonth(e.target.value)} className="w-40" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">업체명/매장명</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-48" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} />
    </div>
  );
}
