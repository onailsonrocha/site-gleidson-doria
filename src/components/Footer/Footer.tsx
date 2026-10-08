import React from 'react';
import { Dumbbell, Mail, Sparkles, ArrowUpRight } from 'lucide-react';
import { trainer } from '../../data/trainer';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-20 pb-12 border-t border-zinc-900/80 relative overflow-hidden">
      
      {/* Atmosfera e Luzes de Fundo Surreal */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-emerald-500/5 blur-[160px] rounded-full" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative z-10">
        
        {/* Coluna da Marca / Bio */}
        <div className="md:col-span-2">
          <a href="#inicio" className="inline-flex items-center gap-2.5 text-white font-extrabold text-xl tracking-tight mb-4 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all duration-300">
              <Dumbbell className="w-5 h-5" />
            </div>
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              {trainer.brand.toUpperCase()}
            </span>
          </a>
          
          <p className="text-sm text-zinc-400 max-w-sm mb-6 leading-relaxed font-medium">
            {trainer.slogan}
          </p>

          <a 
            href="mailto:gleidsondoria88@gmail.com" 
            className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-zinc-300 bg-zinc-900/80 border border-zinc-800 px-4 py-2.5 rounded-full hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300 group shadow-inner"
          >
            <Mail className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
            <span>gleidsondoria88@gmail.com</span>
          </a>
        </div>

        {/* Navegação */}
        <div>
          <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Navegação
          </h4>
          <ul className="space-y-3 text-sm font-medium">
            <li>
              <a href="#inicio" className="hover:text-emerald-400 transition-colors flex items-center gap-1 group">
                <span className="text-zinc-600 group-hover:text-emerald-500 transition-colors">/</span> Início
              </a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-emerald-400 transition-colors flex items-center gap-1 group">
                <span className="text-zinc-600 group-hover:text-emerald-500 transition-colors">/</span> Serviços
              </a>
            </li>
            <li>
              <a href="#sobre" className="hover:text-emerald-400 transition-colors flex items-center gap-1 group">
                <span className="text-zinc-600 group-hover:text-emerald-500 transition-colors">/</span> Quem Sou
              </a>
            </li>
            <li>
              <a href="#planos" className="hover:text-emerald-400 transition-colors flex items-center gap-1 group">
                <span className="text-zinc-600 group-hover:text-emerald-500 transition-colors">/</span> Planos
              </a>
            </li>
          </ul>
        </div>

        {/* Legal e Termos */}
        <div>
          <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Legal
          </h4>
          <ul className="space-y-3 text-sm font-medium">
            <li>
              <a href="#politica" className="hover:text-emerald-400 transition-colors flex items-center gap-1 group">
                <span className="text-zinc-600 group-hover:text-emerald-500 transition-colors">/</span> Política de Privacidade
              </a>
            </li>
            <li>
              <a href="#termos" className="hover:text-emerald-400 transition-colors flex items-center gap-1 group">
                <span className="text-zinc-600 group-hover:text-emerald-500 transition-colors">/</span> Termos de Uso
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Rodapé Inferior com Créditos e Direitos */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between text-xs gap-4 relative z-10 font-medium">
        <p className="text-zinc-500">
          © 2026 {trainer.brand}. Todos os direitos reservados.
        </p>

        <p className="text-zinc-400 flex items-center gap-1.5 bg-zinc-900/50 border border-zinc-800/60 px-3 py-1.5 rounded-full shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Desenvolvido por</span>
          <a 
            href="https://github.com/ONancha" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-emerald-400 font-bold hover:underline inline-flex items-center gap-0.5"
          >
            Nailson Rocha <ArrowUpRight className="w-3 h-3" />
          </a>
        </p>

        <p className="text-zinc-500 tracking-wider">
          CREF: <span className="text-zinc-400 font-bold">{trainer.cref}</span>
        </p>
      </div>
    </footer>
  );
};