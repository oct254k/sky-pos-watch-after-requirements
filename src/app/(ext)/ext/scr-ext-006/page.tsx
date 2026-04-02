"use client";

import { useRef, useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { ModalPopup } from "@/components/common/ModalPopup";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Input } from "@/components/ui/input";
import { receipts as mockReceipts, Receipt } from "@/data/mock";
import { toast } from "sonner";

export default function ScrExt006() {
  const [data, setData] = useState<Receipt[]>(mockReceipts);
  const [startDate, setStartDate] = useState("2025-01-01");
  const [endDate, setEndDate] = useState("2025-01-31");
  const [storeName, setStoreName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState<Receipt | null>(null);
  const searchTimerRef = useRef<ReturnType<typeof window.setTimeout> | null>(null);

  const columns: Column<Receipt>[] = [
    { key: "id", label: "영수증번호", width: "110px" },
    { key: "storeName", label: "매장", width: "120px" },
    { key: "companyName", label: "업체명", width: "120px" },
    { key: "date", label: "날짜", width: "110px" },
    { key: "time", label: "시간", width: "80px" },
    { key: "totalAmount", label: "합계", width: "120px", render: (row) => `${row.totalAmount.toLocaleString()}원` },
    { key: "paymentMethod", label: "결제수단", width: "90px" },
    { key: "status", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.status} /> },
  ];

  const applySearch = () => {
    let filtered = [...mockReceipts];
    if (startDate) filtered = filtered.filter((r) => r.date >= startDate);
    if (endDate) filtered = filtered.filter((r) => r.date <= endDate);
    if (storeName) filtered = filtered.filter((r) => r.storeName.includes(storeName));
    setData(filtered);
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
    setStartDate("2025-01-01");
    setEndDate("2025-01-31");
    setStoreName("");
    setData(mockReceipts);
    setIsLoading(false);
    searchTimerRef.current = null;
  };

  const handleRowClick = (row: Receipt) => {
    setSelected(row);
    setModalOpen(true);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">영수증 조회</h2>
      <SearchPanel loading={isLoading} onSearch={handleSearch} onReset={handleReset}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">시작일</label>
          <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-40" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">종료일</label>
          <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-40" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">매장</label>
          <Input value={storeName} onChange={(e) => setStoreName(e.target.value)} placeholder="매장명" className="w-40" />
        </div>
      </SearchPanel>
      <DataGrid
        columns={columns}
        data={data as unknown as Record<string, unknown>[]}
        onRowClick={(row) => handleRowClick(row as unknown as Receipt)}
        loading={isLoading}
        loadingMessage="영수증 데이터를 불러오는 중입니다"
      />
      <ActionBar>
        <ActionButton label="엑셀 다운로드" variant="outline" onClick={() => toast.info("엑셀 다운로드를 시작합니다.")} />
      </ActionBar>

      <ModalPopup open={modalOpen} onClose={() => setModalOpen(false)} title="영수증 상세" wide>
        {selected && (
          <div className="space-y-4">
            <section className="rounded-[14px] border border-[#dbe4ee] bg-white px-4 py-4">
              <div className="mb-3 flex items-start justify-between gap-4">
                <div>
                  <div className="text-[13px] font-semibold text-[#0f172a]">기본 요약 정보</div>
                </div>
                <StatusBadge status={selected.status} />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">영수증번호</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{selected.id}</div>
                </div>
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">매장</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{selected.storeName}</div>
                </div>
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">일시</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">
                    {selected.date} {selected.time}
                  </div>
                </div>
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">결제수단</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{selected.paymentMethod}</div>
                </div>
              </div>
            </section>

            <section className="rounded-[14px] border border-[#dbe4ee] bg-white px-4 py-4">
              <div className="mb-3">
                <div className="text-[13px] font-semibold text-[#0f172a]">결제/연계 정보</div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">VAN TID</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{selected.vanTid}</div>
                </div>
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">총 결제금액</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{selected.totalAmount.toLocaleString()}원</div>
                </div>
              </div>
            </section>

            <section className="rounded-[14px] border border-[#dbe4ee] bg-white px-4 py-4">
              <div className="mb-3">
                <div className="text-[13px] font-semibold text-[#0f172a]">품목 내역</div>
                <div className="mt-1 text-xs text-[#64748b]">영수증에 포함된 품목과 합계를 확인합니다.</div>
              </div>

              <div className="overflow-hidden rounded-[12px] border border-[#e5edf5]">
                <div className="divide-y divide-[#e9eef5]">
                  {selected.items.map((item, i) => (
                    <div key={i} className="flex items-center justify-between gap-4 bg-white px-3 py-3 text-sm">
                      <div>
                        <div className="font-medium text-[#0f172a]">{item.name}</div>
                        <div className="mt-0.5 text-xs text-[#64748b]">수량 {item.qty}개</div>
                      </div>
                      <div className="text-right font-semibold text-[#0f172a]">
                        {(item.price * item.qty).toLocaleString()}원
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between border-t border-[#e5edf5] bg-[#f8fbff] px-3 py-3 text-sm font-semibold text-[#0f172a]">
                  <span>합계</span>
                  <span>{selected.totalAmount.toLocaleString()}원</span>
                </div>
              </div>
            </section>
          </div>
        )}
      </ModalPopup>
    </div>
  );
}
