import type { LayerId } from "./site";

export type Experience = {
  organization: string;
  title: string;
  period: string;
  place?: string;
  weight: "principal" | "secundaria";
  text: string;
  layers: readonly LayerId[];
  /** Agrupamentos de atuação, usados apenas na experiência principal. */
  scope?: readonly { label: string; text: string }[];
};

/** Ordem narrativa: da experiência mais antiga à atuação atual. */
export const experiences: readonly Experience[] = [
  {
    organization: "K tech",
    title: "Suporte de TI e Desenvolvedora Web",
    period: "08/2024 a 02/2025",
    place: "Capanema, PA",
    weight: "secundaria",
    text: "Desenvolvimento e otimização de páginas web responsivas, além de manutenção preventiva e corretiva e diagnóstico de falhas técnicas.",
    layers: ["interface"],
  },
  {
    organization: "Hostgreen",
    title: "Analista de Operações Jr.",
    period: "02/2025 a 03/2026",
    place: "Capanema, PA",
    weight: "secundaria",
    text: "Documentação técnica de funcionalidades, análise de fluxos operacionais e comunicação entre usuários, clientes e desenvolvedores. Nesse período, construí minha base de desenvolvimento junto à equipe de tecnologia.",
    layers: [],
  },
  {
    organization: "Hougmain",
    title: "Desenvolvedora Full Stack",
    period: "Atual",
    weight: "principal",
    text: "Participo do desenvolvimento de sistemas de ponta a ponta, em produtos como NR-1 e iBaby Coach.",
    layers: ["interface", "regras", "apis", "dados", "seguranca", "qualidade"],
    scope: [
      {
        label: "Produto",
        text: "Funcionalidades e fluxos completos, regras de negócio e participação em decisões de arquitetura e na evolução dos produtos.",
      },
      {
        label: "Sistema",
        text: "React, Next.js, JavaScript e TypeScript; desenvolvimento e integração de APIs; modelagem, consultas e integração com bancos de dados; autenticação e autorização; automações e integração entre serviços.",
      },
      {
        label: "Qualidade",
        text: "Testes automatizados e validações, análise de segurança e auditorias técnicas, investigação de problemas e manutenção, correção e melhoria de aplicações existentes.",
      },
    ],
  },
  {
    organization: "Projetos independentes",
    title: "Desenvolvedora",
    period: "Independente",
    weight: "secundaria",
    text: "Projetos próprios e desenvolvimento para cliente, com responsabilidade direta pela entrega.",
    layers: ["interface", "regras", "apis", "dados", "seguranca", "qualidade"],
  },
];

export const teaching = {
  course: "Introdução à Linguagem de Programação Python",
  role: "Ministrante convidada",
  institution: "Universidade Federal do Pará (UFPA)",
  program: "Minervas em STEM",
  place: "Campus Universitário de Salinópolis",
  period: "27 a 29 de outubro de 2026",
  text: "Fui convidada a ministrar o minicurso e respondi pelo planejamento do conteúdo, pelas apresentações, pelos exercícios práticos e pela condução das aulas, voltadas a estudantes iniciantes.",
  topics: [
    "Lógica de programação",
    "Variáveis",
    "Operações",
    "Condicionais",
    "Estruturas de repetição",
  ],
  /** Preencha quando o documento estiver disponível: { src, alt, width, height }. */
  certificate: null as {
    src: string;
    alt: string;
    width: number;
    height: number;
  } | null,
} as const;

/** Fotos reais do minicurso; os recortes ficam em public/fotos. */
export const photos = {
  portrait: {
    src: "/fotos/beatriz-retrato.webp",
    alt: "Beatriz Araújo em aula, em pé diante da projeção do slide, com blusa preta e cabelos cacheados.",
    width: 1024,
    height: 1280,
  },
  classroom: {
    src: "/fotos/ufpa-sala.webp",
    alt: "Sala escurecida, com estudantes de costas diante dos computadores. Beatriz Araújo fala em pé ao lado do slide projetado com a pergunta: O que é programar?",
    width: 1200,
    height: 800,
  },
  lesson: {
    src: "/fotos/ufpa-aula.webp",
    alt: "Beatriz Araújo à frente do slide da aula 2 de 3 do minicurso de Python, com o título Decisões e repetição.",
    width: 987,
    height: 658,
  },
} as const;

export const education = {
  degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
  institution: "Estácio",
  place: "Capanema, PA",
  period: "Conclusão em 06/2025",
  courses: [
    "Formação Web Front-end Completo",
    "Algoritmos e Lógica de Programação",
    "Acessibilidade Web: práticas recomendadas e WCAG",
  ],
} as const;

export const techContexts = [
  {
    context: "Front-end",
    usage: "Interfaces de produto, painéis e sites institucionais.",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Styled Components",
      "Vite",
      "TanStack Query",
      "Zustand",
      "Recharts",
    ],
  },
  {
    context: "Back-end",
    usage: "APIs, regras de negócio, autenticação e integração entre serviços.",
    items: [
      "Node.js",
      "Next.js Route Handlers",
      "APIs REST",
      "JWT",
      "Controle de acesso",
    ],
  },
  {
    context: "Banco de dados",
    usage: "Modelagem, consultas e persistência das aplicações.",
    items: ["PostgreSQL", "Supabase"],
  },
  {
    context: "Infraestrutura e ferramentas",
    usage: "Versionamento, publicação, automação e trabalho com design.",
    items: ["Git", "GitHub", "GitHub Actions", "Vercel", "n8n", "Figma"],
  },
  {
    context: "Testes e qualidade",
    usage: "Validação automatizada, medição e auditoria técnica.",
    items: ["Vitest", "ESLint", "Lighthouse", "Core Web Vitals", "WCAG"],
  },
  {
    context: "Ensino",
    usage: "Linguagem do minicurso ministrado na UFPA.",
    items: ["Python"],
  },
] as const;
