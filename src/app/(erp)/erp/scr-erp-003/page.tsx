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
    { key: "contractNo", label: "계약번호" },
    { key: "companyName", label: "업체명" },
    { key: "expiryDate", label: "만료일" },
    { key: "remainDays", label: "잔여일" },
    { key: "renewalYn", label: "갱신여부" },
    { key: "manager", label: "담당자" }
];

const mockData: Row[] = [
    { contractNo: "CT-2025-003", companyName: "그린마트", expiryDate: "2025-05-31", remainDays: "62", renewalYn: "미정", manager: "김담당" },
    { contractNo: "CT-2024-010", companyName: "옐로키친", expiryDate: "2025-04-15", remainDays: "16", renewalYn: "갱신예정", manager: "이매니저" },
    { contractNo: "CT-2024-008", companyName: "핑크베이커리", expiryDate: "2025-06-30", remainDays: "92", renewalYn: "미정", manager: "박관리" }
];

export default function ScrErp003() {
  const [search, setSearch] = useState({ contractNo: "", companyName: "", renewalYn: "" });
  const [data, setData] = useState<Row[]>(mockData);

  const handleSearch = () => {
    setData(
      mockData.filter((row) => {
        if (search.contractNo && !String(row.contractNo ?? "").includes(search.contractNo)) return false;
        if (search.companyName && !String(row.companyName ?? "").includes(search.companyName)) return false;
        if (search.renewalYn && !String(row.renewalYn ?? "").includes(search.renewalYn)) return false;
        return true;
      })
    );
  };

  const handleReset = () => {
    setSearch({ contractNo: "", companyName: "", renewalYn: "" });
    setData(mockData);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-003 계약만료/갱신 알림 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={handleSearch} onReset={handleReset}>
        
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">계약번호</label>
          <Input
            placeholder="계약번호"
            value={search.contractNo}
            onChange={(e) => setSearch({ ...search, contractNo: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">업체명</label>
          <Input
            placeholder="업체명"
            value={search.companyName}
            onChange={(e) => setSearch({ ...search, companyName: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">갱신여부</label>
          <Input
            placeholder="갱신여부"
            value={search.renewalYn}
            onChange={(e) => setSearch({ ...search, renewalYn: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
      <ActionBar>
        <ActionButton label="엑셀 다운로드" variant="outline" onClick={() => toast.info("엑셀 다운로드를 시작합니다.")} />
      </ActionBar>
    </div>
  );
}
