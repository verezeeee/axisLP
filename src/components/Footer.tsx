
import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-neutral-grey pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3 text-neutral-charcoal">
              <Logo size="small" />
              <h2 className="text-xl font-extrabold leading-tight tracking-[0.2em]">AXIS</h2>
            </div>
            <p className="text-sm text-neutral-charcoal/50 leading-relaxed max-w-[240px]">
              Arquitetando a inteligência do amanhã com engenharia disciplinada e intuição humana.
            </p>
          </div>
          
          <div className="flex flex-col gap-8">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-charcoal/40">Plataforma</h5>
            <nav className="flex flex-col gap-4">
              <a className="text-sm font-semibold text-neutral-charcoal/70 hover:text-primary transition-colors" href="#">Soluções</a>
              <a className="text-sm font-semibold text-neutral-charcoal/70 hover:text-primary transition-colors" href="#">Manifesto</a>
              <a className="text-sm font-semibold text-neutral-charcoal/70 hover:text-primary transition-colors" href="#">Segurança</a>
            </nav>
          </div>
          
          <div className="flex flex-col gap-8">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-charcoal/40">Empresa</h5>
            <nav className="flex flex-col gap-4">
              <a className="text-sm font-semibold text-neutral-charcoal/70 hover:text-primary transition-colors" href="#">Sobre Nós</a>
              <a className="text-sm font-semibold text-neutral-charcoal/70 hover:text-primary transition-colors" href="#">Carreiras</a>
              <a className="text-sm font-semibold text-neutral-charcoal/70 hover:text-primary transition-colors" href="#">Contato</a>
            </nav>
          </div>
          
          {/* <div className="flex flex-col gap-8">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-charcoal/40">Newsletter</h5>
            <p className="text-sm text-neutral-charcoal/50">Inscreva-se para insights sobre IA corporativa.</p>
            <div className="flex gap-2">
              <input 
                className="flex-1 bg-neutral-grey/50 border border-neutral-grey rounded-full text-sm px-6 h-12 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" 
                placeholder="Seu e-mail profissional" 
                type="email" 
              />
              <button className="size-12 flex items-center justify-center bg-primary text-white rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all">
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </div>
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
