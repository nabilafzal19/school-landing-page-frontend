"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  getWhatsAppUrl,
  SCHOOL_ADDRESS,
  SCHOOL_EMAIL,
  SCHOOL_PHONE,
} from "@/lib/constants";

const infoCards = [
  {
    icon: MapPin,
    title: "Address",
    content: SCHOOL_ADDRESS,
  },
  {
    icon: Phone,
    title: "Phone",
    content: SCHOOL_PHONE,
    href: `tel:${SCHOOL_PHONE.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    title: "Email",
    content: SCHOOL_EMAIL,
    href: `mailto:${SCHOOL_EMAIL}`,
  },
];

const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "YouTube", href: "#" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-sand" aria-labelledby="contact-heading">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 text-center sm:mb-12"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-gold-dark">
            Get in Touch
          </span>
          <h2 id="contact-heading" className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
            Contact Us
          </h2>
        </motion.div>

        <div className="mb-8 grid grid-cols-1 gap-4 sm:mb-10 sm:grid-cols-3 sm:gap-6">
          {infoCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-light p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-gold-dark">
                <card.icon size={20} />
              </div>
              <h3 className="mb-2 font-semibold text-navy">{card.title}</h3>
              {card.href ? (
                <a
                  href={card.href}
                  className="text-sm text-slate-600 hover:text-gold-dark transition-colors break-words"
                >
                  {card.content}
                </a>
              ) : (
                <p className="text-sm text-slate-600">{card.content}</p>
              )}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-slate-200 lg:col-span-2"
          >
            <iframe
              title="School location on Google Maps"
              src="https://maps.google.com/maps?q=New+Delhi+India&output=embed"
              className="h-64 w-full sm:h-80 lg:min-h-[320px] lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between rounded-2xl bg-[#25D366] p-6 text-white"
          >
            <div>
              <MessageCircle size={32} className="mb-4" aria-hidden="true" />
              <h3 className="mb-2 font-display text-xl font-semibold">
                Get instant answers on WhatsApp
              </h3>
              <p className="text-sm text-white/90">
                Our admissions team is available to answer your questions in
                real time.
              </p>
            </div>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target mt-6 block rounded-full bg-white py-3.5 text-center font-semibold text-[#25D366] transition-opacity hover:opacity-90"
            >
              Message us on WhatsApp
            </a>
          </motion.div>
        </div>

        <nav
          className="mt-8 flex flex-wrap justify-center gap-4 sm:mt-10 sm:gap-6"
          aria-label="Social media links"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="touch-target font-mono text-xs text-slate-400 hover:text-gold-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
