import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Certificates", id: "certificates" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const scrollPosition = window.scrollY + 150;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050510]/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick("home")}
          className="relative group cursor-pointer"
        >
          <span className="text-xl font-bold tracking-wider text-white font-display">
            HASHIQ VS
          </span>
        </button>

        {/* Desktop Nav List */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs font-semibold uppercase tracking-widest transition-colors cursor-pointer relative py-1 ${
                  activeSection === item.id
                    ? "text-purple-400"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Download Resume Button */}
          <div className="border-l border-white/10 pl-6">
            <a
              href="/resume.pdf"
              download
              className="px-5 py-2.5 rounded-lg border border-purple-500/30 hover:border-purple-500 bg-purple-500/5 hover:bg-purple-500/10 text-white text-[10px] font-bold tracking-widest uppercase transition-all shadow-md active:scale-95 cursor-pointer inline-block"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white/80 hover:text-white"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[60px] z-40 w-full transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="h-screen w-full px-6 py-8 flex flex-col space-y-6 bg-[#050510]/95 backdrop-blur-xl border-t border-white/5 text-white">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left text-sm font-bold uppercase tracking-wider py-2 border-b border-white/5 cursor-pointer transition-colors ${
                activeSection === item.id ? "text-purple-400 border-purple-500/20" : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download
            className="w-full py-3 rounded-lg border border-purple-500/30 bg-purple-500/5 text-white text-xs font-bold tracking-wider uppercase text-center cursor-pointer inline-block"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};
