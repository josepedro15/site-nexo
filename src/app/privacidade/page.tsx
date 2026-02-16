import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | Nexo Aceleradora",
  description: "Política de privacidade e proteção de dados da Nexo Aceleradora.",
  robots: { index: true, follow: true },
};

export default function PrivacidadePage() {
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
          Política de Privacidade
        </h1>
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p className="text-sm text-slate-500">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>
          <p>
            A Nexo Aceleradora está comprometida com a proteção dos seus dados pessoais. Esta
            política descreve como coletamos, usamos e protegemos suas informações.
          </p>
          <h2 className="text-xl font-semibold text-slate-900 mt-8">1. Dados que Coletamos</h2>
          <p>
            Podemos coletar informações que você fornece voluntariamente ao preencher formulários,
            como nome, e-mail, telefone, nome da empresa e mensagens. Também coletamos dados de
            navegação através de cookies e tecnologias similares.
          </p>
          <h2 className="text-xl font-semibold text-slate-900 mt-8">2. Finalidade do Uso</h2>
          <p>
            Utilizamos seus dados para responder a solicitações de contato, enviar informações
            sobre nossos serviços e melhorar a experiência no site. Seus dados podem ser enviados
            via WhatsApp quando você utiliza o formulário de contato.
          </p>
          <h2 className="text-xl font-semibold text-slate-900 mt-8">3. Compartilhamento</h2>
          <p>
            Não vendemos ou alugamos seus dados pessoais. Podemos compartilhar informações apenas
            quando necessário para prestação dos serviços ou por determinação legal.
          </p>
          <h2 className="text-xl font-semibold text-slate-900 mt-8">4. LGPD</h2>
          <p>
            Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você tem direito de
            acessar, corrigir, excluir ou portar seus dados. Para exercer esses direitos, entre
            em contato conosco.
          </p>
          <h2 className="text-xl font-semibold text-slate-900 mt-8">5. Contato</h2>
          <p>
            Para dúvidas sobre esta Política de Privacidade, utilize o canal de contato disponível
            em nosso site.
          </p>
        </div>
      </div>
    </div>
  );
}
