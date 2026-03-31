import { create } from "zustand";
import { AreaType } from "@/data/menu";

interface AppState {
  area: AreaType;
  setArea: (area: AreaType) => void;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  area: "ext",
  setArea: (area) => set({ area }),
  sidebarOpen: true,
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
}));
