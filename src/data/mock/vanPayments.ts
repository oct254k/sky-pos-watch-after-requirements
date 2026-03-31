export interface VanPayment {
  id: string;
  vanCompany: string;
  tid: string;
  storeId: string;
  storeName: string;
  amount: number;
  cardCompany: string;
  approvalNo: string;
  transDate: string;
  transTime: string;
  status: string;
}

export const vanPayments: VanPayment[] = [
  { id: "VP001", vanCompany: "KIS정보통신", tid: "VAN000001", storeId: "S001", storeName: "1층 A-101", amount: 45000, cardCompany: "삼성카드", approvalNo: "A12345678", transDate: "2025-01-15", transTime: "09:15", status: "정상" },
  { id: "VP002", vanCompany: "KIS정보통신", tid: "VAN000002", storeId: "S001", storeName: "1층 A-101", amount: 12000, cardCompany: "현대카드", approvalNo: "A12345679", transDate: "2025-01-15", transTime: "10:30", status: "정상" },
  { id: "VP003", vanCompany: "나이스정보", tid: "VAN000003", storeId: "S003", storeName: "2층 B-201", amount: 85000, cardCompany: "국민카드", approvalNo: "A12345680", transDate: "2025-01-15", transTime: "11:20", status: "정상" },
  { id: "VP004", vanCompany: "나이스정보", tid: "VAN000004", storeId: "S003", storeName: "2층 B-201", amount: 32000, cardCompany: "신한카드", approvalNo: "A12345681", transDate: "2025-01-15", transTime: "13:45", status: "취소" },
  { id: "VP005", vanCompany: "KSNET", tid: "VAN000005", storeId: "S005", storeName: "3층 C-301", amount: 250000, cardCompany: "삼성카드", approvalNo: "A12345682", transDate: "2025-01-15", transTime: "14:10", status: "정상" },
  { id: "VP006", vanCompany: "KSNET", tid: "VAN000006", storeId: "S005", storeName: "3층 C-301", amount: 180000, cardCompany: "롯데카드", approvalNo: "A12345683", transDate: "2025-01-15", transTime: "15:20", status: "정상" },
  { id: "VP007", vanCompany: "KIS정보통신", tid: "VAN000007", storeId: "S007", storeName: "1층 A-105", amount: 9500, cardCompany: "비씨카드", approvalNo: "A12345684", transDate: "2025-01-15", transTime: "16:00", status: "정상" },
  { id: "VP008", vanCompany: "KSNET", tid: "VAN000008", storeId: "S005", storeName: "3층 C-301", amount: 520000, cardCompany: "현대카드", approvalNo: "A12345685", transDate: "2025-01-16", transTime: "09:30", status: "정상" },
  { id: "VP009", vanCompany: "나이스정보", tid: "VAN000009", storeId: "S003", storeName: "2층 B-201", amount: 67000, cardCompany: "국민카드", approvalNo: "A12345686", transDate: "2025-01-16", transTime: "10:15", status: "정상" },
  { id: "VP010", vanCompany: "KIS정보통신", tid: "VAN000010", storeId: "S001", storeName: "1층 A-101", amount: 28000, cardCompany: "신한카드", approvalNo: "A12345687", transDate: "2025-01-16", transTime: "11:40", status: "정상" },
];
