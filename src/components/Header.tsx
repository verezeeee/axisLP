
import React from 'react';
import { Logo } from './Logo';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const navItems = [
    { label: 'Serviços', id: 'servicos' },
    { label: 'Sobre', id: 'filosofia' },
    { label: 'Casos de Estudo', id: 'casos' },
    { label: 'Processo', id: 'processo' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-50 border-b border-neutral-grey">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 text-neutral-charcoal hover:opacity-80 transition-opacity">
          <Logo size="small" />
          <h2 className="text-xl font-extrabold leading-tight tracking-[0.2em]">AXIS</h2>
        </a>
        
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              className={`text-[10px] uppercase font-bold tracking-[0.15em] transition-colors hover:text-[#1e8094] ${
                activeSection === item.id ? 'text-[#1e8094]' : 'text-neutral-charcoal/60'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center justify-end gap-5 w-[220px]">
          <a 
            href="#contato"
            className="flex items-center justify-center rounded-full bg-[#1e8094] text-white text-[10px] uppercase font-bold tracking-[0.15em] h-10 px-6 transition-all hover:opacity-90 active:scale-95 shadow-lg shadow-[#1e8094]/30"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </header>
  );
};
