"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Input } from "@/components/ui/input";
import { vanPayments, VanPayment } from "@/data/mock";

export default function ScrInt025() {
  const [date, setDate] = useState("");
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(vanPayments);

  const handleSearch = () => {
    setData(vanPayments.filter((v) => {
      const matchDate = !date || v.transDate === date;
      const matchKw = !keyword || v.storeName.includes(keyword) || v.vanCompany.includes(keyword) || v.cardCompany.includes(keyword);
      return matchDate && matchKw;
    }));
  };

  const columns: Column<VanPayment>[] = [
    { key: "id", label: "ID", width: "80px" },
    { key: "vanCompany", label: "VAN사", width: "110px" },
    { key: "tid", label: "TID", width: "100px" },
    { key: "storeName", label: "매장명" },
    { key: "amount", label: "금액", width: "120px", render: (row) => <span>{Number(row.amount).toLocaleString()}원</span> },
    { key: "cardCompany", label: "카드사", width: "90px" },
    { key: "approvalNo", label: "승인번호", width: "110px" },
    { key: "transDate", label: "거래일", width: "120px" },
    { key: "transTime", label: "시간", width: "60px" },
    { key: "status", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.status} /> },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">VAN결제 수신 조회</h2>
      <SearchPanel onSearch={handleSearch} onReset={() => { setDate(""); setKeyword(""); setData(vanPayments); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">거래일</label>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-40" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">매장명/VAN사/카드사</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-48" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} />
    </div>
  );
}
