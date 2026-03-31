"use client";

import { MockBanner } from "@/components/common/MockBanner";
import { ChartCard } from "@/components/common/ChartCard";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { StatusBadge } from "@/components/common/StatusBadge";
import { aiDetections } from "@/data/mock/aiDetections";
import {
  ScatterChart, Scatter, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid, ZAxis,
} from "recharts";

const scatterData = aiDetections.map((d, i) => ({
  name: d.storeName,
  score: d.score,
  amount: [120, 250, 80, 190, 60, 300, 45, 170, 90, 210][i] ?? 100,
  risk: d.riskLevel,
}));

export default function ScrAi009() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns: Column<any>[] = [
    { key: "id", label: "ID", width: "80px" },
    { key: "type", label: "유형", width: "100px" },
    { key: "storeName", label: "매장" },
    { key: "score", label: "점수", width: "100px" },
    { key: "riskLevel", label: "위험도", width: "100px", render: (r) => <StatusBadge status={r.riskLevel === "high" ? "확인필요" : r.riskLevel === "medium" ? "조사중" : "정상처리"} /> },
    { key: "detectedAt", label: "탐지일시", width: "130px" },
  ];

  return (
    <div className="space-y-4">
      <MockBanner message="AI 분석 결과 - Mock 데이터" />
      <h2 className="text-lg font-bold">이상거래 탐지</h2>

      <ChartCard title="탐지 점수 vs 거래금액 분포">
        <ResponsiveContainer width="100%" height={300}>
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="score" name="탐지점수" fontSize={12} />
            <YAxis dataKey="amount" name="거래금액(만)" fontSize={12} />
            <ZAxis range={[60, 200]} />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter data={scatterData} fill="#ef4444" />
          </ScatterChart>
        </ResponsiveContainer>
      </ChartCard>

      <DataGrid columns={columns} data={aiDetections as unknown as Record<string, unknown>[]} keyField="id" />
    </div>
  );
}
