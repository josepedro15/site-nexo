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
  Cog,
  ArrowRight,
  MessageCircle,
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

function MetodologiaStack() {
  return (
    <div
      className="relative flex flex-col gap-4 lg:hidden"
      role="list"
      aria-label="Metodologia Integrada - 5 pilares"
    >
      <div className="absolute left-5 top-8 bottom-8 w-0.5 bg-primary/30 -z-10" aria-hidden />
      {pilares.map((pilar, index) => {
        const Icon = pilar.icon;
        return (
          <motion.div
            key={pilar.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            role="listitem"
            className="relative pl-14"
          >
            <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-md shrink-0">
              {pilar.id}
            </div>
            <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm hover:border-primary/30 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{pilar.title}</h3>
                  <p className="text-sm text-slate-500 mt-0.5">({pilar.subtitle})</p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function MetodologiaCircular() {
  const centerX = 50;
  const centerY = 50;
  const radius = 38;
  const numNodes = 5;

  const getPosition = (index: number) => {
    const angleDeg = -90 + index * (360 / numNodes);
    const angleRad = (angleDeg * Math.PI) / 180;
    return {
      x: centerX + radius * Math.cos(angleRad),
      y: centerY + radius * Math.sin(angleRad),
    };
  };

  return (
    <div
      className="relative w-full h-full min-h-[480px]"
      role="img"
      aria-label="Diagrama circular da Metodologia Integrada: Planejamento e Tráfego, IA Generativa, CRM e Automação, MetricsIA, Capacitação Humana, conectados em fluxo contínuo"
    >
      {/* SVG de fundo com setas curvas entre os nós */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden
      >
        {pilares.map((_, i) => {
          const from = getPosition(i);
          const to = getPosition((i + 1) % numNodes);
          const midX = (from.x + to.x + centerX) / 3;
          const midY = (from.y + to.y + centerY) / 3;
          const path = `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;
          return (
            <path
              key={i}
              d={path}
              stroke="hsl(var(--primary))"
              strokeWidth="0.6"
              strokeOpacity="0.6"
              fill="none"
              strokeLinecap="round"
            />
          );
        })}
      </svg>

      {/* Engrenagens centrais */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center">
        <Cog className="w-10 h-10 text-slate-400 absolute rotate-0" strokeWidth={1.5} />
        <Cog className="w-7 h-7 text-slate-500 absolute rotate-12" strokeWidth={1.5} />
      </div>

      {/* Nós posicionados em círculo */}
      {pilares.map((pilar, index) => {
        const pos = getPosition(index);
        const Icon = pilar.icon;
        return (
          <motion.div
            key={pilar.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="absolute w-40 -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
            }}
          >
            <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm hover:border-primary/30 hover:shadow-lg transition-all text-center group">
              <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shadow-md">
                {pilar.id}
              </div>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mx-auto mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 leading-tight">{pilar.title}</h3>
              <p className="text-xs text-slate-500 mt-0.5">({pilar.subtitle})</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export function HowItWorks() {
  return (
    <section
      id="metodologia"
      aria-labelledby="metodologia-title"
      className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden"
    >
      <div className="section-container relative z-10">
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
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]"
          >
            Não somos agência. É{" "}
            <span className="text-primary">engenharia comercial</span>.
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto">
            Tecnologia para escalar. Expertise humana para fechar.
          </p>
          <p className="text-slate-500 max-w-xl mx-auto text-base">
            Do anúncio ao caixa — resultado com dados, não com promessa.
          </p>
        </motion.div>

        <MetodologiaStack />
        <div className="hidden lg:block w-full max-w-4xl mx-auto aspect-square min-h-[480px]">
          <MetodologiaCircular />
        </div>

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
              Até aqui houve sinergia entre nossos negócios? Podemos avançar?
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <Button size="xl" className="shadow-lg shadow-primary/20 font-semibold" asChild>
              <Link href="#contato" className="inline-flex items-center">
                Falar com Especialista
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
