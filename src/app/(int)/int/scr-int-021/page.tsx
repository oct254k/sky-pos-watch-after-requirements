"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";
import { dailyCloses, DailyClose } from "@/data/mock";

export default function ScrInt021() {
  const [date, setDate] = useState("");
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(dailyCloses);

  const handleSearch = () => {
    setData(dailyCloses.filter((d) => {
      const matchDate = !date || d.closeDate === date;
      const matchKw = !keyword || d.storeName.includes(keyword) || d.companyName.includes(keyword);
      return matchDate && matchKw;
    }));
  };

  const handleConfirm = () => {
    const pending = data.filter((d) => d.status === "미확정");
    if (pending.length === 0) { alert("미확정 건이 없습니다."); return; }
    setData((prev) => prev.map((d) => d.status === "미확정" ? { ...d, status: "확정", confirmedBy: "관리자", confirmedAt: new Date().toLocaleString("ko") } : d));
    alert(`${pending.length}건 확정 처리되었습니다. (Mock)`);
  };

  const columns: Column<DailyClose>[] = [
    { key: "id", label: "마감ID", width: "80px" },
    { key: "storeName", label: "매장명" },
    { key: "companyName", label: "업체명" },
    { key: "closeDate", label: "마감일", width: "120px" },
    { key: "totalSales", label: "총매출", width: "120px", render: (row) => <span>{Number(row.totalSales).toLocaleString()}원</span> },
    { key: "cardSales", label: "카드매출", width: "120px", render: (row) => <span>{Number(row.cardSales).toLocaleString()}원</span> },
    { key: "cashSales", label: "현금매출", width: "120px", render: (row) => <span>{Number(row.cashSales).toLocaleString()}원</span> },
    { key: "receiptCount", label: "건수", width: "60px" },
    { key: "status", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.status} /> },
    { key: "confirmedBy", label: "확정자", width: "80px" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">일마감 관리</h2>
      <SearchPanel onSearch={handleSearch} onReset={() => { setDate(""); setKeyword(""); setData(dailyCloses); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">마감일</label>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-40" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">매장명/업체명</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-48" />
        </div>
      </SearchPanel>
      <ActionBar>
        <ActionButton label="미확정 일괄 확정" onClick={handleConfirm} />
      </ActionBar>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} />
    </div>
  );
}
