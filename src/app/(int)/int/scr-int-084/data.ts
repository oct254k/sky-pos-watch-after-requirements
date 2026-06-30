// 층별 도면 데이터 — 원본 floor-plan.html에서 이식
// TODAY는 목업 D-day 안정성을 위해 하드코딩
export const TODAY = new Date("2026-06-30");

export const STATUS: Record<string, { label: string; hex: string }> = {
  active:   { label: "정상 운영중", hex: "#2e9d63" },
  expiring: { label: "만료 임박",   hex: "#d39423" },
  vacant:   { label: "공실",        hex: "#8a98a4" },
  incoming: { label: "입점 예정",   hex: "#3b82c4" },
};

export type UnitStatus = "active" | "expiring" | "vacant" | "incoming";
export type UnitCat = "duty" | "food" | "retail" | "service" | null;

export interface Unit {
  id: string;
  x: number; y: number; w: number; h: number;
  status: UnitStatus;
  tenant: string | null;
  cat: UnitCat;
  biz: string | null;
  start: string | null;
  end: string | null;
  sales: number | null;
}

// 좌표계: viewBox 1935 × 812 기준 (gimpo-1f.png와 동일)
export const UNITS: Unit[] = [
  // 좌측 끝 면세 (큰 블록) — 벽선 재정렬
  { id: "A-301", x: 26,   y: 403, w: 127, h: 121, status: "active",   tenant: "신라면세점",   cat: "duty",    biz: "화장품·향수",        start: "2023-03-01", end: "2027-02-28", sales: 4820 },
  { id: "A-302", x: 156,  y: 403, w: 246, h: 121, status: "active",   tenant: "롯데면세점",   cat: "duty",    biz: "주류·담배",           start: "2024-01-01", end: "2027-12-31", sales: 3950 },
  // 좌측 빈 블록 → 명품 화장품 2단 (신규)
  { id: "A-308", x: 438,  y: 403, w: 84,  h: 70,  status: "active",   tenant: "랑콤",         cat: "retail",  biz: "화장품·명품",         start: "2023-03-01", end: "2028-02-28", sales: 980  },
  { id: "A-309", x: 438,  y: 476, w: 84,  h: 53,  status: "active",   tenant: "에스티로더",   cat: "retail",  biz: "화장품·스킨케어",     start: "2022-09-01", end: "2027-08-31", sales: 860  },
  // 깔때기 인접 2단 블록
  { id: "A-303", x: 525,  y: 403, w: 49,  h: 42,  status: "expiring", tenant: "설빙",         cat: "food",    biz: "디저트",              start: "2021-07-01", end: "2026-07-31", sales: 610  },
  { id: "A-304", x: 525,  y: 447, w: 49,  h: 44,  status: "vacant",   tenant: null,           cat: null,      biz: null,                  start: null,         end: null,         sales: null },
  // 좌측 게이트 행 — 쥬씨(신규) + 기존 3칸 재정렬
  { id: "A-310", x: 577,  y: 404, w: 44,  h: 88,  status: "active",   tenant: "쥬씨",         cat: "food",    biz: "생과일주스",           start: "2024-06-01", end: "2027-05-31", sales: 420  },
  { id: "A-305", x: 625,  y: 404, w: 45,  h: 88,  status: "active",   tenant: "투썸플레이스", cat: "food",    biz: "카페",                start: "2022-09-01", end: "2026-08-31", sales: 880  },
  { id: "A-306", x: 673,  y: 404, w: 78,  h: 88,  status: "active",   tenant: "올리브영",     cat: "retail",  biz: "H&B 스토어",          start: "2023-05-01", end: "2027-04-30", sales: 1340 },
  { id: "A-307", x: 754,  y: 404, w: 98,  h: 88,  status: "active",   tenant: "BBQ",          cat: "food",    biz: "치킨",                start: "2024-03-01", end: "2027-02-28", sales: 540  },
  // 우측 게이트 행 — 기존 3칸 재정렬 + 신규 3칸
  { id: "B-301", x: 991,  y: 404, w: 96,  h: 88,  status: "active",   tenant: "스타벅스",     cat: "food",    biz: "카페",                start: "2022-01-01", end: "2026-09-30", sales: 1620 },
  { id: "B-302", x: 1090, y: 404, w: 54,  h: 88,  status: "expiring", tenant: "파리바게뜨",   cat: "food",    biz: "베이커리",            start: "2021-10-01", end: "2026-07-15", sales: 720  },
  { id: "B-303", x: 1147, y: 404, w: 53,  h: 88,  status: "active",   tenant: "맥도날드",     cat: "food",    biz: "패스트푸드",          start: "2023-02-01", end: "2027-01-31", sales: 1180 },
  { id: "B-305", x: 1203, y: 404, w: 41,  h: 88,  status: "incoming", tenant: "에그드랍",     cat: "food",    biz: "브런치 (입점예정)",   start: "2026-09-01", end: "2030-08-31", sales: null },
  { id: "B-306", x: 1247, y: 404, w: 39,  h: 88,  status: "active",   tenant: "써브웨이",     cat: "food",    biz: "샌드위치",             start: "2023-11-01", end: "2027-10-31", sales: 510  },
  { id: "B-307", x: 1289, y: 404, w: 25,  h: 88,  status: "active",   tenant: "ATM·환전",     cat: "service", biz: "무인 ATM",             start: "2020-06-01", end: "2028-12-31", sales: 80   },
  { id: "B-304", x: 1221, y: 367, w: 65,  h: 33,  status: "incoming", tenant: "공차",         cat: "food",    biz: "음료 (입점예정)",     start: "2026-08-01", end: "2030-07-31", sales: null },
  // 우측 띠 안 박스
  { id: "B-310", x: 1548, y: 268, w: 109, h: 46,  status: "active",   tenant: "이니스프리",   cat: "retail",  biz: "화장품",              start: "2024-06-01", end: "2028-05-31", sales: 760  },
  // 좌측 하단 클러스터 — 1행 3셀 (벽선 기준: x45~449, y582~712, 수직분할 x257·x352)
  { id: "C-201", x: 49,   y: 582, w: 207, h: 128, status: "active",   tenant: "교보문고",     cat: "retail",  biz: "서점",                start: "2022-04-01", end: "2027-03-31", sales: 430  },
  { id: "C-202", x: 258,  y: 582, w: 93,  h: 128, status: "vacant",   tenant: null,           cat: null,      biz: null,                  start: null,         end: null,         sales: null },
  { id: "C-203", x: 354,  y: 582, w: 92,  h: 128, status: "active",   tenant: "GS25",         cat: "retail",  biz: "편의점",              start: "2023-08-01", end: "2027-07-31", sales: 950  },
  // 중앙 하단 소형 (GATE 6 / GATE 5 인접 박스)
  { id: "D-101", x: 524,  y: 678, w: 95,  h: 30,  status: "active",   tenant: "환전소(우리)", cat: "service", biz: "환전",                start: "2020-01-01", end: "2028-12-31", sales: 290  },
  { id: "D-102", x: 780,  y: 678, w: 83,  h: 30,  status: "vacant",   tenant: null,           cat: null,      biz: null,                  start: null,         end: null,         sales: null },
  // 우측 하단 — 계단형 3박스 (벽선 기준)
  { id: "E-201", x: 1398, y: 567, w: 88,  h: 39,  status: "active",   tenant: "빈브라더스",   cat: "food",    biz: "스페셜티 커피",       start: "2024-02-01", end: "2028-01-31", sales: 540  },
  { id: "E-202", x: 1489, y: 568, w: 63,  h: 47,  status: "incoming", tenant: "논픽션",       cat: "retail",  biz: "향수 (입점예정)",     start: "2026-09-01", end: "2030-08-31", sales: null },
  { id: "E-203", x: 1570, y: 616, w: 69,  h: 41,  status: "active",   tenant: "카페베네",     cat: "food",    biz: "카페",                start: "2023-06-01", end: "2027-05-31", sales: 470  },
];

export interface FloorOption {
  value: string;
  label: string;
  ready: boolean; // false = 준비중
}

export const FLOORS: FloorOption[] = [
  { value: "gimpo-1f", label: "김포공항 1층",        ready: true  },
  { value: "gimpo-2f", label: "김포공항 2층",        ready: false },
  { value: "icn-t1-3f", label: "인천 제1터미널 3F", ready: false },
  { value: "icn-t2-3f", label: "인천 제2터미널 3F", ready: false },
];

export function fmtSales(v: number | null): string {
  return v == null ? "—" : v.toLocaleString() + "만원";
}

export function dday(end: string | null): number | null {
  if (!end) return null;
  return Math.ceil((new Date(end).getTime() - TODAY.getTime()) / (1000 * 60 * 60 * 24));
}
