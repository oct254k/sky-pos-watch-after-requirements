"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

const SAMPLE_ROWS = [
  {
    customerCode: "5060065",
    customerName: "스타벅스커피코리아",
    contractNo: "3210-0000-0916",
    bizArea: "BA15",
    startDate: "2024.01.01",
    endDate: "2024.12.31",
    deposit: "300,000,000",
    addDeposit: "",
    bank: "신한은행",
    account: "100-010-123456",
    transferDate: "2023.12.15",
    status: "정상",
  },
  {
    customerCode: "5045832",
    customerName: "롯데GRS(주)",
    contractNo: "3210-0000-0832",
    bizArea: "BA15",
    startDate: "2024.03.01",
    endDate: "2025.02.28",
    deposit: "150,000,000",
    addDeposit: "50,000,000",
    bank: "국민은행",
    account: "010-9999-887766",
    transferDate: "2024.02.20",
    status: "정상",
  },
];

export default function ScrKac027() {
  const [form, setForm] = useState({
    companyCode: "KAC1",
    bizArea: "BA15",
    customerCode: "",
    contractNo: "",
    contractType: "본계약",
  });

  const [rows] = useState(SAMPLE_ROWS);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-4">
      <div className="border-b border-[#e7eef5] pb-3">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8]">
          임대보증금 관리
        </div>
        <h1 className="mt-0.5 text-[18px] font-bold text-[#0f172a]">
          [RT] 임대보증금 신규/추가
        </h1>
      </div>

      {/* 입력조건 */}
      <div className="rounded-[18px] border border-[#d7e2ee] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
        <div className="border-b border-[#e7eef5] px-5 py-3">
          <div className="text-sm font-semibold text-[#0f172a]">입력조건</div>
        </div>
        <div className="px-5 py-4">
          <table className="text-sm border-collapse">
            <tbody>
              <tr className="border-b border-[#e7eef5]">
                <td className="w-28 py-2.5 pr-4 text-[12px] font-semibold text-[#64748b]">
                  회사코드
                </td>
                <td className="py-2.5">
                  <div className="flex items-center gap-2">
                    <Input
                      value={form.companyCode}
                      readOnly
                      className="h-7 w-16 border-[#d6e0ea] text-sm bg-[#f8fbff]"
                    />
                    <span className="text-sm text-[#334155]">한국공항공사</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-[#e7eef5]">
                <td className="py-2.5 pr-4 text-[12px] font-semibold text-[#64748b]">
                  사업영역
                </td>
                <td className="py-2.5">
                  <div className="flex items-center gap-2">
                    <Input
                      value={form.bizArea}
                      onChange={(e) => handleChange("bizArea", e.target.value)}
                      className="h-7 w-16 border-[#d6e0ea] text-sm"
                    />
                    <button
                      type="button"
                      className="flex h-7 w-7 items-center justify-center rounded border border-[#d6e0ea] bg-[#f8fbff] text-[#64748b] hover:bg-[#f0f4f8]"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-[#e7eef5]">
                <td className="py-2.5 pr-4 text-[12px] font-semibold text-[#64748b]">
                  고객코드
                </td>
                <td className="py-2.5">
                  <div className="flex items-center gap-2">
                    <Input
                      value={form.customerCode}
                      onChange={(e) => handleChange("customerCode", e.target.value)}
                      className="h-7 w-28 border-[#d6e0ea] text-sm"
                      placeholder="고객코드"
                    />
                    <button
                      type="button"
                      className="flex h-7 w-7 items-center justify-center rounded border border-[#d6e0ea] bg-[#f8fbff] text-[#64748b] hover:bg-[#f0f4f8]"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-[#e7eef5]">
                <td className="py-2.5 pr-4 text-[12px] font-semibold text-[#64748b]">
                  계약번호
                </td>
                <td className="py-2.5">
                  <Input
                    value={form.contractNo}
                    onChange={(e) => handleChange("contractNo", e.target.value)}
                    className="h-7 w-44 border-[#d6e0ea] text-sm"
                    placeholder="계약번호"
                  />
                </td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 text-[12px] font-semibold text-[#64748b]">
                  계약유형
                </td>
                <td className="py-2.5">
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-1.5 cursor-pointer text-sm text-[#334155]">
                      <input
                        type="radio"
                        name="contractType"
                        value="가계약"
                        checked={form.contractType === "가계약"}
                        onChange={() => handleChange("contractType", "가계약")}
                        className="accent-[#002D56]"
                      />
                      가계약
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer text-sm text-[#334155]">
                      <input
                        type="radio"
                        name="contractType"
                        value="본계약"
                        checked={form.contractType === "본계약"}
                        onChange={() => handleChange("contractType", "본계약")}
                        className="accent-[#002D56]"
                      />
                      본계약
                    </label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="mt-4 flex gap-2">
            <button
              type="button"
              className="rounded-[8px] bg-[#002D56] px-5 py-1.5 text-sm font-semibold text-white hover:bg-[#00254a]"
            >
              조회
            </button>
          </div>
        </div>
      </div>

      {/* 임대보증금 신규/추가 그리드 */}
      <div className="rounded-[18px] border border-[#d7e2ee] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
        <div className="flex items-center justify-between border-b border-[#e7eef5] px-5 py-3">
          <div className="text-sm font-semibold text-[#0f172a]">
            임대보증금 신규/추가 목록
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-[8px] border border-[#002D56] px-4 py-1.5 text-xs font-semibold text-[#002D56] hover:bg-[#f0f4f8]"
            >
              신규
            </button>
            <button
              type="button"
              className="rounded-[8px] border border-[#002D56] px-4 py-1.5 text-xs font-semibold text-[#002D56] hover:bg-[#f0f4f8]"
            >
              추가
            </button>
            <button
              type="button"
              className="rounded-[8px] bg-[#002D56] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#00254a]"
            >
              저장
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-[#f1f5f9]">
                <th className="border-b border-r border-[#e7eef5] px-3 py-2.5 text-left font-semibold text-[#475569] whitespace-nowrap">고객코드</th>
                <th className="border-b border-r border-[#e7eef5] px-3 py-2.5 text-left font-semibold text-[#475569] whitespace-nowrap">고객명</th>
                <th className="border-b border-r border-[#e7eef5] px-3 py-2.5 text-left font-semibold text-[#475569] whitespace-nowrap">계약번호</th>
                <th className="border-b border-r border-[#e7eef5] px-3 py-2.5 text-left font-semibold text-[#475569] whitespace-nowrap">사업영역</th>
                <th className="border-b border-r border-[#e7eef5] px-3 py-2.5 text-left font-semibold text-[#475569] whitespace-nowrap">산정시작일</th>
                <th className="border-b border-r border-[#e7eef5] px-3 py-2.5 text-left font-semibold text-[#475569] whitespace-nowrap">산정종료일</th>
                <th className="border-b border-r border-[#e7eef5] px-3 py-2.5 text-right font-semibold text-[#475569] whitespace-nowrap">보증금</th>
                <th className="border-b border-r border-[#e7eef5] px-3 py-2.5 text-right font-semibold text-[#475569] whitespace-nowrap">추가보증금</th>
                <th className="border-b border-r border-[#e7eef5] px-3 py-2.5 text-left font-semibold text-[#475569] whitespace-nowrap">은행명</th>
                <th className="border-b border-r border-[#e7eef5] px-3 py-2.5 text-left font-semibold text-[#475569] whitespace-nowrap">계좌번호</th>
                <th className="border-b border-r border-[#e7eef5] px-3 py-2.5 text-left font-semibold text-[#475569] whitespace-nowrap">이체일</th>
                <th className="border-b border-[#e7eef5] px-3 py-2.5 text-left font-semibold text-[#475569] whitespace-nowrap">상태</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-[#f1f5f9] hover:bg-[#f8fbff] cursor-pointer"
                >
                  <td className="border-r border-[#f1f5f9] px-3 py-2 text-[#334155]">{row.customerCode}</td>
                  <td className="border-r border-[#f1f5f9] px-3 py-2 text-[#334155] whitespace-nowrap">{row.customerName}</td>
                  <td className="border-r border-[#f1f5f9] px-3 py-2 text-[#334155] font-mono">{row.contractNo}</td>
                  <td className="border-r border-[#f1f5f9] px-3 py-2 text-[#334155]">{row.bizArea}</td>
                  <td className="border-r border-[#f1f5f9] px-3 py-2 text-[#334155]">{row.startDate}</td>
                  <td className="border-r border-[#f1f5f9] px-3 py-2 text-[#334155]">{row.endDate}</td>
                  <td className="border-r border-[#f1f5f9] px-3 py-2 text-right text-[#334155]">{row.deposit}</td>
                  <td className="border-r border-[#f1f5f9] px-3 py-2 text-right text-[#334155]">{row.addDeposit}</td>
                  <td className="border-r border-[#f1f5f9] px-3 py-2 text-[#334155]">{row.bank}</td>
                  <td className="border-r border-[#f1f5f9] px-3 py-2 text-[#334155] font-mono">{row.account}</td>
                  <td className="border-r border-[#f1f5f9] px-3 py-2 text-[#334155]">{row.transferDate}</td>
                  <td className="px-3 py-2">
                    <span className="inline-block rounded-full bg-[#dcfce7] px-2 py-0.5 text-[10px] font-semibold text-[#166534]">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {rows.length === 0 && (
          <div className="flex min-h-[80px] items-center justify-center text-[13px] text-[#94a3b8]">
            No Data
          </div>
        )}
      </div>
    </div>
  );
}
