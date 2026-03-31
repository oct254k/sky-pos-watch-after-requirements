"use client";

import { MockBanner } from "@/components/common/MockBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const tradeAreas = [
  {
    name: "국제선 출국장 A",
    type: "프리미엄 상권",
    features: ["고소득 여행객", "면세 수요 높음", "체류시간 평균 2시간"],
    avgSales: "일 평균 1,200만원",
    color: "bg-purple-100 text-purple-800",
  },
  {
    name: "국내선 게이트 B",
    type: "대중 상권",
    features: ["비즈니스 여행객", "간편식 수요", "체류시간 평균 40분"],
    avgSales: "일 평균 650만원",
    color: "bg-blue-100 text-blue-800",
  },
  {
    name: "입국장 C",
    type: "특수 상권",
    features: ["귀국 여행객", "선물/기념품", "피크타임 불규칙"],
    avgSales: "일 평균 420만원",
    color: "bg-green-100 text-green-800",
  },
  {
    name: "환승구역 D",
    type: "프리미엄 상권",
    features: ["외국인 비율 80%", "명품/주류 집중", "장시간 체류"],
    avgSales: "일 평균 1,800만원",
    color: "bg-purple-100 text-purple-800",
  },
  {
    name: "지하 연결통로 E",
    type: "생활 상권",
    features: ["공항 직원 중심", "저가 식음료", "안정적 수요"],
    avgSales: "일 평균 180만원",
    color: "bg-gray-100 text-gray-800",
  },
];

export default function ScrAi022() {
  return (
    <div className="space-y-4">
      <MockBanner message="AI 분석 결과 - Mock 데이터" />
      <h2 className="text-lg font-bold">상권 특성 자동 분류</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tradeAreas.map((area) => (
          <Card key={area.name}>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                {area.name}
                <Badge className={area.color} variant="outline">{area.type}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="mb-2 space-y-1">
                {area.features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground">- {f}</li>
                ))}
              </ul>
              <p className="text-sm font-semibold">{area.avgSales}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
