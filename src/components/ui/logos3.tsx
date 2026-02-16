"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  badge?: string;
  subtitle?: string;
  logos?: Logo[];
  className?: string;
}

const defaultLogos: Logo[] = [
  { id: "logo-1", description: "Google", image: "https://svgl.app/library/google-2015.svg", className: "h-7 w-auto opacity-70" },
  { id: "logo-2", description: "Meta", image: "https://svgl.app/library/meta.svg", className: "h-7 w-auto opacity-70" },
  { id: "logo-3", description: "WhatsApp", image: "https://svgl.app/library/whatsapp.svg", className: "h-7 w-auto opacity-70" },
  { id: "logo-4", description: "Notion", image: "https://svgl.app/library/notion_wordmark_light.svg", className: "h-7 w-auto opacity-70" },
  { id: "logo-5", description: "Slack", image: "https://svgl.app/library/slack_wordmark_light.svg", className: "h-7 w-auto opacity-70" },
  { id: "logo-6", description: "OpenAI", image: "https://svgl.app/library/openai_wordmark_light.svg", className: "h-7 w-auto opacity-70" },
  { id: "logo-7", description: "Stripe", image: "https://svgl.app/library/stripe_wordmark_light.svg", className: "h-7 w-auto opacity-70" },
  { id: "logo-8", description: "Figma", image: "https://svgl.app/library/figma_wordmark_light.svg", className: "h-6 w-auto opacity-70" },
];

const Logos3 = ({
  heading = "Tecnologias que impulsionam seus resultados",
  badge,
  subtitle,
  logos = defaultLogos,
  className,
}: Logos3Props) => {
  return (
    <section className={cn("py-16 sm:py-24 bg-slate-50", className)} aria-labelledby="logos-heading">
      <div className="section-container flex flex-col items-center text-center mb-8">
        {badge && (
          <Badge variant="outline" className="mb-4 text-primary border-primary/30 bg-white">
            {badge}
          </Badge>
        )}
        <h2 id="logos-heading" className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900 max-w-2xl">
          {heading}
        </h2>
        {subtitle && (
          <p className="text-slate-500 mt-3 text-base md:text-lg max-w-xl">
            {subtitle}
          </p>
        )}
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-6 sm:mx-10 flex shrink-0 items-center justify-center">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      loading="lazy"
                      className={cn("grayscale hover:grayscale-0 transition-all", logo.className)}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-50 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
export type { Logo, Logos3Props };
