export interface CommonCode {
  group: string;
  groupName: string;
  code: string;
  name: string;
  description: string;
  sortOrder: number;
  useYn: boolean;
}

export const commonCodes: CommonCode[] = [
  // 계약상태
  { group: "CONTRACT_STATUS", groupName: "계약상태", code: "ACTIVE", name: "계약중", description: "정상 계약 상태", sortOrder: 1, useYn: true },
  { group: "CONTRACT_STATUS", groupName: "계약상태", code: "EXPIRING", name: "만료예정", description: "만료 30일 이내", sortOrder: 2, useYn: true },
  { group: "CONTRACT_STATUS", groupName: "계약상태", code: "EXPIRED", name: "만료", description: "계약 만료", sortOrder: 3, useYn: true },
  { group: "CONTRACT_STATUS", groupName: "계약상태", code: "TERMINATED", name: "해지", description: "계약 해지", sortOrder: 4, useYn: true },
  // 마감상태
  { group: "CLOSE_STATUS", groupName: "마감상태", code: "CONFIRMED", name: "확정", description: "마감 확정", sortOrder: 1, useYn: true },
  { group: "CLOSE_STATUS", groupName: "마감상태", code: "UNCONFIRMED", name: "미확정", description: "마감 미확정", sortOrder: 2, useYn: true },
  { group: "CLOSE_STATUS", groupName: "마감상태", code: "CLOSED", name: "마감완료", description: "월마감 완료", sortOrder: 3, useYn: true },
  { group: "CLOSE_STATUS", groupName: "마감상태", code: "IN_PROGRESS", name: "진행중", description: "마감 진행중", sortOrder: 4, useYn: true },
  // 승인상태
  { group: "APPROVAL_STATUS", groupName: "승인상태", code: "APPROVED", name: "승인", description: "승인 완료", sortOrder: 1, useYn: true },
  { group: "APPROVAL_STATUS", groupName: "승인상태", code: "PENDING", name: "대기", description: "승인 대기", sortOrder: 2, useYn: true },
  { group: "APPROVAL_STATUS", groupName: "승인상태", code: "REJECTED", name: "반려", description: "승인 반려", sortOrder: 3, useYn: true },
  { group: "APPROVAL_STATUS", groupName: "승인상태", code: "UNAPPROVED", name: "미승인", description: "미승인 상태", sortOrder: 4, useYn: true },
  // 매장상태
  { group: "STORE_STATUS", groupName: "매장상태", code: "OPEN", name: "영업중", description: "정상 영업", sortOrder: 1, useYn: true },
  { group: "STORE_STATUS", groupName: "매장상태", code: "CLOSED", name: "폐점", description: "폐점 상태", sortOrder: 2, useYn: true },
  { group: "STORE_STATUS", groupName: "매장상태", code: "RENOVATING", name: "리모델링", description: "리모델링 중", sortOrder: 3, useYn: true },
  // 위험도
  { group: "RISK_LEVEL", groupName: "위험도", code: "HIGH", name: "높음", description: "즉시 조치 필요", sortOrder: 1, useYn: true },
  { group: "RISK_LEVEL", groupName: "위험도", code: "MEDIUM", name: "보통", description: "주의 관찰", sortOrder: 2, useYn: true },
  { group: "RISK_LEVEL", groupName: "위험도", code: "LOW", name: "낮음", description: "정상 범위", sortOrder: 3, useYn: true },
  // 결제수단
  { group: "PAYMENT_METHOD", groupName: "결제수단", code: "CARD", name: "카드", description: "신용/체크카드", sortOrder: 1, useYn: true },
  { group: "PAYMENT_METHOD", groupName: "결제수단", code: "CASH", name: "현금", description: "현금 결제", sortOrder: 2, useYn: true },
  { group: "PAYMENT_METHOD", groupName: "결제수단", code: "EASY_PAY", name: "간편결제", description: "모바일 간편결제", sortOrder: 3, useYn: true },
];

export const statusColorMap: Record<string, string> = {
  // 계약
  "계약중": "bg-green-100 text-green-800",
  "만료예정": "bg-yellow-100 text-yellow-800",
  "만료": "bg-gray-100 text-gray-800",
  "해지": "bg-red-100 text-red-800",
  // 마감
  "확정": "bg-green-100 text-green-800",
  "미확정": "bg-yellow-100 text-yellow-800",
  "마감완료": "bg-blue-100 text-blue-800",
  "진행중": "bg-orange-100 text-orange-800",
  // 승인
  "승인": "bg-green-100 text-green-800",
  "대기": "bg-yellow-100 text-yellow-800",
  "반려": "bg-red-100 text-red-800",
  "미승인": "bg-gray-100 text-gray-800",
  // 매장
  "영업중": "bg-green-100 text-green-800",
  "정상": "bg-green-100 text-green-800",
  "폐점": "bg-red-100 text-red-800",
  "리모델링": "bg-blue-100 text-blue-800",
  // AI
  "확인필요": "bg-red-100 text-red-800",
  "확인완료": "bg-green-100 text-green-800",
  "정상처리": "bg-gray-100 text-gray-800",
  "조사중": "bg-yellow-100 text-yellow-800",
  "검토필요": "bg-yellow-100 text-yellow-800",
  "오매핑": "bg-red-100 text-red-800",
  // 임대료
  "산정완료": "bg-green-100 text-green-800",
  "조정중": "bg-yellow-100 text-yellow-800",
  "고지완료": "bg-blue-100 text-blue-800",
  // 결제
  "취소": "bg-red-100 text-red-800",
};
