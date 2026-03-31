"use client";

import { AppLayout } from "@/components/common/AppLayout";

export default function ExtLayout({ children }: { children: React.ReactNode }) {
  return <AppLayout>{children}</AppLayout>;
}
