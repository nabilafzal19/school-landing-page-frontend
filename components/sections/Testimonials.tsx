"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [paused]);

  const testimonial = testimonials[current];

  return (
    <section
      id="testimonials"
      className="section-padding bg-paper"
      aria-labelledby="testimonials-heading"
    >
      <div className="section-container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 text-center sm:mb-12"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-gold-dark">
            Testimonials
          </span>
          <h2 id="testimonials-heading" className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
            What Parents Say
          </h2>
        </motion.div>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative min-h-[260px] card-light p-6 sm:min-h-[280px] sm:p-10 md:p-12"
        >
          <Quote
            size={40}
            className="absolute top-5 left-5 text-gold/30 sm:top-6 sm:left-6"
            aria-hidden="true"
          />

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="mb-6 text-base leading-relaxed text-slate-700 sm:mb-8 sm:text-lg md:text-xl">
                &ldquo;{testimonial.message}&rdquo;
              </p>
              <footer className="flex items-center justify-center gap-4">
                <Image
                  src={testimonial.photo}
                  alt={testimonial.parentName}
                  width={48}
                  height={48}
                  className="rounded-full ring-2 ring-gold/40"
                />
                <div className="text-left">
                  <cite className="not-italic font-semibold text-navy">
                    {testimonial.parentName}
                  </cite>
                  <p className="text-sm text-slate-500">
                    {testimonial.studentClass}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`touch-target h-2 rounded-full transition-all ${
                i === current ? "w-8 bg-gold" : "w-2 bg-slate-300"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === current ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
