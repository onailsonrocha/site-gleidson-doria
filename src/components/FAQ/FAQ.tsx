import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Como funciona a consultoria?",
    a: "O processo começa com uma avaliação inicial do seu perfil, objetivos e rotina, seguida pela montagem do seu planejamento de treinos personalizado."
  },
  {
    q: "Qual a diferença entre treinamento online e presencial?",
    a: "O presencial conta com acompanhamento direto na execução de cada movimento. O online entrega periodização completa, vídeos demonstrativos e suporte remoto."
  },
  {
    q: "O plano nutricional está incluso?",
    a: "O acompanhamento nutricional, quando necessário, deve ser realizado por profissional habilitado. O Personal Trainer orienta aspectos relacionados ao treinamento e hábitos."
  },
  {
    q: "Como faço para começar?",
    a: "Basta escolher o plano ideal para você, realizar a contratação e preencher os dados iniciais para agendarmos o seu início."
  }
];

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-24 bg-zinc-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-2 block">Dúvidas Frequentes</span>
          <h2 className="text-3xl font-extrabold tracking-tight">Perguntas comuns</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-4 text-left font-semibold flex items-center justify-between text-zinc-200 hover:text-white"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openIdx === idx ? 'rotate-180 text-emerald-400' : ''}`} />
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-4 text-sm text-zinc-400 leading-relaxed border-t border-zinc-900 pt-2">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
