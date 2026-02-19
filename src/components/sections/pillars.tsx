"use client";

import { motion } from "framer-motion";
import { Target, MessageCircle, LayoutDashboard, Users, FileText, Calendar, BarChart3 } from "lucide-react";
import { FeatureCard } from "@/components/ui/feature-card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Aquisição que dá ROI",
    description: "Campanhas em Google Ads e Meta otimizadas com dados do seu CRM. Cada real investido rastreado até o fechamento.",
    icon: Target,
    highlight: false,
    delay: 0.05,
  },
  {
    title: "Nenhum lead fica sem resposta",
    description: "IA no WhatsApp que atende em segundos, qualifica e já agenda com sua equipe. 24/7, sem perder oportunidade.",
    icon: MessageCircle,
    highlight: false,
    delay: 0.1,
  },
  {
    title: "Decisões com dados, não achismo",
    description: "Pipeline visual, métricas em tempo real e previsão de receita. CRM que sua equipe realmente usa.",
    icon: LayoutDashboard,
    highlight: false,
    delay: 0.15,
  },
  {
    title: "Sua equipe fecha melhor",
    description: "Treinamento com metodologia comprovada. A IA entrega o lead pronto — seu vendedor fecha com técnica.",
    icon: Users,
    highlight: false,
    delay: 0.2,
  },
  {
    title: "Páginas que convertem",
    description: "Landing pages otimizadas, responsivas e integradas ao CRM. Do clique ao lead em segundos.",
    icon: FileText,
    highlight: false,
    delay: 0.25,
  },
  {
    title: "Alinhamento quinzenal",
    description: "Reuniões de acompanhamento para ajustar estratégia com base em dados reais, não suposições.",
    icon: Calendar,
    highlight: false,
    delay: 0.35,
  },
  {
    title: "Métricas que importam",
    description: "Dashboard em tempo real e relatórios mensais. ROI visível, gargalos expostos, decisões rápidas.",
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
            O que muda na sua operação
          </Badge>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900">
            Engenharia de Vendas aplicada ao seu negócio
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base">
            Cada peça do sistema foi projetada para gerar resultado mensurável — não entregáveis bonitos.
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
