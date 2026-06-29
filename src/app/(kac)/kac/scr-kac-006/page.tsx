"use client";

export default function ScrKac006() {
  const cols = ["년도","사업영역","고객코드","고객명","계약번호","순번","자산번호","자산내역","자산구분","사용장소","사용목적","신청시작일","신청종료일","신청일수","면적","기간임대료"];

  return (
    <div className="space-y-4">
      <div className="border-b border-[#e7eef5] pb-3">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8]">임대계약관리</div>
        <h1 className="mt-0.5 text-[18px] font-bold text-[#0f172a]">[RT] 단기임대리스트 조회</h1>
      </div>

      <div className="rounded-[18px] border border-[#d7e2ee] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
        <div className="border-b border-[#e7eef5] px-5 py-3 flex items-center gap-2">
          <button className="rounded border border-[#d6e0ea] bg-white px-3 py-1 text-[12px] text-[#475569] hover:bg-[#f8fbff]">저장</button>
          <button className="rounded border border-[#d6e0ea] bg-white px-3 py-1 text-[12px] text-[#475569] hover:bg-[#f8fbff]">행삭제</button>
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
