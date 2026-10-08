import React from 'react';
import { ebookModules } from '../../data/blog';
import { ArrowRight, Clock, BookOpen, ShieldCheck, Zap, Award } from 'lucide-react';

export const Ebook: React.FC = () => {
  return (
    <section id="blog" className="py-28 bg-white text-zinc-900 relative overflow-hidden border-t border-b border-zinc-200">
      
      {/* Background Claro Texturizado & Glows Suaves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[120px]" />
        
        {/* Grid técnico sutil de fundo claro */}
        <div className="absolute inset-0 opacity-[0.4]" style={{
          backgroundImage: `linear-gradient(to right, #e4e4e7 1px, transparent 1px), linear-gradient(to bottom, #e4e4e7 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cabeçalho de Autoridade */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-emerald-700 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full mb-4 shadow-inner">
            <BookOpen className="w-4 h-4 text-emerald-600" /> Método Validado no Mercado
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 text-zinc-900">
            Seja um Personal Trainer de <span className="text-emerald-600 underline decoration-emerald-500/30 underline-offset-8">Valor</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
            Esqueça o modelo comum de troca de hora por aula. Um guia estratégico definitivo para profissionais que buscam autoridade, alta retenção de alunos e faturamento escalável no mercado fitness.
          </p>
        </div>

        {/* Grade de Módulos com Estilo Clean Premium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ebookModules.map((module) => (
            <article 
              key={module.id} 
              className="bg-zinc-50/90 backdrop-blur-md border border-zinc-200 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500"
            >
              <div>
                <div className="h-52 overflow-hidden relative">
                  <img 
                    src={module.image} 
                    alt={module.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-95 group-hover:brightness-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 bg-white/90 backdrop-blur-md text-emerald-700 text-xs font-bold px-3 py-1 rounded-md border border-zinc-200 shadow-sm">
                    {module.category}
                  </span>
                </div>
                
                <div className="p-7">
                  <div className="flex items-center gap-2 text-xs text-zinc-500 mb-3">
                    <Clock className="w-4 h-4 text-emerald-600" /> 
                    <span>{module.readTime} de leitura densa</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-zinc-900 group-hover:text-emerald-600 transition-colors leading-snug">
                    {module.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {module.summary}
                  </p>
                </div>
              </div>

              <div className="px-7 pb-7 pt-2 border-t border-zinc-200 mt-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-400 tracking-wider uppercase">Leitura Estratégica</span>
                <span className="text-emerald-600 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action (CTA) de Altíssima Conversão */}
        <div className="bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 text-white border border-emerald-500/30 p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-3 text-center lg:text-left relative z-10">
            <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold tracking-widest uppercase">
              <Zap className="w-4 h-4" /> Acesso Imediato à Plataforma Oficial
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Pronto para virar o jogo na sua carreira?
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base max-w-xl">
              Adquira agora o e-book completo hospedado na Hotmart e comece a aplicar os conceitos que vão transformar o seu posicionamento profissional.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 w-full lg:w-auto">
            <a 
              href="https://gleidsondoria88.hotmart.host/seja-um-personal-trainer-de-valor-f82583c2-905f-4b8b-aeab-fafaaeb479d8?utm_source=ig&utm_medium=social&utm_content=link_in_bio" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-extrabold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/20 hover:scale-105"
            >
              Garantir Meu E-book na Hotmart <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Garantias / Selos de Confiança */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-zinc-600 text-xs sm:text-sm">
          <div className="flex items-center justify-center gap-2 bg-zinc-50 border border-zinc-200 py-3 px-4 rounded-xl shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Compra 100% Segura via Hotmart</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-zinc-50 border border-zinc-200 py-3 px-4 rounded-xl shadow-sm">
            <Zap className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Acesso Imediato após a Aprovação</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-zinc-50 border border-zinc-200 py-3 px-4 rounded-xl shadow-sm">
            <Award className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Conteúdo Prático Baseado em Vivência Real</span>
          </div>
        </div>

      </div>
    </section>
  );
};