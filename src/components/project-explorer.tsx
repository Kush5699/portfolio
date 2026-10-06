"use client";
import { useId, useState } from "react";
import Link from "next/link";
import { portfolio as p, type Project } from "@/data/portfolio";
import { Icon } from "./icon";

export type ProjectSummary = Pick<Project, "slug" | "title" | "category" | "group" | "status" | "description" | "year" | "stack" | "metric" | "metricLabel">;

export function ProjectExplorer({ projects }: { projects: ProjectSummary[] }) {
  const [group, setGroup] = useState("all");
  const [query, setQuery] = useState("");
  const searchId = useId();
  const terms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const visible = projects.filter(project => {
    const text = [project.title, project.category, project.description, project.status, ...project.stack].join(" ").toLocaleLowerCase();
    return (group === "all" || project.group === group) && terms.every(term => text.includes(term));
  });
  function reset() { setGroup("all"); setQuery(""); }
  return <div className="project-explorer">
    <div className="index-heading"><div><p className="eyebrow">{p.work.index}</p><p>{p.work.indexDescription}</p></div><span className="index-total" aria-hidden="true">{String(projects.length).padStart(2, "0")}<span> / 2025—26</span></span></div>
    <div className="explorer-controls">
      <div className="discipline-filters" role="group" aria-label={p.work.filters}>{p.work.groups.map(item => <button key={item.id} type="button" aria-pressed={group === item.id} aria-controls="project-results" onClick={() => setGroup(item.id)}>{item.label}<span>{item.id === "all" ? projects.length : projects.filter(project => project.group === item.id).length}</span></button>)}</div>
      <div className="project-search"><label htmlFor={searchId}>{p.work.search}</label><div><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="10" cy="10" r="6"/><path d="m15 15 5 5"/></svg><input id={searchId} type="search" value={query} placeholder={p.work.searchHint} onChange={event => setQuery(event.target.value)} aria-controls="project-results"/>{query && <button type="button" onClick={() => setQuery("")} aria-label={p.work.clear}><Icon name="close"/></button>}</div></div>
    </div>
    <div className="results-bar"><span role="status" aria-live="polite" aria-atomic="true">{visible.length} / {projects.length} {p.work.showing}</span>{(group !== "all" || query) && <button type="button" onClick={reset}>{p.work.reset}<Icon name="close"/></button>}</div>
    <div id="project-results" className="project-results">
      {visible.length ? <ol className="project-index">{visible.map(project => <li key={project.slug}>
        <Link className="index-row" href={`/work/${project.slug}/#top`} prefetch={false}>
          <span className="index-number" aria-hidden="true">{String(projects.indexOf(project) + 1).padStart(2, "0")}</span>
          <div className="index-copy"><div className="index-title"><h3>{project.title}</h3><span className={`project-status ${project.status === "Deployed" ? "is-deployed" : ""}`}>{project.status}</span></div><p>{project.description}</p><span className="index-stack">{project.stack.slice(0, 4).join(" / ")}</span></div>
          <div className="index-context"><span>{project.category}</span><strong>{project.metric}</strong><small>{project.metricLabel}</small></div><Icon/>
        </Link>
      </li>)}</ol> : <div className="empty-projects"><h3>{p.work.empty}</h3><p>{p.work.emptyDescription}</p><button type="button" className="button" onClick={reset}>{p.work.reset}<Icon/></button></div>}
    </div>
  </div>;
}
