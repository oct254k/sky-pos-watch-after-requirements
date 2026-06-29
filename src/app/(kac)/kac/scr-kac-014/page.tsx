"use client";

import { Input } from "@/components/ui/input";

export default function ScrKac014() {
  return (
    <div className="space-y-4">
      <div className="border-b border-[#e7eef5] pb-3">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8]">임대료/추가임대료</div>
        <h1 className="mt-0.5 text-[18px] font-bold text-[#0f172a]">[RT] 구내영업료 산정 및 전송</h1>
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
                <td className="py-2.5 pr-4 text-[12px] font-semibold text-[#64748b]">구내영업료 산출년도</td>
                <td className="py-2.5">
                  <Input value="2025" readOnly className="h-7 w-20 border-[#d6e0ea] text-sm bg-[#f8fbff]" />
                </td>
              </tr>
              <tr className="border-b border-[#f1f5f9]">
                <td className="py-2.5 pr-4 text-[12px] font-semibold text-[#64748b]">고지요청일자</td>
                <td className="py-2.5">
                  <Input defaultValue="2026.07.15" className="h-7 w-32 border-[#d6e0ea] text-sm" />
                </td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 text-[12px] font-semibold text-[#64748b]">결재요청사번</td>
                <td className="py-2.5 flex items-center gap-1">
                  <Input className="h-7 w-28 border-[#d6e0ea] text-sm" />
                  <button className="rounded border border-[#d6e0ea] bg-white px-1.5 py-1 text-[11px] text-[#475569] hover:bg-[#f8fbff]">□</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-1 px-1">
        <p className="text-[13px] text-[#334155]">■ 구내영업료 산출년도와 고지요청일자는 같은년도로 입력 ■</p>
        <p className="text-[13px] text-[#334155]">■ 구내영업료 별도고지 대상은 임대관리 &gt; 임대료산정 &gt;</p>
        <p className="text-[13px] text-[#334155] pl-4">수시고지 임대료 산정 및 전송 메뉴에서 기타 사유에 의한 추가/환급 대상으로 진행</p>
      </div>
    </div>
  );
}
