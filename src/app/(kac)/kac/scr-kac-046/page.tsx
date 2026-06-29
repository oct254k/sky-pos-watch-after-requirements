"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function ScrKac046() {
  const [showList, setShowList] = useState(false);

  const rows = [
    { num: "20", bizArea: "BA15", contractNo: "29140", seq: "1", contractType: "사용중", custCode: "S00010", custName: "국방시설본부(근기냐무시설단)", custType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evictDate: "", maxDate: "2022.01.01", minDate: "", lastDate: "13297", result: "발론" },
    { num: "20", bizArea: "BA15", contractNo: "24225", seq: "1", contractType: "사용중", custCode: "S00010", custName: "1년도 국가기관 500001", custType: "상업시설·사용, 수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evictDate: "", maxDate: "2022.01.01", minDate: "", lastDate: "13806", result: "발론" },
    { num: "20", bizArea: "BA15", contractNo: "24225", seq: "4", contractType: "사용중", custCode: "S00010", custName: "국방시설본부(근기냐무시설단)", custType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evictDate: "", maxDate: "2022.01.01", minDate: "", lastDate: "13297", result: "발론" },
    { num: "20", bizArea: "BA15", contractNo: "25671", seq: "1", contractType: "사용중", custCode: "S00010", custName: "김포국제공항관리청", custType: "업무시설", startDate: "2026.01.01", endDate: "2026.12.31", days: "365", evictDate: "", maxDate: "", minDate: "", lastDate: "13644", result: "진나" },
    { num: "20", bizArea: "BA15", contractNo: "25671", seq: "2", contractType: "사용중", custCode: "S00010", custName: "김포국제공항관리청", custType: "업무시설", startDate: "2026.01.01", endDate: "2026.12.31", days: "365", evictDate: "", maxDate: "", minDate: "", lastDate: "13644", result: "진나" },
    { num: "20", bizArea: "BA15", contractNo: "35671", seq: "1", contractType: "사용중", custCode: "S00010", custName: "김포국제공항관리청", custType: "업무시설", startDate: "2026.01.01", endDate: "2026.12.31", days: "365", evictDate: "", maxDate: "", minDate: "", lastDate: "13644", result: "진나" },
    { num: "20", bizArea: "BA15", contractNo: "35671", seq: "4", contractType: "사용중", custCode: "S00010", custName: "김포국제공항관리청", custType: "업무시설", startDate: "2026.01.01", endDate: "2026.12.31", days: "365", evictDate: "", maxDate: "", minDate: "", lastDate: "13644", result: "진나" },
    { num: "20", bizArea: "BA15", contractNo: "32361", seq: "5", contractType: "사용중", custCode: "S00050", custName: "공군기지15통수유동수업단", custType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evictDate: "", maxDate: "", minDate: "", lastDate: "12874", result: "문론" },
    { num: "20", bizArea: "BA15", contractNo: "32361", seq: "1", contractType: "사용중", custCode: "S00050", custName: "공군기지15통수유동수업단", custType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evictDate: "", maxDate: "", minDate: "", lastDate: "12874", result: "문론" },
    { num: "20", bizArea: "BA15", contractNo: "22923", seq: "4", contractType: "사용중", custCode: "S00050", custName: "서울특별시119수수조단", custType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evictDate: "2020.01.01", maxDate: "", minDate: "", lastDate: "13806", result: "발론" },
    { num: "20", bizArea: "BA15", contractNo: "32540", seq: "2", contractType: "사용중", custCode: "S00050", custName: "서울특별시119수수조단", custType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evictDate: "", maxDate: "2018.05.01", minDate: "", lastDate: "13806", result: "발론" },
    { num: "20", bizArea: "BA15", contractNo: "32291", seq: "1", contractType: "1차대여", custCode: "S00050", custName: "대한민국국회사무처", custType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evictDate: "", maxDate: "2022.01.01", minDate: "", lastDate: "13806", result: "발론" },
    { num: "20", bizArea: "BA15", contractNo: "20480", seq: "6", contractType: "사용중", custCode: "S00027", custName: "한공기업(업무용공항부대업무)", custType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evictDate: "", maxDate: "2022.01.01", minDate: "", lastDate: "13297", result: "김지" },
    { num: "20", bizArea: "BA15", contractNo: "31299", seq: "6", contractType: "사용중", custCode: "S00022", custName: "서울전라관서", custType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evictDate: "", maxDate: "", minDate: "2024.06.26", lastDate: "13685", result: "김지" },
    { num: "20", bizArea: "BA15", contractNo: "13160", seq: "6", contractType: "사용중", custCode: "S00022", custName: "서울전라관서", custType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evictDate: "", maxDate: "", minDate: "", lastDate: "12874", result: "문론" },
    { num: "20", bizArea: "BA15", contractNo: "5125", seq: "16", contractType: "사용중", custCode: "S00089", custName: "서울전라한공관서", custType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evictDate: "", maxDate: "", minDate: "", lastDate: "13081", result: "미론" },
    { num: "20", bizArea: "BA15", contractNo: "5632", seq: "6", contractType: "1차대여", custCode: "S00089", custName: "한공관서", custType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evictDate: "", maxDate: "2018.08.14", minDate: "", lastDate: "13644", result: "진나" },
    { num: "20", bizArea: "BA15", contractNo: "35127", seq: "6", contractType: "사용중", custCode: "S00005", custName: "국립갈비박물관", custType: "업무시설", startDate: "2026.01.01", endDate: "2026.12.31", days: "365", evictDate: "", maxDate: "2022.01.01", minDate: "", lastDate: "13644", result: "진나" },
    { num: "20", bizArea: "BA15", contractNo: "35020", seq: "9", contractType: "사용중", custCode: "S00005", custName: "국립갈비박물관", custType: "업무시설", startDate: "2026.01.01", endDate: "2026.04.01", days: "92", evictDate: "", maxDate: "2025.10.01", minDate: "", lastDate: "14915", result: "초론" },
    { num: "20", bizArea: "BA15", contractNo: "40522", seq: "1", contractType: "사용중", custCode: "S00005", custName: "국립갈비박물관", custType: "업무시설", startDate: "2026.01.01", endDate: "2026.12.31", days: "365", evictDate: "", maxDate: "", minDate: "", lastDate: "", result: "" },
  ];

  const headers = ["번호", "사업영역", "계약번호", "계약차수", "계약상태", "고객코드", "고객명", "상호구분·사용, 입찰구분·상용", "임대개시일", "임대종료일", "계약일수", "납도해지일", "최초대여시일", "대여시일", "사항이", "결과연장"];

  return (
    <div className="space-y-3">
      <h2 className="text-[14px] font-bold text-[#1e3a5f]">임대계약 명세서</h2>

      <div>
        <button
          onClick={() => setShowList((v) => !v)}
          className={`text-[12px] px-3 py-1.5 rounded border transition-colors ${
            showList
              ? "bg-[#1e3a5f] text-white border-[#1e3a5f]"
              : "bg-white text-[#1e3a5f] border-[#c8d8e8] hover:bg-[#eef3f9]"
          }`}
        >
          조회 실행
        </button>
      </div>

      {!showList ? (
        <div className="rounded border border-[#c8d8e8] bg-white p-4 space-y-3">
          <table className="text-[12px] border-collapse w-full max-w-xl">
            <tbody>
              <tr className="border-b border-[#f1f5f9]">
                <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b] w-36">회계연도</td>
                <td className="py-1.5 flex items-center gap-2">
                  <Input defaultValue="2026" className="h-7 w-20 border-[#d6e0ea] text-[12px]" />
                  <span className="text-[11px] text-[#94a3b8]">종료</span>
                  <Input className="h-7 w-20 border-[#d6e0ea] text-[12px]" />
                  <button className="border border-[#d6e0ea] bg-white px-1.5 py-1 text-[11px] text-[#475569] rounded">▲</button>
                </td>
              </tr>
              <tr className="border-b border-[#f1f5f9]">
                <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">사업영역</td>
                <td className="py-1.5 flex items-center gap-2">
                  <Input defaultValue="BA15" className="h-7 w-20 border-[#d6e0ea] text-[12px]" />
                  <span className="text-[11px] text-[#94a3b8]">종료</span>
                  <Input className="h-7 w-20 border-[#d6e0ea] text-[12px]" />
                  <button className="border border-[#d6e0ea] bg-white px-1.5 py-1 text-[11px] text-[#475569] rounded">▲</button>
                </td>
              </tr>
              <tr className="border-b border-[#f1f5f9]">
                <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">고객코드</td>
                <td className="py-1.5 flex items-center gap-2">
                  <Input className="h-7 w-28 border-[#d6e0ea] text-[12px]" />
                  <span className="text-[11px] text-[#94a3b8]">종료</span>
                  <Input className="h-7 w-28 border-[#d6e0ea] text-[12px]" />
                  <button className="border border-[#d6e0ea] bg-white px-1.5 py-1 text-[11px] text-[#475569] rounded">▲</button>
                </td>
              </tr>
              <tr className="border-b border-[#f1f5f9]">
                <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">계약번호</td>
                <td className="py-1.5 flex items-center gap-2">
                  <Input className="h-7 w-28 border-[#d6e0ea] text-[12px]" />
                  <span className="text-[11px] text-[#94a3b8]">종료</span>
                  <Input className="h-7 w-28 border-[#d6e0ea] text-[12px]" />
                  <button className="border border-[#d6e0ea] bg-white px-1.5 py-1 text-[11px] text-[#475569] rounded">▲</button>
                </td>
              </tr>
              <tr className="border-b border-[#f1f5f9]">
                <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">임대료구분</td>
                <td className="py-1.5">
                  <select className="h-7 border border-[#d6e0ea] rounded text-[12px] px-1">
                    <option value="">전체</option>
                  </select>
                </td>
              </tr>
              <tr className="border-b border-[#f1f5f9]">
                <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">계약상태</td>
                <td className="py-1.5 flex items-center gap-2">
                  <Input defaultValue="1" className="h-7 w-12 border-[#d6e0ea] text-[12px]" />
                  <span className="text-[11px] text-[#94a3b8]">종료</span>
                  <Input className="h-7 w-12 border-[#d6e0ea] text-[12px]" />
                  <button className="border border-[#d6e0ea] bg-white px-1.5 py-1 text-[11px] text-[#475569] rounded">▲</button>
                </td>
              </tr>
              <tr>
                <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">무상임대제외</td>
                <td className="py-1.5">
                  <input type="checkbox" id="free-check" className="w-4 h-4" />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="border border-[#d8e4ee] rounded p-3 space-y-1">
            <div className="flex items-center gap-2"><input type="checkbox" id="cb1" className="w-4 h-4" /><label htmlFor="cb1" className="text-[12px]">고객정보포함</label></div>
            <div className="flex items-center gap-2"><input type="checkbox" id="cb2" defaultChecked className="w-4 h-4" /><label htmlFor="cb2" className="text-[12px]">기타계약정보포함</label></div>
            <div className="flex items-center gap-2"><input type="checkbox" id="cb3" defaultChecked className="w-4 h-4" /><label htmlFor="cb3" className="text-[12px]">고지전송일실적포함</label></div>
            <div className="flex items-center gap-2"><input type="checkbox" id="cb4" className="w-4 h-4" /><label htmlFor="cb4" className="text-[12px]">비치점보함</label></div>
            <div className="flex items-center gap-2"><input type="checkbox" id="cb5" className="w-4 h-4" /><label htmlFor="cb5" className="text-[12px]">단기임대사용량소포함</label></div>
          </div>
        </div>
      ) : (
        <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
          <div className="overflow-x-auto" style={{ height: "640px", overflowY: "auto" }}>
            <table className="w-full text-[12px]">
              <thead>
                <tr className="sticky top-0 z-10">
                  {headers.map((h) => (
                    <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8fbff]"}>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.num}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.bizArea}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.contractNo}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.seq}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.contractType}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.custCode}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.custName}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.custType}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.startDate}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.endDate}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.days}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.evictDate}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.maxDate}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.minDate}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.lastDate}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
