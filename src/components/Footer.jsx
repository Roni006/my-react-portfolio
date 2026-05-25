import React from "react";
// import { SOCIALS } from "../constants";

import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6 lg:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8 text-center lg:text-left">
        <div className="flex flex-col items-center lg:items-start w-87.5">
          <a
            href="#home"
            className="text-[28px] font-display font-bold tracking-tighter"
          >
            AnikUi<span className="text-primary-500">.</span>
          </a>
        </div>

        <div className="text-zinc-500 text-sm w-115">
          <p className="text-zinc-500 text-sm mt-3">
            © {new Date().getFullYear()} All rights reserved. Designed and
            developed by Anik Islam.
          </p>
        </div>

        <div className="flex gap-4 order-last lg:order-0  text-center mx-auto">
          {/* item 1 */}
          <div className="group cursor-pointer">
            <div className="w-8 h-8 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all text-[20px]">
              <a
                href="https://www.facebook.com/anik.islam.roni.06"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlSocialFacebook className="text-[18px]" />
              </a>
            </div>
          </div>

          {/* item 2 */}
          <div className="group cursor-pointer">
            <div className="w-8 h-8 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all text-[20px]">
              <a
                href="https://github.com/Roni006"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscGithubAlt className="text-[18px]" />
              </a>
            </div>
          </div>

          {/* item 3 */}
          <div className="group cursor-pointer">
            <div className="w-8 h-8 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-400 group group-hover:bg-primary-500 group-hover:text-white transition-all text-[20px]">
              <a
                href="https://www.linkedin.com/in/anik-islam-293414306/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlSocialLinkedin className="text-[18px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
