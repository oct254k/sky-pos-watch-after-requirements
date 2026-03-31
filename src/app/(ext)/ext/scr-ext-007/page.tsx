"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { FormPanel, FormField } from "@/components/common/FormPanel";
import { ModalPopup } from "@/components/common/ModalPopup";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Input } from "@/components/ui/input";
import { receipts as mockReceipts } from "@/data/mock";

interface ManualSale {
  id: string;
  storeName: string;
  date: string;
  amount: number;
  memo: string;
  status: string;
}

const initialData: ManualSale[] = mockReceipts.slice(0, 5).map((r, i) => ({
  id: `MS${String(i + 1).padStart(3, "0")}`,
  storeName: r.storeName,
  date: r.date,
  amount: r.totalAmount,
  memo: "수동 등록 매출",
  status: i < 3 ? "확정" : "미확정",
}));

export default function ScrExt007() {
  const [data, setData] = useState<ManualSale[]>(initialData);
  const [searchStore, setSearchStore] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState<ManualSale | null>(null);
  const [editForm, setEditForm] = useState({ storeName: "", date: "", amount: "", memo: "" });

  const columns: Column<ManualSale>[] = [
    { key: "id", label: "코드", width: "90px" },
    { key: "storeName", label: "매장", width: "130px" },
    { key: "date", label: "날짜", width: "110px" },
    { key: "amount", label: "금액", width: "120px", render: (row) => `${row.amount.toLocaleString()}원` },
    { key: "memo", label: "비고" },
    { key: "status", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.status} /> },
  ];

  const handleSearch = () => {
    let filtered = [...initialData];
    if (searchStore) filtered = filtered.filter((d) => d.storeName.includes(searchStore));
    setData(filtered);
  };

  const handleNew = () => {
    setSelected(null);
    setEditForm({ storeName: "", date: "", amount: "", memo: "" });
    setModalOpen(true);
  };

  const handleRowClick = (row: ManualSale) => {
    setSelected(row);
    setEditForm({ storeName: row.storeName, date: row.date, amount: String(row.amount), memo: row.memo });
    setModalOpen(true);
  };

  const handleSave = () => {
    if (!editForm.storeName || !editForm.amount) {
      alert("매장명과 금액을 입력해주세요.");
      return;
    }
    if (selected) {
      setData((prev) => prev.map((d) => d.id === selected.id ? { ...d, storeName: editForm.storeName, date: editForm.date, amount: Number(editForm.amount), memo: editForm.memo } : d));
      alert("수정되었습니다.");
    } else {
      const newItem: ManualSale = {
        id: `MS${String(data.length + 1).padStart(3, "0")}`,
        storeName: editForm.storeName,
        date: editForm.date || new Date().toISOString().slice(0, 10),
        amount: Number(editForm.amount),
        memo: editForm.memo,
        status: "미확정",
      };
      setData((prev) => [...prev, newItem]);
      alert("등록되었습니다.");
    }
    setModalOpen(false);
  };

  const handleDelete = () => {
    if (!selected) return;
    if (confirm(`${selected.id} 매출을 삭제하시겠습니까?`)) {
      setData((prev) => prev.filter((d) => d.id !== selected.id));
      setModalOpen(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">수동매출 관리</h2>
      <SearchPanel onSearch={handleSearch} onReset={() => { setSearchStore(""); setData(initialData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">매장</label>
          <Input value={searchStore} onChange={(e) => setSearchStore(e.target.value)} placeholder="매장명" className="w-40" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} onRowClick={(row) => handleRowClick(row as unknown as ManualSale)} />
      <ActionBar>
        <ActionButton label="신규등록" onClick={handleNew} />
        <ActionButton label="엑셀" variant="outline" onClick={() => alert("엑셀 다운로드")} />
      </ActionBar>

      <ModalPopup open={modalOpen} onClose={() => setModalOpen(false)} title={selected ? "수동매출 수정" : "수동매출 등록"}>
        <FormPanel>
          <FormField label="매장명">
            <Input value={editForm.storeName} onChange={(e) => setEditForm((f) => ({ ...f, storeName: e.target.value }))} />
          </FormField>
          <FormField label="날짜">
            <Input type="date" value={editForm.date} onChange={(e) => setEditForm((f) => ({ ...f, date: e.target.value }))} />
          </FormField>
          <FormField label="금액">
            <Input type="number" value={editForm.amount} onChange={(e) => setEditForm((f) => ({ ...f, amount: e.target.value }))} />
          </FormField>
          <FormField label="비고">
            <Input value={editForm.memo} onChange={(e) => setEditForm((f) => ({ ...f, memo: e.target.value }))} />
          </FormField>
        </FormPanel>
        <ActionBar>
          <ActionButton label="저장" onClick={handleSave} />
          {selected && <ActionButton label="삭제" variant="destructive" onClick={handleDelete} />}
          <ActionButton label="닫기" variant="outline" onClick={() => setModalOpen(false)} />
        </ActionBar>
      </ModalPopup>
    </div>
  );
}
