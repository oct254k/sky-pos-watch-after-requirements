"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";
import { rentCalcs, RentCalc } from "@/data/mock";

export default function ScrInt028() {
  const [yearMonth, setYearMonth] = useState("");
  const [data, setData] = useState(rentCalcs);

  const handleSearch = () => {
    setData(rentCalcs.filter((r) => !yearMonth || r.yearMonth === yearMonth));
  };

  const handleCalc = () => {
    setData((prev) => prev.map((r) => r.status === "조정중" ? { ...r, status: "산정완료" } : r));
    alert("집계 처리가 완료되었습니다. (Mock)");
  };

  const columns: Column<RentCalc>[] = [
    { key: "id", label: "산정ID", width: "80px" },
    { key: "yearMonth", label: "년월", width: "80px" },
    { key: "companyName", label: "업체명" },
    { key: "storeName", label: "매장명" },
    { key: "totalSales", label: "총매출", width: "130px", render: (row) => <span>{Number(row.totalSales).toLocaleString()}원</span> },
    { key: "rate", label: "요율(%)", width: "100px" },
    { key: "variableRent", label: "변동임대료", width: "130px", render: (row) => <span>{Number(row.variableRent).toLocaleString()}원</span> },
    { key: "fixedRent", label: "고정임대료", width: "120px", render: (row) => <span>{Number(row.fixedRent).toLocaleString()}원</span> },
    { key: "totalRent", label: "합계임대료", width: "130px", render: (row) => <span className="font-medium">{Number(row.totalRent).toLocaleString()}원</span> },
    { key: "status", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.status} /> },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">월 변동임대료 산정</h2>
      <SearchPanel onSearch={handleSearch} onReset={() => { setYearMonth(""); setData(rentCalcs); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">년월</label>
          <Input type="month" value={yearMonth} onChange={(e) => setYearMonth(e.target.value)} className="w-40" />
        </div>
      </SearchPanel>
      <ActionBar>
        <ActionButton label="일괄 집계" onClick={handleCalc} />
      </ActionBar>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} />
    </div>
  );
}
