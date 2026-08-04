import { NextResponse } from "next/server";
import { Resend } from "resend";

import { site } from "@/app/content/site";

const LIMITS = {
  nome: 120,
  email: 200,
  mensagem: 4000,
} as const;

/** Escapa o que veio do formulário antes de colar no HTML do e-mail. */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function parseBody(body: unknown) {
  if (typeof body !== "object" || body === null) return null;

  const { nome, email, mensagem, website } = body as Record<string, unknown>;

  // Campo isca: só um robô preenche. Devolvemos sucesso para não dar pista.
  if (typeof website === "string" && website.trim() !== "") {
    return "honeypot" as const;
  }

  if (
    typeof nome !== "string" ||
    typeof email !== "string" ||
    typeof mensagem !== "string"
  ) {
    return null;
  }

  const parsed = {
    nome: nome.trim(),
    email: email.trim(),
    mensagem: mensagem.trim(),
  };

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(parsed.email);

  if (
    !parsed.nome ||
    !parsed.mensagem ||
    !emailValido ||
    parsed.nome.length > LIMITS.nome ||
    parsed.email.length > LIMITS.email ||
    parsed.mensagem.length > LIMITS.mensagem
  ) {
    return null;
  }

  return parsed;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("[contato] RESEND_API_KEY não configurada.");
    return NextResponse.json(
      { error: "Serviço de e-mail indisponível." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Corpo inválido." }, { status: 400 });
  }

  const parsed = parseBody(body);

  if (parsed === "honeypot") {
    return NextResponse.json({ ok: true });
  }

  if (!parsed) {
    return NextResponse.json(
      { error: "Preencha o nome, um e-mail válido e a mensagem." },
      { status: 400 },
    );
  }

  const { nome, email, mensagem } = parsed;

  const { error } = await new Resend(apiKey).emails.send({
    from: "Portfólio <onboarding@resend.dev>",
    to: [site.email],
    replyTo: email,
    subject: `Contato pelo portfólio — ${nome}`,
    text: `Nome: ${nome}\nE-mail: ${email}\n\n${mensagem}`,
    html: `
      <div style="font-family: system-ui, sans-serif; color: #18181b; line-height: 1.6;">
        <h2 style="margin: 0 0 16px;">Nova mensagem pelo portfólio</h2>
        <p style="margin: 0;"><strong>Nome:</strong> ${escapeHtml(nome)}</p>
        <p style="margin: 0 0 16px;"><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        <div style="background: #f4f4f5; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${escapeHtml(
          mensagem,
        )}</div>
      </div>
    `,
  });

  if (error) {
    console.error("[contato] falha ao enviar e-mail:", error);
    return NextResponse.json(
      { error: "Não foi possível enviar agora. Tente novamente em instantes." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
