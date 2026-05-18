import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 pb-20 md:pt-40 md:pb-24 lg:py-28 text-white">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-indigo-600/20 blur-[120px] rounded-full" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.2em] text-primary-400 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold tracking-tight mb-8 leading-[1.1]"
          >
            Crafting Digital <br />
            <span className="gradient-text text-white">Experiences.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base lg:text-lg text-zinc-400 mb-12 max-w-lg leading-relaxed mx-auto lg:mx-0"
          >
            I'm a Front-End Developer specializing in building exceptional digital products that are functional, accessible, and beautiful.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6"
          >
            <a
              href="#portfolio"
              className="group w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              View Portfolio
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 font-bold transition-all"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative block max-w-xs md:max-w-sm lg:max-w-md mx-auto lg:ml-auto"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
              alt="Professional Front-End Developer"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
          </div>
          
          {/* Decorative elements behind image */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-600/20 rounded-full blur-[80px]" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-[80px]" />
          
          {/* Glass floating card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-6 left-6 glass-card p-5 border border-white/20 shadow-2xl z-20 hidden xl:block backdrop-blur-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400">
                <ArrowRight size={20} className="-rotate-45" />
              </div>
              <div>
                <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Focus</div>
                <div className="text-sm font-bold text-white">Modern UI & Performance</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating abstract code elements or just circles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
         {/* Could add SVG patterns here */}
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 hidden lg:block"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
