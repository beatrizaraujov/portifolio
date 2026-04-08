import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0E0E0E] px-6 py-10 md:px-16">
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-0">
        
        <div className="text-xl font-medium tracking-tight">
          <span className="text-[#8083FF]"> Beatriz Araújo</span>
        </div>
      
        <nav className="flex flex-wrap justify-center gap-6 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          <Link href="https://www.linkedin.com/in/beatriz-ara%C3%BAjo-386976270/" className="hover:text-[#E5E2E1] transition-colors">Linkedin</Link>
          <Link href="https://github.com/beatrizaraujov" className="hover:text-[#E5E2E1] transition-colors">Github</Link>
          <Link 
            href="/curriculo-maria%20beatriz.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#E5E2E1] transition-colors"
          >
            Read.cv
          </Link>
        </nav>

        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 md:text-xs">
          © 2026 Beatriz Araújo
        </div>

      </div>
    </footer>
  );
}