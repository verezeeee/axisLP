
import React from 'react';

export const CapabilitiesSection: React.FC = () => {
  const capabilities = [
    {
      title: 'Estratégia de IA',
      desc: 'Um roteiro estratégico para adoção de IA corporativa de alto impacto e governança ética.',
      icon: 'analytics',
    },
    {
      title: 'Engenharia de Workflow',
      desc: 'Projetando ecossistemas digitais fluidos que eliminam atritos e tarefas manuais repetitivas.',
      icon: 'schema',
    },
    {
      title: 'Integração de LLM',
      desc: 'Modelos de linguagem de grande escala ajustados especificamente aos dados da sua organização.',
      icon: 'model_training',
    },
    {
      title: 'Ops Automatizados',
      desc: 'Escalando operações complexas com agentes autônomos e manutenção preditiva.',
      icon: 'smart_toy',
    },
  ];

  return (
    <section className="py-32 bg-accent-gray/20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-6">Serviços de Precisão</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">Nossas Capacidades</h3>
            <p className="mt-8 text-neutral-charcoal/60 text-lg leading-relaxed">
              Entregamos soluções de IA projetadas com precisão para escalabilidade e impacto de longo prazo. Sem excessos, apenas resultados.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item) => (
            <div key={item.title} className="group p-10 bg-white border border-neutral-grey/50 rounded-3xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1">
              <div className="size-16 rounded-full bg-neutral-grey flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
              </div>
              <h4 className="text-xl font-bold mb-4">{item.title}</h4>
              <p className="text-sm text-neutral-charcoal/60 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
