"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { StatusBadge } from "@/components/common/StatusBadge";
import { ModalPopup } from "@/components/common/ModalPopup";
import { FormPanel, FormField } from "@/components/common/FormPanel";
import { Input } from "@/components/ui/input";
import { NumberInput } from "@/components/ui/number-input";
import { Button } from "@/components/ui/button";
import { contracts, Contract } from "@/data/mock";
import { useConfirm } from "@/components/common/ConfirmProvider";
import { toast } from "sonner";

const empty: Contract = { id: "", companyId: "", companyName: "", storeId: "", storeName: "", type: "일반임대", startDate: "", endDate: "", status: "계약중", monthlyRent: 0, variableRate: 0, deposit: 0 };

export default function ScrInt006() {
  const confirm = useConfirm();
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(contracts);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Contract>(empty);
  const [isNew, setIsNew] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleSearch = () => {
    setData(contracts.filter((c) => c.companyName.includes(keyword) || c.storeName.includes(keyword)));
  };

  const handleReset = () => {
    setKeyword("");
    setData(contracts);
  };

  const openNew = () => { setEditing({ ...empty, id: `CT${String(data.length + 1).padStart(3, "0")}` }); setIsNew(true); setModalOpen(true); };
  const openEdit = (row: Contract) => { setEditing({ ...row }); setIsNew(false); setModalOpen(true); };

  const handleSave = () => {
    if (isSaving) return;
    setIsSaving(true);
    if (isNew) {
      setTimeout(() => {
        setData((prev) => [...prev, editing]);
        toast.success("계약이 등록되었습니다.");
        setIsSaving(false);
        setModalOpen(false);
      }, 500);
      return;
    } else {
      setTimeout(() => {
        setData((prev) => prev.map((c) => (c.id === editing.id ? editing : c)));
        toast.success("계약 정보가 저장되었습니다.");
        setIsSaving(false);
        setModalOpen(false);
      }, 500);
      return;
    }
  };

  const handleDelete = async () => {
    if (isDeleting) return;
    const confirmed = await confirm({
      title: "계약 삭제",
      message: "선택한 계약 정보를 삭제하시겠습니까?\n삭제 후에는 되돌릴 수 없습니다.",
      confirmLabel: "삭제",
      cancelLabel: "취소",
      tone: "danger",
    });
    if (!confirmed) return;
    setIsDeleting(true);
    setTimeout(() => {
      setData((prev) => prev.filter((c) => c.id !== editing.id));
      setModalOpen(false);
      toast.success("계약 정보가 삭제되었습니다.");
      setIsDeleting(false);
    }, 500);
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
      <SearchPanel onSearch={handleSearch} onReset={handleReset}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">업체명/매장명</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <ActionBar><ActionButton label="신규 등록" onClick={openNew} /></ActionBar>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} onRowClick={(row) => openEdit(row as unknown as Contract)} />
      <ModalPopup open={modalOpen} onClose={() => setModalOpen(false)} title={isNew ? "계약 등록" : "계약 수정"} wide>
        <div className="space-y-4">
          <section className="rounded-[14px] border border-[#dbe4ee] bg-white px-4 py-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[13px] font-semibold text-[#0f172a]">기본 요약 정보</div>
              </div>
              <StatusBadge status={editing.status} />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                <div className="text-[11px] font-medium text-[#7b8da1]">계약ID</div>
                <div className="mt-1 text-sm font-semibold text-[#0f172a]">{editing.id || "-"}</div>
              </div>
              <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                <div className="text-[11px] font-medium text-[#7b8da1]">업체 / 매장</div>
                <div className="mt-1 text-sm font-semibold text-[#0f172a]">
                  {editing.companyName || "-"} / {editing.storeName || "-"}
                </div>
              </div>
              <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                <div className="text-[11px] font-medium text-[#7b8da1]">계약기간</div>
                <div className="mt-1 text-sm font-semibold text-[#0f172a]">
                  {editing.startDate || "-"} ~ {editing.endDate || "-"}
                </div>
              </div>
              <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                <div className="text-[11px] font-medium text-[#7b8da1]">월임대료</div>
                <div className="mt-1 text-sm font-semibold text-[#0f172a]">
                  {Number(editing.monthlyRent || 0).toLocaleString()}원
                </div>
              </div>
            </div>
          </section>

          <FormPanel title="계약 기본 정보">
            <FormField label="계약ID"><Input value={editing.id} readOnly /></FormField>
            <FormField label="업체명"><Input value={editing.companyName} onChange={(e) => setEditing({ ...editing, companyName: e.target.value })} /></FormField>
            <FormField label="매장명"><Input value={editing.storeName} onChange={(e) => setEditing({ ...editing, storeName: e.target.value })} /></FormField>
            <FormField label="계약유형"><Input value={editing.type} onChange={(e) => setEditing({ ...editing, type: e.target.value })} /></FormField>
            <FormField label="상태"><Input value={editing.status} readOnly /></FormField>
          </FormPanel>

          <FormPanel title="계약 기간">
            <FormField label="시작일"><Input type="date" value={editing.startDate} onChange={(e) => setEditing({ ...editing, startDate: e.target.value })} /></FormField>
            <FormField label="종료일"><Input type="date" value={editing.endDate} onChange={(e) => setEditing({ ...editing, endDate: e.target.value })} /></FormField>
          </FormPanel>

          <FormPanel title="임대 조건">
            <FormField label="월임대료"><NumberInput comma value={editing.monthlyRent} onValueChange={(value) => setEditing({ ...editing, monthlyRent: Number(value || 0) })} /></FormField>
            <FormField label="변동요율(%)"><NumberInput value={editing.variableRate} onValueChange={(value) => setEditing({ ...editing, variableRate: Number(value || 0) })} /></FormField>
            <FormField label="보증금"><NumberInput comma value={editing.deposit} onValueChange={(value) => setEditing({ ...editing, deposit: Number(value || 0) })} /></FormField>
          </FormPanel>
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <ActionButton label={isNew ? "등록" : "저장"} onClick={handleSave} loading={isSaving} disabled={isDeleting} />
          {!isNew && <ActionButton label="삭제" variant="destructive" onClick={handleDelete} loading={isDeleting} disabled={isSaving} />}
          <Button size="sm" variant="outline" onClick={() => setModalOpen(false)} disabled={isSaving || isDeleting}>닫기</Button>
        </div>
      </ModalPopup>
    </div>
  );
}
