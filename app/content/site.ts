/** Identidade, navegação e canais de contato: fonte única para o site e o currículo. */

export const site = {
  name: "Beatriz Araújo",
  fullName: "Maria Beatriz de Araújo Viana",
  role: "Desenvolvedora Full Stack Júnior",
  location: "Pará, Brasil",
  email: "vianabeatricx@gmail.com",
  /** Usado em metadataBase, sitemap e robots. Defina NEXT_PUBLIC_SITE_URL ao adotar domínio próprio. */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://portifolio-one-coral-93.vercel.app",
  description:
    "Desenvolvedora Full Stack Júnior. Participo do desenvolvimento de sistemas de ponta a ponta: interfaces, regras de negócio, APIs, bancos de dados, autenticação e testes.",
} as const;

export const navigation = [
  { label: "Trabalho", href: "/#trabalho" },
  { label: "Trajetória", href: "/#trajetoria" },
  { label: "Ensino", href: "/#ensino" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
] as const;

export const socials = {
  github: "https://github.com/beatrizaraujov",
  githubHandle: "beatrizaraujov",
  linkedin: "https://www.linkedin.com/in/beatriz-ara%C3%BAjo-386976270/",
  whatsapp:
    "https://wa.me/5591989285474?text=Ol%C3%A1%2C%20Beatriz.%20Cheguei%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.",
  curriculo: "/curriculo-maria-beatriz-araujo-viana.pdf",
} as const;

/**
 * As camadas de um sistema: o elemento gráfico central do site.
 * Cada projeto e experiência declara em quais delas houve atuação real.
 */
export const layers = [
  {
    id: "interface",
    label: "Interface",
    detail: "Telas responsivas, acessíveis e coerentes com o fluxo de uso.",
  },
  {
    id: "regras",
    label: "Regras de negócio",
    detail: "A lógica que o produto precisa garantir, em cada fluxo.",
  },
  {
    id: "apis",
    label: "APIs e integrações",
    detail: "Contratos entre serviços, integrações e automações.",
  },
  {
    id: "dados",
    label: "Banco de dados",
    detail: "Modelagem, consultas e integração com a aplicação.",
  },
  {
    id: "seguranca",
    label: "Autenticação e segurança",
    detail: "Controle de acesso, análise de segurança e auditorias técnicas.",
  },
  {
    id: "qualidade",
    label: "Testes e qualidade",
    detail: "Testes automatizados, validações e investigação de falhas.",
  },
] as const;

export type LayerId = (typeof layers)[number]["id"];
