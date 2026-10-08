import React from 'react';
import { testimonials } from '../../data/testimonials';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const Methodology: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-3 block">Metodologia</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Como funciona o acompanhamento</h2>
          <p className="text-zinc-400 mt-4 text-base sm:text-lg">
            Um processo estruturado, seguro e focado inteiramente na sua evolução física e na sua rotina.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((step, index) => (
            <div 
              key={step.id} 
              className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl flex flex-col justify-between relative group hover:border-emerald-500/50 transition-colors duration-300"
            >
              <div>
                {/* Número do Passo */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors">
                    0{index + 1}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">{step.description}</p>
              </div>

              {/* Detalhe extra opcional */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-xs text-emerald-400 font-medium">
                <span>Etapa essencial</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};