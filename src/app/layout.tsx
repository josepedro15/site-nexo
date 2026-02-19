import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Nexo Aceleradora | Aceleradora de Vendas B2B e B2C",
  description:
    "Não somos agência. Engenharia comercial completa: Aquisição, IA no WhatsApp, CRM e Treinamento. R$ 700M+ em vendas geradas. Do anúncio ao caixa.",
  keywords: ["aceleradora de vendas", "aquisição", "IA WhatsApp", "CRM", "treinamento comercial", "ROI vendas"],
  authors: [{ name: "Nexo Aceleradora" }],
  openGraph: {
    title: "Nexo Aceleradora | Aceleradora de Vendas",
    description: "Do anúncio ao caixa. Tecnologia + expertize humana para gerar ROI real e previsível.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>
        <Header />
        <main id="main-content" role="main">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
