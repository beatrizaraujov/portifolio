export default function Stack() {
  return (
    <section className="bg-[#1C1B1B] px-8 py-16 grid gap-12">
      <div className="flex items-center gap-4">
        <span className="text-[#C7C4D7] uppercase tracking-widest text-sm">
          Engenharia
        </span>
        <div className="hidden md:block h-[1px] flex-grow bg-white/20" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 flex flex-col gap-4">
          <img src="/web.svg" alt="Web Icon" className="w-6 h-6" />

          <h3 className="text-xl font-medium text-white">
            Desenvolvimento de Interfaces Web
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed flex-grow">
            Desenvolvimento de interfaces modernas com foco em organização, performance e facilidade de manutenção.
            Utilizo Next.js para estruturação da aplicação e Tailwind para consistência visual.
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            {["Next.js", "TypeScript", "Tailwind CSS", "React"].map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs bg-white/5 text-gray-400 border border-white/5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>

      
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 flex flex-col gap-4">
          <img src="/state.svg" alt="State Icon" className="w-6 h-6" />

          <h3 className="text-xl font-medium text-white">
            Gestão de Estado e Dados
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed flex-grow">
            Gerenciamento de dados entre front-end e APIs, garantindo consistência e boa experiência do usuário.
            Utilizo TanStack Query para dados remotos e ferramentas como Context API e Zustand quando necessário.
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

          <h3 className="text-xl font-medium text-white">
            Performance de Aplicações
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed flex-grow">
            Otimização de carregamento e renderização para melhorar a experiência do usuário.
            Análise de métricas como Web Vitals e uso de técnicas como code splitting.
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