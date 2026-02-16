"use client";

import { motion } from "framer-motion";
import { LogoCloud } from "@/components/ui/logo-cloud-4";
import type { Logo } from "@/components/ui/logo-cloud-4";

const logosRow1: Logo[] = [
  { src: "https://svgl.app/library/nvidia-wordmark-light.svg", alt: "Nvidia" },
  { src: "https://svgl.app/library/supabase_wordmark_light.svg", alt: "Supabase" },
  { src: "https://svgl.app/library/openai_wordmark_light.svg", alt: "OpenAI" },
  { src: "https://svgl.app/library/vercel_wordmark.svg", alt: "Vercel" },
  { src: "https://svgl.app/library/github_wordmark_light.svg", alt: "GitHub" },
  { src: "https://svgl.app/library/turso-wordmark-light.svg", alt: "Turso" },
  { src: "https://svgl.app/library/clerk-wordmark-light.svg", alt: "Clerk" },
];

const logosRow2: Logo[] = [
  { src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg", alt: "Claude AI" },
  { src: "https://svgl.app/library/stripe_wordmark_light.svg", alt: "Stripe" },
  { src: "https://svgl.app/library/notion_wordmark_light.svg", alt: "Notion" },
  { src: "https://svgl.app/library/slack_wordmark_light.svg", alt: "Slack" },
  { src: "https://svgl.app/library/figma_wordmark_light.svg", alt: "Figma" },
  { src: "https://svgl.app/library/spotify_wordmark_light.svg", alt: "Spotify" },
  { src: "https://svgl.app/library/dropbox_wordmark_light.svg", alt: "Dropbox" },
];

export function ClientLogos() {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-container text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
          <span className="block font-medium text-2xl text-slate-500 mb-2">
            Já confiam na Nexo
          </span>
          <span className="text-primary tracking-tight">
            Quem confia na Nexo
          </span>
        </h2>
      </motion.div>

      <div className="w-full space-y-8">
        <LogoCloud logos={logosRow1} reverse={false} duration={50} durationOnHover={25} />
        <LogoCloud logos={logosRow2} reverse={true} duration={55} durationOnHover={22} />
      </div>
    </section>
  );
}
