import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolio as p, projects } from "@/data/portfolio";
import { ProjectArt } from "@/components/project-art";
import { Icon } from "@/components/icon";

export const dynamicParams = false;
export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{slug:string}> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item=>item.slug===slug);
  if (!project) return {};
  return { title: project.title, description: project.description, alternates: { canonical: `/work/${slug}/` }, openGraph: { title: `${project.title} — ${p.shortName}`, description: project.description, url: `/work/${slug}/`, images: [{url:"/og.png",width:1200,height:630,alt:`${project.title} — ${p.shortName}`}] } };
}

export default async function CaseStudy({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params;
  const project = projects.find(item=>item.slug===slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project)+1)%projects.length];
  return <main id="main" className="shell">
    <section className="case-hero" aria-labelledby="case-title"><Link className="back-link" href="/#work"><Icon />{p.ui.allWork}</Link><p className="eyebrow">{p.caseStudy.label} / {project.category} / {project.year}</p><span className={`project-status case-status ${project.status === "Deployed" ? "is-deployed" : ""}`}>{project.status}</span><h1 id="case-title">{project.title}</h1><p className="case-subtitle">{project.description}</p><div className="case-links"><a href={project.github} className="text-link" target="_blank" rel="noreferrer">{p.ui.source}<Icon /></a>{project.live&&<a href={project.live} className="text-link" target="_blank" rel="noreferrer">{p.ui.live}<Icon /></a>}{project.paper&&<a href={project.paper} className="text-link" target="_blank" rel="noreferrer">{p.ui.paper}<Icon /></a>}</div></section>
    <figure style={{margin:0}}><div className="case-art"><ProjectArt project={project}/></div><figcaption className="eyebrow" style={{marginTop:12,color:"var(--muted)",fontSize:8}}>{p.ui.illustration} / {p.ui.diagram}</figcaption></figure>
    <nav className="case-contents" aria-label={p.caseStudy.contents}><span>{project.title}</span><a href="#overview">{p.caseStudy.overview}</a><a href="#method">{p.caseStudy.method}</a><a href="#evidence">{p.caseStudy.evidence}</a></nav>
    <section id="overview" className="case-summary" aria-label="Case study overview">{([{label:p.caseStudy.problem,text:project.problem},{label:p.caseStudy.approach,text:project.approach},{label:p.caseStudy.result,text:project.result}]).map(item=><div key={item.label}><h2>{item.label}</h2><p>{item.text}</p></div>)}</section>
    <div className="case-body"><aside className="case-aside"><div><strong className="case-metric">{project.metric}</strong><span className="case-metric-label">{project.metricLabel}</span></div><div><h2>{p.caseStudy.stack}</h2><ul>{project.stack.map(s=><li key={s}>{s}</li>)}</ul></div></aside><section id="method" className="case-narrative" aria-labelledby="architecture-heading"><h2 id="architecture-heading">{p.caseStudy.architecture}</h2><ol className="architecture-steps">{project.steps.map((step,i)=><li key={step}><span>{String(i+1).padStart(2,"0")}</span>{step}</li>)}</ol>{project.detail.map(item=><article key={item.title} data-reveal><h3>{item.title}</h3><p>{item.body}</p></article>)}<div id="evidence" className="case-evidence"><h2>{p.caseStudy.evidence}</h2>{project.evidenceNote&&<div className="evidence-context"><h3>{p.caseStudy.evidenceContext}</h3><p>{project.evidenceNote}</p></div>}<p className="case-disclaimer">{p.caseStudy.note}</p><a className="text-link" href={project.github} target="_blank" rel="noreferrer">{p.ui.source}<Icon/></a></div></section></div>
    <Link className="next-project" href={`/work/${next.slug}/#top`} prefetch={false}><div><small>{p.ui.next} / {next.category}</small><h2>{next.title}</h2></div><Icon /></Link>
  </main>;
}
