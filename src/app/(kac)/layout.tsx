"use client";

import { AppLayout } from "@/components/common/AppLayout";

export default function KacLayout({ children }: { children: React.ReactNode }) {
  return <AppLayout>{children}</AppLayout>;
}
