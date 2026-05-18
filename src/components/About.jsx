import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'motion/react';
import { SKILLS, STATS } from '../constants';

function Counter({ value }) {
  const numericValue = parseInt(value, 10);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
    duration: 2000,
  });

  const displayValue = useTransform(springValue, (current) => Math.floor(current));

  useEffect(() => {
    if (isInView) {
      springValue.set(numericValue);
    }
  }, [isInView, numericValue, springValue]);

  return (
    <span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {value.includes('+') && '+'}
      {value.includes('%') && '%'}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="section-padding max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
          <div className="mb-8">
             <h2 className="text-sm uppercase tracking-widest text-primary-500 font-bold mb-3">About</h2>
             <h3 className="text-4xl lg:text-5xl font-display font-bold leading-tight">
               Building <span className="text-white">superior digital</span> products.
             </h3>
          </div>
          
          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <p>
              Over 5 years of industry experience crafting responsive, user-friendly websites. I focus on clean, scalable code and polished user interfaces.
            </p>
            <p>
              I believe great software lives at the intersection of robust engineering and thoughtful design.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-12 py-8 border-y border-white/5">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="text-3xl font-display font-bold text-white mb-1">
                   <Counter value={stat.value} />
                </div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Skills & Tech Structured Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative grid grid-cols-2 gap-4"
        >
          {/* Main Skills Card */}
          <div className="col-span-2 glass-card p-8 bg-zinc-900/40 border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 blur-[50px] -mr-16 -mt-16 group-hover:bg-primary-500/20 transition-colors" />
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6">Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((skill, i) => (
                <div key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:border-primary-500/30 transition-all">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Stack */}
          <div className="glass-card p-6 bg-zinc-900/40 border-white/5 flex flex-col justify-between">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4">Core Stack</h4>
            <div className="space-y-3">
              {['GSAP', 'Firebase', 'Redux'].map((skill, i) => (
                <div key={i} className="text-xs text-zinc-300 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Workflow */}
          <div className="glass-card p-6 bg-primary-600/5 border-primary-500/10 flex flex-col justify-between">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary-400 mb-4">Workflow</h4>
            <div className="space-y-3">
              {['Git', 'Vite', 'Figma'].map((skill, i) => (
                <div key={i} className="text-xs text-zinc-300 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy Card */}
          <div className="col-span-2 glass-card p-6 bg-zinc-950/50 border-white/5">
            <p className="text-sm text-zinc-400 leading-relaxed italic">
              "Continuous learning is my core philosophy. Currently diving into WebGL and high-performance rendering."
            </p>
          </div>

          {/* Background Glow */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-600/5 blur-[100px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
