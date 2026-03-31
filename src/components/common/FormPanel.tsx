"use client";

import { ReactNode } from "react";

interface FormPanelProps {
  title?: string;
  children: ReactNode;
}

export function FormPanel({ title, children }: FormPanelProps) {
  return (
    <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4">
      {title && <h3 className="mb-3 text-sm font-semibold">{title}</h3>}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </div>
  );
}

export function FormField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      {children}
    </div>
  );
}
