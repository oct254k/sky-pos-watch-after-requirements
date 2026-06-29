"use client";

import { Input } from "@/components/ui/input";

const btnBase =
  "inline-flex items-center gap-1.5 rounded border border-[#b8c9db] bg-[#f0f5fa] px-3 py-1.5 text-[12px] font-semibold text-[#1e3a5f] hover:bg-[#e2eaf4]";

export default function ScrKac050() {
  return (
    <div className="space-y-3">
      {/* Title */}
      <div className="border-b border-[#e7eef5] pb-3">
        <h1 className="mt-0.5 text-[18px] font-bold text-[#0f172a]">추가임대료 종괄표</h1>
      </div>

      {/* Button bar — always visible */}
      <div className="rounded-[14px] border border-[#d7e2ee] bg-white px-4 py-2.5 shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
        <div className="flex items-center gap-2">
          <button className={btnBase} onClick={() => {}}>💾 저장</button>
        </div>
      </div>

      <div className="rounded border border-[#c8d8e8] bg-white p-4 space-y-3">
        <table className="text-[12px] border-collapse w-full max-w-lg">
          <tbody>
            <tr className="border-b border-[#f1f5f9]">
              <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b] w-36">회사 코드</td>
              <td className="py-1.5">
                <Input defaultValue="KAC1" className="h-7 w-20 border-[#d6e0ea] text-[12px]" />
              </td>
            </tr>
            <tr className="border-b border-[#f1f5f9]">
              <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">회계연도</td>
              <td className="py-1.5">
                <Input defaultValue="2026" className="h-7 w-20 border-[#d6e0ea] text-[12px]" />
              </td>
            </tr>
            <tr className="border-b border-[#f1f5f9]">
              <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">사업 영역</td>
              <td className="py-1.5">
                <Input defaultValue="BA15" className="h-7 w-20 border-[#d6e0ea] text-[12px]" />
              </td>
            </tr>
            <tr>
              <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">고객</td>
              <td className="py-1.5 flex items-center gap-2">
                <Input className="h-7 w-36 border-[#d6e0ea] text-[12px]" />
                <span className="text-[11px] text-[#94a3b8]">종료</span>
                <Input className="h-7 w-36 border-[#d6e0ea] text-[12px]" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
