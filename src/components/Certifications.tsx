import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

interface CertificateItem {
  id: number;
  title: string;
  issuer: string;
  preview: React.ReactNode;
}

export const Certifications: React.FC = () => {
  const certsList: CertificateItem[] = [
    {
      id: 1,
      title: "Diploma in AI and Data Science",
      issuer: "Advanced AI Academy",
      preview: (
        <div className="w-full h-full bg-[#050510] border border-white/5 rounded-t-xl overflow-hidden p-4 flex flex-col justify-between items-center relative text-center">
          <div className="absolute top-2 left-2 w-3 h-3 rounded-full border border-purple-500/30 flex items-center justify-center">
            <span className="w-1 h-1 bg-purple-500 rounded-full" />
          </div>
          <span className="text-[7px] uppercase font-bold tracking-[0.2em] text-white/30 font-mono mt-1">DIPLOMA CREDENTIAL</span>
          <div className="space-y-1 my-2">
            <h5 className="text-[10px] font-bold text-white font-display">AI & Data Science</h5>
            <p className="text-[6px] text-white/40 italic">Awarded to Hashiq VS</p>
          </div>
          <div className="w-8 h-8 rounded-full border border-purple-500/20 bg-purple-500/5 flex items-center justify-center mt-1">
            <Award size={14} className="text-purple-400" />
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Business Analytics with Excel",
      issuer: "Corporate Training Guild",
      preview: (
        <div className="w-full h-full bg-[#050510] border border-white/5 rounded-t-xl overflow-hidden p-4 flex flex-col justify-between items-center relative text-center">
          <div className="absolute top-2 left-2 w-3 h-3 rounded-full border border-purple-500/30 flex items-center justify-center">
            <span className="w-1 h-1 bg-purple-500 rounded-full" />
          </div>
          <span className="text-[7px] uppercase font-bold tracking-[0.2em] text-white/30 font-mono mt-1">BUSINESS REPORT</span>
          <div className="space-y-1 my-2">
            <h5 className="text-[10px] font-bold text-white font-display">Business Analytics</h5>
            <p className="text-[6px] text-white/40 italic">Awarded to Hashiq VS</p>
          </div>
          <div className="w-8 h-8 rounded-full border border-purple-500/20 bg-purple-500/5 flex items-center justify-center mt-1">
            <Award size={14} className="text-purple-400" />
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "SQL Basics for Data Analysis",
      issuer: "Database Science Alliance",
      preview: (
        <div className="w-full h-full bg-[#050510] border border-white/5 rounded-t-xl overflow-hidden p-4 flex flex-col justify-between items-center relative text-center">
          <div className="absolute top-2 left-2 w-3 h-3 rounded-full border border-purple-500/30 flex items-center justify-center">
            <span className="w-1 h-1 bg-purple-500 rounded-full" />
          </div>
          <span className="text-[7px] uppercase font-bold tracking-[0.2em] text-white/30 font-mono mt-1">DATABASE CERTIFICATION</span>
          <div className="space-y-1 my-2">
            <h5 className="text-[10px] font-bold text-white font-display">SQL Basics</h5>
            <p className="text-[6px] text-white/40 italic">Awarded to Hashiq VS</p>
          </div>
          <div className="w-8 h-8 rounded-full border border-purple-500/20 bg-purple-500/5 flex items-center justify-center mt-1">
            <Award size={14} className="text-purple-400" />
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "AI Aware Badge",
      issuer: "Global AI Alliance",
      preview: (
        <div className="w-full h-full bg-[#050510] border border-white/5 rounded-t-xl overflow-hidden p-4 flex flex-col justify-between items-center relative text-center">
          <div className="absolute top-2 left-2 w-3 h-3 rounded-full border border-purple-500/30 flex items-center justify-center">
            <span className="w-1 h-1 bg-purple-500 rounded-full" />
          </div>
          <span className="text-[7px] uppercase font-bold tracking-[0.2em] text-white/30 font-mono mt-1">RECOGNITION CREDENTIAL</span>
          <div className="space-y-1 my-2">
            <h5 className="text-[10px] font-bold text-white font-display">AI Aware Badge</h5>
            <p className="text-[6px] text-white/40 italic">Awarded to Hashiq VS</p>
          </div>
          <div className="w-8 h-8 rounded-full border border-purple-500/20 bg-purple-500/5 flex items-center justify-center mt-1">
            <Award size={14} className="text-purple-400" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
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
            Milestones
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-white"
          >
            Certificates
          </motion.h3>
          <div className="w-10 h-[2px] bg-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {certsList.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="rounded-xl border border-white/5 bg-[#0a0a16]/40 backdrop-blur-md overflow-hidden flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:border-purple-500/20 group"
            >
              {/* Certificate mock view header */}
              <div className="h-32 bg-[#070715] p-3 flex items-center justify-center border-b border-white/5">
                {cert.preview}
              </div>

              {/* Certificate Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold font-display tracking-tight text-white group-hover:text-purple-400 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-[10px] text-purple-400 font-medium">
                    {cert.issuer}
                  </p>
                </div>

                {/* View button */}
                <button
                  className="w-full py-2 rounded bg-white/5 hover:bg-purple-500/10 border border-white/5 hover:border-purple-500/30 text-[10px] font-bold tracking-wider uppercase text-white transition-colors cursor-pointer"
                >
                  View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
