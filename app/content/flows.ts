/**
 * Percursos reais de projetos públicos, desenhados no mapa da primeira dobra.
 * Cada parada descreve apenas o que consta na documentação do próprio projeto.
 * As coordenadas seguem a grade do mapa: y define a camada; x, a progressão.
 */
export const flowRows = [
  "Pessoas",
  "Interface",
  "Regras",
  "APIs",
  "Segurança",
  "Dados",
] as const;

export const flowSize = { width: 600, height: 432, rowStart: 36, rowGap: 72 };

export type FlowStop = { name: string; note: string; x: number; y: number };

export type Flow = {
  id: string;
  project: string;
  action: string;
  color: "marinho" | "azul" | "aco";
  stops: readonly FlowStop[];
};

export const flows: readonly Flow[] = [
  {
    id: "agroclimate",
    project: "AgroClimate Intelligence",
    action: "Consulta por estado",
    color: "marinho",
    stops: [
      { x: 60, y: 36, name: "Escolha do estado", note: "A pessoa seleciona um estado no mapa do Brasil." },
      { x: 60, y: 108, name: "Mapa interativo", note: "O painel passa a filtrar os dados pelo estado escolhido." },
      { x: 204, y: 252, name: "Route Handler", note: "A rota expõe uma única consulta fixa e não funciona como proxy aberto." },
      { x: 276, y: 324, name: "Renovação do JWT", note: "A credencial do MapBiomas é renovada no servidor, a partir do campo exp." },
      { x: 348, y: 252, name: "Alertas do MapBiomas", note: "Se a fonte estiver indisponível, o painel recorre a um snapshot e informa isso na tela." },
      { x: 420, y: 180, name: "Índice de 0 a 100", note: "Uma função pura e testada calcula o índice por intensidade, sem saturar em recortes grandes." },
      { x: 492, y: 108, name: "Painel atualizado", note: "O resultado é apresentado por estado, com a limitação do índice registrada na interface." },
    ],
  },
  {
    id: "finanly",
    project: "Finanly",
    action: "Nova transação",
    color: "azul",
    stops: [
      { x: 132, y: 36, name: "Início do registro", note: "A pessoa inicia o registro de uma movimentação financeira." },
      { x: 132, y: 108, name: "Escolha do tipo", note: "A primeira etapa do fluxo define o tipo da transação." },
      { x: 240, y: 108, name: "Formulário", note: "A etapa seguinte reúne os dados da transação, em componente próprio." },
      { x: 456, y: 324, name: "Autenticação", note: "O Supabase é responsável pela autenticação na aplicação." },
      { x: 528, y: 396, name: "Persistência", note: "A transação é gravada no banco de dados do Supabase." },
      { x: 528, y: 108, name: "Saldo e histórico", note: "O painel apresenta saldo, entradas, saídas e histórico." },
    ],
  },
  {
    id: "schmidt",
    project: "Dr. Celso Schmidt",
    action: "Agendamento de reunião",
    color: "aco",
    stops: [
      { x: 300, y: 36, name: "Visita ao site", note: "A pessoa chega ao site institucional do escritório." },
      { x: 300, y: 108, name: "Apresentação", note: "A página apresenta o advogado e as frentes de consultoria." },
      { x: 396, y: 108, name: "Áreas de atuação", note: "A navegação organiza as áreas de advocacia empresarial." },
      { x: 468, y: 36, name: "Agendamento", note: "A chamada conduz a pessoa ao agendamento de uma reunião." },
    ],
  },
];
