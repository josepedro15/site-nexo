"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Megaphone,
  Bot,
  LayoutGrid,
  BarChart3,
  Users,
  ArrowRight,
  MessageCircle,
  Zap,
} from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const pilares = [
  {
    id: 1,
    title: "Planejamento & Tráfego",
    subtitle: "Aquisição",
    icon: Megaphone,
  },
  {
    id: 2,
    title: "IA Generativa",
    subtitle: "Velocidade & Qualificação",
    icon: Bot,
  },
  {
    id: 3,
    title: "CRM & Automação",
    subtitle: "Retenção",
    icon: LayoutGrid,
  },
  {
    id: 4,
    title: "MetricsIA",
    subtitle: "Gestão com IA",
    icon: BarChart3,
  },
  {
    id: 5,
    title: "Capacitação Humana",
    subtitle: "Retenção",
    icon: Users,
  },
] as const;

/* ------------------------------------------------------------------ */
/* Lista vertical para mobile                                          */
/* ------------------------------------------------------------------ */
function MetodologiaStack() {
  return (
    <div className="relative flex flex-col gap-4 lg:hidden" role="list">
      <div className="absolute left-5 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/10 -z-10" aria-hidden />
      {pilares.map((pilar, index) => {
        const Icon = pilar.icon;
        return (
          <motion.div
            key={pilar.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
            role="listitem"
            className="relative pl-16"
          >
            {/* Bolinha numerada */}
            <div className="absolute left-0 top-3 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-primary/30 shrink-0">
              {pilar.id}
            </div>
            <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:border-primary/30 hover:shadow-md transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{pilar.title}</h3>
                  <p className="text-xs text-primary font-medium mt-0.5">{pilar.subtitle}</p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Diagrama circular para desktop                                       */
/* ------------------------------------------------------------------ */
function MetodologiaCircular() {
  const cx = 50;
  const cy = 50;
  const r = 37;
  const n = pilares.length;

  const getPos = (i: number) => {
    const deg = -90 + i * (360 / n);
    const rad = (deg * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };

  return (
    <div
      className="relative w-full h-full min-h-[520px]"
      role="img"
      aria-label="Diagrama circular da Metodologia Integrada"
    >
      {/* SVG: conexões entre nós */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
          </linearGradient>
          {/* Glowing dot filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Arcos conectando cada nó ao próximo */}
        {pilares.map((_, i) => {
          const from = getPos(i);
          const to = getPos((i + 1) % n);
          const midX = (from.x + to.x + cx) / 3;
          const midY = (from.y + to.y + cy) / 3;
          const path = `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;
          return (
            <motion.path
              key={i}
              d={path}
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              strokeOpacity="0.55"
              strokeLinecap="round"
              strokeDasharray="2 1.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              viewport={{ once: true }}
            />
          );
        })}

        {/* Pontos de conexão nos nós */}
        {pilares.map((_, i) => {
          const pos = getPos(i);
          return (
            <motion.circle
              key={`dot-${i}`}
              cx={pos.x}
              cy={pos.y}
              r="1.2"
              fill="hsl(var(--primary))"
              filter="url(#glow)"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1 + 0.6 }}
              viewport={{ once: true }}
            />
          );
        })}
      </svg>

      {/* Centro */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-xl flex items-center justify-center">
          <Zap className="w-7 h-7 text-primary" strokeWidth={1.5} />
        </div>
      </div>

      {/* Nós em círculo */}
      {pilares.map((pilar, index) => {
        const pos = getPos(index);
        const Icon = pilar.icon;
        return (
          <motion.div
            key={pilar.id}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${pos.x}%`, top: `${pos.y}%`, width: "168px" }}
          >
            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200 p-4 shadow-lg hover:shadow-primary/20 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1.5 transition-all duration-300 text-center cursor-default relative">
              {/* Gradiente de fundo sutil no hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
              {/* Badge número */}
              <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shadow-md shadow-primary/40 z-10">
                {pilar.id}
              </div>
              {/* Ícone */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3 ring-2 ring-primary/0 group-hover:ring-primary/30 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm relative z-10">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 leading-tight relative z-10">
                {pilar.title}
              </h3>
              <p className="text-xs text-primary font-semibold mt-1 relative z-10">
                {pilar.subtitle}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section principal                                                   */
/* ------------------------------------------------------------------ */
export function HowItWorks() {
  return (
    <section
      id="metodologia"
      aria-labelledby="metodologia-title"
      className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden"
    >
      {/* Glow de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-12 lg:mb-16 space-y-4"
        >
          <Badge variant="outline" className="bg-white text-primary border-primary/30">
            Diferencial
          </Badge>
          <h2
            id="metodologia-title"
            className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]"
          >
            <span className="text-primary">Metodologia Integrada</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto">
            Tecnologia para escalar. Pessoas certas para fechar. Dados para decidir.
          </p>
          <p className="text-slate-500 max-w-xl mx-auto text-base">
            Não somos agência: é engenharia comercial. Os 5 pilares funcionam em ciclo — aquisição e retenção, tecnologia e expertise humana integradas. Do anúncio ao caixa, com dados, não com promessa.
          </p>
        </motion.div>

        {/* Diagrama */}
        <MetodologiaStack />
        <div className="hidden lg:block w-full max-w-4xl mx-auto" style={{ aspectRatio: "1 / 0.85", minHeight: "520px" }}>
          <MetodologiaCircular />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 md:p-12 shadow-xl"
        >
          <div className="text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
              Poucas vagas. Promessa não paga conta.
            </h3>
            <p className="mt-2 text-slate-600">
              Trabalhamos com poucas empresas por vez. É assim que mantemos a qualidade.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <Button size="xl" className="shadow-lg shadow-primary/20 font-semibold" asChild>
              <Link href="#contato" className="inline-flex items-center">
                Iniciar Conversa
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="font-semibold border-primary/30 bg-primary/5 hover:bg-primary/10 text-primary"
              asChild
            >
              <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
