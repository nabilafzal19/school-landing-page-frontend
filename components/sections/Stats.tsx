"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { ESTABLISHED_YEAR } from "@/lib/constants";

const currentYear = new Date().getFullYear();
const yearsOfExcellence = currentYear - ESTABLISHED_YEAR;

const stats = [
  { label: "Total Students", value: 2500, suffix: "+" },
  { label: "Years of Excellence", value: yearsOfExcellence, suffix: "+" },
  { label: "Faculty Members", value: 200, suffix: "+" },
  { label: "Scholarship Winners", value: 150, suffix: "+" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Stats() {
  return (
    <section
      id="stats"
      aria-labelledby="stats-heading"
      className="bg-gradient-to-r from-gold-dark via-gold to-gold-light py-10 sm:py-16"
    >
      <h2 id="stats-heading" className="sr-only">
        School statistics and achievements
      </h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="section-container grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-4"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            className="text-center px-1"
          >
            <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            <p className="mt-1 text-xs font-medium text-navy/70 sm:mt-2 sm:text-sm md:text-base">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
