import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { portfolio as p, siteUrl } from "@/data/portfolio";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Enhancements } from "@/components/enhancements";
import "./globals.css";

const manrope = localFont({ src: "../fonts/manrope-latin-wght-normal.woff2", variable: "--font-sans", display: "swap", weight: "200 800" });
const instrument = localFont({ src: [{ path: "../fonts/instrument-serif-latin-400-normal.woff2", style: "normal", weight: "400" }, { path: "../fonts/instrument-serif-latin-400-italic.woff2", style: "italic", weight: "400" }], variable: "--font-serif", display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${p.shortName} — ML Researcher & AI Systems Builder`, template: `%s — ${p.shortName}` },
  description: p.description,
  applicationName: "Signal Atlas", authors: [{ name: p.name, url: p.github }],
  keywords: ["Kush Patel", "machine learning", "DA-IICT", "AI engineer", "RAG", "computer vision", "research"],
  alternates: { canonical: "/" },
  openGraph: { title: `${p.shortName} — From research to real-world AI`, description: p.description, type: "website", locale: "en_IN", siteName: `${p.shortName} / Signal Atlas`, images: [{ url: "/og.png", width: 1200, height: 630, alt: `${p.shortName} — Machine learning research and useful AI systems` }] },
  twitter: { card: "summary_large_image", title: `${p.shortName} — Signal Atlas`, description: p.description, images: ["/og.png"] },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f5f3ed" }, { media: "(prefers-color-scheme: dark)", color: "#171918" }], width: "device-width", initialScale: 1 };
const themeScript = `try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light'}catch(e){document.documentElement.dataset.theme=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" suppressHydrationWarning className={`${manrope.variable} ${instrument.variable}`}><head><script dangerouslySetInnerHTML={{ __html: themeScript }}/></head><body id="top"><a className="skip-link" href="#main">{p.ui.skip}</a><Navigation />{children}<Footer /><Enhancements /></body></html>;
}
