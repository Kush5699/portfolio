import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, Sparkles } from 'lucide-react';

export default function Timeline() {
  const { education, experience, positionsOfResponsibility } = portfolioData;

  return (
    <section id="experience" className="space-y-12 scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-sky-500 dark:text-sky-400 font-bold">
            // Track Record & Pathways
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mt-2">
            Experience & Education
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mt-2 leading-relaxed">
            Institutional positions, engineering mentorships, and academic qualifications.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Professional & Leadership Roles (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight flex items-center space-x-2">
            <Briefcase className="w-5 h-5 text-sky-500" />
            <span>Engineering Experience & Appointments</span>
          </h3>

          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 backdrop-blur-md space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                      {exp.role}
                    </h4>
                    <span className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400 uppercase">
                      {exp.company}
                    </span>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block font-medium">
                      {exp.duration}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed list-disc list-inside">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="text-left">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Positions of Responsibility */}
            <div className="pt-2 space-y-4">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold">
                // Community & Leadership Appointments
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {positionsOfResponsibility.map((por, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 backdrop-blur-md space-y-2"
                  >
                    <div className="flex items-center space-x-1.5 text-purple-500 font-mono text-[10px] font-bold uppercase">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{por.duration}</span>
                    </div>
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                      {por.role}
                    </h5>
                    <span className="text-xs font-mono text-sky-600 dark:text-sky-400 block">
                      {por.organization}
                    </span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {por.bullets[0]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Academic Pathway (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight flex items-center space-x-2">
            <GraduationCap className="w-5 h-5 text-purple-500" />
            <span>Academic Qualifications</span>
          </h3>

          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 backdrop-blur-md space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {edu.institution}
                    </p>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 whitespace-nowrap">
                    {edu.grade}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.duration}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
