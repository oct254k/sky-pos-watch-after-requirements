"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function ScrKac049() {
  const [showList, setShowList] = useState(false);

  const rows = [
    { year: "2026", bizArea: "BA15", custCode: "S09458", custName: "주식회사 성료트", bizType: "한국공사서비스", area: "17,713", areaType: "1,331,130", rentValue: "1,183,250", bizType2: "0", rentType: "2,514,380", rentType2: "2,514,380", totalRent: "2,514,380", totalDeposit: "0", deposit: "" },
    { year: "2026", bizArea: "BA15", custCode: "S09256", custName: "현대관리", bizType: "한국공사서비스", area: "17,648", areaType: "6,100", rentValue: "2,141,690", bizType2: "0", rentType: "2,147,790", rentType2: "0", totalRent: "2,147,790", totalDeposit: "0", deposit: "" },
    { year: "2026", bizArea: "BA15", custCode: "S08921", custName: "한국공항공사(주)", bizType: "한국공사서비스", area: "32,023", areaType: "0", rentValue: "13,383,212", bizType2: "0", rentType: "13,383,212", rentType2: "0", totalRent: "13,383,212", totalDeposit: "13,383,212", deposit: "132,493,790" },
    { year: "2026", bizArea: "BA15", custCode: "S08228", custName: "한국공항공사(주) 별정청원경찰", bizType: "한국공사서비스", area: "238,100", areaType: "22,200,923", rentValue: "13,383,212", bizType2: "0", rentType: "22,200,923", rentType2: "22,200,923", totalRent: "22,200,923", totalDeposit: "0", deposit: "219,799,130" },
    { year: "2026", bizArea: "BA15", custCode: "", custName: "아시아나항공(주)", bizType: "", area: "216", areaType: "0", rentValue: "85,970", bizType2: "0", rentType: "85,970", rentType2: "85,970", totalRent: "85,970", totalDeposit: "0", deposit: "851,090" },
    { year: "2026", bizArea: "BA15", custCode: "S08590", custName: "서울공항리무진", bizType: "국가기관", area: "5,600", areaType: "0", rentValue: "712,040", bizType2: "0", rentType: "712,040", rentType2: "0", totalRent: "712,040", totalDeposit: "712,040", deposit: "" },
    { year: "2026", bizArea: "BA15", custCode: "", custName: "에어레이아(주)", bizType: "지방공단", area: "4,492", areaType: "0", rentValue: "636,360", bizType2: "0", rentType: "636,360", rentType2: "636,360", totalRent: "636,360", totalDeposit: "0", deposit: "6,299,960" },
    { year: "2026", bizArea: "BA15", custCode: "S06844", custName: "다문화여성극단", bizType: "기타업", area: "8,390", areaType: "0", rentValue: "1,188,580", bizType2: "0", rentType: "527,570", rentType2: "527,570", totalRent: "527,570", totalDeposit: "0", deposit: "4,990,790" },
    { year: "2026", bizArea: "BA15", custCode: "", custName: "지오스토리(주)", bizType: "기타", area: "225,209", areaType: "20,079,932", rentValue: "1,188,580", bizType2: "0", rentType: "20,079,932", rentType2: "1,188,580", totalRent: "1,188,580", totalDeposit: "0", deposit: "11,766,940" },
    { year: "2026", bizArea: "BA15", custCode: "", custName: "(주)신라면세점", bizType: "관세청업", area: "25,311", areaType: "0", rentValue: "10,536,410", bizType2: "0", rentType: "10,536,410", rentType2: "10,536,410", totalRent: "10,536,410", totalDeposit: "20,079,932", deposit: "198,791,310" },
    { year: "2026", bizArea: "BA15", custCode: "S05630", custName: "(주)아모제푸드", bizType: "항공업", area: "64,800", areaType: "0", rentValue: "16,486,970", bizType2: "0", rentType: "16,486,970", rentType2: "16,486,970", totalRent: "16,486,970", totalDeposit: "0", deposit: "104,310,450" },
    { year: "2026", bizArea: "BA15", custCode: "S04444", custName: "㈜아울렛투게더몰", bizType: "항공업", area: "77,238", areaType: "0", rentValue: "4,129,160", bizType2: "0", rentType: "4,129,160", rentType2: "4,129,160", totalRent: "4,129,160", totalDeposit: "0", deposit: "133,650,000" },
    { year: "2026", bizArea: "BA15", custCode: "S00880", custName: "(주)롯데면세점", bizType: "항공업", area: "12,490", areaType: "0", rentValue: "2,193,580", bizType2: "0", rentType: "2,193,580", rentType2: "2,193,580", totalRent: "2,193,580", totalDeposit: "0", deposit: "40,878,670" },
    { year: "2026", bizArea: "BA15", custCode: "", custName: "(주)한국면세점", bizType: "항공업", area: "1,206,260", areaType: "0", rentValue: "192,454,820", bizType2: "0", rentType: "192,454,820", rentType2: "192,454,820", totalRent: "192,454,820", totalDeposit: "0", deposit: "9,925,490" },
    { year: "2026", bizArea: "BA15", custCode: "S00495", custName: "(주)하이에어", bizType: "항공업 기타판매업", area: "26,326", areaType: "0", rentValue: "4,505,590", bizType2: "0", rentType: "4,505,590", rentType2: "4,505,590", totalRent: "4,505,590", totalDeposit: "192,454,820", deposit: "228,553,910" },
    { year: "2026", bizArea: "BA15", custCode: "S88010", custName: "(주)제부로 일반", bizType: "항공업", area: "2,200", areaType: "0", rentValue: "1,596,000", bizType2: "0", rentType: "1,596,000", rentType2: "1,596,000", totalRent: "1,596,000", totalDeposit: "0", deposit: "44,665,340" },
    { year: "2026", bizArea: "BA15", custCode: "", custName: "인한공항진흥", bizType: "항공업", area: "132,595", areaType: "0", rentValue: "54,298,400", bizType2: "0", rentType: "54,298,400", rentType2: "54,298,400", totalRent: "54,298,400", totalDeposit: "0", deposit: "15,800,400" },
    { year: "2026", bizArea: "BA15", custCode: "S80143", custName: "(주)에이치공항비지니사(주)", bizType: "기타", area: "7,332", areaType: "0", rentValue: "1,006,950", bizType2: "0", rentType: "1,006,950", rentType2: "1,006,950", totalRent: "1,006,950", totalDeposit: "54,298,400", deposit: "22,615,953,270" },
    { year: "2026", bizArea: "BA15", custCode: "", custName: "메씩에이아이공인(주)", bizType: "기타", area: "44,300", areaType: "0", rentValue: "250,310", bizType2: "0", rentType: "250,310", rentType2: "250,310", totalRent: "250,310", totalDeposit: "0", deposit: "9,968,800" },
    { year: "2026", bizArea: "BA15", custCode: "", custName: "주식회사(주) 한국(기계)", bizType: "기타", area: "279,574", areaType: "0", rentValue: "61,468,210", bizType2: "0", rentType: "61,468,210", rentType2: "61,468,210", totalRent: "61,468,210", totalDeposit: "0", deposit: "608,528,250" },
    { year: "2026", bizArea: "BA15", custCode: "", custName: "㈜오일한국사(주)", bizType: "항공업", area: "9,070", areaType: "0", rentValue: "3,820,890", bizType2: "0", rentType: "3,820,890", rentType2: "3,820,890", totalRent: "3,820,890", totalDeposit: "0", deposit: "37,826,610" },
    { year: "2026", bizArea: "BA15", custCode: "", custName: "㈜한국교육체육공사(서)", bizType: "항공업", area: "9,674", areaType: "2,192,108", rentValue: "5,704,574", bizType2: "0", rentType: "34,447,940", rentType2: "34,447,940", totalRent: "34,447,940", totalDeposit: "34,447,940", deposit: "" },
    { year: "2026", bizArea: "BA15", custCode: "", custName: "㈜ 항공성", bizType: "항공업", area: "14,224", areaType: "0", rentValue: "5,343,360", bizType2: "0", rentType: "5,343,360", rentType2: "5,343,360", totalRent: "5,343,360", totalDeposit: "7,896,682", deposit: "52,899,260" },
    { year: "2026", bizArea: "BA15", custCode: "", custName: "㈜하나에어서비스", bizType: "항공업", area: "800", areaType: "1,280,010", rentValue: "239,413,200", bizType2: "276,570", rentType: "240,969,780", rentType2: "240,969,780", totalRent: "240,969,780", totalDeposit: "0", deposit: "2,369,795,970" },
    { year: "2026", bizArea: "BA15", custCode: "S71131", custName: "(주)아이에스서비스", bizType: "기타공단", area: "4,195", areaType: "0", rentValue: "594,290", bizType2: "0", rentType: "10,847,220", rentType2: "10,847,220", totalRent: "10,847,220", totalDeposit: "0", deposit: "94,148,900" },
    { year: "2026", bizArea: "BA15", custCode: "S71130", custName: "(주)건양이앤씨", bizType: "기타", area: "4,760", areaType: "0", rentValue: "1,271,880", bizType2: "0", rentType: "594,290", rentType2: "594,290", totalRent: "594,290", totalDeposit: "0", deposit: "5,881,470" },
    { year: "2026", bizArea: "BA15", custCode: "S26310", custName: "㈜한빛에너지", bizType: "기타", area: "9,141", areaType: "0", rentValue: "1,357,150", bizType2: "0", rentType: "1,271,880", rentType2: "1,271,880", totalRent: "1,271,880", totalDeposit: "594,290", deposit: "594,290" },
    { year: "2026", bizArea: "BA15", custCode: "", custName: "㈜한라에어서비스", bizType: "기타", area: "34,591", areaType: "0", rentValue: "274,140", bizType2: "0", rentType: "1,357,150", rentType2: "1,357,150", totalRent: "1,357,150", totalDeposit: "0", deposit: "13,435,970" },
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-[14px] font-bold text-[#1e3a5f]">임대계약총괄표(고객코드 기준) 년월:2026.05</h2>

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
          <div className="text-[12px] font-semibold text-[#1e3a5f] border-b border-[#d8e4ee] pb-1">입력조건</div>
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
                <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">년월</td>
                <td className="py-1.5 flex items-center gap-2">
                  <Input defaultValue="2026.05" className="h-7 w-24 border-[#d6e0ea] text-[12px]" />
                  <span className="text-[11px] text-[#94a3b8]">종료</span>
                  <Input className="h-7 w-24 border-[#d6e0ea] text-[12px]" />
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
            </tbody>
          </table>
          <div className="border border-[#d8e4ee] rounded p-2 space-y-1">
            <div className="text-[12px] font-semibold text-[#1e3a5f] mb-1">추가정보</div>
            <div className="flex items-center gap-2"><input type="checkbox" id="cb-contact" className="w-4 h-4" /><label htmlFor="cb-contact" className="text-[12px]">연락정보 포함</label></div>
            <div className="flex items-center gap-2"><input type="checkbox" id="cb-send" defaultChecked className="w-4 h-4" /><label htmlFor="cb-send" className="text-[12px]">고객전송및실적포함</label></div>
          </div>
        </div>
      ) : (
        <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
          <div className="overflow-x-auto" style={{ height: "640px", overflowY: "auto" }}>
            <table className="w-full text-[12px]">
              <thead>
                <tr className="sticky top-0 z-10">
                  {["년도", "사업영역", "고객코드", "고객명", "업종명", "면적계", "초대임대계", "공시율대계", "부매시대계", "임대료", "구내성대계", "임대료 계", "구내업방대계", "총판방대계", "임보관역", "입보관금", "입보관금액계"].map((h) => (
                    <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8fbff]"}>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.year}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.bizArea}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.custCode}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.custName}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.bizType}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.area}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.areaType}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.rentValue}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.bizType2}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.rentType}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.rentType2}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.totalRent}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.totalDeposit}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.deposit}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right"></td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right"></td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right"></td>
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
