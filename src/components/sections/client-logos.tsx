"use client";

import { Logos3 } from "@/components/ui/logos3";
import type { Logo } from "@/components/ui/logos3";

const nexLogos: Logo[] = [
  { id: "logo-1", description: "Google", image: "https://svgl.app/library/google-2015.svg", className: "h-7 w-auto opacity-70" },
  { id: "logo-2", description: "Meta", image: "https://svgl.app/library/meta.svg", className: "h-7 w-auto opacity-70" },
  { id: "logo-3", description: "WhatsApp", image: "https://svgl.app/library/whatsapp.svg", className: "h-7 w-auto opacity-70" },
  { id: "logo-4", description: "Notion", image: "https://svgl.app/library/notion_wordmark_light.svg", className: "h-7 w-auto opacity-70" },
  { id: "logo-5", description: "Slack", image: "https://svgl.app/library/slack_wordmark_light.svg", className: "h-7 w-auto opacity-70" },
  { id: "logo-6", description: "OpenAI", image: "https://svgl.app/library/openai_wordmark_light.svg", className: "h-7 w-auto opacity-70" },
  { id: "logo-7", description: "Stripe", image: "https://svgl.app/library/stripe_wordmark_light.svg", className: "h-7 w-auto opacity-70" },
  { id: "logo-8", description: "Figma", image: "https://svgl.app/library/figma_wordmark_light.svg", className: "h-6 w-auto opacity-70" },
];

export function ClientLogos() {
  return (
    <Logos3
      heading="Tecnologias que impulsionam seus resultados"
      badge="Stack"
      subtitle="Google Ads, Meta, WhatsApp, IA generativa e automações integradas ao seu CRM."
      logos={nexLogos}
    />
  );
}
