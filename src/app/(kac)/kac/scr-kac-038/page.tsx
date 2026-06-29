export default function ScrKac038() {
  return (
    <div className="space-y-3">
      <h2 className="text-[14px] font-bold text-[#1e3a5f]">임대료 감면액 조회</h2>

      <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
        <div style={{ height: "640px" }} className="overflow-auto">
          <table className="w-full text-[12px]">
            <thead className="sticky top-0 z-10">
              <tr>
                {[
                  "지사 코드", "지사 코드명", "고객 이름", "수익계정", "수익계정명",
                  "임대유무", "임도", "명칭",
                  "1월 계획", "1월 공급가액", "1월 부가세",
                  "1월 고지총액", "2월 계획", "2월 공급가액", "2월 부가세",
                  "2월 고지총액", "3월 계획", "3월 공급가액", "3월 부가세",
                  "3월 고지총액", "4월 계획", "4월 공급가액", "4월 부가세",
                  "4월 고지총액", "5월 계"
                ].map((h) => (
                  <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5 whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr><td colSpan={25} className="text-center text-[12px] text-[#94a3b8] py-6">해당데이터가 없습니다</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
