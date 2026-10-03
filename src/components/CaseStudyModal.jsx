import React from 'react';
import { X, Github, ExternalLink, Cpu, BarChart3, Layers, Settings, Award, Terminal } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0B0F19] border border-slate-700/80 rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-400 hover:text-white transition-colors"
          title="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Area */}
        <div className="space-y-3 pr-10 border-b border-slate-800 pb-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
              {project.category}
            </span>
            {project.badge && (
              <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 font-bold">
                {project.badge}
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex flex-wrap items-center gap-3">
            <span>{project.title}</span>
            <div className="flex items-center space-x-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
                title="View GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 transition-colors border border-sky-500/30"
                  title="View Live Demo or Benchmark"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </h2>

          <p className="text-sm font-semibold text-sky-400 font-mono">
            {project.tagline}
          </p>
        </div>

        {/* High-level summary */}
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-sm text-slate-300 leading-relaxed">
          {project.description}
        </div>

        {/* Deep Dive Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          
          {/* 1. Problem Statement */}
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2.5">
            <h4 className="font-bold text-white tracking-wide uppercase flex items-center space-x-2 text-xs font-mono text-purple-400">
              <Layers className="w-4 h-4 text-purple-400" />
              <span>1. Problem Statement & Context</span>
            </h4>
            <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
              {project.deepDive.problem}
            </p>
          </div>

          {/* 2. Architecture */}
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2.5">
            <h4 className="font-bold text-white tracking-wide uppercase flex items-center space-x-2 text-xs font-mono text-sky-400">
              <Cpu className="w-4 h-4 text-sky-400" />
              <span>2. System Architecture & Pipeline</span>
            </h4>
            <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
              {project.deepDive.architecture}
            </p>
          </div>

          {/* 3. Engineering Optimizations */}
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2.5">
            <h4 className="font-bold text-white tracking-wide uppercase flex items-center space-x-2 text-xs font-mono text-emerald-400">
              <Settings className="w-4 h-4 text-emerald-400" />
              <span>3. Engineering & Optimizations</span>
            </h4>
            <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
              {project.deepDive.optimization}
            </p>
          </div>

          {/* 4. Benchmarks & Results */}
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2.5">
            <h4 className="font-bold text-white tracking-wide uppercase flex items-center space-x-2 text-xs font-mono text-amber-400">
              <Award className="w-4 h-4 text-amber-400" />
              <span>4. Quantifiable Benchmarks & Metrics</span>
            </h4>
            <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
              {project.deepDive.metrics}
            </p>
          </div>

        </div>

        {/* Tech Stack Pills */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2">
          <span className="font-mono text-[10px] text-slate-500 uppercase mr-1">Tech Stack:</span>
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800/70 text-slate-300 border border-slate-700/60"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}
