"use client";

import { useRef, useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { ModalPopup } from "@/components/common/ModalPopup";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Input } from "@/components/ui/input";
import { NumberInput } from "@/components/ui/number-input";
import { products as mockProducts, Product } from "@/data/mock";
import { useConfirm } from "@/components/common/ConfirmProvider";
import { toast } from "sonner";
import { AlertTriangle } from "lucide-react";

export default function ScrExt003() {
  const confirm = useConfirm();
  const [data, setData] = useState<Product[]>(mockProducts);
  const [searchCompany, setSearchCompany] = useState("");
  const [searchName, setSearchName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState<Product | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<"name" | "price", string>>>({});
  const [editForm, setEditForm] = useState({
    id: "",
    companyName: "",
    status: "미승인",
    regDate: "",
    name: "",
    category: "",
    subCategory: "",
    price: "",
    barcode: "",
  });
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

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
    setEditForm({
      id: row.id,
      companyName: row.companyName,
      status: row.status,
      regDate: row.regDate,
      name: row.name,
      category: row.category,
      subCategory: row.subCategory,
      price: String(row.price),
      barcode: row.barcode,
    });
    setErrors({});
    setModalOpen(true);
  };

  const handleNew = () => {
    setSelected(null);
    setEditForm({
      id: `P${String(data.length + 1).padStart(3, "0")}`,
      companyName: "스카이푸드",
      status: "미승인",
      regDate: new Date().toISOString().slice(0, 10),
      name: "",
      category: "",
      subCategory: "",
      price: "",
      barcode: "",
    });
    setErrors({});
    setModalOpen(true);
  };

  const handleSave = () => {
    if (isSaving) return;
    const nextErrors: Partial<Record<"name" | "price", string>> = {};
    if (!editForm.name.trim()) nextErrors.name = "품목명을 입력해주세요.";
    if (!editForm.price.trim()) nextErrors.price = "가격을 입력해주세요.";
    if (nextErrors.name || nextErrors.price) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setIsSaving(true);
    window.setTimeout(() => {
      if (selected) {
        setData((prev) =>
          prev.map((p) =>
            p.id === selected.id
              ? {
                  ...p,
                  name: editForm.name,
                  category: editForm.category,
                  subCategory: editForm.subCategory,
                  price: Number(editForm.price),
                  barcode: editForm.barcode,
                }
              : p
          )
        );
        toast.success("품목 정보가 수정되었습니다.");
      } else {
        const newItem: Product = {
          id: editForm.id,
          name: editForm.name,
          category: editForm.category,
          subCategory: editForm.subCategory,
          price: Number(editForm.price),
          companyId: "C001",
          companyName: editForm.companyName,
          status: editForm.status,
          barcode: editForm.barcode,
          regDate: editForm.regDate,
        };
        setData((prev) => [...prev, newItem]);
        toast.success("품목이 등록되었습니다.");
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
      title: "품목 삭제",
      message: `${selected.name} 품목을 삭제하시겠습니까?\n삭제 후에는 되돌릴 수 없습니다.`,
      confirmLabel: "삭제",
      cancelLabel: "취소",
      tone: "danger",
    });
    if (!confirmed) return;
    setIsDeleting(true);
    window.setTimeout(() => {
      setData((prev) => prev.filter((p) => p.id !== selected.id));
      setModalOpen(false);
      toast.success("품목이 삭제되었습니다.");
      setIsDeleting(false);
    }, 700);
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
        <ActionButton label="신규 등록" onClick={handleNew} />
        <ActionButton label="엑셀 다운로드" variant="outline" onClick={() => toast.info("엑셀 다운로드를 시작합니다.")} />
      </ActionBar>

      <ModalPopup open={modalOpen} onClose={() => setModalOpen(false)} title={selected ? "품목 상세 및 수정" : "품목 신규 등록"} wide>
        <div className="space-y-4">
          <section className="rounded-[14px] border border-[#dbe4ee] bg-white px-4 py-4">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <div className="text-[13px] font-semibold text-[#0f172a]">기본 요약 정보</div>
              </div>
              <StatusBadge status={editForm.status} />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                <div className="text-[11px] font-medium text-[#7b8da1]">품목코드</div>
                <div className="mt-1 text-sm font-semibold text-[#0f172a]">{editForm.id || "-"}</div>
              </div>
              <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                <div className="text-[11px] font-medium text-[#7b8da1]">업체명</div>
                <div className="mt-1 text-sm font-semibold text-[#0f172a]">{editForm.companyName || "-"}</div>
              </div>
              <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                <div className="text-[11px] font-medium text-[#7b8da1]">등록일</div>
                <div className="mt-1 text-sm font-semibold text-[#0f172a]">{editForm.regDate || "-"}</div>
              </div>
              <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                <div className="text-[11px] font-medium text-[#7b8da1]">상태</div>
                <div className="mt-1 text-sm font-semibold text-[#0f172a]">{editForm.status || "-"}</div>
              </div>
            </div>
          </section>

          <section className="rounded-[14px] border border-[#dbe4ee] bg-white px-4 py-4">
            <div className="mb-3">
              <div className="text-[13px] font-semibold text-[#0f172a]">품목 정보</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#64748b]">품목명</label>
                <Input
                  ref={nameRef}
                  value={editForm.name}
                  onChange={(e) => {
                    const value = e.target.value;
                    setEditForm((f) => ({ ...f, name: value }));
                    setErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  className={inputClassName(errors.name)}
                />
                {errors.name && <p className="text-sm font-medium text-[#dc2626]">{errors.name}</p>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#64748b]">카테고리</label>
                <Input value={editForm.category} onChange={(e) => setEditForm((f) => ({ ...f, category: e.target.value }))} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#64748b]">세부분류</label>
                <Input value={editForm.subCategory} onChange={(e) => setEditForm((f) => ({ ...f, subCategory: e.target.value }))} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#64748b]">가격</label>
                <NumberInput
                  ref={priceRef}
                  comma
                  value={editForm.price}
                  onValueChange={(value) => {
                    setEditForm((f) => ({ ...f, price: value }));
                    setErrors((prev) => ({ ...prev, price: undefined }));
                  }}
                  className={inputClassName(errors.price)}
                />
                {errors.price && <p className="text-sm font-medium text-[#dc2626]">{errors.price}</p>}
              </div>
              <div className="col-span-2 flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#64748b]">바코드</label>
                <Input value={editForm.barcode} onChange={(e) => setEditForm((f) => ({ ...f, barcode: e.target.value }))} />
              </div>
            </div>
          </section>
        </div>
        {(errors.name || errors.price) && (
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
              if (!editForm.name.trim()) {
                nameRef.current?.focus();
              } else if (!editForm.price.trim()) {
                priceRef.current?.focus();
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
