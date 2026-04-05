"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#0B0B0B]/95 backdrop-blur-xl border-b border-white/5">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 items-center px-6 md:px-10 h-[72px]">
          
          <div className="text-[13px] font-bold uppercase tracking-[0.05em] text-[#D6D6D6] whitespace-nowrap">
            Beatriz Araújo
          </div>

          <div className="hidden md:flex justify-center">
            <ul className="flex items-center gap-9 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#555555]">
              <li className="relative text-white cursor-pointer transition-colors group">
                Projetos
                <span className="absolute left-0 -bottom-[8px] w-full h-[2px] bg-[#7B7BFF]"></span>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">Especialidades</li>
              <li className="hover:text-white transition-colors cursor-pointer">Metodologia</li>
              <li className="hover:text-white transition-colors cursor-pointer">Portfólio</li>
            </ul>
          </div>
          <div className="hidden md:flex justify-end">
            <a 
              href="https://wa.me/5591989285474?text=Olá%20Beatriz,%20vim%20pelo%20seu%20portfólio" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#7B7BFF] text-black text-[10px] font-bold uppercase px-7 h-[40px] rounded-xl hover:bg-[#8F8FFF] transition-all">
                Contato
              </button>
            </a>
          </div>

          <div className="md:hidden flex justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 transition-all active:scale-95"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X size={24} strokeWidth={1.5} /> 
              ) : (
                <Menu size={24} strokeWidth={1.5} /> 
              )}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B0B0B] flex flex-col items-center justify-center md:hidden">
          <ul className="flex flex-col items-center gap-10 text-2xl uppercase font-bold text-white">
            <li onClick={() => setIsOpen(false)}>Projetos</li>
            <li onClick={() => setIsOpen(false)}>Especialidades</li>
            <li onClick={() => setIsOpen(false)}>Metodologia</li>
            <li onClick={() => setIsOpen(false)}>Portfólio</li>
            <a 
              href="https://wa.me/5591989285474?text=Olá%20Beatriz,%20vim%20pelo%20seu%20portfólio" 
              target="_blank"
              onClick={() => setIsOpen(false)}
            >
              <button className="mt-4 bg-[#7B7BFF] px-10 py-4 rounded-xl text-black text-sm font-bold">
                Contato
              </button>
            </a>
          </ul>
        </div>
      )}
    </>
  );
}