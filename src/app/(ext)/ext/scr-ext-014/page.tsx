"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Input } from "@/components/ui/input";

interface McDailyClose {
  id: string;
  storeName: string;
  mcCompany: string;
  closeDate: string;
  totalSales: number;
  receiptCount: number;
  status: string;
}

const mockData: McDailyClose[] = [
  { id: "MDC001", storeName: "3층 C-301", mcCompany: "듀티프리마트", closeDate: "2025-01-15", totalSales: 15800000, receiptCount: 120, status: "확정" },
  { id: "MDC002", storeName: "3층 C-302", mcCompany: "듀티프리마트", closeDate: "2025-01-15", totalSales: 12500000, receiptCount: 95, status: "확정" },
  { id: "MDC003", storeName: "3층 C-303", mcCompany: "듀티프리마트", closeDate: "2025-01-16", totalSales: 18200000, receiptCount: 135, status: "미확정" },
];

export default function ScrExt014() {
  const [data] = useState<McDailyClose[]>(mockData);
  const [closeDate, setCloseDate] = useState("2025-01-15");
  const [storeName, setStoreName] = useState("");

  const columns: Column<McDailyClose>[] = [
    { key: "id", label: "코드", width: "90px" },
    { key: "storeName", label: "매장", width: "120px" },
    { key: "mcCompany", label: "MC업체", width: "130px" },
    { key: "closeDate", label: "마감일", width: "110px" },
    { key: "totalSales", label: "총매출", render: (row) => `${row.totalSales.toLocaleString()}원` },
    { key: "receiptCount", label: "영수증수", width: "90px" },
    { key: "status", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.status} /> },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">MC 일마감 내역 관리</h2>
      <MockBanner message="이 화면은 Mock 데이터로 구성된 읽기전용 화면입니다." />
      <SearchPanel>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">마감일</label>
          <Input type="date" value={closeDate} onChange={(e) => setCloseDate(e.target.value)} className="w-40" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">매장</label>
          <Input value={storeName} onChange={(e) => setStoreName(e.target.value)} placeholder="매장명" className="w-40" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} />
    </div>
  );
}
