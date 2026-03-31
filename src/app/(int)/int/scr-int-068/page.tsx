"use client";

import { useState } from "react";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { ModalPopup } from "@/components/common/ModalPopup";
import { FormPanel, FormField } from "@/components/common/FormPanel";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/common/StatusBadge";

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

  const openEdit = (row: AgentConfig) => { setEditing({ ...row }); setModalOpen(true); };
  const handleSave = () => {
    if (!editing) return;
    setData((prev) => prev.map((d) => d.id === editing.id ? { ...editing, updatedAt: new Date().toISOString().slice(0, 10) } : d));
    setModalOpen(false);
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
      <ActionBar><ActionButton label="일괄 적용" onClick={() => alert("일괄 적용 (Mock)")} /></ActionBar>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} onRowClick={(row) => openEdit(row as unknown as AgentConfig)} />
      <ModalPopup open={modalOpen} onClose={() => setModalOpen(false)} title="Agent 설정 수정" wide>
        {editing && (
          <>
            <FormPanel>
              <FormField label="Agent명"><Input value={editing.agentName} readOnly /></FormField>
              <FormField label="매장명"><Input value={editing.storeName} readOnly /></FormField>
              <FormField label="동기화주기(분)"><Input type="number" value={editing.syncInterval} onChange={(e) => setEditing({ ...editing, syncInterval: Number(e.target.value) })} /></FormField>
              <FormField label="재시도횟수"><Input type="number" value={editing.retryCount} onChange={(e) => setEditing({ ...editing, retryCount: Number(e.target.value) })} /></FormField>
              <FormField label="로그레벨"><Input value={editing.logLevel} onChange={(e) => setEditing({ ...editing, logLevel: e.target.value })} /></FormField>
              <FormField label="자동재시작(Y/N)"><Input value={editing.autoRestart} onChange={(e) => setEditing({ ...editing, autoRestart: e.target.value })} /></FormField>
            </FormPanel>
            <div className="mt-4 flex justify-end gap-2">
              <Button size="sm" onClick={handleSave}>저장</Button>
              <Button size="sm" variant="outline" onClick={() => setModalOpen(false)}>취소</Button>
            </div>
          </>
        )}
      </ModalPopup>
    </div>
  );
}
