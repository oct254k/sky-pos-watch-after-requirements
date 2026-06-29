export default function ScrKac042() {
  const rows = [
    { custCode: "S12540", custName: "824에너지 주식회사", bizType: "식료음업", contractType: "한계약", contractNo: "32752", seq: "4", rentType: "상업시설", contractState: "", startDate: "2022.06.29", endDate: "2026.06.28", assetNo: "001 11000350", assetName: "김포공항 국제선청사(구)2청사)", assetType: "건물" },
    { custCode: "S15610", custName: "기타박력(주식회사)", bizType: "식료음업", contractType: "한계약", contractNo: "32809", seq: "4", rentType: "상업시설", contractState: "기본박력", startDate: "2017.06.01", endDate: "2027.05.31", assetNo: "001 11000354", assetName: "구최탈착점금소", assetType: "건물" },
    { custCode: "S17030", custName: "한국음향(주)", bizType: "식료음업", contractType: "한계약", contractNo: "", seq: "", rentType: "상업시설", contractState: "", startDate: "2020.02.16", endDate: "", assetNo: "", assetName: "", assetType: "건물" },
    { custCode: "S20973", custName: "롯데리아엑세스(편의점아, 국내)", bizType: "식료음업", contractType: "한계약", contractNo: "32996", seq: "3", rentType: "상업시설", contractState: "롯대리아", startDate: "2019.12.01", endDate: "2028.11.30", assetNo: "001 11000349", assetName: "김포공항 국제선청사(구)1청사)", assetType: "건물" },
    { custCode: "S25091", custName: "(주)신한은행 김포공항지점", bizType: "금융업", contractType: "한계약", contractNo: "33205", seq: "2", rentType: "상업시설", contractState: "", startDate: "2019.02.01", endDate: "2029.01.31", assetNo: "001 11000356", assetName: "구화물청사", assetType: "건물" },
    { custCode: "S25091", custName: "(주)신한은행 김포공항지점", bizType: "금융업", contractType: "한계약", contractNo: "33205", seq: "2", rentType: "상업시설", contractState: "", startDate: "2019.02.01", endDate: "2029.01.31", assetNo: "002 11000350", assetName: "김포공항 국제선청사(구)2청사)", assetType: "건물" },
    { custCode: "S25091", custName: "(주)신한은행 김포공항지점", bizType: "금융업", contractType: "한계약", contractNo: "33205", seq: "2", rentType: "상업시설", contractState: "", startDate: "2019.02.01", endDate: "2029.01.31", assetNo: "003 11000350", assetName: "김포공항 국제선청사(구)2청사)", assetType: "건물" },
    { custCode: "S25091", custName: "(주)신한은행 김포공항지점", bizType: "금융업", contractType: "한계약", contractNo: "33205", seq: "2", rentType: "상업시설", contractState: "", startDate: "2019.02.01", endDate: "2029.01.31", assetNo: "004 11000350", assetName: "김포공항 국제선청사(구)2청사)", assetType: "건물" },
    { custCode: "S25091", custName: "(주)신한은행 김포공항지점", bizType: "금융업", contractType: "한계약", contractNo: "33205", seq: "2", rentType: "상업시설", contractState: "", startDate: "2019.02.01", endDate: "2029.01.31", assetNo: "005 11000349", assetName: "김포공항 국제선청사(구)1청사)", assetType: "건물" },
    { custCode: "S25091", custName: "(주)신한은행 김포공항지점", bizType: "금융업", contractType: "한계약", contractNo: "33205", seq: "2", rentType: "상업시설", contractState: "", startDate: "2019.02.01", endDate: "2029.01.31", assetNo: "005 11000350", assetName: "김포공항 국제선청사(구)2청사)", assetType: "건물" },
    { custCode: "S25091", custName: "(주)신한은행 김포공항지점", bizType: "금융업", contractType: "한계약", contractNo: "32407", seq: "2", rentType: "상업시설", contractState: "", startDate: "2019.04.02", endDate: "2029.01.31", assetNo: "001 11000349", assetName: "김포공항 국제선청사(구)1청사)", assetType: "건물" },
    { custCode: "S25091", custName: "(주)신한은행 김포공항지점", bizType: "금융업", contractType: "한계약", contractNo: "38869", seq: "1", rentType: "상업시설", contractState: "(주)신한은행 김포공항지점", startDate: "2024.03.26", endDate: "2029.03.25", assetNo: "001 11000350", assetName: "김포공항 국제선청사(구)2청사)", assetType: "건물" },
    { custCode: "S25091", custName: "(주)신한은행 김포공항지점", bizType: "금융업", contractType: "한계약", contractNo: "38869", seq: "1", rentType: "상업시설", contractState: "(주)신한은행 김포공항지점", startDate: "2024.03.26", endDate: "2029.03.25", assetNo: "002 11000350", assetName: "김포공항 국제선청사(구)2청사)", assetType: "건물" },
    { custCode: "S25091", custName: "(주)신한은행 김포공항지점", bizType: "금융업", contractType: "한계약", contractNo: "38869", seq: "1", rentType: "상업시설", contractState: "(주)신한은행 김포공항지점", startDate: "2024.03.26", endDate: "2029.03.25", assetNo: "003 11000349", assetName: "김포공항 국제선청사(구)1청사)", assetType: "건물" },
    { custCode: "S25091", custName: "(주)신한은행 김포공항지점", bizType: "금융업", contractType: "한계약", contractNo: "38869", seq: "1", rentType: "상업시설", contractState: "(주)신한은행 김포공항지점", startDate: "2024.03.26", endDate: "2029.03.25", assetNo: "004 11000350", assetName: "김포공항 국제선청사(구)2청사)", assetType: "건물" },
    { custCode: "S25091", custName: "(주)신한은행 김포공항지점", bizType: "금융업", contractType: "한계약", contractNo: "38869", seq: "1", rentType: "상업시설", contractState: "", startDate: "2024.03.26", endDate: "2029.03.25", assetNo: "001 11000350", assetName: "국제용품면세점", assetType: "건물" },
    { custCode: "S26413", custName: "한국스타벅스, 스카이파크)", bizType: "판매업", contractType: "한계약", contractNo: "33287", seq: "1", rentType: "상업시설", contractState: "롯대요식경점", startDate: "2019.04.11", endDate: "2027.04.10", assetNo: "001 10003922", assetName: "김포공항 B86-0", assetType: "토지" },
    { custCode: "S27830", custName: "(주)에스씨마이크로파(스타벅스, 국내)", bizType: "식료음업", contractType: "한계약", contractNo: "39622", seq: "3", rentType: "상업시설", contractState: "스타벅스", startDate: "2024.12.09", endDate: "2029.12.08", assetNo: "001 11000350", assetName: "김포공항 국제선청사(구)2청사)", assetType: "건물" },
    { custCode: "S28808", custName: "드롭핑슨트(국내)", bizType: "식료음업", contractType: "한계약", contractNo: "37737", seq: "1", rentType: "상업시설", contractState: "", startDate: "2025.07.29", endDate: "2027.05.19", assetNo: "001 11000350", assetName: "김포공항 국제선청사(구)2청사)", assetType: "건물" },
    { custCode: "S30430", custName: "SK렌터카 주식회사", bizType: "한대업", contractType: "한계약", contractNo: "35074", seq: "4", rentType: "상업시설", contractState: "", startDate: "2020.11.01", endDate: "2026.10.31", assetNo: "001 11000349", assetName: "김포공항 국제선청사(구)1청사)", assetType: "건물" },
    { custCode: "S30431", custName: "엔진", bizType: "카리서비스업", contractType: "한계약", contractNo: "25216", seq: "6", rentType: "상업시설", contractState: "", startDate: "2022.12.11", endDate: "2026.12.10", assetNo: "001 11003336", assetName: "하동차고관리동", assetType: "건물" },
    { custCode: "S30900", custName: "롯데리아엑세스(렌터러너스, 국내)", bizType: "식료음업", contractType: "한계약", contractNo: "38034", seq: "3", rentType: "상업시설", contractState: "롯데리아엑세스(렌터러너스, 국내)", startDate: "2023.09.10", endDate: "2028.09.09", assetNo: "001 11000349", assetName: "김포공항 국제선청사(구)1청사)", assetType: "건물" },
    { custCode: "S30921", custName: "파라다이스면세점(화학, 사은할인)", bizType: "판매업", contractType: "한계약", contractNo: "26292", seq: "8", rentType: "상업시설", contractState: "파라다이스(화면점(사은할인))", startDate: "2017.12.31", endDate: "2027.12.31", assetNo: "001 11000350", assetName: "김포공항 국제선청사(구)2청사)", assetType: "건물" },
    { custCode: "S30930", custName: "마크로제리아파로서(사은할인)", bizType: "식료음업", contractType: "한계약", contractNo: "37246", seq: "2", rentType: "상업시설", contractState: "스테이봉사그", startDate: "2022.12.24", endDate: "2027.12.23", assetNo: "001 11000350", assetName: "김포공항 국제선청사(구)2청사)", assetType: "건물" },
    { custCode: "S30950", custName: "마크로제리아미에(국내)", bizType: "식료음업", contractType: "한계약", contractNo: "32229", seq: "4", rentType: "상업시설", contractState: "스테이봉사그", startDate: "2018.06.01", endDate: "2027.08.06", assetNo: "001 11000349", assetName: "김포공항 국제선청사(구)1청사)", assetType: "건물" },
    { custCode: "S35610", custName: "마크로제리아파로서(사은할인)", bizType: "일반업", contractType: "한계약", contractNo: "27155", seq: "1", rentType: "상업시설", contractState: "", startDate: "2022.12.29", endDate: "2028.12.28", assetNo: "001 11000350", assetName: "김포공항 국제선청사(구)2청사)", assetType: "건물" },
    { custCode: "S49068", custName: "비방디에아파이어(인터도나스, 국내)", bizType: "식료음업", contractType: "한계약", contractNo: "34670", seq: "3", rentType: "상업시설", contractState: "비방로이어서(주)인터도나스(과계선)", startDate: "2020.06.01", endDate: "2027.05.31", assetNo: "001 11000350", assetName: "김포공항 국제선청사(구)2청사)", assetType: "건물" },
    { custCode: "S40710", custName: "항공물지수소(주)", bizType: "화물업", contractType: "한계약", contractNo: "40638", seq: "2", rentType: "상업시설", contractState: "", startDate: "2017.12.07", endDate: "2027.12.06", assetNo: "001 11000356", assetName: "구화물청사", assetType: "건물" },
    { custCode: "S40268", custName: "인서울기물(주)", bizType: "카리서비스업", contractType: "한계약", contractNo: "31028", seq: "2", rentType: "상업시설", contractState: "인서울27물류물(주)", startDate: "2017.08.01", endDate: "2037.07.31", assetNo: "001 10013201", assetName: "김서구 공로동1-6", assetType: "토지" },
    { custCode: "S40268", custName: "화동물지소(주)", bizType: "화물업", contractType: "한계약", contractNo: "36046", seq: "4", rentType: "상업시설", contractState: "", startDate: "2022.12.31", endDate: "2026.12.31", assetNo: "001 11000356", assetName: "구화물청사", assetType: "건물" },
    { custCode: "S40310", custName: "(주)롯데월드리조트(호텔서비스, 국내)", bizType: "식료음업", contractType: "한계약", contractNo: "30784", seq: "7", rentType: "상업시설", contractState: "롤레이6", startDate: "2026.01.01", endDate: "2027.04.30", assetNo: "001 11000349", assetName: "김포공항 국내선청사(구)1청사)", assetType: "건물" },
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-[14px] font-bold text-[#1e3a5f]">임대현황 – 기준일자 : 2026.05.14</h2>

      <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr>
                {["행", "고객코드", "고객명", "고객유형(업종)","계약번호", "계약차수", "임대용도", "상호명", "임대개시일", "임대종료일", "중도해지일", "순번", "자산번호", "자산내역", "자산구분", "무상여부", "우상임대사유", "비고"].map((h) => (
                  <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5 whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => {
                const [assetSeq, assetNum] = r.assetNo ? r.assetNo.split(" ") : ["", ""];
                return (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8fbff]"}>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{i + 1}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.custCode}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.custName}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.bizType}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.contractNo}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.seq}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.rentType}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.contractState}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.startDate}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.endDate}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center"></td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{assetSeq}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{assetNum}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.assetName}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.assetType}</td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center"></td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center"></td>
                    <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center"></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
