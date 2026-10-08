import React from 'react';
import { ArrowRight } from 'lucide-react';
import { trainer } from '../../data/trainer';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-zinc-950 text-white overflow-hidden pt-20">
      {/* Div de fundo com a foto visível apenas em telas grandes (lg para cima) */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src={trainer.heroImages[0]} 
          alt={trainer.name} 
          className="w-full h-full object-cover object-center hidden lg:block" 
        />
        {/* Gradiente de fundo escuro para manter a consistência visual em todos os dispositivos */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 lg:via-zinc-950/80 to-zinc-950/60 lg:to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-8 flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
            {trainer.slogan}
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Seu corpo mais forte. Sua rotina mais saudável. Seus resultados mais consistentes.
          </h1>
          <p className="text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed">
            Treinamento personalizado e focado na sua realidade para emagrecer, ganhar massa muscular e evoluir com acompanhamento profissional de perto.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-4">
            <a href="#planos" className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-8 py-4 rounded-lg transition-all shadow-xl shadow-emerald-500/10">
              Conheça os planos <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contato" className="inline-flex items-center justify-center gap-2 bg-zinc-900/80 hover:bg-zinc-800 text-white font-semibold px-8 py-4 rounded-lg border border-zinc-800 transition-all">
              Fale comigo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};