
import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-neutral-grey pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-16 mb-24">
          <div className="flex flex-col gap-8 items-center">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3 text-neutral-charcoal">
                <Logo size="small" />
                <h2 className="text-xl font-extrabold leading-tight tracking-[0.2em]">AXIS</h2>
              </div>
              <p className="text-sm text-neutral-charcoal/50 leading-relaxed max-w-[240px]">
                Arquitetando a inteligência do amanhã com engenharia disciplinada e intuição humana.
              </p>
            </div>
          </div>

          {/* <div className="flex flex-col gap-8">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-charcoal/40">Serviços</h5>
            <nav className="flex flex-col gap-4">
              <a className="text-sm font-semibold text-neutral-charcoal/70 hover:text-[#1e8094] transition-colors" href="#">Consultoria de IA</a>
              <a className="text-sm font-semibold text-neutral-charcoal/70 hover:text-[#1e8094] transition-colors" href="#">Design de Workflow</a>
              <a className="text-sm font-semibold text-neutral-charcoal/70 hover:text-[#1e8094] transition-colors" href="#">Modelos Personalizados</a>
              <a className="text-sm font-semibold text-neutral-charcoal/70 hover:text-[#1e8094] transition-colors" href="#">Pipelines de Dados</a>
            </nav>
          </div>
          
          <div className="flex flex-col gap-8">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-charcoal/40">Empresa</h5>
            <nav className="flex flex-col gap-4">
              <a className="text-sm font-semibold text-neutral-charcoal/70 hover:text-[#1e8094] transition-colors" href="#">Sobre Nós</a>
              <a className="text-sm font-semibold text-neutral-charcoal/70 hover:text-[#1e8094] transition-colors" href="#">Carreiras</a>
              <a className="text-sm font-semibold text-neutral-charcoal/70 hover:text-[#1e8094] transition-colors" href="#">Contato</a>
            </nav>
          </div>
          
          <div className="flex flex-col gap-8">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-charcoal/40">Recursos</h5>
            <nav className="flex flex-col gap-4">
              <a className="text-sm font-semibold text-neutral-charcoal/70 hover:text-[#1e8094] transition-colors" href="#">Cursos de Automação</a>
              <a className="text-sm font-semibold text-neutral-charcoal/70 hover:text-[#1e8094] transition-colors" href="#">Blog</a>
              <a className="text-sm font-semibold text-neutral-charcoal/70 hover:text-[#1e8094] transition-colors" href="#">Documentação</a>
            </nav>
          </div> */}
        </div>

        <div className="pt-12 border-t border-neutral-grey flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-neutral-charcoal/40 font-bold uppercase tracking-[0.2em]">
            © 2026 AXIS AGÊNCIA DE AUTOMAÇÃO. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex gap-10">
            <a className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-charcoal/40 hover:text-neutral-charcoal transition-colors" href="#">Privacidade</a>
            <a className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-charcoal/40 hover:text-neutral-charcoal transition-colors" href="#">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
