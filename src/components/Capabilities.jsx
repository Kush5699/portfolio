import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Capabilities() {
  const { skills } = portfolioData;

  const sections = [
    { title: 'Programming Languages', items: skills.languages || [] },
    { title: 'ML & Deep Learning', items: skills.mlDl || [] },
    { title: 'Web & Mobile Systems', items: skills.webMobile || [] },
    { title: 'Developer Tooling', items: skills.tools || [] },
    { title: 'Cloud & Database Engines', items: skills.cloudDb || [] },
    { title: 'Core CS Foundations', items: skills.coreCs || [] }
  ];

  return (
    <section id="capabilities" className="space-y-8 scroll-mt-20">
      
      {/* Section Header */}
      <div className="flex justify-between items-center border-b border-gray-200 dark:border-white/[0.04] pb-3 mb-4">
        <div className="flex items-center space-x-3">
          <span className="font-mono text-xs text-cobalt dark:text-primary font-bold">// 02</span>
          <h2 className="text-xl font-bold text-ink dark:text-white tracking-tight uppercase">Technical Skills</h2>
        </div>
        <span className="font-mono text-[10px] text-gray-400">
          LOG: STACK_LEDGER
        </span>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((sect, idx) => (
          <div 
            key={idx}
            className="glass-panel p-5 rounded-2xl flex flex-col justify-between"
          >
            <h3 className="text-xs font-mono font-bold text-ink dark:text-white uppercase tracking-wider mb-4 border-b border-black/[0.04] dark:border-white/[0.04] pb-2">
              {sect.title}
            </h3>

            <div className="flex flex-wrap gap-1.5">
              {sect.items.map((item, itemIdx) => (
                <span 
                  key={itemIdx}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] text-gray-600 dark:text-gray-400 select-all hover:border-cobalt dark:hover:border-primary hover:text-ink dark:hover:text-white transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
