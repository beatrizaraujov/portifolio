# Beatriz Araújo — Portfólio

Site pessoal de apresentação profissional, construído como projeto de
engenharia: projetos desenvolvidos, processo de trabalho e trajetória.

**Aplicação em produção:** https://portifolio-one-coral-93.vercel.app/

---

## Visão geral

Portfólio profissional de Maria Beatriz de Araújo Viana, Desenvolvedora Full
Stack. A página inicial apresenta os projetos, a trajetória,
a atuação em ensino, as tecnologias por contexto de uso e os canais de contato.
Os projetos públicos possuem páginas próprias. Os produtos da Hougmain são
apresentados apenas em descrição geral, sem telas ou dados internos.

Todas as páginas de conteúdo são geradas estaticamente em tempo de build; apenas
o envio do formulário é processado sob demanda.

---

## Decisões de engenharia

### Formulário de contato com Route Handler e Resend

O envio não depende de serviços de formulário de terceiros. A submissão é
processada por um Route Handler próprio (`app/api/send/route.ts`), o que mantém
a credencial de e-mail no servidor e concentra as regras de aceitação em um
único ponto:

- **Validação no servidor.** Tipos, formato de e-mail e limites de tamanho
  (120/200/4000 caracteres) são verificados antes de qualquer chamada externa.
  A validação do navegador é conveniência, não garantia.
- **Proteção contra automação.** Campo isca fora da ordem de tabulação e oculto
  de leitores de tela. Quando preenchido, a requisição recebe resposta de
  sucesso sem disparar e-mail — nenhum sinal é devolvido ao robô.
- **Escape de HTML.** O conteúdo submetido é escapado antes de compor o corpo
  do e-mail, eliminando injeção de marcação na caixa de entrada.
- **Degradação previsível.** Sem `RESEND_API_KEY` configurada, o site opera
  normalmente e apenas o endpoint responde 503 — a ausência de credencial não
  derruba a aplicação.
- **`replyTo` no remetente original**, para que a resposta parta direto da
  caixa de entrada.

### Estado e retorno ao usuário

O estado do envio é modelado como união discriminada
(`idle | sending | sent | error`), o que torna os quatro cenários exaustivos e
impede combinações inválidas. O retorno é apresentado em região `aria-live`
com altura reservada: o usuário recebe confirmação ou erro sem que o layout
se desloque, e leitores de tela anunciam a mudança.

### Interface e performance

- **Direção visual.** Linhas de percurso sobre preto, cinza e azul-marinho. Cada
  projeto público tem uma linha própria. Tokens definidos em `app/globals.css`.
- **Mapa de percursos.** Componente `FlowMap`: cada linha acompanha uma ação real
  de um projeto (`app/content/flows.ts`), atravessando as camadas do sistema, com
  controles de pausa e avanço e equivalente textual para leitores de tela.
- **Trilhas de camadas.** Componentes em `Route.tsx`: cada projeto e experiência
  declara as camadas em que houve participação, e a trilha é derivada desses dados.
- **Imagens.** Capturas reais dos sistemas publicados, em WebP, com dimensões
  declaradas e `sizes` por breakpoint.
- **Fontes servidas localmente** via `next/font`: Bricolage Grotesque e JetBrains Mono.

### Acessibilidade

Link para pular ao conteúdo, navegação por teclado no menu móvel (`Escape`
fecha), estados de foco visíveis, hierarquia de títulos consistente e texto
alternativo descritivo em todas as imagens.

### SEO

Metadados por rota, Open Graph e Twitter Card, `sitemap.ts` e `robots.ts`
gerados pela aplicação, e página 404 própria.

---

## Arquitetura

```
app/
├── content/               # fonte única: site.ts, projects.ts, career.ts e flows.ts
├── components/
│   ├── layout/            # Header e Footer
│   ├── home/              # seções da página inicial
│   └── ui/                # mapa, trilhas, molduras e links
├── projetos/[slug]/       # estudo de cada projeto público
├── curriculo/             # origem do PDF do currículo
├── api/send/route.ts      # processamento do formulário de contato
└── globals.css            # tokens de design e classes reutilizáveis
scripts/gerar-curriculo.mjs  # imprime /curriculo em PDF com o Chrome instalado
```

O site e o currículo consomem o mesmo conteúdo. Para publicar o certificado da
UFPA, preencha `teaching.certificate` em `app/content/career.ts`.

---

## Stack

| Camada        | Tecnologia                          |
| ------------- | ----------------------------------- |
| Framework     | Next.js 16 (App Router)             |
| Interface     | React 19                            |
| Tipagem       | TypeScript 5                        |
| Estilização   | Tailwind CSS 4 via PostCSS          |
| E-mail        | Resend                              |
| Padronização  | ESLint                              |
| Hospedagem    | Vercel                              |

---

## Execução local

```bash
npm install
npm run dev
```

O formulário de contato requer uma chave da [Resend](https://resend.com) em
`.env.local`:

```
RESEND_API_KEY=re_xxxxxxxx
```

Opcionalmente, para o domínio utilizado em `metadata`, `sitemap` e `robots`:

```
NEXT_PUBLIC_SITE_URL=https://seudominio.com
```

| Comando         | Descrição                   |
| --------------- | --------------------------- |
| `npm run dev`   | ambiente de desenvolvimento |
| `npm run build` | build de produção           |
| `npm start`     | executa o build de produção |
| `npm run lint`  | ESLint                      |
| `npm run typecheck` | verificação de tipos    |
| `npm run curriculo` | gera o PDF do currículo com o site em execução; use `CURRICULO_URL` para outra porta |
