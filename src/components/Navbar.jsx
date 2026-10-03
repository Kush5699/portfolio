import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Download, Sun, Moon, Volume2, VolumeX, Menu, X, Terminal } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const { personalInfo } = portfolioData;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Web Audio API synthetic futuristic blip sound
  const playClickSound = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1400, audioCtx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch (e) {
      // AudioContext unavailable
    }
  };

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Specializations', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Milestones', href: '#milestones' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-8 pt-4">
      <div
        className={`max-w-7xl mx-auto rounded-3xl transition-all duration-300 px-5 sm:px-7 py-3 flex items-center justify-between ${
          scrolled
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-xl'
            : 'bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50'
        }`}
      >
        {/* Brand Terminal Identifier */}
        <a
          href="#"
          onClick={playClickSound}
          className="flex items-center space-x-2 font-mono font-black text-sm text-slate-900 dark:text-white group select-none"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-sky-400 group-hover:scale-125 transition-transform" />
          <span>
            kush_patel<span className="text-sky-500 font-bold">:</span><span className="text-purple-500">~</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={playClickSound}
              className="px-3.5 py-1.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Controls: Sound, Theme, CV Button */}
        <div className="flex items-center space-x-2">
          {/* Sound toggle */}
          <button
            onClick={() => {
              setSoundEnabled(!soundEnabled);
              if (!soundEnabled) playClickSound();
            }}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={soundEnabled ? 'Disable Audio FX' : 'Enable Audio FX'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-sky-400" /> : <VolumeX className="w-4 h-4 opacity-50" />}
          </button>

          {/* Theme toggle */}
          <button
            onClick={() => {
              playClickSound();
              toggleTheme();
            }}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Toggle Light / Dark Mode"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Resume Download CTA */}
          <a
            href={personalInfo.resumeUrl}
            download="Kush_Patel_Resume.pdf"
            onClick={playClickSound}
            className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 rounded-2xl bg-sky-500 hover:bg-sky-400 text-black font-mono font-bold text-xs shadow-md transition-all hover:scale-105"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden mt-2 p-5 rounded-3xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 shadow-2xl space-y-3 font-mono text-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                playClickSound();
                setMobileOpen(false);
              }}
              className="block px-3 py-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {link.label}
            </a>
          ))}
          <a
            href={personalInfo.resumeUrl}
            download="Kush_Patel_Resume.pdf"
            className="block text-center py-2.5 px-4 rounded-xl bg-sky-500 text-black font-bold text-xs"
          >
            Download Resume (PDF)
          </a>
        </div>
      )}
    </header>
  );
}
