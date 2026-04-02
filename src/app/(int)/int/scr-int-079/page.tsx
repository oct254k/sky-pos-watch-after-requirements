"use client";

import { useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { ModalPopup } from "@/components/common/ModalPopup";
import { FormPanel, FormField } from "@/components/common/FormPanel";
import { Input } from "@/components/ui/input";
import { NumberInput } from "@/components/ui/number-input";
import { Button } from "@/components/ui/button";
import { commonCodes, CommonCode } from "@/data/mock";
import { toast } from "sonner";

export default function ScrInt079() {
  const [groupFilter, setGroupFilter] = useState("");
  const [data, setData] = useState(commonCodes);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<CommonCode | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSearch = () => {
    setData(commonCodes.filter((c) => !groupFilter || c.groupName.includes(groupFilter) || c.group.includes(groupFilter)));
  };

  const openNew = () => { setEditing({ group: "", groupName: "", code: "", name: "", description: "", sortOrder: 0, useYn: true }); setIsNew(true); setModalOpen(true); };
  const openEdit = (row: CommonCode) => { setEditing({ ...row }); setIsNew(false); setModalOpen(true); };
  const handleSave = () => {
    if (!editing || isSaving) return;
    setIsSaving(true);
    setTimeout(() => {
      if (isNew) {
        setData((p) => [...p, editing]);
        toast.success("공통코드가 등록되었습니다.");
      } else {
        setData((p) => p.map((c) => (c.group === editing.group && c.code === editing.code) ? editing : c));
        toast.success("공통코드가 저장되었습니다.");
      }
      setModalOpen(false);
      setIsSaving(false);
    }, 500);
  };

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
      <ActionBar><ActionButton label="신규 등록" onClick={openNew} /></ActionBar>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} keyField="code" onRowClick={(row) => openEdit(row as unknown as CommonCode)} />
      <ModalPopup open={modalOpen} onClose={() => setModalOpen(false)} title={isNew ? "공통코드 등록" : "공통코드 수정"} wide>
        {editing && (
          <div className="space-y-4">
            <section className="rounded-[14px] border border-[#dbe4ee] bg-white px-4 py-4">
              <div className="mb-3">
                <div className="text-[13px] font-semibold text-[#0f172a]">코드 요약</div>
              </div>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">그룹코드</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{editing.group || "-"}</div>
                </div>
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">그룹명</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{editing.groupName || "-"}</div>
                </div>
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">코드</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{editing.code || "-"}</div>
                </div>
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">정렬순서</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{editing.sortOrder}</div>
                </div>
              </div>
            </section>

            <section className="rounded-[14px] border border-[#dbe4ee] bg-white px-4 py-4">
              <div className="mb-3">
                <div className="text-[13px] font-semibold text-[#0f172a]">코드 상세</div>
              </div>

              <FormPanel>
                <FormField label="그룹코드"><Input value={editing.group} onChange={(e) => setEditing({ ...editing, group: e.target.value })} readOnly={!isNew} /></FormField>
                <FormField label="그룹명"><Input value={editing.groupName} onChange={(e) => setEditing({ ...editing, groupName: e.target.value })} /></FormField>
                <FormField label="코드"><Input value={editing.code} onChange={(e) => setEditing({ ...editing, code: e.target.value })} readOnly={!isNew} /></FormField>
                <FormField label="코드명"><Input value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} /></FormField>
                <FormField label="설명"><Input value={editing.description} onChange={(e) => setEditing({ ...editing, description: e.target.value })} /></FormField>
                <FormField label="정렬순서"><NumberInput value={editing.sortOrder} onValueChange={(value) => setEditing({ ...editing, sortOrder: Number(value || 0) })} /></FormField>
              </FormPanel>
            </section>

            <div className="mt-4 flex justify-end gap-2">
              <ActionButton label={isNew ? "등록" : "저장"} onClick={handleSave} loading={isSaving} />
              <Button size="sm" variant="outline" onClick={() => setModalOpen(false)} disabled={isSaving}>닫기</Button>
            </div>
          </div>
        )}
      </ModalPopup>
    </div>
  );
}
