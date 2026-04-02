"use client";

import { useRef, useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { ModalPopup } from "@/components/common/ModalPopup";
import { Input } from "@/components/ui/input";
import { receipts, Receipt } from "@/data/mock";

export default function ScrInt020() {
  const [keyword, setKeyword] = useState("");
  const [date, setDate] = useState("");
  const [data, setData] = useState(receipts);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState<Receipt | null>(null);
  const searchTimerRef = useRef<ReturnType<typeof window.setTimeout> | null>(null);

  const applySearch = () => {
    setData(receipts.filter((r) => {
      const matchKw = !keyword || r.storeName.includes(keyword) || r.companyName.includes(keyword);
      const matchDate = !date || r.date === date;
      return matchKw && matchDate;
    }));
  };

  const handleSearch = () => {
    if (searchTimerRef.current) window.clearTimeout(searchTimerRef.current);
    setIsLoading(true);
    searchTimerRef.current = window.setTimeout(() => {
      applySearch();
      setIsLoading(false);
      searchTimerRef.current = null;
    }, 800);
  };

  const handleReset = () => {
    if (searchTimerRef.current) window.clearTimeout(searchTimerRef.current);
    setKeyword("");
    setDate("");
    setData(receipts);
    setIsLoading(false);
    searchTimerRef.current = null;
  };

  const columns: Column<Receipt>[] = [
    { key: "id", label: "영수증ID", width: "80px" },
    { key: "storeName", label: "매장명" },
    { key: "companyName", label: "업체명" },
    { key: "date", label: "일자", width: "120px" },
    { key: "time", label: "시간", width: "70px" },
    { key: "totalAmount", label: "합계금액", width: "120px", render: (row) => <span>{Number(row.totalAmount).toLocaleString()}원</span> },
    { key: "paymentMethod", label: "결제수단", width: "80px" },
    { key: "status", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.status} /> },
    { key: "vanTid", label: "VAN TID", width: "110px" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">영수증 관리</h2>
      <SearchPanel loading={isLoading} onSearch={handleSearch} onReset={handleReset}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">매장명/업체명</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-48" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">일자</label>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-40" />
        </div>
      </SearchPanel>
      <DataGrid
        columns={columns}
        data={data as unknown as Record<string, unknown>[]}
        onRowClick={(row) => setSelected(row as unknown as Receipt)}
        loading={isLoading}
        loadingMessage="영수증 관리 데이터를 불러오는 중입니다"
      />
      <ModalPopup open={!!selected} onClose={() => setSelected(null)} title="영수증 상세" wide>
        {selected && (
          <div className="space-y-4">
            <section className="rounded-[14px] border border-[#dbe4ee] bg-white px-4 py-4">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <div className="text-[13px] font-semibold text-[#0f172a]">영수증 요약 정보</div>
                </div>
                <StatusBadge status={selected.status} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">영수증번호</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{selected.id}</div>
                </div>
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">매장 / 업체</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{selected.storeName} / {selected.companyName}</div>
                </div>
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">거래일시</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{selected.date} {selected.time}</div>
                </div>
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">결제수단 / VAN TID</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{selected.paymentMethod} / {selected.vanTid}</div>
                </div>
              </div>
            </section>

            <section className="rounded-[14px] border border-[#dbe4ee] bg-white px-4 py-4">
              <div className="mb-3">
                <div className="text-[13px] font-semibold text-[#0f172a]">품목 내역</div>
              </div>
              <div className="overflow-hidden rounded-[12px] border border-[#e5edf5]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-[#f8fbff]">
                      <th className="px-3 py-2 text-left font-medium text-[#64748b]">품목</th>
                      <th className="px-3 py-2 text-right font-medium text-[#64748b]">수량</th>
                      <th className="px-3 py-2 text-right font-medium text-[#64748b]">단가</th>
                      <th className="px-3 py-2 text-right font-medium text-[#64748b]">금액</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selected.items.map((item, i) => (
                      <tr key={i} className="border-b last:border-b-0">
                        <td className="px-3 py-2 text-[#0f172a]">{item.name}</td>
                        <td className="px-3 py-2 text-right text-[#334155]">{item.qty}</td>
                        <td className="px-3 py-2 text-right text-[#334155]">{item.price.toLocaleString()}</td>
                        <td className="px-3 py-2 text-right font-medium text-[#0f172a]">{(item.qty * item.price).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-3 flex justify-end">
                <div className="rounded-[12px] border border-[#dbe4ee] bg-[#f8fbff] px-4 py-3 text-right">
                  <div className="text-[11px] font-medium text-[#7b8da1]">합계금액</div>
                  <div className="mt-1 text-lg font-bold text-[#0f172a]">{selected.totalAmount.toLocaleString()}원</div>
                </div>
              </div>
            </section>
          </div>
        )}
      </ModalPopup>
    </div>
  );
}
