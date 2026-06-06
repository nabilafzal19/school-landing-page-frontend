"use client";

import { motion } from "framer-motion";
import ScrollingTicker from "@/components/ui/ScrollingTicker";

export default function NoticeBoard() {
  return (
    <section id="notices" className="section-padding bg-mist" aria-labelledby="notices-heading">
      <div className="section-container grid grid-cols-1 items-center gap-8 lg:grid-cols-5 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-3"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-gold-dark">
            Stay Updated
          </span>
          <h2 id="notices-heading" className="mt-3 mb-4 font-display text-3xl font-bold text-navy md:text-4xl">
            School Notice Board
          </h2>
          <p className="mb-6 max-w-lg text-slate-600 leading-relaxed">
            Stay informed with the latest announcements, exam schedules, events,
            and important updates from Greenwood International School.
          </p>
          <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-gold to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full lg:col-span-2"
        >
          <div className="h-[360px] overflow-hidden rounded-2xl border border-stone-200/80 shadow-md sm:h-[420px] lg:h-[480px]">
            <ScrollingTicker />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
