"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface McSmartOrder {
  id: string;
  orderNo: string;
  storeName: string;
  date: string;
  amount: number;
  channel: string;
  status: string;
}

const mockData: McSmartOrder[] = [
  { id: "SO001", orderNo: "ORD-20250115-001", storeName: "3층 C-301", date: "2025-01-15", amount: 125000, channel: "앱주문", status: "완료" },
  { id: "SO002", orderNo: "ORD-20250115-002", storeName: "3층 C-302", date: "2025-01-15", amount: 89000, channel: "키오스크", status: "완료" },
  { id: "SO003", orderNo: "ORD-20250116-001", storeName: "3층 C-301", date: "2025-01-16", amount: 210000, channel: "앱주문", status: "취소" },
];

export default function ScrExt013() {
  const [data, setData] = useState<McSmartOrder[]>(mockData);
  const [startDate, setStartDate] = useState("2025-01-01");
  const [endDate, setEndDate] = useState("2025-01-31");

  const columns: Column<McSmartOrder>[] = [
    { key: "orderNo", label: "주문번호", width: "170px" },
    { key: "storeName", label: "매장", width: "120px" },
    { key: "date", label: "날짜", width: "110px" },
    { key: "amount", label: "금액", render: (row) => `${row.amount.toLocaleString()}원` },
    { key: "channel", label: "채널", width: "100px" },
    { key: "status", label: "상태", width: "100px" },
  ];

  const handleSearch = () => {
    setData(
      mockData.filter((row) => {
        const matchStart = !startDate || row.date >= startDate;
        const matchEnd = !endDate || row.date <= endDate;
        return matchStart && matchEnd;
      })
    );
  };

  const handleReset = () => {
    setStartDate("2025-01-01");
    setEndDate("2025-01-31");
    setData(mockData);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">MC 스마트오더 매출 조회</h2>
      <MockBanner message="이 화면은 Mock 데이터로 구성된 읽기전용 화면입니다." />
      <SearchPanel onSearch={handleSearch} onReset={handleReset}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">시작일</label>
          <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-40" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">종료일</label>
          <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-40" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} />
    </div>
  );
}
