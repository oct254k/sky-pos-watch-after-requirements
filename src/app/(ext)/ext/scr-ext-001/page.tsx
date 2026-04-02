"use client";

import { useRef, useState } from "react";
import { ModalPopup } from "@/components/common/ModalPopup";
import { EnterpriseFieldGrid, EnterpriseFormLayout, EnterpriseFormSection } from "@/components/common/EnterpriseFormLayout";
import { FormField } from "@/components/common/FormPanel";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";
import { AlertTriangle } from "lucide-react";
import { toast } from "sonner";

export default function ScrExt001() {
  const [form, setForm] = useState({
    companyName: "",
    bizNo: "",
    ceo: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [pendingErrors, setPendingErrors] = useState<Partial<Record<keyof typeof form, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const companyNameRef = useRef<HTMLInputElement>(null);
  const bizNoRef = useRef<HTMLInputElement>(null);
  const ceoRef = useRef<HTMLInputElement>(null);

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = () => {
    if (isSubmitting) return;
    const nextErrors: Partial<Record<keyof typeof form, string>> = {};

    if (!form.companyName.trim()) {
      nextErrors.companyName = "업체명을 입력해주세요.";
    }
    if (!form.bizNo.trim()) {
      nextErrors.bizNo = "사업자번호를 입력해주세요.";
    }
    if (!form.ceo.trim()) {
      nextErrors.ceo = "대표자를 입력해주세요.";
    }

    if (nextErrors.companyName || nextErrors.bizNo || nextErrors.ceo) {
      setPendingErrors(nextErrors);
      setPopupMessage("필수 입력 항목을 확인해주세요.");
      setPopupOpen(true);
      return;
    }

    setErrors({});
    setPendingErrors({});
    setIsSubmitting(true);
    window.setTimeout(() => {
      toast.success("회원가입이 완료되었습니다.");
      setForm({ companyName: "", bizNo: "", ceo: "", phone: "", email: "" });
      setIsSubmitting(false);
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
      <EnterpriseFormLayout eyebrow="외부 사용자 등록" title="회원가입">
        <EnterpriseFormSection title="회원 정보 입력">
          <EnterpriseFieldGrid>
                <FormField label="업체명 *">
                  <Input
                    ref={companyNameRef}
                    value={form.companyName}
                    onChange={(e) => handleChange("companyName", e.target.value)}
                    placeholder="업체명을 입력하세요"
                    className={inputClassName(errors.companyName)}
                  />
                  {errors.companyName && <p className="text-sm font-medium text-[#dc2626]">{errors.companyName}</p>}
                </FormField>
                <FormField label="사업자번호 *">
                  <Input
                    ref={bizNoRef}
                    value={form.bizNo}
                    onChange={(e) => handleChange("bizNo", e.target.value)}
                    placeholder="000-00-00000"
                    className={inputClassName(errors.bizNo)}
                  />
                  {errors.bizNo && <p className="text-sm font-medium text-[#dc2626]">{errors.bizNo}</p>}
                </FormField>
                <FormField label="대표자 *">
                  <Input
                    ref={ceoRef}
                    value={form.ceo}
                    onChange={(e) => handleChange("ceo", e.target.value)}
                    placeholder="대표자명을 입력하세요"
                    className={inputClassName(errors.ceo)}
                  />
                  {errors.ceo && <p className="text-sm font-medium text-[#dc2626]">{errors.ceo}</p>}
                </FormField>
                <FormField label="연락처">
                  <Input
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="02-0000-0000"
                    className={inputClassName()}
                  />
                </FormField>
                <div className="md:col-span-2">
                  <FormField label="이메일">
                    <Input
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="example@email.com"
                      className={inputClassName()}
                    />
                  </FormField>
                </div>
          </EnterpriseFieldGrid>
        </EnterpriseFormSection>

        <ActionBar>
          <ActionButton label="가입" onClick={handleSubmit} loading={isSubmitting} className="w-full sm:w-auto" />
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
                <p className="mt-2 text-[14px] font-medium leading-6 text-[#334155]">{popupMessage}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end border-t border-[#e7eef5] pt-3">
            <ActionButton
              label="확인"
              onClick={() => {
                setPopupOpen(false);
                setErrors(pendingErrors);

                if (pendingErrors.companyName) {
                  companyNameRef.current?.focus();
                } else if (pendingErrors.bizNo) {
                  bizNoRef.current?.focus();
                } else if (pendingErrors.ceo) {
                  ceoRef.current?.focus();
                }
              }}
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </ModalPopup>
    </>
  );
}
