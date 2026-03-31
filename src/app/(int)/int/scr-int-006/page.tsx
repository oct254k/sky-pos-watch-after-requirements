"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { StatusBadge } from "@/components/common/StatusBadge";
import { ModalPopup } from "@/components/common/ModalPopup";
import { FormPanel, FormField } from "@/components/common/FormPanel";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { contracts, Contract } from "@/data/mock";

const empty: Contract = { id: "", companyId: "", companyName: "", storeId: "", storeName: "", type: "일반임대", startDate: "", endDate: "", status: "계약중", monthlyRent: 0, variableRate: 0, deposit: 0 };

export default function ScrInt006() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(contracts);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Contract>(empty);
  const [isNew, setIsNew] = useState(false);

  const handleSearch = () => {
    setData(contracts.filter((c) => c.companyName.includes(keyword) || c.storeName.includes(keyword)));
  };

  const openNew = () => { setEditing({ ...empty, id: `CT${String(data.length + 1).padStart(3, "0")}` }); setIsNew(true); setModalOpen(true); };
  const openEdit = (row: Contract) => { setEditing({ ...row }); setIsNew(false); setModalOpen(true); };

  const handleSave = () => {
    if (isNew) setData((prev) => [...prev, editing]);
    else setData((prev) => prev.map((c) => (c.id === editing.id ? editing : c)));
    setModalOpen(false);
  };

  const handleDelete = () => {
    if (confirm("삭제하시겠습니까?")) {
      setData((prev) => prev.filter((c) => c.id !== editing.id));
      setModalOpen(false);
    }
  };

  const columns: Column<Contract>[] = [
    { key: "id", label: "계약ID", width: "80px" },
    { key: "companyName", label: "업체명" },
    { key: "storeName", label: "매장명" },
    { key: "type", label: "계약유형", width: "100px" },
    { key: "startDate", label: "시작일", width: "120px" },
    { key: "endDate", label: "종료일", width: "120px" },
    { key: "status", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.status} /> },
    { key: "monthlyRent", label: "월임대료", width: "120px", render: (row) => <span>{Number(row.monthlyRent).toLocaleString()}원</span> },
    { key: "variableRate", label: "요율(%)", width: "100px" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">계약정보 관리</h2>
      <SearchPanel onSearch={handleSearch} onReset={() => { setKeyword(""); setData(contracts); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">업체명/매장명</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <ActionBar><ActionButton label="신규 등록" onClick={openNew} /></ActionBar>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} onRowClick={(row) => openEdit(row as unknown as Contract)} />
      <ModalPopup open={modalOpen} onClose={() => setModalOpen(false)} title={isNew ? "계약 등록" : "계약 수정"} wide>
        <FormPanel>
          <FormField label="계약ID"><Input value={editing.id} readOnly /></FormField>
          <FormField label="업체명"><Input value={editing.companyName} onChange={(e) => setEditing({ ...editing, companyName: e.target.value })} /></FormField>
          <FormField label="매장명"><Input value={editing.storeName} onChange={(e) => setEditing({ ...editing, storeName: e.target.value })} /></FormField>
          <FormField label="계약유형"><Input value={editing.type} onChange={(e) => setEditing({ ...editing, type: e.target.value })} /></FormField>
          <FormField label="시작일"><Input type="date" value={editing.startDate} onChange={(e) => setEditing({ ...editing, startDate: e.target.value })} /></FormField>
          <FormField label="종료일"><Input type="date" value={editing.endDate} onChange={(e) => setEditing({ ...editing, endDate: e.target.value })} /></FormField>
          <FormField label="월임대료"><Input type="number" value={editing.monthlyRent} onChange={(e) => setEditing({ ...editing, monthlyRent: Number(e.target.value) })} /></FormField>
          <FormField label="변동요율(%)"><Input type="number" value={editing.variableRate} onChange={(e) => setEditing({ ...editing, variableRate: Number(e.target.value) })} /></FormField>
          <FormField label="보증금"><Input type="number" value={editing.deposit} onChange={(e) => setEditing({ ...editing, deposit: Number(e.target.value) })} /></FormField>
        </FormPanel>
        <div className="mt-4 flex justify-end gap-2">
          <Button size="sm" onClick={handleSave}>{isNew ? "등록" : "저장"}</Button>
          {!isNew && <Button size="sm" variant="destructive" onClick={handleDelete}>삭제</Button>}
          <Button size="sm" variant="outline" onClick={() => setModalOpen(false)}>취소</Button>
        </div>
      </ModalPopup>
    </div>
  );
}
