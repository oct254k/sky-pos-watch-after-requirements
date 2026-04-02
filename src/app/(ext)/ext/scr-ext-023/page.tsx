"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Input } from "@/components/ui/input";

interface RequestItem {
  id: string;
  type: string;
  title: string;
  requestDate: string;
  requestBy: string;
  status: string;
  processDate: string;
}

const mockData: RequestItem[] = [
  { id: "REQ001", type: "품목등록", title: "신규 품목 등록 신청 - 스무디", requestDate: "2025-01-10", requestBy: "클라우드카페", status: "승인", processDate: "2025-01-12" },
  { id: "REQ002", type: "가격변경", title: "아메리카노 가격 변경 신청", requestDate: "2025-01-14", requestBy: "스카이푸드", status: "대기", processDate: "" },
  { id: "REQ003", type: "매장변경", title: "영업시간 변경 신청", requestDate: "2025-01-15", requestBy: "에어라운지", status: "반려", processDate: "2025-01-16" },
];

export default function ScrExt023() {
  const [data, setData] = useState<RequestItem[]>(mockData);
  const [searchType, setSearchType] = useState("");
  const [searchStatus, setSearchStatus] = useState("");

  const columns: Column<RequestItem>[] = [
    { key: "id", label: "신청번호", width: "100px" },
    { key: "type", label: "유형", width: "90px" },
    { key: "title", label: "제목" },
    { key: "requestBy", label: "신청업체", width: "120px" },
    { key: "requestDate", label: "신청일", width: "110px" },
    { key: "status", label: "상태", width: "100px", render: (row) => <StatusBadge status={row.status} /> },
    { key: "processDate", label: "처리일", width: "110px" },
  ];

  const handleSearch = () => {
    setData(
      mockData.filter((row) => {
        const matchType = !searchType || row.type.includes(searchType);
        const matchStatus = !searchStatus || row.status.includes(searchStatus);
        return matchType && matchStatus;
      })
    );
  };

  const handleReset = () => {
    setSearchType("");
    setSearchStatus("");
    setData(mockData);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">신청 내역 조회</h2>
      <MockBanner message="이 화면은 Mock 데이터로 구성된 읽기전용 화면입니다." />
      <SearchPanel onSearch={handleSearch} onReset={handleReset}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">유형</label>
          <Input value={searchType} onChange={(e) => setSearchType(e.target.value)} placeholder="품목등록/가격변경" className="w-40" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">상태</label>
          <Input value={searchStatus} onChange={(e) => setSearchStatus(e.target.value)} placeholder="승인/대기/반려" className="w-32" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} />
    </div>
  );
}
