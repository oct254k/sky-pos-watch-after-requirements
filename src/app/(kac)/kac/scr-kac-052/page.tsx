export default function ScrKac052() {
  const leftRows = [
    { date: "2026.01.01", logType: "49 토지임대료", rentType: "토지임대료", custCode: "B10035", custName: "(주)대한항공", acct: "A01A", rentName: "토지임대료" },
    { date: "2026.01.01", logType: "50 토지임대료", rentType: "토지임대료", custCode: "B10340", custName: "(주)제주항공", acct: "A01A", rentName: "토지임대료" },
    { date: "2026.01.01", logType: "51 토지임대료", rentType: "토지임대료", custCode: "B10340", custName: "(주)아어", acct: "A01A", rentName: "토지임대료" },
    { date: "2026.01.01", logType: "52 토지임대료", rentType: "토지임대료", custCode: "B40619", custName: "아머나에아트(주)", acct: "A01A", rentName: "토지임대료" },
    { date: "2026.01.01", logType: "57 토지임대료", rentType: "토지임대료", custCode: "B10681", custName: "에어부나(주)공항서비스 부산지점", acct: "A01A", rentName: "토지임대료" },
  ];

  const rightRows = [
    { company: "KAC1", site: "한국공항공사", gl: "411110", glName: "운영계적부(김해)", custCode: "B10035", totalCount: "" },
    { company: "KAC1", site: "한국공항공사", gl: "411110", glName: "운영계적부(김해)", custCode: "B40619", totalCount: "" },
    { company: "KAC1", site: "한국공항공사", gl: "411110", glName: "운영계적부(김해)", custCode: "B40322", totalCount: "" },
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-[14px] font-bold text-[#1e3a5f]">FI 임대수익(국내/국제) 조회</h2>

      <div className="flex gap-2 mb-2">
        <button className="bg-[#1e3a5f] text-white text-[12px] px-3 py-1.5 rounded hover:bg-[#162e4d]">배포</button>
      </div>

      <div className="rounded border border-[#c8d8e8] bg-white p-3 space-y-1 text-[12px] text-[#475569]">
        <div>회사코드: KAC1 한국공항공사</div>
        <div>회계 연도도: 2026</div>
        <div>위치분류: 전체</div>
        <div>계정목록: 임대 전체</div>
        <div>고객코드: 전체</div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
          <div className="bg-[#eef3f9] px-3 py-1.5 text-[12px] font-semibold text-[#1e3a5f]">실기준 임대-총:3646 건</div>
          <div className="overflow-x-auto">
            <table className="w-full text-[12px]">
              <thead>
                <tr>
                  {["발생일자", "고거번호", "사용로형", "고객코드", "고객명", "수익계정코드", "수익계정코드명"].map((h) => (
                    <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leftRows.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8fbff]"}>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.date}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.logType}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.rentType}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.custCode}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.custName}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.acct}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.rentName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
          <div className="bg-[#eef3f9] px-3 py-1.5 text-[12px] font-semibold text-[#1e3a5f]">전표내역-총:4769 건</div>
          <div className="overflow-x-auto">
            <table className="w-full text-[12px]">
              <thead>
                <tr>
                  {["회사코드", "회사명", "GL계정", "GL계정명", "사업영역", "사업업역명", "코스트센터", "코스트센터명", "손익센터명", "고객"].map((h) => (
                    <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rightRows.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8fbff]"}>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.company}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.site}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.gl}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.glName}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">BA02</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">김해공항</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">321010</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">운영계적부(김해)</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.custCode}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.custCode}</td>
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
