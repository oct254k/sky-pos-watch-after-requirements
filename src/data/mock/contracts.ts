export interface Contract {
  id: string;
  companyId: string;
  companyName: string;
  storeId: string;
  storeName: string;
  type: string;
  startDate: string;
  endDate: string;
  status: string;
  monthlyRent: number;
  variableRate: number;
  deposit: number;
}

export const contracts: Contract[] = [
  { id: "CT001", companyId: "C001", companyName: "스카이푸드", storeId: "S001", storeName: "1층 A-101", type: "일반임대", startDate: "2024-01-15", endDate: "2026-01-14", status: "계약중", monthlyRent: 5000000, variableRate: 15, deposit: 30000000 },
  { id: "CT002", companyId: "C001", companyName: "스카이푸드", storeId: "S002", storeName: "1층 A-102", type: "일반임대", startDate: "2024-01-15", endDate: "2026-01-14", status: "계약중", monthlyRent: 3000000, variableRate: 12, deposit: 18000000 },
  { id: "CT003", companyId: "C002", companyName: "에어라운지", storeId: "S003", storeName: "2층 B-201", type: "일반임대", startDate: "2024-03-01", endDate: "2026-02-28", status: "계약중", monthlyRent: 8000000, variableRate: 18, deposit: 50000000 },
  { id: "CT004", companyId: "C002", companyName: "에어라운지", storeId: "S004", storeName: "2층 B-202", type: "전대임대", startDate: "2024-06-01", endDate: "2025-05-31", status: "만료예정", monthlyRent: 2000000, variableRate: 10, deposit: 12000000 },
  { id: "CT005", companyId: "C003", companyName: "듀티프리마트", storeId: "S005", storeName: "3층 C-301", type: "마스터컨세션", startDate: "2023-06-20", endDate: "2028-06-19", status: "계약중", monthlyRent: 15000000, variableRate: 20, deposit: 100000000 },
  { id: "CT006", companyId: "C003", companyName: "듀티프리마트", storeId: "S006", storeName: "3층 C-302", type: "마스터컨세션", startDate: "2023-06-20", endDate: "2028-06-19", status: "계약중", monthlyRent: 12000000, variableRate: 20, deposit: 80000000 },
  { id: "CT007", companyId: "C004", companyName: "클라우드카페", storeId: "S007", storeName: "1층 A-105", type: "일반임대", startDate: "2024-07-10", endDate: "2025-07-09", status: "계약중", monthlyRent: 2500000, variableRate: 8, deposit: 15000000 },
  { id: "CT008", companyId: "C005", companyName: "하늘편의점", storeId: "S008", storeName: "B1층 D-001", type: "일반임대", startDate: "2023-11-05", endDate: "2024-11-04", status: "해지", monthlyRent: 0, variableRate: 0, deposit: 0 },
  { id: "CT009", companyId: "C001", companyName: "스카이푸드", storeId: "S009", storeName: "4층 E-401", type: "일반임대", startDate: "2025-01-01", endDate: "2027-12-31", status: "계약중", monthlyRent: 4000000, variableRate: 13, deposit: 24000000 },
  { id: "CT010", companyId: "C003", companyName: "듀티프리마트", storeId: "S010", storeName: "3층 C-303", type: "마스터컨세션", startDate: "2024-01-01", endDate: "2028-12-31", status: "계약중", monthlyRent: 10000000, variableRate: 18, deposit: 60000000 },
];
