"use client";

import { useState } from "react";
import { FormPanel, FormField } from "@/components/common/FormPanel";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";

export default function ScrExt001() {
  const [form, setForm] = useState({
    companyName: "",
    bizNo: "",
    ceo: "",
    phone: "",
    email: "",
  });

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    if (!form.companyName || !form.bizNo || !form.ceo) {
      alert("필수 항목을 입력해주세요.");
      return;
    }
    alert("회원가입이 완료되었습니다.");
    setForm({ companyName: "", bizNo: "", ceo: "", phone: "", email: "" });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">회원가입</h2>
      <FormPanel title="회원 정보 입력">
        <FormField label="업체명 *">
          <Input value={form.companyName} onChange={(e) => handleChange("companyName", e.target.value)} placeholder="업체명을 입력하세요" />
        </FormField>
        <FormField label="사업자번호 *">
          <Input value={form.bizNo} onChange={(e) => handleChange("bizNo", e.target.value)} placeholder="000-00-00000" />
        </FormField>
        <FormField label="대표자 *">
          <Input value={form.ceo} onChange={(e) => handleChange("ceo", e.target.value)} placeholder="대표자명" />
        </FormField>
        <FormField label="연락처">
          <Input value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="02-0000-0000" />
        </FormField>
        <FormField label="이메일">
          <Input value={form.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="example@email.com" />
        </FormField>
      </FormPanel>
      <ActionBar>
        <ActionButton label="가입" onClick={handleSubmit} />
      </ActionBar>
    </div>
  );
}
