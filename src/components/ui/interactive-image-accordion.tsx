"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Otto Hartmann",
    role: "Founder",
    bio: "20+ anos transformando vendas. Criador de metodologias: Método BD, Sistema Varejo Pró e Engrenagem comercial.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Carlos Henrique",
    role: "Head de IA",
    bio: "Especialista em integração, CRM e Inteligência Artificial. Construtor de sistemas NOCODE e especialista em N8N.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "José Pedro",
    role: "HEAD de Sistemas",
    bio: "Arquiteturas de Sistemas com IA, automações e integrações escaláveis (n8n & APIs).",
    imageUrl: "https://drive.google.com/thumbnail?id=1k2F7V0W5YebDIdQzAhWxb9UFantKhqWw&sz=w800",
  },
  {
    id: 4,
    name: "Liara Alves",
    role: "HEAD de Tráfego",
    bio: "Expert em Google Meu Negócio, Ecommerce e Meta ADS.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Lucas de Lucas",
    role: "HEAD de CS",
    bio: "Especialista em Sucesso do Cliente e estrategista digital.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Yuri Luçardo",
    role: "HEAD de Growth",
    bio: "Estrategista comercial e especialista em CopyWriter.",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Daniel Volpi",
    role: "HEAD Comercial",
    bio: "Master Trainer em vendas e especialista em Persuasão.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
];

function AccordionItem({
  item,
  isActive,
  onMouseEnter,
}: {
  item: TeamMember;
  isActive: boolean;
  onMouseEnter: () => void;
}) {
  return (
    <div
      className={`
        relative h-[400px] md:h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? "w-[280px] sm:w-[320px] md:w-[400px]" : "w-[50px] sm:w-[60px]"}
      `}
      onMouseEnter={onMouseEnter}
    >
      <img
        src={item.imageUrl}
        alt={item.name}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).onerror = null;
          (e.target as HTMLImageElement).src =
            "https://placehold.co/400x450/1e293b/94a3b8?text=Photo";
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div
        className={`
          absolute text-white transition-all duration-300 ease-in-out
          ${
            isActive
              ? "bottom-6 left-4 right-4 text-left"
              : "bottom-24 left-1/2 -translate-x-1/2 rotate-90 origin-center whitespace-nowrap"
          }
        `}
      >
        {isActive ? (
          <div>
            <p className="text-lg font-bold">{item.name}</p>
            <p className="text-sm text-slate-200 font-medium mt-1">{item.role}</p>
            <p className="text-sm text-slate-300 mt-2 line-clamp-3">{item.bio}</p>
          </div>
        ) : (
          <span className="text-base font-semibold">{item.role}</span>
        )}
      </div>
    </div>
  );
}

export function TeamAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-24 overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1 space-y-6">
            <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5">
              Quem faz acontecer
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Especialistas que já geraram{" "}
              <span className="text-primary">R$ 700M+</span>{" "}
              em vendas
            </h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Tráfego, IA, CRM e Treinamento — cada área com um expert dedicado. 
              Não somos consultores teóricos: aplicamos na prática o que ensinamos.
            </p>
            <ul className="text-slate-600 space-y-2 max-w-xl mx-auto lg:mx-0">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                7 especialistas com expertise complementar
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                20 mil+ pessoas treinadas na metodologia Nexo
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Suporte direto, sem intermediários
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-neutral-800 transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com a Equipe
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2 overflow-hidden">
            <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 p-2 sm:p-4">
              {teamMembers.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
