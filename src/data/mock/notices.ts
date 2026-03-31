export interface Notice {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  createdAt: string;
  viewCount: number;
  isPinned: boolean;
}

export const notices: Notice[] = [
  { id: "N001", title: "[필독] 2025년 1월 월마감 일정 안내", content: "2025년 1월 월마감은 2월 5일까지입니다.", author: "시스템관리자", category: "공지", createdAt: "2025-01-02", viewCount: 256, isPinned: true },
  { id: "N002", title: "SKY-POS 시스템 정기점검 안내 (1/20)", content: "1월 20일 02:00~06:00 시스템 정기점검을 실시합니다.", author: "시스템관리자", category: "시스템", createdAt: "2025-01-15", viewCount: 189, isPinned: true },
  { id: "N003", title: "신규 품목등록 가이드 업데이트", content: "품목등록 절차가 변경되었습니다. 첨부파일을 참고해주세요.", author: "운영팀", category: "가이드", createdAt: "2025-01-10", viewCount: 142, isPinned: false },
  { id: "N004", title: "2024년 연정산 임대료 안내", content: "2024년 연정산 결과를 확인해주세요.", author: "임대팀", category: "공지", createdAt: "2025-01-08", viewCount: 98, isPinned: false },
  { id: "N005", title: "VAN 단말기 교체 안내", content: "노후 VAN 단말기 교체를 진행합니다.", author: "기술팀", category: "시스템", createdAt: "2025-01-05", viewCount: 67, isPinned: false },
];
