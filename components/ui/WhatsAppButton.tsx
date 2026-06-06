"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed safe-fixed-bottom right-4 z-50 sm:right-8"
    >
      <div className="relative">
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" />
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          title="Chat with us on WhatsApp"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-110"
        >
          <MessageCircle size={28} fill="white" />
        </a>
      </div>
    </motion.div>
  );
}
