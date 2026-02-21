"use client";

import { HeroSection9 } from "@/components/ui/hero-section-9";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const heroData = {
  badge: "Engenharia de Vendas para Empresas",
  title: (
    <>
      Substitua opinião por métricas e dados.{" "}
      <span className="text-primary">Transforme aquisição e conversão em engenharia.</span>
    </>
  ),
  subtitle:
    "Da primeira impressão ao fechamento, cada dente da engrenagem é calibrado com dados reais — eliminando ruído, improviso e decisões no escuro.",
  actions: [
    {
      text: "Falar com Engenheiro Comercial",
      href: "#contato",
      variant: "default" as const,
      icon: <ArrowRight className="h-5 w-5" />,
    },
    {
      text: "Ver a Metodologia",
      href: "#metodologia",
      variant: "outline" as const,
      className: "border-primary/30 bg-primary/5 hover:bg-primary/10 text-primary",
      icon: <ArrowRight className="h-5 w-5" />,
    },
  ],
  stats: [],
  images: [
    "/hero/crpro-dashboard.png",
    "/hero/metricsIA-dashboard.png",
  ],
};

export function Hero() {
  return (
    <HeroSection9
      badge={heroData.badge}
      title={heroData.title}
      subtitle={heroData.subtitle}
      actions={heroData.actions}
      stats={heroData.stats}
      images={heroData.images}
    />
  );
}
