export default function ScrKac040() {
  const rows = [
    {
      assetType: "건물", assetNo: "11000350", assetName: "김포공항 국제선청사(구)2청사)", leaseAssetNo: "김포공항 국제선청사(구)2청사)", custCode: "S66661", custName: "롤링에프먼버(대청하류 외 2개소, 국제)", contractNo: "33409", seq: "3", num: "1", startDate: "2026.04.01", endDate: "2026.04.30", days: "30", area: "1,769.13", usageDetail: "식음시설", prevRent: "70,835,960", calcRent: "70,835,960",
    },
    {
      assetType: "건물", assetNo: "11000350", assetName: "김포공항 국제선청사(구)2청사)", leaseAssetNo: "김포공항 국제선청사(구)2청사)", custCode: "S88010", custName: "(주)호텔롯데면세", contractNo: "40802", seq: "1", num: "1", startDate: "2026.04.01", endDate: "2026.04.30", days: "30", area: "2.56", usageDetail: "프로모션(에디릴)", prevRent: "0", calcRent: "927,480",
    },
    {
      assetType: "건물", assetNo: "11000350", assetName: "김포공항 국제선청사(구)2청사)", leaseAssetNo: "김포공항 국제선청사(구)2청사)", custCode: "S88010", custName: "(주)호텔롯데면세", contractNo: "40852", seq: "1", num: "1", startDate: "2026.04.01", endDate: "2026.04.30", days: "30", area: "1.61", usageDetail: "프로모션(크로스방계)", prevRent: "489,210", calcRent: "583,300",
    },
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-[14px] font-bold text-[#1e3a5f]">월고지 임대료 전송</h2>

      <div className="flex gap-2 mb-2">
        <button className="bg-[#1e3a5f] text-white text-[12px] px-3 py-1.5 rounded hover:bg-[#162e4d]">전송</button>
      </div>

      <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr>
                {["자산구분", "자산번호", "계약시자산명", "현자산명칭", "고객코드", "고객명", "계약번호", "차수", "순번", "신청시작일", "신청종료일", "신청일수", "면적", "사용목적", "전월임대료(실적)", "당월임대료(계획)"].map((h) => (
                  <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5 whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8fbff]"}>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.assetType}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.assetNo}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.assetName}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.leaseAssetNo}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.custCode}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.custName}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.contractNo}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.seq}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.num}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.startDate}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.endDate}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.days}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.area}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.usageDetail}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.prevRent}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right font-semibold">{r.calcRent}</td>
                </tr>
              ))}
              <tr className="bg-[#fff9e6] font-semibold">
                <td colSpan={14} className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">합계</td>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">71,325,170</td>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">72,346,740</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
