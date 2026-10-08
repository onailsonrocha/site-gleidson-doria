import React from 'react';
import { ebookModules } from '../../data/blog';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';

export const Ebook: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-white text-zinc-900 relative overflow-hidden">
      
      {/* Elementos decorativos de fundo evidentes (Estilo Comercial / Dinâmico) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glows / Brilhos suaves nas extremidades */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl" />

        {/* Padrão de pontos texturizado nas laterais */}
        <div className="absolute top-1/3 left-6 opacity-15 text-emerald-600 hidden xl:block">
          <svg className="w-32 h-64" fill="currentColor" viewBox="0 0 100 200">
            <pattern id="dots-ebook-left" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="3" />
            </pattern>
            <rect width="100" height="200" fill="url(#dots-ebook-left)" />
          </svg>
        </div>

        <div className="absolute bottom-1/3 right-6 opacity-15 text-emerald-600 hidden xl:block">
          <svg className="w-32 h-64" fill="currentColor" viewBox="0 0 100 200">
            <pattern id="dots-ebook-right" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="3" />
            </pattern>
            <rect width="100" height="200" fill="url(#dots-ebook-right)" />
          </svg>
        </div>

        {/* Linhas curvas dinâmicas cruzando o fundo claro */}
        <svg className="absolute inset-0 w-full h-full text-emerald-600/10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path d="M-100,150 C400,350 300,650 700,450 C1100,250 1300,650 1600,300" />
          <path d="M-100,500 C300,700 800,200 1200,600 C1400,700 1500,400 1700,450" opacity="0.6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-emerald-600 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full mb-3">
            <BookOpen className="w-3.5 h-3.5" /> Material Exclusivo
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Seja um Personal Trainer de Valor
          </h2>
          <p className="text-zinc-600 mt-4 text-base sm:text-lg">
            Guia prático e estratégico criado com base em anos de experiência para profissionais que desejam ir além do básico e construir uma carreira sólida e valorizada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ebookModules.map((module) => (
            <article 
              key={module.id} 
              className="bg-zinc-50/90 backdrop-blur-sm border border-zinc-200 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img src={module.image} alt={module.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-zinc-500 mb-3">
                    <span className="bg-emerald-500/10 text-emerald-700 font-semibold px-2.5 py-1 rounded border border-emerald-500/20">{module.category}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {module.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-zinc-900 leading-snug">{module.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-6">{module.summary}</p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0">
                <a 
                  href="https://gleidsondoria88.hotmart.host/seja-um-personal-trainer-de-valor-f82583c2-905f-4b8b-aeab-fafaaeb479d8?utm_source=ig&utm_medium=social&utm_content=link_in_bio" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  Garantir meu e-book <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};