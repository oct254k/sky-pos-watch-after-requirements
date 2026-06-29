"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ScrKac031() {
  return (
    <div className="space-y-3">
      <h2 className="text-[14px] font-bold text-[#1e3a5f]">임대계약 현황판조회</h2>

      <div className="rounded border border-[#c8d8e8] bg-white p-3 space-y-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-semibold text-[#1e3a5f]">사업영역</span>
            <Input defaultValue="BA15" className="h-7 w-20 border-[#d6e0ea] text-[12px]" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-semibold text-[#1e3a5f]">조회기준일</span>
            <Input defaultValue="2026.05.14" className="h-7 w-28 border-[#d6e0ea] text-[12px]" />
          </div>
          <Button className="bg-[#1e3a5f] text-white text-[12px] px-3 py-1.5 rounded hover:bg-[#162e4d] h-auto">조회</Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* 90일 이내 만료 계약건 */}
        <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
          <div className="bg-[#eef3f9] px-3 py-1.5 text-[12px] font-semibold text-[#1e3a5f]">
            90일 이내 만료 계약건 (기준일:2026.05.14)
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[12px]">
              <thead>
                <tr>
                  {["고객코드", "고객명", "계약번호", "계약차수", "임대총도", "임대개시일", "임대종료일"].map((h) => (
                    <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">S66661</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">롤링에프먼버(대청하류 외 2개소, 국제)</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">33409</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">3</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">상업시설</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">2019.05.16</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">2026.05.15</td>
                </tr>
                <tr>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">S88010</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">(주)호텔롯데면세</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">40852</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">1</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">업무시설</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">2026.03.06</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">2026.06.05</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 임대중료일 초과 만료처리 대상 계약건 */}
        <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
          <div className="bg-[#eef3f9] px-3 py-1.5 text-[12px] font-semibold text-[#1e3a5f]">
            임대중료일 초과 만료처리 대상 계약건 (기준일:2026.05.14)
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[12px]">
              <thead>
                <tr>
                  {["고객코드", "고객명", "계약번호", "계약차수", "계약상태", "임대총도", "사용여부", "임대개시일", "임대종료일"].map((h) => (
                    <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">S10030</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">대한항공</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">38754</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">1</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">계약</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">업무시설</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">사용중</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">2024.04.14</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">2026.04.13</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 당월 만료/중도해지 계약건 */}
        <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
          <div className="bg-[#eef3f9] px-3 py-1.5 text-[12px] font-semibold text-[#1e3a5f]">
            당월 만료/중도해지 계약건 (기준일:2026.05.14)
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[12px]">
              <thead>
                <tr>
                  {["고객코드", "고객명", "계약번호", "계약차수", "계약상태", "임대총도", "사용여부", "임대개시일", "임대종료일"].map((h) => (
                    <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr><td colSpan={9} className="text-center text-[12px] text-[#94a3b8] py-4">해당데이터가 없습니다</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 당월 신규 계약건 */}
        <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
          <div className="bg-[#eef3f9] px-3 py-1.5 text-[12px] font-semibold text-[#1e3a5f]">
            당월 신규 계약건 (기준일:2026.05.14)
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[12px]">
              <thead>
                <tr>
                  {["고객코드", "고객명", "계약번호", "계약차수", "임대총도", "임대개시일", "임대종료일"].map((h) => (
                    <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr><td colSpan={7} className="text-center text-[12px] text-[#94a3b8] py-4">해당데이터가 없습니다</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
