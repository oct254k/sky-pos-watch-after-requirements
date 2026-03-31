"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { FormPanel, FormField } from "@/components/common/FormPanel";
import { ModalPopup } from "@/components/common/ModalPopup";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Input } from "@/components/ui/input";
import { products as mockProducts, Product } from "@/data/mock";

export default function ScrExt003() {
  const [data, setData] = useState<Product[]>(mockProducts);
  const [searchCompany, setSearchCompany] = useState("");
  const [searchName, setSearchName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState<Product | null>(null);
  const [editForm, setEditForm] = useState({ name: "", category: "", price: "", barcode: "" });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns: Column<any>[] = [
    { key: "id", label: "품목코드", width: "100px" },
    { key: "name", label: "품목명" },
    { key: "category", label: "카테고리", width: "100px" },
    { key: "subCategory", label: "세부분류", width: "100px" },
    { key: "price", label: "가격", width: "100px", render: (row) => `${row.price.toLocaleString()}원` },
    { key: "companyName", label: "업체명", width: "120px" },
    { key: "status", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.status} /> },
    { key: "regDate", label: "등록일", width: "110px" },
  ];

  const handleSearch = () => {
    let filtered = [...mockProducts];
    if (searchCompany) filtered = filtered.filter((p) => p.companyName.includes(searchCompany));
    if (searchName) filtered = filtered.filter((p) => p.name.includes(searchName));
    setData(filtered);
  };

  const handleReset = () => {
    setSearchCompany("");
    setSearchName("");
    setData(mockProducts);
  };

  const handleRowClick = (row: Product) => {
    setSelected(row);
    setEditForm({ name: row.name, category: row.category, price: String(row.price), barcode: row.barcode });
    setModalOpen(true);
  };

  const handleNew = () => {
    setSelected(null);
    setEditForm({ name: "", category: "", price: "", barcode: "" });
    setModalOpen(true);
  };

  const handleSave = () => {
    if (!editForm.name || !editForm.price) {
      alert("품목명과 가격을 입력해주세요.");
      return;
    }
    if (selected) {
      setData((prev) =>
        prev.map((p) =>
          p.id === selected.id
            ? { ...p, name: editForm.name, category: editForm.category, price: Number(editForm.price), barcode: editForm.barcode }
            : p
        )
      );
      alert("수정되었습니다.");
    } else {
      const newItem: Product = {
        id: `P${String(data.length + 1).padStart(3, "0")}`,
        name: editForm.name,
        category: editForm.category,
        subCategory: "",
        price: Number(editForm.price),
        companyId: "C001",
        companyName: "스카이푸드",
        status: "미승인",
        barcode: editForm.barcode,
        regDate: new Date().toISOString().slice(0, 10),
      };
      setData((prev) => [...prev, newItem]);
      alert("등록되었습니다.");
    }
    setModalOpen(false);
  };

  const handleDelete = () => {
    if (!selected) return;
    if (confirm(`${selected.name} 품목을 삭제하시겠습니까?`)) {
      setData((prev) => prev.filter((p) => p.id !== selected.id));
      setModalOpen(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">판매품목(가격) 등록</h2>
      <SearchPanel onSearch={handleSearch} onReset={handleReset}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">업체</label>
          <Input value={searchCompany} onChange={(e) => setSearchCompany(e.target.value)} placeholder="업체명" className="w-40" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">품목명</label>
          <Input value={searchName} onChange={(e) => setSearchName(e.target.value)} placeholder="품목명" className="w-40" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} onRowClick={(row) => handleRowClick(row as unknown as Product)} />
      <ActionBar>
        <ActionButton label="신규" onClick={handleNew} />
        <ActionButton label="엑셀" variant="outline" onClick={() => alert("엑셀 다운로드")} />
      </ActionBar>

      <ModalPopup open={modalOpen} onClose={() => setModalOpen(false)} title={selected ? "품목 상세" : "품목 신규등록"}>
        <FormPanel>
          <FormField label="품목명">
            <Input value={editForm.name} onChange={(e) => setEditForm((f) => ({ ...f, name: e.target.value }))} />
          </FormField>
          <FormField label="카테고리">
            <Input value={editForm.category} onChange={(e) => setEditForm((f) => ({ ...f, category: e.target.value }))} />
          </FormField>
          <FormField label="가격">
            <Input type="number" value={editForm.price} onChange={(e) => setEditForm((f) => ({ ...f, price: e.target.value }))} />
          </FormField>
          <FormField label="바코드">
            <Input value={editForm.barcode} onChange={(e) => setEditForm((f) => ({ ...f, barcode: e.target.value }))} />
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
