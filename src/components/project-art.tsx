import type { Project } from "@/data/portfolio";

export function ProjectArt({ project, decorative = false }: { project: Project; decorative?: boolean }) {
  const isRetrieval = project.diagram === "retrieval";
  const ink = isRetrieval ? "#e9eddf" : "var(--ink)";
  const muted = isRetrieval ? "#aab49e" : "var(--muted)";
  const accent = isRetrieval ? "#d6a8bf" : "var(--accent)";
  const common = { fill: ink, fontFamily: "var(--font-sans), sans-serif", fontSize: 11 };
  return <svg className="project-art" viewBox="0 0 640 440" width="640" height="440" role={decorative ? undefined : "img"} aria-hidden={decorative || undefined} aria-label={decorative ? undefined : `${project.title}: ${project.steps.join(" → ")}. Original architecture illustration.`}>
    <rect width="640" height="440" fill={isRetrieval ? "#293029" : "var(--surface)"}/>
    <g stroke={muted} opacity=".1" strokeWidth=".7">{Array.from({length:15},(_,i)=><path key={i} d={`M${i*46} 0v440M0 ${i*40}h640`}/>)}</g>
    {isRetrieval && <>
      <g transform="translate(68 119)" stroke={ink} strokeWidth="1" fill="#293029"><rect x="-10" y="-10" width="96" height="132" rx="2" opacity=".2"/><rect x="-5" y="-5" width="96" height="132" rx="2" opacity=".4"/><rect width="96" height="132" rx="2"/><path d="M19 31h45M19 40h58M19 49h50M19 76h58M19 85h38" opacity=".35"/><text {...common} x="18" y="108" fontSize="8">TEXTBOOKS</text></g>
      <g fill="none" stroke={accent} strokeWidth="1.2"><path d="M165 185h47v-58h59m-59 58v58h59M368 127h41v58h54m-54 0v58h-41"/><circle cx="212" cy="185" r="4" fill={accent}/><circle cx="409" cy="185" r="4" fill={accent}/></g>
      <g stroke={ink} strokeOpacity=".35" fill="#293029"><rect x="272" y="96" width="96" height="61" rx="3"/><rect x="272" y="213" width="96" height="61" rx="3"/><rect x="465" y="155" width="112" height="105" rx="3"/></g>
      <text {...common} x="320" y="122" textAnchor="middle">Vector search</text><text {...common} x="320" y="141" textAnchor="middle" fontSize="8" fill={muted}>ChromaDB</text>
      <text {...common} x="320" y="239" textAnchor="middle">Keyword search</text><text {...common} x="320" y="258" textAnchor="middle" fontSize="8" fill={muted}>BM25</text>
      <text {...common} x="484" y="180" fontSize="9" fill={accent}>GROUNDED</text><text {...common} x="484" y="201" fontSize="12">Cited answer</text><path d="M485 219h68m-68 8h46" stroke={muted} opacity=".5"/><rect x="485" y="237" width="25" height="9" rx="4" fill={accent} opacity=".35"/>
      <path d="M318 290v24h202v-37" fill="none" stroke={muted} strokeDasharray="3 5"/><text {...common} x="384" y="338" fontSize="8" fill={muted}>RETRIEVE · VERIFY · RESPOND</text>
    </>}
    {project.diagram === "vision" && <>
      <rect x="72" y="82" width="496" height="267" rx="4" fill="var(--paper)" stroke="var(--line)"/>
      {[0,1,2].map(row=><g key={row}>{Array.from({length:9},(_,col)=><g key={col}><rect x={104+col*49} y={103+row*78} width={26+(col%3)*5} height={49+(col%2)*6} rx={col%2?4:1} fill={col%3===0?"var(--accent-soft)":"var(--line)"}/><rect x={101+col*49} y={99+row*78} width="38" height="62" fill="none" stroke={accent} strokeWidth=".7" strokeDasharray={col%4===0?"3 3":undefined} opacity=".65"/></g>)}<path d={`M91 ${167+row*78}h460`} stroke={muted} opacity=".4"/></g>)}
      <rect x="394" y="65" width="153" height="28" rx="2" fill={accent}/><text {...common} x="408" y="83" fill="var(--paper)" fontSize="9">DETECTION → RECOGNITION</text>
      <path d="M114 369h154m106 0h154" stroke={muted} opacity=".25"/><text {...common} x="320" y="373" fontSize="8" fill={muted} textAnchor="middle">SHELF INTELLIGENCE</text>
    </>}
    {project.diagram === "spectral" && <>
      {Array.from({length:12},(_,i)=><g key={i} transform={`translate(${172+i*16} ${106+i*7})`}><path d="M0 0 157-42 219 56 62 98Z" fill="var(--paper)" fillOpacity=".75" stroke={i%3===0?accent:muted} strokeWidth=".7" opacity={.3+i*.05}/><path d="m38 26 52-15 28 13 51-17M62 55l56-14 31 9 35-7" fill="none" stroke={muted} opacity=".35"/></g>)}
      <text {...common} x="99" y="83" fontSize="10" fill={accent}>12 BANDS. ONE REPRESENTATION.</text><text {...common} x="431" y="354" fontSize="9" fill={muted}>SENTINEL-2 → SWIN</text>
    </>}
    {project.diagram === "telemetry" && <>
      <path d="M92 332h456M92 102v230" stroke={muted} opacity=".35"/>
      {[0,1,2,3].map(i=><path key={i} d={`M92 ${140+i*48}h456`} stroke={muted} opacity=".12"/>) }
      <path d="M95 170h62l15 2 12-12 22 8 45-4 13 59 12 60 15-63 16-56 34 4 17-5 16 2 10 16 25-17 18 3 19-2 18 6 22-9 25 5 28-3" fill="none" stroke={accent} strokeWidth="2.5"/>
      <rect x="250" y="118" width="59" height="210" fill={accent} opacity=".08"/><text {...common} x="340" y="117" fontSize="9" fill={accent}>NORMALIZE. MEASURE. TRUST.</text><text {...common} x="98" y="360" fontSize="8" fill={muted}>RAW CHECKS → RELIABLE SIGNALS</text>
    </>}
    {project.diagram === "ensemble" && <>
      {[0,1,2].map(i=><g key={i}><path d={`M139 220h77v${(i-1)*100}h48M375 ${120+i*100}h58v${(1-i)*100}h54`} fill="none" stroke={accent} opacity=".6"/><rect x="264" y={91+i*100} width="111" height="58" rx="3" fill="var(--paper)" stroke="var(--line)"/><text {...common} x="320" y={126+i*100} textAnchor="middle">{["LightGBM","XGBoost","CatBoost"][i]}</text></g>)}
      <circle cx="115" cy="220" r="27" fill="var(--accent-soft)" stroke={accent} strokeWidth=".7"/><circle cx="516" cy="220" r="32" fill="var(--accent-soft)" stroke={accent} strokeWidth=".7"/><text {...common} x="516" y="224" textAnchor="middle" fontSize="10">RIDGE</text><text {...common} x="207" y="382" fontSize="9" fill={muted}>COMPLEMENTARY MODELS. SHARED EVIDENCE.</text>
    </>}
    {project.diagram === "agents" && <>
      {[0,1,2,3].map(i=>{const x=[170,470,170,470][i],y=[120,120,320,320][i];return <g key={i}><path d={`M320 220 ${x} ${y}`} fill="none" stroke={accent} strokeWidth="1"/><circle cx={x} cy={y} r="43" fill="var(--paper)" stroke="var(--line)"/><text {...common} x={x} y={y+4} textAnchor="middle">{["Manager","Mentor","Reviewer","Executor"][i]}</text></g>;})}
      <circle cx="320" cy="220" r="56" fill="var(--accent-soft)" stroke={accent}/><text {...common} x="320" y="224" textAnchor="middle" fontSize="11">Orchestrator</text><text {...common} x="219" y="53" fill={muted} fontSize="9">SPECIALIZED ROLES. SHARED CONTEXT.</text>
    </>}
    {(["fingerprint", "forensic", "speech", "waveform", "workflow", "document", "validation"] as string[]).includes(project.diagram) && <>
      <AdditionalStudy project={project}/>
      <g>{project.steps.map((step, i)=><g key={step}><circle cx={74+i*162} cy="351" r="3" fill={accent}/>{i<3&&<path d={`M${82+i*162} 351h145`} stroke={muted} opacity=".3"/>}<text {...common} x={74+i*162} y="376" textAnchor="middle" fontSize="9">{step}</text></g>)}</g>
    </>}
    <text {...common} x="29" y="414" fontSize="8" fill={muted}>{project.title.toUpperCase()} / {project.year}</text><text {...common} x="611" y="414" fontSize="8" fill={muted} textAnchor="end">SYSTEM STUDY</text>
  </svg>;
}

function AdditionalStudy({ project }: { project: Project }) {
  const text = { fill: "var(--ink)", fontFamily: "var(--font-sans), sans-serif", fontSize: 11 };
  const box = { fill: "var(--paper)", stroke: "var(--line)" };
  switch (project.diagram) {
    case "fingerprint": return <>
      <g fill="none" stroke="var(--accent)" strokeWidth="1.1">{Array.from({length:14},(_,i)=><path key={i} d={`M${194-i*6} ${268-i*1.5} C${134-i*3} ${222-i*6},${154-i*5} ${94-i*2},214 92 C${277+i*4} ${86-i*3},${300+i*4} ${157-i*2},${262+i*4} ${240+i*3}`} opacity={.25+i*.045}/>)}<path d="M212 132c-32 0-44 72-14 111m17-91c-16 4-19 35-7 56"/></g>
      {[0,1,2].map(i=><g key={i}><path d={`M295 184h55v${(i-1)*60}h24`} stroke="var(--accent)" fill="none"/><rect {...box} x="374" y={105+i*60} width={80+i*22} height="38" rx="2"/><text {...text} x="390" y={129+i*60}>Scale {i+1}</text></g>)}
      <text {...text} x="372" y="295" fontSize="9" fill="var(--accent)">LOCAL DETAIL / GLOBAL STRUCTURE</text>
    </>;
    case "forensic": return <>
      <rect {...box} x="87" y="90" width="146" height="185" rx="3"/><rect x="108" y="117" width="37" height="46" fill="var(--accent-soft)"/><path d="M160 126h48m-48 14h38M108 190h101m-101 14h88m-88 14h94m-94 14h63" stroke="var(--muted)" opacity=".5"/>
      <path d="M242 178h53m-8-5 7 5-7 5M405 178h43" stroke="var(--accent)" fill="none"/>
      <g>{Array.from({length:64},(_,i)=><rect key={i} x={305+(i%8)*11} y={133+Math.floor(i/8)*11} width="8" height="8" fill={i%5===0?"var(--accent)":"var(--line)"} opacity={.3+(i*7%10)*.07}/>)}</g>
      <rect {...box} x="458" y="140" width="107" height="76" rx="3"/><text {...text} x="511" y="172" textAnchor="middle">Unseen type</text><text {...text} x="511" y="192" textAnchor="middle" fontSize="9" fill="var(--accent)">HOLD OUT</text>
      <text {...text} x="89" y="301" fontSize="9" fill="var(--muted)">LOOK PAST THE DOCUMENT TEMPLATE</text>
    </>;
    case "speech": return <>
      {[0,1,2,3].map(i=><g key={i}><rect {...box} x={83+i*121} y="102" width="109" height="124" rx="3"/><path d={`M${101+i*121} 170 Q${137+i*121} ${144+i*8} ${173+i*121} 170 Q${137+i*121} ${183-i*4} ${101+i*121} 170Z`} fill="var(--accent-soft)" stroke="var(--accent)"/><text {...text} x={94+i*121} y="122" fontSize="8" fill="var(--muted)">FRAME 0{i+1}</text></g>)}
      <path d={Array.from({length:92},(_,i)=>`${i===0?"M":"L"}${85+i*5.1} ${272+Math.sin(i*.9)*Math.sin(i*.14)*16}`).join(" ")} fill="none" stroke="var(--accent)" strokeWidth="1.3"/><text {...text} x="83" y="310" fontSize="9" fill="var(--muted)">TIME → REPRESENTATION → ALIGNMENT</text>
    </>;
    case "waveform": return <>
      {[0,1,2].map(row=><g key={row}><text {...text} x="72" y={104+row*74} fontSize="9" fill="var(--muted)">{["AIRFLOW", "THORACIC", "SpO₂"][row]}</text><path d={`M165 ${100+row*74}h399`} stroke="var(--line)"/><path d={Array.from({length:110},(_,i)=>`${i===0?"M":"L"}${167+i*3.6} ${100+row*74+(row===2?Math.sin(i*.09)*8:Math.sin(i*.22+row)*21*(i>45&&i<73?.18:1))}`).join(" ")} fill="none" stroke="var(--accent)" strokeWidth="1.4"/></g>)}
      <rect x="328" y="73" width="102" height="212" fill="var(--accent)" opacity=".08"/><path d="M328 72v214m102-214v214" stroke="var(--accent)" strokeDasharray="3 5" opacity=".4"/><text {...text} x="379" y="310" textAnchor="middle" fontSize="9" fill="var(--muted)">30-SECOND WINDOW</text>
    </>;
    case "workflow": return <>
      {[0,1,2].map(i=><g key={i}><rect {...box} x={77+i*170} y="102" width="145" height="151" rx="3"/><text {...text} x={94+i*170} y="127" fontSize="9" fill="var(--muted)">{["CONTRACTOR", "INSPECTOR", "PHOTO AGENT"][i]}</text><rect x={95+i*170} y="204" width="106" height="3" fill="var(--line)"/><rect x={95+i*170} y="204" width={[76,66,58][i]} height="3" fill="var(--accent)"/><text {...text} x={94+i*170} y="231" fontSize="9">{["Progress claim", "Field record", "AI estimate"][i]}</text></g>)}
      <path d="m119 179 26-30 29 32m-57 0h64M297 161h39m-39 9h28m-28 9h35M478 147h37v35h-37Zm6 28 10-12 8 6 7-9" stroke="var(--accent)" fill="none" strokeWidth="1.2"/><path d="M150 258v29h340v-29" stroke="var(--muted)" fill="none" strokeDasharray="3 4"/><text {...text} x="320" y="309" fontSize="9" textAnchor="middle" fill="var(--accent)">THREE SOURCES / ONE REVIEW WORKFLOW</text>
    </>;
    case "document": return <>
      <rect {...box} x="98" y="76" width="145" height="232" rx="17"/><path d="M139 89h63" stroke="var(--line)" strokeWidth="4" strokeLinecap="round"/><rect x="116" y="132" width="110" height="73" rx="3" fill="var(--surface)" stroke="var(--line)"/><rect x="127" y="147" width="28" height="36" fill="var(--accent-soft)"/><path d="M165 155h48m-48 12h36m-36 12h43M114 120h12m-12 0v12m112-12h-12m12 0v12m0 81v12h-12m-100-12v12h12" stroke="var(--accent)" fill="none"/>
      <path d="M255 181h51m-8-5 8 5-8 5" stroke="var(--accent)" fill="none"/><rect {...box} x="320" y="105" width="222" height="167" rx="3"/>
      {[0,1,2,3].map(i=><g key={i}><text {...text} x="337" y={130+i*34} fontSize="9" fill="var(--muted)">{["NAME", "DATE OF BIRTH", "DOCUMENT TYPE", "RAW OCR"][i]}</text><path d={`M448 ${127+i*34}h73`} stroke="var(--accent)" opacity=".5"/></g>)}
    </>;
    case "validation": return <>
      <rect {...box} x="77" y="92" width="258" height="178" rx="3"/>{[0,1,2,3,4].map(i=><path key={i} d={`M77 ${126+i*29}h258`} stroke="var(--line)"/>)}<path d="M163 92v178m86-178v178" stroke="var(--line)"/>
      <rect x="165" y="157" width="82" height="26" fill="var(--accent-soft)"/><text {...text} x="207" y="174" fontSize="9" textAnchor="middle" fill="var(--accent)">missing</text><text {...text} x="96" y="114" fontSize="9">DATASET</text><path d="M348 170h49" stroke="var(--accent)"/>
      <rect {...box} x="412" y="118" width="142" height="104" rx="3"/><text {...text} x="483" y="147" textAnchor="middle">Correction</text><text {...text} x="483" y="170" textAnchor="middle" fontSize="9" fill="var(--accent)">ACTION → REWARD</text><path d="M439 191h89" stroke="var(--line)"/><path d="M482 232v66H205v-15m-5 5 5-5 5 5" fill="none" stroke="var(--accent)" strokeDasharray="4 5"/>
    </>;
    default: return null;
  }
}
