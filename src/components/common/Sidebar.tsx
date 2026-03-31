"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuItem, allMenus, AreaType } from "@/data/menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

function MenuNode({ item, depth = 0 }: { item: MenuItem; depth?: number }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(depth === 0);
  const isLeaf = !item.children;
  const isActive = isLeaf && item.path && pathname === item.path;

  if (isLeaf && item.path) {
    return (
      <Link
        href={item.path}
        className={cn(
          "block rounded-md px-3 py-1.5 text-[13px] transition-colors",
          isActive
            ? "bg-[#0ea5e9]/20 text-[#7dd3fc] font-medium border-l-2 border-[#0ea5e9] ml-0"
            : "text-[#94a3b8] hover:text-[#e2e8f0] hover:bg-[#002D56]/60",
          depth > 0 && !isActive && "ml-4",
          depth > 0 && isActive && "ml-3"
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className={cn(depth > 0 && "ml-2")}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-1.5 rounded-md px-3 py-2 text-[13px] font-medium text-[#cbd5e1] hover:bg-[#002D56]/60 hover:text-white transition-colors"
      >
        {item.icon && <span className="text-sm opacity-70">{item.icon}</span>}
        <span className="flex-1 text-left">{item.label}</span>
        <svg
          width="12" height="12" viewBox="0 0 12 12"
          className={cn("text-[#64748b] transition-transform duration-200", open && "rotate-90")}
          fill="currentColor"
        >
          <path d="M4.5 2L8.5 6L4.5 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </button>
      {open && item.children && (
        <div className="mt-0.5 space-y-0.5">
          {item.children.map((child) => (
            <MenuNode key={child.id} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export function Sidebar({ area }: { area: AreaType }) {
  const menu = allMenus[area] || [];

  return (
    <ScrollArea className="h-full">
      <div className="p-3 border-b border-[#1e3a5f]">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#64748b]">
          Navigation
        </p>
      </div>
      <nav className="space-y-0.5 p-2">
        {menu.map((item) => (
          <MenuNode key={item.id} item={item} />
        ))}
      </nav>
    </ScrollArea>
  );
}
