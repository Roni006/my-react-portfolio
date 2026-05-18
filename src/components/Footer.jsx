import React from 'react';
import { SOCIALS } from '../constants';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6 lg:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8 text-center lg:text-left">
        <div className="flex flex-col items-center lg:items-start">
          <a href="#home" className="text-xl font-display font-bold tracking-tighter">
            AURA<span className="text-primary-500">.</span>
          </a>
          <p className="text-zinc-500 text-sm mt-3">
            © {new Date().getFullYear()} Aura Portfolio. All rights reserved.
          </p>
        </div>

        <div className="flex gap-8 order-last lg:order-none">
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="text-zinc-500 hover:text-white transition-colors text-sm font-medium"
              target="_blank"
              rel="noreferrer"
            >
              {social.name}
            </a>
          ))}
        </div>

        <div className="text-zinc-500 text-sm">
          Design & Build with <span className="text-white">❤</span> by Aura
        </div>
      </div>
    </footer>
  );
}
