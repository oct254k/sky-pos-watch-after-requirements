"use client";

import { MockBanner } from "@/components/common/MockBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const insights = [
  { id: 1, title: "면세 매장 매출 급증 패턴 탐지", category: "매출", priority: "높음", content: "환승구역 D의 면세 매장이 지난 2주간 매출 40% 증가. 중국발 노선 증편과 연관 가능성 높음.", color: "bg-red-100 text-red-800" },
  { id: 2, title: "커피 카테고리 계절 패턴", category: "트렌드", priority: "보통", content: "아이스 음료 비율이 HOT 대비 3:1로 증가. 계절 메뉴 확대 검토 권장.", color: "bg-yellow-100 text-yellow-800" },
  { id: 3, title: "야간 매출 이상 징후", category: "이상탐지", priority: "높음", content: "3층 C-302 매장의 영업시간 외 거래 3건 감지. 시스템 오류 또는 무단 영업 확인 필요.", color: "bg-red-100 text-red-800" },
  { id: 4, title: "신규 품목 매핑 적체", category: "운영", priority: "보통", content: "미매핑 품목 12건 누적. 주간 매핑 작업 일정 조정 필요.", color: "bg-yellow-100 text-yellow-800" },
  { id: 5, title: "고객 동선 최적화 기회", category: "공간", priority: "낮음", content: "2층 B구역 유동인구 대비 매출 전환율 낮음. 매장 배치 재검토 권장.", color: "bg-green-100 text-green-800" },
  { id: 6, title: "VAN 불일치 반복 패턴", category: "이상탐지", priority: "높음", content: "듀티프리마트 3층 매장에서 POS-VAN 불일치 주 3회 이상 반복. 단말기 점검 필요.", color: "bg-red-100 text-red-800" },
];

export default function ScrAi025() {
  return (
    <div className="space-y-4">
      <MockBanner message="AI 분석 결과 - Mock 데이터" />
      <h2 className="text-lg font-bold">자동 인사이트 생성</h2>
      <p className="text-sm text-muted-foreground">AI가 자동으로 생성한 인사이트 {insights.length}건</p>

      <div className="space-y-3">
        {insights.map((ins) => (
          <Card key={ins.id}>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                {ins.title}
                <Badge className={ins.color} variant="outline">{ins.priority}</Badge>
                <Badge variant="outline">{ins.category}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{ins.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
