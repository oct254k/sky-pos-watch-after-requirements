"use client";

import { Input } from "@/components/ui/input";

const detailCols = ["순번","자산번호","자산내역","자산구분","대표물건","무상여부","임대료산정","사용목적","면적","단가","신청시작일","신청종료일"];

export default function ScrKac005() {
  return (
    <div className="space-y-4">
      <div className="border-b border-[#e7eef5] pb-3">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8]">임대계약관리</div>
        <h1 className="mt-0.5 text-[18px] font-bold text-[#0f172a]">[RT] 계약마스터 생성</h1>
      </div>

      {/* Action bar */}
      <div className="flex items-center gap-2">
        <button className="rounded border border-[#d6e0ea] bg-white px-3 py-1.5 text-[12px] text-[#475569] hover:bg-[#f8fbff]">저장</button>
        <button className="rounded border border-[#d6e0ea] bg-white px-3 py-1.5 text-[12px] text-[#475569] hover:bg-[#f8fbff]">임대보증금 및 담보관리</button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_280px] gap-4">
        {/* Main form */}
        <div className="space-y-4">
          {/* 기본 계약정보 */}
          <div className="rounded-[18px] border border-[#d7e2ee] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
            <div className="border-b border-[#e7eef5] px-5 py-3">
              <div className="text-sm font-semibold text-[#0f172a]">기본 계약정보</div>
            </div>
            <div className="px-5 py-4 space-y-3 text-sm">
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-5">
                <div><span className="text-[11px] font-semibold text-[#64748b] block mb-1">년도</span><Input value="2026" readOnly className="h-7 border-[#d6e0ea] text-sm bg-[#f8fbff]" /></div>
                <div><span className="text-[11px] font-semibold text-[#64748b] block mb-1">계약번호</span><Input value="0000040995" readOnly className="h-7 border-[#d6e0ea] text-sm bg-[#f8fbff]" /></div>
                <div><span className="text-[11px] font-semibold text-[#64748b] block mb-1">계약 차수</span><Input value="01" readOnly className="h-7 border-[#d6e0ea] text-sm bg-[#f8fbff]" /></div>
                <div><span className="text-[11px] font-semibold text-[#64748b] block mb-1">상태</span><Input value="본계약" readOnly className="h-7 border-[#d6e0ea] text-sm bg-[#f8fbff]" /></div>
                <div><span className="text-[11px] font-semibold text-[#64748b] block mb-1">년도구분</span><Input value="1차년도" readOnly className="h-7 border-[#d6e0ea] text-sm bg-[#f8fbff]" /></div>
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-4">
                <div><span className="text-[11px] font-semibold text-[#64748b] block mb-1">용도 구분</span><Input value="업무시설" readOnly className="h-7 border-[#d6e0ea] text-sm bg-[#f8fbff]" /></div>
                <div className="flex items-end gap-2"><div><span className="text-[11px] font-semibold text-[#64748b] block mb-1">상업부대시설</span><input type="checkbox" className="mt-2" /></div></div>
                <div><span className="text-[11px] font-semibold text-[#64748b] block mb-1">사용여부</span><Input value="사용중" readOnly className="h-7 border-[#d6e0ea] text-sm bg-[#f8fbff]" /></div>
              </div>
              {/* Row 3 */}
              <div><span className="text-[11px] font-semibold text-[#64748b] block mb-1">고객코드</span><Input className="h-7 w-48 border-[#d6e0ea] text-sm" /></div>
              {/* Row 4 */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-3">
                <div><span className="text-[11px] font-semibold text-[#64748b] block mb-1">업달구분</span><Input className="h-7 border-[#d6e0ea] text-sm" /></div>
                <div><span className="text-[11px] font-semibold text-[#64748b] block mb-1">고지구분</span><Input className="h-7 border-[#d6e0ea] text-sm" /></div>
                <div><span className="text-[11px] font-semibold text-[#64748b] block mb-1">담당자사번</span><Input className="h-7 border-[#d6e0ea] text-sm" /></div>
              </div>
              {/* Row 5 */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-3">
                <div><span className="text-[11px] font-semibold text-[#64748b] block mb-1">임대개시일</span><Input className="h-7 border-[#d6e0ea] text-sm" /></div>
                <div><span className="text-[11px] font-semibold text-[#64748b] block mb-1">임대종료일</span><Input className="h-7 border-[#d6e0ea] text-sm" /></div>
                <div><span className="text-[11px] font-semibold text-[#64748b] block mb-1">임대 일수</span><Input value="0" readOnly className="h-7 border-[#d6e0ea] text-sm bg-[#f8fbff]" /></div>
              </div>
              {/* Row 6 */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-3">
                <div><span className="text-[11px] font-semibold text-[#64748b] block mb-1">최초기시일</span><Input className="h-7 border-[#d6e0ea] text-sm" /></div>
                <div><span className="text-[11px] font-semibold text-[#64748b] block mb-1">만도해지일</span><Input className="h-7 border-[#d6e0ea] text-sm" /></div>
                <div><span className="text-[11px] font-semibold text-[#64748b] block mb-1">담당자사번</span><Input className="h-7 border-[#d6e0ea] text-sm" /></div>
              </div>
              {/* 전자계약 */}
              <div className="border-t border-[#e7eef5] pt-3">
                <div className="text-[11px] font-semibold text-[#64748b] mb-2">[전자계약 추가항목]</div>
                <div className="flex flex-wrap items-center gap-4">
                  <label className="flex items-center gap-1.5 text-[12px] text-[#475569]">
                    <input type="checkbox" />
                    전자계약대상 제외
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] font-semibold text-[#64748b]">구내영업유율</span>
                    <Input className="h-7 w-28 border-[#d6e0ea] text-sm" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] font-semibold text-[#64748b]">보증금 납부방법</span>
                    <Input className="h-7 w-32 border-[#d6e0ea] text-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 상세 계약정보 */}
          <div className="rounded-[18px] border border-[#d7e2ee] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
            <div className="border-b border-[#e7eef5] px-5 py-3 flex items-center justify-between">
              <div className="text-sm font-semibold text-[#0f172a]">상세 계약정보</div>
              <div className="flex gap-2">
                <button className="rounded border border-[#d6e0ea] bg-white px-2.5 py-1 text-[11px] text-[#475569] hover:bg-[#f8fbff]">행추가</button>
                <button className="rounded border border-[#d6e0ea] bg-white px-2.5 py-1 text-[11px] text-[#475569] hover:bg-[#f8fbff]">행삭제</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#e7eef5] bg-[#f8fbff]">
                    {detailCols.map((c) => (
                      <th key={c} className="px-3 py-2 text-left text-[11px] font-semibold text-[#64748b] whitespace-nowrap">{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={detailCols.length} className="py-8 text-center text-[12px] text-[#94a3b8]">No Data</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 임대료 및 임대보증금 합계 */}
          <div className="rounded-[18px] border border-[#d7e2ee] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
            <div className="border-b border-[#e7eef5] px-5 py-3">
              <div className="text-sm font-semibold text-[#0f172a]">임대료 및 임대보증금 합계</div>
            </div>
            <div className="px-5 py-4 space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-5">
                <div><span className="text-[11px] font-semibold text-[#64748b] block mb-1">면적</span><Input value="0.00" readOnly className="h-7 border-[#d6e0ea] text-sm bg-[#f8fbff]" /></div>
                <div><span className="text-[11px] font-semibold text-[#64748b] block mb-1">단가</span><Input value="0" readOnly className="h-7 border-[#d6e0ea] text-sm bg-[#f8fbff]" /></div>
                <div><span className="text-[11px] font-semibold text-[#64748b] block mb-1">연간임대료</span><Input value="0" readOnly className="h-7 border-[#d6e0ea] text-sm bg-[#f8fbff]" /></div>
                <div><span className="text-[11px] font-semibold text-[#64748b] block mb-1">임대보증금</span><Input value="0" readOnly className="h-7 border-[#d6e0ea] text-sm bg-[#f8fbff]" /></div>
                <div><span className="text-[11px] font-semibold text-[#64748b] block mb-1">임대보증금 자동계산</span><Input value="0" readOnly className="h-7 border-[#d6e0ea] text-sm bg-[#f8fbff]" /></div>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-3">
                <div><span className="text-[11px] font-semibold text-[#64748b] block mb-1">기간임대료</span><Input value="0" readOnly className="h-7 border-[#d6e0ea] text-sm bg-[#f8fbff]" /></div>
                <div><span className="text-[11px] font-semibold text-[#64748b] block mb-1">월간임대료</span><Input value="0" readOnly className="h-7 border-[#d6e0ea] text-sm bg-[#f8fbff]" /></div>
              </div>
            </div>
          </div>

          {/* 하단 3분할 */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* 계약문서관리 */}
            <div className="rounded-[18px] border border-[#d7e2ee] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
              <div className="border-b border-[#e7eef5] px-4 py-3">
                <div className="text-sm font-semibold text-[#0f172a]">계약문서관리</div>
              </div>
              <div className="px-4 py-3">
                <div className="flex gap-1.5 mb-3">
                  <button className="rounded border border-[#d6e0ea] bg-white px-2 py-1 text-[11px] text-[#475569] hover:bg-[#f8fbff]">신규</button>
                  <button className="rounded border border-[#d6e0ea] bg-white px-2 py-1 text-[11px] text-[#475569] hover:bg-[#f8fbff]">파일삭제</button>
                  <button className="rounded border border-[#d6e0ea] bg-white px-2 py-1 text-[11px] text-[#475569] hover:bg-[#f8fbff]">다운로드</button>
                </div>
                <table className="w-full text-[11px] border-collapse">
                  <thead>
                    <tr className="border-b border-[#e7eef5] bg-[#f8fbff]">
                      <th className="px-2 py-1.5 text-left font-semibold text-[#64748b]">순</th>
                      <th className="px-2 py-1.5 text-left font-semibold text-[#64748b]">도면선택 파일명</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td colSpan={2} className="py-4 text-center text-[#94a3b8]">No Data</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* SKY-NET 문서관리 */}
            <div className="rounded-[18px] border border-[#d7e2ee] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
              <div className="border-b border-[#e7eef5] px-4 py-3">
                <div className="text-sm font-semibold text-[#0f172a]">SKY-NET 문서관리</div>
              </div>
              <div className="px-4 py-3">
                <div className="flex gap-1.5 mb-3">
                  <button className="rounded border border-[#d6e0ea] bg-white px-2 py-1 text-[11px] text-[#475569] hover:bg-[#f8fbff]">문서추가/방법</button>
                  <button className="rounded border border-[#d6e0ea] bg-white px-2 py-1 text-[11px] text-[#475569] hover:bg-[#f8fbff]">새로고침</button>
                  <button className="rounded border border-[#d6e0ea] bg-white px-2 py-1 text-[11px] text-[#475569] hover:bg-[#f8fbff]">삭제</button>
                </div>
                <table className="w-full text-[11px] border-collapse">
                  <thead>
                    <tr className="border-b border-[#e7eef5] bg-[#f8fbff]">
                      <th className="px-2 py-1.5 text-left font-semibold text-[#64748b]">순</th>
                      <th className="px-2 py-1.5 text-left font-semibold text-[#64748b]">문서제목</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td colSpan={2} className="py-4 text-center text-[#94a3b8]">No Data</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 고객사 계약담당자 연락처 */}
            <div className="rounded-[18px] border border-[#d7e2ee] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
              <div className="border-b border-[#e7eef5] px-4 py-3">
                <div className="text-sm font-semibold text-[#0f172a]">고객사 계약담당자 연락처</div>
              </div>
              <div className="px-4 py-3 space-y-2">
                {["계약담당자 성명","계약담당자 전화번호","계약담당자 핸드폰번호","계약담당자 E-MAIL주소","계약담당자 팩스번호"].map((label) => (
                  <div key={label}>
                    <span className="text-[11px] font-semibold text-[#64748b] block mb-1">{label}</span>
                    <Input className="h-7 border-[#d6e0ea] text-sm" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 담당자 이력관리용 메모장 */}
        <div className="rounded-[18px] border border-[#d7e2ee] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)] h-fit">
          <div className="border-b border-[#e7eef5] px-4 py-3">
            <div className="text-sm font-semibold text-[#0f172a]">담당자 이력관리용 메모장</div>
          </div>
          <div className="px-4 py-3">
            <div className="flex gap-1.5 mb-3">
              <button className="rounded border border-[#d6e0ea] bg-white px-2 py-1 text-[11px] text-[#475569] hover:bg-[#f8fbff]">행추가</button>
              <button className="rounded border border-[#d6e0ea] bg-white px-2 py-1 text-[11px] text-[#475569] hover:bg-[#f8fbff]">행삭제</button>
            </div>
            <table className="w-full text-[11px] border-collapse">
              <thead>
                <tr className="border-b border-[#e7eef5] bg-[#f8fbff]">
                  <th className="px-2 py-1.5 text-left font-semibold text-[#64748b]">순번</th>
                  <th className="px-2 py-1.5 text-left font-semibold text-[#64748b]">은변 메모장</th>
                </tr>
              </thead>
              <tbody>
                <tr><td colSpan={2} className="py-6 text-center text-[#94a3b8]">No Data</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
