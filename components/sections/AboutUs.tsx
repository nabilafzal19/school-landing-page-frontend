"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Eye, Heart, Lightbulb } from "lucide-react";
import { aboutImages } from "@/lib/images";

const pillars = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Fostering creative thinking and problem-solving skills.",
  },
  {
    icon: Heart,
    title: "Compassion",
    description: "Building empathetic leaders who care for their community.",
  },
  {
    icon: Eye,
    title: "Integrity",
    description: "Instilling strong moral values and ethical conduct.",
  },
];

export default function AboutUs() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section id="about" ref={ref} className="section-padding bg-sand overflow-hidden" aria-labelledby="about-heading">
      <div className="section-container grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-gold-dark">
            About Us
          </span>
          <h2 id="about-heading" className="mt-3 mb-6 font-display text-3xl font-bold text-navy md:text-4xl">
            Shaping Tomorrow&apos;s Leaders Today
          </h2>
          <p className="mb-4 text-slate-600 leading-relaxed">
            At Greenwood International School, we believe every child possesses
            unique potential waiting to be unlocked. Our mission is to provide a
            nurturing environment where academic excellence meets character
            development.
          </p>
          <p className="mb-8 text-slate-600 leading-relaxed">
            Our vision is to be a globally recognized institution that prepares
            students not just for examinations, but for life — equipping them
            with the knowledge, skills, and values to thrive in an ever-changing
            world.
          </p>

          <div className="space-y-4">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 card-light p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold-dark">
                  <pillar.icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-navy">{pillar.title}</h3>
                  <p className="text-sm text-slate-500">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg md:hidden">
            <Image
              src={aboutImages.classroom}
              alt="Teacher guiding students in a classroom"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="relative hidden h-[480px] md:block">
            <motion.div style={{ y: y1 }} className="absolute left-0 top-0 z-10">
              <Image
                src={aboutImages.classroom}
                alt="Teacher guiding students in a classroom"
                width={300}
                height={400}
                className="rounded-2xl object-cover shadow-xl"
              />
            </motion.div>
            <motion.div style={{ y: y2 }} className="absolute left-1/3 top-16 z-20">
              <Image
                src={aboutImages.campus}
                alt="Greenwood International School campus building"
                width={280}
                height={360}
                className="rounded-2xl object-cover shadow-xl ring-2 ring-gold/40"
              />
            </motion.div>
            <motion.div style={{ y: y3 }} className="absolute right-0 bottom-0 z-30">
              <Image
                src={aboutImages.library}
                alt="Students reading in the school library"
                width={260}
                height={340}
                className="rounded-2xl object-cover shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
