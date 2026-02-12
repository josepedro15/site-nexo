"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export function FloatingWhatsApp() {
  return (
    <Link
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 min-w-[56px] min-h-[56px] rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all active:scale-95 sm:hover:scale-110"
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </Link>
  );
}
