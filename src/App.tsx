import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  useEffect(() => {
    // Force dark mode on document root
    const root = window.document.documentElement;
    root.classList.add("dark");
    root.style.colorScheme = "dark";
  }, []);

  return (
    <div className="min-h-screen bg-[#050510] text-white selection:bg-purple-500/30 selection:text-purple-200 antialiased font-sans">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Page Sections */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
