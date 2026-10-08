import React from 'react';
import { plans } from '../../data/plans';
import { paymentLinks } from '../../data/paymentLinks';
import { Check, ShieldCheck } from 'lucide-react';

export const Plans: React.FC = () => {
  return (
    <section id="planos" className="py-24 bg-white text-zinc-900 relative overflow-hidden">
      
      {/* Elementos decorativos de fundo evidentes (Estilo Comercial / Dinâmico) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glows / Brilhos suaves nas extremidades */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl" />

        {/* Padrão de pontos texturizado nas laterais */}
        <div className="absolute top-1/3 left-6 opacity-15 text-emerald-600 hidden xl:block">
          <svg className="w-32 h-64" fill="currentColor" viewBox="0 0 100 200">
            <pattern id="dots-plans-left" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="3" />
            </pattern>
            <rect width="100" height="200" fill="url(#dots-plans-left)" />
          </svg>
        </div>

        <div className="absolute bottom-1/3 right-6 opacity-15 text-emerald-600 hidden xl:block">
          <svg className="w-32 h-64" fill="currentColor" viewBox="0 0 100 200">
            <pattern id="dots-plans-right" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="3" />
            </pattern>
            <rect width="100" height="200" fill="url(#dots-plans-right)" />
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
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-3 block">Investimento</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Escolha como você quer evoluir</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => {
            const link = paymentLinks[plan.paymentLinkKey];
            return (
              <div 
                key={plan.id} 
                className={`relative bg-zinc-50/90 backdrop-blur-sm border rounded-2xl p-8 flex flex-col justify-between transition-all hover:shadow-2xl ${plan.badge ? 'border-emerald-500 ring-2 ring-emerald-500/20' : 'border-zinc-200'}`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-zinc-950 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">{plan.name}</h3>
                  <div className="my-6">
                    <span className="text-3xl font-extrabold text-zinc-950">R$ {plan.monthlyPrice}</span>
                    <span className="text-sm text-zinc-500">/mês</span>
                    {plan.durationMonths > 1 && (
                      <p className="text-xs text-zinc-500 mt-1">Total do período: R$ {plan.totalPrice}</p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-600">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-zinc-950 hover:bg-emerald-600 text-white font-semibold py-3.5 rounded-lg text-center transition-colors block shadow-md"
                >
                  Contratar Plano
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex items-center justify-center gap-2 text-xs text-zinc-500">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Pagamento seguro via Mercado Pago • PIX e Cartões</span>
        </div>
      </div>
    </section>
  );
};