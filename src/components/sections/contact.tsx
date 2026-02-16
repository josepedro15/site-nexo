"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, Phone, MapPin, Clock, Check } from "lucide-react";
import Link from "next/link";
import { CALENDLY_URL, CONTACT } from "@/lib/constants";

const whyChooseNexo = [
  "Especialistas em Tráfego Pago (Google + Meta) e IA no WhatsApp",
  "R$ 700M+ em vendas geradas para mais de 200 empresas",
  "Ecossistema completo: Tráfego, IA, CRM e Treinamento",
  "Consultoria gratuita para entender seu momento",
];

const areas = [
  "Selecione sua área",
  "Varejo",
  "Serviços B2B",
  "Imobiliário",
  "Educação",
  "Saúde",
  "Outros",
];

const whatsappBaseUrl = `https://wa.me/${CONTACT.whatsappRaw.replace(/\D/g, "")}`;

function buildWhatsAppMessage(data: Record<string, string>) {
  const parts = [
    "Olá! Acabei de preencher o formulário do site da Nexo.",
    data.name && `Nome: ${data.name}`,
    data.email && `E-mail: ${data.email}`,
    data.phone && `WhatsApp: ${data.phone}`,
    data.company && `Empresa: ${data.company}`,
    data.area && data.area !== areas[0] && `Área: ${data.area}`,
    data.message && `Mensagem: ${data.message}`,
  ].filter(Boolean);
  return encodeURIComponent(parts.join("\n"));
}

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {
      name: (formData.get("name") as string) || "",
      email: (formData.get("email") as string) || "",
      phone: (formData.get("phone") as string) || "",
      company: (formData.get("company") as string) || "",
      area: (formData.get("area") as string) || "",
      message: (formData.get("message") as string) || "",
    };
    const msg = buildWhatsAppMessage(data);
    window.open(`${whatsappBaseUrl}?text=${msg}`, "_blank");
  };

  return (
    <section id="contato" aria-labelledby="contact-title" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-5 gap-10 sm:gap-12 lg:gap-16">
          {/* Coluna Esquerda - Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl border border-slate-100 shadow-xl p-5 sm:p-6 md:p-10 overflow-hidden">
              <h2 id="contact-title" className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-5 sm:mb-6">
                Consultoria Gratuita
              </h2>

              <Button
                size="xl"
                className="w-full mb-6 bg-primary hover:bg-primary/90 text-white font-semibold h-14 text-base"
                asChild
              >
                <Link href={`${whatsappBaseUrl}?text=${encodeURIComponent("Olá! Gostaria de falar com um especialista sobre acelerar minhas vendas.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  <MessageCircle className="mr-2 w-6 h-6" />
                  Falar no WhatsApp Agora
                </Link>
              </Button>

              <p className="text-slate-500 text-sm mb-6">Ou preencha o formulário abaixo</p>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Nome Completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome"
                    required
                    autoComplete="name"
                    maxLength={100}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    autoComplete="email"
                    maxLength={254}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                    WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    required
                    autoComplete="tel"
                    minLength={10}
                    pattern="^[\d\s\-\(\)\+]{10,25}$"
                    title="Informe um número válido com DDD (ex: 11 99999-9999)"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                    Nome da Empresa
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Sua empresa"
                    autoComplete="organization"
                    maxLength={150}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="area" className="block text-sm font-medium text-slate-700 mb-1">
                    Área de Atuação
                  </label>
                  <select
                    id="area"
                    name="area"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors bg-white"
                  >
                    {areas.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Como podemos ajudar?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Conte-nos sobre seus objetivos e desafios atuais..."
                    maxLength={1000}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-none"
                  />
                </div>

                <Button size="xl" className="w-full font-semibold h-14" type="submit">
                  Quero Falar com um Especialista
                </Button>

                <p className="text-xs text-slate-400">
                  * Campos obrigatórios. Suas informações serão enviadas via WhatsApp.
                </p>
              </form>
            </div>
          </motion.div>

          {/* Coluna Direita - Informações + Por que escolher */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-700">WhatsApp</p>
                    <a
                      href={whatsappBaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {CONTACT.whatsapp}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-700">Endereço</p>
                    <p className="text-slate-600">{CONTACT.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-700">Horário de Atendimento</p>
                    <p className="text-slate-600">{CONTACT.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-5 sm:p-6 text-white overflow-hidden">
              <h3 className="text-lg font-bold mb-4">Por que escolher a Nexo?</h3>
              <ul className="space-y-3">
                {whyChooseNexo.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-sm text-white/90 break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button variant="outline" size="lg" className="w-full" asChild>
              <Link href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <Calendar className="mr-2 w-5 h-5" />
                Agendar Consultoria
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
