# Beatriz Araújo — Portfólio

Site pessoal de apresentação profissional, construído como projeto de
engenharia: projetos desenvolvidos, processo de trabalho e trajetória.

**Aplicação em produção:** https://portifolio-one-coral-93.vercel.app/

---

## Visão geral

Este repositório não hospeda apenas uma vitrine visual. Ele serve como
validação prática das arquiteturas que aplico em soluções para clientes reais
por meio da Betrix — do tratamento de dados no servidor à experiência de quem
preenche um formulário e precisa saber que a mensagem chegou.

As três rotas de conteúdo são geradas estaticamente em tempo de build; apenas o
envio do formulário é processado sob demanda.

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

- **TypeScript em todo o projeto**, com os dados dos projetos tipados na origem
  (`app/content/site.ts`) e consumidos a partir de um contrato único.
- **Imagens com dimensões declaradas** e `sizes` definido por breakpoint,
  evitando deslocamento de layout durante o carregamento.
- **Fontes servidas localmente** via `next/font`, sem requisição a terceiros e
  sem bloqueio de renderização.
- **Design sistêmico.** Cores, tipografia, espaçamento e componentes
  recorrentes são tokens em `app/globals.css`. A estética minimalista prioriza
  hierarquia visual e legibilidade da informação.

### Acessibilidade

Link para pular ao conteúdo, navegação por teclado no menu móvel (`Escape`
fecha, o fundo não rola), estados de foco visíveis, `aria-current` na rota
ativa e texto alternativo descritivo em todas as imagens.

### SEO

Metadados por rota, Open Graph e Twitter Card, `sitemap.ts` e `robots.ts`
gerados pela aplicação, e página 404 própria.

---

## Arquitetura

```
app/
├── content/site.ts        # identidade, navegação, links e dados dos projetos
├── components/
│   ├── layout/            # Navbar e Footer
│   └── home/              # seções da página inicial
├── expertise/             # rota /expertise ("Sobre")
├── metodologia/           # rota /metodologia ("Processo")
├── api/send/route.ts      # processamento do formulário de contato
└── globals.css            # tokens de design e classes reutilizáveis
```

O texto de cada seção permanece no próprio componente. O conteúdo reaproveitado
em mais de um lugar é centralizado em `app/content/site.ts`, de modo que
atualizar um projeto ou um link exige alterar um único arquivo.

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
