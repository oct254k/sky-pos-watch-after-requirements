"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface QnaItem {
  id: string;
  title: string;
  category: string;
  author: string;
  createdAt: string;
  status: string;
  answerDate: string;
}

const mockData: QnaItem[] = [
  { id: "Q001", title: "품목 가격 변경은 어떻게 하나요?", category: "품목관리", author: "스카이푸드", createdAt: "2025-01-14", status: "답변완료", answerDate: "2025-01-15" },
  { id: "Q002", title: "일마감 취소 방법 문의", category: "마감관리", author: "에어라운지", createdAt: "2025-01-13", status: "답변완료", answerDate: "2025-01-14" },
  { id: "Q003", title: "VAN 단말기 연결 오류 문의", category: "시스템", author: "클라우드카페", createdAt: "2025-01-16", status: "대기", answerDate: "" },
];

export default function ScrExt022() {
  const [data] = useState<QnaItem[]>(mockData);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchStatus, setSearchStatus] = useState("");

  const columns: Column<QnaItem>[] = [
    { key: "id", label: "번호", width: "80px" },
    { key: "category", label: "분류", width: "90px" },
    { key: "title", label: "제목" },
    { key: "author", label: "작성자", width: "110px" },
    { key: "createdAt", label: "작성일", width: "110px" },
    { key: "status", label: "상태", width: "100px" },
    { key: "answerDate", label: "답변일", width: "110px" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Q&A</h2>
      <MockBanner message="이 화면은 Mock 데이터로 구성된 읽기전용 화면입니다." />
      <SearchPanel>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">제목</label>
          <Input value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)} placeholder="제목 검색" className="w-48" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">상태</label>
          <Input value={searchStatus} onChange={(e) => setSearchStatus(e.target.value)} placeholder="답변완료/대기" className="w-32" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} />
    </div>
  );
}
