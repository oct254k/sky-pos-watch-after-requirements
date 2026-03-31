"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { ModalPopup } from "@/components/common/ModalPopup";
import { FormPanel, FormField } from "@/components/common/FormPanel";
import { Input } from "@/components/ui/input";
import { stores, Store } from "@/data/mock";

export default function ScrInt013() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(stores);
  const [selected, setSelected] = useState<Store | null>(null);

  const handleSearch = () => {
    setData(stores.filter((s) => s.name.includes(keyword) || s.companyName.includes(keyword) || s.floor.includes(keyword)));
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
      <SearchPanel onSearch={handleSearch} onReset={() => { setKeyword(""); setData(stores); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">매장명/업체명/층</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} onRowClick={(row) => setSelected(row as unknown as Store)} />
      <ModalPopup open={!!selected} onClose={() => setSelected(null)} title="매장 상세정보" wide>
        {selected && (
          <FormPanel>
            <FormField label="매장ID"><Input value={selected.id} readOnly /></FormField>
            <FormField label="매장명"><Input value={selected.name} readOnly /></FormField>
            <FormField label="층"><Input value={selected.floor} readOnly /></FormField>
            <FormField label="면적(m2)"><Input value={String(selected.area)} readOnly /></FormField>
            <FormField label="업체명"><Input value={selected.companyName} readOnly /></FormField>
            <FormField label="업종"><Input value={selected.category} readOnly /></FormField>
            <FormField label="상태"><Input value={selected.status} readOnly /></FormField>
            <FormField label="개점일"><Input value={selected.openDate} readOnly /></FormField>
          </FormPanel>
        )}
      </ModalPopup>
    </div>
  );
}
