"use client";

import { useState } from "react";
import { FormPanel, FormField } from "@/components/common/FormPanel";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";

export default function ScrExt008() {
  const [form, setForm] = useState({
    storeName: "",
    date: new Date().toISOString().slice(0, 10),
    category: "",
    amount: "",
    memo: "",
  });

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    if (!form.storeName || !form.amount) {
      alert("매장명과 금액을 입력해주세요.");
      return;
    }
    alert(`기타 매출이 등록되었습니다.\n매장: ${form.storeName}\n금액: ${Number(form.amount).toLocaleString()}원`);
    setForm({ storeName: "", date: new Date().toISOString().slice(0, 10), category: "", amount: "", memo: "" });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">기타 매출 등록</h2>
      <FormPanel title="기타 매출 정보">
        <FormField label="매장명 *">
          <Input value={form.storeName} onChange={(e) => handleChange("storeName", e.target.value)} placeholder="매장명" />
        </FormField>
        <FormField label="날짜">
          <Input type="date" value={form.date} onChange={(e) => handleChange("date", e.target.value)} />
        </FormField>
        <FormField label="분류">
          <Input value={form.category} onChange={(e) => handleChange("category", e.target.value)} placeholder="매출 분류" />
        </FormField>
        <FormField label="금액 *">
          <Input type="number" value={form.amount} onChange={(e) => handleChange("amount", e.target.value)} placeholder="0" />
        </FormField>
        <FormField label="비고">
          <Input value={form.memo} onChange={(e) => handleChange("memo", e.target.value)} placeholder="비고" />
        </FormField>
      </FormPanel>
      <ActionBar>
        <ActionButton label="저장" onClick={handleSave} />
      </ActionBar>
    </div>
  );
}
