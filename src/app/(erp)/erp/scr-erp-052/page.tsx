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
    { key: "companyName", label: "업체명" },
    { key: "settleMonth", label: "정산월" },
    { key: "salesAmount", label: "매출액" },
    { key: "rentAmount", label: "임대료" },
    { key: "mgmtFee", label: "관리비" },
    { key: "otherFee", label: "기타비용" },
    { key: "totalSettle", label: "정산합계" },
    { key: "settleStatus", label: "정산상태" },
    { key: "confirmDate", label: "확인일" }
];

const mockData: Row[] = [
    { companyName: "스카이푸드", settleMonth: "2025-03", salesAmount: "52,000,000", rentAmount: "3,500,000", mgmtFee: "500,000", otherFee: "0", totalSettle: "4,000,000", settleStatus: "확정", confirmDate: "2025-03-28" },
    { companyName: "블루커피", settleMonth: "2025-03", salesAmount: "35,000,000", rentAmount: "2,800,000", mgmtFee: "400,000", otherFee: "50,000", totalSettle: "3,250,000", settleStatus: "확정", confirmDate: "2025-03-28" },
    { companyName: "옐로키친", settleMonth: "2025-03", salesAmount: "25,000,000", rentAmount: "3,750,000", mgmtFee: "350,000", otherFee: "21,000", totalSettle: "4,121,000", settleStatus: "미확정", confirmDate: "-" },
    { companyName: "그린마트", settleMonth: "2025-03", salesAmount: "89,000,000", rentAmount: "4,200,000", mgmtFee: "600,000", otherFee: "0", totalSettle: "4,800,000", settleStatus: "확정", confirmDate: "2025-03-29" }
];

export default function ScrErp052() {
  const [search, setSearch] = useState({ companyName: "", settleMonth: "", settleType: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Row[]>(mockData);

  const applySearch = () => {
    const filtered = mockData.filter((row) => {
      const matchesCompanyName =
        !search.companyName || String(row.companyName ?? "").toLowerCase().includes(search.companyName.toLowerCase());
      const matchesSettleMonth =
        !search.settleMonth || String(row.settleMonth ?? "").toLowerCase().includes(search.settleMonth.toLowerCase());
      const matchesSettleType =
        !search.settleType || String(row.settleStatus ?? "").toLowerCase().includes(search.settleType.toLowerCase());

      return matchesCompanyName && matchesSettleMonth && matchesSettleType;
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
    setSearch({ companyName: "", settleMonth: "", settleType: "" });
    setData(mockData);
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SCR-ERP-052 정산자료 통합 조회</h2>
      <MockBanner message="임대ERP 연계 데이터 - 읽기 전용" />
      <SearchPanel {...({ loading: isLoading } as Record<string, unknown>)} onSearch={handleSearch} onReset={handleReset}>
        
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
          <label className="text-xs text-muted-foreground">정산월</label>
          <Input
            placeholder="정산월"
            value={search.settleMonth}
            onChange={(e) => setSearch({ ...search, settleMonth: e.target.value })}
            className="h-8 w-40 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">정산유형</label>
          <Input
            placeholder="정산유형"
            value={search.settleType}
            onChange={(e) => setSearch({ ...search, settleType: e.target.value })}
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
