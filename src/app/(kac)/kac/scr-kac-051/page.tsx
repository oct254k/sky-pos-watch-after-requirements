export default function ScrKac051() {
  const leftRows = [
    { company: "KAC1", siteCode: "한국공항공사", custCode: "L11041", custName: "주식회사 케이이름 1", contractNo: "34894", seq: "1", num: "1", type: "신규 임대수" },
    { company: "KAC1", siteCode: "한국공항공사", custCode: "L40007", custName: "(주)에이미디어", contractNo: "28661", seq: "1", num: "1", type: "신규 임대수" },
    { company: "KAC1", siteCode: "한국공항공사", custCode: "L40007", custName: "(주)에이미디어", contractNo: "28661", seq: "2", num: "1", type: "신규 임대수" },
    { company: "KAC1", siteCode: "한국공항공사", custCode: "L40007", custName: "(주)에이미디어", contractNo: "28661", seq: "3", num: "1", type: "신규 임대수" },
    { company: "KAC1", siteCode: "한국공항공사", custCode: "L40007", custName: "(주)에이미디어", contractNo: "28661", seq: "4", num: "1", type: "신규 임대수" },
  ];

  const rightRows = [
    { company: "KAC1", site: "한국공항공사", bizArea: "BA02", bizName: "김해공항", year: "2026", period: "5", glAccount: "216910", gl: "예수보증금-임대보증금", amount: "78.9" },
    { company: "KAC1", site: "한국공항공사", bizArea: "BA02", bizName: "김해공항", year: "2026", period: "5", glAccount: "", gl: "", amount: "37,1" },
    { company: "KAC1", site: "한국공항공사", bizArea: "DA6", bizName: "대구공항", year: "2026", period: "5", glAccount: "", gl: "", amount: "1,3" },
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-[14px] font-bold text-[#1e3a5f]">FI 임대보증금(국내/국제) 조회</h2>

      <div className="flex gap-2 mb-2">
        <button className="bg-[#1e3a5f] text-white text-[12px] px-3 py-1.5 rounded hover:bg-[#162e4d]">전체</button>
      </div>

      <div className="rounded border border-[#c8d8e8] bg-white p-3 space-y-1 text-[12px] text-[#475569]">
        <div>회사코드: KAC1 한국공항공사</div>
        <div>회계 연도도: 2026</div>
        <div>회계기간: 05</div>
        <div>위치분류: 전체</div>
        <div>사업영역: 전체</div>
        <div>원장선택: 중계정원장</div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
          <div className="bg-[#eef3f9] px-3 py-1.5 text-[12px] font-semibold text-[#1e3a5f]">임대보증금 – 총:2332 건</div>
          <div className="overflow-x-auto">
            <table className="w-full text-[12px]">
              <thead>
                <tr>
                  {["회사코드", "사업명칭", "고객코드", "고객명", "계약번호", "연료타입번호", "보증금유형", "보증금유형명"].map((h) => (
                    <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leftRows.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8fbff]"}>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.company}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.siteCode}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.custCode}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.custName}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.contractNo}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.seq}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.num}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
          <div className="bg-[#eef3f9] px-3 py-1.5 text-[12px] font-semibold text-[#1e3a5f]">예수보증금계정-총:43 건</div>
          <div className="overflow-x-auto">
            <table className="w-full text-[12px]">
              <thead>
                <tr>
                  {["회사코드", "회사명", "사업영역", "사업영역명", "회계연도", "회계기간", "GL계정", "GL계정명", "통화", "금액"].map((h) => (
                    <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rightRows.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8fbff]"}>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.company}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.site}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.bizArea}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.bizName}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.year}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.period}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.glAccount}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.gl}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">KRW</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.amount}</td>
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
