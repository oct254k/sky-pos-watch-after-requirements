export interface DailyClose {
  id: string;
  storeId: string;
  storeName: string;
  companyName: string;
  closeDate: string;
  totalSales: number;
  cardSales: number;
  cashSales: number;
  receiptCount: number;
  status: string;
  confirmedBy: string;
  confirmedAt: string;
}

export const dailyCloses: DailyClose[] = [
  { id: "DC001", storeId: "S001", storeName: "1층 A-101", companyName: "스카이푸드", closeDate: "2025-01-15", totalSales: 1850000, cardSales: 1550000, cashSales: 300000, receiptCount: 45, status: "확정", confirmedBy: "김영호", confirmedAt: "2025-01-15 22:00" },
  { id: "DC002", storeId: "S002", storeName: "1층 A-102", companyName: "스카이푸드", closeDate: "2025-01-15", totalSales: 920000, cardSales: 800000, cashSales: 120000, receiptCount: 28, status: "확정", confirmedBy: "김영호", confirmedAt: "2025-01-15 22:05" },
  { id: "DC003", storeId: "S003", storeName: "2층 B-201", companyName: "에어라운지", closeDate: "2025-01-15", totalSales: 3200000, cardSales: 3000000, cashSales: 200000, receiptCount: 62, status: "확정", confirmedBy: "이미경", confirmedAt: "2025-01-15 23:00" },
  { id: "DC004", storeId: "S005", storeName: "3층 C-301", companyName: "듀티프리마트", closeDate: "2025-01-15", totalSales: 15800000, cardSales: 15000000, cashSales: 800000, receiptCount: 120, status: "확정", confirmedBy: "박준서", confirmedAt: "2025-01-15 22:30" },
  { id: "DC005", storeId: "S007", storeName: "1층 A-105", companyName: "클라우드카페", closeDate: "2025-01-15", totalSales: 650000, cardSales: 580000, cashSales: 70000, receiptCount: 85, status: "미확정", confirmedBy: "", confirmedAt: "" },
  { id: "DC006", storeId: "S001", storeName: "1층 A-101", companyName: "스카이푸드", closeDate: "2025-01-16", totalSales: 2100000, cardSales: 1800000, cashSales: 300000, receiptCount: 52, status: "확정", confirmedBy: "김영호", confirmedAt: "2025-01-16 22:10" },
  { id: "DC007", storeId: "S003", storeName: "2층 B-201", companyName: "에어라운지", closeDate: "2025-01-16", totalSales: 2800000, cardSales: 2600000, cashSales: 200000, receiptCount: 55, status: "미확정", confirmedBy: "", confirmedAt: "" },
  { id: "DC008", storeId: "S005", storeName: "3층 C-301", companyName: "듀티프리마트", closeDate: "2025-01-16", totalSales: 18200000, cardSales: 17500000, cashSales: 700000, receiptCount: 135, status: "확정", confirmedBy: "박준서", confirmedAt: "2025-01-16 22:45" },
  { id: "DC009", storeId: "S009", storeName: "4층 E-401", companyName: "스카이푸드", closeDate: "2025-01-16", totalSales: 1200000, cardSales: 1050000, cashSales: 150000, receiptCount: 30, status: "확정", confirmedBy: "김영호", confirmedAt: "2025-01-16 21:50" },
  { id: "DC010", storeId: "S007", storeName: "1층 A-105", companyName: "클라우드카페", closeDate: "2025-01-16", totalSales: 720000, cardSales: 650000, cashSales: 70000, receiptCount: 92, status: "확정", confirmedBy: "최수진", confirmedAt: "2025-01-16 22:00" },
];
