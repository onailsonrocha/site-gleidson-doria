import React, { useState } from 'react';
import { Users, Dumbbell, DollarSign, LogOut, PlusCircle, X, Calendar } from 'lucide-react';

interface Aluno {
  id: string;
  nome: string;
  email: string;
  objetivo: string;
  plano: string;
  vencimento: string;
  status: string;
}

export const AdminDashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [plano, setPlano] = useState('Mensal');
  
  const [alunos, setAlunos] = useState<Aluno[]>([
    { id: '1', nome: 'Mariana Souza', email: 'mariana@teste.com', objetivo: 'Emagrecimento', plano: 'Semestral', vencimento: '02/04/2027', status: 'Ativo' },
    { id: '2', nome: 'Carlos Eduardo', email: 'carlos@teste.com', objetivo: 'Hipertrofia', plano: 'Anual', vencimento: '02/10/2027', status: 'Ativo' },
    { id: '3', nome: 'Fernanda Lima', email: 'fernanda@teste.com', objetivo: 'Condicionamento Físico', plano: 'Trimestral', vencimento: '02/01/2027', status: 'Ativo' }
  ]);

  const handleLogout = () => {
    window.location.hash = '#inicio';
  };

  // Regra de negócio para calcular a data de vencimento com base no plano escolhido
  const calcularDataVencimento = (tipoPlano: string): string => {
    const dataAtual = new Date();
    
    if (tipoPlano === 'Mensal') {
      dataAtual.setMonth(dataAtual.getMonth() + 1);
    } else if (tipoPlano === 'Trimestral') {
      dataAtual.setMonth(dataAtual.getMonth() + 3);
    } else if (tipoPlano === 'Semestral') {
      dataAtual.setMonth(dataAtual.getMonth() + 6);
    } else if (tipoPlano === 'Anual') {
      dataAtual.setFullYear(dataAtual.getFullYear() + 1);
    }

    return dataAtual.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const handleCadastrarAluno = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !email || !objetivo) return;

    const vencimentoCalculado = calcularDataVencimento(plano);

    const novoAluno: Aluno = {
      id: Date.now().toString(),
      nome,
      email,
      objetivo,
      plano,
      vencimento: vencimentoCalculado,
      status: 'Ativo'
    };

    setAlunos([novoAluno, ...alunos]);
    setNome('');
    setEmail('');
    setSenha('');
    setObjetivo('');
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col relative">
      <header className="border-b border-zinc-800 bg-zinc-900 px-8 py-4 flex items-center justify-between">
        <div className="font-bold text-lg flex items-center gap-2">
          <Dumbbell className="w-6 h-6 text-emerald-500" />
          <span>Gleidson Doria | Gestão de Alunos</span>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white bg-zinc-800 px-3 py-2 rounded-lg">
          <LogOut className="w-4 h-4" /> Sair
        </button>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto p-8 space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex items-center gap-4">
            <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-xl"><Users className="w-8 h-8" /></div>
            <div><p className="text-xs text-zinc-400 uppercase">Alunos Ativos</p><h4 className="text-2xl font-bold">{alunos.length + 21}</h4></div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex items-center gap-4">
            <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-xl"><Dumbbell className="w-8 h-8" /></div>
            <div><p className="text-xs text-zinc-400 uppercase">Fichas Montadas</p><h4 className="text-2xl font-bold">18</h4></div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex items-center gap-4">
            <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-xl"><DollarSign className="w-8 h-8" /></div>
            <div><p className="text-xs text-zinc-400 uppercase">Planos Ativos</p><h4 className="text-2xl font-bold">R$ 3.420</h4></div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg">Alunos Cadastrados e Vencimentos</h3>
            <button onClick={() => setIsModalOpen(true)} className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold px-4 py-2 rounded-lg text-sm flex items-center gap-2">
              <PlusCircle className="w-4 h-4" /> Novo Aluno
            </button>
          </div>
          <div className="space-y-3">
            {alunos.map((aluno) => (
              <div key={aluno.id} className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm">
                <div>
                  <strong className="text-white text-base">{aluno.nome}</strong>
                  <p className="text-xs text-zinc-400">{aluno.email} • {aluno.objetivo} • Plano {aluno.plano}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-zinc-300">
                    <Calendar className="w-3.5 h-3.5 text-emerald-500" /> Vence em: {aluno.vencimento}
                  </span>
                  <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded font-semibold">{aluno.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* MODAL DE NOVO ALUNO COM CÁLCULO INTELIGENTE DE VENCIMENTO */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 border border-zinc-800 max-w-lg w-full p-6 rounded-2xl shadow-2xl relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-zinc-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-xl font-bold mb-4">Cadastrar Acesso e Calcular Vencimento</h3>
            
            <form onSubmit={handleCadastrarAluno} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1">Nome Completo</label>
                <input 
                  type="text" 
                  value={nome} 
                  onChange={e => setNome(e.target.value)} 
                  placeholder="Ex: João Silva" 
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                  required 
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1">E-mail de Acesso</label>
                  <input 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="aluno@email.com" 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1">Senha Provisória</label>
                  <input 
                    type="text" 
                    value={senha} 
                    onChange={e => setSenha(e.target.value)} 
                    placeholder="Ex: 123456" 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                    required 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1">Objetivo Principal</label>
                  <input 
                    type="text" 
                    value={objetivo} 
                    onChange={e => setObjetivo(e.target.value)} 
                    placeholder="Ex: Hipertrofia" 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1">Plano Escolhido</label>
                  <select 
                    value={plano} 
                    onChange={e => setPlano(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Mensal">Mensal (1 Mês)</option>
                    <option value="Trimestral">Trimestral (3 Meses)</option>
                    <option value="Semestral">Semestral (6 Meses)</option>
                    <option value="Anual">Anual (12 Meses)</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-3 rounded-lg text-sm transition-colors">
                  Cancelar
                </button>
                <button type="submit" className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold py-3 rounded-lg text-sm transition-colors">
                  Salvar e Calcular Vencimento
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
