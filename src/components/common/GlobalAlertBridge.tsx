"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AlertTriangle, CheckCircle2, Download, OctagonAlert } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type AlertTone = "warning" | "success" | "info" | "danger";

interface AlertState {
  open: boolean;
  title: string;
  message: string;
  tone: AlertTone;
}

function inferAlertState(message: string): Omit<AlertState, "open"> {
  const text = message.trim();

  if (text.includes("다운로드")) {
    return { title: "다운로드 안내", message: text, tone: "info" };
  }

  if (text.includes("삭제")) {
    return { title: "삭제 안내", message: text, tone: "danger" };
  }

  if (text.includes("필수") || text.includes("입력") || text.includes("없습니다")) {
    return { title: "입력 확인", message: text, tone: "warning" };
  }

  if (text.includes("오류") || text.includes("실패")) {
    return { title: "처리 오류", message: text, tone: "danger" };
  }

  if (
    text.includes("완료") ||
    text.includes("성공") ||
    text.includes("등록") ||
    text.includes("수정") ||
    text.includes("저장") ||
    text.includes("확정") ||
    text.includes("승인") ||
    text.includes("취소") ||
    text.includes("적용") ||
    text.includes("재시작")
  ) {
    return { title: "처리 완료", message: text, tone: "success" };
  }

  return { title: "안내", message: text, tone: "info" };
}

export function GlobalAlertBridge() {
  const nativeAlertRef = useRef<typeof window.alert | null>(null);
  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    title: "",
    message: "",
    tone: "info",
  });

  useEffect(() => {
    nativeAlertRef.current = window.alert.bind(window);

    window.alert = (value?: unknown) => {
      const message = typeof value === "string" ? value : String(value ?? "");
      if (message.includes("다운로드")) {
        toast.info("엑셀 다운로드를 시작합니다.");
        return;
      }
      const next = inferAlertState(message);
      setAlertState({ open: true, ...next });
    };

    return () => {
      if (nativeAlertRef.current) {
        window.alert = nativeAlertRef.current;
      }
    };
  }, []);

  const toneMeta = useMemo(() => {
    switch (alertState.tone) {
      case "warning":
        return {
          icon: AlertTriangle,
          iconClassName: "text-[#dc2626]",
          iconWrapClassName: "border-[#fecaca] bg-[#fef2f2]",
          eyebrow: "입력값 또는 처리 조건을 확인해 주세요",
        };
      case "success":
        return {
          icon: CheckCircle2,
          iconClassName: "text-[#15803d]",
          iconWrapClassName: "border-[#bbf7d0] bg-[#f0fdf4]",
          eyebrow: "요청이 정상적으로 처리되었습니다",
        };
      case "danger":
        return {
          icon: OctagonAlert,
          iconClassName: "text-[#b91c1c]",
          iconWrapClassName: "border-[#fecaca] bg-[#fff1f2]",
          eyebrow: "중요 작업 전 내용을 다시 확인해 주세요",
        };
      default:
        return {
          icon: Download,
          iconClassName: "text-[#2563eb]",
          iconWrapClassName: "border-[#bfdbfe] bg-[#eff6ff]",
          eyebrow: "작업 안내 메시지입니다",
        };
    }
  }, [alertState.tone]);

  const Icon = toneMeta.icon;

  return (
    <Dialog open={alertState.open} onOpenChange={(open) => !open && setAlertState((prev) => ({ ...prev, open: false }))}>
      <DialogContent className="max-w-[420px] rounded-[18px] border-[#cdd8e4] bg-[#f5f8fc] p-0 shadow-[0_26px_70px_rgba(15,23,42,0.18)]">
        <DialogHeader className="border-b border-[#dde7f0] px-5 py-4">
          <DialogTitle className="text-[16px] font-semibold tracking-[-0.02em] text-[#0f172a]">
            {alertState.title}
          </DialogTitle>
        </DialogHeader>

        <div className="px-5 py-5">
          <div className="space-y-4">
            <div className="rounded-[14px] border border-[#e3eaf2] bg-white px-4 py-4">
              <div className="flex items-start gap-3">
                <div className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border ${toneMeta.iconWrapClassName}`}>
                  <Icon className={`h-[18px] w-[18px] ${toneMeta.iconClassName}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7b8da1]">
                    {toneMeta.eyebrow}
                  </div>
                  <div className="mt-2 space-y-1">
                    {alertState.message.split("\n").map((line, index) => (
                      <p key={`${line}-${index}`} className="text-[14px] font-medium leading-6 text-[#334155]">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end border-t border-[#e7eef5] pt-3">
              <Button
                className="min-w-[92px] bg-[#0f3560] text-white hover:bg-[#0b2a4a]"
                onClick={() => setAlertState((prev) => ({ ...prev, open: false }))}
              >
                확인
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
