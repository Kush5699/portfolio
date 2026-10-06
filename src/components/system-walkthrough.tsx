"use client";

import { useState } from "react";
import Link from "next/link";
import { portfolio as p } from "@/data/portfolio";
import { Icon } from "./icon";

export function SystemWalkthrough() {
  const [systemIndex, setSystemIndex] = useState(0);
  const [stageIndex, setStageIndex] = useState(0);
  const system = p.hero.systems[systemIndex];
  const stage = system.stages[stageIndex];

  return <figure className="system-figure" aria-label={p.hero.figureDescription}>
    <figcaption className="system-topline"><span>{p.hero.figureLabel}</span><span>{p.hero.walkthroughLabel}</span></figcaption>
    <div className="system-tabs" role="group" aria-label={p.hero.systemLabel}>
      {p.hero.systems.map((item, index) => <button key={item.label} type="button" aria-pressed={index === systemIndex} onClick={() => { setSystemIndex(index); setStageIndex(0); }}>{item.label}<span aria-hidden="true">0{index + 1}</span></button>)}
    </div>
    <div className="system-heading"><h2>{system.project}</h2><p>{system.purpose}</p></div>
    <div className="system-map">
      <svg className="system-connections" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M25 25H75V50H25V75H75"/></svg>
      <ol className="system-nodes" aria-label={p.hero.stageLabel}>
        {system.stages.map((item, index) => <li key={index}><button type="button" aria-pressed={index === stageIndex} aria-controls="system-step-detail" onClick={() => setStageIndex(index)}><span className="system-node-number" aria-hidden="true">0{index + 1}</span><span><strong>{item.label}</strong><small>{item.tool}</small></span><span className="system-node-dot" aria-hidden="true"/></button></li>)}
      </ol>
    </div>
    <p className="system-hint">{p.hero.figureHint}<span aria-hidden="true">↓</span></p>
    <div id="system-step-detail" className="system-detail" aria-live="polite" aria-atomic="true">
      <div className="system-detail-heading"><span className="system-step-index">0{stageIndex + 1} / 04</span><strong>{stage.label}</strong></div>
      <p>{stage.explanation}</p>
      <dl className="system-transfer"><div><dt>{p.hero.inputLabel}</dt><dd>{stage.input}</dd></div><div><dt>{p.hero.outputLabel}</dt><dd>{stage.output}</dd></div></dl>
    </div>
    <Link className="system-case-link" href={system.href} prefetch={false}><span>{p.hero.caseLabel}<small>{system.project}</small></span><Icon/></Link>
  </figure>;
}
