export default function ScrKac032() {
  const sections = [
    {
      title: "상업시설",
      rows: [
        { label: "물가변동율 기준적용 – 연고지 대상", status: "미진행" },
        { label: "물가변동율 기준적용 – 발고지 대상", status: "최종이관" },
        { label: "기타 기준 적용 – 연고지 대상", status: "미진행" },
        { label: "기타 기준 적용 – 발고지 대상", status: "미진행" },
        { label: "임료분가(착수매), 물가변동율(통수매)", status: "최종이관" },
      ],
    },
    {
      title: "업무시설 및 상업부대시설",
      rows: [
        { label: "임료분가(착수매), 물가변동율(통수매) 기준 적용 – 연고지 대상", status: "최종이관" },
        { label: "임료분가(착수매), 물가변동율(통수매) 기준 적용 – 발고지 대상", status: "최종이관" },
        { label: "기타 기준 적용 – 연고지 대상", status: "미진행" },
        { label: "기타 기준 적용 – 발고지 대상", status: "미진행" },
      ],
    },
    {
      title: "무상임대",
      rows: [
        { label: "무상임대계약 일괄 이관 대상", status: "최종이관" },
      ],
    },
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-[14px] font-bold text-[#1e3a5f]">임대계약 차기년도 이관</h2>
      <div className="text-[12px] text-[#475569]">임포평가결과 적분 기준</div>

      {sections.map((section) => (
        <div key={section.title} className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
          <div className="bg-[#eef3f9] px-3 py-1.5 text-[12px] font-semibold text-[#1e3a5f]">{section.title}</div>
          <div className="p-3 space-y-2">
            {section.rows.map((row) => (
              <div key={row.label} className="flex items-center gap-3">
                <div className="flex-1 bg-[#fffde7] border border-[#e8d8a0] rounded px-3 py-1.5 text-[12px] text-[#475569]">
                  {row.label}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[12px] text-[#475569]">진행상태</span>
                  <span className={`text-[12px] font-semibold px-2 py-0.5 rounded border ${
                    row.status === "최종이관"
                      ? "bg-[#e8f5e9] text-[#2e7d32] border-[#a5d6a7]"
                      : "bg-white text-[#475569] border-[#c8d8e8]"
                  }`}>{row.status}</span>
                </div>
                <button className="text-[11px] border border-[#c8d8e8] bg-white px-2 py-1 rounded hover:bg-[#f0f4f8] text-[#475569]">임시저장 삭제</button>
                <button className="text-[11px] border border-[#1e3a5f] bg-[#1e3a5f] text-white px-2 py-1 rounded hover:bg-[#162e4d]">최종이관</button>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="text-[11px] text-[#475569] space-y-1 border border-[#d8e4ee] rounded p-3 bg-[#f8fbff]">
        <p className="font-semibold text-[#1e3a5f]">* &quot;최종이관&quot;시에는 작전년도의 임대계약건들은 모두 &quot;사용종&quot; 처리됩니다. 주의 부탁드립니다.</p>
        <p>1. 상업시설, 업무시설, 상업부대시설에 대해서 모든 연고지 발고지 대상에 대해서 조회됩니다.</p>
        <p>2. 조회된 정보에 대한 단가와 임대료 금액, 이관 건수를 확인후 임시처리합니다.</p>
        <p>3. 임시저장된 금액과 계약가별 건수가 정확하게 일치하면 임시저장한 항목들을 하나씩 최종이관합니다.</p>
        <p>4. 이관된 계약들에 대해서 아관된 정보를 확인합니다.</p>
      </div>
    </div>
  );
}
