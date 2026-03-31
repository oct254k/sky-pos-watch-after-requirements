"use client";

import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface SearchPanelProps {
  children: ReactNode;
  onSearch?: () => void;
  onReset?: () => void;
}

export function SearchPanel({ children, onSearch, onReset }: SearchPanelProps) {
  return (
    <div className="mb-4 rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4">
      <div className="flex flex-wrap items-end gap-3">
        {children}
        <div className="flex gap-2 ml-auto">
          <Button size="sm" onClick={onSearch} className="bg-[#002D56] hover:bg-[#001a33] text-white">조회</Button>
          <Button size="sm" variant="outline" onClick={onReset} className="border-[#cbd5e1] text-[#475569] hover:bg-[#f0f4f8]">초기화</Button>
        </div>
      </div>
    </div>
  );
}
