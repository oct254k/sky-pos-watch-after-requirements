export interface AiMapping {
  id: string;
  sourceItem: string;
  sourceCode: string;
  targetCategory: string;
  targetCode: string;
  confidence: number;
  status: string;
  companyName: string;
  mappedAt: string;
}

export const aiMappings: AiMapping[] = [
  { id: "AM001", sourceItem: "아메리카노 ICE", sourceCode: "EXT-001", targetCategory: "음료>커피>아메리카노", targetCode: "STD-BEV-001", confidence: 98, status: "확정", companyName: "스카이푸드", mappedAt: "2025-01-10" },
  { id: "AM002", sourceItem: "카페라떼 HOT", sourceCode: "EXT-002", targetCategory: "음료>커피>라떼", targetCode: "STD-BEV-002", confidence: 96, status: "확정", companyName: "스카이푸드", mappedAt: "2025-01-10" },
  { id: "AM003", sourceItem: "크로와상 플레인", sourceCode: "EXT-003", targetCategory: "식품>베이커리>페이스트리", targetCode: "STD-FOD-010", confidence: 92, status: "확정", companyName: "스카이푸드", mappedAt: "2025-01-10" },
  { id: "AM004", sourceItem: "비빔밥세트", sourceCode: "EXT-004", targetCategory: "식품>한식>밥류", targetCode: "STD-FOD-020", confidence: 85, status: "검토필요", companyName: "스카이푸드", mappedAt: "2025-01-11" },
  { id: "AM005", sourceItem: "위스키JW블랙", sourceCode: "DF-001", targetCategory: "면세>주류>위스키", targetCode: "STD-DF-001", confidence: 99, status: "확정", companyName: "듀티프리마트", mappedAt: "2025-01-09" },
  { id: "AM006", sourceItem: "샤넬No5 50ml", sourceCode: "DF-002", targetCategory: "면세>화장품>향수", targetCode: "STD-DF-020", confidence: 97, status: "확정", companyName: "듀티프리마트", mappedAt: "2025-01-09" },
  { id: "AM007", sourceItem: "레이밴 선글라스", sourceCode: "DF-003", targetCategory: "면세>패션>안경", targetCode: "STD-DF-030", confidence: 78, status: "검토필요", companyName: "듀티프리마트", mappedAt: "2025-01-12" },
  { id: "AM008", sourceItem: "에스프레소 더블", sourceCode: "CC-001", targetCategory: "음료>커피>에스프레소", targetCode: "STD-BEV-005", confidence: 94, status: "확정", companyName: "클라우드카페", mappedAt: "2025-01-11" },
  { id: "AM009", sourceItem: "녹차라떼 ICE", sourceCode: "CC-002", targetCategory: "음료>차>녹차", targetCode: "STD-BEV-010", confidence: 88, status: "확정", companyName: "클라우드카페", mappedAt: "2025-01-11" },
  { id: "AM010", sourceItem: "삼겹살정식A", sourceCode: "EXT-005", targetCategory: "식품>한식>육류", targetCode: "STD-FOD-025", confidence: 72, status: "오매핑", companyName: "스카이푸드", mappedAt: "2025-01-13" },
  { id: "AM011", sourceItem: "우동세트B", sourceCode: "EXT-006", targetCategory: "식품>일식>면류", targetCode: "STD-FOD-030", confidence: 90, status: "확정", companyName: "스카이푸드", mappedAt: "2025-01-13" },
  { id: "AM012", sourceItem: "스무디 망고", sourceCode: "CC-003", targetCategory: "음료>음료>스무디", targetCode: "STD-BEV-015", confidence: 65, status: "미승인", companyName: "클라우드카페", mappedAt: "2025-01-14" },
  { id: "AM013", sourceItem: "핸드크림 세트", sourceCode: "DF-004", targetCategory: "면세>화장품>스킨케어", targetCode: "STD-DF-025", confidence: 82, status: "검토필요", companyName: "듀티프리마트", mappedAt: "2025-01-14" },
  { id: "AM014", sourceItem: "기내식A세트", sourceCode: "AL-001", targetCategory: "식품>간편식>도시락", targetCode: "STD-FOD-040", confidence: 91, status: "확정", companyName: "에어라운지", mappedAt: "2025-01-12" },
  { id: "AM015", sourceItem: "과일주스 오렌지", sourceCode: "EXT-007", targetCategory: "음료>음료>주스", targetCode: "STD-BEV-020", confidence: 95, status: "확정", companyName: "스카이푸드", mappedAt: "2025-01-14" },
];
