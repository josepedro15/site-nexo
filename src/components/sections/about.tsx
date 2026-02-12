"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp } from "lucide-react";

const stats = [
  {
    value: "20 mil",
    label: "Pessoas Treinadas",
    icon: Users,
  },
  {
    value: "R$ 700M+",
    label: "Em Vendas Geradas",
    icon: TrendingUp,
  },
];

export function About() {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Decoração sutil */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5">
              Quem Somos
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mt-4 leading-[1.1]">
              Experts em Growth{" "}
              <span className="text-primary">& Tecnologia</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mt-6">
              A Nexo nasceu da necessidade de unir estratégias de vendas validadas com tecnologia de ponta.{" "}
              <strong className="text-slate-800">Não somos agência</strong> — somos parceiro de crescimento.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mt-4">
              Eliminamos a incerteza do seu processo comercial. Máquinas de vendas previsíveis, não promessas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:justify-end w-full"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-100 min-w-0 w-full sm:flex-1 sm:max-w-[220px] hover:border-primary/30 hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-slate-900 tracking-tight">{stat.value}</p>
                    <p className="text-slate-500 text-sm font-medium mt-1">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
