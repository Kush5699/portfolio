import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCards3D from './components/TechCards3D';
import ProjectsGrid from './components/ProjectsGrid';
import Services from './components/Services';
import About from './components/About';
import Timeline from './components/Timeline';
import Recognitions from './components/Recognitions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarsBackgroundCanvas from './components/canvas/StarsBackgroundCanvas';

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'dark';
    } catch (e) {
      return 'dark';
    }
  });

  useEffect(() => {
    try {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);
    } catch (e) {
      console.warn('localStorage access blocked or unavailable', e);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#07090E] text-slate-900 dark:text-slate-100 relative overflow-x-hidden scroll-smooth selection:bg-sky-500 selection:text-black transition-colors duration-300">
      
      {/* 3D Particle Stars Canvas Background */}
      <StarsBackgroundCanvas />

      {/* Top Ambient Glow Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.06)_0%,transparent_65%)] dark:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08)_0%,transparent_65%)] pointer-events-none z-0" />

      {/* Glassmorphic Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 pt-24 pb-16 space-y-24 sm:space-y-32 relative z-10">
        
        {/* 1. Hero with 3D Neural Core & Identity */}
        <Hero />

        {/* 2. Interactive 3D Tech Arsenal (Hover perspective tilt) */}
        <TechCards3D />

        {/* 3. Selected Engineering Projects & Case Study Modal */}
        <ProjectsGrid />

        {/* 4. Engineering Specializations & Disciplines */}
        <Services />

        {/* 5. About Kush Patel (Photo & Academic Narrative) */}
        <About />

        {/* 6. Professional Experience & Academic Timeline */}
        <Timeline />

        {/* 7. Honors & Recognitions (Amazon ML School, ICPR 2026, GATE, Kaggle) */}
        <Recognitions />

        {/* 8. Contact Section with 3D Spatial Globe */}
        <Contact />

        {/* 9. Minimalist Footer + Floating Resume Button */}
        <Footer />

      </main>
    </div>
  );
}
