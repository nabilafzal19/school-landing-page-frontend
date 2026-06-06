"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ESTABLISHED_YEAR } from "@/lib/constants";

const headingWords = "Where Excellence Meets Opportunity".split(" ");

const stats = [
  { label: "Students", value: "2,500+" },
  { label: "Teachers", value: "200+" },
  { label: "Board Results", value: "98%" },
];

const trustBadges = [
  "🏆 CBSE Affiliated",
  "⭐ 4.9/5 Parent Rating",
  "🎓 98% Board Results",
  "👩‍🏫 200+ Expert Faculty",
];

export default function Hero() {
  const scrollToAdmissions = () => {
    document.querySelector("#admissions")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-gradient-to-b from-cream via-paper to-sand pt-20 sm:min-h-screen"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,22,40,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(10,22,40,0.04)_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:60px_60px]" />
        <div className="absolute -left-32 top-1/4 h-72 w-72 animate-blob rounded-full bg-sky/10 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute -right-32 bottom-1/4 h-64 w-64 animate-blob rounded-full bg-gold/15 blur-3xl [animation-delay:5s] sm:h-80 sm:w-80" />
      </div>

      <div className="section-container relative grid grid-cols-1 items-center gap-10 py-12 sm:gap-12 sm:py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <h1 className="mb-5 font-display text-3xl font-bold leading-tight text-navy sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            {headingWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="mr-[0.25em] inline-block"
              >
                {word === "Opportunity" ? (
                  <span className="text-gradient-gold">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-6 max-w-lg text-base text-slate-600 sm:mb-8 sm:text-lg"
          >
            Empowering students with world-class education since{" "}
            {ESTABLISHED_YEAR}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <button
              onClick={scrollToAdmissions}
              className="touch-target rounded-full bg-gold px-8 py-3.5 font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-lg"
            >
              Explore Admissions
            </button>
            <button
              onClick={() =>
                document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" })
              }
              className="touch-target rounded-full border-2 border-navy/20 px-8 py-3.5 font-semibold text-navy transition-all hover:border-gold hover:text-gold-dark"
            >
              Take a Virtual Tour
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mb-8 flex flex-wrap gap-2 sm:mb-0 sm:gap-3"
          >
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-stone-200/80 bg-pearl px-3 py-1.5 text-xs text-slate-600 shadow-sm"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <div className="grid grid-cols-3 gap-3 lg:hidden">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="card-light p-3 text-center sm:p-4"
              >
                <p className="font-display text-xl font-bold text-gold sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative hidden h-[320px] lg:block lg:h-[360px]"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut",
              }}
              className="absolute card-light p-6 shadow-md"
              style={{
                top: `${i * 80}px`,
                left: `${i * 40}px`,
                zIndex: stats.length - i,
              }}
            >
              <p className="font-display text-3xl font-bold text-gold">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-slate-400 sm:block"
        aria-hidden="true"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
