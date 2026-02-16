import Link from "next/link";
import { Instagram, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL, SOCIAL } from "@/lib/constants";

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-neutral-950 border-t border-neutral-900 py-12 sm:py-16 text-slate-400 overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-12 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tighter text-white">
                Nexo
                <span className="text-primary">.</span>
              </span>
            </Link>
            <p className="max-w-xs text-slate-500 leading-relaxed">
              Aceleradora de Vendas focada em gerar ROI real através de tecnologia e capacitação humana.
            </p>
            <Button size="lg" className="mt-4 bg-primary hover:bg-primary/90 text-white" asChild>
              <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </Link>
            </Button>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-white mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
                { label: "Metodologia", href: "#metodologia" },
                { label: "Soluções", href: "#solucoes" },
                { label: "Resultados", href: "#resultados" },
                { label: "Quem Somos", href: "#sobre" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-white mb-6">Redes Sociais</h3>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: SOCIAL.instagram, label: "Instagram" },
                { Icon: Linkedin, href: SOCIAL.linkedin, label: "LinkedIn" },
                { Icon: Twitter, href: SOCIAL.twitter, label: "X (Twitter)" },
              ].map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-neutral-950"
                >
                  <Icon className="w-5 h-5" aria-hidden />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>
            © {new Date().getFullYear()} Nexo Aceleradora. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/termos" className="hover:text-white transition-colors focus:outline-none focus:underline">
              Termos de Uso
            </Link>
            <Link href="/privacidade" className="hover:text-white transition-colors focus:outline-none focus:underline">
              Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
