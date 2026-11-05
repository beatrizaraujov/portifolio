"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const TARGETS = '.reveal, [class*="fx-"]';

/** Marca os elementos ao entrarem na tela e inclina os marcados com data-tilt. */
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    document.querySelectorAll(TARGETS).forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const allowed = window.matchMedia(
      "(hover: hover) and (prefers-reduced-motion: no-preference)",
    );
    if (!allowed.matches) return;

    let current: HTMLElement | null = null;
    let frame = 0;

    const reset = (el: HTMLElement) => {
      el.style.removeProperty("--tx");
      el.style.removeProperty("--ty");
    };

    const onMove = (event: PointerEvent) => {
      const target = event.target as Element | null;
      const next = target?.closest<HTMLElement>("[data-tilt]") ?? null;

      if (current && current !== next) reset(current);
      current = next;
      if (!next) return;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const box = next.getBoundingClientRect();
        const x = (event.clientX - box.left) / box.width - 0.5;
        const y = (event.clientY - box.top) / box.height - 0.5;
        next.style.setProperty("--tx", (x * 2).toFixed(3));
        next.style.setProperty("--ty", (y * 2).toFixed(3));
      });
    };

    document.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onMove);
      if (current) reset(current);
    };
  }, []);

  return null;
}
