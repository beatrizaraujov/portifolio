"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const TARGETS = '.reveal, [class*="fx-"]';

/** Marca os elementos ao entrarem na tela; o CSS conduz a animação. */
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

  return null;
}
