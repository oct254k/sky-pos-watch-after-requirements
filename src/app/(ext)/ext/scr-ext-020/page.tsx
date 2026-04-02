"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { DataGrid, Column } from "@/components/common/DataGrid";
import { Input } from "@/components/ui/input";
import { notices, Notice } from "@/data/mock";

export default function ScrExt020() {
  const initialData = notices.slice(0, 3);
  const [data, setData] = useState<Notice[]>(initialData);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  const columns: Column<Notice>[] = [
    { key: "id", label: "번호", width: "80px" },
    { key: "category", label: "분류", width: "80px" },
    { key: "title", label: "제목" },
    { key: "author", label: "작성자", width: "110px" },
    { key: "createdAt", label: "작성일", width: "110px" },
    { key: "viewCount", label: "조회수", width: "70px" },
  ];

  const handleSearch = () => {
    setData(
      initialData.filter((row) => {
        const matchTitle = !searchTitle || row.title.includes(searchTitle);
        const matchCategory = !searchCategory || row.category.includes(searchCategory);
        return matchTitle && matchCategory;
      })
    );
  };

  const handleReset = () => {
    setSearchTitle("");
    setSearchCategory("");
    setData(initialData);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">공지사항</h2>
      <MockBanner message="이 화면은 Mock 데이터로 구성된 읽기전용 화면입니다." />
      <SearchPanel onSearch={handleSearch} onReset={handleReset}>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">제목</label>
          <Input value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)} placeholder="제목 검색" className="w-48" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">분류</label>
          <Input value={searchCategory} onChange={(e) => setSearchCategory(e.target.value)} placeholder="공지/시스템" className="w-32" />
        </div>
      </SearchPanel>
      <DataGrid columns={columns} data={data as unknown as Record<string, unknown>[]} />
    </div>
  );
}
