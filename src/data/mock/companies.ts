export interface Company {
  id: string;
  name: string;
  bizNo: string;
  ceo: string;
  type: string;
  status: string;
  contractCount: number;
  phone: string;
  email: string;
  address: string;
  regDate: string;
}

export const companies: Company[] = [
  { id: "C001", name: "스카이푸드", bizNo: "123-45-67890", ceo: "김영호", type: "계약업체", status: "정상", contractCount: 3, phone: "02-1234-5678", email: "sky@food.co.kr", address: "서울시 강서구 공항대로 123", regDate: "2024-01-15" },
  { id: "C002", name: "에어라운지", bizNo: "234-56-78901", ceo: "이미경", type: "계약업체", status: "정상", contractCount: 2, phone: "02-2345-6789", email: "air@lounge.co.kr", address: "서울시 강서구 하늘길 45", regDate: "2024-03-01" },
  { id: "C003", name: "듀티프리마트", bizNo: "345-67-89012", ceo: "박준서", type: "마스터컨세션", status: "정상", contractCount: 5, phone: "02-3456-7890", email: "duty@free.co.kr", address: "서울시 중구 세종대로 67", regDate: "2023-06-20" },
  { id: "C004", name: "클라우드카페", bizNo: "456-78-90123", ceo: "최수진", type: "POS업체", status: "정상", contractCount: 1, phone: "02-4567-8901", email: "cloud@cafe.co.kr", address: "서울시 마포구 월드컵로 89", regDate: "2024-07-10" },
  { id: "C005", name: "하늘편의점", bizNo: "567-89-01234", ceo: "정태현", type: "계약업체", status: "해지", contractCount: 0, phone: "02-5678-9012", email: "sky@cvs.co.kr", address: "서울시 강서구 공항로 101", regDate: "2023-11-05" },
];
