"use client";

const treeData = [
  {
    label: "한국공항공사 고객분류체계",
    children: [
      {
        label: "A 본사",
        children: [
          { label: "M001 업무시설" },
          { label: "M002 상업시설" },
        ],
      },
      {
        label: "B 임해공원",
        children: [
          { label: "M001 업무시설" },
          { label: "M002 상업시설" },
          { label: "B40682 (주)에동이연세" },
        ],
      },
      {
        label: "C 제주공항",
        children: [
          { label: "M001 업무시설" },
          { label: "M002 상업시설" },
        ],
      },
      {
        label: "D 대구공항",
        children: [
          { label: "M001 업무시설" },
          { label: "M002 상업시설" },
        ],
      },
      {
        label: "F 청주공항",
        children: [
          { label: "M001 업무시설" },
          { label: "M002 상업시설" },
        ],
      },
      {
        label: "H 항공기술훈련원",
        children: [
          { label: "M001 업무시설" },
          { label: "M002 상업시설" },
        ],
      },
      {
        label: "J 사천공항",
        children: [
          { label: "M001 업무시설" },
          { label: "M002 상업시설" },
        ],
      },
      {
        label: "K 광주공항",
        children: [
          { label: "M001 업무시설" },
          { label: "M002 상업시설" },
        ],
      },
      {
        label: "L 양양공항",
        children: [
          { label: "M001 업무시설" },
          { label: "M002 상업시설" },
        ],
      },
      {
        label: "N 포항경주공항",
        children: [
          { label: "M001 업무시설" },
          { label: "M002 상업시설" },
        ],
      },
      {
        label: "P 무안공항",
        children: [
          { label: "M001 업무시설" },
          { label: "M002 상업시설" },
          { label: "P40279 (유) 거경" },
        ],
      },
    ],
  },
];

const tableData = [
  { 고객코드: "A00200", 고객명: "진주에무사", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "15", 소분류명: "경자" },
  { 고객코드: "A00200", 고객명: "근로복지공단(진주지사)", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "15", 소분류명: "경자" },
  { 고객코드: "A00240", 고객명: "인하대학교 신학협력단", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "15", 소분류명: "경자" },
  { 고객코드: "A00241", 고객명: "중앙대학교 신학협력단", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "15", 소분류명: "경자" },
  { 고객코드: "A00242", 고객명: "주식회사 로드텍", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "15", 소분류명: "경자" },
  { 고객코드: "A00243", 고객명: "중앙대학교 신학협력단", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "15", 소분류명: "경자" },
  { 고객코드: "A00244", 고객명: "(주)선진엔지니어링총합전시사무소", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "15", 소분류명: "경자" },
  { 고객코드: "A00245", 고객명: "(주)내오로보텔", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "15", 소분류명: "경자" },
  { 고객코드: "A00330", 고객명: "인하대학교 신학협력단(자세대", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "15", 소분류명: "경자" },
  { 고객코드: "A00331", 고객명: "인하대학교 신학협력단(자세대", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "15", 소분류명: "경자" },
  { 고객코드: "A00332", 고객명: "인하대학교 신학협력단(자세대", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "15", 소분류명: "경자" },
  { 고객코드: "A00400", 고객명: "(사)한국항공우주의학회", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "3", 소분류명: "항공 공동사업" },
  { 고객코드: "A00420", 고객명: "유왕인(주)", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "15", 소분류명: "경자" },
  { 고객코드: "A00421", 고객명: "유왕인(주)-인하", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "15", 소분류명: "경자" },
  { 고객코드: "A00430", 고객명: "(주)아름답닷컴 한국공항공사점", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "15", 소분류명: "경자" },
  { 고객코드: "A00431", 고객명: "나래", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "15", 소분류명: "경자" },
  { 고객코드: "A00440", 고객명: "(주)에스디케이", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "15", 소분류명: "경자" },
  { 고객코드: "A00445", 고객명: "한국토지주택공사 강기지역본부", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "15", 소분류명: "경자" },
  { 고객코드: "A00450", 고객명: "중앙이비(주)", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "15", 소분류명: "경자" },
  { 고객코드: "A00460", 고객명: "(주)신영비서", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "15", 소분류명: "경자" },
  { 고객코드: "A00470", 고객명: "엘에스산전(주)", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "15", 소분류명: "경자" },
  { 고객코드: "A00480", 고객명: "한국기계혁신연구소", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "3", 소분류명: "항공 공동사업" },
  { 고객코드: "A00490", 고객명: "한국건설공동기술개발기관원", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "3", 소분류명: "항공 공동사업" },
  { 고객코드: "A00510", 고객명: "신탐항공관리소", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "3", 소분류명: "항공 공동사업" },
  { 고객코드: "A00520", 고객명: "인천공우주연구원", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "3", 소분류명: "항공 공동사업" },
  { 고객코드: "A00521", 고객명: "항공우주연구원", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "3", 소분류명: "항공 공동사업" },
  { 고객코드: "A00522", 고객명: "항공우주연구원", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "3", 소분류명: "경자" },
  { 고객코드: "A00530", 고객명: "인하대학교 신학협력단", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "15", 소분류명: "경자" },
  { 고객코드: "A00550", 고객명: "한신전자(주)", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "15", 소분류명: "경자" },
  { 고객코드: "A00560", 고객명: "한국항공대학교산학협력단", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "15", 소분류명: "경자" },
  { 고객코드: "A00590", 고객명: "엘에스산전(주)", 대분류: "A", 대분류명: "본사", 중분류: "M002", 중분류명: "상업시설", 소분류: "15", 소분류명: "소사&소명" },
];

function TreeNode({ node, depth = 0 }: { node: { label: string; children?: { label: string; children?: { label: string }[] }[] }; depth?: number }) {
  return (
    <div>
      <div
        className="flex items-center gap-1 py-0.5 hover:bg-[#f0f7ff] cursor-pointer"
        style={{ paddingLeft: `${8 + depth * 14}px` }}
      >
        {node.children && node.children.length > 0 ? (
          <span className="text-[11px] text-[#64748b]">▼</span>
        ) : (
          <span className="text-[11px] text-[#64748b]">📄</span>
        )}
        <span className="text-[12px] text-[#334155]">{node.label}</span>
      </div>
      {node.children?.map((child, i) => (
        <TreeNode key={i} node={child} depth={depth + 1} />
      ))}
    </div>
  );
}

export default function ScrKac025() {
  return (
    <div className="space-y-4">
      {/* Breadcrumb + Title */}
      <div className="border-b border-[#e7eef5] pb-3">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8]">고객관리</div>
        <h1 className="mt-0.5 text-[18px] font-bold text-[#0f172a]">고객분류체계관리</h1>
      </div>

      {/* Split layout: Tree (left) + Table (right) */}
      <div className="flex gap-4">
        {/* Left: Tree panel */}
        <div className="w-[260px] flex-shrink-0 rounded-[18px] border border-[#d7e2ee] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
          <div className="border-b border-[#e7eef5] px-4 py-3">
            <div className="text-sm font-semibold text-[#0f172a]">분류체계</div>
          </div>
          <div className="py-2 overflow-y-auto max-h-[600px]">
            {treeData.map((node, i) => (
              <TreeNode key={i} node={node} depth={0} />
            ))}
          </div>
        </div>

        {/* Right: Table panel */}
        <div className="flex-1 rounded-[18px] border border-[#d7e2ee] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
          <div className="border-b border-[#e7eef5] px-5 py-3">
            <div className="text-sm font-semibold text-[#0f172a]">고객 목록</div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-[#e7eef5] bg-[#f8fbff]">
                  <th className="px-3 py-2 text-[11px] font-semibold text-[#64748b] whitespace-nowrap">고객코드</th>
                  <th className="px-3 py-2 text-[11px] font-semibold text-[#64748b] whitespace-nowrap">고객명</th>
                  <th className="px-3 py-2 text-[11px] font-semibold text-[#64748b] whitespace-nowrap">대분류</th>
                  <th className="px-3 py-2 text-[11px] font-semibold text-[#64748b] whitespace-nowrap">대분류명</th>
                  <th className="px-3 py-2 text-[11px] font-semibold text-[#64748b] whitespace-nowrap">중분류</th>
                  <th className="px-3 py-2 text-[11px] font-semibold text-[#64748b] whitespace-nowrap">중분류명</th>
                  <th className="px-3 py-2 text-[11px] font-semibold text-[#64748b] whitespace-nowrap">소분류</th>
                  <th className="px-3 py-2 text-[11px] font-semibold text-[#64748b] whitespace-nowrap">소분류명</th>
                  <th className="px-3 py-2 text-[11px] font-semibold text-[#64748b] whitespace-nowrap">세분류</th>
                  <th className="px-3 py-2 text-[11px] font-semibold text-[#64748b] whitespace-nowrap">세분류명</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, idx) => (
                  <tr key={idx} className="border-b border-[#f1f5f9] hover:bg-[#f8fbff]">
                    <td className="px-3 py-2 text-[12px] text-[#334155] whitespace-nowrap">{row.고객코드}</td>
                    <td className="px-3 py-2 text-[12px] text-[#334155] whitespace-nowrap">{row.고객명}</td>
                    <td className="px-3 py-2 text-[12px] text-[#334155] whitespace-nowrap">{row.대분류}</td>
                    <td className="px-3 py-2 text-[12px] text-[#334155] whitespace-nowrap">{row.대분류명}</td>
                    <td className="px-3 py-2 text-[12px] text-[#334155] whitespace-nowrap">{row.중분류}</td>
                    <td className="px-3 py-2 text-[12px] text-[#334155] whitespace-nowrap">{row.중분류명}</td>
                    <td className="px-3 py-2 text-[12px] text-[#334155] whitespace-nowrap">{row.소분류}</td>
                    <td className="px-3 py-2 text-[12px] text-[#334155] whitespace-nowrap">{row.소분류명}</td>
                    <td className="px-3 py-2 text-[12px] text-[#334155] whitespace-nowrap"></td>
                    <td className="px-3 py-2 text-[12px] text-[#334155] whitespace-nowrap"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
