"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ScrKac028() {
  return (
    <div className="space-y-3">
      <h2 className="text-[14px] font-bold text-[#1e3a5f]">임대보증금 대체처리</h2>

      {/* 입력조건 */}
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
              <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">기존 임대보증금의 계약번호</td>
              <td className="py-1.5">
                <Input className="h-7 w-36 border-[#d6e0ea] text-[12px]" />
              </td>
            </tr>
            <tr>
              <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">균재요청사번</td>
              <td className="py-1.5">
                <Input defaultValue="14860" className="h-7 w-24 border-[#d6e0ea] text-[12px]" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 버튼 바 */}
      <div className="flex gap-2">
        <Button className="bg-[#1e3a5f] text-white text-[12px] px-3 py-1.5 rounded hover:bg-[#162e4d] h-auto">대체항목 선택</Button>
        <Button variant="outline" className="text-[12px] px-3 py-1.5 h-auto">대체항목 삭제</Button>
        <Button variant="outline" className="text-[12px] px-3 py-1.5 h-auto">저장</Button>
      </div>

      {/* 기존 임대보증금 내역 */}
      <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
        <div className="bg-[#eef3f9] px-3 py-1.5 text-[12px] font-semibold text-[#1e3a5f]">기존 임대보증금 내역</div>
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr>
                {["행", "사업영역", "고객코드", "계약번호", "처리순시", "유형", "지/대", "보증금액", "상세내역", "처리상태", "전표번호", "임대종료일"].map((h) => (
                  <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5 whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr><td colSpan={12} className="text-center text-[12px] text-[#94a3b8] py-8">해당데이터가 없습니다</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 대체하는 임대보증금 */}
      <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
        <div className="bg-[#eef3f9] px-3 py-1.5 text-[12px] font-semibold text-[#1e3a5f]">대체하는 임대보증금</div>
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr>
                {["행", "사업영역", "고객코드", "계약번호", "처리순시", "유형", "지/대", "보증금액", "정산한 금액", "잔액", "대체할 금액"].map((h) => (
                  <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5 whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr><td colSpan={11} className="text-center text-[12px] text-[#94a3b8] py-8">해당데이터가 없습니다</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 대체되는 임대보증금 */}
      <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
        <div className="bg-[#eef3f9] px-3 py-1.5 text-[12px] font-semibold text-[#1e3a5f]">대체되는 임대보증금</div>
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr>
                {["행", "사업영역", "고객코드", "계약번호", "처리순시", "유형", "지/대", "보증금액", "상세내역", "임대종료일"].map((h) => (
                  <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5 whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr><td colSpan={10} className="text-center text-[12px] text-[#94a3b8] py-8">해당데이터가 없습니다</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
