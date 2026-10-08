import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

const faqs = [
  {
    q: "Como funciona a consultoria?",
    a: "O processo começa com uma avaliação inicial detalhada do seu perfil, histórico de lesões, objetivos e rotina, seguida pela montagem de uma periodização e planejamento de treinos 100% personalizados."
  },
  {
    q: "Qual a diferença entre treinamento online e presencial?",
    a: "O presencial conta com acompanhamento direto na execução de cada movimento e ajuste de carga em tempo real. O online entrega periodização completa via aplicativo, vídeos demonstrativos e suporte contínuo para manter sua evolução constante."
  },
  {
    q: "O plano nutricional está incluso?",
    a: "O acompanhamento nutricional é focado em diretrizes de performance e alinhamento de hábitos alimentares em conjunto com o treino. Casos clínicos específicos são direcionados a parceiros nutricionistas habilitados."
  },
  {
    q: "Como faço para começar?",
    a: "Basta clicar em qualquer botão de atendimento via WhatsApp no site para falar diretamente com o Gleidson, alinhar o seu objetivo e darmos o pontapé inicial no seu planejamento."
  }
];

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // Deixa o primeiro item aberto por padrão para dar dinamismo

  return (
    <section id="faq" className="py-28 bg-zinc-900 text-white relative overflow-hidden border-t border-b border-zinc-800/80">
      
      {/* Glows de fundo sutis integrados ao estilo industrial */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-10 w-[350px] h-[350px] bg-emerald-600/5 rounded-full blur-[100px]" />
        
        {/* Grid técnico sutil */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Cabeçalho de Autoridade */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full mb-4 shadow-inner">
            <HelpCircle className="w-3.5 h-3.5" /> Esclarecimentos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Perguntas <span className="text-emerald-400 underline decoration-emerald-500/30 underline-offset-8">Frequentes</span>
          </h2>
          <p className="text-zinc-400 text-base max-w-lg mx-auto">
            Tudo o que você precisa saber antes de dar o próximo passo rumo à sua alta performance.
          </p>
        </div>

        {/* Acordeão Estilizado */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`transition-all duration-300 rounded-2xl border overflow-hidden ${
                  isOpen 
                    ? 'bg-zinc-950/90 border-emerald-500/40 shadow-xl shadow-emerald-500/5' 
                    : 'bg-zinc-950/50 border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <button 
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-7 py-5 text-left font-semibold flex items-center justify-between gap-4 group cursor-pointer"
                >
                  <span className={`text-base sm:text-lg transition-colors ${isOpen ? 'text-emerald-400 font-bold' : 'text-zinc-200 group-hover:text-white'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                    isOpen ? 'bg-emerald-500/20 text-emerald-400 rotate-180' : 'bg-zinc-900 text-zinc-400 group-hover:text-zinc-200'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-7 pb-6 text-sm sm:text-base text-zinc-400 leading-relaxed border-t border-zinc-900/80 pt-4 animate-fadeIn">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Caixa de Suporte Secundário */}
        <div className="mt-12 text-center bg-zinc-950/40 border border-zinc-800/60 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Ainda ficou com alguma dúvida?</h4>
              <p className="text-xs text-zinc-400">Fale diretamente com o Gleidson via WhatsApp.</p>
            </div>
          </div>
          <a
            href="https://wa.me/5571993927472?text=Olá%20Gleidson,%20tenho%20uma%20dúvida%20sobre%20a%20consultoria."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-xs font-bold uppercase tracking-wider bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-5 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
          >
            Tirar Dúvida Agora
          </a>
        </div>

      </div>
    </section>
  );
};