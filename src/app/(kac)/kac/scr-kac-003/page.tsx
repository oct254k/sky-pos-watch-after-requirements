"use client";

export default function ScrKac003() {
  const rows = [
    { 사업영역: "BA15", 계약번호: "40594", 계약차수: "0", 계약상태: "가계약", 용도구분: "업무시설", 고객코드: "S40785", 상호명: "", 고객명: "에이케이아이에스 주식회사", 생성일자: "2025.12.26" },
    { 사업영역: "BA15", 계약번호: "40900", 계약차수: "0", 계약상태: "가계약", 용도구분: "업무시설", 고객코드: "S10030", 상호명: "", 고객명: "(주)대한항공", 생성일자: "2026.03.13" },
    { 사업영역: "BA15", 계약번호: "40966", 계약차수: "0", 계약상태: "가계약", 용도구분: "업무시설", 고객코드: "S10030", 상호명: "", 고객명: "(주)대한항공", 생성일자: "2026.04.03" },
  ];

  const cols = ["사업영역","계약번호","계약차수","계약상태","용도구분","고객코드","상호명","고객명","생성일자"];

  return (
    <div className="space-y-4">
      <div className="border-b border-[#e7eef5] pb-3">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8]">임대계약관리</div>
        <h1 className="mt-0.5 text-[18px] font-bold text-[#0f172a]">[RT] 가계약리스트 조회</h1>
      </div>

      <div className="rounded-[18px] border border-[#d7e2ee] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
        <div className="border-b border-[#e7eef5] px-5 py-3 flex items-center gap-2">
          <button className="rounded border border-[#d6e0ea] bg-white px-3 py-1 text-[12px] text-[#475569] hover:bg-[#f8fbff]">삭제</button>
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
                <tr key={i} className="border-b border-[#f1f5f9] hover:bg-[#f8fbff] cursor-pointer">
                  {cols.map((c) => (
                    <td key={c} className="px-3 py-2 text-[13px] text-[#334155] whitespace-nowrap">{row[c as keyof typeof row]}</td>
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
