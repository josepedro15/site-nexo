"use client";

import { Logos3 } from "@/components/ui/logos3";
import type { Logo } from "@/components/ui/logos3";

const clientLogos: Logo[] = [
  { id: "logo-1", description: "Atacadão Miranda Móveis", image: "/logos/atacadao-miranda-moveis.png", className: "h-10 w-auto" },
  { id: "logo-2", description: "Alison Salles Hair Stylist", image: "/logos/alison-salles.png", className: "h-10 w-auto" },
  { id: "logo-3", description: "Lojas Sharlom", image: "/logos/lojas-sharlom.png", className: "h-10 w-auto" },
  { id: "logo-4", description: "Rangel Móveis", image: "/logos/rangel-moveis.png", className: "h-10 w-auto" },
  { id: "logo-5", description: "Atacadão dos Móveis", image: "/logos/atacadao-dos-moveis.png", className: "h-10 w-auto" },
  { id: "logo-6", description: "Redemac Morelli", image: "/logos/redemac-morelli.png", className: "h-10 w-auto" },
  { id: "logo-7", description: "Porão Ferragem", image: "/logos/porao-ferragem.png", className: "h-10 w-auto" },
  { id: "logo-8", description: "Acomac Porto Alegre", image: "/logos/acomac.png", className: "h-10 w-auto" },
  { id: "logo-9", description: "Crefaz", image: "/logos/crefaz.png", className: "h-10 w-auto" },
  { id: "logo-10", description: "Requinte Móveis", image: "/logos/requinte-moveis.png", className: "h-10 w-auto" },
  { id: "logo-11", description: "Gardeni", image: "/logos/gardeni.png", className: "h-10 w-auto" },
  { id: "logo-12", description: "Elos Travel", image: "/logos/elos-travel.png", className: "h-10 w-auto" },
  { id: "logo-13", description: "Diego Móveis e Estofados", image: "/logos/diego-moveis.png", className: "h-10 w-auto" },
  { id: "logo-14", description: "RJ Diehl Ferragens", image: "/logos/rj-diehl.png", className: "h-10 w-auto" },
  { id: "logo-15", description: "Lojão Especialista em Móveis", image: "/logos/lojao-moveis.png", className: "h-10 w-auto" },
  { id: "logo-16", description: "Acigua", image: "/logos/acigua.png", className: "h-10 w-auto" },
  { id: "logo-17", description: "Loja 7", image: "/logos/loja-7.png", className: "h-10 w-auto" },
  { id: "logo-18", description: "Funerária Rost", image: "/logos/funeraria-rost.png", className: "h-10 w-auto" },
  { id: "logo-19", description: "Funerária São Miguel", image: "/logos/funeraria-sao-miguel.png", className: "h-10 w-auto" },
  { id: "logo-20", description: "Rolamais Rolamentos", image: "/logos/rolamais.png", className: "h-10 w-auto" },
  { id: "logo-21", description: "Trato Feito Celulares", image: "/logos/trato-feito.png", className: "h-10 w-auto" },
  { id: "logo-22", description: "Kai Pão", image: "/logos/kai-pao.png", className: "h-10 w-auto" },
  { id: "logo-23", description: "Projety Decorações", image: "/logos/projety-decoracoes.png", className: "h-10 w-auto" },
  { id: "logo-24", description: "CDL Viamão", image: "/logos/cdl-viamao.png", className: "h-10 w-auto" },
  { id: "logo-25", description: "SEBRAE", image: "/logos/sebrae.png", className: "h-10 w-auto" },
  { id: "logo-26", description: "Vinci", image: "/logos/vinci.png", className: "h-10 w-auto" },
  { id: "logo-27", description: "Mathias Velho Materiais de Construção", image: "/logos/mathias-velho.png", className: "h-10 w-auto" },
  { id: "logo-28", description: "Horango Tango", image: "/logos/horango-tango.png", className: "h-10 w-auto" },
];

export function ClientLogos() {
  return (
    <Logos3
      heading="Empresas que confiam na Nexo"
      badge="Clientes"
      subtitle="Empresas que já transformaram suas vendas com a Nexo."
      logos={clientLogos}
    />
  );
}
