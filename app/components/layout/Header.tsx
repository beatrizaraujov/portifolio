"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation, site, socials } from "@/app/content/site";
import { Arrow } from "@/app/components/ui/ExternalLink";

const sectionIds = navigation.map((item) => item.href.replace("/#", ""));

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState<string | null>(null);

  // Indica a seção em leitura, apenas na página inicial.
  useEffect(() => {
    if (pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setVisible(entry.target.id);
          else setVisible((id) => (id === entry.target.id ? null : id));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }

    return () => observer.disconnect();
  }, [pathname]);

  // Menu móvel: fecha com Esc e impede a rolagem da página ao fundo.
  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const current = pathname === "/" ? visible : null;

  return (
    <header className="escuro masthead print:hidden">
      <nav
        aria-label="Navegação principal"
        className="page flex h-16 items-center justify-between gap-6"
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="brand"
        >
          Beatriz Araújo
          <span className="sr-only"> (início)</span>
        </Link>

        <ul className="hidden items-center gap-x-[clamp(1.25rem,2.4vw,2.25rem)] md:flex">
          {navigation.map((item) => {
            const active = current === item.href.replace("/#", "");

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "true" : undefined}
                  className="nav-link"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li className="border-l border-line-strong pl-[clamp(1.25rem,2.4vw,2.25rem)]">
            <a
              href={socials.curriculo}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link nav-link-out"
            >
              Currículo
              <Arrow />
              <span className="sr-only"> em PDF (abre em nova aba)</span>
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="menu-movel"
          className="-mr-2 min-h-11 cursor-pointer px-2 text-[0.9375rem] md:hidden"
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </nav>

      <div
        id="menu-movel"
        hidden={!open}
        className="mobile-menu md:hidden"
      >
        <ul className="page">
          {navigation.map((item) => (
            <li key={item.href} className="border-b border-line">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-display text-[clamp(2.25rem,11vw,3.25rem)] leading-tight font-bold tracking-[-0.03em]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="page mt-auto flex flex-col items-start gap-3 pt-10 pb-8">
          <a href={socials.curriculo} target="_blank" rel="noopener noreferrer" className="link">
            Currículo em PDF
            <span className="sr-only"> (abre em nova aba)</span>
            <Arrow />
          </a>
          <a href={`mailto:${site.email}`} className="link">
            {site.email}
          </a>
        </div>
      </div>
    </header>
  );
}
