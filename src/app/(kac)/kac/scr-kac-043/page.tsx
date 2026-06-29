export default function ScrKac043() {
  const rows = [
    { bizArea: "BA15", custCode: "S00010", custName: "국방시설본부(근기냐무시설단)", custType: "국가기관", contractNo: "29140", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S00010", custName: "김포국제공항단", custType: "국가기관", contractNo: "35621", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S00050", custName: "공군제15특수임무비행단", custType: "국가기관", contractNo: "32960", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S00058", custName: "공군지피대에관청", custType: "국가기관", contractNo: "28325", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S00059", custName: "서울특별시119특수구조단", custType: "국가기관", contractNo: "32991", rentType: "업무시설", startDate: "2026.01.01", endDate: "2026.12.31" },
    { bizArea: "BA15", custCode: "S00077", custName: "항공기상청(김포공항상대)", custType: "국가기관", contractNo: "29480", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S00078", custName: "서울한파관리소", custType: "국가기관", contractNo: "31399", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S00080", custName: "경찰청", custType: "국가기관", contractNo: "23179", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S00089", custName: "서울산림항공관리소", custType: "국가기관", contractNo: "5125", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S00091", custName: "국군제1068부대", custType: "국가기관", contractNo: "32960", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S00095", custName: "국립공중박물관", custType: "공공기관", contractNo: "35928", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S00095", custName: "국립공중박물관", custType: "공공기관", contractNo: "40422", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S00096", custName: "법무안신소", custType: "국가기관", contractNo: "35604", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S00097", custName: "육군7688부대(폭27273부대)", custType: "국가기관", contractNo: "35529", rentType: "업무시설", startDate: "2026.01.01", endDate: "2026.12.31" },
    { bizArea: "BA15", custCode: "S00108", custName: "국제공항출입국·외국인사무소(ETA센터)", custType: "국가기관", contractNo: "35490", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S00210", custName: "김포공항세관", custType: "국가기관", contractNo: "31723", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S00300", custName: "농림수산검역본부서울지역본부", custType: "국가기관", contractNo: "24384", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S00310", custName: "국립수산물품질관리원 서울지원", custType: "국가기관", contractNo: "26293", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S00330", custName: "국립안전공항검역소", custType: "국가기관", contractNo: "5080", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S00390", custName: "김포항공관리사무소", custType: "국가기관", contractNo: "5109", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S00630", custName: "공항보안실", custType: "국가기관", contractNo: "32169", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S00700", custName: "국가유산진흥원(관하공항김포관내)", custType: "국가기관", contractNo: "24350", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S00790", custName: "감사관청", custType: "국가기관", contractNo: "34219", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S00950", custName: "서울특별시(물재생시설고)", custType: "국가기관", contractNo: "5210", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S05210", custName: "한국방공공사", custType: "공공기관", contractNo: "30750", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S05241", custName: "한국전력공사", custType: "공공기관", contractNo: "5301", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S05281", custName: "(주)대한순환공사", custType: "기타법인", contractNo: "5351", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S05700", custName: "제주특별자치도관광협회", custType: "안내판", contractNo: "295339", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S07290", custName: "대한실납사", custType: "기타법인", contractNo: "27101", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S07340", custName: "한국항공협회", custType: "기타법인", contractNo: "34512", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S10003", custName: "에어서울(주)", custType: "항공 운송사업", contractNo: "32923", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
    { bizArea: "BA15", custCode: "S10030", custName: "(주)대한항공", custType: "항공 운송사업", contractNo: "5529", rentType: "업무시설", startDate: "1980.04.10", endDate: "2254.05.27" },
    { bizArea: "BA15", custCode: "S10050", custName: "(주)에어코리아", custType: "항공 운송사업", contractNo: "32548", rentType: "업무시설", startDate: "2026.01.01", endDate: "2027.12.31" },
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-[14px] font-bold text-[#1e3a5f]">임대현황 – 조회기간 : 20260514 ~ 20260514</h2>

      <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-[12px] border-collapse">
            <thead className="sticky top-0 z-10">
              <tr>
                {["행", "사업영역", "고객코드", "고객명", "고객유형(업종)", "계약번호", "임대용도", "임대개시일", "임대종료일", "중도해지일"].map((h) => (
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
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.custType}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.contractNo}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.rentType}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.startDate}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.endDate}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
