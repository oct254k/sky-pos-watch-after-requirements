"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Input } from "@/components/ui/input";

type Row = Record<string, unknown>;

const columns: Column<Row>[] = [
    { key: "requestNo", label: "신청번호" },
    { key: "companyName", label: "업체명" },
    { key: "facilityType", label: "시설유형" },
    { key: "facilityName", label: "시설명" },
    { key: "useDate", label: "사용일" },
    { key: "useTime", label: "사용시간" },
    { key: "purpose", label: "사용목적" },
    { key: "approvalStatus", label: "승인상태" }
];

const mockData: Row[] = [
    { requestNo: "FC-2025-001", companyName: "블루커피", facilityType: "다목적홀", facilityName: "3층 세미나실", useDate: "2025-04-01", useTime: "10:00~18:00", purpose: "신제품 발표회", approvalStatus: "승인" },
    { requestNo: "FC-2025-002", companyName: "그린마트", facilityType: "주차장", facilityName: "B1 이벤트존", useDate: "2025-04-05", useTime: "09:00~21:00", purpose: "할인행사", approvalStatus: "심사중" },
    { requestNo: "FC-2025-003", companyName: "레드패션", facilityType: "옥상", facilityName: "옥상 테라스", useDate: "2025-04-10", useTime: "14:00~20:00", purpose: "팝업이벤트", approvalStatus: "승인" }
];

export default function ScrErp037() {
  const [search, setSearch] = useState({ companyName: "", facilityType: "", useDate: "" });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-037 시설물 사용 신청 현황 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel onSearch={() => {}} onReset={() => setSearch({ companyName: "", facilityType: "", useDate: "" })}>
        
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
          <label className="text-xs text-muted-foreground">시설유형</label>
          <Input
            placeholder="시설유형"
            value={search.facilityType}
            onChange={(e) => setSearch({ ...search, facilityType: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">사용일</label>
          <Input
            placeholder="사용일"
            value={search.useDate}
            onChange={(e) => setSearch({ ...search, useDate: e.target.value })}
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
