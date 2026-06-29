export default function ScrKac029() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-[14px] font-bold text-[#1e3a5f]">신청기간만료 90일 조회</h2>
        <div className="flex gap-2">
          <button className="bg-[#1e3a5f] text-white text-[12px] px-3 py-1.5 rounded hover:bg-[#162e4d]">💾 저장</button>
          <button className="border border-[#c8d8e8] bg-white text-[12px] px-3 py-1.5 rounded hover:bg-[#f0f4f8] text-[#475569]">✕</button>
        </div>
      </div>

      <div className="rounded border border-[#c8d8e8] bg-white p-3">
        <p className="text-[12px] text-[#475569] pb-2">
          조회기준: 신청만료일이 조회일로부터 90일이내 해당 내역(계약마스터, 수내운업종, 입보내역)
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr>
                {["계약무분", "고객코드", "고객명", "신청기간만료일", "계약/일련번호"].map((h) => (
                  <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5 whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr><td colSpan={5} className="text-center text-[12px] text-[#94a3b8] py-6">해당데이터가 없습니다</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
