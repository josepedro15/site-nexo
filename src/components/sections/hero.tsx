"use client";

import { HeroSection9 } from "@/components/ui/hero-section-9";
import { ArrowRight, MessageCircle, TrendingUp, Building2 } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const heroData = {
  badge: "Engenharia de Vendas para Empresas",
  title: (
    <>
      Operação comercial estagnada?{" "}
      <span className="text-primary">Pare de contratar agências.</span>
    </>
  ),
  subtitle:
    "Não sabe se o gargalo está no tráfego, no funil ou no time? Implemente uma Engenharia de Vendas: tráfego, IA, CRM e capacitação integrados em um sistema previsível. R$ 700M+ em resultados gerados.",
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
  stats: [
    {
      value: "R$ 700M+",
      label: "Em Vendas Geradas",
      icon: <TrendingUp className="h-5 w-5 text-slate-600" />,
    },
    {
      value: "200+",
      label: "Empresas Atendidas",
      icon: <Building2 className="h-5 w-5 text-slate-600" />,
    },
  ],
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
