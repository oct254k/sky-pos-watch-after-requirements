"use client";

import { useState, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuItem, allMenus, AreaType } from "@/data/menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

function MenuNode({
  item,
  depth = 0,
  onUnimplemented,
}: {
  item: MenuItem;
  depth?: number;
  onUnimplemented: () => void;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(depth === 0);
  const isLeaf = !item.children;
  const isActive = isLeaf && item.path && pathname === item.path;

  if (isLeaf && item.path) {
    return (
      <Link
        href={item.path}
        className={cn(
          "flex items-center px-[18px] py-[9px] text-[12.5px] transition-colors border-l-[3px]",
          isActive
            ? "border-white bg-[#2b3037] text-white font-semibold"
            : "border-transparent text-[#cdd2da] hover:bg-[#2b3037] hover:text-white",
          depth > 0 && "pl-[36px]"
        )}
      >
        {item.label}
      </Link>
    );
  }

  if (isLeaf && !item.path) {
    return (
      <button
        onClick={onUnimplemented}
        className={cn(
          "flex w-full items-center px-[18px] py-[9px] text-left text-[12.5px] transition-colors border-l-[3px] border-transparent",
          "text-[#8b9099] hover:bg-[#2b3037] cursor-default",
          depth > 0 && "pl-[36px]"
        )}
      >
        {item.label}
      </button>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex w-full items-center gap-2.5 px-[18px] py-2 text-[12.5px] font-bold text-[#7d848f] tracking-[0.08em] uppercase transition-colors hover:bg-[#2b3037] hover:text-[#cdd2da]",
          "mt-1.5",
          depth > 0 && "pl-[18px] font-semibold text-[#cdd2da] normal-case tracking-normal"
        )}
      >
        {item.icon && <span className="text-sm">{item.icon}</span>}
        <span className="flex-1 text-left">{item.label}</span>
        <svg
          width="10" height="10" viewBox="0 0 12 12"
          className={cn("text-[#7d848f] transition-transform duration-200", open && "rotate-90")}
          fill="currentColor"
        >
          <path d="M4.5 2L8.5 6L4.5 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </button>
      {open && item.children && (
        <div className="border-l border-[#363c44] ml-3">
          {item.children.map((child) => (
            <MenuNode key={child.id} item={child} depth={depth + 1} onUnimplemented={onUnimplemented} />
          ))}
        </div>
      )}
    </div>
  );
}

export function Sidebar({ area }: { area: AreaType }) {
  const menu = allMenus[area] || [];
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showTooltip = useCallback(() => {
    setTooltipVisible(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setTooltipVisible(false), 3000);
  }, []);

  return (
    <div className="h-full bg-[#21252b]">
      <ScrollArea className="h-full">
        <nav className="py-3.5">
          {menu.map((item) => (
            <MenuNode key={item.id} item={item} onUnimplemented={showTooltip} />
          ))}
        </nav>
      </ScrollArea>

      {tooltipVisible && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] pointer-events-none">
          <div className="bg-[#191c21] text-white text-[12px] px-4 py-2 shadow-lg whitespace-nowrap">
            구현 예정인 화면입니다.
          </div>
        </div>
      )}
    </div>
  );
}
