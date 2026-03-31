"use client";

import { useState } from "react";
import { FormPanel, FormField } from "@/components/common/FormPanel";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";

export default function ScrExt002() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!userId || !password) {
      alert("ID와 비밀번호를 입력해주세요.");
      return;
    }
    alert(`로그인 성공 (ID: ${userId})`);
  };

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="w-full max-w-md space-y-4">
        <h2 className="text-center text-xl font-semibold">로그인</h2>
        <FormPanel>
          <FormField label="아이디">
            <Input value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="아이디를 입력하세요" />
          </FormField>
          <FormField label="비밀번호">
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호를 입력하세요" />
          </FormField>
        </FormPanel>
        <ActionBar>
          <ActionButton label="로그인" onClick={handleLogin} />
        </ActionBar>
      </div>
    </div>
  );
}
