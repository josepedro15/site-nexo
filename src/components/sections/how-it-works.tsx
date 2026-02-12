"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Search, Users, FileText, CheckCircle, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1. Diagnóstico",
    description: "Formulário com informações da empresa e reunião online para mapear sua operação. 2 dias úteis.",
  },
  {
    icon: Users,
    title: "2. Alinhamento",
    description: "Apresentação do time Nexo e alinhamento de expectativas. Reunião online.",
  },
  {
    icon: FileText,
    title: "3. Estruturação",
    description: "Criação do plano de ação que será executado. Plano completo para atingir seus objetivos. 3 dias úteis.",
  },
  {
    icon: CheckCircle,
    title: "4. Aprovação",
    description: "Apresentação dos planos para aprovação. Validação antes do início das operações.",
  },
  {
    icon: Rocket,
    title: "5. Go Live",
    description: "Início imediato das operações. Tempo total: 5 dias úteis do diagnóstico ao start.",
  },
];

export function HowItWorks() {
  return (
    <section id="metodologia" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16 lg:mb-20 space-y-4">
          <Badge variant="outline" className="text-blue-600 border-blue-100 bg-blue-50">
            Metodologia
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Como transformamos seu negócio
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Do diagnóstico ao Go Live em 5 dias úteis. Processo validado e transparente.
          </p>
        </div>

        <div className="relative grid gap-10 sm:gap-12 md:grid-cols-3 lg:grid-cols-5 md:items-start">
          {/* Connector Line (Desktop) - alinhada ao centro dos ícones */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[5%] right-[5%] h-px bg-slate-200/80 -z-10" aria-hidden />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center mb-6 shadow-sm group-hover:border-blue-500 group-hover:shadow-blue-200 transition-all duration-300 relative z-10">
                <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold shadow-md">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed px-4 text-sm md:text-base">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
