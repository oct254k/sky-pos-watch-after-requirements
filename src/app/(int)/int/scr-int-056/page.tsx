"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Row { id: string; hierarchyId: string; division: string; parentHierarchy: string; name: string; sortOrder: string; [key: string]: unknown; }

const mockData: Row[] = [
  { id: "1", hierarchyId: "계층ID 샘플1", division: "구분 데이터1", parentHierarchy: "상위계층 A", name: "2025-01-15", sortOrder: "정상" },
  { id: "2", hierarchyId: "계층ID 샘플2", division: "구분 데이터2", parentHierarchy: "상위계층 B", name: "2025-01-16", sortOrder: "처리중" },
  { id: "3", hierarchyId: "계층ID 샘플3", division: "구분 데이터3", parentHierarchy: "상위계층 C", name: "2025-01-17", sortOrder: "완료" },
];

const columns: Column<Row>[] = [
  { key: "hierarchyId", label: "계층ID" },
  { key: "division", label: "구분" },
  { key: "parentHierarchy", label: "상위계층" },
  { key: "name", label: "명칭" },
  { key: "sortOrder", label: "정렬순서" },
];

export default function ScrInt056() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Hierarchy 등록/관리</h2>
      <MockBanner message="Mock 데이터 - 실제 API 연동 전 샘플 화면입니다." />
      <SearchPanel onSearch={() => setData(mockData.filter((r) => Object.values(r).some((v) => String(v).includes(keyword))))} onReset={() => { setKeyword(""); setData(mockData); }}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">구분/명칭</label>
          <Input placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-60" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
