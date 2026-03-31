"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";

interface Document {
  id: string;
  title: string;
  category: string;
  fileName: string;
  fileSize: string;
  author: string;
  createdAt: string;
}

const mockData: Document[] = [
  { id: "D001", title: "SKY-POS 사용 매뉴얼 v2.0", category: "매뉴얼", fileName: "sky_pos_manual_v2.pdf", fileSize: "3.2MB", author: "시스템관리자", createdAt: "2025-01-10" },
  { id: "D002", title: "품목등록 양식", category: "양식", fileName: "product_form.xlsx", fileSize: "256KB", author: "운영팀", createdAt: "2025-01-05" },
  { id: "D003", title: "월마감 체크리스트", category: "가이드", fileName: "monthly_close_checklist.pdf", fileSize: "1.1MB", author: "운영팀", createdAt: "2024-12-20" },
];

export default function ScrExt021() {
  const [data] = useState<Document[]>(mockData);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  const columns: Column<Document>[] = [
    { key: "id", label: "번호", width: "80px" },
    { key: "category", label: "분류", width: "80px" },
    { key: "title", label: "제목" },
    { key: "fileName", label: "파일명", width: "200px" },
    { key: "fileSize", label: "파일크기", width: "80px" },
    { key: "author", label: "작성자", width: "110px" },
    { key: "createdAt", label: "등록일", width: "110px" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">자료실</h2>
      <MockBanner message="이 화면은 Mock 데이터로 구성된 읽기전용 화면입니다." />
      <SearchPanel>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">제목</label>
          <Input value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)} placeholder="제목 검색" className="w-48" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">분류</label>
          <Input value={searchCategory} onChange={(e) => setSearchCategory(e.target.value)} placeholder="분류" className="w-32" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} />
    </div>
  );
}
