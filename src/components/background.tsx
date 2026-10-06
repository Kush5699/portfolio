import { portfolio as p } from "@/data/portfolio";

export function Background() {
  return <section id="about" className="about-wrap" aria-labelledby="about-heading"><div className="shell section">
    <p className="eyebrow">{p.about.number} / {p.about.label}</p>
    <div className="about-grid"><div data-reveal><h2 id="about-heading">{p.about.title}<em>{p.about.emphasis}</em></h2><dl className="about-facts">{p.about.facts.map(item=><div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl></div><div className="about-copy" data-reveal><p>{p.about.bio}</p><p>{p.about.story}</p><p>{p.about.mentoring}</p></div></div>
    <div className="timeline-grid"><section aria-labelledby="experience-heading"><h3 id="experience-heading">{p.experienceLabel}</h3>{p.experience.map(item=><article className="timeline-entry" key={item.organization}><p className="timeline-period">{item.period}</p><h4>{item.organization}</h4><p className="timeline-role">{item.role} · {item.location}</p><p className="timeline-description">{item.description}</p></article>)}</section><section aria-labelledby="education-heading"><h3 id="education-heading">{p.educationLabel}</h3>{p.education.map(item=><article className="timeline-entry" key={item.organization}><p className="timeline-period">{item.period}</p><h4>{item.organization}</h4><p className="timeline-role">{item.role}</p><p className="timeline-description">{item.detail}</p></article>)}</section></div>
  </div></section>;
}
