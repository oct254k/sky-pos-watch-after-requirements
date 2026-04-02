"use client";

import { useState } from "react";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { ModalPopup } from "@/components/common/ModalPopup";
import { FormPanel, FormField } from "@/components/common/FormPanel";
import { Input } from "@/components/ui/input";
import { NumberInput } from "@/components/ui/number-input";
import { Button } from "@/components/ui/button";
import { useConfirm } from "@/components/common/ConfirmProvider";
import { StatusBadge } from "@/components/common/StatusBadge";
import { toast } from "sonner";

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
  const confirm = useConfirm();
  const [data, setData] = useState(initData);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<MenuRow | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const openNew = () => { setEditing({ id: `M${String(data.length + 1).padStart(3, "0")}`, menuName: "", parentMenu: "", path: "", sortOrder: 0, useYn: "Y", area: "int" }); setIsNew(true); setModalOpen(true); };
  const openEdit = (row: MenuRow) => { setEditing({ ...row }); setIsNew(false); setModalOpen(true); };
  const handleSave = () => {
    if (!editing) return;
    if (isSaving) return;
    setIsSaving(true);
    if (isNew) {
      setTimeout(() => {
        setData((p) => [...p, editing]);
        toast.success("메뉴가 등록되었습니다.");
        setIsSaving(false);
        setModalOpen(false);
      }, 500);
      return;
    } else {
      setTimeout(() => {
        setData((p) => p.map((m) => m.id === editing.id ? editing : m));
        toast.success("메뉴 정보가 저장되었습니다.");
        setIsSaving(false);
        setModalOpen(false);
      }, 500);
      return;
    }
  };
  const handleDelete = async () => {
    if (!editing) return;
    if (isDeleting) return;
    const confirmed = await confirm({
      title: "메뉴 삭제",
      message: "선택한 메뉴를 삭제하시겠습니까?\n삭제 후에는 되돌릴 수 없습니다.",
      confirmLabel: "삭제",
      cancelLabel: "취소",
      tone: "danger",
    });
    if (!confirmed) return;
    setIsDeleting(true);
    setTimeout(() => {
      setData((p) => p.filter((m) => m.id !== editing.id));
      setModalOpen(false);
      toast.success("메뉴가 삭제되었습니다.");
      setIsDeleting(false);
    }, 500);
  };

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
      <ActionBar><ActionButton label="신규 등록" onClick={openNew} /></ActionBar>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} onRowClick={(row) => openEdit(row as unknown as MenuRow)} />
      <ModalPopup open={modalOpen} onClose={() => setModalOpen(false)} title={isNew ? "메뉴 등록" : "메뉴 수정"} wide>
        {editing && (
          <div className="space-y-4">
            <section className="rounded-[14px] border border-[#dbe4ee] bg-white px-4 py-4">
              <div className="mb-3 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[13px] font-semibold text-[#0f172a]">메뉴 요약</div>
                </div>
                <StatusBadge status={editing.useYn === "Y" ? "정상" : "비활성"} />
              </div>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">메뉴ID</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{editing.id}</div>
                </div>
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">상위메뉴</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{editing.parentMenu || "-"}</div>
                </div>
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">경로</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{editing.path || "-"}</div>
                </div>
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">정렬순서</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{editing.sortOrder}</div>
                </div>
              </div>
            </section>

            <section className="rounded-[14px] border border-[#dbe4ee] bg-white px-4 py-4">
              <div className="mb-3">
                <div className="text-[13px] font-semibold text-[#0f172a]">메뉴 상세</div>
              </div>

              <FormPanel>
                <FormField label="메뉴ID"><Input value={editing.id} readOnly /></FormField>
                <FormField label="메뉴명"><Input value={editing.menuName} onChange={(e) => setEditing({ ...editing, menuName: e.target.value })} /></FormField>
                <FormField label="상위메뉴"><Input value={editing.parentMenu} onChange={(e) => setEditing({ ...editing, parentMenu: e.target.value })} /></FormField>
                <FormField label="경로"><Input value={editing.path} onChange={(e) => setEditing({ ...editing, path: e.target.value })} /></FormField>
                <FormField label="정렬순서"><NumberInput value={editing.sortOrder} onValueChange={(value) => setEditing({ ...editing, sortOrder: Number(value || 0) })} /></FormField>
                <FormField label="사용여부(Y/N)"><Input value={editing.useYn} onChange={(e) => setEditing({ ...editing, useYn: e.target.value })} /></FormField>
              </FormPanel>
            </section>

            <div className="mt-4 flex justify-end gap-2">
              <ActionButton label={isNew ? "등록" : "저장"} onClick={handleSave} loading={isSaving} disabled={isDeleting} />
              {!isNew && <ActionButton label="삭제" variant="destructive" onClick={handleDelete} loading={isDeleting} disabled={isSaving} />}
              <Button size="sm" variant="outline" onClick={() => setModalOpen(false)} disabled={isSaving || isDeleting}>닫기</Button>
            </div>
          </div>
        )}
      </ModalPopup>
    </div>
  );
}
