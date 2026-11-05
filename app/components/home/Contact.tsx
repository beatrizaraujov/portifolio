"use client";

import { useState, type FormEvent } from "react";

import { site, socials } from "@/app/content/site";
import { ExternalLink } from "@/app/components/ui/ExternalLink";
import SectionHead from "@/app/components/ui/SectionHead";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent"; nome: string }
  | { kind: "error"; message: string };

const genericError =
  "Não foi possível enviar a mensagem. Tente novamente ou utilize o e-mail acima.";

export default function Contact() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const dados = Object.fromEntries(new FormData(form));

    setStatus({ kind: "sending" });

    try {
      const resposta = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });

      if (!resposta.ok) {
        const corpo = await resposta.json().catch(() => null);
        throw new Error(corpo?.error ?? genericError);
      }

      form.reset();
      setStatus({ kind: "sent", nome: String(dados.nome ?? "") });
    } catch (erro) {
      setStatus({
        kind: "error",
        message:
          erro instanceof TypeError || !(erro instanceof Error)
            ? genericError
            : erro.message,
      });
    }
  }

  const enviando = status.kind === "sending";

  return (
    <section id="contato" className="page mt-section pb-[var(--space-section)]">
      <SectionHead number="06" title="Contato" />

      <div className="panel panel-pad fx-up cols mt-head items-start">
        <div className="lg:col-span-5">
          <a
            href={`mailto:${site.email}`}
            className="title block break-words italic transition-colors hover:text-accent"
          >
            {site.email}
          </a>
          <p className="lede mt-group max-w-md">
            Para oportunidades em desenvolvimento, projetos independentes ou
            convites para ensino e palestras.
          </p>

          <ul className="mt-group flex flex-col items-start gap-2.5">
            <li>
              <ExternalLink href={socials.linkedin}>LinkedIn</ExternalLink>
            </li>
            <li>
              <ExternalLink href={socials.github}>
                GitHub: {socials.githubHandle}
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={socials.whatsapp}>WhatsApp</ExternalLink>
            </li>
            <li>
              <ExternalLink href={socials.curriculo}>
                Currículo em PDF
              </ExternalLink>
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          aria-label="Formulário de contato"
          className="flex flex-col gap-7 lg:col-span-6 lg:col-start-7"
        >
          <div>
            <label htmlFor="nome" className="meta block">
              Nome
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              required
              maxLength={120}
              autoComplete="name"
              disabled={enviando}
              className="field"
            />
          </div>

          <div>
            <label htmlFor="email" className="meta block">
              E-mail para retorno
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={200}
              autoComplete="email"
              disabled={enviando}
              className="field"
            />
          </div>

          <div>
            <label htmlFor="mensagem" className="meta block">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={5}
              required
              maxLength={4000}
              disabled={enviando}
              className="field resize-y"
            />
          </div>

          {/* Campo isca para automação: invisível e fora da ordem de tabulação. */}
          <div aria-hidden className="hidden">
            <label htmlFor="website">Não preencha este campo</label>
            <input id="website" name="website" type="text" tabIndex={-1} />
          </div>

          <div className="flex flex-col items-start gap-4">
            <button type="submit" disabled={enviando} className="submit">
              {enviando ? "Enviando…" : "Enviar mensagem"}
            </button>

            <p role="status" aria-live="polite" className="min-h-6 text-[0.9375rem]">
              {status.kind === "sent"
                ? `Mensagem recebida, ${status.nome.trim().split(" ")[0]}. Retornarei pelo e-mail informado.`
                : null}
              {status.kind === "error" ? status.message : null}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
