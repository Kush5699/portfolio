"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { portfolio as p } from "@/data/portfolio";
import { Icon } from "./icon";

export function Navigation() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const previousPath = useRef(pathname);
  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark");
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuButton.current?.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        menuButton.current.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  useEffect(() => {
    if (previousPath.current !== pathname) setOpen(false);
    previousPath.current = pathname;
  }, [pathname]);
  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch { /* Storage can be disabled. */ }
  }
  return <header className="site-header">
    <div className="shell nav-inner">
      <Link href="/" className="wordmark" aria-label={`${p.shortName} — ${p.ui.home}`}>{p.initials}<span className="logo-dot">.</span></Link>
      <span className="nav-identity">{p.shortName}<br /><span>{p.role}</span></span>
      <nav className={`nav-links ${open ? "is-open" : ""}`} id="main-navigation" aria-label="Main navigation">
        {p.nav.map(item => <a key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        <a href={p.resume} download className="nav-resume" onClick={() => setOpen(false)}>Resume <Icon name="down" /></a>
      </nav>
      <div className="nav-actions">
        <button type="button" className="icon-button theme-button" onClick={toggleTheme} aria-label={p.ui.theme} aria-pressed={dark}><Icon name={dark ? "sun" : "moon"} /></button>
        <a className="contact-pill" href="/#contact">{p.ui.contact}<Icon /></a>
        <button ref={menuButton} type="button" className="icon-button menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? p.ui.closeMenu : p.ui.menu}><Icon name={open ? "close" : "menu"} /></button>
      </div>
    </div>
  </header>;
}
