"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function ScrKac048() {
  const [showList, setShowList] = useState(false);

  const rows = [
    { bizArea: "BA15", custCode: "5000", contractNo: "18", contractType: "한계약", custType: "국가기관", custCode2: "S00210", custName: "김포공항물류(공항)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", lastDate: "12874", result: "운한은" },
    { bizArea: "BA15", custCode: "5000", contractNo: "18", contractType: "한계약", custType: "국가기관", custCode2: "S00210", custName: "김포공항물류(공항)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", lastDate: "12874", result: "운한은" },
    { bizArea: "BA15", custCode: "5000", contractNo: "18", contractType: "한계약", custType: "국가기관", custCode2: "S00210", custName: "김포공항물류(공항)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", lastDate: "12874", result: "운한은" },
    { bizArea: "BA15", custCode: "5000", contractNo: "18", contractType: "한계약", custType: "국가기관", custCode2: "S00210", custName: "김포공항물류(공항)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", lastDate: "12874", result: "운한은" },
    { bizArea: "BA15", custCode: "5000", contractNo: "18", contractType: "한계약", custType: "국가기관", custCode2: "S00210", custName: "김포공항물류(공항)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", lastDate: "12874", result: "운한은" },
    { bizArea: "BA15", custCode: "5000", contractNo: "18", contractType: "한계약", custType: "국가기관", custCode2: "S00210", custName: "김포공항물류(공항)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", lastDate: "12874", result: "운한은" },
    { bizArea: "BA15", custCode: "5000", contractNo: "18", contractType: "한계약", custType: "국가기관", custCode2: "S00210", custName: "김포공항물류(공항)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", lastDate: "12874", result: "운한은" },
    { bizArea: "BA15", custCode: "5000", contractNo: "18", contractType: "한계약", custType: "국가기관", custCode2: "S00210", custName: "김포공항물류(공항)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", lastDate: "12874", result: "운한은" },
    { bizArea: "BA15", custCode: "5000", contractNo: "18", contractType: "한계약", custType: "국가기관", custCode2: "S00210", custName: "김포공항물류(공항)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", lastDate: "12874", result: "운한은" },
    { bizArea: "BA15", custCode: "5000", contractNo: "18", contractType: "한계약", custType: "국가기관", custCode2: "S00210", custName: "김포공항물류(공항)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", lastDate: "12874", result: "운한은" },
    { bizArea: "BA15", custCode: "5000", contractNo: "18", contractType: "한계약", custType: "국가기관", custCode2: "S00210", custName: "김포공항물류(공항)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", lastDate: "12874", result: "운한은" },
    { bizArea: "BA15", custCode: "5000", contractNo: "18", contractType: "한계약", custType: "국가기관", custCode2: "S00210", custName: "김포공항물류(공항)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", lastDate: "12874", result: "운한은" },
    { bizArea: "BA15", custCode: "5000", contractNo: "18", contractType: "한계약", custType: "국가기관", custCode2: "S00210", custName: "김포공항물류(공항)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", lastDate: "12874", result: "운한은" },
    { bizArea: "BA15", custCode: "5000", contractNo: "18", contractType: "한계약", custType: "국가기관", custCode2: "S00210", custName: "김포공항물류(공항)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", lastDate: "12874", result: "운한은" },
    { bizArea: "BA15", custCode: "5000", contractNo: "18", contractType: "한계약", custType: "국가기관", custCode2: "S00210", custName: "김포공항물류(공항)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", lastDate: "12874", result: "운한은" },
    { bizArea: "BA15", custCode: "5042", contractNo: "13", contractType: "한계약", custType: "국가기관", custCode2: "S00251", custName: "서울전파관리소(공항)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", lastDate: "12874", result: "운한은" },
    { bizArea: "BA15", custCode: "5042", contractNo: "13", contractType: "한계약", custType: "국가기관", custCode2: "S00251", custName: "서울전파관리소(공항)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", lastDate: "12874", result: "운한은" },
    { bizArea: "BA15", custCode: "5042", contractNo: "13", contractType: "한계약", custType: "국가기관", custCode2: "S00251", custName: "서울전파관리소(공항)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", lastDate: "12874", result: "운한은" },
    { bizArea: "BA15", custCode: "5042", contractNo: "13", contractType: "한계약", custType: "국가기관", custCode2: "S00251", custName: "서울전파관리소(공항)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", lastDate: "12874", result: "운한은" },
    { bizArea: "BA15", custCode: "5042", contractNo: "13", contractType: "한계약", custType: "국가기관", custCode2: "S00251", custName: "서울전파관리소(공항)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", lastDate: "12874", result: "운한은" },
    { bizArea: "BA15", custCode: "5042", contractNo: "13", contractType: "한계약", custType: "국가기관", custCode2: "S00251", custName: "서울전파관리소(공항)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", lastDate: "12874", result: "운한은" },
    { bizArea: "BA15", custCode: "5080", contractNo: "15", contractType: "한계약", custType: "국가기관", custCode2: "S00330", custName: "국립검역원(공항)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", lastDate: "13081", result: "이정" },
    { bizArea: "BA15", custCode: "5080", contractNo: "15", contractType: "한계약", custType: "국가기관", custCode2: "S00330", custName: "국립검역원(공항)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", lastDate: "12874", result: "운한은" },
    { bizArea: "BA15", custCode: "5100", contractNo: "14", contractType: "한계약", custType: "국가기관", custCode2: "S00330", custName: "국립검역원(공항)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", lastDate: "13081", result: "이정" },
    { bizArea: "BA15", custCode: "5125", contractNo: "16", contractType: "1차년도", custType: "국가기관", custCode2: "S00089", custName: "서울전파관리소", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", lastDate: "13081", result: "이정" },
    { bizArea: "BA15", custCode: "5210", contractNo: "12", contractType: "한계약", custType: "국가기관", custCode2: "S00630", custName: "서울특별시(공항)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", lastDate: "13081", result: "이정" },
    { bizArea: "BA15", custCode: "", contractNo: "", contractType: "한계약", custType: "국가기관", custCode2: "S01100", custName: "서울특별시(공항)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", lastDate: "13081", result: "이정" },
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-[14px] font-bold text-[#1e3a5f]">임대계약총괄표(계약순번-임대물건기준)</h2>

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

      {!showList ? (
        <div className="rounded border border-[#c8d8e8] bg-white p-4 space-y-3">
          <table className="text-[12px] border-collapse w-full max-w-xl">
            <tbody>
              <tr className="border-b border-[#f1f5f9]">
                <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b] w-36">회사코드</td>
                <td className="py-1.5 flex items-center gap-2">
                  <Input defaultValue="KAC1" className="h-7 w-20 border-[#d6e0ea] text-[12px]" />
                  <span className="text-[12px] text-[#475569]">한국공항공사</span>
                </td>
              </tr>
              <tr className="border-b border-[#f1f5f9]">
                <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">년도</td>
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
              {["고객코드", "계약번호", "업종"].map((label) => (
                <tr key={label} className="border-b border-[#f1f5f9]">
                  <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">{label}</td>
                  <td className="py-1.5 flex items-center gap-2">
                    <Input className="h-7 w-28 border-[#d6e0ea] text-[12px]" />
                    <span className="text-[11px] text-[#94a3b8]">종료</span>
                    <Input className="h-7 w-28 border-[#d6e0ea] text-[12px]" />
                    <button className="border border-[#d6e0ea] bg-white px-1.5 py-1 text-[11px] text-[#475569] rounded">▲</button>
                  </td>
                </tr>
              ))}
              {["위치분류1", "위치분류2", "위치분류3", "위치분류4", "위치분류5"].map((label) => (
                <tr key={label} className="border-b border-[#f1f5f9]">
                  <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">{label}</td>
                  <td className="py-1.5 flex items-center gap-2">
                    <Input className="h-7 w-20 border-[#d6e0ea] text-[12px]" />
                    <span className="text-[11px] text-[#94a3b8]">종료</span>
                    <Input className="h-7 w-20 border-[#d6e0ea] text-[12px]" />
                    <button className="border border-[#d6e0ea] bg-white px-1.5 py-1 text-[11px] text-[#475569] rounded">▲</button>
                  </td>
                </tr>
              ))}
              {["임대료구분", "계약상태", "임대룡도", "임대로산정"].map((label) => (
                <tr key={label} className="border-b border-[#f1f5f9]">
                  <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">{label}</td>
                  <td className="py-1.5">
                    <select className="h-7 border border-[#d6e0ea] rounded text-[12px] px-1 w-32">
                      <option value="">전체</option>
                    </select>
                  </td>
                </tr>
              ))}
              <tr className="border-b border-[#f1f5f9]">
                <td colSpan={2} className="py-1.5 space-x-4">
                  <span className="inline-flex items-center gap-1"><input type="checkbox" id="new-check" className="w-4 h-4" /><label htmlFor="new-check" className="text-[12px]">신규계약만 조회</label></span>
                  <span className="inline-flex items-center gap-1"><input type="checkbox" id="free-check" className="w-4 h-4" /><label htmlFor="free-check" className="text-[12px]">무상임대제외</label></span>
                  <span className="inline-flex items-center gap-1"><input type="checkbox" id="current-check" defaultChecked className="w-4 h-4" /><label htmlFor="current-check" className="text-[12px]">현재 사용중인 조회</label></span>
                </td>
              </tr>
              <tr className="border-b border-[#f1f5f9]">
                <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">우선조회구분</td>
                <td className="py-1.5 flex items-center gap-4">
                  <label className="flex items-center gap-1 text-[12px]"><input type="radio" name="priority" defaultChecked /> 원장우선</label>
                  <label className="flex items-center gap-1 text-[12px]"><input type="radio" name="priority" /> 계약상세우선</label>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="border border-[#d8e4ee] rounded p-2">
            <div className="text-[12px] font-semibold text-[#1e3a5f] mb-1">추가정보</div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="extra-check" className="w-4 h-4" />
              <label htmlFor="extra-check" className="text-[12px]">임대료 구분이 무단, 기타, 변동, 구내, 임시사용인경우 리스트에 추가</label>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
          <div className="overflow-x-auto">
            <div style={{ height: "640px", overflowY: "auto" }}>
              <table className="w-full text-[12px]">
                <thead className="sticky top-0 z-10">
                  <tr>
                    {["사업영역", "계약번호", "계약차수", "년도구분", "업종", "고객코드", "고객명", "업무구분·사용, 임달구분", "임대개시일", "임대종료일", "계약일수", "납도해지일", "대여시일", "최초대여", "균도해지일", "임대사항이", "결과연장", "전자계약대"].map((h) => (
                      <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5 whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8fbff]"}>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.bizArea}</td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.custCode}</td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.contractNo}</td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.contractType}</td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.custType}</td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.custCode2}</td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.custName}</td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.rentType}</td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.startDate}</td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.endDate}</td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.days}</td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center"></td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center"></td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center"></td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center"></td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.lastDate}</td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.result}</td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
