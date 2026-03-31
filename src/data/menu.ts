export type MenuItem = {
  id: string;
  label: string;
  path?: string;
  children?: MenuItem[];
  area: "ext" | "int" | "ai" | "erp";
  icon?: string;
};

export const extMenu: MenuItem[] = [
  {
    id: "ext-1", label: "회원관리", area: "ext", icon: "👤", children: [
      { id: "SCR-EXT-001", label: "회원가입", path: "/ext/scr-ext-001", area: "ext" },
      { id: "SCR-EXT-002", label: "로그인", path: "/ext/scr-ext-002", area: "ext" },
    ],
  },
  {
    id: "ext-2", label: "판매품목 관리", area: "ext", icon: "📦", children: [
      { id: "SCR-EXT-003", label: "판매품목(가격) 등록", path: "/ext/scr-ext-003", area: "ext" },
      { id: "SCR-EXT-004", label: "품목 신청내역 조회", path: "/ext/scr-ext-004", area: "ext" },
      { id: "SCR-EXT-005", label: "미승인 품목 조회", path: "/ext/scr-ext-005", area: "ext" },
    ],
  },
  {
    id: "ext-3", label: "매출관리", area: "ext", icon: "💰", children: [
      { id: "SCR-EXT-006", label: "영수증 조회", path: "/ext/scr-ext-006", area: "ext" },
      { id: "SCR-EXT-007", label: "수동매출 관리", path: "/ext/scr-ext-007", area: "ext" },
      { id: "SCR-EXT-008", label: "기타 매출 등록", path: "/ext/scr-ext-008", area: "ext" },
      { id: "SCR-EXT-009", label: "일마감 관리", path: "/ext/scr-ext-009", area: "ext" },
      { id: "SCR-EXT-010", label: "월마감 관리", path: "/ext/scr-ext-010", area: "ext" },
      { id: "SCR-EXT-011", label: "연과세표준 증명내역 관리", path: "/ext/scr-ext-011", area: "ext" },
    ],
  },
  {
    id: "ext-4", label: "MC 매출관리", area: "ext", icon: "🏪", children: [
      { id: "SCR-EXT-012", label: "MC 판매품목(가격) 등록", path: "/ext/scr-ext-012", area: "ext" },
      { id: "SCR-EXT-013", label: "MC 스마트오더 매출 조회", path: "/ext/scr-ext-013", area: "ext" },
      { id: "SCR-EXT-014", label: "MC 일마감 내역 관리", path: "/ext/scr-ext-014", area: "ext" },
      { id: "SCR-EXT-015", label: "MC 매출/일마감 대사 관리", path: "/ext/scr-ext-015", area: "ext" },
      { id: "SCR-EXT-016", label: "MC 부과임대료 통합 조회", path: "/ext/scr-ext-016", area: "ext" },
    ],
  },
  {
    id: "ext-5", label: "임대료 관리", area: "ext", icon: "🏢", children: [
      { id: "SCR-EXT-017", label: "매출연동 임대료 산정내역 조회", path: "/ext/scr-ext-017", area: "ext" },
      { id: "SCR-EXT-018", label: "부과임대료 현황 조회", path: "/ext/scr-ext-018", area: "ext" },
      { id: "SCR-EXT-019", label: "연정산 임대료 산정내역 조회", path: "/ext/scr-ext-019", area: "ext" },
    ],
  },
  {
    id: "ext-6", label: "소통광장", area: "ext", icon: "📢", children: [
      { id: "SCR-EXT-020", label: "공지사항", path: "/ext/scr-ext-020", area: "ext" },
      { id: "SCR-EXT-021", label: "자료실", path: "/ext/scr-ext-021", area: "ext" },
      { id: "SCR-EXT-022", label: "Q&A", path: "/ext/scr-ext-022", area: "ext" },
    ],
  },
  {
    id: "ext-7", label: "마이페이지", area: "ext", icon: "⚙️", children: [
      { id: "SCR-EXT-023", label: "신청 내역 조회", path: "/ext/scr-ext-023", area: "ext" },
      { id: "SCR-EXT-024", label: "회원정보 수정", path: "/ext/scr-ext-024", area: "ext" },
    ],
  },
];

export const intMenu: MenuItem[] = [
  { id: "SCR-INT-001", label: "로그인", path: "/int/scr-int-001", area: "int", icon: "🔑" },
  {
    id: "int-1", label: "운영현황 대시보드", area: "int", icon: "📊", children: [
      { id: "SCR-INT-002", label: "매출추이 현황 분석", path: "/int/scr-int-002", area: "int" },
      { id: "SCR-INT-003", label: "누적매출 현황 분석", path: "/int/scr-int-003", area: "int" },
      { id: "SCR-INT-004", label: "기간별 매출 추세 분석", path: "/int/scr-int-004", area: "int" },
    ],
  },
  {
    id: "int-2", label: "기준정보 관리", area: "int", icon: "📋", children: [
      { id: "SCR-INT-005", label: "고객(업체)정보 조회", path: "/int/scr-int-005", area: "int" },
      { id: "SCR-INT-006", label: "계약정보 관리", path: "/int/scr-int-006", area: "int" },
      { id: "SCR-INT-007", label: "면세점 외 요율 관리", path: "/int/scr-int-007", area: "int" },
      { id: "SCR-INT-008", label: "면세점 요율 관리", path: "/int/scr-int-008", area: "int" },
      { id: "SCR-INT-009", label: "온라인면세점 요율 관리", path: "/int/scr-int-009", area: "int" },
      { id: "SCR-INT-010", label: "품목분류 관리", path: "/int/scr-int-010", area: "int" },
      { id: "SCR-INT-011", label: "브랜드 관리", path: "/int/scr-int-011", area: "int" },
      { id: "SCR-INT-012", label: "입점업체별 POS업체 관리", path: "/int/scr-int-012", area: "int" },
      { id: "SCR-INT-013", label: "매장정보 관리", path: "/int/scr-int-013", area: "int" },
      { id: "SCR-INT-014", label: "VAN 업체 관리", path: "/int/scr-int-014", area: "int" },
      { id: "SCR-INT-015", label: "VAN 단말 관리", path: "/int/scr-int-015", area: "int" },
      { id: "SCR-INT-016", label: "ERP 수동연계", path: "/int/scr-int-016", area: "int" },
    ],
  },
  {
    id: "int-3", label: "판매품목 및 가격 관리", area: "int", icon: "🏷️", children: [
      { id: "SCR-INT-017", label: "품목(가격) 승인 관리", path: "/int/scr-int-017", area: "int" },
      { id: "SCR-INT-018", label: "품목 판매가격 비교/검증", path: "/int/scr-int-018", area: "int" },
      { id: "SCR-INT-019", label: "미승인 품목/가격 관리", path: "/int/scr-int-019", area: "int" },
    ],
  },
  {
    id: "int-4", label: "매출정보 관리", area: "int", icon: "💳", children: [
      { id: "SCR-INT-020", label: "영수증 관리", path: "/int/scr-int-020", area: "int" },
      { id: "SCR-INT-021", label: "일마감 관리", path: "/int/scr-int-021", area: "int" },
      { id: "SCR-INT-022", label: "임대매장 월마감 관리", path: "/int/scr-int-022", area: "int" },
      { id: "SCR-INT-023", label: "월마감 기간 통제 관리", path: "/int/scr-int-023", area: "int" },
      { id: "SCR-INT-024", label: "월마감 변경/이월처리 관리", path: "/int/scr-int-024", area: "int" },
      { id: "SCR-INT-025", label: "VAN결제 수신 조회", path: "/int/scr-int-025", area: "int" },
      { id: "SCR-INT-026", label: "일마감/VAN결제 검증", path: "/int/scr-int-026", area: "int" },
      { id: "SCR-INT-027", label: "스마트오더 결제수신 조회", path: "/int/scr-int-027", area: "int" },
    ],
  },
  {
    id: "int-5", label: "임대료 관리", area: "int", icon: "🏢", children: [
      { id: "SCR-INT-028", label: "월 변동임대료 산정", path: "/int/scr-int-028", area: "int" },
      { id: "SCR-INT-029", label: "월 변동임대료 조정", path: "/int/scr-int-029", area: "int" },
      { id: "SCR-INT-030", label: "월 변동임대료 대사 관리", path: "/int/scr-int-030", area: "int" },
      { id: "SCR-INT-031", label: "고정/기본 임대료 조회", path: "/int/scr-int-031", area: "int" },
      { id: "SCR-INT-032", label: "연 과세표준 내역 조회", path: "/int/scr-int-032", area: "int" },
      { id: "SCR-INT-033", label: "연 임대료 정산", path: "/int/scr-int-033", area: "int" },
      { id: "SCR-INT-034", label: "임대료 고지 조회", path: "/int/scr-int-034", area: "int" },
      { id: "SCR-INT-035", label: "수납내역 조회", path: "/int/scr-int-035", area: "int" },
    ],
  },
  {
    id: "int-6", label: "매출분석", area: "int", icon: "📈", children: [
      { id: "SCR-INT-036", label: "매출 추이 분석", path: "/int/scr-int-036", area: "int" },
      { id: "SCR-INT-037", label: "업체별 매출 분석", path: "/int/scr-int-037", area: "int" },
      { id: "SCR-INT-038", label: "품목별 매출 분석", path: "/int/scr-int-038", area: "int" },
      { id: "SCR-INT-039", label: "위치별 매출 분석", path: "/int/scr-int-039", area: "int" },
      { id: "SCR-INT-040", label: "여객 변동별 매출 분석", path: "/int/scr-int-040", area: "int" },
      { id: "SCR-INT-041", label: "시간대별 매출 분석", path: "/int/scr-int-041", area: "int" },
      { id: "SCR-INT-042", label: "면세점 매출 분석", path: "/int/scr-int-042", area: "int" },
      { id: "SCR-INT-043", label: "결제수단별 매출 분석", path: "/int/scr-int-043", area: "int" },
      { id: "SCR-INT-044", label: "금액대별 매출 분석", path: "/int/scr-int-044", area: "int" },
      { id: "SCR-INT-045", label: "매장 면적별 매출 분석", path: "/int/scr-int-045", area: "int" },
      { id: "SCR-INT-046", label: "사용자 구성 매출분석", path: "/int/scr-int-046", area: "int" },
      { id: "SCR-INT-047", label: "전대매장 매출 일집계", path: "/int/scr-int-047", area: "int" },
    ],
  },
  {
    id: "int-7", label: "모니터링", area: "int", icon: "🖥️", children: [
      { id: "SCR-INT-048", label: "Agent 연계 상태 모니터링", path: "/int/scr-int-048", area: "int" },
      { id: "SCR-INT-049", label: "Agent 연계 상태 이력 조회", path: "/int/scr-int-049", area: "int" },
      { id: "SCR-INT-050", label: "업체 매출 수신 현황 모니터링", path: "/int/scr-int-050", area: "int" },
      { id: "SCR-INT-051", label: "매출 데이터 수집 모니터링", path: "/int/scr-int-051", area: "int" },
      { id: "SCR-INT-052", label: "이상거래 관리 모니터링", path: "/int/scr-int-052", area: "int" },
      { id: "SCR-INT-053", label: "현금영수증 취소 관리", path: "/int/scr-int-053", area: "int" },
      { id: "SCR-INT-054", label: "매출정보 오류 현황", path: "/int/scr-int-054", area: "int" },
    ],
  },
  {
    id: "int-8", label: "임대물건 관리", area: "int", icon: "🏗️", children: [
      { id: "SCR-INT-055", label: "임대물건 등록/관리", path: "/int/scr-int-055", area: "int" },
      { id: "SCR-INT-056", label: "Hierarchy 등록/관리", path: "/int/scr-int-056", area: "int" },
      { id: "SCR-INT-057", label: "임대물건 합병/분할 관리", path: "/int/scr-int-057", area: "int" },
      { id: "SCR-INT-058", label: "공실 현황 조회", path: "/int/scr-int-058", area: "int" },
      { id: "SCR-INT-059", label: "Space(물리공간) 관리", path: "/int/scr-int-059", area: "int" },
    ],
  },
  {
    id: "int-9", label: "계약구조 관리", area: "int", icon: "📑", children: [
      { id: "SCR-INT-060", label: "고객구조 관리", path: "/int/scr-int-060", area: "int" },
      { id: "SCR-INT-061", label: "계약구조 관리", path: "/int/scr-int-061", area: "int" },
      { id: "SCR-INT-062", label: "계약/매장 연결 관리", path: "/int/scr-int-062", area: "int" },
    ],
  },
  {
    id: "int-10", label: "업무지원", area: "int", icon: "📎", children: [
      { id: "SCR-INT-063", label: "규정 및 방침 관리", path: "/int/scr-int-063", area: "int" },
      { id: "SCR-INT-064", label: "시설 입주/변동/퇴거 이력 관리", path: "/int/scr-int-064", area: "int" },
      { id: "SCR-INT-065", label: "미스터리 쇼퍼 운영관리", path: "/int/scr-int-065", area: "int" },
      { id: "SCR-INT-066", label: "상업시설 평가관리", path: "/int/scr-int-066", area: "int" },
      { id: "SCR-INT-067", label: "상업시설 현황 보고 관리", path: "/int/scr-int-067", area: "int" },
    ],
  },
  {
    id: "int-11", label: "Agent 관리", area: "int", icon: "🤖", children: [
      { id: "SCR-INT-068", label: "Agent 설정 관리", path: "/int/scr-int-068", area: "int" },
      { id: "SCR-INT-069", label: "Agent 원격명령 관리", path: "/int/scr-int-069", area: "int" },
    ],
  },
  {
    id: "int-12", label: "사용자/권한 관리", area: "int", icon: "🔐", children: [
      { id: "SCR-INT-070", label: "회원정보 조회/검색", path: "/int/scr-int-070", area: "int" },
      { id: "SCR-INT-071", label: "회원가입 승인", path: "/int/scr-int-071", area: "int" },
      { id: "SCR-INT-072", label: "회원정보 관리", path: "/int/scr-int-072", area: "int" },
      { id: "SCR-INT-073", label: "외부망 회원 관리", path: "/int/scr-int-073", area: "int" },
    ],
  },
  {
    id: "int-13", label: "이력 관리", area: "int", icon: "📜", children: [
      { id: "SCR-INT-074", label: "로그인 이력 관리", path: "/int/scr-int-074", area: "int" },
      { id: "SCR-INT-075", label: "매출변경 이력 관리", path: "/int/scr-int-075", area: "int" },
      { id: "SCR-INT-076", label: "메일/SMS 전송이력 관리", path: "/int/scr-int-076", area: "int" },
    ],
  },
  {
    id: "int-14", label: "시스템 관리", area: "int", icon: "⚙️", children: [
      { id: "SCR-INT-077", label: "메뉴 관리", path: "/int/scr-int-077", area: "int" },
      { id: "SCR-INT-078", label: "권한 관리", path: "/int/scr-int-078", area: "int" },
      { id: "SCR-INT-079", label: "공통코드 관리", path: "/int/scr-int-079", area: "int" },
      { id: "SCR-INT-080", label: "파티션 현황", path: "/int/scr-int-080", area: "int" },
      { id: "SCR-INT-081", label: "시스템 로그 관리", path: "/int/scr-int-081", area: "int" },
    ],
  },
  {
    id: "int-15", label: "마이페이지", area: "int", icon: "👤", children: [
      { id: "SCR-INT-082", label: "처리 내역 조회", path: "/int/scr-int-082", area: "int" },
      { id: "SCR-INT-083", label: "알림 조회", path: "/int/scr-int-083", area: "int" },
    ],
  },
];

export const aiMenu: MenuItem[] = [
  {
    id: "ai-1", label: "AI 대시보드", area: "ai", icon: "🤖", children: [
      { id: "SCR-AI-001", label: "AI 서비스 통합 현황", path: "/ai/scr-ai-001", area: "ai" },
    ],
  },
  {
    id: "ai-2", label: "임대업무 지원 AI", area: "ai", icon: "🔍", children: [
      { id: "SCR-AI-002", label: "AI 매핑 결과 검토", path: "/ai/scr-ai-002", area: "ai" },
      { id: "SCR-AI-003", label: "미승인/오매핑 품목 조회", path: "/ai/scr-ai-003", area: "ai" },
      { id: "SCR-AI-004", label: "매핑 확정/재분류", path: "/ai/scr-ai-004", area: "ai" },
      { id: "SCR-AI-005", label: "이상거래 탐지 결과 조회", path: "/ai/scr-ai-005", area: "ai" },
      { id: "SCR-AI-006", label: "이상거래 업체 상세 정보", path: "/ai/scr-ai-006", area: "ai" },
      { id: "SCR-AI-007", label: "미스터리 쇼퍼 점검 요청", path: "/ai/scr-ai-007", area: "ai" },
    ],
  },
  {
    id: "ai-3", label: "이상거래 탐지", area: "ai", icon: "⚠️", children: [
      { id: "SCR-AI-008", label: "매출 누락 탐지", path: "/ai/scr-ai-008", area: "ai" },
      { id: "SCR-AI-009", label: "이상거래 탐지", path: "/ai/scr-ai-009", area: "ai" },
      { id: "SCR-AI-010", label: "매출 증감 요인 자동 분석", path: "/ai/scr-ai-010", area: "ai" },
      { id: "SCR-AI-011", label: "이상거래 탐지 대시보드", path: "/ai/scr-ai-011", area: "ai" },
    ],
  },
  {
    id: "ai-4", label: "품목체계 관리", area: "ai", icon: "🗂️", children: [
      { id: "SCR-AI-012", label: "표준 분류체계 관리", path: "/ai/scr-ai-012", area: "ai" },
      { id: "SCR-AI-013", label: "품목 데이터 이행 관리", path: "/ai/scr-ai-013", area: "ai" },
    ],
  },
  {
    id: "ai-5", label: "신규품목 AI 자동매핑", area: "ai", icon: "🧠", children: [
      { id: "SCR-AI-014", label: "LLM 품목코드 추천/생성", path: "/ai/scr-ai-014", area: "ai" },
      { id: "SCR-AI-015", label: "미등록 단품 자동 생성", path: "/ai/scr-ai-015", area: "ai" },
      { id: "SCR-AI-016", label: "오매핑 탐지 및 보정", path: "/ai/scr-ai-016", area: "ai" },
      { id: "SCR-AI-017", label: "프롬프트 관리", path: "/ai/scr-ai-017", area: "ai" },
    ],
  },
  {
    id: "ai-6", label: "입점업체 운영 지원", area: "ai", icon: "🏬", children: [
      { id: "SCR-AI-018", label: "운영 가이드", path: "/ai/scr-ai-018", area: "ai" },
      { id: "SCR-AI-019", label: "수요 예측", path: "/ai/scr-ai-019", area: "ai" },
    ],
  },
  {
    id: "ai-7", label: "공간별 매출 분석", area: "ai", icon: "🗺️", children: [
      { id: "SCR-AI-020", label: "히트맵 분석", path: "/ai/scr-ai-020", area: "ai" },
      { id: "SCR-AI-021", label: "공간 기반 성과지표", path: "/ai/scr-ai-021", area: "ai" },
      { id: "SCR-AI-022", label: "상권 특성 자동 분류", path: "/ai/scr-ai-022", area: "ai" },
      { id: "SCR-AI-023", label: "매출 예측 시뮬레이션", path: "/ai/scr-ai-023", area: "ai" },
      { id: "SCR-AI-024", label: "맞춤형 리포트 자동 생성", path: "/ai/scr-ai-024", area: "ai" },
    ],
  },
  {
    id: "ai-8", label: "의사결정 지원", area: "ai", icon: "💡", children: [
      { id: "SCR-AI-025", label: "자동 인사이트 생성", path: "/ai/scr-ai-025", area: "ai" },
      { id: "SCR-AI-026", label: "자연어 질의 데이터 조회", path: "/ai/scr-ai-026", area: "ai" },
      { id: "SCR-AI-027", label: "KPI 대시보드", path: "/ai/scr-ai-027", area: "ai" },
      { id: "SCR-AI-028", label: "실시간 이상 알림", path: "/ai/scr-ai-028", area: "ai" },
    ],
  },
];

export const erpMenu: MenuItem[] = [
  {
    id: "erp-1", label: "계약/공간 조회", area: "erp", icon: "📄", children: [
      { id: "SCR-ERP-001", label: "계약 통합 조회", path: "/erp/scr-erp-001", area: "erp" },
      { id: "SCR-ERP-002", label: "계약 변경이력 조회", path: "/erp/scr-erp-002", area: "erp" },
      { id: "SCR-ERP-003", label: "계약만료/갱신 알림 조회", path: "/erp/scr-erp-003", area: "erp" },
      { id: "SCR-ERP-004", label: "공간/호실 기준 계약 조회", path: "/erp/scr-erp-004", area: "erp" },
      { id: "SCR-ERP-005", label: "공실/입점 현황 조회", path: "/erp/scr-erp-005", area: "erp" },
      { id: "SCR-ERP-006", label: "시설 개선 이력/도면 조회", path: "/erp/scr-erp-006", area: "erp" },
      { id: "SCR-ERP-007", label: "업체 통합 조회", path: "/erp/scr-erp-007", area: "erp" },
      { id: "SCR-ERP-008", label: "만족도 조사 누적 조회", path: "/erp/scr-erp-008", area: "erp" },
      { id: "SCR-ERP-009", label: "업체 연락정보/변경이력 조회", path: "/erp/scr-erp-009", area: "erp" },
    ],
  },
  {
    id: "erp-2", label: "품목/매핑 현황", area: "erp", icon: "📦", children: [
      { id: "SCR-ERP-010", label: "품목코드 현황 조회", path: "/erp/scr-erp-010", area: "erp" },
      { id: "SCR-ERP-011", label: "브랜드/상품명 현황 조회", path: "/erp/scr-erp-011", area: "erp" },
      { id: "SCR-ERP-012", label: "분류체계/가격/변경이력 조회", path: "/erp/scr-erp-012", area: "erp" },
      { id: "SCR-ERP-013", label: "승인 현황 조회", path: "/erp/scr-erp-013", area: "erp" },
      { id: "SCR-ERP-014", label: "승인결과 이력 조회", path: "/erp/scr-erp-014", area: "erp" },
      { id: "SCR-ERP-015", label: "품목-계약 매핑 현황 조회", path: "/erp/scr-erp-015", area: "erp" },
      { id: "SCR-ERP-016", label: "품목-매장 매핑 현황 조회", path: "/erp/scr-erp-016", area: "erp" },
      { id: "SCR-ERP-017", label: "품목-임대요율 매핑 현황 조회", path: "/erp/scr-erp-017", area: "erp" },
      { id: "SCR-ERP-018", label: "미승인/미매핑 품목 현황 조회", path: "/erp/scr-erp-018", area: "erp" },
      { id: "SCR-ERP-019", label: "오매핑 품목 현황 조회", path: "/erp/scr-erp-019", area: "erp" },
      { id: "SCR-ERP-020", label: "브랜드 표준화 오류 현황 조회", path: "/erp/scr-erp-020", area: "erp" },
      { id: "SCR-ERP-021", label: "품목 승인/매핑 결과 전송 현황", path: "/erp/scr-erp-021", area: "erp" },
      { id: "SCR-ERP-022", label: "수신 결과 확인 조회", path: "/erp/scr-erp-022", area: "erp" },
    ],
  },
  {
    id: "erp-3", label: "임대료 현황", area: "erp", icon: "💰", children: [
      { id: "SCR-ERP-023", label: "고정/매출연동 임대료 통합 조회", path: "/erp/scr-erp-023", area: "erp" },
      { id: "SCR-ERP-024", label: "산정 결과 조회", path: "/erp/scr-erp-024", area: "erp" },
      { id: "SCR-ERP-025", label: "임대료 산정 상세 조회", path: "/erp/scr-erp-025", area: "erp" },
      { id: "SCR-ERP-026", label: "예상 vs 실제 임대료 비교 조회", path: "/erp/scr-erp-026", area: "erp" },
      { id: "SCR-ERP-027", label: "온라인 매출 별도 산정규칙 조회", path: "/erp/scr-erp-027", area: "erp" },
      { id: "SCR-ERP-028", label: "통합 고지 조회", path: "/erp/scr-erp-028", area: "erp" },
      { id: "SCR-ERP-029", label: "고지 내역 조회", path: "/erp/scr-erp-029", area: "erp" },
      { id: "SCR-ERP-030", label: "정정고지 내역 조회", path: "/erp/scr-erp-030", area: "erp" },
      { id: "SCR-ERP-031", label: "국고보조금 고지 내역 조회", path: "/erp/scr-erp-031", area: "erp" },
      { id: "SCR-ERP-032", label: "시설사용료 부과 내역 조회", path: "/erp/scr-erp-032", area: "erp" },
    ],
  },
  {
    id: "erp-4", label: "수납/체납 현황", area: "erp", icon: "💸", children: [
      { id: "SCR-ERP-033", label: "체납 현황 조회", path: "/erp/scr-erp-033", area: "erp" },
      { id: "SCR-ERP-034", label: "체납/조치 이력 조회", path: "/erp/scr-erp-034", area: "erp" },
      { id: "SCR-ERP-035", label: "회수 진행현황 조회", path: "/erp/scr-erp-035", area: "erp" },
    ],
  },
  {
    id: "erp-5", label: "신청/승인 현황", area: "erp", icon: "✅", children: [
      { id: "SCR-ERP-036", label: "광고 승인 현황 조회", path: "/erp/scr-erp-036", area: "erp" },
      { id: "SCR-ERP-037", label: "시설물 설치 신청 현황 조회", path: "/erp/scr-erp-037", area: "erp" },
      { id: "SCR-ERP-038", label: "공사 승인 현황 조회", path: "/erp/scr-erp-038", area: "erp" },
      { id: "SCR-ERP-039", label: "팝업/단기매장 현황 조회", path: "/erp/scr-erp-039", area: "erp" },
      { id: "SCR-ERP-040", label: "비정형 매출 처리 현황 조회", path: "/erp/scr-erp-040", area: "erp" },
    ],
  },
  {
    id: "erp-6", label: "대사/통제/예외 관리", area: "erp", icon: "🔒", children: [
      { id: "SCR-ERP-041", label: "SKY-POS 매출자료 수신 현황 조회", path: "/erp/scr-erp-041", area: "erp" },
      { id: "SCR-ERP-042", label: "수신이력/오류내역 조회", path: "/erp/scr-erp-042", area: "erp" },
      { id: "SCR-ERP-043", label: "매출변경 내역 이력 조회", path: "/erp/scr-erp-043", area: "erp" },
      { id: "SCR-ERP-044", label: "VAN/외부자료 대사 현황 조회", path: "/erp/scr-erp-044", area: "erp" },
      { id: "SCR-ERP-045", label: "이상징후 탐지/알림 현황 조회", path: "/erp/scr-erp-045", area: "erp" },
      { id: "SCR-ERP-046", label: "조정/예외 처리 이력 조회", path: "/erp/scr-erp-046", area: "erp" },
      { id: "SCR-ERP-047", label: "감사추적 조회", path: "/erp/scr-erp-047", area: "erp" },
      { id: "SCR-ERP-048", label: "월마감 후 매출정정/이력 조회", path: "/erp/scr-erp-048", area: "erp" },
    ],
  },
  {
    id: "erp-7", label: "조회 및 보고", area: "erp", icon: "📊", children: [
      { id: "SCR-ERP-049", label: "통합 연계 조회", path: "/erp/scr-erp-049", area: "erp" },
      { id: "SCR-ERP-050", label: "임대수익/체납 현황 보고서", path: "/erp/scr-erp-050", area: "erp" },
      { id: "SCR-ERP-051", label: "대사결과/예외처리 대시보드", path: "/erp/scr-erp-051", area: "erp" },
      { id: "SCR-ERP-052", label: "정산확인/분쟁예방 자료 조회", path: "/erp/scr-erp-052", area: "erp" },
    ],
  },
];

export const allMenus = {
  ext: extMenu,
  int: intMenu,
  ai: aiMenu,
  erp: erpMenu,
};

export type AreaType = keyof typeof allMenus;

export const areaLabels: Record<AreaType, string> = {
  ext: "외부망",
  int: "내부망",
  ai: "AI",
  erp: "ERP",
};

// Helper: get all leaf items for an area
export function getLeafItems(items: MenuItem[]): MenuItem[] {
  const leaves: MenuItem[] = [];
  for (const item of items) {
    if (item.children) {
      leaves.push(...getLeafItems(item.children));
    } else if (item.path) {
      leaves.push(item);
    }
  }
  return leaves;
}

// Helper: find screen info by screen ID
export function findScreen(screenId: string): { label: string; area: AreaType } | null {
  const id = screenId.toUpperCase();
  for (const [area, menu] of Object.entries(allMenus)) {
    const leaves = getLeafItems(menu);
    const found = leaves.find((l) => l.id === id);
    if (found) return { label: found.label, area: area as AreaType };
  }
  return null;
}
