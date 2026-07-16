import React from "react";
import { motion } from "framer-motion";
import { BarChart, Cpu, Brain, Terminal } from "lucide-react";

export const About: React.FC = () => {
  const cards = [
    {
      icon: <BarChart className="text-purple-400" size={20} />,
      title: "Data Analytics",
      topics: [
        "Data Cleaning",
        "Exploratory Data Analysis",
        "Data Visualization",
        "Power BI Dashboards",
        "SQL Analysis",
      ],
    },
    {
      icon: <Cpu className="text-purple-400" size={20} />,
      title: "Machine Learning",
      topics: [
        "Classification Models",
        "Regression Models",
        "Feature Engineering",
        "Model Evaluation",
        "Predictive Analytics",
      ],
    },
    {
      icon: <Brain className="text-purple-400" size={20} />,
      title: "Deep Learning",
      topics: [
        "Neural Networks",
        "TensorFlow",
        "Keras",
        "LSTM Models",
        "Deep Learning Projects",
      ],
    },
    {
      icon: <Terminal className="text-purple-400" size={20} />,
      title: "Tools & Development",
      topics: [
        "Python",
        "SQL",
        "Git & Github",
        "Streamlit",
        "VS Code",
        "Jupyter Notebook",
      ],
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-28 relative overflow-hidden">
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
            Story
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-white"
          >
            About Me
          </motion.h3>
          <div className="w-10 h-[2px] bg-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Humanized Bio Copy */}
        <div className="max-w-3xl mx-auto text-left space-y-6 mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base leading-relaxed text-white/70 font-sans"
          >
            I enjoy building things with data. Whether it's analyzing datasets, developing machine learning models, or creating interactive dashboards, I like turning ideas into practical solutions that people can use and understand.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm sm:text-base leading-relaxed text-white/70 font-sans"
          >
            Over time, I've worked on projects involving Data Analytics, Machine Learning, and Deep Learning using Python and modern data science tools. I enjoy exploring new technologies, experimenting with different approaches, and learning through the process of building.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm sm:text-base leading-relaxed text-white/70 font-sans"
          >
            Coming from a business background, I bring both analytical thinking and curiosity to my work. I'm continuously improving my skills, taking on new challenges, and building projects that help me grow as a Data Analyst and Machine Learning Developer.
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-6 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-md glow-hover flex flex-col items-start text-left shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
            >
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 mb-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                {card.icon}
              </div>
              <h4 className="text-sm font-bold font-display tracking-tight text-white mb-4 uppercase">
                {card.title}
              </h4>
              <ul className="space-y-2.5">
                {card.topics.map((topic, tIdx) => (
                  <li key={tIdx} className="flex items-center text-xs text-white/50 gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500/55 rounded-full" />
                    <span>{topic}</span>
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
