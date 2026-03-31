"use client";

import { AppLayout } from "@/components/common/AppLayout";

export default function IntLayout({ children }: { children: React.ReactNode }) {
  return <AppLayout>{children}</AppLayout>;
}
