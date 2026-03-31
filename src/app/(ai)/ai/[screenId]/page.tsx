"use client";

import { useParams } from "next/navigation";
import { findScreen } from "@/data/menu";

export default function AiScreenPage() {
  const { screenId } = useParams<{ screenId: string }>();
  const info = findScreen(screenId?.replace(/scr-/i, "SCR-").toUpperCase() || "");

  return (
    <div className="flex flex-col items-center justify-center rounded-lg border bg-white p-12">
      <h2 className="text-lg font-bold">{info?.label || screenId}</h2>
      <p className="mt-2 text-sm text-muted-foreground">[{screenId?.toUpperCase()}] 구현 예정</p>
      <p className="mt-1 text-xs text-muted-foreground">AI 서비스</p>
    </div>
  );
}
