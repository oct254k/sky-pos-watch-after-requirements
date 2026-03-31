"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { ModalPopup } from "@/components/common/ModalPopup";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Input } from "@/components/ui/input";
import { receipts as mockReceipts, Receipt } from "@/data/mock";

export default function ScrExt006() {
  const [data, setData] = useState<Receipt[]>(mockReceipts);
  const [startDate, setStartDate] = useState("2025-01-01");
  const [endDate, setEndDate] = useState("2025-01-31");
  const [storeName, setStoreName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState<Receipt | null>(null);

  const columns: Column<Receipt>[] = [
    { key: "id", label: "영수증번호", width: "110px" },
    { key: "storeName", label: "매장", width: "120px" },
    { key: "companyName", label: "업체명", width: "120px" },
    { key: "date", label: "날짜", width: "110px" },
    { key: "time", label: "시간", width: "80px" },
    { key: "totalAmount", label: "합계", width: "120px", render: (row) => `${row.totalAmount.toLocaleString()}원` },
    { key: "paymentMethod", label: "결제수단", width: "90px" },
    { key: "status", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.status} /> },
  ];

  const handleSearch = () => {
    let filtered = [...mockReceipts];
    if (startDate) filtered = filtered.filter((r) => r.date >= startDate);
    if (endDate) filtered = filtered.filter((r) => r.date <= endDate);
    if (storeName) filtered = filtered.filter((r) => r.storeName.includes(storeName));
    setData(filtered);
  };

  const handleReset = () => {
    setStartDate("2025-01-01");
    setEndDate("2025-01-31");
    setStoreName("");
    setData(mockReceipts);
  };

  const handleRowClick = (row: Receipt) => {
    setSelected(row);
    setModalOpen(true);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">영수증 조회</h2>
      <SearchPanel onSearch={handleSearch} onReset={handleReset}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">시작일</label>
          <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-40" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">종료일</label>
          <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-40" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">매장</label>
          <Input value={storeName} onChange={(e) => setStoreName(e.target.value)} placeholder="매장명" className="w-40" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} onRowClick={(row) => handleRowClick(row as unknown as Receipt)} />
      <ActionBar>
        <ActionButton label="엑셀" variant="outline" onClick={() => alert("엑셀 다운로드")} />
      </ActionBar>

      <ModalPopup open={modalOpen} onClose={() => setModalOpen(false)} title="영수증 상세" wide>
        {selected && (
          <div className="space-y-3 text-sm">
            <div className="grid grid-cols-2 gap-2">
              <div><span className="text-muted-foreground">영수증번호:</span> {selected.id}</div>
              <div><span className="text-muted-foreground">매장:</span> {selected.storeName}</div>
              <div><span className="text-muted-foreground">일시:</span> {selected.date} {selected.time}</div>
              <div><span className="text-muted-foreground">결제수단:</span> {selected.paymentMethod}</div>
              <div><span className="text-muted-foreground">VAN TID:</span> {selected.vanTid}</div>
              <div><span className="text-muted-foreground">상태:</span> <StatusBadge status={selected.status} /></div>
            </div>
            <div className="rounded border p-2">
              <p className="mb-1 font-medium">품목 내역</p>
              {selected.items.map((item, i) => (
                <div key={i} className="flex justify-between">
                  <span>{item.name} x {item.qty}</span>
                  <span>{(item.price * item.qty).toLocaleString()}원</span>
                </div>
              ))}
              <div className="mt-1 border-t pt-1 font-medium flex justify-between">
                <span>합계</span>
                <span>{selected.totalAmount.toLocaleString()}원</span>
              </div>
            </div>
          </div>
        )}
      </ModalPopup>
    </div>
  );
}
