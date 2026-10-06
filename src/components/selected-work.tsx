import Link from "next/link";
import { portfolio as p, projects } from "@/data/portfolio";
import { ProjectArt } from "./project-art";
import { Icon } from "./icon";
import { ProjectExplorer } from "./project-explorer";

export function SelectedWork() {
  return <section id="work" className="shell section" aria-labelledby="work-heading">
    <div className="section-header"><div><p className="eyebrow">{p.work.number} / {p.work.label}</p><h2 id="work-heading">{p.work.title}</h2><p className="section-intro">{p.work.description}</p></div><a className="text-link" href={p.github} target="_blank" rel="noreferrer">{p.work.archive}<Icon /></a></div>
    <div className="featured-projects">{projects.slice(0,2).map((project,i)=><article className="project" key={project.slug} data-reveal>
      <Link href={`/work/${project.slug}/#top`} prefetch={false} className="project-visual" aria-label={`${p.ui.viewCase}: ${project.title}`}><span className="visual-corner" style={i===0?{color:"#c5cdbb"}:undefined}>{String(i+1).padStart(2,"0")} / {project.category}</span><ProjectArt project={project} decorative/><span className="visual-arrow"><Icon /></span></Link>
      <div className="project-caption"><p className="eyebrow">{project.category} / {project.year}<span className={`project-status ${project.status === "Deployed" ? "is-deployed" : ""}`}>{project.status}</span></p><h3><Link href={`/work/${project.slug}/#top`} prefetch={false}>{project.title}</Link></h3><p>{project.description}</p><div className="project-stack">{project.stack.slice(0,4).map(s=><span key={s}>{s}</span>)}</div><div className="featured-outcome"><strong>{project.metric}</strong><span>{project.metricLabel}</span><Link href={`/work/${project.slug}/#top`} prefetch={false} aria-label={`${p.ui.viewCase}: ${project.title}`}><Icon/></Link></div></div>
    </article>)}</div>
    <ProjectExplorer projects={projects.map(({slug,title,category,group,status,description,year,stack,metric,metricLabel})=>({slug,title,category,group,status,description,year,stack,metric,metricLabel}))}/>
  </section>;
}
