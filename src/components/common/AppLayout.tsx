"use client";

import { ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAppStore } from "@/store/appStore";
import { Sidebar } from "./Sidebar";
import { areaLabels, AreaType } from "@/data/menu";
import { cn } from "@/lib/utils";

const areaTabs: { key: AreaType; label: string; icon: string; activeClass: string }[] = [
  { key: "ext", label: "외부망", icon: "🌐", activeClass: "bg-[#002D56] text-white" },
  { key: "int", label: "내부망", icon: "🏢", activeClass: "bg-[#1a8a5c] text-white" },
  { key: "ai", label: "AI", icon: "🤖", activeClass: "bg-[#6b3fa0] text-white" },
  { key: "erp", label: "ERP", icon: "📊", activeClass: "bg-[#d4760a] text-white" },
];

export function AppLayout({ children }: { children: ReactNode }) {
  const { area, setArea, sidebarOpen, toggleSidebar } = useAppStore();
  const router = useRouter();
  const pathname = usePathname();

  const handleAreaChange = (newArea: AreaType) => {
    setArea(newArea);
    const firstPaths: Record<AreaType, string> = {
      ext: "/ext/scr-ext-001",
      int: "/int/scr-int-002",
      ai: "/ai/scr-ai-001",
      erp: "/erp/scr-erp-001",
    };
    router.push(firstPaths[newArea]);
  };

  const detectedArea = pathname.startsWith("/ext") ? "ext"
    : pathname.startsWith("/int") ? "int"
    : pathname.startsWith("/ai") ? "ai"
    : pathname.startsWith("/erp") ? "erp"
    : area;

  if (detectedArea !== area) {
    setArea(detectedArea);
  }

  return (
    <div className="flex h-screen flex-col">
      {/* Header - White with navy accent */}
      <header className="flex h-14 items-center border-b border-[#e2e8f0] bg-white px-4 shadow-sm">
        <button
          onClick={toggleSidebar}
          className="mr-3 flex h-8 w-8 items-center justify-center rounded-md text-[#002D56] hover:bg-[#f0f4f8] transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>

        {/* Logo */}
        <div className="mr-6 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#002D56] text-white text-xs font-bold">
            SP
          </div>
          <span className="text-base font-bold text-[#002D56] tracking-tight">SKY-POS</span>
        </div>

        {/* Area Tabs */}
        <div className="flex gap-1 rounded-lg bg-[#f0f4f8] p-1">
          {areaTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleAreaChange(tab.key)}
              className={cn(
                "flex items-center gap-1.5 rounded-md px-3.5 py-1.5 text-sm font-medium transition-all duration-200",
                detectedArea === tab.key
                  ? tab.activeClass + " shadow-sm"
                  : "text-[#64748b] hover:text-[#002D56] hover:bg-white"
              )}
            >
              <span className="text-xs">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-3">
          <span className="text-xs font-medium text-[#94a3b8]">
            {areaLabels[detectedArea]} 포털
          </span>
          <div className="h-8 w-8 rounded-full bg-[#002D56] flex items-center justify-center text-white text-xs font-medium">
            관
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Dark navy */}
        {sidebarOpen && (
          <aside className="w-60 flex-shrink-0 overflow-hidden bg-[#001a33]">
            <Sidebar area={detectedArea} />
          </aside>
        )}

        {/* Main content */}
        <main className="flex-1 overflow-auto bg-[#edf1f7] p-5">
          <div className="rounded-xl border border-[#e2e8f0] bg-white p-5 shadow-sm min-h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
