
import React from 'react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      id: '01',
      title: 'Diagnóstico',
      desc: 'Analisamos profundamente seus fluxos de trabalho atuais, identificando gargalos operacionais e oportunidades de automação.',
      icon: 'search_insights',
    },
    {
      id: '02',
      title: 'Arquitetura',
      desc: 'Projetamos a infraestrutura técnica e o design do workflow. Criamos o blueprint de como as ferramentas de IA se integrarão.',
      icon: 'architecture',
    },
    {
      id: '03',
      title: 'Implementação',
      desc: 'Nossa equipe de engenharia constrói e implanta as automações, integrações via API e configurações de LLMs.',
      icon: 'engineering',
    },
    {
      id: '04',
      title: 'Otimização',
      desc: 'Monitoramos a performance, ajustamos os modelos e refinamos os processos para garantir eficiência contínua.',
      icon: 'query_stats',
    },
  ];

  return (
    <section className="py-32 bg-neutral-grey/20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
            Metodologia AXIS
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-10">
            Como Transformamos sua <br/> <span className="text-primary">Operação com IA</span>
          </h2>
          <p className="text-lg text-neutral-charcoal/60 leading-relaxed">
            Um processo disciplinado, arquitetural e focado em resultados tangíveis. Do diagnóstico inicial à otimização contínua.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-primary/20 hidden md:block"></div>
          
          <div className="flex flex-col gap-12 md:gap-32">
            {steps.map((step, index) => (
              <div key={step.id} className={`flex flex-col md:flex-row items-center justify-between gap-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`flex items-center gap-4 mb-6 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <span className="text-6xl font-black text-primary/10 select-none order-last md:order-none">{step.id}</span>
                    <div className="flex flex-col">
                       <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Fase {step.id}</span>
                       <h3 className="text-3xl font-bold">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-neutral-charcoal/60 leading-relaxed text-lg">
                    {step.desc}
                  </p>
                </div>
                
                {/* Node circle on line */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white z-10"></div>
                
                <div className="w-full md:w-[45%]">
                  <div className="aspect-video bg-white border border-neutral-grey rounded-3xl shadow-sm p-12 flex items-center justify-center group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                    <span className="material-symbols-outlined text-6xl text-primary/20 group-hover:text-primary transition-colors duration-500">
                      {step.icon}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
