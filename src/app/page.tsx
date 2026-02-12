import { Hero } from "@/components/sections/hero";
import { PainPoints } from "@/components/sections/pain-points";
import { Pillars } from "@/components/sections/pillars";
import { ValueProposition } from "@/components/sections/value-proposition";
import { HowItWorks } from "@/components/sections/how-it-works";
import { About } from "@/components/sections/about";
import { TeamAccordion } from "@/components/ui/interactive-image-accordion";
import { ClientLogos } from "@/components/sections/client-logos";
import { Results } from "@/components/sections/results";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <About />
      <TeamAccordion />
      <Results />
      <Pillars />
      <PainPoints />
      <HowItWorks />
      <ClientLogos />
      <Testimonials />
      <Contact />
    </>
  );
}
