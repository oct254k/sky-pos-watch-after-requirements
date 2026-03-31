"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AgentStatus { id: string; name: string; storeId: string; storeName: string; companyName: string; status: "online" | "offline" | "error"; lastSync: string; version: string; }

const agents: AgentStatus[] = [
  { id: "AGT001", name: "Agent-S001", storeId: "S001", storeName: "1층 A-101", companyName: "스카이푸드", status: "online", lastSync: "2025-01-16 10:30", version: "2.1.0" },
  { id: "AGT002", name: "Agent-S002", storeId: "S002", storeName: "1층 A-102", companyName: "스카이푸드", status: "online", lastSync: "2025-01-16 10:28", version: "2.1.0" },
  { id: "AGT003", name: "Agent-S003", storeId: "S003", storeName: "2층 B-201", companyName: "에어라운지", status: "online", lastSync: "2025-01-16 10:25", version: "2.0.8" },
  { id: "AGT004", name: "Agent-S004", storeId: "S004", storeName: "2층 B-202", companyName: "에어라운지", status: "error", lastSync: "2025-01-16 08:15", version: "2.0.8" },
  { id: "AGT005", name: "Agent-S005", storeId: "S005", storeName: "3층 C-301", companyName: "듀티프리마트", status: "online", lastSync: "2025-01-16 10:30", version: "2.1.0" },
  { id: "AGT006", name: "Agent-S006", storeId: "S006", storeName: "3층 C-302", companyName: "듀티프리마트", status: "online", lastSync: "2025-01-16 10:29", version: "2.1.0" },
  { id: "AGT007", name: "Agent-S007", storeId: "S007", storeName: "1층 A-105", companyName: "클라우드카페", status: "online", lastSync: "2025-01-16 10:27", version: "2.0.5" },
  { id: "AGT008", name: "Agent-S008", storeId: "S008", storeName: "B1층 D-001", companyName: "하늘편의점", status: "offline", lastSync: "2024-11-04 22:00", version: "1.9.2" },
  { id: "AGT009", name: "Agent-S009", storeId: "S009", storeName: "4층 E-401", companyName: "스카이푸드", status: "online", lastSync: "2025-01-16 10:26", version: "2.1.0" },
  { id: "AGT010", name: "Agent-S010", storeId: "S010", storeName: "3층 C-303", companyName: "듀티프리마트", status: "online", lastSync: "2025-01-16 10:30", version: "2.1.0" },
];

const statusConfig = {
  online: { label: "정상", color: "bg-green-500" },
  offline: { label: "오프라인", color: "bg-gray-400" },
  error: { label: "오류", color: "bg-red-500" },
};

export default function ScrInt048() {
  const [data] = useState(agents);
  const onlineCount = data.filter((a) => a.status === "online").length;
  const errorCount = data.filter((a) => a.status === "error").length;
  const offlineCount = data.filter((a) => a.status === "offline").length;

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Agent 연계 상태 모니터링</h2>
      <div className="grid grid-cols-4 gap-4">
        <Card><CardContent className="pt-4"><p className="text-xs text-muted-foreground">전체</p><p className="text-2xl font-bold">{data.length}대</p></CardContent></Card>
        <Card><CardContent className="pt-4"><p className="text-xs text-muted-foreground">정상</p><p className="text-2xl font-bold text-green-600">{onlineCount}대</p></CardContent></Card>
        <Card><CardContent className="pt-4"><p className="text-xs text-muted-foreground">오류</p><p className="text-2xl font-bold text-red-600">{errorCount}대</p></CardContent></Card>
        <Card><CardContent className="pt-4"><p className="text-xs text-muted-foreground">오프라인</p><p className="text-2xl font-bold text-gray-500">{offlineCount}대</p></CardContent></Card>
      </div>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
        {data.map((agent) => {
          const cfg = statusConfig[agent.status];
          return (
            <Card key={agent.id} className={agent.status === "error" ? "border-red-300" : agent.status === "offline" ? "border-gray-300 opacity-60" : ""}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm">{agent.name}</CardTitle>
                  <div className="flex items-center gap-1">
                    <span className={`inline-block h-2.5 w-2.5 rounded-full ${cfg.color}`} />
                    <span className="text-xs">{cfg.label}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-xs text-muted-foreground space-y-1">
                <p>매장: {agent.storeName}</p>
                <p>업체: {agent.companyName}</p>
                <p>최종동기화: {agent.lastSync}</p>
                <p>버전: {agent.version}</p>
                {agent.status === "error" && <Button size="sm" variant="destructive" className="mt-2 h-6 text-xs" onClick={() => alert("재시작 요청 (Mock)")}>재시작</Button>}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
