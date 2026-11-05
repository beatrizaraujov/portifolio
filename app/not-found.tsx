import type { Metadata } from "next";
import Link from "next/link";

import { Arrow } from "./components/ui/ExternalLink";

export const metadata: Metadata = { title: "Página não encontrada" };

export default function NotFound() {
  return (
    <section className="page py-20 lg:py-32">
      <p className="tag">Erro 404</p>
      <h1 className="mega-md mt-6 max-w-[10em]">Página não encontrada</h1>
      <p className="mt-8 max-w-md text-lg">
        O endereço pode ter sido alterado ou digitado incorretamente.
      </p>
      <Link href="/" className="link mt-8">
        <Arrow direction="left" />
        Voltar ao início
      </Link>
    </section>
  );
}
