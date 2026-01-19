
import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
  const [dotPosition, setDotPosition] = useState({ cx: 100, cy: 100 });

  useEffect(() => {
    const interval = setInterval(() => {
      const newCx = 100 + (Math.random() - 0.5) * 50;
      const newCy = 100 + (Math.random() - 0.5) * 50;
      setDotPosition({ cx: newCx, cy: newCy });
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative bg-white pt-40  md:pt-56 ">
      <div className="max-w-3xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-grey/60 border border-neutral-grey text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
          Manifesto da Agência
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-10 text-transparent bg-clip-text bg-linear-to-r from-black to-[#1e8094]">
          Onde a Estrutura Encontra a Inteligência.
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-charcoal/60 leading-relaxed">
          Não somos apenas uma agência de IA. Somos arquitetos de sistemas autônomos que permitem que as mentes mais brilhantes foquem no que é verdadeiramente humano.
        </p>
      </div>

      {/* Vision Section */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 mt-32 md:mt-40">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-20">
          {/* Left Column: SVG */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center">
            <div className="absolute w-full max-w-lg aspect-square rounded-full bg-[#1e8094]/5 blur-3xl"></div>
            <svg viewBox="0 0 200 200" className="w-full max-w-lg">
              <circle cx="100" cy="100" r="90" stroke="#e0e0e0" strokeWidth="0.5" fill="none" />
              <circle cx="100" cy="100" r="70" stroke="#e0e0e0" strokeWidth="0.5" fill="none" />
              <circle cx="100" cy="100" r="50" stroke="#e0e0e0" strokeWidth="0.5" fill="none" />
              <circle 
                cx={dotPosition.cx}
                cy={dotPosition.cy}
                r="5" 
                fill="#1e8094" 
                style={{ transition: 'cx 2s ease-in-out, cy 2s ease-in-out' }}
              />
            </svg>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[10px] font-bold text-[#1e8094] uppercase tracking-[0.4em] mb-6">Nossa Visão</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-charcoal mb-8">Um futuro onde a complexidade é invisível.</h3>
            <p className="text-lg text-neutral-charcoal/60 leading-relaxed mb-12">
              Visualizamos um mercado corporativo onde o atrito operacional é coisa do passado. Na AXIS, construímos as pontes entre os fluxos de trabalho tradicionais e as capacidades exponenciais da Inteligência Artificial.
            </p>
            
            <div className="flex flex-col gap-8">
              <div className="flex gap-6 border-l-2 border-[#1e8094] pl-6">
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-neutral-charcoal">Impacto Sistêmico</h4>
                  <p className="text-neutral-charcoal/60 text-sm mt-2">Transformamos processos isolados em ecossistemas inteligentes.</p>
                </div>
              </div>
              <div className="flex gap-6 border-l-2 border-[#1e8094] pl-6">
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-neutral-charcoal">Ética por Design</h4>
                  <p className="text-neutral-charcoal/60 text-sm mt-2">IA responsável integrada na base de cada automação.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
