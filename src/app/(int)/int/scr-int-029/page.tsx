"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { ModalPopup } from "@/components/common/ModalPopup";
import { FormPanel, FormField } from "@/components/common/FormPanel";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface AdjustRow { id: string; yearMonth: string; companyName: string; storeName: string; originalRent: number; adjustedRent: number; adjustReason: string; adjustDate: string; status: string; }

const initData: AdjustRow[] = [
  { id: "ADJ001", yearMonth: "2025-01", companyName: "듀티프리마트", storeName: "3층 C-301", originalRent: 90000000, adjustedRent: 85000000, adjustReason: "여객 감소 반영", adjustDate: "2025-02-01", status: "조정완료" },
  { id: "ADJ002", yearMonth: "2025-01", companyName: "에어라운지", storeName: "2층 B-201", originalRent: 15840000, adjustedRent: 15840000, adjustReason: "", adjustDate: "", status: "조정전" },
  { id: "ADJ003", yearMonth: "2024-12", companyName: "스카이푸드", storeName: "1층 A-101", originalRent: 7200000, adjustedRent: 6800000, adjustReason: "시설보수 기간 감면", adjustDate: "2025-01-03", status: "조정완료" },
];

export default function ScrInt029() {
  const [yearMonth, setYearMonth] = useState("");
  const [data, setData] = useState(initData);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<AdjustRow | null>(null);

  const handleSearch = () => setData(initData.filter((d) => !yearMonth || d.yearMonth === yearMonth));

  const openAdjust = (row: AdjustRow) => { setEditing({ ...row }); setModalOpen(true); };

  const handleSave = () => {
    if (!editing) return;
    setData((prev) => prev.map((d) => d.id === editing.id ? { ...editing, status: "조정완료", adjustDate: new Date().toISOString().slice(0, 10) } : d));
    setModalOpen(false);
  };

  const columns: Column<AdjustRow>[] = [
    { key: "id", label: "조정ID", width: "80px" },
    { key: "yearMonth", label: "년월", width: "80px" },
    { key: "companyName", label: "업체명" },
    { key: "storeName", label: "매장명" },
    { key: "originalRent", label: "산정임대료", width: "130px", render: (row) => <span>{Number(row.originalRent).toLocaleString()}원</span> },
    { key: "adjustedRent", label: "조정임대료", width: "130px", render: (row) => <span className="font-medium">{Number(row.adjustedRent).toLocaleString()}원</span> },
    { key: "adjustReason", label: "조정사유" },
    { key: "status", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.status === "조정완료" ? "산정완료" : "조정중"} /> },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">월 변동임대료 조정</h2>
      <SearchPanel onSearch={handleSearch} onReset={() => { setYearMonth(""); setData(initData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">년월</label>
          <Input type="month" value={yearMonth} onChange={(e) => setYearMonth(e.target.value)} className="w-40" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} onRowClick={(row) => openAdjust(row as unknown as AdjustRow)} />
      <ModalPopup open={modalOpen} onClose={() => setModalOpen(false)} title="임대료 조정" wide>
        {editing && (
          <>
            <FormPanel>
              <FormField label="업체명"><Input value={editing.companyName} readOnly /></FormField>
              <FormField label="매장명"><Input value={editing.storeName} readOnly /></FormField>
              <FormField label="산정임대료"><Input value={editing.originalRent.toLocaleString()} readOnly /></FormField>
              <FormField label="조정임대료"><Input type="number" value={editing.adjustedRent} onChange={(e) => setEditing({ ...editing, adjustedRent: Number(e.target.value) })} /></FormField>
              <FormField label="조정사유"><Input value={editing.adjustReason} onChange={(e) => setEditing({ ...editing, adjustReason: e.target.value })} /></FormField>
            </FormPanel>
            <div className="mt-4 flex justify-end gap-2">
              <Button size="sm" onClick={handleSave}>저장</Button>
              <Button size="sm" variant="outline" onClick={() => setModalOpen(false)}>취소</Button>
            </div>
          </>
        )}
      </ModalPopup>
    </div>
  );
}
