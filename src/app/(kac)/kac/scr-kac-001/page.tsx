"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

const btnBase =
  "inline-flex items-center gap-1.5 rounded border border-[#b8c9db] bg-[#f0f5fa] px-3 py-1.5 text-[12px] font-semibold text-[#1e3a5f] hover:bg-[#e2eaf4]";

export default function ScrKac001() {
  const [showCustomerPopup, setShowCustomerPopup] = useState(false);
  const [popupYongdo, setPopupYongdo] = useState<"업무시설" | "상업시설">("업무시설");
  const [memoRows, setMemoRows] = useState([1, 2, 3]);
  const [detailRows, setDetailRows] = useState([1, 2, 3, 4]);
  const [docRows, setDocRows] = useState([1, 2]);

  return (
    <><div className="space-y-3">
      {/* Title */}
      <div className="border-b border-[#e7eef5] pb-3">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8]">임대계약관리</div>
        <h1 className="mt-0.5 text-[18px] font-bold text-[#0f172a]">[RT] 가계약마스터 생성</h1>
      </div>

      {/* Button bar — always visible */}
      <div className="rounded-[14px] border border-[#d7e2ee] bg-white px-4 py-2.5 shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
        <div className="flex items-center gap-2">
          <button className={btnBase}>💾 저장</button>
          <button className={btnBase}>✏️ 변경</button>
          <button className={btnBase}>🏦 임대보증금 및 담보관리</button>
        </div>
      </div>

      {/* ── 기존 scr-kac-001 메인 컨텐츠 ── */}
      <div className="space-y-3">
        {/* 기본 계약정보 + 담당자 이력관리용 메모장 (side by side) */}
        <div className="flex gap-3">
          {/* LEFT: 기본 계약정보 */}
          <div className="min-w-0 flex-1 rounded-[14px] border border-[#d7e2ee] bg-white shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
            <div className="border-b border-[#e7eef5] px-4 py-2.5">
              <div className="text-[13px] font-semibold text-[#0f172a]">기본 계약정보</div>
            </div>
            <div className="px-4 py-3">
              <table className="w-full border-collapse text-[12px]">
                <tbody>
                  {/* Row 1 */}
                  <tr className="border-b border-[#f1f5f9]">
                    <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">년도</td>
                    <td className="py-2 pr-4">
                      <Input value="2026" readOnly className="h-6 w-14 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                    </td>
                    <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">계약번호</td>
                    <td className="py-2 pr-4">
                      <Input value="0000040993" readOnly className="h-6 w-24 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                    </td>
                    <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">계약 차수</td>
                    <td className="py-2 pr-4">
                      <Input value="00" readOnly className="h-6 w-10 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                    </td>
                    <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">상태</td>
                    <td className="py-2 pr-4">
                      <Input value="가계약" readOnly className="h-6 w-16 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                    </td>
                    <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">년도구분</td>
                    <td className="py-2">
                      <Input value="1차년도" readOnly className="h-6 w-16 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="border-b border-[#f1f5f9]">
                    <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">고객코드</td>
                    <td className="py-2 pr-4">
                      <div className="flex items-center gap-1">
                        <Input className="h-6 w-20 border-[#d6e0ea] text-[12px]" />
                        <button onClick={() => setShowCustomerPopup(true)} className="rounded border border-[#d6e0ea] bg-white px-1 py-0.5 text-[11px] text-[#475569] hover:bg-[#f8fbff]">🔍</button>
                        <Input className="h-6 w-28 border-[#d6e0ea] text-[12px]" />
                      </div>
                    </td>
                    <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">용도 구분</td>
                    <td className="py-2 pr-4">
                      <Input value="업무시설" readOnly className="h-6 w-20 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                    </td>
                    <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">상업부대시설</td>
                    <td className="py-2" colSpan={5}>
                      <input type="checkbox" className="accent-[#002D56]" />
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="border-b border-[#f1f5f9]">
                    <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">입찰구분</td>
                    <td className="py-2 pr-4">
                      <select className="h-6 rounded border border-[#d6e0ea] px-1 text-[12px] text-[#334155] bg-white">
                        <option>-선택-</option>
                      </select>
                    </td>
                    <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">고지구분</td>
                    <td className="py-2 pr-4">
                      <select className="h-6 rounded border border-[#d6e0ea] px-1 text-[12px] text-[#334155] bg-white">
                        <option>-선택-</option>
                      </select>
                    </td>
                    <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">담당자사번</td>
                    <td className="py-2 pr-4">
                      <div className="flex items-center gap-1">
                        <Input className="h-6 w-16 border-[#d6e0ea] text-[12px]" />
                        <Input className="h-6 w-16 border-[#d6e0ea] text-[12px]" readOnly />
                      </div>
                    </td>
                    <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">사용여부</td>
                    <td className="py-2" colSpan={3}>
                      <Input value="사용중" readOnly className="h-6 w-16 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="border-b border-[#f1f5f9]">
                    <td className="py-2" colSpan={10}>
                      <label className="flex items-center gap-1.5 cursor-pointer text-[12px] text-[#334155]">
                        <input type="checkbox" className="accent-[#002D56]" />
                        예외사항 : 전대승인자인증
                      </label>
                    </td>
                  </tr>

                  {/* Row 5: 전자계약 추가항목 header */}
                  <tr className="border-b border-[#f1f5f9] bg-[#f8fbff]">
                    <td className="py-1.5 pl-1 text-[11px] font-semibold text-[#64748b]" colSpan={10}>
                      [전자계약 추가항목]
                    </td>
                  </tr>

                  {/* Row 6 */}
                  <tr>
                    <td className="py-2" colSpan={2}>
                      <label className="flex items-center gap-1.5 cursor-pointer text-[12px] text-[#334155]">
                        <input type="checkbox" className="accent-[#002D56]" />
                        전자계약대상 제외
                      </label>
                    </td>
                    <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">구내영업요율</td>
                    <td className="py-2 pr-4">
                      <Input className="h-6 w-28 border-[#d6e0ea] text-[12px]" />
                    </td>
                    <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">보증금 납부방법</td>
                    <td className="py-2" colSpan={5}>
                      <select className="h-6 rounded border border-[#d6e0ea] px-1 text-[12px] text-[#334155] bg-white">
                        <option>-선택-</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* RIGHT: 담당자 이력관리용 메모장 */}
          <div className="w-[280px] flex-shrink-0 rounded-[14px] border border-[#d7e2ee] bg-white shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
            <div className="border-b border-[#e7eef5] px-4 py-2.5">
              <div className="text-[13px] font-semibold text-[#0f172a]">담당자 이력관리용 메모장</div>
            </div>
            <div className="px-4 py-3">
              <div className="flex gap-1.5 mb-2">
                <button className={btnBase} onClick={() => setMemoRows(r => [...r, r.length + 1])}>🔲 행추가</button>
                <button className={btnBase} onClick={() => setMemoRows(r => r.length > 1 ? r.slice(0, -1) : r)}>🔲 행삭제</button>
              </div>
              <div className="max-h-[128px] overflow-y-auto">
                <table className="w-full border-collapse text-[12px]">
                  <thead className="sticky top-0 z-10">
                    <tr className="border-b border-[#e7eef5] bg-[#f8fbff]">
                      <th className="px-2 py-1.5 text-left text-[11px] font-semibold text-[#64748b] w-6">행</th>
                      <th className="px-2 py-1.5 text-left text-[11px] font-semibold text-[#64748b] w-10">순번</th>
                      <th className="px-2 py-1.5 text-left text-[11px] font-semibold text-[#64748b]">메모장</th>
                    </tr>
                  </thead>
                  <tbody>
                    {memoRows.map((i) => (
                      <tr key={i} className="border-b border-[#f1f5f9] h-8">
                        <td className="px-2 py-1"></td>
                        <td className="px-2 py-1"></td>
                        <td className="px-2 py-1"></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* 상세 계약정보 */}
        <div className="rounded-[14px] border border-[#d7e2ee] bg-white shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
          <div className="border-b border-[#e7eef5] px-4 py-2.5">
            <div className="text-[13px] font-semibold text-[#0f172a]">상세 계약정보</div>
          </div>
          <div className="px-4 py-3">
            <div className="flex gap-1.5 mb-2">
              <button className={btnBase} onClick={() => setDetailRows(r => [...r, r.length + 1])}>🔲 행추가</button>
              <button className={btnBase} onClick={() => setDetailRows(r => r.length > 1 ? r.slice(0, -1) : r)}>🔲 행삭제</button>
            </div>
            <div className="max-h-[128px] overflow-auto">
              <table className="w-full border-collapse text-[12px]">
                <thead className="sticky top-0 z-10">
                  <tr className="border-b border-[#e7eef5] bg-[#f8fbff]">
                    {["순번", "자산번호", "자산내역", "자산구분", "무상여부", "임대료산정", "사용목적", "면적", "단가", "신청시작일", "신청종료일"].map((h) => (
                      <th key={h} className="px-2 py-2 text-left text-[11px] font-semibold text-[#64748b] whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {detailRows.map((i) => (
                    <tr key={i} className="border-b border-[#f1f5f9] h-8">
                      {Array(11).fill(null).map((_, j) => (
                        <td key={j} className="px-2 py-1 text-[12px] text-[#334155]"></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 임대료 및 임대보증금 합계 */}
        <div className="rounded-[14px] border border-[#d7e2ee] bg-white shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
          <div className="border-b border-[#e7eef5] px-4 py-2.5">
            <div className="text-[13px] font-semibold text-[#0f172a]">임대료 및 임대보증금 합계</div>
          </div>
          <div className="px-4 py-3">
            <table className="border-collapse text-[12px]">
              <tbody>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">면적</td>
                  <td className="py-2 pr-5">
                    <Input value="0.00" readOnly className="h-6 w-20 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                  </td>
                  <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">단가</td>
                  <td className="py-2">
                    <Input value="0" readOnly className="h-6 w-20 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">기간임대료</td>
                  <td className="py-2 pr-4">
                    <Input value="0" readOnly className="h-6 w-20 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                  </td>
                  <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">월간임대료</td>
                  <td className="py-2 pr-4">
                    <Input value="0" readOnly className="h-6 w-20 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                  </td>
                  <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">연간임대료</td>
                  <td className="py-2 pr-4">
                    <Input value="0" readOnly className="h-6 w-20 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                  </td>
                  <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">임대보증금</td>
                  <td className="py-2 pr-4">
                    <Input value="0" readOnly className="h-6 w-20 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                  </td>
                  <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">임대보증금 자동계산</td>
                  <td className="py-2">
                    <Input value="0" readOnly className="h-6 w-20 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 하단 3열 */}
        <div className="grid grid-cols-3 gap-3">
          {/* 계약문서관리 */}
          <div className="rounded-[14px] border border-[#d7e2ee] bg-white shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
            <div className="border-b border-[#e7eef5] px-4 py-2.5">
              <div className="text-[13px] font-semibold text-[#0f172a]">계약문서관리</div>
            </div>
            <div className="px-4 py-3">
              <div className="flex gap-1.5 mb-2">
                <button className={btnBase} onClick={() => setDocRows(r => [...r, r.length + 1])}>🔲 신규</button>
                <button className={btnBase} onClick={() => setDocRows(r => r.length > 1 ? r.slice(0, -1) : r)}>🗑️ 파일삭제</button>
                <button className={btnBase}>⬇️ 다운로드</button>
              </div>
              <div className="max-h-[128px] overflow-y-auto">
                <table className="w-full border-collapse text-[12px]">
                  <thead className="sticky top-0 z-10">
                    <tr className="border-b border-[#e7eef5] bg-[#f8fbff]">
                      <th className="px-2 py-1.5 text-left text-[11px] font-semibold text-[#64748b] w-6">행</th>
                      <th className="px-2 py-1.5 text-left text-[11px] font-semibold text-[#64748b] w-10">순번</th>
                      <th className="px-2 py-1.5 text-left text-[11px] font-semibold text-[#64748b]">도면선택</th>
                      <th className="px-2 py-1.5 text-left text-[11px] font-semibold text-[#64748b]">파일명</th>
                    </tr>
                  </thead>
                  <tbody>
                    {docRows.map((i) => (
                      <tr key={i} className="border-b border-[#f1f5f9] h-8">
                        <td className="px-2 py-1"></td>
                        <td className="px-2 py-1"></td>
                        <td className="px-2 py-1"></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* SKY-NET 문서관리 */}
          <div className="rounded-[14px] border border-[#d7e2ee] bg-white shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
            <div className="border-b border-[#e7eef5] px-4 py-2.5">
              <div className="text-[13px] font-semibold text-[#0f172a]">SKY-NET 문서관리</div>
            </div>
            <div className="px-4 py-3">
              <div className="flex gap-1.5 mb-2">
                <button className={btnBase}>🔲 문서추가 방법</button>
                <button className={btnBase}>🔄 새로고침</button>
                <button className={btnBase}>🗑️ 삭제</button>
              </div>
              <table className="w-full border-collapse text-[12px]">
                <thead>
                  <tr className="border-b border-[#e7eef5] bg-[#f8fbff]">
                    <th className="px-2 py-1.5 text-left text-[11px] font-semibold text-[#64748b] w-6">행</th>
                    <th className="px-2 py-1.5 text-left text-[11px] font-semibold text-[#64748b] w-10">순번</th>
                    <th className="px-2 py-1.5 text-left text-[11px] font-semibold text-[#64748b]">문서제목</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2].map((i) => (
                    <tr key={i} className="border-b border-[#f1f5f9] h-8">
                      <td className="px-2 py-1"></td>
                      <td className="px-2 py-1"></td>
                      <td className="px-2 py-1"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 소속시 계약담당자 연락처 */}
          <div className="rounded-[14px] border border-[#d7e2ee] bg-white shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
            <div className="border-b border-[#e7eef5] px-4 py-2.5">
              <div className="text-[13px] font-semibold text-[#0f172a]">고객사 계약담당자 연락처</div>
            </div>
            <div className="px-4 py-3">
              <table className="w-full border-collapse text-[12px]">
                <tbody>
                  {[
                    "계약담당자 성명",
                    "계약담당자 전화번호",
                    "계약담당자 핸드폰번호",
                    "계약담당자 E-MAIL주소",
                    "계약담당자 팩스번호",
                  ].map((label) => (
                    <tr key={label} className="border-b border-[#f1f5f9]">
                      <td className="py-1.5 pr-3 font-semibold text-[#64748b] whitespace-nowrap w-36">{label}</td>
                      <td className="py-1.5">
                        <Input className="h-6 w-full border-[#d6e0ea] text-[12px]" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>

      {/* 고객코드 검색 팝업 */}
      {showCustomerPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-[400px] rounded-xl border border-[#c8d8e8] bg-white shadow-2xl">
            {/* 팝업 헤더 */}
            <div className="flex items-center justify-between rounded-t-xl border-b border-[#d7e2ee] bg-[#dbe8f4] px-4 py-2.5">
              <span className="text-[13px] font-bold text-[#1e3a5f]">[RT] 가계약마스터 생성</span>
              <button
                onClick={() => setShowCustomerPopup(false)}
                className="flex h-6 w-6 items-center justify-center rounded text-[#64748b] hover:bg-[#c8d8e8] hover:text-[#1e3a5f]"
              >
                ✕
              </button>
            </div>

            {/* 팝업 바디 */}
            <div className="space-y-3 px-5 py-4">
              {/* 입력조건 */}
              <div className="rounded border border-[#c8d8e8]">
                <div className="border-b border-[#c8d8e8] bg-[#eef3f9] px-3 py-1.5">
                  <span className="text-[12px] font-semibold text-[#1e3a5f]">입력조건</span>
                </div>
                <div className="px-4 py-3">
                  <table className="w-full border-collapse text-[12px]">
                    <tbody>
                      <tr>
                        <td className="py-1.5 pr-3 font-semibold text-[#64748b] whitespace-nowrap w-20">회사코드</td>
                        <td className="py-1.5">
                          <div className="flex items-center gap-2">
                            <Input value="KAC1" readOnly className="h-6 w-16 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                            <span className="text-[12px] text-[#334155]">한국공항공사</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-1.5 pr-3 font-semibold text-[#64748b] whitespace-nowrap">년도</td>
                        <td className="py-1.5">
                          <Input value="2026" readOnly className="h-6 w-16 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                        </td>
                      </tr>
                      <tr>
                        <td className="py-1.5 pr-3 font-semibold text-[#64748b] whitespace-nowrap">사업영역</td>
                        <td className="py-1.5">
                          <Input value="BA15" readOnly className="h-6 w-16 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 용도구분 */}
              <div className="rounded border border-[#c8d8e8]">
                <div className="border-b border-[#c8d8e8] bg-[#eef3f9] px-3 py-1.5">
                  <span className="text-[12px] font-semibold text-[#1e3a5f]">용도구분</span>
                </div>
                <div className="space-y-1.5 px-4 py-3">
                  <label className="flex items-center gap-2 cursor-pointer text-[12px] text-[#334155]">
                    <input
                      type="radio"
                      name="popup-yongdo"
                      value="업무시설"
                      checked={popupYongdo === "업무시설"}
                      onChange={() => setPopupYongdo("업무시설")}
                      className="accent-[#1e3a5f]"
                    />
                    업무시설
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-[12px] text-[#334155]">
                    <input
                      type="radio"
                      name="popup-yongdo"
                      value="상업시설"
                      checked={popupYongdo === "상업시설"}
                      onChange={() => setPopupYongdo("상업시설")}
                      className="accent-[#1e3a5f]"
                    />
                    상업시설
                  </label>
                </div>
              </div>
            </div>

            {/* 팝업 푸터 */}
            <div className="flex justify-center rounded-b-xl border-t border-[#d7e2ee] px-4 py-3">
              <button
                onClick={() => setShowCustomerPopup(false)}
                className="rounded border border-[#b8c9db] bg-[#f0f5fa] px-6 py-1.5 text-[12px] font-semibold text-[#1e3a5f] hover:bg-[#e2eaf4]"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
