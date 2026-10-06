"use client";
import { useState } from "react";
import { portfolio as p } from "@/data/portfolio";
import { Icon } from "./icon";
export function Contact() {
  const [status,setStatus] = useState("");
  async function copyEmail() { try { await navigator.clipboard.writeText(p.email); setStatus(p.contact.copied); } catch { setStatus(p.contact.copyFailed); } }
  return <section id="contact" className="contact-section" aria-labelledby="contact-heading"><div className="shell"><p className="eyebrow">{p.contact.number} / {p.contact.label}</p><h2 id="contact-heading">{p.contact.title}<em>{p.contact.emphasis}</em></h2><div className="contact-layout"><div><p>{p.contact.description}</p><div className="email-row"><a className="email-link" href={`mailto:${p.email}`} aria-label={`${p.contact.emailLabel}: ${p.email}`}>{p.email}<Icon/></a><button type="button" className="copy-button" onClick={copyEmail} aria-label={p.contact.copy}><Icon name="copy"/></button></div><span className="copy-status" role="status">{status}</span></div><div className="contact-links">{p.contact.links.map(item=><a key={item.label} href={item.href} target="_blank" rel="noreferrer">{item.label}<Icon/></a>)}<a href={p.resume} download>{p.resumeLabel}<Icon name="down"/></a></div></div></div></section>;
}
