"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { ModalPopup } from "@/components/common/ModalPopup";
import { FormPanel, FormField } from "@/components/common/FormPanel";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { commonCodes, CommonCode } from "@/data/mock";

export default function ScrInt079() {
  const [groupFilter, setGroupFilter] = useState("");
  const [data, setData] = useState(commonCodes);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<CommonCode | null>(null);
  const [isNew, setIsNew] = useState(false);

  const handleSearch = () => {
    setData(commonCodes.filter((c) => !groupFilter || c.groupName.includes(groupFilter) || c.group.includes(groupFilter)));
  };

  const openNew = () => { setEditing({ group: "", groupName: "", code: "", name: "", description: "", sortOrder: 0, useYn: true }); setIsNew(true); setModalOpen(true); };
  const openEdit = (row: CommonCode) => { setEditing({ ...row }); setIsNew(false); setModalOpen(true); };
  const handleSave = () => { if (!editing) return; if (isNew) setData((p) => [...p, editing]); else setData((p) => p.map((c) => (c.group === editing.group && c.code === editing.code) ? editing : c)); setModalOpen(false); };

  const columns: Column<CommonCode>[] = [
    { key: "group", label: "그룹코드", width: "140px" },
    { key: "groupName", label: "그룹명", width: "100px" },
    { key: "code", label: "코드", width: "100px" },
    { key: "name", label: "코드명" },
    { key: "description", label: "설명" },
    { key: "sortOrder", label: "정렬", width: "60px" },
    { key: "useYn", label: "사용", width: "60px", render: (row) => <span>{row.useYn ? "Y" : "N"}</span> },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">공통코드 관리</h2>
      <SearchPanel onSearch={handleSearch} onReset={() => { setGroupFilter(""); setData(commonCodes); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">그룹코드/그룹명</label>
          <Input placeholder="검색어" value={groupFilter} onChange={(e) => setGroupFilter(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <ActionBar><ActionButton label="코드 등록" onClick={openNew} /></ActionBar>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} keyField="code" onRowClick={(row) => openEdit(row as unknown as CommonCode)} />
      <ModalPopup open={modalOpen} onClose={() => setModalOpen(false)} title={isNew ? "공통코드 등록" : "공통코드 수정"}>
        {editing && (
          <>
            <FormPanel>
              <FormField label="그룹코드"><Input value={editing.group} onChange={(e) => setEditing({ ...editing, group: e.target.value })} readOnly={!isNew} /></FormField>
              <FormField label="그룹명"><Input value={editing.groupName} onChange={(e) => setEditing({ ...editing, groupName: e.target.value })} /></FormField>
              <FormField label="코드"><Input value={editing.code} onChange={(e) => setEditing({ ...editing, code: e.target.value })} readOnly={!isNew} /></FormField>
              <FormField label="코드명"><Input value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} /></FormField>
              <FormField label="설명"><Input value={editing.description} onChange={(e) => setEditing({ ...editing, description: e.target.value })} /></FormField>
              <FormField label="정렬순서"><Input type="number" value={editing.sortOrder} onChange={(e) => setEditing({ ...editing, sortOrder: Number(e.target.value) })} /></FormField>
            </FormPanel>
            <div className="mt-4 flex justify-end gap-2">
              <Button size="sm" onClick={handleSave}>{isNew ? "등록" : "저장"}</Button>
              <Button size="sm" variant="outline" onClick={() => setModalOpen(false)}>취소</Button>
            </div>
          </>
        )}
      </ModalPopup>
    </div>
  );
}
