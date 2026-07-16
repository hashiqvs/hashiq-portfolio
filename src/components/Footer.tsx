import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-white/5 bg-[#050510]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 z-10 relative">
        
        {/* Brand Details */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-sm font-bold font-display tracking-wider text-white">
            HASHIQ VS
          </p>
          <p className="text-xs text-white/40">
            © 2026 All rights reserved. Recruiter-friendly Portfolio.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/hashiqvs"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-lg border border-white/5 hover:border-purple-500/30 text-white/60 hover:text-white transition-all hover:scale-105 cursor-pointer"
            aria-label="GitHub Profile"
          >
            <Github size={15} />
          </a>
          <a
            href="https://linkedin.com/in/hashiqvs"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-lg border border-white/5 hover:border-purple-500/30 text-white/60 hover:text-white transition-all hover:scale-105 cursor-pointer"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={15} />
          </a>
          <a
            href="mailto:hashiqvs.work@gmail.com"
            className="p-2.5 rounded-lg border border-white/5 hover:border-purple-500/30 text-white/60 hover:text-white transition-all hover:scale-105 cursor-pointer"
            aria-label="Email Contact"
          >
            <Mail size={15} />
          </a>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-purple-400 hover:text-purple-300 transition-colors py-2 group cursor-pointer"
        >
          Back To Top
          <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
};
