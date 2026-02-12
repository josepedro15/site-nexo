"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

const testimonials = [
  {
    company: "Cliente Varejo",
    sector: "Varejo",
    quote: "A Nexo transformou nossa operação comercial. Em 3 meses, passamos a ter previsibilidade real nas vendas.",
    metrics: {
      leads: 670,
      conversaoIA: "27%",
      conversaoHumana: "21,8%",
      custoLead: "R$ 6,00",
    },
  },
  {
    company: "Cliente B2B",
    sector: "Serviços B2B",
    quote: "O Agente de IA no WhatsApp trouxe agilidade e nossos leads nunca mais ficaram sem resposta.",
    metrics: {
      leads: 450,
      conversaoIA: "32%",
      conversaoHumana: "25%",
      custoLead: "R$ 8,50",
    },
  },
  {
    company: "Cliente E-commerce",
    sector: "E-commerce",
    quote: "Tráfego + CRM + Treinamento em um só lugar. Finalmente paramos de jogar dinheiro fora.",
    metrics: {
      leads: 1200,
      conversaoIA: "24%",
      conversaoHumana: "18%",
      custoLead: "R$ 4,20",
    },
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="text-blue-600 border-blue-100 bg-blue-50">
            Depoimentos
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            O que nossos clientes dizem
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Resultados reais de empresas que aceleraram suas vendas com a metodologia Nexo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl border border-slate-100 p-6 sm:p-8 flex flex-col overflow-hidden"
            >
              <Quote className="w-10 h-10 text-blue-200 mb-4" />
              <p className="text-slate-700 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-auto space-y-4">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-slate-400">Leads</p>
                    <p className="font-bold text-slate-900">{testimonial.metrics.leads}</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Conversão IA</p>
                    <p className="font-bold text-slate-900">{testimonial.metrics.conversaoIA}</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Conversão Humana</p>
                    <p className="font-bold text-slate-900">{testimonial.metrics.conversaoHumana}</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Custo/Lead</p>
                    <p className="font-bold text-slate-900">{testimonial.metrics.custoLead}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <p className="font-semibold text-slate-900">{testimonial.company}</p>
                  <p className="text-sm text-slate-500">{testimonial.sector}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
