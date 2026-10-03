import React, { useState } from 'react';
import { Github, ExternalLink, ChevronRight, BarChart2, Cpu } from 'lucide-react';

export default function ProjectCard3D({ project, onOpenModal }) {
  const [transform, setTransform] = useState('');
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`);
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.18,
    });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)');
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: 'transform 0.15s ease-out, box-shadow 0.2s ease-out',
        transformStyle: 'preserve-3d',
      }}
      className="relative rounded-3xl p-6 sm:p-7 bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl dark:hover:shadow-sky-500/10 flex flex-col justify-between space-y-6 overflow-hidden backdrop-blur-md group"
    >
      {/* Glare spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 220px at ${glare.x}% ${glare.y}%, rgba(56, 189, 248, ${glare.opacity}), transparent)`,
        }}
      />

      {/* Top Banner & Category */}
      <div className="space-y-3 relative z-10">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-semibold">
            {project.category}
          </span>
          {project.badge && (
            <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 font-bold">
              {project.badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-xs font-mono text-sky-600 dark:text-sky-400 font-semibold leading-relaxed">
          {project.tagline}
        </p>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Tech pills & Action bar */}
      <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800 relative z-10">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center space-x-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-sky-50 dark:bg-sky-500/10 hover:bg-sky-100 dark:hover:bg-sky-500/20 text-sky-600 dark:text-sky-400 transition-colors border border-sky-200 dark:border-sky-500/30"
                title="Live Demo or Benchmark"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <button
            onClick={() => onOpenModal(project)}
            className="flex items-center space-x-1 text-xs font-mono font-bold text-sky-600 dark:text-sky-400 hover:text-sky-500 dark:hover:text-sky-300 group/btn"
          >
            <span>Inspect Architecture</span>
            <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
