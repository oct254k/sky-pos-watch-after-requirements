"use client";

import { MockBanner } from "@/components/common/MockBanner";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const alerts = [
  { id: "ALT001", time: "2025-01-16 03:15", type: "매출누락", store: "2층 B-202", message: "POS 미가동 3시간 감지", severity: "확인필요" },
  { id: "ALT002", time: "2025-01-16 02:30", type: "VAN불일치", store: "3층 C-301", message: "POS-VAN 금액 차이 15건 감지", severity: "확인필요" },
  { id: "ALT003", time: "2025-01-16 02:00", type: "매출누락", store: "1층 A-101", message: "18시~20시 영수증 미수신", severity: "확인필요" },
  { id: "ALT004", time: "2025-01-16 01:00", type: "매출급증", store: "4층 E-401", message: "전일 대비 매출 300% 증가", severity: "조사중" },
  { id: "ALT005", time: "2025-01-16 00:00", type: "현금비율이상", store: "1층 A-102", message: "현금매출 비율 60% (업종 평균 15%)", severity: "확인필요" },
  { id: "ALT006", time: "2025-01-15 23:00", type: "취소반복", store: "1층 A-105", message: "당일 취소 12건 (평균 2건)", severity: "조사중" },
  { id: "ALT007", time: "2025-01-15 22:00", type: "할인남용", store: "1층 A-101", message: "할인율 30%이상 비정상 증가", severity: "조사중" },
  { id: "ALT008", time: "2025-01-15 21:00", type: "이상금액", store: "2층 B-201", message: "단건 200만원 초과 결제", severity: "확인완료" },
  { id: "ALT009", time: "2025-01-15 14:30", type: "매출급감", store: "3층 C-301", message: "전주 대비 15% 감소", severity: "정상처리" },
  { id: "ALT010", time: "2025-01-15 06:00", type: "이상금액", store: "3층 C-302", message: "야간 매출 발생 (영업시간 외)", severity: "정상처리" },
];

export default function ScrAi028() {
  return (
    <div className="space-y-4">
      <MockBanner message="AI 분석 결과 - Mock 데이터" />
      <h2 className="text-lg font-bold">실시간 이상 알림</h2>
      <p className="text-sm text-muted-foreground">최근 알림 {alerts.length}건 (시간순 정렬)</p>

      <Card>
        <CardHeader><CardTitle className="text-sm">알림 목록</CardTitle></CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {alerts.map((a) => (
              <li key={a.id} className="flex items-start gap-3 rounded border p-3">
                <div className="shrink-0 pt-0.5">
                  <StatusBadge status={a.severity} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">[{a.type}]</span>
                    <span className="text-sm">{a.store}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{a.message}</p>
                </div>
                <span className="shrink-0 text-xs text-muted-foreground">{a.time}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
