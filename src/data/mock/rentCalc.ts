export interface RentCalc {
  id: string;
  yearMonth: string;
  companyName: string;
  storeName: string;
  totalSales: number;
  rate: number;
  variableRent: number;
  fixedRent: number;
  totalRent: number;
  status: string;
}

export const rentCalcs: RentCalc[] = [
  { id: "RC001", yearMonth: "2025-01", companyName: "스카이푸드", storeName: "1층 A-101", totalSales: 52000000, rate: 15, variableRent: 7800000, fixedRent: 5000000, totalRent: 12800000, status: "산정완료" },
  { id: "RC002", yearMonth: "2025-01", companyName: "에어라운지", storeName: "2층 B-201", totalSales: 88000000, rate: 18, variableRent: 15840000, fixedRent: 8000000, totalRent: 23840000, status: "산정완료" },
  { id: "RC003", yearMonth: "2025-01", companyName: "듀티프리마트", storeName: "3층 C-301", totalSales: 450000000, rate: 20, variableRent: 90000000, fixedRent: 15000000, totalRent: 105000000, status: "조정중" },
  { id: "RC004", yearMonth: "2025-01", companyName: "클라우드카페", storeName: "1층 A-105", totalSales: 19500000, rate: 8, variableRent: 1560000, fixedRent: 2500000, totalRent: 4060000, status: "산정완료" },
  { id: "RC005", yearMonth: "2024-12", companyName: "스카이푸드", storeName: "1층 A-101", totalSales: 48000000, rate: 15, variableRent: 7200000, fixedRent: 5000000, totalRent: 12200000, status: "고지완료" },
];
