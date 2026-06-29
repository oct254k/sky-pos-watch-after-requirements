export default function ScrKac030() {
  const rows = [
    { cls: "1130", clsNm: "건물(관리)", ba: "BA15", assetNo: "11000486", desc: "식당A(패로더스대)", qty: "3,559,790", unit: "M2", startDt: "2016.01.01", endDt: "2016.12.31" },
    { cls: "1120", clsNm: "건물(관리)", ba: "BA15", assetNo: "11000498", desc: "지상주차물로딩수시설", qty: "17,502,420", unit: "M2", startDt: "", endDt: "2011.12.31" },
    { cls: "1120", clsNm: "건물(관리)", ba: "BA15", assetNo: "11000499", desc: "소방통합대기보고", qty: "1,255,280", unit: "M2", startDt: "2016.01.01", endDt: "2016.01.01" },
    { cls: "1120", clsNm: "건물(관리)", ba: "BA15", assetNo: "11000408", desc: "위고(AAR시범)", qty: "153", unit: "M2", startDt: "", endDt: "2016.12.31" },
    { cls: "1120", clsNm: "건물(관리)", ba: "BA15", assetNo: "11000499", desc: "소방통합대기보고(소대)", qty: "153", unit: "M2", startDt: "2016.01.01", endDt: "2016.12.31" },
    { cls: "1120", clsNm: "건물(관리)", ba: "BA15", assetNo: "11000500", desc: "포대실자집(소대)", qty: "153", unit: "M2", startDt: "2016.01.01", endDt: "" },
    { cls: "1130", clsNm: "건물(무상서수익)", ba: "BA15", assetNo: "11000501", desc: "경찰민생대기보고", qty: "3,823,830", unit: "M2", startDt: "", endDt: "" },
    { cls: "1100", clsNm: "건물(관리)", ba: "BA15", assetNo: "11000519", desc: "아오물리 창고", qty: "2,656,270", unit: "M2", startDt: "", endDt: "" },
    { cls: "1100", clsNm: "", ba: "BA15", assetNo: "11000519", desc: "아오물리 창고", qty: "918,480", unit: "M2", startDt: "", endDt: "" },
    { cls: "1100", clsNm: "", ba: "BA15", assetNo: "11000524", desc: "내부면,무기고 제2호(운반압 및 잔류 내부면)", qty: "270,400", unit: "M2", startDt: "", endDt: "" },
    { cls: "1100", clsNm: "", ba: "BA15", assetNo: "11001001", desc: "내부면,무기고 제3호(운반압 내부만)", qty: "290,850", unit: "M2", startDt: "", endDt: "" },
    { cls: "1100", clsNm: "건물", ba: "BA15", assetNo: "11000533", desc: "아외건산(김레제관)", qty: "253,440", unit: "M2", startDt: "", endDt: "" },
    { cls: "1100", clsNm: "", ba: "BA15", assetNo: "11000534", desc: "내부면,무기고 제3호(운반압압 내부만들)", qty: "200", unit: "M2", startDt: "", endDt: "" },
    { cls: "1100", clsNm: "", ba: "BA15", assetNo: "11000533", desc: "아외건산(김레제관)", qty: "169,520", unit: "M2", startDt: "2016.01.01", endDt: "2016.12.31" },
    { cls: "1130", clsNm: "건물(부상서수익)", ba: "BA15", assetNo: "11000541", desc: "P.X 및 이용소(건물3대)", qty: "164", unit: "M2", startDt: "2016.01.01", endDt: "2016.01.01" },
    { cls: "1130", clsNm: "건물(무상서수익)", ba: "BA15", assetNo: "11000542", desc: "", qty: "60,660", unit: "M2", startDt: "2016.01.01", endDt: "" },
    { cls: "1130", clsNm: "건물(무상서수익)", ba: "BA15", assetNo: "11000559", desc: "세번악(3대)", qty: "30,400", unit: "M2", startDt: "", endDt: "2016.12.31" },
    { cls: "1130", clsNm: "건물(무상서수익)", ba: "BA15", assetNo: "11000575", desc: "창고(건물4대)", qty: "9,970", unit: "M2", startDt: "2016.01.01", endDt: "2016.01.01" },
    { cls: "1130", clsNm: "건물(무상서수익)", ba: "BA15", assetNo: "11000596", desc: "무기고(3대)", qty: "9,730", unit: "M2", startDt: "2016.01.01", endDt: "2016.12.31" },
    { cls: "1130", clsNm: "건물(무상서수익)", ba: "BA15", assetNo: "11000099", desc: "무기고(2대)", qty: "84", unit: "M2", startDt: "2016.01.01", endDt: "2016.12.31" },
    { cls: "1130", clsNm: "건물(무상서수익)", ba: "BA15", assetNo: "11000710", desc: "식당(건물4대)", qty: "", unit: "M2", startDt: "2016.01.01", endDt: "" },
    { cls: "1100", clsNm: "건물(서수익부 외 매물)", ba: "BA15", assetNo: "11003061", desc: "사무 장보관리소", qty: "72,750", unit: "M2", startDt: "", endDt: "" },
    { cls: "1100", clsNm: "", ba: "BA15", assetNo: "11002218", desc: "", qty: "0", unit: "M2", startDt: "", endDt: "" },
    { cls: "1150", clsNm: "건물(서용무기/부)", ba: "BA15", assetNo: "12000671", desc: "1동식 주차장", qty: "1,000", unit: "M2", startDt: "", endDt: "" },
    { cls: "1200", clsNm: "", ba: "BA15", assetNo: "12000671", desc: "", qty: "1", unit: "EA", startDt: "", endDt: "" },
    { cls: "1200", clsNm: "공무물", ba: "BA15", assetNo: "12000676", desc: "화물접시 407-25", qty: "110", unit: "M2", startDt: "2012.01.01", endDt: "2012.12.31" },
    { cls: "1020", clsNm: "토지(무상서수익)", ba: "BA15", assetNo: "10002841", desc: "서울 강서 관령동 407-25", qty: "612,103,300", unit: "M2", startDt: "", endDt: "" },
    { cls: "1000", clsNm: "토지", ba: "BA15", assetNo: "10002905", desc: "서울 강서 관령동 1373-0", qty: "115,465", unit: "M2", startDt: "2001.01.01", endDt: "2003.12.31" },
    { cls: "1000", clsNm: "토지", ba: "BA15", assetNo: "10003169", desc: "서울 강서 관령동 272-0", qty: "115,639,200", unit: "M2", startDt: "", endDt: "" },
    { cls: "1000", clsNm: "토지", ba: "BA15", assetNo: "10003566", desc: "서울 강서 관령동 676-0", qty: "2,643", unit: "M2", startDt: "2001.01.01", endDt: "2002.12.31" },
    { cls: "1000", clsNm: "토지", ba: "BA15", assetNo: "10003573", desc: "서울 강서 방범통 509-4", qty: "242", unit: "M2", startDt: "1995.01.01", endDt: "1997.12.31" },
    { cls: "1030", clsNm: "토지(기타)", ba: "BA15", assetNo: "10003575", desc: "서울 강서 방범통 511-2", qty: "277", unit: "M2", startDt: "2001.01.01", endDt: "2003.12.31" },
    { cls: "1000", clsNm: "토지", ba: "BA15", assetNo: "10003586", desc: "서울 강서 방번도 512-3", qty: "2,227", unit: "M2", startDt: "2001.01.01", endDt: "2003.12.31" },
    { cls: "1000", clsNm: "토지", ba: "BA15", assetNo: "10001590", desc: "강서 방번도 513-1", qty: "2,227", unit: "M2", startDt: "2001.01.01", endDt: "2003.12.31" },
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-[14px] font-bold text-[#1e3a5f]">임대계약 자산번호관리</h2>

      <div className="flex gap-2 mb-2">
        <button className="bg-[#1e3a5f] text-white text-[12px] px-3 py-1.5 rounded hover:bg-[#162e4d]">💾 저장</button>
        <button className="border border-[#c8d8e8] bg-white text-[12px] px-3 py-1.5 rounded hover:bg-[#f0f4f8] text-[#475569]">조회↔변경</button>
      </div>

      <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr>
                {["자산분류", "자산클래스명", "사업영역", "자산번호", "자산내역", "수량", "단위", "수익허가시작일", "수익허가종료일"].map((h) => (
                  <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5 whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className={i % 2 === 1 ? "bg-[#f8fafc]" : ""}>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.cls}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.clsNm}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.ba}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.assetNo}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.desc}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.qty}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.unit}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.startDt}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.endDt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
