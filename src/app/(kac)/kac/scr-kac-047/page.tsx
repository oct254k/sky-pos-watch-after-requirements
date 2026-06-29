export default function ScrKac047() {
  const rows = [
    { num: "20", bizArea: "BA15", contractNo: "5008", contractSeq: "14", contractState: "한계약", yearDiv: "1년도", bizType: "국가기관", custCode: "500251", custName: "김포국제공항관", rentType: "업무시설·사용", useYn: "수의", bidDiv: "연간", noticeDiv: "", bizName: "", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", commercial: "", firstStartDate: "", evictDate: "", empNo: "12874", empName: "윤한은", approvalState: "", approvalNo: "" },
    { num: "20", bizArea: "BA15", contractNo: "5008", contractSeq: "13", contractState: "한계약", yearDiv: "1년도", bizType: "국가기관", custCode: "500251", custName: "김포국제공항관", rentType: "업무시설·사용", useYn: "수의", bidDiv: "연간", noticeDiv: "", bizName: "", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", commercial: "", firstStartDate: "", evictDate: "", empNo: "12874", empName: "윤한은", approvalState: "", approvalNo: "" },
    { num: "20", bizArea: "BA15", contractNo: "5100", contractSeq: "15", contractState: "한계약", yearDiv: "1차도", bizType: "국가기관", custCode: "S00330", custName: "국립수산과학원", rentType: "업무시설·사용", useYn: "수의", bidDiv: "연간", noticeDiv: "", bizName: "", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", commercial: "", firstStartDate: "", evictDate: "", empNo: "13081", empName: "이정", approvalState: "", approvalNo: "" },
    { num: "20", bizArea: "BA15", contractNo: "5122", contractSeq: "14", contractState: "한계약", yearDiv: "1년도", bizType: "국가기관", custCode: "500089", custName: "서울전파관리소", rentType: "업무시설·사용", useYn: "수의", bidDiv: "연간", noticeDiv: "", bizName: "", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", commercial: "", firstStartDate: "", evictDate: "", empNo: "12874", empName: "윤한은", approvalState: "", approvalNo: "" },
    { num: "20", bizArea: "BA15", contractNo: "5122", contractSeq: "13", contractState: "한계약", yearDiv: "1년도", bizType: "국가기관", custCode: "500089", custName: "서울전파관리소", rentType: "업무시설·사용", useYn: "수의", bidDiv: "연간", noticeDiv: "", bizName: "", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", commercial: "", firstStartDate: "", evictDate: "", empNo: "12874", empName: "윤한은", approvalState: "", approvalNo: "" },
    { num: "20", bizArea: "BA15", contractNo: "5206", contractSeq: "11", contractState: "한계약", yearDiv: "1년도", bizType: "국가기관", custCode: "S05241", custName: "한국전파관리소", rentType: "업무시설·사용", useYn: "기타", bidDiv: "연간", noticeDiv: "", bizName: "", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", commercial: "", firstStartDate: "", evictDate: "", empNo: "13081", empName: "이정", approvalState: "", approvalNo: "" },
    { num: "20", bizArea: "BA15", contractNo: "5206", contractSeq: "12", contractState: "한계약", yearDiv: "1년도", bizType: "국가기관", custCode: "S00143", custName: "관세청(세종청사)", rentType: "업무시설·사용", useYn: "수의", bidDiv: "연간", noticeDiv: "", bizName: "", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", commercial: "", firstStartDate: "", evictDate: "", empNo: "13081", empName: "이정", approvalState: "", approvalNo: "" },
    { num: "20", bizArea: "BA15", contractNo: "5426", contractSeq: "2", contractState: "한계약", yearDiv: "1차도", bizType: "일반", custCode: "S10230", custName: "(주)대한항공", rentType: "업무시설·사용", useYn: "수의", bidDiv: "연간", noticeDiv: "", bizName: "", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", commercial: "", firstStartDate: "", evictDate: "", empNo: "", empName: "", approvalState: "", approvalNo: "" },
    { num: "20", bizArea: "BA15", contractNo: "5320", contractSeq: "2", contractState: "한계약", yearDiv: "1차도", bizType: "일반", custCode: "S10230", custName: "(주)대한항공", rentType: "업무시설·사용", useYn: "수의", bidDiv: "연간", noticeDiv: "", bizName: "", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", commercial: "", firstStartDate: "1997.01.01", evictDate: "", empNo: "", empName: "", approvalState: "", approvalNo: "" },
    { num: "20", bizArea: "BA15", contractNo: "5200", contractSeq: "13", contractState: "한계약", yearDiv: "1차도", bizType: "일반", custCode: "S10070", custName: "(주)아시아나에어스", rentType: "업무시설·사용", useYn: "수의", bidDiv: "교지", noticeDiv: "", bizName: "", startDate: "1980.01.04", endDate: "2235.04.27", days: "100124", commercial: "", firstStartDate: "", evictDate: "2022.01.01", empNo: "", empName: "", approvalState: "", approvalNo: "" },
    { num: "20", bizArea: "BA15", contractNo: "5152", contractSeq: "13", contractState: "한계약", yearDiv: "1년도", bizType: "일반", custCode: "S10070", custName: "(주)아시아나에어스", rentType: "업무시설·사용", useYn: "수의", bidDiv: "교지", noticeDiv: "", bizName: "", startDate: "2026.01.01", endDate: "2026.12.31", days: "365", commercial: "", firstStartDate: "", evictDate: "", empNo: "", empName: "", approvalState: "", approvalNo: "" },
    { num: "20", bizArea: "BA15", contractNo: "5660", contractSeq: "12", contractState: "한계약", yearDiv: "1차도", bizType: "일반", custCode: "S12290", custName: "블루에어(주)", rentType: "수탁 블루", useYn: "수의", bidDiv: "연간", noticeDiv: "", bizName: "", startDate: "2026.01.01", endDate: "2026.12.31", days: "365", commercial: "", firstStartDate: "", evictDate: "", empNo: "13026", empName: "한한", approvalState: "", approvalNo: "" },
    { num: "20", bizArea: "BA15", contractNo: "6448", contractSeq: "15", contractState: "한계약", yearDiv: "1차도", bizType: "기타", custCode: "S12290", custName: "블루에어(주)", rentType: "수탁 블루", useYn: "수의", bidDiv: "연간", noticeDiv: "", bizName: "", startDate: "2026.01.01", endDate: "2026.12.31", days: "365", commercial: "", firstStartDate: "2003.02.15", evictDate: "", empNo: "", empName: "", approvalState: "", approvalNo: "" },
    { num: "20", bizArea: "BA15", contractNo: "6650", contractSeq: "16", contractState: "한계약", yearDiv: "1년도", bizType: "일반", custCode: "S04220", custName: "중공한공(주)", rentType: "업무시설·사용", useYn: "수의", bidDiv: "연간", noticeDiv: "", bizName: "", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", commercial: "", firstStartDate: "2006.03.20", evictDate: "", empNo: "", empName: "", approvalState: "", approvalNo: "" },
    { num: "20", bizArea: "BA15", contractNo: "6606", contractSeq: "14", contractState: "한계약", yearDiv: "1년도", bizType: "일반", custCode: "S12930", custName: "한국공항공단(유)", rentType: "업무시설·사용", useYn: "수의", bidDiv: "연간", noticeDiv: "", bizName: "", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", commercial: "", firstStartDate: "", evictDate: "", empNo: "", empName: "", approvalState: "", approvalNo: "" },
    { num: "20", bizArea: "BA15", contractNo: "6606", contractSeq: "13", contractState: "한계약", yearDiv: "1년도", bizType: "일반", custCode: "S12930", custName: "한국공항공단(유)", rentType: "업무시설·사용", useYn: "수의", bidDiv: "연간", noticeDiv: "", bizName: "", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", commercial: "", firstStartDate: "", evictDate: "", empNo: "", empName: "", approvalState: "", approvalNo: "" },
    { num: "20", bizArea: "BA15", contractNo: "8082", contractSeq: "11", contractState: "한계약", yearDiv: "1년도", bizType: "일반", custCode: "S12262", custName: "(주)금호에어서비스를", rentType: "업무시설·사용", useYn: "수의", bidDiv: "교지", noticeDiv: "", bizName: "", startDate: "2026.01.01", endDate: "2027.12.31", days: "731", commercial: "", firstStartDate: "2022.01.01", evictDate: "", empNo: "12874", empName: "윤한은", approvalState: "", approvalNo: "" },
    { num: "20", bizArea: "BA15", contractNo: "20645", contractSeq: "15", contractState: "한계약", yearDiv: "1년도", bizType: "일반", custCode: "S22290", custName: "(주)세계로여행사를", rentType: "업무시설·사용", useYn: "수의", bidDiv: "연간", noticeDiv: "", bizName: "", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", commercial: "", firstStartDate: "1999.11.15", evictDate: "", empNo: "12874", empName: "윤한은", approvalState: "", approvalNo: "" },
    { num: "20", bizArea: "BA15", contractNo: "21100", contractSeq: "11", contractState: "한계약", yearDiv: "1차도", bizType: "일반", custCode: "S30083", custName: "세계항공서비스공사", rentType: "업무시설·사용", useYn: "수의", bidDiv: "연간", noticeDiv: "", bizName: "", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", commercial: "", firstStartDate: "2018.01.01", evictDate: "", empNo: "", empName: "", approvalState: "", approvalNo: "" },
    { num: "20", bizArea: "BA15", contractNo: "S12721", contractSeq: "11", contractState: "한계약", yearDiv: "1차도", bizType: "일반", custCode: "S40144", custName: "한국공항공사(여)", rentType: "업무시설·사용", useYn: "수의", bidDiv: "연간", noticeDiv: "", bizName: "", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", commercial: "", firstStartDate: "2007.10.05", evictDate: "", empNo: "13081", empName: "이정", approvalState: "", approvalNo: "" },
    { num: "20", bizArea: "BA15", contractNo: "S06670", contractSeq: "12", contractState: "한계약", yearDiv: "1차도", bizType: "일반", custCode: "S50144", custName: "한국체육공항", rentType: "업무시설·사용", useYn: "수의", bidDiv: "연간", noticeDiv: "", bizName: "", startDate: "2026.01.01", endDate: "2026.12.31", days: "365", commercial: "", firstStartDate: "2007.10.26", evictDate: "", empNo: "13081", empName: "이정", approvalState: "", approvalNo: "" },
    { num: "20", bizArea: "BA15", contractNo: "717W", contractSeq: "11", contractState: "한계약", yearDiv: "1차도", bizType: "일반", custCode: "S37585", custName: "바리리대국제여행(수)", rentType: "업무시설·사용", useYn: "수의", bidDiv: "연간", noticeDiv: "", bizName: "", startDate: "2026.01.01", endDate: "2027.12.31", days: "365", commercial: "", firstStartDate: "2008.07.22", evictDate: "", empNo: "13081", empName: "이정", approvalState: "", approvalNo: "" },
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-[14px] font-bold text-[#1e3a5f]">임대계약총괄표(계약번호 기준) 년월:2026.05</h2>

      <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr>
                {["년도", "사업영역","계약번호", "계약차수", "계약상태", "년도구분", "업종명", "고객코드", "고객명", "임대용도", "사용여부", "입찰구분", "고지구분", "상호명", "임대차개시일", "임대차종료일", "임대일수", "상업부대", "최초임대개시일", "해지일자", "사원번호", "사원명", "결재상태", "결재요청번호"].map((h) => (
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
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.contractSeq}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.contractState}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.yearDiv}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.bizType}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.custCode}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.custName}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.rentType}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.useYn}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.bidDiv}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.noticeDiv}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.bizName}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.startDate}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.endDate}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.days}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.commercial}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.firstStartDate}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.evictDate}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.empNo}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.empName}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.approvalState}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.approvalNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
