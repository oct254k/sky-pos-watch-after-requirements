export default function ScrKac056() {
  const rows = [
    { year: "2026", bizArea: "BA15", site: "김포공항", siteNum: "0003", bizType: "(사용한한)비경기비연", custCode: "S00117", custName: "사단법인 에너네시스컨단나세비", contractNo: "0000038717", seq: "02", maxSeq: "2", contractState: "본계약", rentType: "1", usageType: "사용중", usage2: "2", rentLevel: "업무시설", usage3: "2", billType: "발고지", billType2: "2", inType: "수의", startDate: "2026.01.01", endDate: "2027.12.3" },
    { year: "2026", bizArea: "BA15", site: "항공 운송사업", siteNum: "0004", bizType: "", custCode: "S10003", custName: "에어서울(주)", contractNo: "0000033923", seq: "06", maxSeq: "2", contractState: "본계약", rentType: "1", usageType: "사용중", usage2: "2", rentLevel: "업무시설", usage3: "2", billType: "발고지", billType2: "2", inType: "수의", startDate: "2026.01.01", endDate: "2026.12.3" },
    { year: "2026", bizArea: "BA15", site: "", siteNum: "", bizType: "", custCode: "S20007", custName: "피치 항공(Peach Aviation)", contractNo: "0000039993", seq: "02", maxSeq: "2", contractState: "본계약", rentType: "1", usageType: "사용중", usage2: "2", rentLevel: "업무시설", usage3: "2", billType: "발고지", billType2: "2", inType: "수의", startDate: "2026.01.01", endDate: "2027.12.3" },
    { year: "2026", bizArea: "BA15", site: "", siteNum: "", bizType: "", custCode: "S40562", custName: "엔에프에이(주)", contractNo: "0000035816", seq: "05", maxSeq: "2", contractState: "본계약", rentType: "1", usageType: "사용중", usage2: "2", rentLevel: "업무시설", usage3: "2", billType: "발고지", billType2: "2", inType: "수의", startDate: "2026.01.01", endDate: "2027.12.3" },
    { year: "2026", bizArea: "BA15", site: "", siteNum: "", bizType: "", custCode: "S41097", custName: "(주)에이비아이에스코리아", contractNo: "0000040719", seq: "01", maxSeq: "2", contractState: "본계약", rentType: "1", usageType: "사용중", usage2: "2", rentLevel: "업무시설", usage3: "2", billType: "발고지", billType2: "2", inType: "수의", startDate: "2026.01.01", endDate: "2027.12.3" },
    { year: "2026", bizArea: "BA15", site: "", siteNum: "", bizType: "", custCode: "S58890", custName: "이스타항공(주)", contractNo: "0000036303", seq: "10", maxSeq: "2", contractState: "본계약", rentType: "1", usageType: "사용중", usage2: "2", rentLevel: "업무시설", usage3: "1", billType: "연고지", billType2: "2", inType: "수의", startDate: "2026.01.01", endDate: "2027.12.3" },
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-[14px] font-bold text-[#1e3a5f]">임대계약 보증금 현황 – 보증금 상세내역</h2>

      <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr>
                {["회계연도", "사업영역", "사업영역명", "업종", "업종명", "고객코드", "고객명", "계약번호", "차수(최종)", "계약상태", "계약상태명", "사용여부", "사용여부명", "임대총도", "임대총도명", "고지구분", "고지구분명", "입찰구분", "입찰구분명", "상호명", "임대개시일", "임대종료일"].map((h) => (
                  <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5 whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#eef7ff]"}>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.year}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.bizArea}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.site}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.siteNum}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.bizType}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.custCode}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.custName}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.contractNo}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.seq}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.maxSeq}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.contractState}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.rentType}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.usageType}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.usage2}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.rentLevel}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.usage3}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.billType}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.billType2}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.inType}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1"></td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.startDate}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.endDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
