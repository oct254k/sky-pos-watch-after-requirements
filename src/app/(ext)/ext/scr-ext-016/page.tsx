"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Input } from "@/components/ui/input";

interface McRentSummary {
  id: string;
  yearMonth: string;
  mcCompany: string;
  storeName: string;
  fixedRent: number;
  variableRent: number;
  totalRent: number;
  status: string;
}

const mockData: McRentSummary[] = [
  { id: "MRS001", yearMonth: "2025-01", mcCompany: "듀티프리마트", storeName: "3층 C-301", fixedRent: 15000000, variableRent: 90000000, totalRent: 105000000, status: "산정완료" },
  { id: "MRS002", yearMonth: "2025-01", mcCompany: "듀티프리마트", storeName: "3층 C-302", fixedRent: 12000000, variableRent: 72000000, totalRent: 84000000, status: "산정완료" },
  { id: "MRS003", yearMonth: "2025-01", mcCompany: "듀티프리마트", storeName: "3층 C-303", fixedRent: 10000000, variableRent: 54000000, totalRent: 64000000, status: "조정중" },
];

export default function ScrExt016() {
  const [data] = useState<McRentSummary[]>(mockData);
  const [yearMonth, setYearMonth] = useState("2025-01");
  const [mcCompany, setMcCompany] = useState("");

  const columns: Column<McRentSummary>[] = [
    { key: "id", label: "코드", width: "90px" },
    { key: "yearMonth", label: "년월", width: "90px" },
    { key: "mcCompany", label: "MC업체", width: "130px" },
    { key: "storeName", label: "매장", width: "120px" },
    { key: "fixedRent", label: "고정임대료", render: (row) => `${row.fixedRent.toLocaleString()}원` },
    { key: "variableRent", label: "변동임대료", render: (row) => `${row.variableRent.toLocaleString()}원` },
    { key: "totalRent", label: "합계임대료", render: (row) => `${row.totalRent.toLocaleString()}원` },
    { key: "status", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.status} /> },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">MC 부과임대료 통합 조회</h2>
      <MockBanner message="이 화면은 Mock 데이터로 구성된 읽기전용 화면입니다." />
      <SearchPanel>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">년월</label>
          <Input type="month" value={yearMonth} onChange={(e) => setYearMonth(e.target.value)} className="w-40" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">MC업체</label>
          <Input value={mcCompany} onChange={(e) => setMcCompany(e.target.value)} placeholder="MC업체명" className="w-40" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} />
    </div>
  );
}
