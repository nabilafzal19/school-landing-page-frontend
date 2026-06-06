"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { facultyMembers } from "@/data/faculty";

export default function Faculty() {
  return (
    <section
      id="faculty"
      className="section-padding bg-sand"
      aria-labelledby="faculty-heading"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(10,22,40,0.04) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 sm:mb-12"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-gold-dark">
            Our Team
          </span>
          <h2 id="faculty-heading" className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
            Meet Our Expert Faculty
          </h2>
        </motion.div>

        <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory scroll-pl-4 sm:gap-6 sm:px-0">
          {facultyMembers.map((member, i) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative w-[72vw] max-w-[280px] shrink-0 snap-center overflow-hidden rounded-2xl border border-stone-200/80 bg-pearl shadow-sm sm:w-64"
            >
              <div className="relative h-64 overflow-hidden sm:h-72">
                <Image
                  src={member.photo}
                  alt={`${member.name}, ${member.subject} teacher`}
                  fill
                  sizes="280px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-navy/50 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin size={32} className="text-white" />
                  </a>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-semibold text-navy">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-gold-dark">
                  {member.subject}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {member.qualification}
                </p>
                <p className="mt-2 font-mono text-[10px] text-slate-400">
                  {member.yearsOfExperience} years experience
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
