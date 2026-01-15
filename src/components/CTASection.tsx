
import React from 'react';

export const CTASection: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="bg-primary p-12 md:p-24 rounded-[3rem] relative overflow-hidden group text-center flex flex-col items-center gap-10">
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col gap-8">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Pronto para redesenhar sua realidade?
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium">
              Agende uma sessão estratégica gratuita para avaliarmos o potencial de automação da sua empresa. Vamos construir o futuro juntos.
            </p>
          </div>
          
          <a 
            href="mailto:contato@axis.ia?subject=Consultoria%20Estratégica"
            className="relative z-10 inline-flex items-center h-16 px-12 bg-white text-primary text-sm uppercase font-bold tracking-[0.2em] rounded-full hover:scale-105 transition-all shadow-2xl hover:bg-neutral-grey"
          >
            Agendar Consultoria Estratégica
          </a>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
        </div>
      </div>
    </section>
  );
};
