"use client";

import { createContext, ReactNode, useContext, useMemo, useRef, useState } from "react";

interface SearchFeedbackContextValue {
  loading: boolean;
  loadingMessage: string;
  startLoading: (message?: string, durationMs?: number) => void;
  stopLoading: () => void;
}

const SearchFeedbackContext = createContext<SearchFeedbackContextValue | null>(null);

export function SearchFeedbackProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("데이터를 불러오는 중입니다");
  const timerRef = useRef<ReturnType<typeof window.setTimeout> | null>(null);

  const stopLoading = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setLoading(false);
  };

  const startLoading = (message = "데이터를 불러오는 중입니다", durationMs = 800) => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }
    setLoadingMessage(message);
    setLoading(true);
    timerRef.current = window.setTimeout(() => {
      setLoading(false);
      timerRef.current = null;
    }, durationMs);
  };

  const value = useMemo(
    () => ({ loading, loadingMessage, startLoading, stopLoading }),
    [loading, loadingMessage]
  );

  return <SearchFeedbackContext.Provider value={value}>{children}</SearchFeedbackContext.Provider>;
}

export function useSearchFeedback() {
  return useContext(SearchFeedbackContext);
}
