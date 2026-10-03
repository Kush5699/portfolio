import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp, Download, Terminal } from 'lucide-react';

export default function Footer() {
  const { personalInfo } = portfolioData;
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-24 border-t border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-500">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding & Status */}
        <div className="space-y-1 text-center md:text-left">
          <p className="font-bold text-slate-700 dark:text-slate-300">
            Kush Patel | Machine Learning Researcher & Flutter Developer
          </p>
          <p className="text-[11px] text-slate-400">
            Dhirubhai Ambani University (DA-IICT) | CPI: 9.75
          </p>
        </div>

        {/* Mid: Social links */}
        <div className="flex items-center space-x-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:text-sky-500 transition-colors"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:text-sky-500 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:text-sky-500 transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-center md:text-right text-[11px]">
          <p>© {new Date().getFullYear()} Kush Patel. All rights reserved.</p>
        </div>

      </div>

      {/* FLOATING ACTION INTERACTION BAR (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3 pointer-events-none">
        
        {/* Floating Download CV Button */}
        <a
          href={personalInfo.resumeUrl}
          download="Kush_Patel_Resume.pdf"
          className="pointer-events-auto flex items-center justify-center p-3.5 rounded-full bg-sky-500 hover:bg-sky-400 text-black shadow-xl shadow-sky-500/20 hover:scale-110 active:scale-95 transition-all duration-300 group"
          title="Download Kush Patel's Resume (PDF)"
        >
          <Download className="w-5 h-5 animate-pulse" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 font-mono font-bold text-xs transition-all duration-500 ease-in-out whitespace-nowrap">
            DOWNLOAD CV
          </span>
        </a>

        {/* Back To Top Button */}
        <button
          onClick={handleScrollTop}
          className={`pointer-events-auto p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-sky-500 shadow-md hover:scale-105 active:scale-95 transition-all duration-300 ${
            showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
          }`}
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
