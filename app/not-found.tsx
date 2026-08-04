import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section">
      <div className="shell">
        <div className="max-w-xl">
          <p className="eyebrow">Erro 404</p>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
            Página não encontrada.
          </h1>

          <p className="mt-6 leading-relaxed">
            O endereço pode ter mudado ou o link estar incorreto. Em ambos os
            casos, o caminho de retorno é o mesmo.
          </p>

          <Link href="/" className="btn btn-ghost mt-10">
            <ArrowLeft size={16} />
            Voltar ao início
          </Link>
        </div>
      </div>
    </section>
  );
}
