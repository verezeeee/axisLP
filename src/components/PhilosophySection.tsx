
import React from 'react';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20 lg:items-center">
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/5] bg-neutral-grey/30 rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-neutral-grey">
              <img 
                alt="Modern Architecture" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                src="https://picsum.photos/800/1000?random=1" 
              />
            </div>
            {/* Accents */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/10 rounded-full -z-0"></div>
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col gap-10">
            <div>
              <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-6">Nossa Filosofia</h2>
              <h3 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-neutral-charcoal">
                A interseção entre intuição humana <br/>e IA.
              </h3>
            </div>
            
            <p className="text-lg text-neutral-charcoal/60 leading-relaxed">
              Nossa abordagem é disciplinada, arquitetural e focada em escalabilidade a longo prazo. Acreditamos na estrutura e clareza sobre a complexidade. Não apenas implementamos ferramentas; redesenhamos a forma como o trabalho acontece.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-3 p-8 bg-neutral-grey/20 rounded-3xl border border-neutral-grey/50">
                <span className="material-symbols-outlined text-primary text-3xl">architecture</span>
                <div>
                  <p className="font-bold text-lg">Rigor Arquitetural</p>
                  <p className="text-sm text-neutral-charcoal/60 mt-1">Fundações construídas para escala futura.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 p-8 bg-neutral-grey/20 rounded-3xl border border-neutral-grey/50">
                <span className="material-symbols-outlined text-primary text-3xl">diversity_3</span>
                <div>
                  <p className="font-bold text-lg">Foco no Humano</p>
                  <p className="text-sm text-neutral-charcoal/60 mt-1">Tecnologia servindo às pessoas primeiro.</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href="#servicos"
                className="inline-flex min-w-[200px] h-14 items-center justify-center rounded-full bg-primary text-white text-sm font-bold tracking-[0.1em] hover:shadow-xl hover:shadow-primary/20 transition-all uppercase"
              >
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
