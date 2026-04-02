"use client";

import { useState } from "react";
import { EnterpriseFieldGrid, EnterpriseFormLayout, EnterpriseFormSection } from "@/components/common/EnterpriseFormLayout";
import { FormField } from "@/components/common/FormPanel";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function ScrExt024() {
  const [form, setForm] = useState({
    companyName: "스카이푸드",
    bizNo: "123-45-67890",
    ceo: "김영호",
    phone: "02-1234-5678",
    email: "sky@food.co.kr",
    address: "서울시 강서구 공항대로 123",
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    if (isSaving) return;
    setIsSaving(true);
    window.setTimeout(() => {
      toast.success("회원정보가 수정되었습니다.");
      setIsSaving(false);
    }, 700);
  };

  return (
    <EnterpriseFormLayout eyebrow="외부 사용자 정보" title="회원정보 수정">
      <EnterpriseFormSection title="회원 정보">
        <EnterpriseFieldGrid>
          <FormField label="업체명">
            <Input value={form.companyName} onChange={(e) => handleChange("companyName", e.target.value)} />
          </FormField>
          <FormField label="사업자번호">
            <Input value={form.bizNo} onChange={(e) => handleChange("bizNo", e.target.value)} />
          </FormField>
          <FormField label="대표자">
            <Input value={form.ceo} onChange={(e) => handleChange("ceo", e.target.value)} />
          </FormField>
          <FormField label="연락처">
            <Input value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} />
          </FormField>
          <FormField label="이메일">
            <Input value={form.email} onChange={(e) => handleChange("email", e.target.value)} />
          </FormField>
          <div className="md:col-span-2">
            <FormField label="주소">
              <Input value={form.address} onChange={(e) => handleChange("address", e.target.value)} />
            </FormField>
          </div>
        </EnterpriseFieldGrid>
      </EnterpriseFormSection>
      <ActionBar>
        <ActionButton label="저장" onClick={handleSave} loading={isSaving} />
      </ActionBar>
    </EnterpriseFormLayout>
  );
}
