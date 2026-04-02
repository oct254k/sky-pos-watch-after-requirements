"use client";

import { createContext, ReactNode, useCallback, useContext, useMemo, useRef, useState } from "react";
import { AlertTriangle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ConfirmOptions {
  title?: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  tone?: "danger" | "warning";
}

interface ConfirmState extends Required<ConfirmOptions> {
  open: boolean;
}

interface ConfirmContextValue {
  confirm: (options: ConfirmOptions) => Promise<boolean>;
}

const ConfirmContext = createContext<ConfirmContextValue | null>(null);

const initialState: ConfirmState = {
  open: false,
  title: "",
  message: "",
  confirmLabel: "확인",
  cancelLabel: "취소",
  tone: "danger",
};

export function ConfirmProvider({ children }: { children: ReactNode }) {
  const resolverRef = useRef<((value: boolean) => void) | null>(null);
  const [state, setState] = useState<ConfirmState>(initialState);

  const close = useCallback((result: boolean) => {
    resolverRef.current?.(result);
    resolverRef.current = null;
    setState(initialState);
  }, []);

  const confirm = useCallback((options: ConfirmOptions) => {
    return new Promise<boolean>((resolve) => {
      resolverRef.current = resolve;
      setState({
        open: true,
        title: options.title ?? "삭제 확인",
        message: options.message,
        confirmLabel: options.confirmLabel ?? "삭제",
        cancelLabel: options.cancelLabel ?? "취소",
        tone: options.tone ?? "danger",
      });
    });
  }, []);

  const value = useMemo(() => ({ confirm }), [confirm]);

  const toneClassName =
    state.tone === "danger"
      ? {
          iconWrap: "border-[#fecaca] bg-[#fff1f2]",
          icon: "text-[#dc2626]",
          confirmButton: "bg-[#dc2626] text-white hover:bg-[#b91c1c]",
          eyebrow: "이 작업은 되돌릴 수 없습니다",
        }
      : {
          iconWrap: "border-[#fde68a] bg-[#fffbeb]",
          icon: "text-[#d97706]",
          confirmButton: "bg-[#d97706] text-white hover:bg-[#b45309]",
          eyebrow: "작업 전 내용을 다시 확인해 주세요",
        };

  return (
    <ConfirmContext.Provider value={value}>
      {children}

      <Dialog open={state.open} onOpenChange={(open) => !open && close(false)}>
        <DialogContent className="max-w-[420px] rounded-[18px] border-[#cdd8e4] bg-[#f5f8fc] p-0 shadow-[0_26px_70px_rgba(15,23,42,0.18)]">
          <DialogHeader className="border-b border-[#dde7f0] px-5 py-4">
            <DialogTitle className="text-[16px] font-semibold tracking-[-0.02em] text-[#0f172a]">
              {state.title}
            </DialogTitle>
          </DialogHeader>

          <div className="px-5 py-5">
            <div className="space-y-4">
              <div className="rounded-[14px] border border-[#e3eaf2] bg-white px-4 py-4">
                <div className="flex items-start gap-3">
                  <div className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border ${toneClassName.iconWrap}`}>
                    <AlertTriangle className={`h-[18px] w-[18px] ${toneClassName.icon}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7b8da1]">
                      {toneClassName.eyebrow}
                    </div>
                    <div className="mt-2 space-y-1">
                      {state.message.split("\n").map((line, index) => (
                        <p key={`${line}-${index}`} className="text-[14px] font-medium leading-6 text-[#334155]">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2 border-t border-[#e7eef5] pt-3">
                <Button variant="ghost" className="text-[#64748b] hover:bg-[#eef3f8] hover:text-[#0f172a]" onClick={() => close(false)}>
                  {state.cancelLabel}
                </Button>
                <Button className={`min-w-[92px] ${toneClassName.confirmButton}`} onClick={() => close(true)}>
                  {state.confirmLabel}
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </ConfirmContext.Provider>
  );
}

export function useConfirm() {
  const context = useContext(ConfirmContext);

  if (!context) {
    throw new Error("useConfirm must be used within a ConfirmProvider");
  }

  return context.confirm;
}
