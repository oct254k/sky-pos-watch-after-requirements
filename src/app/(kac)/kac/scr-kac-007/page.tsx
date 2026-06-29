"use client";

export default function ScrKac007() {
  const cols = ["년도","사업영역","고객코드","고객명","계약번호","순번","계약차수","부과차수","사용여부","계약종료일","면적","사용목적","무단점유신청시작일","무단점유신청종료일","신청일수","연간임대료","무단점용료"];

  const rows = [
    { 년도:"2001", 사업영역:"BA15", 고객코드:"500930", 고객명:"카이도팅(주)", 계약번호:"5208", 순번:"1", 계약차수:"1", 사용여부:"사용중", "계약종료일":"2026.05.14", 면적:"2.58", 사용목적:"세계대도데대 임내가운터", 무단점유신청시작일:"0001.01.02", 무단점유신청종료일:"2026.05.14", 신청일수:"39751", 연간임대료:"942,990", 무단점용료:"94,290" },
    { 년도:"2001", 사업영역:"BA15", 고객코드:"500930", 고객명:"카이도팅(주)", 계약번호:"5209", 순번:"1", 계약차수:"1", 사용여부:"사용중", "계약종료일":"2026.05.14", 면적:"6.09", 사용목적:"공항임대세", 무단점유신청시작일:"0001.01.02", 무단점유신청종료일:"2026.05.14", 신청일수:"39751", 연간임대료:"126,700", 무단점용료:"12,670" },
    { 년도:"2001", 사업영역:"BA15", 고객코드:"500930", 고객명:"카이도팅(주)", 계약번호:"5224", 순번:"1", 계약차수:"1", 사용여부:"사용중", "계약종료일":"2026.05.14", 면적:"23.79", 사용목적:"공항임대세", 무단점유신청시작일:"0001.01.02", 무단점유신청종료일:"2026.05.14", 신청일수:"39751", 연간임대료:"99,750", 무단점용료:"9,97₀" },
  ];

  return (
    <div className="space-y-4">
      <div className="border-b border-[#e7eef5] pb-3">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8]">임대계약관리</div>
        <h1 className="mt-0.5 text-[18px] font-bold text-[#0f172a]">[RT] 무단점용 예상 리스트 조회</h1>
      </div>

      <div className="rounded-[18px] border border-[#fde68a] bg-[#fffbeb] px-5 py-3 space-y-1">
        <p className="text-[13px] text-[#92400e]">임대점용료를 최초로 부과함에 따른 점용기간에 따라 수익업으로 무단점용료를 계산하세요.</p>
        <p className="text-[13px] text-[#92400e]">수단계 달부터는 산정임대료의 120%로 자동 계산됩니다.</p>
        <p className="text-[13px] text-[#92400e]">무단 대상을 선택하여 지정한 프로그램 ZRTR0120 - 수시고지 임대료 전송에서 고지 전송하세요</p>
      </div>

      <div className="rounded-[18px] border border-[#d7e2ee] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
        <div className="border-b border-[#e7eef5] px-5 py-3 flex items-center gap-2">
          <button className="rounded border border-[#d6e0ea] bg-white px-3 py-1 text-[12px] text-[#475569] hover:bg-[#f8fbff]">저장</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#e7eef5] bg-[#f8fbff]">
                {cols.map((c) => (
                  <th key={c} className="px-3 py-2.5 text-left text-[12px] font-semibold text-[#64748b] whitespace-nowrap">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-[#f1f5f9] hover:bg-[#f8fbff]">
                  {cols.map((c) => (
                    <td key={c} className="px-3 py-2 text-[12px] text-[#334155] whitespace-nowrap">{row[c as keyof typeof row]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
