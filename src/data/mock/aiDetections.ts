export interface AiDetection {
  id: string;
  type: string;
  storeId: string;
  storeName: string;
  companyName: string;
  riskLevel: "high" | "medium" | "low";
  score: number;
  description: string;
  detectedAt: string;
  status: string;
}

export const aiDetections: AiDetection[] = [
  { id: "AD001", type: "매출누락", storeId: "S001", storeName: "1층 A-101", companyName: "스카이푸드", riskLevel: "high", score: 92, description: "1/15 18시~20시 영수증 미수신 (VAN 기록 존재)", detectedAt: "2025-01-16 02:00", status: "확인필요" },
  { id: "AD002", type: "이상금액", storeId: "S003", storeName: "2층 B-201", companyName: "에어라운지", riskLevel: "medium", score: 75, description: "단건 결제 200만원 초과 (평균의 8배)", detectedAt: "2025-01-15 14:30", status: "확인완료" },
  { id: "AD003", type: "매출급감", storeId: "S005", storeName: "3층 C-301", companyName: "듀티프리마트", riskLevel: "low", score: 45, description: "전주 대비 매출 15% 감소 (여객 감소 연동)", detectedAt: "2025-01-16 06:00", status: "정상처리" },
  { id: "AD004", type: "현금비율이상", storeId: "S002", storeName: "1층 A-102", companyName: "스카이푸드", riskLevel: "high", score: 88, description: "현금매출 비율 60% (업종 평균 15%)", detectedAt: "2025-01-15 23:00", status: "확인필요" },
  { id: "AD005", type: "취소반복", storeId: "S007", storeName: "1층 A-105", companyName: "클라우드카페", riskLevel: "medium", score: 68, description: "당일 취소 건수 12건 (평균 2건)", detectedAt: "2025-01-15 22:00", status: "조사중" },
  { id: "AD006", type: "매출누락", storeId: "S004", storeName: "2층 B-202", companyName: "에어라운지", riskLevel: "high", score: 95, description: "POS 미가동 3시간 (영업시간 중)", detectedAt: "2025-01-16 01:00", status: "확인필요" },
  { id: "AD007", type: "이상금액", storeId: "S006", storeName: "3층 C-302", companyName: "듀티프리마트", riskLevel: "low", score: 35, description: "야간 매출 발생 (영업시간 외)", detectedAt: "2025-01-16 03:00", status: "정상처리" },
  { id: "AD008", type: "매출급증", storeId: "S009", storeName: "4층 E-401", companyName: "스카이푸드", riskLevel: "medium", score: 72, description: "전일 대비 매출 300% 증가", detectedAt: "2025-01-16 00:00", status: "확인완료" },
  { id: "AD009", type: "할인남용", storeId: "S001", storeName: "1층 A-101", companyName: "스카이푸드", riskLevel: "medium", score: 65, description: "할인율 30% 이상 건수 비정상 증가", detectedAt: "2025-01-15 21:00", status: "조사중" },
  { id: "AD010", type: "VAN불일치", storeId: "S005", storeName: "3층 C-301", companyName: "듀티프리마트", riskLevel: "high", score: 90, description: "POS-VAN 금액 차이 건 15건", detectedAt: "2025-01-16 02:30", status: "확인필요" },
];
