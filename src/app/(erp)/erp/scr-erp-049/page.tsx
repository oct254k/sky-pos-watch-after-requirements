"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";

type Row = Record<string, unknown>;

const columns: Column<Row>[] = [
    { key: "systemName", label: "시스템명" },
    { key: "linkType", label: "연계유형" },
    { key: "linkDate", label: "연계일" },
    { key: "sendCount", label: "송신건수" },
    { key: "receiveCount", label: "수신건수" },
    { key: "successRate", label: "성공률(%)" },
    { key: "linkStatus", label: "연계상태" },
    { key: "lastLinkTime", label: "최종연계시간" }
];

const mockData: Row[] = [
    { systemName: "POS시스템", linkType: "실시간", linkDate: "2025-03-29", sendCount: "0", receiveCount: "1,245", successRate: "98.8", linkStatus: "정상", lastLinkTime: "2025-03-29 23:59" },
    { systemName: "VAN시스템", linkType: "배치", linkDate: "2025-03-29", sendCount: "0", receiveCount: "1,200", successRate: "100", linkStatus: "정상", lastLinkTime: "2025-03-29 02:00" },
    { systemName: "회계시스템", linkType: "배치", linkDate: "2025-03-29", sendCount: "52", receiveCount: "0", successRate: "100", linkStatus: "정상", lastLinkTime: "2025-03-29 06:30" },
    { systemName: "인사시스템", linkType: "일배치", linkDate: "2025-03-29", sendCount: "0", receiveCount: "15", successRate: "100", linkStatus: "정상", lastLinkTime: "2025-03-29 07:00" }
];

export default function ScrErp049() {
  const [search, setSearch] = useState({ systemName: "", linkDate: "", linkStatus: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-049 통합 연계 현황 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ systemName: "", linkDate: "", linkStatus: "" })}>
        
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">시스템명</label>
          <Input
            placeholder="시스템명"
            value={search.systemName}
            onChange={(e) => setSearch({ ...search, systemName: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">연계일</label>
          <Input
            placeholder="연계일"
            value={search.linkDate}
            onChange={(e) => setSearch({ ...search, linkDate: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">연계상태</label>
          <Input
            placeholder="연계상태"
            value={search.linkStatus}
            onChange={(e) => setSearch({ ...search, linkStatus: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={mockData} />
      <ActionBar>
        <ActionButton label="엑셀 다운로드" variant="outline" onClick={() => alert("엑셀 다운로드")} />
      </ActionBar>
    </div>
  );
}
