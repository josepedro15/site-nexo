import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso | Nexo Aceleradora",
  description: "Termos de uso do site e serviços da Nexo Aceleradora.",
  robots: { index: true, follow: true },
};

export default function TermosPage() {
  return (
    <div className="section-container py-16 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex text-sm text-slate-600 hover:text-primary mb-8 transition-colors"
        >
          ← Voltar ao início
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
          Termos de Uso
        </h1>
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p className="text-sm text-slate-500">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>
          <p>
            Bem-vindo ao site da Nexo Aceleradora. Ao acessar e utilizar este site, você concorda
            com os seguintes termos e condições.
          </p>
          <h2 className="text-xl font-semibold text-slate-900 mt-8">1. Aceitação dos Termos</h2>
          <p>
            O uso deste site constitui aceitação integral dos presentes Termos de Uso. Se você não
            concorda com qualquer disposição, solicitamos que não utilize nossos serviços.
          </p>
          <h2 className="text-xl font-semibold text-slate-900 mt-8">2. Serviços</h2>
          <p>
            A Nexo Aceleradora oferece consultoria e soluções em engenharia comercial, incluindo
            aquisição, IA no WhatsApp, CRM e treinamento. Os detalhes dos serviços são definidos
            em contrato específico com cada cliente.
          </p>
          <h2 className="text-xl font-semibold text-slate-900 mt-8">3. Uso Aceitável</h2>
          <p>
            Você concorda em utilizar este site apenas para fins legais e de maneira que não
            prejudique, desabilite ou sobrecarregue o serviço. É proibido o uso para atividades
            ilegais ou não autorizadas.
          </p>
          <h2 className="text-xl font-semibold text-slate-900 mt-8">4. Contato</h2>
          <p>
            Para dúvidas sobre estes Termos de Uso, entre em contato através do formulário disponível
            em nossa página de contato ou pelo WhatsApp informado no site.
          </p>
        </div>
      </div>
    </div>
  );
}
