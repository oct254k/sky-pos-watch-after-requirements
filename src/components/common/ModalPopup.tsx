"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

interface ModalPopupProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  wide?: boolean;
}

export function ModalPopup({ open, onClose, title, children, wide }: ModalPopupProps) {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className={
          wide
            ? "w-[calc(100vw-24px)] max-w-3xl rounded-[18px] border-[#cdd8e4] bg-[#f5f8fc] p-0 shadow-[0_26px_70px_rgba(15,23,42,0.18)] sm:w-full"
            : "w-[calc(100vw-24px)] max-w-[420px] rounded-[18px] border-[#cdd8e4] bg-[#f5f8fc] p-0 shadow-[0_26px_70px_rgba(15,23,42,0.18)] sm:w-full"
        }
      >
        <DialogHeader className="border-b border-[#dde7f0] px-4 py-4 sm:px-5">
          <DialogTitle className="text-[16px] font-semibold tracking-[-0.02em] text-[#0f172a]">{title}</DialogTitle>
        </DialogHeader>
        <div className="max-h-[calc(100vh-120px)] overflow-y-auto px-4 py-4 sm:px-5 sm:py-5">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
