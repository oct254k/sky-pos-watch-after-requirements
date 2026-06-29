"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function ScrKac013() {
  const [form, setForm] = useState({
    companyCode: "KAC1",
    companyName: "한국공항공사",
    businessArea: "BA15",
    year: "2025",
    contractNo: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 border-b border-[#e7eef5] pb-3">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8]">
            임대계약관리
          </div>
          <h1 className="mt-0.5 text-[18px] font-bold text-[#0f172a]">
            [RT] 계약 건별 차기년도 연이관
          </h1>
        </div>
      </div>

      <div className="rounded-[18px] border border-[#d7e2ee] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
        <div className="border-b border-[#e7eef5] px-5 py-3">
          <div className="text-sm font-semibold text-[#0f172a]">입력조건</div>
        </div>

        <div className="px-5 py-5">
          <table className="w-full max-w-lg text-sm border-collapse">
            <tbody>
              <tr className="border-b border-[#e7eef5]">
                <td className="w-32 py-3 pr-4 text-[12px] font-semibold text-[#64748b]">회사코드</td>
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <Input
                      value={form.companyCode}
                      readOnly
                      className="h-8 w-20 border-[#d6e0ea] text-sm bg-[#f8fbff]"
                    />
                    <span className="text-sm text-[#334155]">{form.companyName}</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-[#e7eef5]">
                <td className="w-32 py-3 pr-4 text-[12px] font-semibold text-[#64748b]">사업영역</td>
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <Input
                      value={form.businessArea}
                      onChange={(e) => handleChange("businessArea", e.target.value)}
                      className="h-8 w-24 border-[#d6e0ea] text-sm"
                    />
                    <button
                      type="button"
                      className="flex h-8 w-8 items-center justify-center rounded border border-[#d6e0ea] bg-[#f8fbff] text-[#64748b] hover:bg-[#f0f4f8]"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-[#e7eef5]">
                <td className="w-32 py-3 pr-4 text-[12px] font-semibold text-[#64748b]">년도</td>
                <td className="py-3">
                  <Input
                    value={form.year}
                    onChange={(e) => handleChange("year", e.target.value)}
                    className="h-8 w-24 border-[#d6e0ea] text-sm"
                    placeholder="YYYY"
                    maxLength={4}
                  />
                </td>
              </tr>
              <tr>
                <td className="w-32 py-3 pr-4 text-[12px] font-semibold text-[#64748b]">계약번호</td>
                <td className="py-3">
                  <Input
                    value={form.contractNo}
                    onChange={(e) => handleChange("contractNo", e.target.value)}
                    className="h-8 w-40 border-[#d6e0ea] text-sm"
                    placeholder="계약번호 입력"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mx-5 mb-5 rounded-[12px] border border-[#fde68a] bg-[#fffbeb] px-4 py-3 space-y-1">
          <p className="text-[13px] text-[#92400e]">
            모든 단가, 임대료 등 금액은 자동으로 계산되지 않습니다.
          </p>
          <p className="text-[13px] text-[#92400e]">
            산정시작일과 산정종료일을 연도에 맞게 입력하세요
          </p>
          <p className="mt-2 text-[12px] text-[#b45309]">
            <span className="font-semibold">년도입력 예시</span> : 2026년으로 이관 시 &quot;2025&quot; 입력 후 처리
          </p>
        </div>
      </div>
    </div>
  );
}
