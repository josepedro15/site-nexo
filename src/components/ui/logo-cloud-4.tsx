"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
  reverse?: boolean;
  duration?: number;
  durationOnHover?: number;
};

export function LogoCloud({
  logos,
  reverse = false,
  duration = 60,
  durationOnHover = 20,
  className,
  ...props
}: LogoCloudProps) {
  return (
    <div
      className={`relative w-full bg-gradient-to-r from-secondary via-transparent to-secondary py-6 md:border-x border-slate-200 ${className ?? ""}`}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-slate-200" />

      <InfiniteSlider
        gap={48}
        reverse={reverse}
        duration={duration}
        durationOnHover={durationOnHover}
      >
        {logos.map((logo) => (
          <img
            alt={logo.alt}
            className="pointer-events-none h-5 min-h-5 select-none md:h-6 md:min-h-6 shrink-0 object-contain opacity-70 hover:opacity-100 transition-opacity brightness-0 dark:brightness-100 dark:invert"
            height="auto"
            key={`logo-${logo.alt}`}
            loading="lazy"
            src={logo.src}
            width="auto"
          />
        ))}
      </InfiniteSlider>

      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 left-0 h-full w-[160px] md:w-[200px]"
        direction="left"
      />
      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 right-0 h-full w-[160px] md:w-[200px]"
        direction="right"
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-slate-200" />
    </div>
  );
}
