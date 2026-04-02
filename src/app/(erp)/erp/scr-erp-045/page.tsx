"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

type Row = Record<string, unknown>;

const columns: Column<Row>[] = [
    { key: "logNo", label: "로그번호" },
    { key: "userId", label: "사용자ID" },
    { key: "userName", label: "사용자명" },
    { key: "actionDate", label: "작업일시" },
    { key: "actionType", label: "작업유형" },
    { key: "targetScreen", label: "대상화면" },
    { key: "actionDetail", label: "작업내용" },
    { key: "ipAddress", label: "IP주소" }
];

const mockData: Row[] = [
    { logNo: "LOG-001", userId: "admin01", userName: "김관리", actionDate: "2025-03-29 10:30:00", actionType: "조회", targetScreen: "계약조회", actionDetail: "계약 통합 조회 실행", ipAddress: "192.168.1.100" },
    { logNo: "LOG-002", userId: "admin02", userName: "이담당", actionDate: "2025-03-29 11:15:00", actionType: "수정", targetScreen: "임대료산정", actionDetail: "임대료 산정결과 확정", ipAddress: "192.168.1.101" },
    { logNo: "LOG-003", userId: "manager01", userName: "박매니저", actionDate: "2025-03-29 14:00:00", actionType: "다운로드", targetScreen: "정산조회", actionDetail: "정산내역 엑셀 다운로드", ipAddress: "192.168.1.102" }
];

export default function ScrErp045() {
  const [search, setSearch] = useState({ userId: "", actionDate: "", actionType: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Row[]>(mockData);

  const applySearch = () => {
    const filtered = mockData.filter((row) => {
      const matchesUserId =
        !search.userId || String(row.userId ?? "").toLowerCase().includes(search.userId.toLowerCase());
      const matchesActionDate =
        !search.actionDate || String(row.actionDate ?? "").toLowerCase().includes(search.actionDate.toLowerCase());
      const matchesActionType =
        !search.actionType || String(row.actionType ?? "").toLowerCase().includes(search.actionType.toLowerCase());

      return matchesUserId && matchesActionDate && matchesActionType;
    });

    setData(filtered);
  };

  const handleSearch = () => {
    setIsLoading(true);
    window.setTimeout(() => {
      applySearch();
      setIsLoading(false);
    }, 800);
  };

  const handleReset = () => {
    setSearch({ userId: "", actionDate: "", actionType: "" });
    setData(mockData);
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-045 감사추적 로그 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel {...({ loading: isLoading } as Record<string, unknown>)} onSearch={handleSearch} onReset={handleReset}>
        
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">사용자ID</label>
          <Input
            placeholder="사용자ID"
            value={search.userId}
            onChange={(e) => setSearch({ ...search, userId: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">작업일</label>
          <Input
            placeholder="작업일"
            value={search.actionDate}
            onChange={(e) => setSearch({ ...search, actionDate: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">작업유형</label>
          <Input
            placeholder="작업유형"
            value={search.actionType}
            onChange={(e) => setSearch({ ...search, actionType: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
      </SearchPanel>
      <DataGrid {...({ loading: isLoading, loadingMessage: "데이터를 불러오는 중입니다" } as Record<string, unknown>)} columns={columns} data={data} />
      <ActionBar>
        <ActionButton label="엑셀 다운로드" variant="outline" onClick={() => toast.info("엑셀 다운로드를 시작합니다.")} />
      </ActionBar>
    </div>
  );
}
