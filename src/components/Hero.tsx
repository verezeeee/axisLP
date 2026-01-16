
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 md:pt-56 md:pb-40 bg-white">
      {/* Background Decorative Circles */}
      <div className="absolute -right-20 top-20 opacity-[0.05] pointer-events-none select-none">
        <svg fill="none" height="800" viewBox="0 0 100 100" width="800" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" className="animate-pulse-move"></circle>
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" className="animate-pulse-move animation-delay-200"></circle>
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" className="animate-pulse-move animation-delay-400"></circle>
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start text-left">
        <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-neutral-charcoal/40 mb-8">
          A Solução Ideal em Processos de Negócio
        </p>
        
        <h1 className="text-6xl md:text-8xl font-light tracking-[-0.03em] mb-10 text-neutral-charcoal max-w-4xl">
          Automação Inteligente para a <span className="font-extrabold text-[#1e8094]">Empresa Moderna.</span>
        </h1>
        
        <p className="max-w-2xl text-xl md:text-2xl text-neutral-charcoal/60 font-light leading-relaxed">
          Alavancamos modelos de linguagem de ponta para otimizar operações, impulsionar a eficiência e construir um ecossistema de automação personalizado para a automação estratégica. Construímos a espinha dorsal da sua operação.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 mt-16">
          <a 
            href="#processo"
            className="flex min-w-[220px] h-14 items-center justify-center rounded-full bg-[#1e8094] text-white text-sm font-bold tracking-widest hover:shadow-2xl hover:shadow-[#1e8094]/30 hover:-translate-y-0.5 transition-all uppercase px-4"
          >
            Iniciar Transformação
          </a>
          <a 
            href="#servicos"
            className="flex min-w-[220px] h-14 items-center justify-center rounded-full border border-neutral-grey bg-transparent text-neutral-charcoal text-sm font-bold tracking-widest hover:bg-neutral-grey/20 transition-all uppercase"
          >
            Ver Metodologia
          </a>
        </div>
      </div>
    </section>
  );
};
