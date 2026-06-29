"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAppStore } from "@/store/appStore";
import { Sidebar } from "./Sidebar";
import { areaLabels, AreaType } from "@/data/menu";
import { cn } from "@/lib/utils";
import { GlobalAlertBridge } from "./GlobalAlertBridge";
import { ConfirmProvider } from "./ConfirmProvider";
import { SearchFeedbackProvider } from "./SearchFeedbackProvider";
import { Toaster } from "sonner";

const areaTabs: { key: AreaType; label: string; icon: string }[] = [
  { key: "ext", label: "외부 사용자", icon: "🌐" },
  { key: "int", label: "내부 운영", icon: "🏢" },
  { key: "ai", label: "AI 운영", icon: "🤖" },
  { key: "erp", label: "ERP 업무", icon: "📊" },
  { key: "kac", label: "ERP ASIS 업무", icon: "🏛️" },
];

export function AppLayout({ children }: { children: ReactNode }) {
  const { area, setArea, sidebarOpen, setSidebarOpen, toggleSidebar } = useAppStore();
  const router = useRouter();
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [areaMenuOpen, setAreaMenuOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const syncViewport = () => {
      const mobile = mediaQuery.matches;
      setIsMobile(mobile);
      setSidebarOpen(!mobile);
      if (!mobile) setAreaMenuOpen(false);
    };
    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);
    return () => mediaQuery.removeEventListener("change", syncViewport);
  }, [setSidebarOpen]);

  const handleAreaChange = (newArea: AreaType) => {
    setArea(newArea);
    if (isMobile) {
      setSidebarOpen(false);
      setAreaMenuOpen(false);
    }
    const firstPaths: Record<AreaType, string> = {
      ext: "/ext/scr-ext-002",
      int: "/int/scr-int-001",
      ai: "/ai/scr-ai-001",
      erp: "/erp/scr-erp-001",
      kac: "/kac/scr-kac-001",
    };
    router.push(firstPaths[newArea]);
  };

  const detectedArea = pathname.startsWith("/ext") ? "ext"
    : pathname.startsWith("/int") ? "int"
    : pathname.startsWith("/ai") ? "ai"
    : pathname.startsWith("/erp") ? "erp"
    : pathname.startsWith("/kac") ? "kac"
    : area;

  if (detectedArea !== area) {
    setArea(detectedArea);
  }

  return (
    <ConfirmProvider>
      <SearchFeedbackProvider>
      <div className="flex min-h-screen flex-col bg-[#f3f4f6]">

        {/* Top Header */}
        <header className="border-b border-[#d3d6dc] bg-white" style={{ height: 54 }}>
          <div className="flex h-[54px] items-center gap-0 px-0">
            {/* Brand mark */}
            <div className="flex h-[54px] w-[236px] flex-shrink-0 items-center gap-2.5 border-r border-[#d3d6dc] bg-white px-5">
              <div className="flex h-[26px] w-[26px] items-center justify-center rounded-[5px] border-[1.5px] border-[#191c21] text-[11px] font-extrabold text-[#191c21]">
                S
              </div>
              <span className="text-[14px] font-bold tracking-tight text-[#191c21]">SKY-POS</span>
              <span className="ml-2 border-l border-[#d3d6dc] pl-2.5 text-[11px] font-semibold text-[#838995]">ERP</span>
            </div>

            {/* Hamburger */}
            <button
              onClick={toggleSidebar}
              className="flex h-[54px] w-10 items-center justify-center border-r border-[#d3d6dc] text-[#474c55] hover:bg-[#f7f8fa]"
              aria-label="사이드바 열기"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </button>

            {/* Area tabs (desktop) */}
            {!isMobile && (
              <div className="flex h-[54px] items-end gap-0 px-3">
                {areaTabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => handleAreaChange(tab.key)}
                    className={cn(
                      "flex h-full items-center gap-1.5 border-b-2 px-4 text-[12.5px] font-semibold transition-colors whitespace-nowrap",
                      detectedArea === tab.key
                        ? "border-[#191c21] text-[#191c21]"
                        : "border-transparent text-[#838995] hover:text-[#474c55] hover:border-[#d3d6dc]"
                    )}
                  >
                    <span className="text-xs">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
            )}

            {/* Mobile area picker */}
            {isMobile && (
              <div className="min-w-0 flex-1 px-3">
                <div className="relative inline-block w-[200px] max-w-full">
                  <button
                    type="button"
                    onClick={() => setAreaMenuOpen((o) => !o)}
                    className="flex h-8 w-full items-center gap-2 rounded border border-[#d3d6dc] bg-white px-3 text-left text-[13px] text-[#191c21]"
                  >
                    <span>{areaTabs.find((t) => t.key === detectedArea)?.icon}</span>
                    <span className="flex-1 truncate">{areaTabs.find((t) => t.key === detectedArea)?.label ?? areaLabels[detectedArea]}</span>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                  </button>
                  {areaMenuOpen && (
                    <div className="absolute left-0 top-full z-40 w-full border border-[#d3d6dc] bg-white shadow-md">
                      {areaTabs.map((tab) => (
                        <button
                          key={tab.key}
                          type="button"
                          onClick={() => handleAreaChange(tab.key)}
                          className={cn(
                            "flex w-full items-center gap-2 px-3 py-2 text-[13px] hover:bg-[#f7f8fa]",
                            detectedArea === tab.key ? "text-[#191c21] font-semibold bg-[#edeff2]" : "text-[#474c55]"
                          )}
                        >
                          <span>{tab.icon}</span>
                          <span>{tab.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Right: user info */}
            <div className="ml-auto flex items-center gap-3.5 pr-5">
              <span className="text-[12px] text-[#474c55]">
                {areaTabs.find((t) => t.key === detectedArea)?.label ?? areaLabels[detectedArea]}
              </span>
              <div className="flex items-center gap-1.5">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#edeff2] border border-[#d3d6dc] text-[10px] font-bold text-[#474c55]">
                  관
                </div>
                <span className="hidden text-[12px] text-[#474c55] sm:block">관리자</span>
                <span className="text-[10px] font-bold text-white bg-[#474c55] rounded-[3px] px-1.5 py-px">ADMIN</span>
              </div>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="relative flex flex-1 overflow-hidden">
          {isMobile && sidebarOpen && (
            <button
              type="button"
              aria-label="사이드바 닫기"
              className="absolute inset-0 z-20 bg-black/30"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {sidebarOpen && (
            <aside
              className={cn(
                "overflow-hidden border-r border-[#363c44]",
                isMobile
                  ? "absolute inset-y-0 left-0 z-30 w-[240px] max-w-[85vw] shadow-lg"
                  : "w-[236px] flex-shrink-0"
              )}
            >
              <Sidebar area={detectedArea} />
            </aside>
          )}

          <main className="flex-1 overflow-auto bg-[#f3f4f6] p-[22px_30px_60px]">
            <div className="min-h-full border border-[#e4e6ea] bg-white p-4" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
              {children}
            </div>
          </main>
        </div>

        <GlobalAlertBridge />
        <Toaster
          position="top-right"
          expand={false}
          richColors
          toastOptions={{
            className: "!border-[#e4e6ea] !bg-white !text-[#191c21] !shadow-md",
          }}
        />
      </div>
      </SearchFeedbackProvider>
    </ConfirmProvider>
  );
}
