import React from 'react';
import { Dumbbell, Calendar, User, LogOut, CheckCircle } from 'lucide-react';

export const ClientDashboard: React.FC = () => {
  const handleLogout = () => {
    window.location.hash = '#inicio';
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      <header className="border-b border-zinc-800 bg-zinc-900/50 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-lg">
          <Dumbbell className="w-6 h-6 text-emerald-500" />
          <span>Área do Aluno | Gleidson Doria</span>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white bg-zinc-800 px-3 py-2 rounded-lg">
          <LogOut className="w-4 h-4" /> Sair
        </button>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 text-2xl font-bold">
            <User className="w-12 h-12" />
          </div>
          <h2 className="text-xl font-bold">Nome do Aluno</h2>
          <p className="text-xs text-emerald-400 mt-1">Plano Semestral Ativo</p>
          <div className="w-full mt-6 pt-6 border-t border-zinc-800 text-left space-y-3 text-sm text-zinc-300">
            <div className="flex justify-between"><span>Objetivo:</span> <strong className="text-white">Hipertrofia</strong></div>
            <div className="flex justify-between"><span>Vencimento:</span> <strong className="text-white">12/04/2027</strong></div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Dumbbell className="w-5 h-5 text-emerald-500" /> Seu Treino de Hoje (Ficha A)
            </h3>
            <div className="space-y-3">
              {['Supino Reto com Halteres - 4x 10 repetições', 'Desenvolvimento Militar - 3x 12 repetições', 'Tríceps na Polia - 4x 15 repetições'].map((ex, idx) => (
                <div key={idx} className="bg-zinc-950 p-4 rounded-xl border border-zinc-800/80 flex items-center justify-between text-sm">
                  <span>{ex}</span>
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
