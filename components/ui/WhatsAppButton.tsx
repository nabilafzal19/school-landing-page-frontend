"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <div className="fixed safe-fixed-bottom right-4 z-50 animate-scale-in sm:right-8">
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
    </div>
  );
}
