import React from 'react';
import { Dumbbell, Mail } from 'lucide-react';
import { trainer } from '../../data/trainer';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="md:col-span-2">
          <a href="#" className="flex items-center gap-2 text-white font-bold text-lg mb-4">
            <Dumbbell className="w-6 h-6 text-emerald-500" />
            <span>{trainer.brand.toUpperCase()}</span>
          </a>
          <p className="text-sm text-zinc-400 max-w-sm mb-4">{trainer.slogan}</p>
          <a 
            href="mailto:gleidsondoria88@gmail.com" 
            className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-emerald-400 transition-colors"
          >
            <Mail className="w-4 h-4 text-emerald-500" />
            <span>gleidsondoria88@gmail.com</span>
          </a>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navegação</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
            <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
            <li><a href="#sobre" className="hover:text-white transition-colors">Quem Sou</a></li>
            <li><a href="#planos" className="hover:text-white transition-colors">Planos</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#politica" className="hover:text-white transition-colors">Política de Privacidade</a></li>
            <li><a href="#termos" className="hover:text-white transition-colors">Termos de Uso</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
        <p>© 2026 {trainer.brand}. Todos os direitos reservados.</p>
        <p className="text-zinc-400">
          Desenvolvido por{' '}
          <a 
            href="https://github.com/ONancha" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-emerald-400 font-semibold hover:underline"
          >
            Nailson Rocha
          </a>
        </p>
        <p>CREF: {trainer.cref}</p>
      </div>
    </footer>
  );
};