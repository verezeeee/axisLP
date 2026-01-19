
import React from 'react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      id: '01',
      title: 'Descoberta',
    },
    {
      id: '02',
      title: 'Prototipagem',
    },
    {
      id: '03',
      title: 'Escala',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <h2 className="text-[10px] font-bold text-[#1e8094] uppercase tracking-[0.4em] mb-6">Como Entregamos Valor</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">Nosso Cronograma de Ação</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              <h4 className="text-8xl font-extrabold text-neutral-charcoal/10 mb-4">{step.id}</h4>
              <h5 className="text-lg font-bold uppercase tracking-[0.2em]">{step.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
