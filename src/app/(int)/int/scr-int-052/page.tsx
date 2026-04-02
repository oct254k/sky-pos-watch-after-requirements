"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { ModalPopup } from "@/components/common/ModalPopup";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { aiDetections, AiDetection } from "@/data/mock";

const riskColors = { high: "bg-red-100 text-red-800", medium: "bg-yellow-100 text-yellow-800", low: "bg-green-100 text-green-800" };

export default function ScrInt052() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(aiDetections);
  const [selected, setSelected] = useState<AiDetection | null>(null);

  const handleSearch = () => {
    setData(aiDetections.filter((d) => d.storeName.includes(keyword) || d.companyName.includes(keyword) || d.type.includes(keyword)));
  };

  const columns: Column<AiDetection>[] = [
    { key: "id", label: "ID", width: "80px" },
    { key: "type", label: "유형", width: "100px" },
    { key: "storeName", label: "매장명" },
    { key: "companyName", label: "업체명" },
    { key: "riskLevel", label: "위험도", width: "100px", render: (row) => <Badge className={riskColors[row.riskLevel]} variant="outline">{row.riskLevel}</Badge> },
    { key: "score", label: "점수", width: "60px" },
    { key: "description", label: "설명" },
    { key: "detectedAt", label: "탐지시간", width: "130px" },
    { key: "status", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.status} /> },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">이상거래 관리 모니터링</h2>
      <SearchPanel onSearch={handleSearch} onReset={() => { setKeyword(""); setData(aiDetections); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">매장명/업체명/유형</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} onRowClick={(row) => setSelected(row as unknown as AiDetection)} />
      <ModalPopup open={!!selected} onClose={() => setSelected(null)} title="이상거래 상세" wide>
        {selected && (
          <div className="space-y-4 text-sm">
            <section className="rounded-[14px] border border-[#dbe4ee] bg-white px-4 py-4">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <div className="text-[13px] font-semibold text-[#0f172a]">탐지 요약 정보</div>
                </div>
                <StatusBadge status={selected.status} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">탐지ID / 유형</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{selected.id} / {selected.type}</div>
                </div>
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">매장 / 업체</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{selected.storeName} / {selected.companyName}</div>
                </div>
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">위험도 / 점수</div>
                  <div className="mt-1 flex items-center gap-2">
                    <Badge className={riskColors[selected.riskLevel]} variant="outline">{selected.riskLevel}</Badge>
                    <span className="text-sm font-semibold text-[#0f172a]">{selected.score}점</span>
                  </div>
                </div>
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">탐지시간</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{selected.detectedAt}</div>
                </div>
              </div>
            </section>

            <section className="rounded-[14px] border border-[#dbe4ee] bg-white px-4 py-4">
              <div className="mb-3">
                <div className="text-[13px] font-semibold text-[#0f172a]">탐지 내용</div>
              </div>
              <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-4 py-4 leading-6 text-[#334155]">
                {selected.description}
              </div>
            </section>
          </div>
        )}
      </ModalPopup>
    </div>
  );
}
