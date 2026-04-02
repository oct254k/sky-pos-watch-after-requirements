"use client";

import { useRef, useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { FormPanel, FormField } from "@/components/common/FormPanel";
import { ModalPopup } from "@/components/common/ModalPopup";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Input } from "@/components/ui/input";
import { NumberInput } from "@/components/ui/number-input";
import { receipts as mockReceipts } from "@/data/mock";
import { useConfirm } from "@/components/common/ConfirmProvider";
import { toast } from "sonner";
import { AlertTriangle } from "lucide-react";

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
  const confirm = useConfirm();
  const [data, setData] = useState<ManualSale[]>(initialData);
  const [searchStore, setSearchStore] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState<ManualSale | null>(null);
  const [editForm, setEditForm] = useState({ storeName: "", date: "", amount: "", memo: "" });
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<"storeName" | "amount", string>>>({});
  const storeNameRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);

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
    setErrors({});
    setModalOpen(true);
  };

  const handleRowClick = (row: ManualSale) => {
    setSelected(row);
    setEditForm({ storeName: row.storeName, date: row.date, amount: String(row.amount), memo: row.memo });
    setErrors({});
    setModalOpen(true);
  };

  const handleSave = () => {
    if (isSaving) return;
    const nextErrors: Partial<Record<"storeName" | "amount", string>> = {};
    if (!editForm.storeName.trim()) nextErrors.storeName = "매장명을 입력해주세요.";
    if (!editForm.amount.trim()) nextErrors.amount = "금액을 입력해주세요.";
    if (nextErrors.storeName || nextErrors.amount) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setIsSaving(true);
    window.setTimeout(() => {
      if (selected) {
        setData((prev) => prev.map((d) => d.id === selected.id ? { ...d, storeName: editForm.storeName, date: editForm.date, amount: Number(editForm.amount), memo: editForm.memo } : d));
        toast.success("수동매출이 수정되었습니다.");
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
        toast.success("수동매출이 등록되었습니다.");
      }
      setModalOpen(false);
      setIsSaving(false);
    }, 700);
  };

  const inputClassName = (hasError?: string) =>
    `h-11 bg-white text-[14px] focus-visible:ring-[#1d4f91]/20 ${
      hasError
        ? "border-[#ef4444] bg-[#fff5f5] focus-visible:border-[#ef4444] focus-visible:ring-[#ef4444]/15"
        : "border-[#cfd9e5] focus-visible:border-[#1d4f91]"
    }`;

  const handleDelete = async () => {
    if (!selected || isDeleting) return;
    const confirmed = await confirm({
      title: "수동매출 삭제",
      message: `${selected.id} 매출을 삭제하시겠습니까?\n삭제 후에는 되돌릴 수 없습니다.`,
      confirmLabel: "삭제",
      cancelLabel: "취소",
      tone: "danger",
    });
    if (!confirmed) return;
    setIsDeleting(true);
    window.setTimeout(() => {
      setData((prev) => prev.filter((d) => d.id !== selected.id));
      setModalOpen(false);
      toast.success("수동매출이 삭제되었습니다.");
      setIsDeleting(false);
    }, 700);
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
        <ActionButton label="신규 등록" onClick={handleNew} />
        <ActionButton label="엑셀 다운로드" variant="outline" onClick={() => toast.info("엑셀 다운로드를 시작합니다.")} />
      </ActionBar>

      <ModalPopup open={modalOpen} onClose={() => setModalOpen(false)} title={selected ? "수동매출 수정" : "수동매출 등록"} wide>
        <div className="space-y-4">
          <section className="rounded-[14px] border border-[#dbe4ee] bg-white px-4 py-4">
            <div className="mb-3 flex items-start justify-between gap-4">
              <div>
                <div className="text-[13px] font-semibold text-[#0f172a]">기본 요약 정보</div>
              </div>
              <StatusBadge status={selected?.status ?? "미확정"} />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                <div className="text-[11px] font-medium text-[#7b8da1]">코드</div>
                <div className="mt-1 text-sm font-semibold text-[#0f172a]">{selected?.id ?? "신규"}</div>
              </div>
              <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                <div className="text-[11px] font-medium text-[#7b8da1]">상태</div>
                <div className="mt-1 text-sm font-semibold text-[#0f172a]">{selected?.status ?? "미확정"}</div>
              </div>
              <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                <div className="text-[11px] font-medium text-[#7b8da1]">매장명</div>
                <div className="mt-1 text-sm font-semibold text-[#0f172a]">{selected?.storeName || editForm.storeName || "-"}</div>
              </div>
              <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                <div className="text-[11px] font-medium text-[#7b8da1]">매출일자</div>
                <div className="mt-1 text-sm font-semibold text-[#0f172a]">{selected?.date || editForm.date || "-"}</div>
              </div>
            </div>
          </section>

          <section className="rounded-[14px] border border-[#dbe4ee] bg-white px-4 py-4">
            <div className="mb-3">
              <div className="text-[13px] font-semibold text-[#0f172a]">등록/수정 정보</div>
            </div>

            <FormPanel>
              <FormField label="매장명">
                <Input
                  ref={storeNameRef}
                  value={editForm.storeName}
                  onChange={(e) => {
                    const value = e.target.value;
                    setEditForm((f) => ({ ...f, storeName: value }));
                    setErrors((prev) => ({ ...prev, storeName: undefined }));
                  }}
                  className={inputClassName(errors.storeName)}
                />
                {errors.storeName && <p className="text-sm font-medium text-[#dc2626]">{errors.storeName}</p>}
              </FormField>
              <FormField label="날짜">
                <Input type="date" value={editForm.date} onChange={(e) => setEditForm((f) => ({ ...f, date: e.target.value }))} />
              </FormField>
              <FormField label="금액">
                <NumberInput
                  ref={amountRef}
                  comma
                  value={editForm.amount}
                  onValueChange={(value) => {
                    setEditForm((f) => ({ ...f, amount: value }));
                    setErrors((prev) => ({ ...prev, amount: undefined }));
                  }}
                  className={inputClassName(errors.amount)}
                />
                {errors.amount && <p className="text-sm font-medium text-[#dc2626]">{errors.amount}</p>}
              </FormField>
              <FormField label="비고">
                <Input value={editForm.memo} onChange={(e) => setEditForm((f) => ({ ...f, memo: e.target.value }))} />
              </FormField>
            </FormPanel>
          </section>
        </div>
        {(errors.storeName || errors.amount) && (
          <div className="rounded-[14px] border border-[#e5edf5] bg-white px-4 py-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-[#fecaca] bg-[#fef2f2]">
                <AlertTriangle className="h-[18px] w-[18px] text-[#dc2626]" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7b8da1]">입력값 확인 필요</div>
                <p className="mt-2 text-[14px] font-medium leading-6 text-[#334155]">필수 입력 항목을 확인해주세요.</p>
              </div>
            </div>
          </div>
        )}
        <ActionBar>
          <ActionButton
            label="저장"
            onClick={() => {
              handleSave();
              if (!editForm.storeName.trim()) {
                storeNameRef.current?.focus();
              } else if (!editForm.amount.trim()) {
                amountRef.current?.focus();
              }
            }}
            loading={isSaving}
          />
          {selected && <ActionButton label="삭제" variant="destructive" onClick={handleDelete} loading={isDeleting} disabled={isSaving} />}
          <ActionButton label="닫기" variant="outline" onClick={() => setModalOpen(false)} disabled={isSaving || isDeleting} />
        </ActionBar>
      </ModalPopup>
    </div>
  );
}
