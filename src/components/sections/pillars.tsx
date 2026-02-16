"use client";

import { motion } from "framer-motion";
import { Target, MessageCircle, LayoutDashboard, Users, FileText, Calendar, BarChart3 } from "lucide-react";
import { FeatureCard } from "@/components/ui/feature-card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Aquisição (Tráfego Pago)",
    description: "Google Ads, Meta Ads e Google Meu Negócio. Criativos de alta conversão e visibilidade local.",
    icon: Target,
    highlight: false,
    delay: 0.05,
  },
  {
    title: "Agente de IA (WhatsApp)",
    description: "Vendedor digital 24/7 que atende, qualifica e agenda. Respostas instantâneas que convertem.",
    icon: MessageCircle,
    highlight: false,
    delay: 0.1,
  },
  {
    title: "CRPRO (CRM Próprio)",
    description: "Pipeline visual e dashboards em tempo real. Controle total de cada negociação.",
    icon: LayoutDashboard,
    highlight: false,
    delay: 0.15,
  },
  {
    title: "Capacitação Humana",
    description: "Treinamento intensivo. A IA qualifica, sua equipe fecha a venda com técnica.",
    icon: Users,
    highlight: false,
    delay: 0.2,
  },
  {
    title: "Landing Pages",
    description: "Páginas convertedoras, responsivas e integradas ao CRM.",
    icon: FileText,
    highlight: false,
    delay: 0.25,
  },
  {
    title: "Reuniões Quinzenais",
    description: "Acompanhamento regular para alinhar expectativas e ajustar estratégias.",
    icon: Calendar,
    highlight: false,
    delay: 0.35,
  },
  {
    title: "Relatórios e Métricas",
    description: "Dashboard em tempo real, relatórios mensais e análise de ROI.",
    icon: BarChart3,
    highlight: false,
    delay: 0.4,
  },
];

export function Pillars() {
  return (
    <section id="solucoes" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-12 lg:mb-16 space-y-3">
          <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5">
            O que entregamos
          </Badge>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900">
            A Máquina de Vendas Completa
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base">
            Tecnologia de ponta com expertise humana para vendas previsíveis e escaláveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.delay }}
              viewport={{ once: true }}
              className={index === features.length - 1 && features.length % 3 !== 0 ? "lg:col-start-2" : ""}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                highlight={feature.highlight}
                compact
                className="h-full border border-slate-100"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
