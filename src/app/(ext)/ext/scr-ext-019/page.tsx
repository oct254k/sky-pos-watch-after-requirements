"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Input } from "@/components/ui/input";

interface YearlyRentCalc {
  id: string;
  year: string;
  companyName: string;
  storeName: string;
  annualSales: number;
  annualRent: number;
  adjustedRent: number;
  diff: number;
  status: string;
}

const mockData: YearlyRentCalc[] = [
  { id: "YR001", year: "2024", companyName: "스카이푸드", storeName: "1층 A-101", annualSales: 600000000, annualRent: 150000000, adjustedRent: 148000000, diff: -2000000, status: "산정완료" },
  { id: "YR002", year: "2024", companyName: "에어라운지", storeName: "2층 B-201", annualSales: 1050000000, annualRent: 285000000, adjustedRent: 285000000, diff: 0, status: "산정완료" },
  { id: "YR003", year: "2024", companyName: "듀티프리마트", storeName: "3층 C-301", annualSales: 5400000000, annualRent: 1260000000, adjustedRent: 1280000000, diff: 20000000, status: "조정중" },
];

export default function ScrExt019() {
  const [data, setData] = useState<YearlyRentCalc[]>(mockData);
  const [year, setYear] = useState("2024");
  const [companyName, setCompanyName] = useState("");

  const columns: Column<YearlyRentCalc>[] = [
    { key: "id", label: "코드", width: "80px" },
    { key: "year", label: "연도", width: "70px" },
    { key: "companyName", label: "업체명", width: "130px" },
    { key: "storeName", label: "매장", width: "120px" },
    { key: "annualSales", label: "연매출", render: (row) => `${row.annualSales.toLocaleString()}원` },
    { key: "annualRent", label: "연임대료", render: (row) => `${row.annualRent.toLocaleString()}원` },
    { key: "adjustedRent", label: "정산임대료", render: (row) => `${row.adjustedRent.toLocaleString()}원` },
    { key: "diff", label: "차액", width: "110px", render: (row) => `${row.diff.toLocaleString()}원` },
    { key: "status", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.status} /> },
  ];

  const handleSearch = () => {
    setData(
      mockData.filter((row) => {
        const matchYear = !year || row.year === year;
        const matchCompany = !companyName || row.companyName.includes(companyName);
        return matchYear && matchCompany;
      })
    );
  };

  const handleReset = () => {
    setYear("2024");
    setCompanyName("");
    setData(mockData);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">연정산 임대료 산정내역 조회</h2>
      <MockBanner message="이 화면은 Mock 데이터로 구성된 읽기전용 화면입니다." />
      <SearchPanel onSearch={handleSearch} onReset={handleReset}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">연도</label>
          <Input value={year} onChange={(e) => setYear(e.target.value)} placeholder="2024" className="w-32" />
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
