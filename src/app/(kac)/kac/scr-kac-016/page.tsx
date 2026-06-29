"use client";

const cols = [
  "전송선택","전송여부","회계년월","사업영역","업체 유형","고객코드","고객명","품명",
  "계약번호","차수","순번","사용여부","자산구분","임대료산정기준","산정시작일","산정종료일",
  "산정원수","매출액","영업요율(%)","기준요율(%)","부과임대료",
];

export default function ScrKac016() {
  return (
    <div className="space-y-4">
      <div className="border-b border-[#e7eef5] pb-3">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8]">임대료/추가임대료</div>
        <h1 className="mt-0.5 text-[18px] font-bold text-[#0f172a]">[RT] 매출액/영업요율 기준 추가 임대료 산정</h1>
      </div>

      <div className="flex items-center gap-2">
        <button className="rounded border border-[#d6e0ea] bg-white px-3 py-1.5 text-[12px] text-[#475569] hover:bg-[#f8fbff]">저장</button>
        <button className="rounded border border-[#d6e0ea] bg-white px-3 py-1.5 text-[12px] text-[#475569] hover:bg-[#f8fbff]">SKYPOS 수신</button>
        <button className="rounded border border-[#d6e0ea] bg-white px-3 py-1.5 text-[12px] text-[#475569] hover:bg-[#f8fbff]">검사</button>
      </div>

      <div className="rounded-[18px] border border-[#d7e2ee] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)] px-5 py-4 space-y-2">
        <p className="text-[13px] text-[#334155]">매출액/영업요율 기준 추가 임대료 산정 프로그램입니다.</p>
        <div className="space-y-1 pt-1">
          <p className="text-[12px] font-semibold text-[#475569]">[부과임대료 계산 기준]</p>
          <p className="text-[12px] text-[#475569]">면세점인 경우 매출액 X 영업요율, 매출액 X 기준요율 중 큰 값이 기본 세팅</p>
          <p className="text-[12px] text-[#475569]">일반업체인 경우 매출액 X 영업요율의 값을 기본 세팅</p>
          <p className="text-[12px] text-[#475569]">* 단, 영업요율은 ERP 계약마스터 관리, 기준요율은 SKYPOS 관리</p>
        </div>
      </div>

      <div className="rounded-[18px] border border-[#d7e2ee] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#e7eef5] bg-[#f8fbff]">
                {cols.map((c) => (
                  <th key={c} className="px-3 py-2.5 text-left text-[11px] font-semibold text-[#64748b] whitespace-nowrap">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={cols.length} className="py-12 text-center text-[13px] text-[#94a3b8]">No Data</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
