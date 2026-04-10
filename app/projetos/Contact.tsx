"use client";
import { useState } from "react";

export default function Contact() {
  
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    
    console.log("Dados capturados com sucesso:", { nome, email, mensagem });
    
    alert(`Obrigada, ${nome}! Seus dados foram capturados. Próximo passo: Resend.`);
    
    
    setNome("");
    setEmail("");
    setMensagem("");
  };

  return (
    <section className="bg-[#0B0B0B] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        
        <div className="flex flex-col gap-8">
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Vamos construir algo que realmente importa.
          </h2>
          
          <p className="text-zinc-400 text-lg lg:text-xl max-w-md leading-relaxed">
            Estou sempre em busca de desafios que exijam mais do que apenas código. 
            Se você busca uma parceira técnica que entende de produto, experiência e automação, vamos conversar.
          </p>

          <a 
            href="mailto:vianabeatricx@gmail.com" 
            className="text-[#7B7BFF] text-2xl lg:text-3xl font-medium hover:underline flex items-center gap-2 transition-all"
          >
            vianabeatricx@gmail.com <span className="text-xl">↗</span>
          </a>
        </div>

        
        <div className="bg-[#121212] p-8 md:p-12 rounded-[32px] border border-white/5 shadow-2xl">
          <div className="mb-10">
            <h3 className="text-white text-2xl font-bold mb-2">Inicie uma conversa</h3>
            <p className="text-zinc-500 text-sm">Me conte um pouco sobre seu projeto ou apenas diga um 'Oi'.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
           
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Seu Nome</label>
              <input 
                type="text" 
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Ex: João Silva"
                className="bg-[#0B0B0B] border border-white/5 rounded-xl p-4 text-white placeholder:text-zinc-700 focus:border-[#7B7BFF]/50 outline-none transition-all"
              />
            </div>

            
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Seu Email</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="joao@empresa.com"
                className="bg-[#0B0B0B] border border-white/5 rounded-xl p-4 text-white placeholder:text-zinc-700 focus:border-[#7B7BFF]/50 outline-none transition-all"
              />
            </div>

            
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Mensagem</label>
              <textarea 
                rows={4}
                required
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Como posso te ajudar?"
                className="bg-[#0B0B0B] border border-white/5 rounded-xl p-4 text-white placeholder:text-zinc-700 focus:border-[#7B7BFF]/50 outline-none transition-all resize-none"
              />
            </div>

            
            <button 
              type="submit"
              className="bg-[#7B7BFF] hover:bg-[#6666FF] text-[#0B0B0B] font-bold py-4 rounded-xl mt-4 transition-all uppercase tracking-widest text-sm"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}