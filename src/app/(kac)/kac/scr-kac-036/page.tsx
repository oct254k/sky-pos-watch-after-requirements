export default function ScrKac036() {
  const rows = [
    { company: "KAC1", year: "2026", bizArea: "BA15", custCode: "S42845", contractNo: "35399", seq: "4", num: "1", repItem: "X", detail: "쇼프로숑 및 부대시설", area: "8,285.42", unitRent: "0", startDate: "2026.01.01", endDate: "2026.01.01", count: "1", periodRent: "10,371,450", yearRent: "3,858,182,170", monthRent: "321,515,180", deposit: "", calcDeposit: "3,041,509,284", state: "6", type: "중도해지", usage: "2" },
    { company: "KAC1", year: "2026", bizArea: "BA15", custCode: "S41023", contractNo: "39829", seq: "2", num: "1", repItem: "", detail: "사무실", area: "24.00", unitRent: "220,000", startDate: "2026.01.01", endDate: "2026.01.01", count: "1", periodRent: "14,190", yearRent: "5,280,000", monthRent: "440,000", deposit: "", calcDeposit: "4,356,000", state: "6", type: "중도해지", usage: "2" },
    { company: "KAC1", year: "2026", bizArea: "BA15", custCode: "S41023", contractNo: "40077", seq: "2", num: "1", repItem: "", detail: "금류자주차장(대형2대)", area: "137.50", unitRent: "129,080", startDate: "2026.01.01", endDate: "2026.01.01", count: "1", periodRent: "47,710", yearRent: "17,748,480", monthRent: "1,479,040", deposit: "", calcDeposit: "14,642,490", state: "6", type: "중도해지", usage: "2" },
    { company: "KAC1", year: "2026", bizArea: "BA15", custCode: "S41023", contractNo: "40184", seq: "2", num: "1", repItem: "", detail: "금류자주차장(소형1대)", area: "55.00", unitRent: "129,080", startDate: "2026.01.01", endDate: "2026.01.01", count: "1", periodRent: "19,080", yearRent: "7,099,320", monthRent: "591,610", deposit: "", calcDeposit: "5,856,930", state: "6", type: "중도해지", usage: "2" },
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-[14px] font-bold text-[#1e3a5f]">임대계약별 중도해지 현황</h2>

      <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr>
                {["회사코드", "년도", "사업영역", "고객코드", "계약번호", "계약차수", "순번", "대표물건여부", "사용목적", "면적", "단기", "산정기간시작", "산정기간종료", "산정일수", "기간임대료", "연간임대료", "월간임대료", "임대보증금면제여부*", "임대보증금자동계산*", "전대 구분", "계약상태", "사용("].map((h) => (
                  <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5 whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8fbff]"}>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.company}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.year}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.bizArea}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.custCode}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.contractNo}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.seq}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.num}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.repItem}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.detail}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.area}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.unitRent}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.startDate}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.endDate}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.count}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.periodRent}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.yearRent}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.monthRent}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center"></td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.calcDeposit}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.state}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.type}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
