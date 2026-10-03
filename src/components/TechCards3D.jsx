import React, { useState } from 'react';
import { Cpu, Terminal, Smartphone, Database, Cloud, Layers, Sparkles, Activity, ShieldCheck, Zap } from 'lucide-react';

export default function TechCards3D() {
  const techStack = [
    { name: 'PyTorch', category: 'Deep Learning', icon: Zap, color: '#ee4c2c', level: 'Primary DL' },
    { name: 'Flutter', category: 'Cross-Platform', icon: Smartphone, color: '#02569B', level: 'Production' },
    { name: 'AV-HuBERT & VSR', category: 'Lip Reading', icon: Sparkles, color: '#38BDF8', level: 'Research' },
    { name: 'DINOv2 & YOLO26s', category: 'Dense CV', icon: Activity, color: '#10B981', level: 'SOTA Retail' },
    { name: 'LangGraph', category: 'Agentic RAG', icon: Layers, color: '#A855F7', level: 'Orchestration' },
    { name: 'C++ & DSA', category: 'Algorithms', icon: Terminal, color: '#00599C', level: 'DA-IICT TA' },
    { name: 'FastAPI', category: 'Backend Systems', icon: Database, color: '#059669', level: 'High Throughput' },
    { name: 'CUDA & PyTorch Dist', category: 'HPC Acceleration', icon: Cpu, color: '#76B900', level: 'GPU Compute' },
    { name: 'FAISS Vector DB', category: 'Vector Search', icon: Database, color: '#6366F1', level: 'Sub-ms Retrieval' },
    { name: 'Docker & Linux', category: 'DevOps & Cloud', icon: Cloud, color: '#2496ED', level: 'Containerized' },
    { name: 'Google ML Kit', category: 'On-Device AI', icon: ShieldCheck, color: '#4285F4', level: 'Mobile OCR' },
    { name: 'Scikit-learn & GBDT', category: 'Tabular SOTA', icon: Sparkles, color: '#F59E0B', level: 'Kaggle #1 / #2' },
  ];

  return (
    <div className="py-12 border-y border-slate-200 dark:border-slate-800/80 my-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-sky-500 dark:text-sky-400 font-bold">
            // Core Engineering Technologies
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            Interactive 3D Tech Arsenal
          </h3>
        </div>
        <p className="text-xs font-mono text-slate-500 max-w-md">
          Hover to inspect 3D tilt perspective and specialization depth across computer vision, mobile frameworks, and high-performance computing.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
        {techStack.map((tech, idx) => (
          <TiltCard key={idx} tech={tech} />
        ))}
      </div>
    </div>
  );
}

function TiltCard({ tech }) {
  const [transform, setTransform] = useState('');
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const Icon = tech.icon;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -14;
    const rotateY = ((x - centerX) / centerX) * 14;

    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`);
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25,
    });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: 'transform 0.15s ease-out',
        transformStyle: 'preserve-3d',
      }}
      className="relative rounded-2xl p-4 bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:shadow-sky-500/10 cursor-pointer overflow-hidden backdrop-blur-md group select-none"
    >
      {/* Glare spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 120px at ${glare.x}% ${glare.y}%, rgba(56, 189, 248, ${glare.opacity}), transparent)`,
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center space-y-2.5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm"
          style={{ backgroundColor: `${tech.color}15`, color: tech.color }}
        >
          <Icon className="w-5 h-5" />
        </div>

        <div>
          <h4 className="text-xs font-bold text-slate-900 dark:text-white tracking-tight">
            {tech.name}
          </h4>
          <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono block">
            {tech.category}
          </span>
        </div>

        <span className="px-2 py-0.5 rounded text-[9px] font-mono font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60">
          {tech.level}
        </span>
      </div>
    </div>
  );
}
