import React from "react";
import { SOCIALS } from "../constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6 lg:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8 text-center lg:text-left">
        <div className="flex flex-col items-center lg:items-start w-87.5">
          <a
            href="#home"
            className="text-xl font-display font-bold tracking-tighter"
          >
            AnikUi<span className="text-primary-500">.</span>
          </a>
          <p className="text-zinc-500 text-xs sm:text-sm md:text-base mt-3 leading-relaxed max-w-[355px]  mx-auto">
            Passionate frontend developer focused on creating modern,
            responsive, and user-friendly web experiences with clean design and
            efficient code.
          </p>
        </div>

        <div className="flex gap-8 order-last lg:order-0  text-center mx-auto">
          <a
            href="https://www.linkedin.com/in/anik-islam-293414306/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white duration-300"
          >
            Facebook
          </a>

          <a
            href="https://github.com/Roni006"
            target="_blank"
            rel="noopener noreferrer" 
            className="text-zinc-500 hover:text-white duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.facebook.com/anik.islam.roni.06"
            target="_blank"
            rel="noopener noreferrer" 
            className="text-zinc-500 hover:text-white duration-300"
          >
            Linkedin
          </a>
        </div>

        <div className="text-zinc-500 text-sm w-87.5">
          <p className="text-zinc-500 text-sm mt-3">
            © {new Date().getFullYear()} AnikUi Portfolio. Where creativity
            meets clean code
          </p>
        </div>
      </div>
    </footer>
  );
}
