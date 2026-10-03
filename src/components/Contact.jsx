import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import GlobeCanvas from './canvas/GlobeCanvas';
import { Mail, Linkedin, Github, Send, Copy, Check, ExternalLink, Sparkles, MapPin } from 'lucide-react';

export default function Contact() {
  const { personalInfo } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="space-y-12 scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-sky-500 dark:text-sky-400 font-bold">
            // Direct Gateway
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mt-2">
            Let's Build Something Intelligent
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mt-2 leading-relaxed">
            Available for machine learning engineering roles, research collaborations, and production software consulting.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Links & 3D Globe (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-7 rounded-3xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 backdrop-blur-md space-y-5">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              Fast Connections
            </h3>

            {/* Email Card with 1-click copy */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between group">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                  Primary Email
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-mono break-all">
                  {personalInfo.email}
                </span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-colors shadow-sm ml-2 flex-shrink-0"
                title="Copy Email to Clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 hover:border-sky-500 text-slate-700 dark:text-slate-300 hover:text-sky-500 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center space-x-2">
                  <Linkedin className="w-4 h-4 text-sky-500" />
                  <span className="text-xs font-bold font-mono">LinkedIn</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 hover:border-sky-500 text-slate-700 dark:text-slate-300 hover:text-sky-500 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center space-x-2">
                  <Github className="w-4 h-4 text-purple-500" />
                  <span className="text-xs font-bold font-mono">GitHub</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* 3D Globe Visual */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <GlobeCanvas />
            </div>

          </div>
        </div>

        {/* Right Column: Contact Message Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 backdrop-blur-md space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Send a Message
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1">
                Transmits directly to kushp756@gmail.com
              </p>
            </div>

            {sent ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                <Sparkles className="w-8 h-8 text-emerald-500 mx-auto animate-bounce" />
                <h4 className="text-base font-bold text-emerald-600 dark:text-emerald-400">
                  Message Transmitted Successfully!
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Thank you for reaching out. I will respond to your inquiry shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jane Doe"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-xs sm:text-sm outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-xs sm:text-sm outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your role, research problem, or project idea..."
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-xs sm:text-sm outline-none focus:border-sky-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-sky-500 hover:bg-sky-400 text-black font-mono font-bold text-xs sm:text-sm shadow-md hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                >
                  <span>Transmit Transmission</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
