"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Input } from "@/components/ui/input";
import { monthlyCloses as mockMonthlyCloses, MonthlyClose } from "@/data/mock";

export default function ScrExt010() {
  const [data, setData] = useState<MonthlyClose[]>(mockMonthlyCloses);
  const [yearMonth, setYearMonth] = useState("2025-01");

  const columns: Column<MonthlyClose>[] = [
    { key: "id", label: "코드", width: "80px" },
    { key: "yearMonth", label: "년월", width: "90px" },
    { key: "companyName", label: "업체", width: "120px" },
    { key: "storeName", label: "매장", width: "120px" },
    { key: "totalSales", label: "총매출", width: "130px", render: (row) => `${row.totalSales.toLocaleString()}원` },
    { key: "variableRent", label: "변동임대료", width: "130px", render: (row) => `${row.variableRent.toLocaleString()}원` },
    { key: "fixedRent", label: "고정임대료", width: "130px", render: (row) => `${row.fixedRent.toLocaleString()}원` },
    { key: "status", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.status} /> },
    { key: "closedAt", label: "마감일시", width: "110px" },
  ];

  const handleSearch = () => {
    let filtered = [...mockMonthlyCloses];
    if (yearMonth) filtered = filtered.filter((m) => m.yearMonth === yearMonth);
    setData(filtered);
  };

  const handleReset = () => {
    setYearMonth("2025-01");
    setData(mockMonthlyCloses);
  };

  const handleClose = () => {
    setData((prev) =>
      prev.map((m) =>
        m.status === "진행중"
          ? { ...m, status: "마감완료", closedAt: new Date().toISOString().slice(0, 10) }
          : m
      )
    );
    alert("월마감이 완료되었습니다.");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">월마감 관리</h2>
      <SearchPanel onSearch={handleSearch} onReset={handleReset}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">년월</label>
          <Input type="month" value={yearMonth} onChange={(e) => setYearMonth(e.target.value)} className="w-40" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} />
      <ActionBar>
        <ActionButton label="마감" onClick={handleClose} />
        <ActionButton label="엑셀" variant="outline" onClick={() => alert("엑셀 다운로드")} />
      </ActionBar>
    </div>
  );
}
