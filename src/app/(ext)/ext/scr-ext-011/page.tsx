"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface TaxRecord {
  id: string;
  companyName: string;
  bizNo: string;
  yearMonth: string;
  salesAmount: number;
  taxBase: number;
  status: string;
}

const mockData: TaxRecord[] = [
  { id: "TX001", companyName: "스카이푸드", bizNo: "123-45-67890", yearMonth: "2025-01", salesAmount: 52000000, taxBase: 46800000, status: "발급완료" },
  { id: "TX002", companyName: "에어라운지", bizNo: "234-56-78901", yearMonth: "2025-01", salesAmount: 88000000, taxBase: 79200000, status: "발급완료" },
  { id: "TX003", companyName: "듀티프리마트", bizNo: "345-67-89012", yearMonth: "2025-01", salesAmount: 450000000, taxBase: 405000000, status: "대기" },
];

export default function ScrExt011() {
  const [data] = useState<TaxRecord[]>(mockData);
  const [yearMonth, setYearMonth] = useState("2025-01");
  const [companyName, setCompanyName] = useState("");

  const columns: Column<TaxRecord>[] = [
    { key: "id", label: "코드", width: "80px" },
    { key: "companyName", label: "업체명", width: "130px" },
    { key: "bizNo", label: "사업자번호", width: "130px" },
    { key: "yearMonth", label: "년월", width: "90px" },
    { key: "salesAmount", label: "매출액", render: (row) => `${row.salesAmount.toLocaleString()}원` },
    { key: "taxBase", label: "과세표준액", render: (row) => `${row.taxBase.toLocaleString()}원` },
    { key: "status", label: "상태", width: "100px" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">연과세표준 증명내역 관리</h2>
      <MockBanner message="이 화면은 Mock 데이터로 구성된 읽기전용 화면입니다." />
      <SearchPanel>
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
