"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";

const painPoints = [
  "Leads chegam, mas nenhum fornecedor integra o funil do clique ao contrato?",
  "Sua equipe é boa, mas opera no escuro — sem dados, sem pipeline claro?",
  "Você paga CRM todo mês. Sua equipe atualiza por obrigação, não por utilidade?",
  "Investiu em tráfego, mas não sabe qual campanha realmente gera venda?",
  "Leads esfriam em minutos. Sua resposta leva horas?",
  "Relatórios semanais que chegam tarde demais para mudar alguma coisa?",
];

export function PainPoints() {
  return (
    <section aria-labelledby="pain-points-title" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16 space-y-6">
          <h2 id="pain-points-title" className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Se você se reconhece aqui, a conversa muda.
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Esses são os sinais de que sua operação comercial precisa de engenharia, não de mais ferramentas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-5 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <span className="text-slate-400 text-lg font-medium">?</span>
              <p className="text-slate-700 font-medium">{point}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <p className="text-xl font-bold text-slate-900">
            Se fez sentido, o próximo passo é um diagnóstico da sua operação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" className="group font-semibold" asChild>
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                Falar com um Especialista
                <MessageCircle className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
