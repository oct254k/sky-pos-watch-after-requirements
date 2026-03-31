"use client";

import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface ActionBarProps {
  children?: ReactNode;
}

export function ActionBar({ children }: ActionBarProps) {
  return (
    <div className="mt-4 flex justify-end gap-2">
      {children}
    </div>
  );
}

export function ActionButton({
  label,
  onClick,
  variant = "default",
}: {
  label: string;
  onClick?: () => void;
  variant?: "default" | "outline" | "destructive";
}) {
  return (
    <Button size="sm" variant={variant} onClick={onClick}>
      {label}
    </Button>
  );
}
