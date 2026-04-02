"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { ModalPopup } from "@/components/common/ModalPopup";
import { Input } from "@/components/ui/input";
import { companies, Company } from "@/data/mock";

export default function ScrInt005() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(companies);
  const [selected, setSelected] = useState<Company | null>(null);

  const handleSearch = () => {
    setData(
      companies.filter(
        (c) => c.name.includes(keyword) || c.bizNo.includes(keyword) || c.ceo.includes(keyword)
      )
    );
  };

  const columns: Column<Company>[] = [
    { key: "id", label: "업체코드", width: "80px" },
    { key: "name", label: "업체명" },
    { key: "bizNo", label: "사업자번호", width: "130px" },
    { key: "ceo", label: "대표자", width: "80px" },
    { key: "type", label: "구분", width: "100px" },
    { key: "status", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.status} /> },
    { key: "contractCount", label: "계약수", width: "70px" },
    { key: "phone", label: "연락처" },
    { key: "regDate", label: "등록일", width: "120px" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">고객(업체)정보 조회</h2>
      <SearchPanel onSearch={handleSearch} onReset={() => { setKeyword(""); setData(companies); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">업체명/사업자번호/대표자</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-full max-w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} onRowClick={(row) => setSelected(row as unknown as Company)} />
      <ModalPopup open={!!selected} onClose={() => setSelected(null)} title="업체 상세정보" wide>
        {selected && (
          <div className="space-y-4">
            <section className="rounded-[14px] border border-[#dbe4ee] bg-white px-4 py-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[13px] font-semibold text-[#0f172a]">기본 요약 정보</div>
                </div>
                <StatusBadge status={selected.status} />
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">업체코드</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{selected.id}</div>
                </div>
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">업체구분</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{selected.type}</div>
                </div>
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">계약수</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{selected.contractCount}건</div>
                </div>
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">등록일</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{selected.regDate}</div>
                </div>
              </div>
            </section>

            <section className="rounded-[14px] border border-[#dbe4ee] bg-white px-4 py-4">
              <div className="mb-3">
                <div className="text-[13px] font-semibold text-[#0f172a]">기본 정보</div>
                <div className="mt-1 text-xs text-[#64748b]">업체명과 사업자번호, 대표자 정보를 확인합니다.</div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#64748b]">업체명</label>
                  <Input value={selected.name} readOnly />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#64748b]">사업자번호</label>
                  <Input value={selected.bizNo} readOnly />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#64748b]">대표자</label>
                  <Input value={selected.ceo} readOnly />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#64748b]">상태</label>
                  <Input value={selected.status} readOnly />
                </div>
              </div>
            </section>

            <section className="rounded-[14px] border border-[#dbe4ee] bg-white px-4 py-4">
              <div className="mb-3">
                <div className="text-[13px] font-semibold text-[#0f172a]">연락처 및 주소</div>
                <div className="mt-1 text-xs text-[#64748b]">연락 채널과 사업장 주소를 함께 확인합니다.</div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#64748b]">연락처</label>
                  <Input value={selected.phone} readOnly />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#64748b]">이메일</label>
                  <Input value={selected.email} readOnly />
                </div>
                <div className="col-span-2 flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#64748b]">주소</label>
                  <Input value={selected.address} readOnly />
                </div>
              </div>
            </section>
          </div>
        )}
      </ModalPopup>
    </div>
  );
}
