import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Cpu, Smartphone, Layers, Terminal } from 'lucide-react';

export default function Services() {
  const { services } = portfolioData;

  const icons = [Cpu, Smartphone, Layers, Terminal];

  return (
    <section id="services" className="space-y-12 scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-sky-500 dark:text-sky-400 font-bold">
            // Core Disciplines
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mt-2">
            Engineering Specializations
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mt-2 leading-relaxed">
            Four specialized pillars combining mathematical rigor, multimodal deep learning research, and production software engineering.
          </p>
        </div>
      </div>

      {/* Services Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {services.map((item, idx) => {
          const Icon = icons[idx] || Cpu;
          return (
            <div
              key={idx}
              className="relative rounded-3xl p-8 bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-sky-500/40 dark:hover:border-sky-500/40 transition-all duration-300 backdrop-blur-md group flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-black text-slate-300 dark:text-slate-700 group-hover:text-sky-500 transition-colors">
                    {item.num}
                  </span>
                  <div className="p-3 rounded-2xl bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-500/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-sky-600 dark:text-sky-400">
                    {item.tagline}
                  </p>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
