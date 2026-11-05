import type { LayerId } from "./site";

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type ProjectLink = { label: string; href: string };

/** Projetos públicos: possuem página própria, com capturas reais. */
export type Project = {
  slug: string;
  name: string;
  /** Cor da linha do projeto: a mesma no mapa de percursos e no palco. */
  color: "marinho" | "azul" | "aco";
  kind: string;
  summary: string;
  context: string;
  problem: string;
  role: string;
  solution: string;
  stack: readonly string[];
  decisions: readonly { title: string; text: string }[];
  status: string;
  links: readonly ProjectLink[];
  layers: readonly LayerId[];
  image: ProjectImage;
  /** Captura complementar exibida apenas na página do projeto. */
  detailImage?: ProjectImage;
  mobileImage?: ProjectImage;
};

/**
 * Produtos da Hougmain: somente descrição funcional geral.
 * Não recebem telas, dados, decisões técnicas específicas nem página própria.
 */
export type ConfidentialProject = {
  name: string;
  purpose: string;
  scope: string;
};

export const projects: readonly Project[] = [
  {
    slug: "agroclimate-intelligence",
    color: "marinho",
    name: "AgroClimate Intelligence",
    kind: "Projeto próprio, código aberto",
    summary:
      "Painel que cruza alertas de desmatamento do MapBiomas com estatísticas de produção agrícola do IBGE e calcula um índice de sustentabilidade por estado.",
    context:
      "Projeto próprio de código aberto, sob licença MIT, sobre dados ambientais e agrícolas do Brasil.",
    problem:
      "Os alertas do MapBiomas e as estatísticas do IBGE/SIDRA são públicos, mas estão em fontes separadas. Comparar pressão ambiental e produção por estado exigia cruzar os dados manualmente.",
    role: "Concepção, desenvolvimento e publicação: interface, integração com as APIs, cálculo do índice, testes e automação de integração contínua.",
    solution:
      "Mapa interativo do Brasil que refiltra o painel por estado, índice de sustentabilidade de 0 a 100, série histórica de produção de 2019 a 2024 e página de metodologia com fontes, fórmula e limitações.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Vitest",
      "GitHub Actions",
    ],
    decisions: [
      {
        title: "Índice calculado por intensidade",
        text: "Como a API devolve até 500 registros, uma fórmula baseada em contagem bruta saturaria em recortes grandes. A normalização pelo território mantém a comparação significativa.",
      },
      {
        title: "Contingência declarada na tela",
        text: "Sem dados ao vivo, o painel utiliza um snapshot e informa essa condição, em vez de calcular o índice sobre uma lista vazia.",
      },
      {
        title: "Credenciais restritas ao servidor",
        text: "O Route Handler renova o JWT do MapBiomas a partir do campo exp e expõe apenas uma consulta fixa, o que impede o uso da rota como proxy aberto.",
      },
      {
        title: "Cálculo isolado e testado",
        text: "O índice é uma função pura com testes, incluindo um caso de regressão para a saturação. Lint, tipos, testes e build são executados no CI a cada push.",
      },
    ],
    status:
      "Publicado, com código aberto. O índice é válido como comparação entre regiões dentro do mesmo snapshot, limitação registrada na própria interface.",
    links: [
      {
        label: "Acessar o projeto",
        href: "https://agro-climate-intelligence.vercel.app",
      },
      {
        label: "Ver repositório",
        href: "https://github.com/beatrizaraujov/AgroClimate-Intelligence",
      },
    ],
    layers: ["interface", "regras", "apis", "seguranca", "qualidade"],
    image: {
      src: "/projetos/agroclimate-dashboard.webp",
      alt: "Dashboard Principal, com indicadores de produção, distribuição por estado e histórico de safras.",
      width: 2000,
      height: 1389,
    },
    detailImage: {
      src: "/projetos/agroclimate-impacto.webp",
      alt: "Página Indicador de Impacto Agrícola, com aviso de dados de contingência, índice nacional e mapa do Brasil.",
      width: 2000,
      height: 1389,
      caption:
        "Quando a fonte está indisponível, um aviso informa que os alertas vêm do snapshot de contingência.",
    },
  },
  {
    slug: "celso-schmidt-advocacia",
    color: "aco",
    name: "Dr. Celso Schmidt",
    kind: "Trabalho independente para cliente",
    summary:
      "Site institucional de um escritório de advocacia empresarial em Capanema, no Pará.",
    context:
      "Trabalho independente, realizado para o Dr. Celso Ricardo Schmidt, consultor e advogado empresarial em Capanema (PA).",
    problem:
      "O escritório precisava apresentar sua atuação em advocacia empresarial com clareza e conduzir o visitante interessado até o agendamento de uma reunião.",
    role: "Desenvolvimento da interface, estruturação das páginas institucionais, organização de componentes e navegação, e entrega ao cliente.",
    solution:
      "Site responsivo que organiza a apresentação do advogado, as frentes de consultoria, as áreas de atuação e os canais de contato em uma navegação direta.",
    stack: ["Next.js", "React", "TypeScript/JavaScript", "Tailwind CSS"],
    decisions: [
      {
        title: "Conteúdo no HTML inicial",
        text: "Os textos já chegam no HTML inicial, e os metadados são direcionados à busca local por advocacia empresarial.",
      },
      {
        title: "Componentes reutilizáveis",
        text: "Serviços e etapas compartilham a mesma estrutura, sem duplicação de marcação.",
      },
      {
        title: "Composição própria para celular",
        text: "A hierarquia tipográfica e a chamada de agendamento são preservadas em telas pequenas.",
      },
    ],
    status: "Publicado e acessível no domínio do escritório.",
    links: [
      {
        label: "Acessar o site",
        href: "https://crschmidtadvocacia.com.br/",
      },
    ],
    layers: ["interface"],
    image: {
      src: "/projetos/schmidt-desktop.webp",
      alt: "Página inicial do site do Dr. Celso Ricardo Schmidt em tela de computador, com título, chamada de agendamento e retrato do advogado.",
      width: 2000,
      height: 1250,
    },
    mobileImage: {
      src: "/projetos/schmidt-mobile.webp",
      alt: "A mesma página inicial em tela de celular.",
      width: 780,
      height: 1688,
    },
  },
  {
    slug: "finanly",
    color: "azul",
    name: "Finanly",
    kind: "Projeto próprio, MVP",
    summary:
      "Aplicação mobile-first que reúne controle financeiro e agenda de encomendas, com autenticação e persistência de dados.",
    context:
      "MVP próprio de gestão financeira, com o código publicado no GitHub.",
    problem:
      "Quem administra o próprio negócio costuma registrar movimentações e encomendas em lugares diferentes, o que dificulta acompanhar o saldo e os compromissos.",
    role: "Desenvolvimento integral: interface, fluxos de transação, calendário de agendamentos e integração com o Supabase.",
    solution:
      "Painel com saldo, entradas e saídas, fluxo de nova transação em etapas, histórico e calendário de encomendas, projetados primeiro para o celular.",
    stack: ["React", "JavaScript", "Vite", "Tailwind CSS", "Supabase"],
    decisions: [
      {
        title: "Supabase para autenticação e persistência",
        text: "A escolha dispensou a manutenção de um back-end dedicado durante a validação do MVP.",
      },
      {
        title: "Fluxo de transação separado do painel",
        text: "A escolha do tipo e o preenchimento do formulário têm componentes próprios.",
      },
    ],
    status:
      "MVP publicado. O banco de dados utiliza plano gratuito e pode entrar em inatividade; o vídeo de demonstração registra a aplicação em uso.",
    links: [
      { label: "Acessar o projeto", href: "https://finanly-sigma.vercel.app" },
      {
        label: "Ver repositório",
        href: "https://github.com/beatrizaraujov/Finanly",
      },
      {
        label: "Assistir à demonstração",
        href: "https://www.linkedin.com/posts/beatriz-ara%C3%BAjo-386976270_desenvolvimentoweb-reactjs-frontend-ugcPost-7425147961191522304-JPD1/",
      },
    ],
    layers: ["interface", "regras", "dados", "seguranca"],
    image: {
      src: "/projetos/finanly-home.png",
      alt: "Tela inicial do Finanly em um celular, com saldo total, entradas, saídas, gráfico semanal e últimas transações.",
      width: 342,
      height: 749,
    },
  },
];

export const confidentialProjects: readonly ConfidentialProject[] = [
  {
    name: "NR-1",
    purpose: "Avaliação de riscos psicossociais no ambiente de trabalho.",
    scope:
      "Gestão, questionários, anonimato, controle de acesso e processamento de respostas.",
  },
];

/**
 * Solução desenvolvida como contratada da Hougmain. Somente texto: sem links,
 * telas, nome de cliente, números da operação ou dados internos.
 */
export const operationalSolution = {
  title: "Automação e Inteligência Operacional",
  summary:
    "Sistemas desenvolvidos como contratada da Hougmain para uma empresa de locação de escoramentos e andaimes. Parte da operação dependia de controles e consultas manuais; atuei no desenvolvimento Full Stack de duas ferramentas integradas, que digitalizam esses processos e dão visibilidade sobre os dados da operação.",
  route: ["Sistema de gestão da empresa", "Planejador Leve", "Dashboard"],
  systems: [
    {
      name: "Planejador Leve",
      role: "Organização e gestão da operação",
      text: "Reúne contratos, trechos, cargas, devoluções, remanejamentos, romaneios e visitas. O planejamento resulta do que é lançado nesses módulos, e as regras de negócio valem na própria API: a carga não ultrapassa o trecho e a devolução não ultrapassa o saldo em obra.",
      highlights: [
        "Sincronização automática com o sistema de gestão a cada 15 minutos, com trava contra execuções simultâneas",
        "Registro diário dos indicadores para o histórico da operação",
        "Projeção de contratos em 30 e 60 dias, relatórios e exportações",
        "Autenticação com JWT e controle de acesso por perfil",
      ],
      stack: ["React", "Redux Toolkit", "Node.js", "Express", "PostgreSQL", "Zod", "Docker", "GitHub Actions"],
    },
    {
      name: "Dashboard",
      role: "Visibilidade e inteligência sobre a operação",
      text: "Consome a API do Planejador como fonte única de dados e transforma a operação em indicadores: pátio e campo, ociosidade, estoque, evolução de contratos, sublocação, visitas e histórico mensal.",
      highlights: [
        "Previsão de falta de equipamento por carga",
        "Sugestão de itens substitutos disponíveis na data",
        "Gráficos de fluxo, projeção do pátio e mapa de obras",
        "Login com a mesma conta do Planejador",
      ],
      stack: ["React", "TypeScript", "TanStack Query", "Zustand", "Chart.js"],
    },
  ],
} as const;
