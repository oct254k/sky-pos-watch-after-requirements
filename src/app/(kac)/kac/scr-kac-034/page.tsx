"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ScrKac034() {
  return (
    <div className="space-y-3">
      <h2 className="text-[14px] font-bold text-[#1e3a5f]">전자계약 대량생성프로그램</h2>

      <div className="flex gap-2 mb-2">
        <Button className="bg-[#1e3a5f] text-white text-[12px] px-3 py-1.5 rounded hover:bg-[#162e4d] h-auto">결과조회</Button>
        <Button variant="outline" className="text-[12px] px-3 py-1.5 h-auto">계약특수조건입력</Button>
      </div>

      <div className="rounded border border-[#c8d8e8] bg-white p-4 space-y-3">
        <div className="text-[12px] font-semibold text-[#1e3a5f] border-b border-[#d8e4ee] pb-1">계약정보</div>
        <table className="text-[12px] border-collapse w-full max-w-lg">
          <tbody>
            <tr className="border-b border-[#f1f5f9]">
              <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b] w-36">회사코드</td>
              <td className="py-1.5">
                <Input defaultValue="KAC1" className="h-7 w-20 border-[#d6e0ea] text-[12px]" />
              </td>
            </tr>
            <tr className="border-b border-[#f1f5f9]">
              <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">사업영역</td>
              <td className="py-1.5">
                <Input defaultValue="BA15" className="h-7 w-20 border-[#d6e0ea] text-[12px]" />
              </td>
            </tr>
            <tr className="border-b border-[#f1f5f9]">
              <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">회계연도</td>
              <td className="py-1.5">
                <Input defaultValue="2027" className="h-7 w-20 border-[#d6e0ea] text-[12px]" />
              </td>
            </tr>
            <tr className="border-b border-[#f1f5f9]">
              <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">계약일자</td>
              <td className="py-1.5">
                <Input defaultValue="2026.05.14" className="h-7 w-36 border-[#d6e0ea] text-[12px]" />
              </td>
            </tr>
            <tr>
              <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">갑 담당자 이메일</td>
              <td className="py-1.5 flex items-center gap-2">
                <Input readOnly className="h-6 w-60 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
