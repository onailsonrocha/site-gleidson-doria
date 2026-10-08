import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, User } from 'lucide-react';
import { trainer } from '../../data/trainer';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/95 backdrop-blur-md py-4 border-b border-zinc-800' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white font-bold text-lg tracking-wider">
          <Dumbbell className="w-6 h-6 text-emerald-500" />
          <span>{trainer.name.toUpperCase()}</span>
        </a>

        {/* Navegação Desktop (Visível apenas de 1024px para cima) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <a href="#inicio" className="hover:text-emerald-400 transition-colors">Início</a>
          <a href="#servicos" className="hover:text-emerald-400 transition-colors">Serviços</a>
          <a href="#sobre" className="hover:text-emerald-400 transition-colors">Quem Sou</a>
          <a href="#resultados" className="hover:text-emerald-400 transition-colors">Resultados</a>
          <a href="#planos" className="hover:text-emerald-400 transition-colors">Planos</a>
          <a href="#blog" className="hover:text-emerald-400 transition-colors">Ebook</a>
          <a href="#contato" className="hover:text-emerald-400 transition-colors">Contato</a>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="https://client.mfitpersonal.com.br/out/signup-link/MjA5NjI=" className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white px-3 py-2 rounded border border-zinc-800 transition-colors">
            <User className="w-3.5 h-3.5" /> Área do Cliente
          </a>
          <a href="#planos" className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold px-5 py-2.5 rounded text-sm transition-all shadow-lg shadow-emerald-500/10">
            Começar Agora
          </a>
        </div>

        {/* Botão do Menu Mobile / Tablet (Visível abaixo de 1024px) */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="lg:hidden text-zinc-300 hover:text-white p-2 focus:outline-none transition-transform active:scale-95"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Menu Dropdown Mobile / Tablet (Abaixo de 1024px) */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-zinc-950/98 backdrop-blur-lg border-b border-zinc-800 py-6 px-6 flex flex-col gap-4 shadow-2xl lg:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-emerald-400 font-medium py-1 transition-colors">Início</a>
          <a href="#servicos" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-emerald-400 font-medium py-1 transition-colors">Serviços</a>
          <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-emerald-400 font-medium py-1 transition-colors">Quem Sou</a>
          <a href="#resultados" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-emerald-400 font-medium py-1 transition-colors">Resultados</a>
          <a href="#planos" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-emerald-400 font-medium py-1 transition-colors">Planos</a>
          <a href="#blog" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-emerald-400 font-medium py-1 transition-colors">Ebook</a>
          <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-emerald-400 font-medium py-1 transition-colors">Contato</a>
          
          <div className="pt-4 border-t border-zinc-800 flex flex-col gap-3">
            <a href="https://client.mfitpersonal.com.br/out/signup-link/MjA5NjI=" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 text-sm text-zinc-300 py-2.5 border border-zinc-800 rounded hover:border-zinc-700 transition-colors">
              <User className="w-4 h-4" /> Área do Cliente
            </a>
            <a href="#planos" onClick={() => setMobileMenuOpen(false)} className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-center font-semibold py-3 rounded transition-all">
              Começar Agora
            </a>
          </div>
        </div>
      )}
    </header>
  );
};