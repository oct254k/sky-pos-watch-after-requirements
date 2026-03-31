"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Input } from "@/components/ui/input";
import { dailyCloses as mockDailyCloses, DailyClose } from "@/data/mock";

export default function ScrExt009() {
  const [data, setData] = useState<DailyClose[]>(mockDailyCloses);
  const [searchDate, setSearchDate] = useState("2025-01-15");
  const [searchStore, setSearchStore] = useState("");

  const columns: Column<DailyClose>[] = [
    { key: "id", label: "코드", width: "80px" },
    { key: "storeName", label: "매장", width: "120px" },
    { key: "companyName", label: "업체", width: "120px" },
    { key: "closeDate", label: "마감일", width: "110px" },
    { key: "totalSales", label: "총매출", width: "130px", render: (row) => `${row.totalSales.toLocaleString()}원` },
    { key: "cardSales", label: "카드매출", width: "130px", render: (row) => `${row.cardSales.toLocaleString()}원` },
    { key: "cashSales", label: "현금매출", width: "110px", render: (row) => `${row.cashSales.toLocaleString()}원` },
    { key: "receiptCount", label: "영수증수", width: "80px" },
    { key: "status", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.status} /> },
  ];

  const handleSearch = () => {
    let filtered = [...mockDailyCloses];
    if (searchDate) filtered = filtered.filter((d) => d.closeDate === searchDate);
    if (searchStore) filtered = filtered.filter((d) => d.storeName.includes(searchStore));
    setData(filtered);
  };

  const handleReset = () => {
    setSearchDate("2025-01-15");
    setSearchStore("");
    setData(mockDailyCloses);
  };

  const handleConfirm = () => {
    setData((prev) =>
      prev.map((d) => (d.status === "미확정" ? { ...d, status: "확정", confirmedBy: "사용자", confirmedAt: new Date().toISOString().slice(0, 16).replace("T", " ") } : d))
    );
    alert("미확정 건이 확정되었습니다.");
  };

  const handleCancel = () => {
    setData((prev) =>
      prev.map((d) => (d.status === "확정" ? { ...d, status: "미확정", confirmedBy: "", confirmedAt: "" } : d))
    );
    alert("확정이 취소되었습니다.");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">일마감 관리</h2>
      <SearchPanel onSearch={handleSearch} onReset={handleReset}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">마감일</label>
          <Input type="date" value={searchDate} onChange={(e) => setSearchDate(e.target.value)} className="w-40" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">매장</label>
          <Input value={searchStore} onChange={(e) => setSearchStore(e.target.value)} placeholder="매장명" className="w-40" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} />
      <ActionBar>
        <ActionButton label="확정" onClick={handleConfirm} />
        <ActionButton label="취소" variant="destructive" onClick={handleCancel} />
        <ActionButton label="엑셀" variant="outline" onClick={() => alert("엑셀 다운로드")} />
      </ActionBar>
    </div>
  );
}
