"use client";

import { Input } from "@/components/ui/input";

export default function ScrKac033() {
  return (
    <div className="space-y-3">
      <h2 className="text-[14px] font-bold text-[#1e3a5f]">연고지 과거일 중도해지 처리(일부 임대물건)</h2>

      <div className="rounded border border-[#c8d8e8] bg-white p-4 space-y-3">
        <div className="text-[12px] font-semibold text-[#1e3a5f] border-b border-[#d8e4ee] pb-1">입력조건</div>
        <table className="text-[12px] border-collapse w-full max-w-lg">
          <tbody>
            <tr className="border-b border-[#f1f5f9]">
              <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b] w-48">회사코드</td>
              <td className="py-1.5 flex items-center gap-2">
                <Input defaultValue="KAC1" className="h-7 w-20 border-[#d6e0ea] text-[12px]" />
                <span className="text-[12px] text-[#475569]">한국공항공사</span>
              </td>
            </tr>
            <tr className="border-b border-[#f1f5f9]">
              <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">사업영역</td>
              <td className="py-1.5">
                <Input defaultValue="BA15" className="h-7 w-20 border-[#d6e0ea] text-[12px]" />
              </td>
            </tr>
            <tr className="border-b border-[#f1f5f9]">
              <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">년도</td>
              <td className="py-1.5">
                <Input defaultValue="2026" className="h-7 w-20 border-[#d6e0ea] text-[12px]" />
              </td>
            </tr>
            <tr className="border-b border-[#f1f5f9]">
              <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">계약번호</td>
              <td className="py-1.5">
                <Input className="h-7 w-36 border-[#d6e0ea] text-[12px]" />
              </td>
            </tr>
            <tr className="border-b border-[#f1f5f9]">
              <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">환급요청일자</td>
              <td className="py-1.5">
                <Input className="h-7 w-36 border-[#d6e0ea] text-[12px]" />
              </td>
            </tr>
            <tr className="border-b border-[#f1f5f9]">
              <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">연고지 최근 수시 고지일</td>
              <td className="py-1.5 flex items-center gap-2">
                <Input defaultValue="2026.04.18" className="h-7 w-28 border-[#d6e0ea] text-[12px]" />
              </td>
            </tr>
            <tr>
              <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">결재요청사번</td>
              <td className="py-1.5">
                <Input defaultValue="I" className="h-7 w-20 border-[#d6e0ea] text-[12px]" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
