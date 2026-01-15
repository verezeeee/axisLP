import './App.css'
import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { PhilosophySection } from './components/PhilosophySection';
import { CasesSection } from './components/CasesSection';
import { ProcessSection } from './components/ProcessSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

function App() {
const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'servicos', 'filosofia', 'casos', 'processo'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header activeSection={activeSection} />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="servicos" className="pt-20">
          <CapabilitiesSection />
        </div>
        <div id="filosofia">
          <PhilosophySection />
        </div>
        <div id="casos" className="pt-20">
          <CasesSection />
        </div>
        <div id="processo" className="pt-20">
          <ProcessSection />
        </div>
        <CTASection />
      </main>
      <Footer />
      
      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Voltar ao topo"
        className="fixed bottom-10 right-10 z-50 size-14 bg-white text-neutral-charcoal rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-2xl border border-neutral-grey/20 group"
      >
        <span className="material-symbols-outlined text-xl group-hover:-translate-y-1 transition-transform">keyboard_arrow_up</span>
      </button>
    </div>
  );
}

export default App
