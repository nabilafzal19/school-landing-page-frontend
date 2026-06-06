"use client";

import { motion } from "framer-motion";
import {
  Bus,
  FlaskConical,
  HeartHandshake,
  Library,
  Monitor,
  Trophy,
} from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Smart Classrooms",
    description:
      "Interactive digital boards and AI-powered learning tools in every classroom.",
  },
  {
    icon: Trophy,
    title: "Sports Facilities",
    description:
      "Olympic-standard courts, swimming pool, and professional coaching staff.",
  },
  {
    icon: FlaskConical,
    title: "Science Labs",
    description:
      "State-of-the-art physics, chemistry, and biology laboratories.",
  },
  {
    icon: Library,
    title: "Library",
    description:
      "10,000+ books, digital resources, and quiet study zones for all ages.",
  },
  {
    icon: Bus,
    title: "Transport",
    description:
      "GPS-tracked buses covering all major routes with trained attendants.",
  },
  {
    icon: HeartHandshake,
    title: "Counselling",
    description:
      "Professional counselors supporting emotional and career guidance.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="features" className="section-padding bg-cream" aria-labelledby="features-heading">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10 text-center sm:mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-gold-dark">
            Why Choose Us
          </span>
          <h2 id="features-heading" className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
            A Complete Learning Ecosystem
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group card-light p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold-dark transition-colors group-hover:bg-gold group-hover:text-navy">
                <feature.icon size={24} />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-navy">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
