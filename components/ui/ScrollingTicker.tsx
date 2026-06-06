"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useAdmin, getCategoryColor } from "@/context/AdminContext";
import { formatDate, truncateText } from "@/lib/utils";
import { Notice } from "@/lib/types";

function NoticeCard({ notice }: { notice: Notice }) {
  return (
    <div className="mb-4 rounded-lg border border-stone-200/80 bg-pearl p-4 shadow-sm">
      <div className="mb-2 flex items-center justify-between gap-2">
        <span
          className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${getCategoryColor(notice.category)}`}
        >
          {notice.category}
        </span>
        <span className="font-mono text-[10px] text-slate-400">
          {formatDate(notice.date)}
        </span>
      </div>
      <h4 className="mb-1 font-display text-sm font-semibold text-navy">
        {notice.title}
      </h4>
      <p className="text-xs leading-relaxed text-slate-500">
        {truncateText(notice.body, 100)}
      </p>
    </div>
  );
}

const RESUME_AUTO_SCROLL_MS = 4000;

export default function ScrollingTicker() {
  const { notices } = useAdmin();
  const activeNotices = notices.filter((n) => n.isActive);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isAutoScrolling = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [autoScrollPaused, setAutoScrollPaused] = useState(false);

  const pauseAutoScroll = useCallback(() => {
    setAutoScrollPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      setAutoScrollPaused(false);
    }, RESUME_AUTO_SCROLL_MS);
  }, []);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || activeNotices.length === 0 || autoScrollPaused) return;

    const tick = () => {
      const container = scrollRef.current;
      if (!container || autoScrollPaused) return;

      const maxScroll = container.scrollHeight - container.clientHeight;
      if (maxScroll <= 0) return;

      isAutoScrolling.current = true;
      container.scrollTop += 1;

      if (container.scrollTop >= maxScroll) {
        container.scrollTop = 0;
      }

      requestAnimationFrame(() => {
        isAutoScrolling.current = false;
      });
    };

    const interval = setInterval(tick, 40);
    return () => clearInterval(interval);
  }, [activeNotices.length, autoScrollPaused]);

  const handleScroll = () => {
    if (isAutoScrolling.current) return;
    pauseAutoScroll();
  };

  if (activeNotices.length === 0) {
    return (
      <div className="flex h-full items-center justify-center text-slate-400">
        No active notices
      </div>
    );
  }

  return (
    <div className="relative flex h-full flex-col bg-paper">
      <div className="z-10 flex shrink-0 items-center gap-2 border-b border-stone-200/80 bg-pearl px-4 py-3">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
        </span>
        <span className="font-mono text-xs font-bold tracking-widest text-navy">
          NOTICE BOARD
        </span>
        <span className="ml-auto font-mono text-[10px] text-red-500">LIVE</span>
      </div>

      <p className="shrink-0 border-b border-stone-200/60 bg-paper/90 px-4 py-1.5 text-center font-mono text-[10px] text-slate-400">
        Scroll to read all notices
      </p>

      <div
        ref={scrollRef}
        className="notice-board-scroll min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-4 py-2 overscroll-contain"
        onScroll={handleScroll}
        onWheel={pauseAutoScroll}
        onTouchStart={pauseAutoScroll}
        onMouseDown={pauseAutoScroll}
        aria-label="School notices — scroll to read all announcements"
        tabIndex={0}
        onKeyDown={pauseAutoScroll}
      >
        {activeNotices.map((notice) => (
          <NoticeCard key={notice.id} notice={notice} />
        ))}
      </div>
    </div>
  );
}
