"use client";
import React, { useState, useEffect } from "react";

export default function Contact() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [isSending, setIsSending] = useState(false);
  
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState("success"); 

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, mensagem }),
      });

      if (response.ok) {
        setPopupType("success");
        setShowPopup(true);
        setNome("");
        setEmail("");
        setMensagem("");
      } else {
        throw new Error();
      }
    } catch (error) {
      setPopupType("error");
      setShowPopup(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="relative bg-[#0B0B0B] py-24 px-6 md:px-12 lg:px-24 font-inter overflow-hidden">
      
      {showPopup && (
        <div className={`fixed top-10 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-4 rounded-2xl border backdrop-blur-xl transition-all duration-500 animate-in fade-in slide-in-from-top-4 ${
          popupType === "success" 
          ? "bg-[#7B7BFF]/10 border-[#7B7BFF]/20 text-white" 
          : "bg-red-500/10 border-red-500/20 text-red-200"
        }`}>
          <div className={`w-2 h-2 rounded-full animate-pulse ${popupType === "success" ? "bg-[#7B7BFF]" : "bg-red-500"}`} />
          <p className="text-sm font-medium tracking-tight">
            {popupType === "success" 
              ? `Obrigada, ${nome || 'Beatriz'}! Mensagem enviada com sucesso.` 
              : "Ops! Algo deu errado. Tente novamente."}
          </p>
          <button onClick={() => setShowPopup(false)} className="ml-4 opacity-50 hover:opacity-100">✕</button>
        </div>
      )}

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <div className="flex flex-col gap-8">
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Aberta a novas oportunidades e projetos.
          </h2>
          <p className="text-zinc-400 text-lg lg:text-xl max-w-md leading-relaxed">
            Se você busca alguém para desenvolver interfaces, integrar APIs ou estruturar um produto, podemos conversar.
          </p>
          <a 
            href="mailto:vianabeatricx@gmail.com" 
            className="text-[#7B7BFF] text-2xl lg:text-3xl font-medium hover:underline flex items-center gap-2 transition-all w-fit"
          >
            vianabeatricx@gmail.com <span className="text-xl">↗</span>
          </a>
        </div>

        <div className="bg-[#121212] p-8 md:p-12 rounded-[32px] border border-white/5 shadow-2xl relative">
          <div className="mb-10">
            <h3 className="text-white text-2xl font-bold mb-2">Inicie uma conversa</h3>
            <p className="text-zinc-500 text-sm">Me conte um pouco sobre seu projeto ou apenas diga um 'Oi'.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Seu Nome</label>
              <input 
                type="text" required value={nome} onChange={(e) => setNome(e.target.value)}
                placeholder="Ex: João Silva"
                className="bg-[#0B0B0B] border border-white/5 rounded-xl p-4 text-white placeholder:text-zinc-700 focus:border-[#7B7BFF]/50 outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Seu Email</label>
              <input 
                type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="joao@empresa.com"
                className="bg-[#0B0B0B] border border-white/5 rounded-xl p-4 text-white placeholder:text-zinc-700 focus:border-[#7B7BFF]/50 outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Mensagem</label>
              <textarea 
                rows={4} required value={mensagem} onChange={(e) => setMensagem(e.target.value)}
                placeholder="Como posso te ajudar?"
                className="bg-[#0B0B0B] border border-white/5 rounded-xl p-4 text-white placeholder:text-zinc-700 focus:border-[#7B7BFF]/50 outline-none transition-all resize-none"
              />
            </div>

            <button 
              type="submit"
              disabled={isSending}
              className="bg-[#7B7BFF] hover:bg-[#6666FF] disabled:opacity-50 text-[#0B0B0B] font-bold py-4 rounded-xl mt-4 transition-all uppercase tracking-widest text-sm"
            >
              {isSending ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}