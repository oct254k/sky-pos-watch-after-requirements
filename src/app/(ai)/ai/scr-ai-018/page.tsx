"use client";

import { MockBanner } from "@/components/common/MockBanner";
import { ChartCard } from "@/components/common/ChartCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, ResponsiveContainer, Tooltip,
} from "recharts";

const radarData = [
  { metric: "매핑 정확도", value: 96 },
  { metric: "탐지 속도", value: 88 },
  { metric: "이상탐지율", value: 92 },
  { metric: "분류 커버리지", value: 85 },
  { metric: "사용자 만족도", value: 90 },
  { metric: "시스템 안정성", value: 94 },
];

const guides = [
  { title: "매핑 운영 가이드", desc: "AI 매핑 결과 검토 시 신뢰도 90% 이상은 자동 확정, 80% 미만은 수동 검토 권장" },
  { title: "이상거래 대응 가이드", desc: "위험도 '높음'은 24시간 내 조치, '보통'은 72시간 내 검토 필요" },
  { title: "프롬프트 관리 가이드", desc: "프롬프트 변경 시 테스트 환경에서 10건 이상 검증 후 운영 적용" },
  { title: "데이터 품질 가이드", desc: "품목 데이터 이행 시 중복 코드 검사, 카테고리 정합성 확인 필수" },
];

export default function ScrAi018() {
  return (
    <div className="space-y-4">
      <MockBanner message="AI 분석 결과 - Mock 데이터" />
      <h2 className="text-lg font-bold">운영 가이드</h2>

      <ChartCard title="AI 서비스 성과 지표">
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="metric" fontSize={12} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} fontSize={10} />
            <Tooltip />
            <Radar dataKey="value" stroke="#6366f1" fill="#6366f1" fillOpacity={0.3} />
          </RadarChart>
        </ResponsiveContainer>
      </ChartCard>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {guides.map((g) => (
          <Card key={g.title}>
            <CardHeader className="pb-2"><CardTitle className="text-sm">{g.title}</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-muted-foreground">{g.desc}</p></CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
