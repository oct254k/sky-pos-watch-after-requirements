export interface Store {
  id: string;
  name: string;
  floor: string;
  area: number;
  companyId: string;
  companyName: string;
  status: string;
  category: string;
  openDate: string;
}

export const stores: Store[] = [
  { id: "S001", name: "1층 A-101", floor: "1F", area: 45.5, companyId: "C001", companyName: "스카이푸드", status: "영업중", category: "F&B", openDate: "2024-01-15" },
  { id: "S002", name: "1층 A-102", floor: "1F", area: 30.0, companyId: "C001", companyName: "스카이푸드", status: "영업중", category: "F&B", openDate: "2024-01-15" },
  { id: "S003", name: "2층 B-201", floor: "2F", area: 80.0, companyId: "C002", companyName: "에어라운지", status: "영업중", category: "라운지", openDate: "2024-03-01" },
  { id: "S004", name: "2층 B-202", floor: "2F", area: 25.0, companyId: "C002", companyName: "에어라운지", status: "영업중", category: "라운지", openDate: "2024-06-01" },
  { id: "S005", name: "3층 C-301", floor: "3F", area: 150.0, companyId: "C003", companyName: "듀티프리마트", status: "영업중", category: "면세", openDate: "2023-06-20" },
  { id: "S006", name: "3층 C-302", floor: "3F", area: 120.0, companyId: "C003", companyName: "듀티프리마트", status: "영업중", category: "면세", openDate: "2023-06-20" },
  { id: "S007", name: "1층 A-105", floor: "1F", area: 20.0, companyId: "C004", companyName: "클라우드카페", status: "영업중", category: "카페", openDate: "2024-07-10" },
  { id: "S008", name: "B1층 D-001", floor: "B1", area: 35.0, companyId: "C005", companyName: "하늘편의점", status: "폐점", category: "편의점", openDate: "2023-11-05" },
  { id: "S009", name: "4층 E-401", floor: "4F", area: 40.0, companyId: "C001", companyName: "스카이푸드", status: "영업중", category: "F&B", openDate: "2025-01-01" },
  { id: "S010", name: "3층 C-303", floor: "3F", area: 100.0, companyId: "C003", companyName: "듀티프리마트", status: "영업중", category: "면세", openDate: "2024-01-01" },
];
