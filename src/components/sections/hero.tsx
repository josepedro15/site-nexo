"use client";

import { HeroSection9 } from "@/components/ui/hero-section-9";
import { ArrowRight, MessageCircle, TrendingUp, Building2 } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const heroData = {
  badge: "Aceleradora de Vendas B2B/B2C",
  title: (
    <>
      Acelere suas Vendas com{" "}
      <span className="text-primary">Inteligência Comercial</span>.
    </>
  ),
  subtitle:
    "Tráfego Pago, IA no WhatsApp, CRM e Treinamento integrados para gerar ROI real e previsível.",
  actions: [
    {
      text: "Quero Acelerar Minhas Vendas",
      href: "#contato",
      variant: "default" as const,
      icon: <ArrowRight className="h-5 w-5" />,
    },
    {
      text: "WhatsApp",
      href: WHATSAPP_URL,
      variant: "outline" as const,
      className: "border-primary/30 bg-primary/5 hover:bg-primary/10 text-primary",
      icon: <MessageCircle className="h-5 w-5" />,
    },
  ],
  stats: [
    {
      value: "R$ 700M+",
      label: "Em Vendas Geradas",
      icon: <TrendingUp className="h-5 w-5 text-slate-600" />,
    },
    {
      value: "200",
      label: "Empresas Aceleradas",
      icon: <Building2 className="h-5 w-5 text-slate-600" />,
    },
  ],
  images: [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
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
