
import React from 'react';
import { Logo } from './Logo';

export const BrandingSection: React.FC = () => {
  return (
    <section className="py-24 border-t border-neutral-grey bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="w-full md:w-1/3">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8">A Marca Arredondada</h2>
            <p className="text-sm text-neutral-charcoal/70 leading-relaxed mb-6">
              A marca AXIS evoluiu. Ao arredondar os vértices da nossa escada característica, abraçamos uma forma de inteligência mais orgânica e acessível.
            </p>
            <p className="text-sm text-neutral-charcoal/70 leading-relaxed">
              Ela reflete o movimento fluido de dados através dos sistemas que construímos — contínuo, sem interrupções e sem atritos.
            </p>
          </div>
          
          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-square bg-neutral-grey/50 flex items-center justify-center p-12 rounded-3xl editorial-shadow">
              <Logo size="large" color="#121617" />
            </div>
            <div className="aspect-square bg-neutral-charcoal flex items-center justify-center p-12 rounded-3xl editorial-shadow">
              <Logo size="large" color="#ffffff" />
            </div>
          </div>
        </div>

        {/* Typography Detail */}
        <div className="mt-32">
          <div className="max-w-md mb-16">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8">Amostra Tipográfica</h2>
            <p className="text-sm text-neutral-charcoal/70 leading-relaxed">
              Manrope continua sendo nossa tipografia principal, escolhida por seus espaços abertos e geometria equilibrada que combina perfeitamente com nossos novos elementos de marca arredondados.
            </p>
          </div>
          
          <div className="flex flex-col gap-16 editorial-shadow bg-neutral-grey/30 p-8 md:p-16 rounded-3xl">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase font-bold text-neutral-charcoal/40">Manrope ExtraBold</span>
              <h3 className="text-6xl md:text-8xl font-extrabold tracking-tighter">ABCDEFGHIJK</h3>
            </div>
            
            <div className="flex flex-col gap-4 border-t border-neutral-charcoal/10 pt-12">
              <span className="text-[10px] uppercase font-bold text-neutral-charcoal/40">Manrope Light</span>
              <p className="text-3xl md:text-5xl font-light leading-tight italic opacity-90">
                "A interseção entre a lógica e a intuição é onde reside o verdadeiro eixo da inovação."
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-neutral-charcoal/10 pt-12">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase font-bold text-neutral-charcoal/40">Escala: Display</span>
                <span className="text-4xl font-bold">Fluidez na Automação.</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase font-bold text-neutral-charcoal/40">Escala: Corpo</span>
                <p className="text-sm font-medium leading-relaxed opacity-70">
                  Acreditamos na simplicidade sofisticada. Nossos sistemas são construídos para serem intuitivos, reduzindo o atrito através de interações suaves e design inteligente. É preciso, porém profundamente humano.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="mt-32">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-12">A Paleta de Cores</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { name: 'Carvão Profundo', code: '#121617', bg: 'bg-neutral-charcoal' },
              { name: 'Teal AXIS', code: '#186B7B', bg: 'bg-primary' },
              { name: 'Cinza Suave', code: '#F1F3F4', bg: 'bg-neutral-grey' },
              { name: 'Branco Absoluto', code: '#FFFFFF', bg: 'bg-white', border: 'border-neutral-grey' },
            ].map((color) => (
              <div key={color.code} className="flex flex-col gap-6 group">
                <div className={`aspect-[3/4] w-full ${color.bg} rounded-full editorial-shadow transition-transform group-hover:scale-105 ${color.border || ''} border`}></div>
                <div className="px-2">
                  <p className="text-sm font-bold">{color.name}</p>
                  <p className="text-[10px] opacity-60 uppercase font-mono tracking-widest">{color.code}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
