"use client";

import { useState } from "react";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { ModalPopup } from "@/components/common/ModalPopup";
import { FormPanel, FormField } from "@/components/common/FormPanel";
import { Input } from "@/components/ui/input";
import { NumberInput } from "@/components/ui/number-input";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/common/StatusBadge";
import { toast } from "sonner";

interface AgentConfig { id: string; agentName: string; storeName: string; syncInterval: number; retryCount: number; logLevel: string; autoRestart: string; status: string; updatedAt: string; }

const initData: AgentConfig[] = [
  { id: "AC001", agentName: "Agent-S001", storeName: "1층 A-101", syncInterval: 5, retryCount: 3, logLevel: "INFO", autoRestart: "Y", status: "정상", updatedAt: "2025-01-15" },
  { id: "AC002", agentName: "Agent-S003", storeName: "2층 B-201", syncInterval: 5, retryCount: 3, logLevel: "INFO", autoRestart: "Y", status: "정상", updatedAt: "2025-01-15" },
  { id: "AC003", agentName: "Agent-S005", storeName: "3층 C-301", syncInterval: 3, retryCount: 5, logLevel: "DEBUG", autoRestart: "Y", status: "정상", updatedAt: "2025-01-10" },
  { id: "AC004", agentName: "Agent-S007", storeName: "1층 A-105", syncInterval: 10, retryCount: 2, logLevel: "WARN", autoRestart: "N", status: "정상", updatedAt: "2025-01-12" },
];

export default function ScrInt068() {
  const [data, setData] = useState(initData);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<AgentConfig | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isApplying, setIsApplying] = useState(false);

  const openEdit = (row: AgentConfig) => { setEditing({ ...row }); setModalOpen(true); };
  const handleSave = () => {
    if (!editing || isSaving) return;
    setIsSaving(true);
    setTimeout(() => {
      setData((prev) => prev.map((d) => d.id === editing.id ? { ...editing, updatedAt: new Date().toISOString().slice(0, 10) } : d));
      setModalOpen(false);
      toast.success("Agent 설정이 저장되었습니다.");
      setIsSaving(false);
    }, 500);
  };

  const columns: Column<AgentConfig>[] = [
    { key: "id", label: "설정ID", width: "80px" },
    { key: "agentName", label: "Agent명" },
    { key: "storeName", label: "매장명" },
    { key: "syncInterval", label: "동기화주기(분)", width: "110px" },
    { key: "retryCount", label: "재시도횟수", width: "90px" },
    { key: "logLevel", label: "로그레벨", width: "80px" },
    { key: "autoRestart", label: "자동재시작", width: "90px" },
    { key: "status", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.status} /> },
    { key: "updatedAt", label: "수정일", width: "120px" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Agent 설정 관리</h2>
      <ActionBar><ActionButton label="일괄 적용" onClick={() => {
        if (isApplying) return;
        setIsApplying(true);
        setTimeout(() => {
          toast.success("Agent 설정이 일괄 적용되었습니다.");
          setIsApplying(false);
        }, 500);
      }} loading={isApplying} /></ActionBar>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} onRowClick={(row) => openEdit(row as unknown as AgentConfig)} />
      <ModalPopup open={modalOpen} onClose={() => setModalOpen(false)} title="Agent 설정 수정" wide>
        {editing && (
          <div className="space-y-4">
            <section className="rounded-[14px] border border-[#dbe4ee] bg-white px-4 py-4">
              <div className="mb-3 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[13px] font-semibold text-[#0f172a]">Agent 요약</div>
                </div>
                <StatusBadge status={editing.status} />
              </div>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">Agent명</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{editing.agentName}</div>
                </div>
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">매장명</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{editing.storeName}</div>
                </div>
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">마지막 수정</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{editing.updatedAt}</div>
                </div>
                <div className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
                  <div className="text-[11px] font-medium text-[#7b8da1]">자동재시작</div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">{editing.autoRestart}</div>
                </div>
              </div>
            </section>

            <section className="rounded-[14px] border border-[#dbe4ee] bg-white px-4 py-4">
              <div className="mb-3">
                <div className="text-[13px] font-semibold text-[#0f172a]">운영 설정</div>
              </div>

              <FormPanel>
                <FormField label="Agent명"><Input value={editing.agentName} readOnly /></FormField>
                <FormField label="매장명"><Input value={editing.storeName} readOnly /></FormField>
                <FormField label="동기화주기(분)"><NumberInput value={editing.syncInterval} onValueChange={(value) => setEditing({ ...editing, syncInterval: Number(value || 0) })} /></FormField>
                <FormField label="재시도횟수"><NumberInput value={editing.retryCount} onValueChange={(value) => setEditing({ ...editing, retryCount: Number(value || 0) })} /></FormField>
                <FormField label="로그레벨"><Input value={editing.logLevel} onChange={(e) => setEditing({ ...editing, logLevel: e.target.value })} /></FormField>
                <FormField label="자동재시작(Y/N)"><Input value={editing.autoRestart} onChange={(e) => setEditing({ ...editing, autoRestart: e.target.value })} /></FormField>
              </FormPanel>
            </section>

            <div className="mt-4 flex justify-end gap-2">
              <ActionButton label="저장" onClick={handleSave} loading={isSaving} />
              <Button size="sm" variant="outline" onClick={() => setModalOpen(false)} disabled={isSaving}>닫기</Button>
            </div>
          </div>
        )}
      </ModalPopup>
    </div>
  );
}
