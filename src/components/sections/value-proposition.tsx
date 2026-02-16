"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Target, Bot, LayoutGrid, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";

const ecosystem = [
  {
    id: "trafico",
    title: "Tráfego",
    tagline: "Atrai o cliente certo",
    description: "Google Ads, Meta, Google Meu Negócio. Posicionamos a oferta certa para a pessoa certa.",
    icon: Target,
  },
  {
    id: "ia",
    title: "Agente de IA",
    tagline: "Atende e qualifica 24/7",
    description: "Filtra curiosos. Entrega leads prontos. Respostas em tempo real.",
    icon: Bot,
  },
  {
    id: "crm",
    title: "CRM",
    tagline: "Organiza e nutre",
    description: "Follow-up infinito. Nenhum lead esquecido. Integração total.",
    icon: LayoutGrid,
  },
  {
    id: "time",
    title: "Time Treinado",
    tagline: "Fecha a venda",
    description: "Tecnologia traz o cliente. O humano fecha negócios.",
    icon: Users,
  },
  {
    id: "resultado",
    title: "Resultado",
    tagline: "Previsibilidade e escala",
    description: "Controle. ROI mensurável. Crescimento sustentável.",
    icon: Zap,
  },
];

export function ValueProposition() {
  return (
    <section aria-labelledby="ecosystem-title" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Header - Copy agressiva */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <Badge variant="outline" className="bg-white text-primary border-primary/30 mb-6">
            O Ecossistema Nexo
          </Badge>
          <h2 id="ecosystem-title" className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] px-1">
            Não somos agência. É{" "}
            <span className="text-primary">engenharia comercial</span>.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-slate-600 font-medium">
            Do anúncio ao caixa. Resultado se constrói com dados, não com imagem bonita.
          </p>
          <p className="mt-4 text-slate-500">
            Tecnologia para escalar. Expertize humana para fechar. Todas as soluções em uma só empresa.
          </p>
        </motion.div>

        {/* Ecossistema interligado - Flow horizontal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 min-w-0">
            {ecosystem.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === ecosystem.length - 1;

              return (
                <div key={item.id} className="relative flex">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex-1 min-w-0 bg-white rounded-xl sm:rounded-2xl border border-slate-100 p-5 sm:p-6 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all group"
                  >
                    <div className="flex flex-col h-full">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {item.tagline}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mt-1">{item.title}</h3>
                      <p className="text-slate-500 text-sm mt-2 flex-1">{item.description}</p>
                    </div>
                  </motion.div>

                  {/* Seta conectora entre cards (desktop) */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-slate-100 items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA - Copy agressiva */}
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
