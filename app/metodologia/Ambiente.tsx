import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ambiente = [
  { papel: "Editor", ferramenta: "Neovim / Terminal" },
  { papel: "Framework", ferramenta: "Next.js" },
  { papel: "Banco", ferramenta: "PostgreSQL / Supabase" },
  { papel: "Deploy", ferramenta: "Vercel" },
  { papel: "Design", ferramenta: "Figma" },
  { papel: "Automação", ferramenta: "n8n" },
];

export default function Ambiente() {
  return (
    <section className="section border-t border-white/5">
      <div className="shell">
        <p className="eyebrow">Ambiente</p>

        <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
          Ambiente de desenvolvimento
        </h2>

        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-white/8 bg-white/8 md:grid-cols-3 lg:grid-cols-6">
          {ambiente.map((item) => (
            <div
              key={item.papel}
              className="flex flex-col gap-2 bg-ink-900 p-6 text-center"
            >
              <dt className="font-mono text-[11px] text-faint">{item.papel}</dt>
              <dd className="text-sm font-medium text-chalk">
                {item.ferramenta}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-20 flex flex-col items-start gap-6 rounded-panel border border-white/8 bg-white/2 p-10 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Esse processo faz sentido para o seu time?
            </h3>
            <p className="mt-3 max-w-md leading-relaxed">
              Envie uma mensagem com o contexto do projeto e retorno com as
              próximas questões.
            </p>
          </div>

          <Link href="/#contato" className="btn btn-primary shrink-0">
            Entrar em contato
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
