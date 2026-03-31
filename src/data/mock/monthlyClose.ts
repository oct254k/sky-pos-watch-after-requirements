export interface MonthlyClose {
  id: string;
  yearMonth: string;
  companyId: string;
  companyName: string;
  storeId: string;
  storeName: string;
  totalSales: number;
  variableRent: number;
  fixedRent: number;
  status: string;
  closedAt: string;
}

export const monthlyCloses: MonthlyClose[] = [
  { id: "MC001", yearMonth: "2025-01", companyId: "C001", companyName: "스카이푸드", storeId: "S001", storeName: "1층 A-101", totalSales: 52000000, variableRent: 7800000, fixedRent: 5000000, status: "마감완료", closedAt: "2025-02-05" },
  { id: "MC002", yearMonth: "2025-01", companyId: "C002", companyName: "에어라운지", storeId: "S003", storeName: "2층 B-201", totalSales: 88000000, variableRent: 15840000, fixedRent: 8000000, status: "마감완료", closedAt: "2025-02-05" },
  { id: "MC003", yearMonth: "2025-01", companyId: "C003", companyName: "듀티프리마트", storeId: "S005", storeName: "3층 C-301", totalSales: 450000000, variableRent: 90000000, fixedRent: 15000000, status: "마감완료", closedAt: "2025-02-03" },
  { id: "MC004", yearMonth: "2024-12", companyId: "C001", companyName: "스카이푸드", storeId: "S001", storeName: "1층 A-101", totalSales: 48000000, variableRent: 7200000, fixedRent: 5000000, status: "마감완료", closedAt: "2025-01-05" },
  { id: "MC005", yearMonth: "2025-02", companyId: "C004", companyName: "클라우드카페", storeId: "S007", storeName: "1층 A-105", totalSales: 19500000, variableRent: 1560000, fixedRent: 2500000, status: "진행중", closedAt: "" },
];
