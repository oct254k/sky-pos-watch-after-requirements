"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

const radioOptions = [
  "신규 계약 - 월 수시고지 대상",
  "신규 계약 - 연 수시고지 대상",
  "단기임대 수시고지 대상",
  "무단점용료 수시고지 대상",
  "기타(추가임대료,과오납 등)의 사유에 의한 추가/환급 대상",
  "매출연동임대료(매출액x요율) 수시고지 대상_Skypos 연동",
];

export default function ScrKac017() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="space-y-4">
      <div className="border-b border-[#e7eef5] pb-3">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8]">임대료/추가임대료</div>
        <h1 className="mt-0.5 text-[18px] font-bold text-[#0f172a]">[RT] 수시고지 유형 선택 화면 산정 및 전송</h1>
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
                <td className="py-2.5 flex items-center gap-1">
                  <Input value="BA15" readOnly className="h-7 w-20 border-[#d6e0ea] text-sm bg-[#f8fbff]" />
                  <button className="rounded border border-[#d6e0ea] bg-white px-1.5 py-1 text-[11px] text-[#475569] hover:bg-[#f8fbff]">□</button>
                </td>
              </tr>
              <tr className="border-b border-[#f1f5f9]">
                <td className="py-2.5 pr-4 text-[12px] font-semibold text-[#64748b]">수시고지요청일자</td>
                <td className="py-2.5">
                  <Input defaultValue="2026.05.14" className="h-7 w-32 border-[#d6e0ea] text-sm" />
                </td>
              </tr>
              <tr className="border-b border-[#f1f5f9]">
                <td className="py-2.5 pr-4 text-[12px] font-semibold text-[#64748b]">결재요청사번</td>
                <td className="py-2.5 flex items-center gap-1">
                  <Input className="h-7 w-28 border-[#d6e0ea] text-sm" />
                  <button className="rounded border border-[#d6e0ea] bg-white px-1.5 py-1 text-[11px] text-[#475569] hover:bg-[#f8fbff]">□</button>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="mt-4 space-y-2">
            {radioOptions.map((label, i) => (
              <label key={i} className="flex items-center gap-2 cursor-pointer text-[12px] text-[#334155]">
                <input
                  type="radio"
                  name="noticeType"
                  value={i}
                  checked={selected === i}
                  onChange={() => setSelected(i)}
                  className="accent-[#002D56]"
                />
                {label}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
