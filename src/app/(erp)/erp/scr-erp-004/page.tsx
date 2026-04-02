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
    { key: "roomName", label: "호실명" },
    { key: "floor", label: "층" },
    { key: "area", label: "면적(㎡)" },
    { key: "companyName", label: "업체명" },
    { key: "contractStatus", label: "계약상태" }
];

const mockData: Row[] = [
    { roomName: "A-101", floor: "1F", area: "33.5", companyName: "스카이푸드", contractStatus: "계약중" },
    { roomName: "A-201", floor: "2F", area: "45.2", companyName: "블루커피", contractStatus: "계약중" },
    { roomName: "B-301", floor: "3F", area: "28.8", companyName: "그린마트", contractStatus: "만료예정" },
    { roomName: "B-102", floor: "1F", area: "52.0", companyName: "레드패션", contractStatus: "계약중" }
];

export default function ScrErp004() {
  const [search, setSearch] = useState({ roomName: "", floor: "", companyName: "", contractStatus: "" });
  const [data, setData] = useState<Row[]>(mockData);

  const handleSearch = () => {
    setData(
      mockData.filter((row) => {
        if (search.roomName && !String(row.roomName ?? "").includes(search.roomName)) return false;
        if (search.floor && !String(row.floor ?? "").includes(search.floor)) return false;
        if (search.companyName && !String(row.companyName ?? "").includes(search.companyName)) return false;
        if (search.contractStatus && !String(row.contractStatus ?? "").includes(search.contractStatus)) return false;
        return true;
      })
    );
  };

  const handleReset = () => {
    setSearch({ roomName: "", floor: "", companyName: "", contractStatus: "" });
    setData(mockData);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-004 공간/호실 기준 계약 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={handleSearch} onReset={handleReset}>
        
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">호실명</label>
          <Input
            placeholder="호실명"
            value={search.roomName}
            onChange={(e) => setSearch({ ...search, roomName: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">층</label>
          <Input
            placeholder="층"
            value={search.floor}
            onChange={(e) => setSearch({ ...search, floor: e.target.value })}
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
          <label className="text-xs text-muted-foreground">계약상태</label>
          <Input
            placeholder="계약상태"
            value={search.contractStatus}
            onChange={(e) => setSearch({ ...search, contractStatus: e.target.value })}
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
