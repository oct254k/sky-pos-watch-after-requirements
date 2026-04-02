"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Input } from "@/components/ui/input";

interface McReconciliation {
  id: string;
  storeName: string;
  closeDate: string;
  posSales: number;
  vanSales: number;
  diff: number;
  status: string;
}

const mockData: McReconciliation[] = [
  { id: "MR001", storeName: "3층 C-301", closeDate: "2025-01-15", posSales: 15800000, vanSales: 15800000, diff: 0, status: "정상" },
  { id: "MR002", storeName: "3층 C-302", closeDate: "2025-01-15", posSales: 12500000, vanSales: 12480000, diff: 20000, status: "확인필요" },
  { id: "MR003", storeName: "3층 C-303", closeDate: "2025-01-16", posSales: 18200000, vanSales: 18200000, diff: 0, status: "정상" },
];

export default function ScrExt015() {
  const [data, setData] = useState<McReconciliation[]>(mockData);
  const [closeDate, setCloseDate] = useState("2025-01-15");
  const [storeName, setStoreName] = useState("");

  const columns: Column<McReconciliation>[] = [
    { key: "id", label: "코드", width: "80px" },
    { key: "storeName", label: "매장", width: "120px" },
    { key: "closeDate", label: "마감일", width: "110px" },
    { key: "posSales", label: "POS매출", render: (row) => `${row.posSales.toLocaleString()}원` },
    { key: "vanSales", label: "VAN매출", render: (row) => `${row.vanSales.toLocaleString()}원` },
    { key: "diff", label: "차이", width: "100px", render: (row) => `${row.diff.toLocaleString()}원` },
    { key: "status", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.status} /> },
  ];

  const handleSearch = () => {
    setData(
      mockData.filter((row) => {
        const matchDate = !closeDate || row.closeDate === closeDate;
        const matchStore = !storeName || row.storeName.includes(storeName);
        return matchDate && matchStore;
      })
    );
  };

  const handleReset = () => {
    setCloseDate("2025-01-15");
    setStoreName("");
    setData(mockData);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">MC 매출/일마감 대사 관리</h2>
      <MockBanner message="이 화면은 Mock 데이터로 구성된 읽기전용 화면입니다." />
      <SearchPanel onSearch={handleSearch} onReset={handleReset}>
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
