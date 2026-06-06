"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { defaultNotices, NOTICES_STORAGE_KEY } from "@/data/notices";
import {
  ADMIN_PASSWORD,
  ADMIN_USERNAME,
} from "@/lib/constants";
import { Notice } from "@/lib/types";

const SESSION_KEY = "school_admin_logged_in";

interface AdminContextValue {
  isLoggedIn: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  notices: Notice[];
  addNotice: (notice: Omit<Notice, "id">) => void;
  updateNotice: (id: string, notice: Partial<Notice>) => void;
  deleteNotice: (id: string) => void;
}

const AdminContext = createContext<AdminContextValue | null>(null);

function loadNotices(): Notice[] {
  if (typeof window === "undefined") return defaultNotices;
  try {
    const stored = localStorage.getItem(NOTICES_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as Notice[];
    }
  } catch {
    // fall through to defaults
  }
  return defaultNotices;
}

function saveNotices(notices: Notice[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(NOTICES_STORAGE_KEY, JSON.stringify(notices));
}

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [notices, setNotices] = useState<Notice[]>(defaultNotices);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setNotices(loadNotices());
    setIsLoggedIn(sessionStorage.getItem(SESSION_KEY) === "true");
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveNotices(notices);
  }, [notices, hydrated]);

  const login = useCallback((username: string, password: string) => {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "true");
      setIsLoggedIn(true);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(SESSION_KEY);
    setIsLoggedIn(false);
  }, []);

  const addNotice = useCallback((notice: Omit<Notice, "id">) => {
    setNotices((prev) => [...prev, { ...notice, id: uuidv4() }]);
  }, []);

  const updateNotice = useCallback((id: string, updates: Partial<Notice>) => {
    setNotices((prev) =>
      prev.map((n) => (n.id === id ? { ...n, ...updates } : n))
    );
  }, []);

  const deleteNotice = useCallback((id: string) => {
    setNotices((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const value = useMemo(
    () => ({
      isLoggedIn,
      login,
      logout,
      notices,
      addNotice,
      updateNotice,
      deleteNotice,
    }),
    [
      isLoggedIn,
      login,
      logout,
      notices,
      addNotice,
      updateNotice,
      deleteNotice,
    ]
  );

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) {
    throw new Error("useAdmin must be used within AdminProvider");
  }
  return ctx;
}

export function getCategoryColor(category: Notice["category"]): string {
  const colors: Record<Notice["category"], string> = {
    Urgent: "bg-red-500/20 text-red-400 border-red-500/30",
    Exam: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    Holiday: "bg-green-500/20 text-green-400 border-green-500/30",
    Event: "bg-sky/20 text-sky border-sky/30",
    General: "bg-gray-500/20 text-gray-300 border-gray-500/30",
  };
  return colors[category];
}
