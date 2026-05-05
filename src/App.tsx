/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Github, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Code2, 
  Layers, 
  Terminal, 
  Monitor, 
  Cpu,
  ChevronRight
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from './constants';
import { Project } from './types';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-4 md:p-8 relative overflow-x-hidden">
      {/* Main Container with Heavy Border */}
      <div className="max-w-7xl mx-auto min-h-[calc(100vh-4rem)] border-8 border-slate-900 relative flex flex-col p-6 md:p-12 overflow-hidden bg-slate-950">
        
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900/10 -skew-x-12 translate-x-24 z-0 border-l border-slate-800 pointer-events-none"></div>

        {/* Header Section */}
        <header className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-slate-700 pb-8 mb-12">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-white leading-none"
            >
              {PERSONAL_INFO.name}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-accent font-mono tracking-widest mt-4 uppercase text-xs md:text-sm"
            >
              {PERSONAL_INFO.role} // 4th Year Student PTIT
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 md:mt-0 text-left md:text-right font-mono text-[10px] md:text-xs space-y-1 opacity-60 hover:opacity-100 transition-opacity"
          >
            <p className="flex items-center md:justify-end gap-2"><Phone size={12} className="text-accent"/> {PERSONAL_INFO.phone}</p>
            <p className="flex items-center md:justify-end gap-2"><Mail size={12} className="text-accent"/> {PERSONAL_INFO.email}</p>
            <p className="flex items-center md:justify-end gap-2"><Github size={12} className="text-accent"/> github.com/hungpptit</p>
          </motion.div>
        </header>

        {/* Content Body Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 flex-grow">
          
          {/* Left Column: Bio, Education, Skills */}
          <div className="md:col-span-4 flex flex-col gap-10">
            {/* Bio */}
            <section>
              <h2 className="section-label">
                <span className="section-line"></span> About
              </h2>
              <p className="text-sm leading-relaxed text-slate-400">
                {PERSONAL_INFO.bio}
              </p>
            </section>

            {/* Education */}
            <section>
              <h2 className="section-label">
                <span className="section-line"></span> Education
              </h2>
              <div className="bg-slate-900 border-l-2 border-slate-600 p-4">
                <p className="font-bold text-white text-sm uppercase tracking-tight">{PERSONAL_INFO.university}</p>
                <p className="text-xs text-muted mt-1 italic">Major: Information Technology (2022 – 2027)</p>
                <p className="text-xs mt-3 text-accent font-mono font-bold tracking-wider">GPA: {PERSONAL_INFO.gpa}</p>
              </div>
            </section>

            {/* Skills & Stack */}
            <section>
              <h2 className="section-label">
                <span className="section-line"></span> Skills & Stack
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.name} className="p-3 border border-slate-800 bg-slate-900/50 group hover:border-accent/30 transition-colors">
                    <p className="text-[10px] font-bold text-accent mb-2 uppercase tracking-tighter opacity-70">{cat.name}</p>
                    <div className="flex flex-wrap gap-1">
                      {cat.skills.map(skill => (
                        <span key={skill} className="text-[9px] font-mono text-slate-400">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Interests */}
            <section>
              <h2 className="section-label">
                <span className="section-line"></span> Interests
              </h2>
              <div className="flex flex-wrap gap-y-2 gap-x-4 text-[10px] uppercase tracking-widest opacity-60 font-medium">
                <span>Sports</span>
                <span className="text-accent">•</span>
                <span>Photography</span>
                <span className="text-accent">•</span>
                <span>Puzzles</span>
                <span className="text-accent">•</span>
                <span>Videography</span>
              </div>
            </section>
          </div>

          {/* Right Column: Projects Grid */}
          <div className="md:col-span-8 flex flex-col h-full">
            <h2 className="section-label">
              <span className="section-line"></span> Projects Portfolio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow pb-12">
              {PROJECTS.map((project, idx) => (
                <ProjectCard key={project.title} project={project} index={idx} />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 mt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono uppercase tracking-[0.25em] opacity-40 pt-6 border-t border-slate-800 gap-4">
          <span>Built with Code & Focus</span>
          <span>Available for Internship // 2026-2027</span>
          <span>PTIT Engineering Portfolio</span>
        </footer>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number; key?: string }) {
  const projectNumber = (index + 1).toString().padStart(2, '0');
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-slate-900 border border-slate-800 p-6 flex flex-col relative group overflow-hidden hover:border-slate-600 transition-colors"
    >
      <div className="absolute top-0 right-0 p-3 text-[10px] font-mono text-slate-700 uppercase group-hover:text-accent transition-colors">
        Project {projectNumber}
      </div>
      
      <div className="flex items-center gap-2 mb-4">
         <span className="text-[9px] font-bold text-accent uppercase tracking-widest border border-accent/20 px-2 py-0.5 rounded">
            {project.type}
         </span>
      </div>

      <h3 className="text-lg font-black text-white mb-3 group-hover:text-accent transition-colors uppercase tracking-tight">
        {project.title}
      </h3>
      
      <p className="text-xs text-slate-400 mb-6 leading-relaxed flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map(t => (
          <span key={t} className="px-2 py-1 bg-cyan-950/30 text-accent text-[9px] font-mono border border-cyan-900/50 rounded uppercase tracking-tighter">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
            <Github size={16} />
          </a>
        )}
        <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
          <ExternalLink size={16} />
        </a>
      </div>
    </motion.div>
  );
}

