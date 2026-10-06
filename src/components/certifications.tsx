import { portfolio as p, certifications } from "@/data/portfolio";
import { Icon } from "./icon";

export function Certifications() {
  const copy = p.certifications;
  return <section id="certifications" className="shell section certifications-section" aria-labelledby="certifications-heading">
    <div className="section-header"><div><p className="eyebrow">{copy.number} / {copy.label}</p><h2 id="certifications-heading">{copy.title}</h2><p className="section-intro">{copy.description}</p></div><a className="text-link" href={copy.drive} target="_blank" rel="noreferrer">{copy.collection}<Icon/></a></div>
    <div className="certification-highlights">{certifications.filter(item=>item.featured).map((item,index)=><article className="certification-card" key={item.id} data-reveal>
      <div className="certificate-topline"><span>{String(index+1).padStart(2,"0")} / {item.date.slice(0,4)}</span><svg className="certificate-mark" width="54" height="54" viewBox="0 0 60 60" fill="none" aria-hidden="true"><circle cx="30" cy="30" r="24" stroke="currentColor" opacity=".25"/><circle cx="30" cy="30" r="16" stroke="currentColor" opacity=".4"/>{Array.from({length:12},(_,i)=><path key={i} d="M30 3v6" stroke="currentColor" opacity=".5" transform={`rotate(${i*30} 30 30)`}/>)}<path d="m22 30 6 6 11-13" stroke="currentColor" strokeWidth="1.5"/></svg></div>
      <span className="certificate-kind">{item.kind}</span><h3>{item.title}</h3><p className="certificate-issuer">{item.issuer}{item.platform&&<span> / {item.platform}</span>}</p><p className="certificate-description">{item.summary}</p>
      {item.verification&&<a className="certificate-verification" href={item.verification} target="_blank" rel="noreferrer" aria-label={`${copy.verify}: ${item.title}`}>{copy.verify}<Icon/></a>}
      <div className="certificate-card-footer"><time dateTime={item.date}>{item.dateLabel}</time><a className="text-link" href={item.document} target="_blank" rel="noreferrer" aria-label={`${copy.view}: ${item.title}`}>{copy.view}<Icon/></a></div>
    </article>)}</div>
    <details className="certification-archive"><summary><span>{copy.archive}</span><span className="credential-count">{certifications.length} {copy.records}</span><Icon name="down"/></summary><div className="credential-groups">{copy.groups.map(group=>{
      const items = certifications.filter(item=>item.group===group.id);
      return <section className="credential-group" key={group.id} aria-labelledby={`credentials-${group.id}`}><h3 id={`credentials-${group.id}`}>{group.title}<span>{String(items.length).padStart(2,"0")}</span></h3><p>{group.description}</p><ul>{items.map(item=><li key={item.id}><a className="credential-title" href={item.document} target="_blank" rel="noreferrer"><span>{item.title}</span><Icon/></a><p className="credential-issuer">{item.issuer}{item.platform&&` / ${item.platform}`}</p><div className="credential-meta"><span>{item.kind}</span><time dateTime={item.date}>{item.dateLabel}</time></div>{item.context&&<p className="credential-context">{item.context}</p>}{item.verification&&<a className="certificate-verification" href={item.verification} target="_blank" rel="noreferrer" aria-label={`${copy.verify}: ${item.title}`}>{copy.verify}<Icon/></a>}</li>)}</ul></section>;
    })}</div><p className="certification-note">{copy.note}</p></details>
  </section>;
}
