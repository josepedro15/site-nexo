"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface ActionProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  className?: string;
  icon?: React.ReactNode;
}

interface HeroSection9Props {
  badge?: string;
  title: React.ReactNode;
  subtitle: string;
  actions: ActionProps[];
  stats: StatProps[];
  images: string[];
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function HeroSection9({
  badge,
  title,
  subtitle,
  actions,
  stats,
  images,
  className,
}: HeroSection9Props) {
  return (
    <section
      className={cn(
        "relative min-h-[85svh] sm:min-h-[90vh] flex items-center pt-20 pb-12 sm:pt-28 sm:pb-16 overflow-hidden bg-gradient-to-br from-slate-50 to-white",
        className
      )}
    >
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[10%] left-[10%] w-[600px] h-[600px] bg-slate-100/50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Column: Text Content */}
          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {badge && (
              <motion.div variants={itemVariants} className="mb-6">
                <Badge
                  variant="outline"
                  className="bg-primary/10 text-primary border-primary/30 px-4 py-1 text-sm font-medium"
                >
                  {badge}
                </Badge>
              </motion.div>
            )}
            <motion.h1
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1]"
              variants={itemVariants}
            >
              {title}
            </motion.h1>
            <motion.p
              className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg text-slate-600 leading-relaxed"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
              variants={itemVariants}
            >
              {actions.map((action, index) =>
                action.href ? (
                  <Button
                    key={index}
                    variant={action.variant ?? "default"}
                    size="xl"
                    className={cn("font-semibold shadow-lg shadow-primary/20", action.className)}
                    asChild
                  >
                    <Link
                      href={action.href}
                      {...(action.href.startsWith("http") && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                      className="inline-flex items-center gap-2"
                    >
                      {action.text}
                      {action.icon}
                    </Link>
                  </Button>
                ) : (
                  <Button
                    key={index}
                    variant={action.variant ?? "default"}
                    size="xl"
                    className={action.className}
                    onClick={action.onClick}
                  >
                    {action.text}
                    {action.icon}
                  </Button>
                )
              )}
            </motion.div>
            <motion.div
              className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-6 sm:gap-8 border-t border-slate-200 pt-6 sm:pt-8 lg:justify-start"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-slate-900">{stat.value}</p>
                    <p className="text-sm text-slate-500">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Image Collage */}
          <motion.div
            className="relative h-[320px] w-full min-w-0 sm:h-[420px] lg:h-[480px]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Elementos decorativos flutuantes */}
            <motion.div
              className="absolute -top-4 left-1/4 h-16 w-16 rounded-full bg-primary/30"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 right-1/4 h-12 w-12 rounded-lg bg-primary/15"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />

            {/* Imagem 1 — maior, topo-direita */}
            <motion.div
              className="absolute right-0 top-0 w-[88%] rounded-2xl bg-white p-2 shadow-2xl border border-slate-100"
              variants={imageVariants}
            >
              <img
                src={images[0]}
                alt="Dashboard CRPRO"
                className="w-full rounded-xl object-cover object-top"
                style={{ aspectRatio: "16/9" }}
              />
            </motion.div>

            {/* Imagem 2 — menor, sobreposta embaixo-esquerda */}
            <motion.div
              className="absolute bottom-0 left-0 w-[55%] rounded-2xl bg-white p-2 shadow-2xl border border-slate-100"
              style={{ transformOrigin: "top right" }}
              variants={imageVariants}
            >
              <img
                src={images[1]}
                alt="Dashboard MetricsIA"
                className="w-full rounded-xl object-cover object-top"
                style={{ aspectRatio: "16/9" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
