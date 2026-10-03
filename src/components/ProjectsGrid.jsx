import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectCard3D from './ProjectCard3D';
import CaseStudyModal from './CaseStudyModal';
import { Sparkles, Terminal } from 'lucide-react';

export default function ProjectsGrid() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Deep Learning & CV', 'Agentic AI & RAG', 'Mobile & Systems'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="space-y-10 scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-sky-500 dark:text-sky-400 font-bold flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>// Production & Research Systems</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mt-2">
            Selected Engineering Works
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mt-2 leading-relaxed">
            Architected, trained, and deployed across computer vision, cross-modal speech recognition, agentic reasoning, and high-performance mobile infrastructure.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-sky-500 text-black shadow-md font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects 3D Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard3D
            key={project.id}
            project={project}
            onOpenModal={setSelectedProject}
          />
        ))}
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
