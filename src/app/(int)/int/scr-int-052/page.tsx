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
          <div className="space-y-3 text-sm">
            <div className="grid grid-cols-2 gap-2">
              <div><span className="text-muted-foreground">유형:</span> {selected.type}</div>
              <div><span className="text-muted-foreground">매장:</span> {selected.storeName}</div>
              <div><span className="text-muted-foreground">업체:</span> {selected.companyName}</div>
              <div><span className="text-muted-foreground">위험도:</span> <Badge className={riskColors[selected.riskLevel]} variant="outline">{selected.riskLevel} ({selected.score}점)</Badge></div>
              <div><span className="text-muted-foreground">탐지시간:</span> {selected.detectedAt}</div>
              <div><span className="text-muted-foreground">상태:</span> {selected.status}</div>
            </div>
            <div className="rounded border bg-muted/30 p-3">
              <p className="font-medium">탐지 내용</p>
              <p className="mt-1">{selected.description}</p>
            </div>
          </div>
        )}
      </ModalPopup>
    </div>
  );
}
