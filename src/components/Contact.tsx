import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, FileText, Send, CheckCircle2 } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const contactDetails = [
    {
      icon: <Mail className="text-purple-400" size={16} />,
      label: "Email Address",
      value: "hashiqvs.work@gmail.com",
      link: "mailto:hashiqvs.work@gmail.com",
    },
    {
      icon: <Linkedin className="text-purple-400" size={16} />,
      label: "LinkedIn Profile",
      value: "linkedin.com/in/hashiqvs",
      link: "https://linkedin.com/in/hashiqvs",
    },
    {
      icon: <Github className="text-purple-400" size={16} />,
      label: "GitHub Repositories",
      value: "github.com/hashiqvs",
      link: "https://github.com/hashiqvs",
    },
    {
      icon: <FileText className="text-purple-400" size={16} />,
      label: "Curriculum Vitae",
      value: "Download PDF Resume",
      link: "/resume.pdf",
      download: true,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1200);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
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
            Connection
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-white"
          >
            Contact
          </motion.h3>
          <div className="w-10 h-[2px] bg-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h4 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Let's build something meaningful together.
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-white/50">
                Hiring managers and recruiters: feel free to send a message or connect directly on social handles. I'm always available to discuss analytical and technical opportunities.
              </p>
            </div>

            {/* Link List */}
            <div className="grid grid-cols-1 gap-3.5 pt-4">
              {contactDetails.map((detail, idx) => (
                <a
                  href={detail.link}
                  key={idx}
                  download={detail.download ? true : undefined}
                  target={detail.link.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="p-4 rounded-lg border border-white/5 bg-[#0a0a16]/40 backdrop-blur-md flex items-center gap-4 transition-all duration-300 hover:border-purple-500/20 cursor-pointer"
                >
                  <div className="p-2.5 rounded bg-purple-500/10 border border-purple-500/20">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="text-[9px] uppercase font-bold tracking-wider text-white/30">
                      {detail.label}
                    </p>
                    <p className="text-xs font-semibold tracking-wide text-white/80 font-display">
                      {detail.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-xl border border-white/5 bg-[#0a0a16]/40 backdrop-blur-md h-full">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold tracking-widest uppercase text-white/40">Name</label>
                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.02] text-white placeholder-white/20 focus:outline-none focus:border-purple-500/50 transition-all font-sans text-xs"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold tracking-widest uppercase text-white/40">Email</label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@domain.com"
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.02] text-white placeholder-white/20 focus:outline-none focus:border-purple-500/50 transition-all font-sans text-xs"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-widest uppercase text-white/40">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Collaboration Proposal"
                        className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.02] text-white placeholder-white/20 focus:outline-none focus:border-purple-500/50 transition-all font-sans text-xs"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-widest uppercase text-white/40">Message</label>
                      <textarea
                        required
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describe your objectives or role requirements..."
                        className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.02] text-white placeholder-white/20 focus:outline-none focus:border-purple-500/50 transition-all font-sans text-xs resize-none"
                      />
                    </div>

                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full py-3.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={14} />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center h-full text-center py-12"
                  >
                    <div className="p-3.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-6">
                      <CheckCircle2 size={38} />
                    </div>
                    <h4 className="text-xl font-bold font-display text-white mb-2">
                      Message Dispatched
                    </h4>
                    <p className="text-xs max-w-sm text-white/50 leading-relaxed">
                      Thank you for contacting me. Your request was received successfully and I will follow up with you shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
