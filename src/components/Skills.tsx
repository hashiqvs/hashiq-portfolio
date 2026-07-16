import React from "react";
import { motion } from "framer-motion";
import { Terminal, Database, Presentation, Cpu, Settings, Brain } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

export const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: "Python",
      icon: <Terminal size={18} className="text-purple-400" />,
      skills: ["Pandas", "NumPy", "Scikit-learn"],
    },
    {
      title: "SQL",
      icon: <Database size={18} className="text-purple-400" />,
      skills: ["MySQL", "Data Queries", "Data Cleaning"],
    },
    {
      title: "Data Visualization",
      icon: <Presentation size={18} className="text-purple-400" />,
      skills: ["Power BI", "Excel", "Dashboard Design"],
    },
    {
      title: "Machine Learning",
      icon: <Cpu size={18} className="text-purple-400" />,
      skills: ["Classification", "Regression", "Model Evaluation"],
    },
    {
      title: "Deep Learning",
      icon: <Brain size={18} className="text-purple-400" />,
      skills: ["Neural Networks", "TensorFlow", "Keras", "LSTM Models"],
    },
    {
      title: "Tools",
      icon: <Settings size={18} className="text-purple-400" />,
      skills: ["Git", "Github", "VS Code", "Jupyter Notebook"],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
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
            Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-white"
          >
            Technical Skills
          </motion.h3>
          <div className="w-10 h-[2px] bg-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-6 rounded-xl border border-white/5 bg-[#0a0a16]/40 backdrop-blur-md glow-hover flex flex-col"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/5">
                <div className="p-2 rounded-md bg-purple-500/10 border border-purple-500/20">
                  {cat.icon}
                </div>
                <h4 className="font-bold text-sm tracking-tight text-white font-display">
                  {cat.title}
                </h4>
              </div>

              {/* Skills List */}
              <ul className="space-y-3 flex-1 flex flex-col justify-start">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-xs text-white/50 gap-2 font-medium">
                    <span className="w-1.5 h-1.5 bg-purple-500/40 rounded-full" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
