import { portfolio as p } from "@/data/portfolio";
import { SystemWalkthrough } from "@/components/system-walkthrough";
import { Icon } from "@/components/icon";
import { SelectedWork } from "@/components/selected-work";
import { Background } from "@/components/background";
import { Skills } from "@/components/skills";
import { Research } from "@/components/research";
import { Contact } from "@/components/contact";
import { Certifications } from "@/components/certifications";

export default function Home() {
  return <main id="main">
    <section className="hero shell" aria-labelledby="hero-heading">
      <div className="hero-copy"><p className="eyebrow"><span className="status-dot"/>{p.hero.eyebrow}</p><h1 id="hero-heading">{p.hero.lineOne}<br />{p.hero.lineTwo}<br /><em>{p.hero.emphasis}</em></h1><p className="hero-intro">{p.hero.intro}</p><div className="hero-actions"><a href="#work" className="button button-solid">{p.ui.work}<Icon name="down" /></a><a href={p.resume} download className="text-link">{p.resumeLabel}<Icon name="down" /></a></div></div>
      <SystemWalkthrough />
      <div className="hero-bottom"><span>{p.location}</span><a href="#work">{p.hero.footnote}<Icon name="down"/></a><span>{p.hero.edition}</span></div>
    </section>
    <div className="credentials shell">{p.credentials.map(item => <div className="credential" key={item.label}><strong>{item.value}</strong><div><span>{item.label}</span><small>{item.detail}</small></div></div>)}</div>
    <SelectedWork />
    <Background />
    <Skills />
    <Research />
    <Certifications />
    <Contact />
  </main>;
}
