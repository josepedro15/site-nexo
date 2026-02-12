"use client";

import { motion } from "framer-motion";
import { Target, MessageCircle, LayoutDashboard, Users, FileText, Calendar, BarChart3 } from "lucide-react";
import { FeatureCard } from "@/components/ui/feature-card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Aquisição (Tráfego Pago)",
    description: "Campanhas de Google Ads, Meta Ads e Google Meu Negócio. Criativos de alta conversão, landing pages otimizadas e visibilidade local para trazer leads qualificados.",
    icon: Target,
    highlight: false,
    delay: 0.05,
  },
  {
    title: "Agente de IA (WhatsApp)",
    description: "Seu vendedor digital que atende, qualifica e agenda 24/7 no WhatsApp. Respostas instantâneas e personalizadas que aumentam a conversão.",
    icon: MessageCircle,
    highlight: false,
    delay: 0.1,
  },
  {
    title: "CRPRO (CRM Próprio)",
    description: "Pipeline visual e dashboards em tempo real para controle total da operação comercial. Saiba exatamente onde está cada negociação.",
    icon: LayoutDashboard,
    highlight: false,
    delay: 0.15,
  },
  {
    title: "Capacitação Humana",
    description: "Treinamento intensivo para seu time converter mais. A IA gera e qualifica o lead, sua equipe fecha a venda com técnica.",
    icon: Users,
    highlight: false,
    delay: 0.2,
  },
  {
    title: "Landing Pages Profissionais",
    description: "Páginas de captura altamente convertedoras, desenvolvidas para seu negócio. Design responsivo, otimização para conversão e integração com CRM.",
    icon: FileText,
    highlight: false,
    delay: 0.25,
  },
  {
    title: "Reuniões Estratégicas Quinzenais",
    description: "Acompanhamento regular para alinhar expectativas, ajustar estratégias e garantir que tudo esteja no caminho certo.",
    icon: Calendar,
    highlight: false,
    delay: 0.35,
  },
  {
    title: "Relatórios e Métricas",
    description: "Dashboard em tempo real, relatórios mensais e análise de ROI. Transparência total sobre a performance das campanhas.",
    icon: BarChart3,
    highlight: false,
    delay: 0.4,
  },
];

export function Pillars() {
  return (
    <section id="solucoes" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-12 lg:mb-16 space-y-4">
          <Badge variant="outline" className="text-blue-600 border-blue-100 bg-blue-50">
            O que entregamos
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            A Máquina de Vendas Completa
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Combinamos tecnologia de ponta com expertise humana para criar um ecossistema de vendas previsível e escalável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
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
                className="h-full border border-slate-100"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
