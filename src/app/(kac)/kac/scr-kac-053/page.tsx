"use client";

import { Input } from "@/components/ui/input";

export default function ScrKac053() {
  return (
    <div className="space-y-3">
      <h2 className="text-[14px] font-bold text-[#1e3a5f]">SD 사용료 추적관리</h2>

      <div className="rounded border border-[#c8d8e8] bg-white p-4 space-y-3">
        <div className="text-[12px] font-semibold text-[#1e3a5f] border-b border-[#d8e4ee] pb-1">입력조건</div>
        <table className="text-[12px] border-collapse w-full max-w-xl">
          <tbody>
            <tr className="border-b border-[#f1f5f9]">
              <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b] w-36">지사코드</td>
              <td className="py-1.5 flex items-center gap-2">
                <Input className="h-7 w-12 border-[#d6e0ea] text-[12px]" />
                <button className="border border-[#d6e0ea] bg-white px-1.5 py-1 text-[11px] text-[#475569] rounded">▲</button>
              </td>
            </tr>
            <tr className="border-b border-[#f1f5f9]">
              <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">고지일자</td>
              <td className="py-1.5 flex items-center gap-2">
                <Input defaultValue="2026.05.01" className="h-7 w-28 border-[#d6e0ea] text-[12px]" />
                <span className="text-[11px] text-[#94a3b8]">종료</span>
                <Input defaultValue="2026.05.14" className="h-7 w-28 border-[#d6e0ea] text-[12px]" />
                <button className="border border-[#d6e0ea] bg-white px-1.5 py-1 text-[11px] text-[#475569] rounded">▲</button>
              </td>
            </tr>
            <tr className="border-b border-[#f1f5f9]">
              <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">정기/수시 여부</td>
              <td className="py-1.5 flex items-center gap-2">
                <Input className="h-7 w-12 border-[#d6e0ea] text-[12px]" />
              </td>
            </tr>
            <tr className="border-b border-[#f1f5f9]">
              <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">수익계정 코드</td>
              <td className="py-1.5 flex items-center gap-2">
                <Input className="h-7 w-28 border-[#d6e0ea] text-[12px]" />
                <span className="text-[11px] text-[#94a3b8]">종료</span>
                <Input className="h-7 w-28 border-[#d6e0ea] text-[12px]" />
                <button className="border border-[#d6e0ea] bg-white px-1.5 py-1 text-[11px] text-[#475569] rounded">▲</button>
              </td>
            </tr>
            <tr className="border-b border-[#f1f5f9]">
              <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">고객</td>
              <td className="py-1.5 flex items-center gap-2">
                <Input className="h-7 w-28 border-[#d6e0ea] text-[12px]" />
                <span className="text-[11px] text-[#94a3b8]">종료</span>
                <Input className="h-7 w-28 border-[#d6e0ea] text-[12px]" />
                <button className="border border-[#d6e0ea] bg-white px-1.5 py-1 text-[11px] text-[#475569] rounded">▲</button>
              </td>
            </tr>
            <tr>
              <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">사용료 참조번호</td>
              <td className="py-1.5">
                <Input className="h-7 w-36 border-[#d6e0ea] text-[12px]" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
