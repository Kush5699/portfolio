import React, { useState } from 'react';
import { Mail, Github, Linkedin, Download, Terminal, ChevronRight, Sparkles, Award, ArrowDown, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Hero3DCanvas from './canvas/Hero3DCanvas';
import TerminalDrawer from './TerminalDrawer';

export default function Hero() {
  const { personalInfo, metrics } = portfolioData;
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <section className="relative pt-6 sm:pt-10 pb-16 border-b border-slate-200 dark:border-slate-800">
      
      {/* Top Status Capsule */}
      <div className="flex items-center justify-between flex-wrap gap-3 mb-8">
        <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block"></span>
          <span>Open for Machine Learning & Software Engineering Roles</span>
        </div>

        <button
          onClick={() => setTerminalOpen(true)}
          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 hover:bg-sky-500/20 text-slate-700 dark:text-slate-300 hover:text-sky-400 border border-slate-300 dark:border-slate-700 text-xs font-mono transition-all"
        >
          <Terminal className="w-3.5 h-3.5 text-sky-400" />
          <span>Launch Workstation Terminal</span>
        </button>
      </div>

      {/* Main Grid: Left Typography & Right 3D Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Heading & Identity (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          <div className="space-y-2">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-sky-600 dark:text-sky-400 block">
              DA-IICT M.Tech (CPI: 9.39) | Amazon ML Summer School | Gemini Ambassador
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[0.95]">
              KUSH <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500">PATEL</span>
            </h1>

            <p className="text-base sm:text-xl font-bold text-slate-700 dark:text-slate-300 tracking-tight pt-1">
              Machine Learning Researcher & Flutter Developer
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
            I engineer deep learning systems including visual speech recognition pipelines and dense retail monitoring models, alongside building high-performance, cross-platform mobile applications in Flutter.
          </p>

          {/* Interactive Navigation Pills (Inspired by Reference Portfolio) */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <a
              href="#work"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-black font-mono font-bold text-xs shadow-md transition-all hover:scale-105"
            >
              <span>Explore AI Systems</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setTerminalOpen(true)}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white font-mono text-xs border border-slate-700 transition-all hover:border-sky-400"
            >
              <Terminal className="w-3.5 h-3.5 text-sky-400" />
              <span>Query Metrics</span>
            </button>

            <a
              href="#services"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs border border-slate-200 dark:border-slate-800 transition-all"
            >
              <span>Specializations</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Kush_Patel_Resume.pdf"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 dark:text-purple-400 font-mono text-xs border border-purple-500/20 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Get Resume</span>
            </a>
          </div>

          {/* Social and Coding Profile Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-all shadow-sm"
              title="Send Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-all shadow-sm"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-all shadow-sm"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <div className="h-5 w-px bg-slate-300 dark:bg-slate-800 mx-1 hidden sm:block" />

            <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px]">
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-sky-500 hover:border-sky-500 transition-all"
              >
                LeetCode: <strong className="text-slate-900 dark:text-white">1682</strong>
              </a>
              <a
                href={personalInfo.codechef}
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-sky-500 hover:border-sky-500 transition-all"
              >
                CodeChef: <strong className="text-slate-900 dark:text-white">3-Star (1658)</strong>
              </a>
              <a
                href={personalInfo.codeforces}
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-sky-500 hover:border-sky-500 transition-all"
              >
                Codeforces: <strong className="text-slate-900 dark:text-white">1089</strong>
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: 3D Holographic Canvas (5 cols) */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="relative w-full rounded-3xl bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200/80 dark:border-slate-800/80 shadow-2xl backdrop-blur-xl overflow-hidden p-2">
            
            {/* Corner Decorative Chips */}
            <div className="absolute top-3 left-3 z-10 flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold">
                Three.js WebGL Real-Time Core
              </span>
            </div>

            <div className="absolute top-3 right-3 z-10 font-mono text-[9px] text-slate-500 uppercase">
              FPS: 60 | DPI: Auto
            </div>

            {/* Canvas */}
            <Hero3DCanvas />

          </div>
        </div>

      </div>

      {/* Terminal Workstation Drawer */}
      <TerminalDrawer
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </section>
  );
}
