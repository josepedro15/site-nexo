"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useSpring } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    value: 20,
    suffix: " mil",
    label: "Pessoas Treinadas",
    prefix: "",
  },
  {
    value: 700,
    suffix: "M+",
    label: "Em Vendas Geradas",
    prefix: "R$ ",
  },
  {
    value: 200,
    suffix: "",
    label: "Empresas Atendidas",
    prefix: "",
  },
  {
    value: 35,
    suffix: "M+",
    label: "Investidos em Anúncios",
    prefix: "R$ ",
  },
];

function Counter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const springValue = useSpring(0, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [inView, value, springValue]);

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref} className="inline-flex items-baseline justify-center gap-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter whitespace-nowrap">
      {prefix && <span className="tabular-nums">{prefix}</span>}
      <span className="tabular-nums">{displayValue}</span>
      {suffix && <span className="tabular-nums">{suffix}</span>}
    </span>
  );
}

export function Results() {
  return (
    <section id="resultados" className="py-16 sm:py-24 bg-neutral-900 border-y border-neutral-800 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/40 bg-primary/10">
            Resultados Comprovados
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            700 milhões de razões para confiar no método
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Esses números são dos nossos clientes. Não de um slide de apresentação.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-5 sm:p-6 lg:p-8 bg-neutral-800/50 rounded-xl sm:rounded-2xl border border-neutral-700/50 shadow-lg hover:bg-neutral-800 transition-colors">
              <Counter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
              <p className="text-primary/90 mt-2 font-medium text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Case Study - Proposta Nexo */}
        <div className="mt-12 sm:mt-16 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-neutral-800/70 border border-primary/30 text-center overflow-hidden">
          <p className="text-primary font-semibold mb-4">Resultado real de cliente Nexo</p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12">
            <div>
              <p className="text-3xl font-bold text-white">670</p>
              <p className="text-slate-400 text-sm">Leads qualificados</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">27%</p>
              <p className="text-slate-400 text-sm">Conversão IA</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">21,8%</p>
              <p className="text-slate-400 text-sm">Conversão Humana</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">R$ 6,00</p>
              <p className="text-slate-400 text-sm">Custo médio por lead</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
