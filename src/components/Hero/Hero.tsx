import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { trainer } from '../../data/trainer';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-zinc-950 text-white overflow-hidden pt-24 pb-16">
      
      {/* Elementos de Iluminação e Atmosfera Surreal de Fundo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glows Esmeralda Dinâmicos */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[140px]" />

        {/* Textura Geométrica Industrial de Alta Precisão */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #10b981 0, #10b981 1px, transparent 0, transparent 60px)`
        }} />

        {/* Grid Técnico Sutil */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }} />

        {/* Moldura Técnica de Canto */}
        <div className="absolute top-10 left-10 w-16 h-16 border-t-2 border-l-2 border-emerald-500/30 rounded-tl-xl hidden lg:block" />
        <div className="absolute top-10 right-10 w-16 h-16 border-t-2 border-r-2 border-emerald-500/30 rounded-tr-xl hidden lg:block" />
      </div>

      {/* Div de fundo com a foto visível apenas em telas grandes */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src={trainer.heroImages[0]} 
          alt={trainer.name} 
          className="w-full h-full object-cover object-center hidden lg:block scale-105 transform duration-1000" 
        />
        {/* Gradiente multi-camadas cinematográfico */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/95 lg:via-zinc-950/90 to-zinc-950/60 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-8 flex flex-col items-start gap-8">
          
          {/* Badge Superior Dinâmico com Ícone */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-widest uppercase shadow-inner backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" /> {trainer.slogan}
          </span>

          {/* Título Principal com Gradiente de Impacto */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08]">
            Seu corpo mais forte. Sua rotina mais saudável. Seus resultados <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 underline decoration-emerald-500/30 underline-offset-8">mais consistentes</span>.
          </h1>

          {/* Subtítulo Refinado */}
          <p className="text-base sm:text-lg lg:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed">
            Treinamento personalizado e focado na sua realidade para emagrecer, ganhar massa muscular e evoluir com acompanhamento profissional de perto.
          </p>

          {/* Botões de Ação de Alto Padrão (CTA) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
            <a 
              href="#planos" 
              className="group relative inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-extrabold px-8.5 py-4.5 rounded-xl transition-all duration-300 shadow-2xl shadow-emerald-500/20 hover:-translate-y-0.5"
            >
              <span>Conheça os planos</span> 
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
            
            <a 
              href="#contato" 
              className="inline-flex items-center justify-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 text-white font-bold px-8 py-4.5 rounded-xl border border-zinc-700/80 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-0.5"
            >
              <span>Fale comigo</span>
            </a>
          </div>

          {/* Selos de Confiança / Mini Estatísticas Inferiores */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-zinc-800/80 w-full max-w-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Segurança</p>
                <p className="text-[11px] text-zinc-400">Biomecânica avançada</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Performance</p>
                <p className="text-[11px] text-zinc-400">Foco em resultados</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};