"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function EnterpriseFormLayout({
  eyebrow,
  title,
  children,
  maxWidth = "max-w-[880px]",
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  maxWidth?: string;
}) {
  return (
    <div className={cn("mx-auto space-y-5", maxWidth)}>
      <div className="rounded-[22px] border border-[#d7e2ee] bg-white px-7 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
        <div className="border-b border-[#e5edf5] pb-4">
          {eyebrow && <div className="text-[13px] font-semibold text-[#1d4f91]">{eyebrow}</div>}
          <h2 className="mt-1 text-[24px] font-semibold tracking-[-0.02em] text-[#0f172a]">{title}</h2>
        </div>
        <div className="mt-5 space-y-5">{children}</div>
      </div>
    </div>
  );
}

export function EnterpriseFormSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[18px] border border-[#e2e8f0] bg-[#f8fafc] p-5">
      <div className="mb-4 text-sm font-semibold text-[#1e293b]">{title}</div>
      {children}
    </div>
  );
}

export function EnterpriseFieldGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("grid grid-cols-1 gap-4 md:grid-cols-2", className)}>{children}</div>;
}
