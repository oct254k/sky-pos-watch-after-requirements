"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";

type Row = Record<string, unknown>;

const columns: Column<Row>[] = [
    { key: "dashboardName", label: "대시보드명" },
    { key: "category", label: "카테고리" },
    { key: "metricName", label: "지표명" },
    { key: "currentValue", label: "현재값" },
    { key: "previousValue", label: "이전값" },
    { key: "changeRate", label: "증감률" },
    { key: "dataDate", label: "기준일" },
    { key: "updateTime", label: "갱신시간" }
];

const mockData: Row[] = [
    { dashboardName: "임대현황", category: "계약", metricName: "총계약수", currentValue: "85", previousValue: "82", changeRate: "+3.7%", dataDate: "2025-03-29", updateTime: "08:00" },
    { dashboardName: "임대현황", category: "수납", metricName: "수납율", currentValue: "94.5%", previousValue: "92.1%", changeRate: "+2.4%p", dataDate: "2025-03-29", updateTime: "08:00" },
    { dashboardName: "매출현황", category: "매출", metricName: "일매출합계", currentValue: "45,600,000", previousValue: "42,300,000", changeRate: "+7.8%", dataDate: "2025-03-29", updateTime: "08:00" },
    { dashboardName: "시스템현황", category: "연계", metricName: "연계성공율", currentValue: "99.2%", previousValue: "98.5%", changeRate: "+0.7%p", dataDate: "2025-03-29", updateTime: "08:00" }
];

export default function ScrErp051() {
  const [search, setSearch] = useState({ dashboardName: "", dataDate: "", category: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-051 대시보드 데이터 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ dashboardName: "", dataDate: "", category: "" })}>
        
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">대시보드명</label>
          <Input
            placeholder="대시보드명"
            value={search.dashboardName}
            onChange={(e) => setSearch({ ...search, dashboardName: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">데이터일</label>
          <Input
            placeholder="데이터일"
            value={search.dataDate}
            onChange={(e) => setSearch({ ...search, dataDate: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">카테고리</label>
          <Input
            placeholder="카테고리"
            value={search.category}
            onChange={(e) => setSearch({ ...search, category: e.target.value })}
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
