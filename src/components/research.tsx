import { portfolio as p } from "@/data/portfolio";
import { Icon } from "./icon";
export function Research() {
  return <section id="research" className="shell section research-section" aria-labelledby="research-heading"><p className="eyebrow">{p.research.number} / {p.research.label}</p><h2 id="research-heading">{p.research.title}</h2><div className="research-grid"><article className="paper-panel" data-reveal><p className="eyebrow">{p.research.tag}</p><h3>{p.research.paperTitle}</h3><p>{p.research.description}</p><p className="paper-citation">{p.research.citation}</p><p className="paper-citation-note">{p.research.citationNote}</p><a href={p.research.paper} target="_blank" rel="noreferrer" className="text-link">{p.ui.paper}<Icon/></a></article><div>{p.research.acknowledgments.map((item,i)=><article className="recognition-item" key={item.title}><span>0{i+1}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div></article>)}</div></div></section>;
}
