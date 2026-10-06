import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { BookOpen, Award, CheckCircle2, MapPin, GraduationCap, Sparkles } from 'lucide-react';

export default function About() {
  const { personalInfo, education, metrics } = portfolioData;

  return (
    <section id="about" className="space-y-12 scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-sky-500 dark:text-sky-400 font-bold">
            // Profile & Narrative
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mt-2">
            Engineering Background
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Photo & Key Verification Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
            <img
              src={personalInfo.profilePic}
              alt={personalInfo.fullName}
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 right-6 z-20 space-y-1 text-white">
              <span className="font-mono text-[10px] uppercase tracking-widest text-sky-400 font-bold block">
                M.Tech (ICT) in Machine Learning
              </span>
              <h3 className="text-2xl font-black tracking-tight">{personalInfo.fullName}</h3>
              <p className="text-xs text-slate-300 flex items-center space-x-1.5 font-mono pt-1">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>DA-IICT, Gandhinagar, Gujarat</span>
              </p>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 gap-3.5">
            <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">
                DA-IICT CPI
              </span>
              <span className="text-2xl font-black text-sky-500 dark:text-sky-400">9.39 / 10</span>
              <span className="text-[10px] text-slate-400 font-mono block mt-1">Top Tier Standing</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">
                ICPR 2026
              </span>
              <span className="text-2xl font-black text-purple-500 dark:text-purple-400">3rd Global</span>
              <span className="text-[10px] text-slate-400 font-mono block mt-1">Satellite Crop Disease</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">
                Amazon ML School
              </span>
              <span className="text-2xl font-black text-amber-500 dark:text-amber-400">Top 3,000</span>
              <span className="text-[10px] text-slate-400 font-mono block mt-1">Selected across India</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">
                GATE Qualified
              </span>
              <span className="text-2xl font-black text-emerald-500 dark:text-emerald-400">CS & AI</span>
              <span className="text-[10px] text-slate-400 font-mono block mt-1">CS 456 | DA 413</span>
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Core Values (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-8 rounded-3xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 backdrop-blur-md space-y-5">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Bridging Machine Learning Research with Production Engineering
            </h3>
            
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              I am an M.Tech Graduate Student in Information and Communication Technology specializing in Machine Learning at Dhirubhai Ambani University (DA-IICT) with a 9.39 CPI. My work focuses on multimodal deep learning, computer vision, and building high-performance cross-platform software.
            </p>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Over the past two years, I have pushed boundaries across several high-impact problem spaces: from introducing the first Visual Speech Recognition pipeline for the Gujarati language (SyncVSR with AV-HuBERT and Conformer) to fine-tuning dense object detection architectures (YOLO26s with DINOv2 embeddings on 1.7M annotations for retail planogram compliance).
            </p>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Beyond research prototypes, I am deeply committed to software craftsmanship. As a Flutter developer, I build resilient cross-platform applications integrated with local on-device ML Kit OCR and serverless backends. As Teaching Assistant for Data Structures and Algorithms in C++ at DA-IICT, I mentor 30+ undergraduate students in algorithmic efficiency and memory management.
            </p>
          </div>

          {/* Institutional Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 backdrop-blur-md space-y-2">
              <div className="flex items-center space-x-2 text-sky-500 font-mono text-xs font-bold uppercase">
                <GraduationCap className="w-4 h-4" />
                <span>DA-IICT TA Appointment</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Appointed Teaching Assistant for DSA in C++. Design problem sets, evaluate asymptotic complexity, and run doubt clinics.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 backdrop-blur-md space-y-2">
              <div className="flex items-center space-x-2 text-purple-500 font-mono text-xs font-bold uppercase">
                <Sparkles className="w-4 h-4" />
                <span>Gemini Ambassador</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Representing Google's Gemini technologies across student developer ecosystems and leading hands-on API workshops.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
