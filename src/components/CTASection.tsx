
import React from 'react';

export const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="bg-[#1e8094] p-12 md:p-24 rounded-[3rem] relative overflow-hidden group text-center flex flex-col items-center gap-10">
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col gap-8">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Você chegou ao fim da página.
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium">
              Se chegou até aqui, é porque tá interessado. <br/>
              Então clica aqui em baixo e fala com a gente!
            </p>
          </div>
          
          <a 
            href="https://wa.me/5562936180480?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center h-16 px-12 bg-white text-[#1e8094] text-sm uppercase font-bold tracking-[0.2em] rounded-full hover:scale-105 transition-all shadow-2xl hover:bg-neutral-grey"
          >
            Entre em contato
          </a>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
        </div>
      </div>
    </section>
  );
};
