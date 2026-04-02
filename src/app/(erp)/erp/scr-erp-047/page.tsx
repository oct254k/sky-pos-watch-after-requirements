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
    { key: "userId", label: "사용자ID" },
    { key: "userName", label: "사용자명" },
    { key: "roleName", label: "역할명" },
    { key: "department", label: "부서" },
    { key: "accessLevel", label: "접근레벨" },
    { key: "lastLoginDate", label: "최종로그인" },
    { key: "accountStatus", label: "계정상태" },
    { key: "expiryDate", label: "만료일" }
];

const mockData: Row[] = [
    { userId: "admin01", userName: "김관리", roleName: "시스템관리자", department: "IT팀", accessLevel: "전체", lastLoginDate: "2025-03-29", accountStatus: "활성", expiryDate: "2026-03-31" },
    { userId: "admin02", userName: "이담당", roleName: "운영담당", department: "임대관리팀", accessLevel: "읽기/쓰기", lastLoginDate: "2025-03-29", accountStatus: "활성", expiryDate: "2026-03-31" },
    { userId: "viewer01", userName: "박열람", roleName: "조회전용", department: "경영지원팀", accessLevel: "읽기전용", lastLoginDate: "2025-03-25", accountStatus: "활성", expiryDate: "2025-12-31" },
    { userId: "temp01", userName: "최임시", roleName: "임시사용자", department: "외부감사", accessLevel: "제한적", lastLoginDate: "2025-03-20", accountStatus: "잠김", expiryDate: "2025-04-30" }
];

export default function ScrErp047() {
  const [search, setSearch] = useState({ userId: "", roleName: "", accessStatus: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Row[]>(mockData);

  const applySearch = () => {
    const filtered = mockData.filter((row) => {
      const matchesUserId =
        !search.userId || String(row.userId ?? "").toLowerCase().includes(search.userId.toLowerCase());
      const matchesRoleName =
        !search.roleName || String(row.roleName ?? "").toLowerCase().includes(search.roleName.toLowerCase());
      const matchesAccessStatus =
        !search.accessStatus || String(row.accountStatus ?? "").toLowerCase().includes(search.accessStatus.toLowerCase());

      return matchesUserId && matchesRoleName && matchesAccessStatus;
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
    setSearch({ userId: "", roleName: "", accessStatus: "" });
    setData(mockData);
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-047 권한/접근 통제 현황 조회</h2>
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
          <label className="text-xs text-muted-foreground">역할명</label>
          <Input
            placeholder="역할명"
            value={search.roleName}
            onChange={(e) => setSearch({ ...search, roleName: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">접근상태</label>
          <Input
            placeholder="접근상태"
            value={search.accessStatus}
            onChange={(e) => setSearch({ ...search, accessStatus: e.target.value })}
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
