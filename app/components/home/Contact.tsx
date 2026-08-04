"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, TriangleAlert } from "lucide-react";

import { site, socials } from "@/app/content/site";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent"; nome: string }
  | { kind: "error"; message: string };

const campoClasses =
  "w-full rounded-xl border border-white/8 bg-ink-950 px-4 py-3 text-sm text-chalk transition-colors placeholder:text-faint/60 focus:border-accent-400/60 focus:outline-none disabled:opacity-50";

export default function Contact() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const dados = Object.fromEntries(new FormData(form));
    const nome = String(dados.nome ?? "");

    setStatus({ kind: "sending" });

    try {
      const resposta = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });

      if (!resposta.ok) {
        const corpo = await resposta.json().catch(() => null);
        throw new Error(corpo?.error ?? "Não foi possível enviar a mensagem.");
      }

      form.reset();
      setStatus({ kind: "sent", nome });
    } catch (erro) {
      setStatus({
        kind: "error",
        message:
          erro instanceof Error
            ? erro.message
            : "Não foi possível enviar a mensagem.",
      });
    }
  }

  const enviando = status.kind === "sending";

  return (
    <section id="contato" className="section border-t border-white/5">
      <div className="shell grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-24">
        <div>
          <p className="eyebrow">Contato</p>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
            Vamos conversar sobre o próximo projeto.
          </h2>

          <p className="mt-6 max-w-md text-lg leading-relaxed">
            Estou aberta a oportunidades em desenvolvimento front-end, projetos
            de integração com APIs e reestruturação de bases de código já
            existentes. Leio todas as mensagens e retorno em até um dia útil.
          </p>

          <div className="mt-10 flex flex-col gap-3">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex w-fit items-center gap-2 text-xl font-medium text-accent-300 transition-colors hover:text-accent-100 md:text-2xl"
            >
              {site.email}
              <ArrowUpRight
                size={20}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href={socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-sm text-faint transition-colors hover:text-chalk"
            >
              Disponível também no WhatsApp
            </a>
          </div>
        </div>

        <div className="card p-8 md:p-10">
          <h3 className="text-xl font-semibold">Envie uma mensagem</h3>
          <p className="mt-2 text-sm text-faint">
            Um resumo objetivo é suficiente — retorno com as perguntas
            necessárias.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="nome" className="font-mono text-xs text-faint">
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
                placeholder="Seu nome completo"
                className={campoClasses}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-mono text-xs text-faint">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={200}
                autoComplete="email"
                disabled={enviando}
                placeholder="E-mail para retorno"
                className={campoClasses}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="mensagem" className="font-mono text-xs text-faint">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={5}
                required
                maxLength={4000}
                disabled={enviando}
                placeholder="Descreva brevemente a oportunidade ou o projeto"
                className={`${campoClasses} resize-none`}
              />
            </div>

            {/* Isca para robô de spam: invisível e fora da ordem de tabulação. */}
            <div aria-hidden className="hidden">
              <label htmlFor="website">Não preencha este campo</label>
              <input id="website" name="website" type="text" tabIndex={-1} />
            </div>

            <button
              type="submit"
              disabled={enviando}
              className="btn btn-primary mt-1 w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {enviando ? "Enviando…" : "Enviar"}
            </button>

            <p role="status" aria-live="polite" className="min-h-5 text-sm">
              {status.kind === "sent" && (
                <span className="inline-flex items-center gap-2 text-accent-300">
                  <Check size={15} />
                  Mensagem recebida, {status.nome.split(" ")[0]}. Retorno em
                  breve.
                </span>
              )}
              {status.kind === "error" && (
                <span className="inline-flex items-center gap-2 text-ember">
                  <TriangleAlert size={15} />
                  {status.message}
                </span>
              )}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
