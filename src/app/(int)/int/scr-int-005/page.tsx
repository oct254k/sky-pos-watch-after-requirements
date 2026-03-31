"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { ModalPopup } from "@/components/common/ModalPopup";
import { FormPanel, FormField } from "@/components/common/FormPanel";
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
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} onRowClick={(row) => setSelected(row as unknown as Company)} />
      <ModalPopup open={!!selected} onClose={() => setSelected(null)} title="업체 상세정보" wide>
        {selected && (
          <FormPanel>
            <FormField label="업체코드"><Input value={selected.id} readOnly /></FormField>
            <FormField label="업체명"><Input value={selected.name} readOnly /></FormField>
            <FormField label="사업자번호"><Input value={selected.bizNo} readOnly /></FormField>
            <FormField label="대표자"><Input value={selected.ceo} readOnly /></FormField>
            <FormField label="구분"><Input value={selected.type} readOnly /></FormField>
            <FormField label="상태"><Input value={selected.status} readOnly /></FormField>
            <FormField label="연락처"><Input value={selected.phone} readOnly /></FormField>
            <FormField label="이메일"><Input value={selected.email} readOnly /></FormField>
            <FormField label="주소"><Input value={selected.address} readOnly /></FormField>
          </FormPanel>
        )}
      </ModalPopup>
    </div>
  );
}
