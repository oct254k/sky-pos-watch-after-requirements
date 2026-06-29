export default function ScrKac055() {
  const rows = [
    { bizArea: "BA15", custCode: "S12337", custName: "(주)의류에연계비즈니스플로", contractNo: "30844", seq: "1", companyName: "(주)의류에연계비즈니스플로", startDate: "2017.05.13", endDate: "2021.05.17", year: "2017", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S12337", custName: "(주)의류에연계비즈니스플로", contractNo: "30844", seq: "1", companyName: "(주)의류에연계비즈니스플로", startDate: "2017.05.13", endDate: "2021.05.17", year: "2018", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S12337", custName: "주식회사 비치에그라대 김포공항", contractNo: "27880", seq: "1", companyName: "주식회사 비치에그라대 김포공항", startDate: "2014.11.08", endDate: "2015.11.07", year: "2014", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S12337", custName: "주식회사 비치에그라대 김포공항", contractNo: "27880", seq: "1", companyName: "주식회사 비치에그라대 김포공항", startDate: "2014.11.08", endDate: "2015.11.07", year: "2015", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S12990", custName: "(주)롯데관광", contractNo: "30800", seq: "1", companyName: "(주)롯데관광", startDate: "2017.06.01", endDate: "2022.05.31", year: "2017", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S12990", custName: "(주)롯데관광", contractNo: "30800", seq: "1", companyName: "(주)롯데관광", startDate: "2017.06.01", endDate: "2022.05.31", year: "2018", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S12990", custName: "(주)롯데관광", contractNo: "30800", seq: "1", companyName: "(주)롯데관광", startDate: "2017.06.01", endDate: "2022.05.31", year: "2023", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S15610", custName: "기한국(주식회사)", contractNo: "30800", seq: "1", companyName: "기한국(주식회사)", startDate: "2017.06.01", endDate: "2027.05.31", year: "2017", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S15610", custName: "기한국(주식회사)", contractNo: "30800", seq: "1", companyName: "기한국(주식회사)", startDate: "2017.06.01", endDate: "2027.05.31", year: "2018", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S15610", custName: "기한국(주)(사천시)", contractNo: "30800", seq: "1", companyName: "기한국(주)(사천시)", startDate: "2017.06.01", endDate: "2022.05.31", year: "2019", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S15610", custName: "기한국(이론)", contractNo: "30800", seq: "1", companyName: "기한국(이론)", startDate: "2017.06.01", endDate: "2022.05.31", year: "2020", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S15610", custName: "기한국(이론)", contractNo: "30800", seq: "1", companyName: "기한국(이론)", startDate: "2017.06.01", endDate: "2022.05.31", year: "2021", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S15610", custName: "기한국(이론)", contractNo: "30800", seq: "1", companyName: "기한국(이론)", startDate: "2017.06.01", endDate: "2027.05.31", year: "2022", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S15610", custName: "기한국(주)(사천시)", contractNo: "30800", seq: "1", companyName: "기한국(주)(사천시)", startDate: "2017.06.01", endDate: "2027.05.31", year: "2023", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S15610", custName: "기한국(이론)", contractNo: "30800", seq: "1", companyName: "기한국(이론)", startDate: "2017.06.01", endDate: "2027.05.31", year: "2024", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S15610", custName: "기한국(이론)", contractNo: "30800", seq: "1", companyName: "기한국(이론)", startDate: "2017.06.01", endDate: "2027.05.31", year: "2025", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S15610", custName: "기한국(이론)", contractNo: "30800", seq: "1", companyName: "기한국(이론)", startDate: "2017.06.01", endDate: "2027.05.31", year: "2026", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S20973", custName: "(주)호텔에어리(이)", contractNo: "28395", seq: "1", companyName: "(주)호텔에어리(이)", startDate: "2015.07.01", endDate: "2018.11.30", year: "2015", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S20973", custName: "(주)호텔에어리(이)", contractNo: "28395", seq: "1", companyName: "(주)호텔에어리(이)", startDate: "2015.07.01", endDate: "2018.11.30", year: "2016", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S20973", custName: "(주)호텔에어리(이)", contractNo: "28395", seq: "1", companyName: "(주)호텔에어리(이)", startDate: "2015.07.01", endDate: "2018.11.30", year: "2017", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S20973", custName: "(주)호텔에어리(이)", contractNo: "28395", seq: "1", companyName: "(주)호텔에어리(이)", startDate: "2015.07.01", endDate: "2018.11.30", year: "2018", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S20973", custName: "(주)호텔에어리(이)", contractNo: "33996", seq: "1", companyName: "(주)호텔에어리(이)", startDate: "2019.12.01", endDate: "2023.11.30", year: "2021", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S20973", custName: "롯데지엘에스(롯데리아, 국내)", contractNo: "33996", seq: "1", companyName: "롯데지엘에스(롯데리아, 국내)", startDate: "2019.12.01", endDate: "2028.11.30", year: "2020", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S20973", custName: "롯데지엘에스(롯데리아, 국내)", contractNo: "33996", seq: "1", companyName: "롯데지엘에스(롯데리아, 국내)", startDate: "2019.12.01", endDate: "2028.11.30", year: "2022", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S20973", custName: "롯데지엘에스 1호", contractNo: "33996", seq: "1", companyName: "롯데지엘에스 1호", startDate: "2022.12.01", endDate: "2028.11.30", year: "2023", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S20973", custName: "롯데지엘에스(롯데리아, 국내)", contractNo: "33996", seq: "1", companyName: "롯데지엘에스(롯데리아, 국내)", startDate: "2019.12.01", endDate: "2028.11.30", year: "2024", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S26431", custName: "국제공항항국(국제)", contractNo: "33287", seq: "1", companyName: "국제공항항국(국제)", startDate: "2019.04.11", endDate: "2022.04.10", year: "2019", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S26431", custName: "국제공항항국(국제)", contractNo: "33287", seq: "1", companyName: "국제공항항국(국제)", startDate: "2019.04.11", endDate: "2022.04.10", year: "2020", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S26431", custName: "국제공항항국(국제)", contractNo: "33287", seq: "1", companyName: "국제공항항국(국제)", startDate: "2019.04.11", endDate: "2022.04.10", year: "2021", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S26431", custName: "국제공항항국", contractNo: "33287", seq: "1", companyName: "국제공항항국", startDate: "2019.04.11", endDate: "2022.04.10", year: "2022", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S26431", custName: "국제공항항국(국제)", contractNo: "33287", seq: "1", companyName: "국제공항항국(국제)", startDate: "2019.04.11", endDate: "2024.04.13", year: "2023", totalScore: "0.00" },
    { bizArea: "BA15", custCode: "S26431", custName: "국제공항항국(국제)", contractNo: "33287", seq: "1", companyName: "국제공항항국(국제)", startDate: "2019.04.11", endDate: "2024.04.13", year: "2026", totalScore: "0.00" },
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-[14px] font-bold text-[#1e3a5f]">종합평가점수 등록 및 조회</h2>

      <div className="flex gap-2 mb-2">
        <button className="bg-[#1e3a5f] text-white text-[12px] px-3 py-1.5 rounded hover:bg-[#162e4d]">저장</button>
        <button className="border border-[#c8d8e8] bg-white text-[12px] px-3 py-1.5 rounded hover:bg-[#f0f4f8] text-[#475569]">조회~변경</button>
      </div>

      <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <div style={{ height: "640px" }} className="overflow-y-auto">
            <table className="w-full text-[12px] border-collapse">
              <thead className="sticky top-0 z-10">
                <tr>
                  {["행", "사업영역", "고객코드", "고객명", "계약번호", "순번", "상호명", "임대개시일", "임대종료일", "년도", "종합평가점수"].map((h) => (
                    <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8fbff]"}>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{i + 1}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.bizArea}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.custCode}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.custName}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.contractNo}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.seq}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.companyName}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.startDate}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.endDate}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.year}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.totalScore}</td>
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
