import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';

import portfolio1 from '../../src/assets/img/portfolio/portfolio1.png'

const CATEGORIES = ['All','E-commerce', 'Landing Page',"Event","Consultancy"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeCategory);



  return (
    <section id="portfolio" className="section-padding bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 px-6 lg:px-0"
        >
          <div>
            <h2 className="text-sm uppercase tracking-widest text-primary-500 font-bold mb-4">
              Portfolio
            </h2>
            <h3 className="text-4xl lg:text-6xl font-display font-bold">
              Featured <span className="text-white">Works</span>
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === category
                    ? "bg-primary-600 text-white shadow-lg"
                    : "bg-white/5 text-zinc-400 hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl aspect-16/10">
                  <img
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-x-8 bottom-8 flex justify-between items-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex gap-4">
                      <a
                        href={project.demo}
                        className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all shadow-xl"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.github} 
                        className="w-12 h-12 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-zinc-800 transition-all border border-white/10 shadow-xl"
                        target="_blank"
                        rel="norefe rrer"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div> 

                
                <div className="mt-8 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, t) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase tracking-wider font-bold text-primary-400 bg-primary-400/10 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                   {project.title}
                  </h4>
                  <p className="text-zinc-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-zinc-500">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
