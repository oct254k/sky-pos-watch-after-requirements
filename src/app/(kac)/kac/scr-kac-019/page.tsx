"use client";

import { Input } from "@/components/ui/input";

export default function ScrKac019() {
  return (
    <div className="space-y-4">
      <div className="border-b border-[#e7eef5] pb-3">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8]">임대현황 조회</div>
        <h1 className="mt-0.5 text-[18px] font-bold text-[#0f172a]">공항별 업종별 계약현황</h1>
      </div>

      <div className="rounded-[18px] border border-[#d7e2ee] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
        <div className="border-b border-[#e7eef5] px-5 py-3">
          <div className="text-sm font-semibold text-[#0f172a]">조회 조건</div>
        </div>
        <div className="px-5 py-4">
          <table className="text-sm border-collapse">
            <tbody>
              <tr className="border-b border-[#f1f5f9]">
                <td className="w-36 py-2 pr-4 text-[12px] font-semibold text-[#64748b]">회사 코드</td>
                <td className="py-2">
                  <Input value="KAC1" readOnly className="h-7 w-16 border-[#d6e0ea] text-sm bg-[#f8fbff]" />
                </td>
              </tr>
              <tr className="border-b border-[#f1f5f9]">
                <td className="py-2 pr-4 text-[12px] font-semibold text-[#64748b]">사업 영역</td>
                <td className="py-2">
                  <Input value="BA15" readOnly className="h-7 w-20 border-[#d6e0ea] text-sm bg-[#f8fbff]" />
                </td>
              </tr>
              {[
                { label: "회계년도", from: "2026" },
                { label: "고객", from: "" },
              ].map(({ label, from }) => (
                <tr key={label} className="border-b border-[#f1f5f9]">
                  <td className="py-2 pr-4 text-[12px] font-semibold text-[#64748b]">{label}</td>
                  <td className="py-2 flex items-center gap-2">
                    <Input defaultValue={from} className="h-7 w-24 border-[#d6e0ea] text-sm" />
                    <span className="text-[11px] text-[#94a3b8]">종료</span>
                    <Input className="h-7 w-24 border-[#d6e0ea] text-sm" />
                    <button className="rounded border border-[#d6e0ea] bg-white px-1.5 py-1 text-[11px] text-[#475569] hover:bg-[#f8fbff]">🔍</button>
                  </td>
                </tr>
              ))}
              <tr className="border-b border-[#f1f5f9]">
                <td className="py-2 pr-4 text-[12px] font-semibold text-[#64748b]">사용여부</td>
                <td className="py-2">
                  <Input defaultValue="1" className="h-7 w-10 border-[#d6e0ea] text-sm" />
                </td>
              </tr>
              {["전대 구분","입찰 구분","임대용도","유무상구분","자산구분"].map((label) => (
                <tr key={label} className="border-b border-[#f1f5f9]">
                  <td className="py-2 pr-4 text-[12px] font-semibold text-[#64748b]">{label}</td>
                  <td className="py-2 flex items-center gap-2">
                    <Input className="h-7 w-24 border-[#d6e0ea] text-sm" />
                    <span className="text-[11px] text-[#94a3b8]">종료</span>
                    <Input className="h-7 w-24 border-[#d6e0ea] text-sm" />
                    <button className="rounded border border-[#d6e0ea] bg-white px-1.5 py-1 text-[11px] text-[#475569] hover:bg-[#f8fbff]">🔍</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
