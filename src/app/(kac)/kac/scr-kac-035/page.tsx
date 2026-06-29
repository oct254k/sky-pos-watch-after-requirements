"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ScrKac035() {
  const [showPopup, setShowPopup] = useState(false);
  const [activeTab, setActiveTab] = useState("전체");
  const tabs = ["전체", "처리", "검토요청", "계약요청", "폐기요청", "취소완료"];

  return (
    <div className="space-y-3">
      <h2 className="text-[14px] font-bold text-[#1e3a5f]">전자계약 상태관리 프로그램</h2>

      <div className="flex gap-2">
        <Button className="bg-[#1e3a5f] text-white text-[12px] px-3 py-1.5 rounded hover:bg-[#162e4d] h-auto">전자계약 작성</Button>
        <Button variant="outline" className="text-[12px] px-3 py-1.5 h-auto">상태 History</Button>
        <Button variant="outline" className="text-[12px] px-3 py-1.5 h-auto">상세보기</Button>
      </div>

      <div className="text-[12px] text-[#475569] flex gap-6 border border-[#d8e4ee] rounded p-2 bg-[#f8fbff]">
        <span>총 건수: <b>0</b> 건</span>
        <span>이처리 건수: <b>0</b> 건</span>
        <span>처리완료 건수: <b>0</b> 건</span>
      </div>

      <div className="flex gap-0 text-[12px] border-b border-[#c8d8e8]">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={
              activeTab === t
                ? "px-4 py-2 font-semibold text-[#1e3a5f] bg-[#eef3f9] border border-b-0 border-[#c8d8e8] rounded-t -mb-px"
                : "px-4 py-2 text-[#64748b] hover:text-[#1e3a5f] hover:bg-[#f8fbff] border border-transparent border-b-0 rounded-t -mb-px"
            }
          >{t}</button>
        ))}
      </div>

      <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr>
                {["회계년", "계약번호", "차수", "계약일자/계약명", "상세보기", "결과상태", "균재요청번호", "상태", "계약종류", "전송상태", "REF.NO", "전송상태", "계약변호(SB)", "시작상태", "사업영역"].map((h) => (
                  <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5 whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr><td colSpan={15} className="text-center text-[12px] text-[#94a3b8] py-6">해당데이터가 없습니다</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
          <div className="bg-[#eef3f9] px-3 py-1.5 text-[12px] font-semibold text-[#1e3a5f]">계약자 정보</div>
          <div className="overflow-x-auto">
            <table className="w-full text-[12px]">
              <thead>
                <tr>
                  {["구분", "사업자등록번호", "회사명", "대표자명", "담당자명", "담당자 연락처", "담당자 이메일"].map((h) => (
                    <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr><td colSpan={7} className="text-center text-[12px] text-[#94a3b8] py-4">해당데이터가 없습니다</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
          <div className="bg-[#eef3f9] px-3 py-1.5 text-[12px] font-semibold text-[#1e3a5f]">첨부파일 목록</div>
          <div className="overflow-x-auto">
            <table className="w-full text-[12px]">
              <thead>
                <tr>
                  {["파일구분", "파일명", "파일순번"].map((h) => (
                    <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr><td colSpan={3} className="text-center text-[12px] text-[#94a3b8] py-4">해당데이터가 없습니다</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Data Input Popup */}
      <div className="flex justify-end">
        <Button variant="outline" className="text-[12px] px-3 py-1.5 h-auto" onClick={() => setShowPopup(true)}>
          전자계약 데이터 입력 팝업 열기
        </Button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded border border-[#c8d8e8] shadow-lg w-[400px] p-4 space-y-3">
            <div className="flex items-center justify-between border-b border-[#d8e4ee] pb-2">
              <span className="text-[13px] font-bold text-[#1e3a5f]">전자계약 데이터 입력</span>
              <button onClick={() => setShowPopup(false)} className="text-[#94a3b8] hover:text-[#475569] text-lg font-bold">×</button>
            </div>
            <div className="space-y-2">
              <div className="text-[12px] font-semibold text-[#1e3a5f] bg-[#eef3f9] px-2 py-1">전자계약양식선택란</div>
              <div className="flex items-center gap-2">
                <span className="text-[12px] text-[#475569] w-24">계약서양식</span>
                <Input className="h-7 border-[#d6e0ea] text-[12px] flex-1" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-[12px] font-semibold text-[#1e3a5f] bg-[#eef3f9] px-2 py-1">신규전자계약 생성정보입력란</div>
              <div className="flex items-center gap-2">
                <span className="text-[12px] text-[#475569] w-24">년 도</span>
                <Input className="h-7 border-[#d6e0ea] text-[12px] w-20" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[12px] text-[#475569] w-24">계약번호</span>
                <Input className="h-7 border-[#d6e0ea] text-[12px] w-36" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[12px] text-[#475569] w-24">차 수</span>
                <Input className="h-7 border-[#d6e0ea] text-[12px] w-16" />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2 border-t border-[#d8e4ee]">
              <Button className="bg-[#1e3a5f] text-white text-[12px] px-3 py-1.5 h-auto hover:bg-[#162e4d]">확인</Button>
              <Button variant="outline" className="text-[12px] px-3 py-1.5 h-auto" onClick={() => setShowPopup(false)}>×</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
