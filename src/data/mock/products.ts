export interface Product {
  id: string;
  name: string;
  category: string;
  subCategory: string;
  price: number;
  companyId: string;
  companyName: string;
  status: string;
  barcode: string;
  regDate: string;
}

export const products: Product[] = [
  { id: "P001", name: "아메리카노", category: "음료", subCategory: "커피", price: 4500, companyId: "C001", companyName: "스카이푸드", status: "승인", barcode: "8801234560001", regDate: "2024-01-20" },
  { id: "P002", name: "카페라떼", category: "음료", subCategory: "커피", price: 5000, companyId: "C001", companyName: "스카이푸드", status: "승인", barcode: "8801234560002", regDate: "2024-01-20" },
  { id: "P003", name: "크로와상", category: "식품", subCategory: "베이커리", price: 3500, companyId: "C001", companyName: "스카이푸드", status: "승인", barcode: "8801234560003", regDate: "2024-01-25" },
  { id: "P004", name: "비빔밥 세트", category: "식품", subCategory: "한식", price: 12000, companyId: "C001", companyName: "스카이푸드", status: "승인", barcode: "8801234560004", regDate: "2024-02-01" },
  { id: "P005", name: "프리미엄 위스키 700ml", category: "면세", subCategory: "주류", price: 85000, companyId: "C003", companyName: "듀티프리마트", status: "승인", barcode: "8801234560005", regDate: "2023-07-01" },
  { id: "P006", name: "향수 50ml", category: "면세", subCategory: "화장품", price: 120000, companyId: "C003", companyName: "듀티프리마트", status: "승인", barcode: "8801234560006", regDate: "2023-07-01" },
  { id: "P007", name: "선글라스", category: "면세", subCategory: "패션잡화", price: 250000, companyId: "C003", companyName: "듀티프리마트", status: "미승인", barcode: "8801234560007", regDate: "2024-08-15" },
  { id: "P008", name: "에스프레소", category: "음료", subCategory: "커피", price: 4000, companyId: "C004", companyName: "클라우드카페", status: "승인", barcode: "8801234560008", regDate: "2024-07-15" },
  { id: "P009", name: "녹차라떼", category: "음료", subCategory: "차", price: 5500, companyId: "C004", companyName: "클라우드카페", status: "승인", barcode: "8801234560009", regDate: "2024-07-15" },
  { id: "P010", name: "초콜릿 세트", category: "면세", subCategory: "식품", price: 35000, companyId: "C003", companyName: "듀티프리마트", status: "승인", barcode: "8801234560010", regDate: "2023-08-10" },
  { id: "P011", name: "삼겹살 정식", category: "식품", subCategory: "한식", price: 15000, companyId: "C001", companyName: "스카이푸드", status: "승인", barcode: "8801234560011", regDate: "2024-03-01" },
  { id: "P012", name: "우동 세트", category: "식품", subCategory: "일식", price: 11000, companyId: "C001", companyName: "스카이푸드", status: "승인", barcode: "8801234560012", regDate: "2024-03-01" },
  { id: "P013", name: "스무디", category: "음료", subCategory: "음료", price: 6000, companyId: "C004", companyName: "클라우드카페", status: "미승인", barcode: "8801234560013", regDate: "2024-09-01" },
  { id: "P014", name: "핸드크림 세트", category: "면세", subCategory: "화장품", price: 45000, companyId: "C003", companyName: "듀티프리마트", status: "승인", barcode: "8801234560014", regDate: "2024-01-15" },
  { id: "P015", name: "여행용 파우치", category: "면세", subCategory: "패션잡화", price: 28000, companyId: "C003", companyName: "듀티프리마트", status: "승인", barcode: "8801234560015", regDate: "2024-02-20" },
  { id: "P016", name: "샌드위치", category: "식품", subCategory: "간편식", price: 6500, companyId: "C001", companyName: "스카이푸드", status: "승인", barcode: "8801234560016", regDate: "2024-04-01" },
  { id: "P017", name: "과일주스", category: "음료", subCategory: "음료", price: 5000, companyId: "C001", companyName: "스카이푸드", status: "승인", barcode: "8801234560017", regDate: "2024-04-01" },
  { id: "P018", name: "담배 1보루", category: "면세", subCategory: "기타", price: 42000, companyId: "C003", companyName: "듀티프리마트", status: "승인", barcode: "8801234560018", regDate: "2023-07-01" },
  { id: "P019", name: "기내식 세트", category: "식품", subCategory: "간편식", price: 8000, companyId: "C002", companyName: "에어라운지", status: "승인", barcode: "8801234560019", regDate: "2024-03-15" },
  { id: "P020", name: "프리미엄 와인", category: "면세", subCategory: "주류", price: 65000, companyId: "C003", companyName: "듀티프리마트", status: "미승인", barcode: "8801234560020", regDate: "2024-10-01" },
];
