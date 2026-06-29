"use client";

import { Input } from "@/components/ui/input";

export default function ScrKac018() {
  return (
    <div className="space-y-4">
      <div className="border-b border-[#e7eef5] pb-3">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8]">임대료/추가임대료</div>
        <h1 className="mt-0.5 text-[18px] font-bold text-[#0f172a]">[RT] 계약만료 및 중도해지시 매출액 기준 추가임대료 산정</h1>
      </div>

      <div className="rounded-[18px] border border-[#d7e2ee] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
        <div className="border-b border-[#e7eef5] px-5 py-3">
          <div className="text-sm font-semibold text-[#0f172a]">입력조건</div>
        </div>
        <div className="px-5 py-4">
          <table className="text-sm border-collapse">
            <tbody>
              <tr className="border-b border-[#f1f5f9]">
                <td className="w-52 py-2.5 pr-4 text-[12px] font-semibold text-[#64748b]">회사코드</td>
                <td className="py-2.5 flex items-center gap-2">
                  <Input value="KAC1" readOnly className="h-7 w-16 border-[#d6e0ea] text-sm bg-[#f8fbff]" />
                  <span className="text-[12px] text-[#475569]">한국공항공사</span>
                </td>
              </tr>
              <tr className="border-b border-[#f1f5f9]">
                <td className="py-2.5 pr-4 text-[12px] font-semibold text-[#64748b]">사업영역</td>
                <td className="py-2.5">
                  <Input value="BA15" readOnly className="h-7 w-20 border-[#d6e0ea] text-sm bg-[#f8fbff]" />
                </td>
              </tr>
              <tr className="border-b border-[#f1f5f9]">
                <td className="py-2.5 pr-4 text-[12px] font-semibold text-[#64748b]">산출년도</td>
                <td className="py-2.5">
                  <Input value="2025" readOnly className="h-7 w-20 border-[#d6e0ea] text-sm bg-[#f8fbff]" />
                </td>
              </tr>
              <tr className="border-b border-[#f1f5f9]">
                <td className="py-2.5 pr-4 text-[12px] font-semibold text-[#64748b]">계약번호</td>
                <td className="py-2.5">
                  <Input className="h-7 w-28 border-[#d6e0ea] text-sm" />
                </td>
              </tr>
              <tr className="border-b border-[#f1f5f9]">
                <td className="py-2.5 pr-4 text-[12px] font-semibold text-[#64748b]">고지요청일자</td>
                <td className="py-2.5">
                  <Input defaultValue="2026.04.14" className="h-7 w-32 border-[#d6e0ea] text-sm" />
                </td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 text-[12px] font-semibold text-[#64748b]">결재요청사번</td>
                <td className="py-2.5">
                  <Input className="h-7 w-28 border-[#d6e0ea] text-sm" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
