"use client";

import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ActionBarProps {
  children?: ReactNode;
}

export function ActionBar({ children }: ActionBarProps) {
  return (
    <div className="mt-4 flex flex-wrap justify-end gap-2">
      {children}
    </div>
  );
}

export function ActionButton({
  label,
  onClick,
  variant = "default",
  loading = false,
  disabled = false,
  className,
}: {
  label: string;
  onClick?: () => void;
  variant?: "default" | "outline" | "destructive";
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}) {
  const isDownloadAction = label.includes("엑셀") || label.includes("다운로드");

  return (
    <Button
      size="sm"
      variant={variant}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        "min-h-10 px-4 text-sm",
        isDownloadAction &&
          variant === "outline" &&
          "border-[#c8d8ea] bg-[#f8fbff] text-[#1d4f91] hover:bg-[#eef5fc] hover:text-[#143b72]",
        className
      )}
    >
      {!loading && isDownloadAction && <Download className="mr-1.5 h-4 w-4" />}
      {loading && <Loader2 className="mr-1.5 h-4 w-4 animate-spin" />}
      {loading ? `${label} 중` : label}
    </Button>
  );
}
