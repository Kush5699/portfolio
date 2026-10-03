import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Trophy, Award, Medal, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Recognitions() {
  const { achievements } = portfolioData;

  const icons = [Trophy, Award, Sparkles, Medal, Award, Sparkles, CheckCircle2];

  return (
    <section id="milestones" className="space-y-12 scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-sky-500 dark:text-sky-400 font-bold">
            // Verified Honors & Examinations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mt-2">
            Recognitions & Milestones
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mt-2 leading-relaxed">
            International competitions, national examinations, corporate summer schools, and algorithmic ratings.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item, idx) => {
          const Icon = icons[idx] || Award;
          return (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-sky-500/40 dark:hover:border-sky-500/40 transition-all duration-300 backdrop-blur-md flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-500/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                    {item.title}
                  </h4>
                  <span className="text-xs font-mono font-semibold text-sky-600 dark:text-sky-400 block">
                    {item.organization}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>VERIFIED RECORD</span>
                <span>ENTRY #{idx + 1}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
