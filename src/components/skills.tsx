import { portfolio as p } from "@/data/portfolio";
export function Skills() {
  return <section id="skills" className="shell section" aria-labelledby="skills-heading"><p className="eyebrow">{p.skills.number} / {p.skills.label}</p><h2 id="skills-heading">{p.skills.title}</h2><p className="section-intro">{p.skills.description}</p><div className="skill-grid">{p.skills.groups.map((group,i)=><div className="skill-group" key={group.title} data-reveal><span className="skill-number">0{i+1}</span><h3>{group.title}</h3><p>{group.description}</p><ul>{group.items.map(item=><li key={item}>{item}</li>)}</ul></div>)}</div></section>;
}
