"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SCHOOL_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

function SchoolLogo() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="h-10 w-10 shrink-0"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="8" fill="#F4A825" />
      <path d="M20 8L8 16v12h8v-8h8v8h8V16L20 8z" fill="#0A1628" />
      <circle cx="20" cy="14" r="2" fill="#4A9EFF" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || mobileOpen
            ? "bg-cream/95 backdrop-blur-md border-b border-stone-200/80 shadow-sm"
            : "bg-cream/85 backdrop-blur-sm"
        )}
      >
        <nav
          className="section-container flex items-center justify-between py-3 sm:py-4"
          aria-label="Main navigation"
        >
          <button
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-2 sm:gap-3 group touch-target"
            aria-label="Go to home"
          >
            <SchoolLogo />
            <span className="font-display text-base font-semibold text-navy sm:text-lg group-hover:text-gold transition-colors line-clamp-1">
              {SCHOOL_NAME.split(" ").slice(0, 2).join(" ")}
            </span>
          </button>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={cn(
                    "relative px-3 py-2 text-sm text-slate-600 transition-colors hover:text-navy",
                    activeSection === link.href && "text-navy font-medium"
                  )}
                >
                  {link.label}
                  {activeSection === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold rounded-full"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden items-center lg:flex">
            <button
              onClick={() => scrollTo("#admissions")}
              className="touch-target rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-md"
            >
              Apply Now
            </button>
          </div>

          <button
            className="lg:hidden touch-target p-2 text-navy"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-cream lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setMobileOpen(false)}
                className="touch-target p-2 text-navy"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              className="flex flex-col items-center gap-5 px-4 pt-8 pb-12"
            >
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="w-full"
                >
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="touch-target w-full py-3 text-xl font-display text-navy hover:text-gold transition-colors"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="w-full pt-4"
              >
                <button
                  onClick={() => scrollTo("#admissions")}
                  className="touch-target w-full rounded-full bg-gold py-3.5 text-lg font-semibold text-navy"
                >
                  Apply Now
                </button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
