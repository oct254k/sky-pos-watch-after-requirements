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

const areaTabs: { key: AreaType; label: string; icon: string; activeClass: string }[] = [
  { key: "ext", label: "외부 사용자", icon: "🌐", activeClass: "bg-[#002D56] text-white" },
  { key: "int", label: "내부 운영", icon: "🏢", activeClass: "bg-[#1a8a5c] text-white" },
  { key: "ai", label: "AI 운영", icon: "🤖", activeClass: "bg-[#6b3fa0] text-white" },
  { key: "erp", label: "ERP 업무", icon: "📊", activeClass: "bg-[#d4760a] text-white" },
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
    <ConfirmProvider>
      <SearchFeedbackProvider>
      <div className="flex min-h-screen flex-col bg-[#edf1f7]">
        <header className="border-b border-[#e2e8f0] bg-white shadow-sm">
          <div className="relative">
            <div className="flex min-h-14 items-center gap-2 px-3 sm:px-4">
              <button
                onClick={toggleSidebar}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-[#002D56] transition-colors hover:bg-[#f0f4f8]"
                aria-label="사이드바 열기"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              </button>

              <div className="mr-2 flex shrink-0 items-center gap-2 sm:mr-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#002D56] text-white text-xs font-bold">
                  SP
                </div>
                <span className="text-sm font-bold tracking-tight text-[#002D56] sm:text-base">SKY-POS</span>
              </div>

              {isMobile ? (
                <div className="min-w-0 flex-1">
                  <div className="relative inline-block w-[210px] max-w-full align-top">
                    <button
                      type="button"
                      onClick={() => setAreaMenuOpen((open) => !open)}
                      className="flex h-10 w-full items-center gap-2 rounded-2xl border border-[#d7e2ee] bg-white px-3.5 text-left text-sm font-semibold text-[#0f172a] shadow-[0_6px_16px_rgba(15,23,42,0.08)]"
                      aria-expanded={areaMenuOpen}
                      aria-label="사용자 환경 선택"
                    >
                      <span className="flex min-w-0 flex-1 items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#eef4fb] text-xs">
                          {areaTabs.find((tab) => tab.key === detectedArea)?.icon}
                        </span>
                        <span className="truncate text-[13px]">
                          {areaTabs.find((tab) => tab.key === detectedArea)?.label ?? areaLabels[detectedArea]}
                        </span>
                      </span>
                    </button>

                    {areaMenuOpen && (
                      <div className="absolute left-0 top-[calc(100%-2px)] z-40 w-full rounded-b-2xl rounded-t-md border border-[#d7e2ee] border-t-0 bg-white p-1 shadow-[0_18px_40px_rgba(15,23,42,0.16)]">
                        <div className="grid gap-1">
                          {areaTabs.map((tab) => (
                            <button
                              key={tab.key}
                              type="button"
                              onClick={() => handleAreaChange(tab.key)}
                              className={cn(
                                "flex min-h-8 items-center gap-2 rounded-xl px-2.5 py-1.5 text-sm font-medium transition-colors",
                                detectedArea === tab.key
                                  ? "bg-[#eef4fb] text-[#002D56]"
                                  : "bg-white text-[#475569] hover:bg-[#f8fafc]"
                              )}
                            >
                              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f8fafc] text-sm">
                                {tab.icon}
                              </span>
                              <span className="flex-1 text-left">{tab.label}</span>
                              {detectedArea === tab.key && (
                                <span className="h-2.5 w-2.5 rounded-full bg-[#1f6fb2]" />
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  <div className="min-w-0 flex-1 overflow-x-auto">
                    <div className="flex w-max gap-1 rounded-lg bg-[#f0f4f8] p-1">
                      {areaTabs.map((tab) => (
                        <button
                          key={tab.key}
                          onClick={() => handleAreaChange(tab.key)}
                          className={cn(
                            "flex min-w-fit items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-all duration-200 sm:px-3.5 sm:text-sm",
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
                  </div>

                  <div className="ml-2 hidden shrink-0 items-center gap-3 sm:flex">
                    <span className="text-xs font-medium text-[#94a3b8]">
                      {areaTabs.find((tab) => tab.key === detectedArea)?.label ?? areaLabels[detectedArea]}
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#002D56] text-xs font-medium text-white">
                      관
                    </div>
                  </div>
                </>
              )}
            </div>

            {isMobile && areaMenuOpen && (
              <>
                <button
                  type="button"
                  aria-label="사용자 환경 선택 닫기"
                  className="fixed inset-0 z-30 bg-transparent"
                  onClick={() => setAreaMenuOpen(false)}
                />
              </>
            )}
          </div>
        </header>

        <div className="relative flex flex-1 overflow-hidden">
          {isMobile && sidebarOpen && (
            <button
              type="button"
              aria-label="사이드바 닫기"
              className="absolute inset-0 z-20 bg-[#0f172a]/36"
              onClick={() => setSidebarOpen(false)}
            />
          )}
          {sidebarOpen && (
            <aside
              className={cn(
                "overflow-hidden bg-[#001a33]",
                isMobile
                  ? "absolute inset-y-0 left-0 z-30 w-[280px] max-w-[82vw] border-r border-[#1e3a5f] shadow-[0_18px_40px_rgba(15,23,42,0.28)]"
                  : "w-60 flex-shrink-0"
              )}
            >
              <Sidebar area={detectedArea} />
            </aside>
          )}

          <main className="flex-1 overflow-auto bg-[#edf1f7] p-3 sm:p-4 lg:p-5">
            <div className="min-h-full rounded-xl border border-[#e2e8f0] bg-white p-3 shadow-sm sm:p-4 lg:p-5">
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
            className: "!border-[#cdd8e4] !bg-white !text-[#0f172a] !shadow-[0_18px_40px_rgba(15,23,42,0.12)]",
          }}
        />
      </div>
      </SearchFeedbackProvider>
    </ConfirmProvider>
  );
}
