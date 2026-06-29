"use client";

import { Input } from "@/components/ui/input";

export default function ScrKac037() {
  const rangeFields = [
    { label: "고객", placeholder: "" },
    { label: "자산구분", placeholder: "" },
    { label: "전대 구분", placeholder: "" },
    { label: "입찰 구분", placeholder: "" },
    { label: "임대룡도", placeholder: "" },
    { label: "유무상구분", placeholder: "" },
    { label: "임대료 산정", placeholder: "" },
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-[14px] font-bold text-[#1e3a5f]">임대료 사용내역 조회</h2>

      <div className="rounded border border-[#c8d8e8] bg-white p-4 space-y-3">
        <table className="text-[12px] border-collapse w-full max-w-xl">
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
            {rangeFields.map(({ label }) => (
              <tr key={label} className="border-b border-[#f1f5f9]">
                <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">{label}</td>
                <td className="py-1.5 flex items-center gap-2">
                  <Input className="h-7 w-24 border-[#d6e0ea] text-[12px]" />
                  <span className="text-[11px] text-[#94a3b8]">종료</span>
                  <Input className="h-7 w-24 border-[#d6e0ea] text-[12px]" />
                  <button className="border border-[#d6e0ea] bg-white px-1.5 py-1 text-[11px] text-[#475569] rounded hover:bg-[#f8fbff]">▲</button>
                </td>
              </tr>
            ))}
            <tr>
              <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">사용여부</td>
              <td className="py-1.5">
                <Input defaultValue="1" className="h-7 w-12 border-[#d6e0ea] text-[12px]" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
