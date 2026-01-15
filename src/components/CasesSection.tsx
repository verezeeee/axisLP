
import React from 'react';

export const CasesSection: React.FC = () => {
  const cases = [
    {
      sector: 'Logística & Supply Chain',
      title: 'Otimização Logística Global',
      metricLabel: 'Impacto',
      metricValue: '40% mais eficiente',
      desc: 'Redução de lead time e custos operacionais através de roteamento preditivo baseado em IA.',
      image: 'https://picsum.photos/600/400?random=2',
    },
    {
      sector: 'Customer Experience',
      title: 'Automação de Atendimento',
      metricLabel: 'Resolução',
      metricValue: '85% em N1',
      desc: 'Implementação de agentes autônomos para suporte técnico escalável 24/7.',
      image: 'https://picsum.photos/600/400?random=3',
    },
    {
      sector: 'Fintech',
      title: 'Análise Preditiva de Crédito',
      metricLabel: 'Inadimplência',
      metricValue: '-25%',
      desc: 'Modelagem de risco avançada utilizando redes neurais para score de crédito em tempo real.',
      image: 'https://picsum.photos/600/400?random=4',
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-20">
          <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-6">Portfólio de Impacto</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Casos de Estudo <span className="text-primary/80">AXIS</span>
          </h1>
          <p className="mt-8 text-neutral-charcoal/60 text-lg leading-relaxed">
            Resultados tangíveis em eficiência operacional e crescimento estratégico através de automação inteligente personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item) => (
            <div key={item.title} className="group bg-white border border-neutral-grey rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-neutral-grey hover:-translate-y-1">
              <div className="aspect-video bg-neutral-grey overflow-hidden">
                <img 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  src={item.image} 
                />
              </div>
              <div className="p-10">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-3">{item.sector}</span>
                <h4 className="text-2xl font-bold leading-tight mb-8">{item.title}</h4>
                
                <div className="bg-primary/5 rounded-2xl p-6 mb-8 border border-primary/10">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{item.metricLabel}</p>
                  <p className="text-3xl font-extrabold text-primary">{item.metricValue}</p>
                </div>
                
                <p className="text-sm text-neutral-charcoal/60 leading-relaxed mb-10">{item.desc}</p>
                
                <a className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-neutral-charcoal hover:text-primary transition-all group-hover:gap-5" href="#">
                  Ver Detalhes <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
