"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

export interface Logos3Props {
  heading?: string;
  badge?: string;
  subtitle?: string;
  logos?: Logo[];
  className?: string;
}

const defaultLogos: Logo[] = [
  { id: "logo-1", description: "Google", image: "https://svgl.app/library/google-2015.svg" },
  { id: "logo-2", description: "Meta", image: "https://svgl.app/library/meta.svg" },
  { id: "logo-3", description: "WhatsApp", image: "https://svgl.app/library/whatsapp.svg" },
  { id: "logo-4", description: "Notion", image: "https://svgl.app/library/notion_wordmark_light.svg" },
  { id: "logo-5", description: "Slack", image: "https://svgl.app/library/slack_wordmark_light.svg" },
  { id: "logo-6", description: "OpenAI", image: "https://svgl.app/library/openai_wordmark_light.svg" },
  { id: "logo-7", description: "Stripe", image: "https://svgl.app/library/stripe_wordmark_light.svg" },
  { id: "logo-8", description: "Figma", image: "https://svgl.app/library/figma_wordmark_light.svg" },
];

const Logos3 = ({
  heading = "Tecnologias que impulsionam seus resultados",
  badge,
  subtitle,
  logos = defaultLogos,
  className,
}: Logos3Props) => {
  // Duplica para o efeito de loop infinito
  const track = [...logos, ...logos];

  return (
    <section
      className={cn("py-16 sm:py-24 bg-slate-50 overflow-hidden", className)}
      aria-labelledby="logos-heading"
    >
      {/* Estilos inline para a animação marquee */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header */}
      <div className="section-container flex flex-col items-center text-center mb-12">
        {badge && (
          <Badge variant="outline" className="mb-4 text-primary border-primary/30 bg-white">
            {badge}
          </Badge>
        )}
        <h2
          id="logos-heading"
          className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900 max-w-2xl"
        >
          {heading}
        </h2>
        {subtitle && (
          <p className="text-slate-500 mt-3 text-base md:text-lg max-w-xl">
            {subtitle}
          </p>
        )}
      </div>

      {/* Faixa de logos com bordas horizontais */}
      <div className="relative border-y border-slate-200">
        {/* Gradientes nas laterais para suavizar */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-slate-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-slate-50 to-transparent" />

        <div className="overflow-hidden">
          <div className="marquee-track">
            {track.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex items-center justify-center bg-white border-r border-slate-200 px-12 py-8 group shrink-0"
                style={{ minWidth: "220px" }}
              >
                <img
                  src={logo.image}
                  alt={logo.description}
                  loading="lazy"
                  className="h-44 w-auto max-w-[240px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
