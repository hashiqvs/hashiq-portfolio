import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github } from "./BrandIcons";

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  preview: React.ReactNode;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

export const Projects: React.FC = () => {
  const projectsList: ProjectItem[] = [
    {
      id: 1,
      title: "South India's Corporate Insights",
      description: "Interactive Power BI dashboard analysing company and industry trends across South India.",
      techStack: ["Power BI", "Power Query", "DAX", "Excel"],
      githubUrl: "https://github.com/hashiqvs/South-India-s-Corporate-Insights-Dashboard",
      liveUrl: "#",
      preview: (
        <div className="w-full h-full bg-[#050510] border border-white/5 rounded-t-xl overflow-hidden p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-[10px] uppercase font-bold tracking-widest text-purple-400 font-mono">Insights Dashboard</span>
            <div className="flex space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
              <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 py-2 flex-1 items-center">
            <div className="bg-white/[0.02] border border-white/5 rounded p-2 h-14 flex flex-col justify-between">
              <span className="text-[8px] text-white/40 uppercase">Revenue</span>
              <span className="text-xs font-bold text-white font-mono">$12.4M</span>
            </div>
            <div className="bg-white/[0.02] border border-white/5 rounded p-2 h-14 flex flex-col justify-between col-span-2">
              <span className="text-[8px] text-white/40 uppercase">Geospatial Distribution</span>
              <div className="flex items-end space-x-1.5 h-6 mt-1">
                <div className="w-full bg-purple-500/20 h-[30%] rounded-t-sm" />
                <div className="w-full bg-purple-500/40 h-[60%] rounded-t-sm" />
                <div className="w-full bg-purple-500 h-[90%] rounded-t-sm" />
                <div className="w-full bg-purple-500/60 h-[50%] rounded-t-sm" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Loan Approval Prediction System",
      description: "Machine Learning model classifying loan applications to predict approval and risk metrics.",
      techStack: ["Python", "Machine Learning", "Streamlit"],
      githubUrl: "https://github.com/hashiqvs/Loan-Approval-Prediction",
      liveUrl: "#",
      preview: (
        <div className="w-full h-full bg-[#050510] border border-white/5 rounded-t-xl overflow-hidden p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-[10px] uppercase font-bold tracking-widest text-purple-400 font-mono">Prediction System</span>
            <span className="text-[8px] px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20 text-green-400 font-mono">CLASSIFIED</span>
          </div>
          <div className="flex flex-col justify-center py-2 flex-1 space-y-2">
            <div className="flex items-center justify-between text-[10px] text-white/60 bg-white/[0.02] border border-white/5 px-2.5 py-1.5 rounded">
              <span>Approval Probability</span>
              <span className="font-bold text-white font-mono">94.2%</span>
            </div>
            <div className="flex items-center justify-between text-[10px] text-white/60 bg-white/[0.02] border border-white/5 px-2.5 py-1.5 rounded">
              <span>Applicant Risk Index</span>
              <span className="font-bold text-green-400 font-mono">LOW</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "GDP Growth Rate Prediction",
      description: "Economic modeling to project GDP growth fluctuations based on global market indices.",
      techStack: ["Python", "Scikit-Learn", "Pandas"],
      githubUrl: "https://github.com/hashiqvs/GDP-Growth-Rate-Predictor",
      liveUrl: "#",
      preview: (
        <div className="w-full h-full bg-[#050510] border border-white/5 rounded-t-xl overflow-hidden p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-[10px] uppercase font-bold tracking-widest text-purple-400 font-mono">GDP Predictor</span>
            <span className="text-[8px] px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono">REGRESSION</span>
          </div>
          <div className="flex items-end justify-between py-2 flex-1 h-12 relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="w-full h-[1px] bg-white border-dashed" />
            </div>
            <svg viewBox="0 0 100 30" className="w-full h-8 overflow-visible z-10">
              <path
                d="M0 25 Q15 20, 30 10 T60 15 T90 5 T100 8"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Voice-to-Text Translator",
      description: "Speech recognition pipeline converting raw audio frequencies into text using deep learning models.",
      techStack: ["Python", "Deep Learning", "PyTorch"],
      githubUrl: "https://github.com/hashiqvs/Voice-to-Text-Translator",
      liveUrl: "#",
      preview: (
        <div className="w-full h-full bg-[#050510] border border-white/5 rounded-t-xl overflow-hidden p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-[10px] uppercase font-bold tracking-widest text-purple-400 font-mono">Speech Recognition</span>
            <span className="text-[8px] px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono">ACTIVE</span>
          </div>
          <div className="flex flex-col justify-center py-2 flex-1 space-y-1">
            <div className="flex items-center justify-center space-x-1.5 h-8">
              <span className="w-1 bg-purple-500 h-[30%] rounded-full" />
              <span className="w-1 bg-purple-400 h-[60%] rounded-full" />
              <span className="w-1 bg-indigo-400 h-[90%] rounded-full" />
              <span className="w-1 bg-purple-400 h-[50%] rounded-full" />
              <span className="w-1 bg-purple-500 h-[20%] rounded-full" />
            </div>
            <div className="text-[8px] font-mono text-center text-white/40 italic">
              "Processing audio signals..."
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="projects" className="py-24 sm:py-28 relative overflow-hidden">
      {/* Background neon light */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-950/18 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-indigo-950/16 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.3em] text-purple-400 font-bold mb-2"
          >
            Work
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-white"
          >
            Featured Projects
          </motion.h3>
          <div className="w-10 h-[2px] bg-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectsList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-md overflow-hidden flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:border-purple-500/20 group shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
            >
              {/* Card visual header */}
              <div className="h-40 bg-[#070715] p-4 flex items-center justify-center relative overflow-hidden border-b border-white/8">
                {project.preview}
              </div>

              {/* Card Details */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="text-lg font-bold font-display tracking-tight text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-white/50">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/5 text-white/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions Links */}
                  <div className="flex items-center gap-4 pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors cursor-pointer"
                    >
                      <Github size={12} />
                      GitHub
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                    >
                      Live Demo
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
