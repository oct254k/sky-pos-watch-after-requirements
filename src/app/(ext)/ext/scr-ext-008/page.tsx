"use client";

import { useRef, useState } from "react";
import { ModalPopup } from "@/components/common/ModalPopup";
import { EnterpriseFieldGrid, EnterpriseFormLayout, EnterpriseFormSection } from "@/components/common/EnterpriseFormLayout";
import { FormField } from "@/components/common/FormPanel";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";
import { NumberInput } from "@/components/ui/number-input";
import { toast } from "sonner";
import { AlertTriangle } from "lucide-react";

export default function ScrExt008() {
  const [form, setForm] = useState({
    storeName: "",
    date: new Date().toISOString().slice(0, 10),
    category: "",
    amount: "",
    memo: "",
  });
  const [isSaving, setIsSaving] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<"storeName" | "amount", string>>>({});
  const [popupOpen, setPopupOpen] = useState(false);
  const storeNameRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (key === "storeName" || key === "amount") {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const handleSave = () => {
    if (isSaving) return;
    const nextErrors: Partial<Record<"storeName" | "amount", string>> = {};
    if (!form.storeName.trim()) nextErrors.storeName = "매장명을 입력해주세요.";
    if (!form.amount.trim()) nextErrors.amount = "금액을 입력해주세요.";
    if (nextErrors.storeName || nextErrors.amount) {
      setErrors(nextErrors);
      setPopupOpen(true);
      return;
    }
    setIsSaving(true);
    window.setTimeout(() => {
      toast.success(`기타 매출이 등록되었습니다. (${form.storeName} / ${Number(form.amount).toLocaleString()}원)`);
      setForm({ storeName: "", date: new Date().toISOString().slice(0, 10), category: "", amount: "", memo: "" });
      setIsSaving(false);
    }, 700);
  };

  const inputClassName = (hasError?: string) =>
    `h-11 bg-white text-[14px] focus-visible:ring-[#1d4f91]/20 ${
      hasError
        ? "border-[#ef4444] bg-[#fff5f5] focus-visible:border-[#ef4444] focus-visible:ring-[#ef4444]/15"
        : "border-[#cfd9e5] focus-visible:border-[#1d4f91]"
    }`;

  return (
    <>
      <EnterpriseFormLayout eyebrow="외부 매출 입력" title="기타 매출 등록">
        <EnterpriseFormSection title="기타 매출 정보">
          <EnterpriseFieldGrid>
            <FormField label="매장명 *">
              <Input ref={storeNameRef} value={form.storeName} onChange={(e) => handleChange("storeName", e.target.value)} placeholder="매장명" className={inputClassName(errors.storeName)} />
              {errors.storeName && <p className="text-sm font-medium text-[#dc2626]">{errors.storeName}</p>}
            </FormField>
            <FormField label="날짜">
              <Input type="date" value={form.date} onChange={(e) => handleChange("date", e.target.value)} />
            </FormField>
            <FormField label="분류">
              <Input value={form.category} onChange={(e) => handleChange("category", e.target.value)} placeholder="매출 분류" />
            </FormField>
            <FormField label="금액 *">
              <NumberInput ref={amountRef} comma value={form.amount} onValueChange={(value) => handleChange("amount", value)} placeholder="0" className={inputClassName(errors.amount)} />
              {errors.amount && <p className="text-sm font-medium text-[#dc2626]">{errors.amount}</p>}
            </FormField>
            <div className="md:col-span-2">
              <FormField label="비고">
                <Input value={form.memo} onChange={(e) => handleChange("memo", e.target.value)} placeholder="비고" />
              </FormField>
            </div>
          </EnterpriseFieldGrid>
        </EnterpriseFormSection>
        <ActionBar>
          <ActionButton label="저장" onClick={handleSave} loading={isSaving} />
        </ActionBar>
      </EnterpriseFormLayout>

      <ModalPopup open={popupOpen} onClose={() => setPopupOpen(false)} title="입력 확인">
        <div className="space-y-4">
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
          <div className="flex justify-end border-t border-[#e7eef5] pt-3">
            <ActionButton
              label="확인"
              onClick={() => {
                setPopupOpen(false);
                if (errors.storeName) {
                  storeNameRef.current?.focus();
                } else if (errors.amount) {
                  amountRef.current?.focus();
                }
              }}
            />
          </div>
        </div>
      </ModalPopup>
    </>
  );
}
