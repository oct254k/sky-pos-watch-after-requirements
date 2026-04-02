"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Children, ReactNode } from "react";
import { useSearchFeedback } from "./SearchFeedbackProvider";

interface SearchPanelProps {
  children: ReactNode;
  onSearch?: () => void;
  onReset?: () => void;
  loading?: boolean;
  title?: string;
}

export function SearchPanel({ children, onSearch, onReset, loading, title = "조회 조건" }: SearchPanelProps) {
  const childItems = Children.toArray(children);
  const feedback = useSearchFeedback();
  const isExternallyControlled = loading !== undefined;
  const isLoading = isExternallyControlled ? loading : (feedback?.loading ?? false);

  const handleSearch = () => {
    if (!onSearch) return;
    if (!isExternallyControlled && feedback) {
      feedback.startLoading();
    }
    onSearch();
  };

  return (
    <div className="mb-4 rounded-[18px] border border-[#d7e2ee] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
      <div className="border-b border-[#e7eef5] px-4 py-3 sm:px-5">
        <div className="text-sm font-semibold text-[#0f172a]">{title}</div>
      </div>
      <div
        className="
          space-y-4 px-4 py-4 sm:px-5
          [&_label]:mb-1.5 [&_label]:block [&_label]:text-[11px] [&_label]:font-semibold [&_label]:tracking-[0.01em] [&_label]:text-[#64748b]
          [&_input]:h-10 [&_input]:w-full [&_input]:border-[#d6e0ea] [&_input]:bg-white [&_input]:text-sm [&_input]:focus-visible:border-[#1d4f91] [&_input]:focus-visible:ring-[#1d4f91]/15
          [&_[data-slot='select-trigger']]:h-10 [&_[data-slot='select-trigger']]:w-full [&_[data-slot='select-trigger']]:border-[#d6e0ea] [&_[data-slot='select-trigger']]:bg-white [&_[data-slot='select-trigger']]:text-sm
          [&_textarea]:border-[#d6e0ea] [&_textarea]:bg-white [&_textarea]:text-sm [&_textarea]:focus-visible:border-[#1d4f91] [&_textarea]:focus-visible:ring-[#1d4f91]/15
        "
      >
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          {childItems.map((child, idx) => (
            <div key={idx} className="rounded-[12px] border border-[#e5edf5] bg-[#f8fbff] px-3 py-3">
              {child}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end border-t border-[#eef3f8] pt-4">
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <Button
              size="sm"
              variant="outline"
              onClick={onReset}
              className="min-w-[88px] border-[#cbd5e1] text-[#475569] hover:bg-[#f0f4f8]"
              disabled={isLoading}
            >
              초기화
            </Button>
            <Button
              size="sm"
              onClick={handleSearch}
              className="min-w-[104px] bg-[#002D56] text-white hover:bg-[#001a33]"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  조회 중
                </>
              ) : (
                "조회"
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
