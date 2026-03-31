"use client";

import { useState } from "react";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { ModalPopup } from "@/components/common/ModalPopup";
import { FormPanel, FormField } from "@/components/common/FormPanel";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface MenuRow { id: string; menuName: string; parentMenu: string; path: string; sortOrder: number; useYn: string; area: string; }

const initData: MenuRow[] = [
  { id: "M001", menuName: "운영현황 대시보드", parentMenu: "-", path: "/int", sortOrder: 1, useYn: "Y", area: "int" },
  { id: "M002", menuName: "매출추이 현황 분석", parentMenu: "운영현황 대시보드", path: "/int/scr-int-002", sortOrder: 1, useYn: "Y", area: "int" },
  { id: "M003", menuName: "기준정보 관리", parentMenu: "-", path: "/int", sortOrder: 2, useYn: "Y", area: "int" },
  { id: "M004", menuName: "고객(업체)정보 조회", parentMenu: "기준정보 관리", path: "/int/scr-int-005", sortOrder: 1, useYn: "Y", area: "int" },
  { id: "M005", menuName: "계약정보 관리", parentMenu: "기준정보 관리", path: "/int/scr-int-006", sortOrder: 2, useYn: "Y", area: "int" },
  { id: "M006", menuName: "매출분석", parentMenu: "-", path: "/int", sortOrder: 6, useYn: "Y", area: "int" },
  { id: "M007", menuName: "시스템 관리", parentMenu: "-", path: "/int", sortOrder: 14, useYn: "Y", area: "int" },
];

export default function ScrInt077() {
  const [data, setData] = useState(initData);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<MenuRow | null>(null);
  const [isNew, setIsNew] = useState(false);

  const openNew = () => { setEditing({ id: `M${String(data.length + 1).padStart(3, "0")}`, menuName: "", parentMenu: "", path: "", sortOrder: 0, useYn: "Y", area: "int" }); setIsNew(true); setModalOpen(true); };
  const openEdit = (row: MenuRow) => { setEditing({ ...row }); setIsNew(false); setModalOpen(true); };
  const handleSave = () => { if (!editing) return; if (isNew) setData((p) => [...p, editing]); else setData((p) => p.map((m) => m.id === editing.id ? editing : m)); setModalOpen(false); };
  const handleDelete = () => { if (!editing || !confirm("삭제하시겠습니까?")) return; setData((p) => p.filter((m) => m.id !== editing.id)); setModalOpen(false); };

  const columns: Column<MenuRow>[] = [
    { key: "id", label: "메뉴ID", width: "80px" },
    { key: "menuName", label: "메뉴명" },
    { key: "parentMenu", label: "상위메뉴" },
    { key: "path", label: "경로" },
    { key: "sortOrder", label: "정렬순서", width: "80px" },
    { key: "useYn", label: "사용여부", width: "80px" },
    { key: "area", label: "영역", width: "60px" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">메뉴 관리</h2>
      <ActionBar><ActionButton label="메뉴 등록" onClick={openNew} /></ActionBar>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} onRowClick={(row) => openEdit(row as unknown as MenuRow)} />
      <ModalPopup open={modalOpen} onClose={() => setModalOpen(false)} title={isNew ? "메뉴 등록" : "메뉴 수정"}>
        {editing && (
          <>
            <FormPanel>
              <FormField label="메뉴ID"><Input value={editing.id} readOnly /></FormField>
              <FormField label="메뉴명"><Input value={editing.menuName} onChange={(e) => setEditing({ ...editing, menuName: e.target.value })} /></FormField>
              <FormField label="상위메뉴"><Input value={editing.parentMenu} onChange={(e) => setEditing({ ...editing, parentMenu: e.target.value })} /></FormField>
              <FormField label="경로"><Input value={editing.path} onChange={(e) => setEditing({ ...editing, path: e.target.value })} /></FormField>
              <FormField label="정렬순서"><Input type="number" value={editing.sortOrder} onChange={(e) => setEditing({ ...editing, sortOrder: Number(e.target.value) })} /></FormField>
              <FormField label="사용여부(Y/N)"><Input value={editing.useYn} onChange={(e) => setEditing({ ...editing, useYn: e.target.value })} /></FormField>
            </FormPanel>
            <div className="mt-4 flex justify-end gap-2">
              <Button size="sm" onClick={handleSave}>{isNew ? "등록" : "저장"}</Button>
              {!isNew && <Button size="sm" variant="destructive" onClick={handleDelete}>삭제</Button>}
              <Button size="sm" variant="outline" onClick={() => setModalOpen(false)}>취소</Button>
            </div>
          </>
        )}
      </ModalPopup>
    </div>
  );
}
