"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Input } from "@/components/ui/input";
import { rentCalcs, RentCalc } from "@/data/mock";

export default function ScrExt018() {
  const initialData = rentCalcs.slice(0, 3);
  const [data, setData] = useState<RentCalc[]>(initialData);
  const [yearMonth, setYearMonth] = useState("2025-01");
  const [companyName, setCompanyName] = useState("");

  const columns: Column<RentCalc>[] = [
    { key: "id", label: "코드", width: "80px" },
    { key: "yearMonth", label: "년월", width: "90px" },
    { key: "companyName", label: "업체명", width: "130px" },
    { key: "storeName", label: "매장", width: "120px" },
    { key: "fixedRent", label: "고정임대료", render: (row) => `${row.fixedRent.toLocaleString()}원` },
    { key: "variableRent", label: "변동임대료", render: (row) => `${row.variableRent.toLocaleString()}원` },
    { key: "totalRent", label: "합계임대료", render: (row) => `${row.totalRent.toLocaleString()}원` },
    { key: "status", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.status} /> },
  ];

  const handleSearch = () => {
    setData(
      initialData.filter((row) => {
        const matchMonth = !yearMonth || row.yearMonth === yearMonth;
        const matchCompany = !companyName || row.companyName.includes(companyName);
        return matchMonth && matchCompany;
      })
    );
  };

  const handleReset = () => {
    setYearMonth("2025-01");
    setCompanyName("");
    setData(initialData);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">부과임대료 현황 조회</h2>
      <MockBanner message="이 화면은 Mock 데이터로 구성된 읽기전용 화면입니다." />
      <SearchPanel onSearch={handleSearch} onReset={handleReset}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">년월</label>
          <Input type="month" value={yearMonth} onChange={(e) => setYearMonth(e.target.value)} className="w-40" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">업체명</label>
          <Input value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="업체명" className="w-40" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} />
    </div>
  );
}
