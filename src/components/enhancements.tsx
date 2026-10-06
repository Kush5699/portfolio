"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function Enhancements() {
  const pathname = usePathname();
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = matchMedia("(min-width: 900px) and (pointer: fine)");
    if (reduced.matches || !desktop.matches) return;
    let disposed = false;
    let destroy = () => {};
    const timer = window.setTimeout(async () => {
      const [{ default: Lenis }, { animate }] = await Promise.all([import("lenis"), import("framer-motion")]);
      if (disposed || reduced.matches || !desktop.matches) return;
      const lenis = new Lenis({ autoRaf: true, duration: .85, anchors: true, stopInertiaOnNavigate: true, smoothWheel: true, syncTouch: false });
      const observer = new IntersectionObserver(entries => {
        for (const entry of entries) if (entry.isIntersecting) {
          animate(entry.target as HTMLElement, { transform: ["translateY(12px)", "translateY(0px)"] }, { duration: .55, ease: [.2, .65, .3, 1] });
          observer.unobserve(entry.target);
        }
      }, { threshold: .12 });
      document.querySelectorAll("[data-reveal]").forEach(el => observer.observe(el));
      destroy = () => { lenis.destroy(); observer.disconnect(); };
    }, 1400);
    const onPreferenceChange = () => {
      if (reduced.matches || !desktop.matches) { disposed = true; clearTimeout(timer); destroy(); }
    };
    reduced.addEventListener("change", onPreferenceChange);
    desktop.addEventListener("change", onPreferenceChange);
    return () => {
      disposed = true; clearTimeout(timer); destroy();
      reduced.removeEventListener("change", onPreferenceChange);
      desktop.removeEventListener("change", onPreferenceChange);
    };
  }, [pathname]);
  return null;
}
