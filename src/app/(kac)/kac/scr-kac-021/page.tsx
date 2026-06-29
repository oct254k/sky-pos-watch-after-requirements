"use client";

import { Input } from "@/components/ui/input";

export default function ScrKac021() {
  return (
    <div className="space-y-4">
      <div className="border-b border-[#e7eef5] pb-3">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8]">임대현황 조회</div>
        <h1 className="mt-0.5 text-[18px] font-bold text-[#0f172a]">[RT] 실고지기준 임대료 현황</h1>
      </div>

      <div className="space-y-4">
        {/* 조회조건-실고지 */}
        <div className="rounded-[18px] border border-[#d7e2ee] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
          <div className="border-b border-[#e7eef5] px-5 py-3">
            <div className="text-sm font-semibold text-[#0f172a]">조회조건-실고지</div>
          </div>
          <div className="px-5 py-4">
            <table className="text-sm border-collapse w-full">
              <tbody>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="w-28 py-2 pr-3 text-[12px] font-semibold text-[#64748b]">회사코드</td>
                  <td className="py-2">
                    <Input value="KAC1" readOnly className="h-7 w-16 border-[#d6e0ea] text-sm bg-[#f8fbff]" />
                  </td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-2 pr-3 text-[12px] font-semibold text-[#64748b]">고지일자</td>
                  <td className="py-2 flex items-center gap-1">
                    <Input className="h-7 w-24 border-[#d6e0ea] text-sm" />
                    <span className="text-[11px] text-[#94a3b8]">종료</span>
                    <Input className="h-7 w-24 border-[#d6e0ea] text-sm" />
                    <button className="rounded border border-[#d6e0ea] bg-white px-1.5 py-1 text-[11px] text-[#475569] hover:bg-[#f8fbff]">🔍</button>
                  </td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-2 pr-3 text-[12px] font-semibold text-[#64748b]">사업영역</td>
                  <td className="py-2 flex items-center gap-1">
                    <Input value="BA15" readOnly className="h-7 w-20 border-[#d6e0ea] text-sm bg-[#f8fbff]" />
                    <button className="rounded border border-[#d6e0ea] bg-white px-1.5 py-1 text-[11px] text-[#475569] hover:bg-[#f8fbff]">🔍</button>
                  </td>
                </tr>
                {["고객유형","업체규모","고객코드","수익계정","발령일자"].map((label) => (
                  <tr key={label} className="border-b border-[#f1f5f9]">
                    <td className="py-2 pr-3 text-[12px] font-semibold text-[#64748b]">{label}</td>
                    <td className="py-2 flex items-center gap-1">
                      <Input className="h-7 w-28 border-[#d6e0ea] text-sm" />
                      <button className="rounded border border-[#d6e0ea] bg-white px-1.5 py-1 text-[11px] text-[#475569] hover:bg-[#f8fbff]">🔍</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 조회조건-계약원장 */}
        <div className="rounded-[18px] border border-[#d7e2ee] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
          <div className="border-b border-[#e7eef5] px-5 py-3">
            <div className="text-sm font-semibold text-[#0f172a]">조회조건-계약원장</div>
          </div>
          <div className="px-5 py-4">
            <table className="text-sm border-collapse w-full">
              <tbody>
                {["계약번호","고지구분","용도구분","위치분류1","위치분류2","위치분류3","임대료 구분"].map((label) => (
                  <tr key={label} className="border-b border-[#f1f5f9]">
                    <td className="w-28 py-2 pr-3 text-[12px] font-semibold text-[#64748b]">{label}</td>
                    <td className="py-2 flex items-center gap-1">
                      <Input className="h-7 w-28 border-[#d6e0ea] text-sm" />
                      <button className="rounded border border-[#d6e0ea] bg-white px-1.5 py-1 text-[11px] text-[#475569] hover:bg-[#f8fbff]">🔍</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
