"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { ModalPopup } from "@/components/common/ModalPopup";
import { FormPanel, FormField } from "@/components/common/FormPanel";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Brand { id: string; name: string; nameEn: string; companyName: string; category: string; regDate: string; status: string; }

const initData: Brand[] = [
  { id: "BR001", name: "스카이델리", nameEn: "Sky Deli", companyName: "스카이푸드", category: "F&B", regDate: "2024-01-15", status: "사용" },
  { id: "BR002", name: "에어비스트로", nameEn: "Air Bistro", companyName: "에어라운지", category: "라운지", regDate: "2024-03-01", status: "사용" },
  { id: "BR003", name: "SKY면세", nameEn: "SKY Duty Free", companyName: "듀티프리마트", category: "면세", regDate: "2023-06-20", status: "사용" },
  { id: "BR004", name: "클라우드빈", nameEn: "Cloud Bean", companyName: "클라우드카페", category: "카페", regDate: "2024-07-10", status: "사용" },
  { id: "BR005", name: "하늘마트", nameEn: "Sky Mart", companyName: "하늘편의점", category: "편의점", regDate: "2023-11-05", status: "미사용" },
];

const empty: Brand = { id: "", name: "", nameEn: "", companyName: "", category: "", regDate: "", status: "사용" };

export default function ScrInt011() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(initData);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Brand>(empty);
  const [isNew, setIsNew] = useState(false);

  const handleSearch = () => setData(initData.filter((b) => b.name.includes(keyword) || b.companyName.includes(keyword)));
  const openNew = () => { setEditing({ ...empty, id: `BR${String(data.length + 1).padStart(3, "0")}`, regDate: new Date().toISOString().slice(0, 10) }); setIsNew(true); setModalOpen(true); };
  const openEdit = (row: Brand) => { setEditing({ ...row }); setIsNew(false); setModalOpen(true); };
  const handleSave = () => { if (isNew) setData((p) => [...p, editing]); else setData((p) => p.map((b) => b.id === editing.id ? editing : b)); setModalOpen(false); };
  const handleDelete = () => { if (confirm("삭제하시겠습니까?")) { setData((p) => p.filter((b) => b.id !== editing.id)); setModalOpen(false); } };

  const columns: Column<Brand>[] = [
    { key: "id", label: "브랜드ID", width: "80px" },
    { key: "name", label: "브랜드명" },
    { key: "nameEn", label: "영문명" },
    { key: "companyName", label: "업체명" },
    { key: "category", label: "업종", width: "80px" },
    { key: "regDate", label: "등록일", width: "120px" },
    { key: "status", label: "상태", width: "100px" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">브랜드 관리</h2>
      <SearchPanel onSearch={handleSearch} onReset={() => { setKeyword(""); setData(initData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">브랜드명/업체명</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <ActionBar><ActionButton label="신규 등록" onClick={openNew} /></ActionBar>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} onRowClick={(row) => openEdit(row as unknown as Brand)} />
      <ModalPopup open={modalOpen} onClose={() => setModalOpen(false)} title={isNew ? "브랜드 등록" : "브랜드 수정"}>
        <FormPanel>
          <FormField label="브랜드ID"><Input value={editing.id} readOnly /></FormField>
          <FormField label="브랜드명"><Input value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} /></FormField>
          <FormField label="영문명"><Input value={editing.nameEn} onChange={(e) => setEditing({ ...editing, nameEn: e.target.value })} /></FormField>
          <FormField label="업체명"><Input value={editing.companyName} onChange={(e) => setEditing({ ...editing, companyName: e.target.value })} /></FormField>
          <FormField label="업종"><Input value={editing.category} onChange={(e) => setEditing({ ...editing, category: e.target.value })} /></FormField>
          <FormField label="상태"><Input value={editing.status} onChange={(e) => setEditing({ ...editing, status: e.target.value })} /></FormField>
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
