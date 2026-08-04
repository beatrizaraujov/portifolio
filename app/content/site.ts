/**
 * Identidade do site e conteúdo reaproveitado em mais de um lugar.
 * Texto que só existe dentro de uma seção fica junto do componente dela.
 */

export const site = {
  name: "Beatriz Araújo",
  role: "Desenvolvedora front-end",
  email: "vianabeatricx@gmail.com",
  /** Usado no metadataBase e no sitemap. Ajuste ao publicar em domínio próprio. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://beatrizaraujo.dev",
} as const;

export const navigation = [
  { label: "Projetos", href: "/" },
  { label: "Sobre", href: "/expertise" },
  { label: "Processo", href: "/metodologia" },
] as const;

export const socials = {
  github: "https://github.com/beatrizaraujov",
  linkedin: "https://www.linkedin.com/in/beatriz-ara%C3%BAjo-386976270/",
  whatsapp:
    "https://wa.me/5591989285474?text=Ol%C3%A1%2C%20Beatriz.%20Cheguei%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.",
  curriculo: "/curriculo-maria%20beatriz.pdf",
} as const;

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  tags: readonly string[];
  repo: string;
  image: { src: string; alt: string; width: number; height: number };
  /** Formato retrato (mockup de celular) muda o enquadramento na grade. */
  portrait?: boolean;
  breakdown: readonly { label: string; text: string }[];
};

export const projects: readonly Project[] = [
  {
    slug: "agroclimate",
    name: "AgroClimate Intelligence",
    tagline: "Painel de inteligência climática e agrícola",
    summary:
      "Consolida dados de APIs públicas de clima e produção agrícola em um único painel analítico, substituindo a consulta manual a múltiplas fontes por uma leitura integrada.",
    tags: ["Next.js", "TypeScript", "Tailwind", "APIs públicas"],
    repo: "https://github.com/beatrizaraujov/AgroClimate-Intelligence",
    image: {
      src: "/agroclimate-hero.png",
      alt: "Painel do AgroClimate Intelligence com gráficos de clima e produção",
      width: 1200,
      height: 800,
    },
    breakdown: [
      {
        label: "Problema",
        text: "Os dados são públicos, porém fragmentados entre fontes distintas e formatos pouco legíveis para análise.",
      },
      {
        label: "Decisão",
        text: "Painel unificado, com os indicadores críticos em destaque e o detalhamento acessível logo abaixo.",
      },
      {
        label: "Técnica",
        text: "Busca de dados no servidor com Next.js, de modo que a visualização chega renderizada já na primeira exibição.",
      },
      {
        label: "Resultado",
        text: "A consulta a diversas fontes foi reduzida a uma única leitura consolidada.",
      },
    ],
  },
  {
    slug: "finanly",
    name: "Finanly",
    tagline: "Gestão financeira para profissionais autônomos",
    summary:
      "Registro de receitas e despesas com saldo consolidado em tempo real. Concebido para uso móvel, no ritmo de quem administra o próprio negócio durante o expediente.",
    tags: ["React", "Supabase", "Mobile"],
    repo: "https://github.com/beatrizaraujov/Finanly",
    image: {
      src: "/finanly.png",
      alt: "Telas do aplicativo Finanly em um celular",
      width: 900,
      height: 1900,
    },
    portrait: true,
    breakdown: [
      {
        label: "Problema",
        text: "Profissionais autônomos registram movimentações em anotações dispersas, o que compromete o fechamento do mês.",
      },
      {
        label: "Decisão",
        text: "Centralizar as movimentações em um único fluxo, com lançamento em três toques e saldo permanentemente visível.",
      },
      {
        label: "Técnica",
        text: "Supabase para persistência e autenticação, dispensando a manutenção de um back-end dedicado.",
      },
      {
        label: "Resultado",
        text: "Fluxo de caixa disponível para consulta a qualquer momento, diretamente do celular.",
      },
    ],
  },
];
