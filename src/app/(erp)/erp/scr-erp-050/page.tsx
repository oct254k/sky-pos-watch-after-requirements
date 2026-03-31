"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";

type Row = Record<string, unknown>;

const columns: Column<Row>[] = [
    { key: "reportNo", label: "보고서번호" },
    { key: "reportName", label: "보고서명" },
    { key: "reportType", label: "유형" },
    { key: "genDate", label: "생성일" },
    { key: "genUser", label: "생성자" },
    { key: "fileSize", label: "파일크기" },
    { key: "downloadCount", label: "다운로드수" },
    { key: "status", label: "상태" }
];

const mockData: Row[] = [
    { reportNo: "RPT-2025-001", reportName: "3월 임대료 정산보고서", reportType: "정기", genDate: "2025-03-29", genUser: "김관리", fileSize: "2.5MB", downloadCount: "5", status: "완료" },
    { reportNo: "RPT-2025-002", reportName: "1분기 매출분석보고서", reportType: "분기", genDate: "2025-03-28", genUser: "이담당", fileSize: "5.1MB", downloadCount: "3", status: "완료" },
    { reportNo: "RPT-2025-003", reportName: "체납현황 특별보고서", reportType: "수시", genDate: "2025-03-27", genUser: "박매니저", fileSize: "1.2MB", downloadCount: "8", status: "완료" }
];

export default function ScrErp050() {
  const [search, setSearch] = useState({ reportName: "", genDate: "", reportType: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-050 보고서 생성 현황 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ reportName: "", genDate: "", reportType: "" })}>
        
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">보고서명</label>
          <Input
            placeholder="보고서명"
            value={search.reportName}
            onChange={(e) => setSearch({ ...search, reportName: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">생성일</label>
          <Input
            placeholder="생성일"
            value={search.genDate}
            onChange={(e) => setSearch({ ...search, genDate: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">보고서유형</label>
          <Input
            placeholder="보고서유형"
            value={search.reportType}
            onChange={(e) => setSearch({ ...search, reportType: e.target.value })}
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
