import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Active section tracking
      const sections = NAV_LINKS.map(link => link.href.replace('#', ''));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-6`}>
      <div className={`max-w-6xl mx-auto px-4 md:px-8 py-4 md:py-5 rounded-full transition-all duration-500 flex justify-between items-center ${isScrolled ? 'glass-nav shadow-2xl border border-white/10' : 'bg-transparent'}`}>
        <a href="#home" className="text-lg md:text-xl font-display font-bold tracking-tighter shrink-0">
          AURA<span className="text-primary-500">.</span>
        </a>

        {/* Desktop Nav - Adjust breakpoint to lg for more space */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const sectionName = link.href.replace('#', '');
            const isActive = activeSection === sectionName;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-bold uppercase tracking-wider transition-all relative px-2 py-1 ${isActive ? 'text-primary-400' : 'text-zinc-400 hover:text-white'}`}
              >
                {link.name}
                {isActive && (
                  <motion.span 
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-500 rounded-full"
                  />
                )}
              </a>
            );
          })}
        </div>
        
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className={`hidden sm:block px-5 py-2 rounded-full bg-primary-600 hover:bg-primary-500 text-white text-[10px] uppercase font-bold tracking-widest transition-all`}
          >
            Hire Me
          </a>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="lg:hidden mt-4 mx-auto max-w-sm glass-nav border border-white/10 rounded-3xl overflow-hidden p-6 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-base font-medium transition-colors ${activeSection === link.href.replace('#', '') ? 'text-primary-400' : 'text-zinc-400'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
