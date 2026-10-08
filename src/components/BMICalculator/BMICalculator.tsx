import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export const BMICalculator: React.FC = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState<{ bmi: number; category: string } | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (!w || !h || h <= 0) return;

    const heightInMeters = h > 3 ? h / 100 : h;
    const bmi = w / (heightInMeters * heightInMeters);
    
    let category = '';
    if (bmi < 18.5) category = 'Abaixo do peso';
    else if (bmi < 24.9) category = 'Peso normal';
    else if (bmi < 29.9) category = 'Sobrepeso';
    else category = 'Obesidade';

    setBmiResult({ bmi: parseFloat(bmi.toFixed(1)), category });
  };

  return (
    <section className="py-24 bg-zinc-900 text-white border-y border-zinc-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-2 block">Ferramenta Interativa</span>
          <h2 className="text-3xl font-extrabold tracking-tight">Calculadora de IMC</h2>
          <p className="text-zinc-400 mt-2">Descubra seu Índice de Massa Corporal rapidamente.</p>
        </div>

        <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl shadow-xl">
          <form onSubmit={calculateBMI} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Peso (kg)</label>
              <input 
                type="number" 
                step="0.1"
                placeholder="Ex: 75" 
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Altura (m ou cm - Ex: 1.75 ou 175)</label>
              <input 
                type="number" 
                step="0.01"
                placeholder="Ex: 1.75" 
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2">
                <Calculator className="w-5 h-5" /> Calcular meu IMC
              </button>
            </div>
          </form>

          {bmiResult && (
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 text-center animate-fade-in">
              <p className="text-sm text-zinc-400">Seu IMC calculado é:</p>
              <p className="text-4xl font-extrabold text-emerald-400 my-2">{bmiResult.bmi}</p>
              <p className="text-lg font-semibold text-white">Classificação: {bmiResult.category}</p>
            </div>
          )}

          <p className="text-xs text-zinc-500 text-center mt-6">
            * O IMC é apenas um indicador geral e não substitui uma avaliação profissional individual.
          </p>
        </div>
      </div>
    </section>
  );
};
