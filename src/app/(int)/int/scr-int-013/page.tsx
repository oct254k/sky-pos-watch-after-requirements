"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { ModalPopup } from "@/components/common/ModalPopup";
import { Input } from "@/components/ui/input";
import { stores, Store } from "@/data/mock";

export default function ScrInt013() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(stores);
  const [selected, setSelected] = useState<Store | null>(null);

  const handleSearch = () => {
    setData(stores.filter((s) => s.name.includes(keyword) || s.companyName.includes(keyword) || s.floor.includes(keyword)));
  };

  const handleReset = () => {
    setKeyword("");
    setData(stores);
  };

  const columns: Column<Store>[] = [
    { key: "id", label: "매장ID", width: "80px" },
    { key: "name", label: "매장명" },
    { key: "floor", label: "층", width: "60px" },
    { key: "area", label: "면적(m2)", width: "80px" },
    { key: "companyName", label: "업체명" },
    { key: "category", label: "업종", width: "80px" },
    { key: "status", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.status} /> },
    { key: "openDate", label: "개점일", width: "120px" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">매장정보 관리</h2>
      <SearchPanel onSearch={handleSearch} onReset={handleReset}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">매장명/업체명/층</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} onRowClick={(row) => setSelected(row as unknown as Store)} />
      <ModalPopup open={!!selected} onClose={() => setSelected(null)} title="매장 상세정보" wide>
        {selected && (
          <div className="space-y-4">
            <section className="rounded-[14px] border border-[#dbe4ee] bg-white px-4 py-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[13px] font-semibold text-[#0f172a]">기본 요약 정보</div>
                </div>
                <StatusBadge status={selected.status} />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">매장ID</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{selected.id}</div>
                </div>
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">층</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{selected.floor}</div>
                </div>
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">면적</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{selected.area}m2</div>
                </div>
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">개점일</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{selected.openDate}</div>
                </div>
              </div>
            </section>

            <section className="rounded-[14px] border border-[#dbe4ee] bg-white px-4 py-4">
              <div className="mb-3">
                <div className="text-[13px] font-semibold text-[#0f172a]">매장 기본 정보</div>
                <div className="mt-1 text-xs text-[#64748b]">매장명과 소속 업체 정보를 확인합니다.</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#64748b]">매장명</label>
                  <Input value={selected.name} readOnly />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#64748b]">업체명</label>
                  <Input value={selected.companyName} readOnly />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#64748b]">업종</label>
                  <Input value={selected.category} readOnly />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#64748b]">상태</label>
                  <Input value={selected.status} readOnly />
                </div>
              </div>
            </section>

            <section className="rounded-[14px] border border-[#dbe4ee] bg-white px-4 py-4">
              <div className="mb-3">
                <div className="text-[13px] font-semibold text-[#0f172a]">운영 메모</div>
                <div className="mt-1 text-xs text-[#64748b]">층별 배치와 운영 현황을 함께 확인합니다.</div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">소속 업체ID</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{selected.companyId}</div>
                </div>
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">층 구분</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{selected.floor}</div>
                </div>
              </div>
            </section>
          </div>
        )}
      </ModalPopup>
    </div>
  );
}
