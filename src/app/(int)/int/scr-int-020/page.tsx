"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { ModalPopup } from "@/components/common/ModalPopup";
import { Input } from "@/components/ui/input";
import { receipts, Receipt } from "@/data/mock";

export default function ScrInt020() {
  const [keyword, setKeyword] = useState("");
  const [date, setDate] = useState("");
  const [data, setData] = useState(receipts);
  const [selected, setSelected] = useState<Receipt | null>(null);

  const handleSearch = () => {
    setData(receipts.filter((r) => {
      const matchKw = !keyword || r.storeName.includes(keyword) || r.companyName.includes(keyword);
      const matchDate = !date || r.date === date;
      return matchKw && matchDate;
    }));
  };

  const columns: Column<Receipt>[] = [
    { key: "id", label: "영수증ID", width: "80px" },
    { key: "storeName", label: "매장명" },
    { key: "companyName", label: "업체명" },
    { key: "date", label: "일자", width: "120px" },
    { key: "time", label: "시간", width: "70px" },
    { key: "totalAmount", label: "합계금액", width: "120px", render: (row) => <span>{Number(row.totalAmount).toLocaleString()}원</span> },
    { key: "paymentMethod", label: "결제수단", width: "80px" },
    { key: "status", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.status} /> },
    { key: "vanTid", label: "VAN TID", width: "110px" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">영수증 관리</h2>
      <SearchPanel onSearch={handleSearch} onReset={() => { setKeyword(""); setDate(""); setData(receipts); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">매장명/업체명</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-48" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">일자</label>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-40" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} onRowClick={(row) => setSelected(row as unknown as Receipt)} />
      <ModalPopup open={!!selected} onClose={() => setSelected(null)} title="영수증 상세" wide>
        {selected && (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div><span className="text-muted-foreground">영수증ID:</span> {selected.id}</div>
              <div><span className="text-muted-foreground">매장:</span> {selected.storeName}</div>
              <div><span className="text-muted-foreground">일시:</span> {selected.date} {selected.time}</div>
              <div><span className="text-muted-foreground">결제수단:</span> {selected.paymentMethod}</div>
              <div><span className="text-muted-foreground">VAN TID:</span> {selected.vanTid}</div>
              <div><span className="text-muted-foreground">상태:</span> {selected.status}</div>
            </div>
            <div className="rounded border">
              <table className="w-full text-sm">
                <thead><tr className="border-b bg-muted/50"><th className="px-3 py-2 text-left">품목</th><th className="px-3 py-2 text-right">수량</th><th className="px-3 py-2 text-right">단가</th><th className="px-3 py-2 text-right">금액</th></tr></thead>
                <tbody>
                  {selected.items.map((item, i) => (
                    <tr key={i} className="border-b"><td className="px-3 py-2">{item.name}</td><td className="px-3 py-2 text-right">{item.qty}</td><td className="px-3 py-2 text-right">{item.price.toLocaleString()}</td><td className="px-3 py-2 text-right">{(item.qty * item.price).toLocaleString()}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-right text-lg font-bold">합계: {selected.totalAmount.toLocaleString()}원</div>
          </div>
        )}
      </ModalPopup>
    </div>
  );
}
