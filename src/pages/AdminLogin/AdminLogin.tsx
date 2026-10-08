import React, { useState } from 'react';
import { Lock, Mail, ArrowRight, ShieldAlert } from 'lucide-react';

export const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'gleidson@admin.com' || email === 'gueuu') {
      window.location.hash = '#admin/dashboard';
    } else {
      alert('Acesso restrito ao personal trainer.');
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex p-3 bg-emerald-500/10 text-emerald-400 rounded-full mb-3">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold">Painel do Personal</h1>
          <p className="text-sm text-zinc-400 mt-1">Acesso exclusivo para Gleidson Doria</p>
        </div>

        <form onSubmit={handleAdminLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-semibold uppercase text-zinc-400 mb-2">E-mail / Usuário</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3.5 w-5 h-5 text-zinc-500" />
              <input type="text" value={email} onChange={e=>setEmail(e.target.value)} placeholder="gueuu" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-12 pr-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500" required />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase text-zinc-400 mb-2">Senha</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3.5 w-5 h-5 text-zinc-500" />
              <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-12 pr-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500" required />
            </div>
          </div>
          <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2">
            Entrar no Painel <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
