import React from "react";
import { motion } from "framer-motion";
import { FileText, ArrowRight, Mail } from "lucide-react";

export const Hero: React.FC = () => {
  const techTags = [
    "Python",
    "SQL",
    "Power BI",
    "Machine Learning",
    "Deep Learning",
    "Data Visualization",
    "Git & Github",
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Side: Bio & Details */}
        <div className="lg:col-span-7 text-left space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-[0.3em] text-purple-400 uppercase"
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display text-white"
          >
            HASHIQ VS
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl font-bold tracking-tight text-white/80 font-display"
          >
            Data Analyst | Machine Learning & Deep Learning Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm sm:text-base leading-relaxed text-white/60 max-w-xl"
          >
            I build intelligent solutions that turn data into insight through analytics, interactive visualizations, and machine learning and deep learning models that solve real-world problems.
          </motion.p>

          {/* Tech Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-2 pt-2"
          >
            {techTags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-md border border-white/5 bg-white/5 text-white/50"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-lg bg-white hover:bg-white/90 text-black font-semibold text-xs tracking-wider uppercase flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <FileText size={14} />
              Download Resume
            </motion.a>

            <motion.button
              onClick={() => scrollToSection("projects")}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-lg border border-purple-500/20 hover:border-purple-500 bg-purple-500/5 hover:bg-purple-500/10 text-white font-semibold text-xs tracking-wider uppercase flex items-center gap-2 transition-all cursor-pointer"
            >
              View Projects
              <ArrowRight size={14} />
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-lg border border-white/5 hover:border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs tracking-wider uppercase flex items-center gap-2 transition-all cursor-pointer"
            >
              <Mail size={14} />
              Contact Me
            </motion.button>
          </motion.div>
        </div>

        {/* Right Side: Circular Photo Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
          >
            {/* Ambient Purple Backdrop Shadow Glow */}
            <div className="absolute inset-0 rounded-full bg-purple-500/10 blur-3xl animate-pulse-glow" />

            {/* Circular Profile Container */}
            <div className="w-full h-full rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md p-4 flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.08)]">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-purple-500/20 shadow-2xl relative">
                <img
                  src="/profile.jpg"
                  alt="Hashiq VS Portrait"
                  className="w-full h-full object-cover grayscale-[15%] transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
