"use client";

export function MockBanner({ message = "Mock 데이터" }: { message?: string }) {
  return (
    <div className="mb-4 flex items-center gap-2 rounded-md border border-[#0ea5e9]/30 bg-[#f0f9ff] px-4 py-2.5 text-sm text-[#0369a1]">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="shrink-0">
        <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 10.5a.75.75 0 110-1.5.75.75 0 010 1.5zM8.75 7.5a.75.75 0 01-1.5 0v-3a.75.75 0 011.5 0v3z"/>
      </svg>
      {message}
    </div>
  );
}
