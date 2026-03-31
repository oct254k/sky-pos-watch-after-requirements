"use client";

import { Badge } from "@/components/ui/badge";
import { statusColorMap } from "@/data/mock/commonCodes";

export function StatusBadge({ status }: { status: string }) {
  const colorClass = statusColorMap[status] || "bg-gray-100 text-gray-800";
  return <Badge className={colorClass} variant="outline">{status}</Badge>;
}
