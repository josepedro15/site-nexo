"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_URL, CALENDLY_URL } from "@/lib/constants";

const painPoints = [
  "Muitos leads, poucos fechamentos?",
  "Equipe comercial sem método?",
  "CRM subutilizado ou desorganizado?",
  "Gastando em tráfego sem ROI visível?",
  "Atendimento lento perdendo vendas?",
  "Dados espalhados sem visão única?",
];

export function PainPoints() {
  return (
    <section aria-labelledby="pain-points-title" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16 space-y-6">
          <h2 id="pain-points-title" className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Qual é a sua realidade hoje?
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Se você se identifica com alguma dessas situações, podemos ajudar a transformar.
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
              className="flex items-center gap-4 p-5 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all"
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
            Tome uma decisão hoje mesmo. É possível sim vender mais com método.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" className="group font-semibold" asChild>
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                Agendar Reunião
                <Calendar className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" className="group font-semibold border-green-200 bg-green-50 hover:bg-green-100 text-green-800" asChild>
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                WhatsApp
                <MessageCircle className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
