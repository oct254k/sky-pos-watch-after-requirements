export interface Receipt {
  id: string;
  storeId: string;
  storeName: string;
  companyName: string;
  date: string;
  time: string;
  totalAmount: number;
  paymentMethod: string;
  status: string;
  items: { name: string; qty: number; price: number }[];
  vanTid: string;
}

export const receipts: Receipt[] = Array.from({ length: 30 }, (_, i) => {
  const idx = i + 1;
  const storeNames = ["1층 A-101", "1층 A-102", "2층 B-201", "3층 C-301", "1층 A-105"];
  const companyNames = ["스카이푸드", "스카이푸드", "에어라운지", "듀티프리마트", "클라우드카페"];
  const methods = ["카드", "현금", "카드", "카드", "간편결제"];
  const statuses = ["정상", "정상", "정상", "취소", "정상"];
  const si = idx % 5;
  const day = String((idx % 28) + 1).padStart(2, "0");
  const hour = String(9 + (idx % 12)).padStart(2, "0");
  return {
    id: `R${String(idx).padStart(4, "0")}`,
    storeId: `S${String(si + 1).padStart(3, "0")}`,
    storeName: storeNames[si],
    companyName: companyNames[si],
    date: `2025-01-${day}`,
    time: `${hour}:${String((idx * 7) % 60).padStart(2, "0")}`,
    totalAmount: (idx * 3500 + 1000) * (si + 1),
    paymentMethod: methods[si],
    status: statuses[idx % 5],
    items: [
      { name: "아메리카노", qty: idx % 3 + 1, price: 4500 },
      { name: "크로와상", qty: 1, price: 3500 },
    ],
    vanTid: `VAN${String(idx).padStart(6, "0")}`,
  };
});
