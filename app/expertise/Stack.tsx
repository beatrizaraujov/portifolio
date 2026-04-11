export default function Stack() {
  return (
    <section className="bg-[#1C1B1B] px-8 py-16 grid gap-12">
      <div className="flex items-center gap-4">
        <span className="text-[#C7C4D7] uppercase tracking-widest text-sm">
          01 expertise em engenharia
        </span>
        <div className="hidden md:block h-[1px] flex-grow bg-white/20" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 flex flex-col gap-4">
          <img src="/web.svg" alt="Web Icon" className="w-6 h-6" />
          <h3 className="text-xl font-medium text-white">Fundamentos Modernos para Web</h3>
          <p className="text-sm text-gray-400 leading-relaxed flex-grow">
            Construção de interfaces determinísticas, seguras em tipagem e escaláveis. Utilização do Next.js para eficiência em SSR/ISR e do Tailwind para consistência em sistemas de design.
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {["Next.js 14", "TypeScript", "Tailwind CSS", "React"].map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs bg-white/5 text-gray-400 border border-white/5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 flex flex-col gap-4">
          <img src="/state.svg" alt="State Icon" className="w-6 h-6" />
          <h3 className="text-xl font-medium text-white">Gerenciamento de Estado e Fluxo de Dados</h3>
          <p className="text-sm text-gray-400 leading-relaxed flex-grow">
            Orquestração de ciclos de vida de dados complexos. Domínio do TanStack Query para estado de servidor e de Zustand/Redux para persistência no lado do cliente.
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {["TanStack Query", "Zustand", "Context API"].map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs bg-white/5 text-gray-400 border border-white/5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 flex flex-col gap-4">
          <img src="/performance.svg" alt="Performance Icon" className="w-6 h-6" />
          <h3 className="text-xl font-medium text-white">Otimização de Performance</h3>
          <p className="text-sm text-gray-400 leading-relaxed flex-grow">
            Redução do tempo até a interatividade (TTI) e maximização dos indicadores Core Web Vitals. Análise aprofundada de re-renderizações de componentes e do fluxo de requisições em rede.
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {["Lighthouse", "Web Vitals", "Code Splitting"].map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs bg-white/5 text-gray-400 border border-white/5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}