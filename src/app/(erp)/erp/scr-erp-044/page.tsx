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
    { key: "detectNo", label: "탐지번호" },
    { key: "storeName", label: "매장명" },
    { key: "detectDate", label: "탐지일" },
    { key: "anomalyType", label: "이상유형" },
    { key: "description", label: "내용" },
    { key: "severity", label: "심각도" },
    { key: "status", label: "처리상태" },
    { key: "processor", label: "담당자" }
];

const mockData: Row[] = [
    { detectNo: "AN-2025-001", storeName: "옐로키친", detectDate: "2025-03-28", anomalyType: "매출급감", description: "전주 대비 매출 70% 감소", severity: "높음", status: "확인중", processor: "김담당" },
    { detectNo: "AN-2025-002", storeName: "그린마트", detectDate: "2025-03-29", anomalyType: "취소율이상", description: "당일 취소율 30% 초과", severity: "중간", status: "미확인", processor: "-" },
    { detectNo: "AN-2025-003", storeName: "레드패션", detectDate: "2025-03-27", anomalyType: "심야거래", description: "영업종료 후 POS 거래 발생", severity: "높음", status: "조치완료", processor: "이매니저" }
];

export default function ScrErp044() {
  const [search, setSearch] = useState({ storeName: "", detectDate: "", anomalyType: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Row[]>(mockData);

  const applySearch = () => {
    const filtered = mockData.filter((row) => {
      const matchesStoreName =
        !search.storeName || String(row.storeName ?? "").toLowerCase().includes(search.storeName.toLowerCase());
      const matchesDetectDate =
        !search.detectDate || String(row.detectDate ?? "").toLowerCase().includes(search.detectDate.toLowerCase());
      const matchesAnomalyType =
        !search.anomalyType || String(row.anomalyType ?? "").toLowerCase().includes(search.anomalyType.toLowerCase());

      return matchesStoreName && matchesDetectDate && matchesAnomalyType;
    });

    setData(filtered);
  };

  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => {
      applySearch();
      setIsLoading(false);
    }, 800);
  };

  const handleReset = () => {
    setSearch({ storeName: "", detectDate: "", anomalyType: "" });
    setData(mockData);
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-044 이상징후 탐지 현황 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel {...({ loading: isLoading } as Record<string, unknown>)} onSearch={handleSearch} onReset={handleReset}>
        
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">매장명</label>
          <Input
            placeholder="매장명"
            value={search.storeName}
            onChange={(e) => setSearch({ ...search, storeName: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">탐지일</label>
          <Input
            placeholder="탐지일"
            value={search.detectDate}
            onChange={(e) => setSearch({ ...search, detectDate: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">이상유형</label>
          <Input
            placeholder="이상유형"
            value={search.anomalyType}
            onChange={(e) => setSearch({ ...search, anomalyType: e.target.value })}
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
