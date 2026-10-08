import React, { useState, useEffect } from 'react';
import tatianeFoto from '../../assets/img/tatiane-santos.jpeg';
import vanessaFoto from '../../assets/img/vanessa-nichetti.jpeg';
import lilianeFoto from '../../assets/img/liliane-bamberg.jpeg';
import igorFoto from '../../assets/img/igor-leite.png';
import larissaFoto from '../../assets/img/larissa-dorea.jpeg';

const testimonialsData = [
  {
    name: "Tatiane Santos",
    role: "Consultoria Presencial • 43 anos",
    comment: "Com o Gleidson são 13 anos de uma história que vai muito além dos treinos. Vivemos gestação, cirurgias e muitas superações. Você se tornou muito mais que meu personal: é amigo, conselheiro e incentivador. Sou muito grata por nunca deixar de acreditar em mim!",
    avatar: tatianeFoto,
    rating: 5,
    objectPosition: "object-top"
  },
  {
    name: "Vanessa Nichetti",
    role: "Consultoria Presencial • 38 anos",
    comment: "Permanecer anos com um profissional fala sobre confiança e conexão. Além de muito competente e dedicado, ele tem um olhar atento que respeita nossos limites. O treino se tornou um momento leve, agradável, de boas conversas e amizade.",
    avatar: vanessaFoto,
    rating: 5,
    objectPosition: "object-[center_25%]"
  },
  {
    name: "Líliane Bamberg",
    role: "Consultoria Presencial • 53 anos",
    comment: "Há 5 anos o Gleidson conquistou nossa família! O que admiro nele vai muito além do treino: é a capacidade de enxergar cada pessoa de forma única, transformando tudo em saúde e evolução. Você não treina apenas corpos, transforma vidas. Que sorte a nossa!",
    avatar: lilianeFoto,
    rating: 5,
    objectPosition: "object-[center_25%]"
  },
  {
    name: "Igor Leite",
    role: "Consultoria On-line • 32 anos",
    comment: "Treino com o Gleidson há mais de 10 anos (hoje na consultoria online). Seu atendimento se diferencia pela atenção técnica, baseada na ciência e adaptada às necessidades de cada um. Minha confiança é tanta que ele hoje atende minha mãe e meu irmão!",
    avatar: igorFoto,
    rating: 5,
    objectPosition: "object-top"
  },
  {
    name: "Larissa Dorea",
    role: "Consultoria On-line • 43 anos",
    comment: "A consultoria é realmente diferenciada! O cuidado e a atenção à execução fazem toda a diferença. O processo é constante e, em apenas 60 dias, meu corpo já está muito mais bonito e torneado. Estou satisfeitíssima!",
    avatar: larissaFoto,
    rating: 5,
    objectPosition: "object-top"
  }
];

export const Results: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Carrossel automático a cada 6 segundos (pausa se o modal estiver aberto)
  useEffect(() => {
    if (isModalOpen) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) / testimonialsData.length ? (prevIndex + 1) % testimonialsData.length : 0);
    }, 6000);
    return () => clearInterval(interval);
  }, [isModalOpen]);

  const current = testimonialsData[currentIndex];

  return (
    <section id="resultados" className="py-24 bg-white text-zinc-900 relative overflow-hidden">
      
      {/* Elementos decorativos de fundo mais evidentes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blob esquerdo superior */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-2xl" />
        
        {/* Blob direito inferior */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-2xl" />

        {/* Padrão de pontos bem visível nas laterais */}
        <div className="absolute top-1/2 left-6 -translate-y-1/2 opacity-20 text-emerald-600 hidden lg:block">
          <svg className="w-32 h-64" fill="currentColor" viewBox="0 0 100 200">
            <pattern id="dots-left" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="3" />
            </pattern>
            <rect width="100" height="200" fill="url(#dots-left)" />
          </svg>
        </div>

        <div className="absolute top-1/2 right-6 -translate-y-1/2 opacity-20 text-emerald-600 hidden lg:block">
          <svg className="w-32 h-64" fill="currentColor" viewBox="0 0 100 200">
            <pattern id="dots-right" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="3" />
            </pattern>
            <rect width="100" height="200" fill="url(#dots-right)" />
          </svg>
        </div>

        {/* Linhas curvas / rabiscos orgânicos evidentes cruzando o fundo */}
        <svg className="absolute inset-0 w-full h-full text-emerald-600/15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path d="M-100,200 C300,400 500,0 800,300 C1100,600 1300,100 1500,400" />
          <path d="M-100,500 C400,200 600,700 900,400 C1200,100 1350,600 1600,300" opacity="0.6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-3 block">Depoimentos</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Histórias que inspiram resultados</h2>
        </div>

        {/* Card do Carrossel */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-zinc-50/90 backdrop-blur-sm border border-zinc-200/80 p-6 sm:p-10 rounded-2xl shadow-md flex flex-col justify-between min-h-[460px] sm:min-h-[380px] relative">
            
            <div>
              {/* Cabeçalho do Card (Foto, Nome e Papel) */}
              <div className="flex items-center gap-4 mb-6">
                
                {/* Foto Clicável para abrir o Retrato */}
                <div 
                  className="relative group cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                  title="Clique para ver em formato retrato"
                >
                  <img 
                    src={current.avatar} 
                    alt={current.name} 
                    className={`w-16 h-16 object-cover rounded-full border-2 border-emerald-600 shadow-sm transition-transform duration-300 group-hover:scale-105 ${current.objectPosition}`} 
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold">{current.name}</h3>
                  <p className="text-sm text-emerald-600 font-semibold">{current.role}</p>
                </div>
              </div>

              {/* Comentário */}
              <div className="mb-6 min-h-[220px] sm:min-h-[140px] flex flex-col justify-start">
                <div className="flex gap-1 mb-3 text-emerald-500">
                  {[...Array(current.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-base sm:text-lg text-zinc-600 italic leading-relaxed whitespace-pre-line">"{current.comment}"</p>
              </div>
            </div>

            {/* Controles de Navegação (Indicadores / Bolinhas) */}
            <div className="flex justify-center items-center gap-2 pt-4 border-t border-zinc-200">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-emerald-600' : 'w-2 bg-zinc-300'
                  }`}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* Modal de Retrato (Abre ao clicar na foto) */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)} // Fecha ao clicar fora
        >
          <div 
            className="relative max-w-sm w-full bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-zinc-700"
            onClick={(e) => e.stopPropagation()} // Impede fechar ao clicar na caixa interna
          >
            {/* Botão de Fechar */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 z-10 bg-black/60 hover:bg-black text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              aria-label="Fechar"
            >
              ✕
            </button>

            {/* Imagem em tamanho de retrato */}
            <img 
              src={current.avatar} 
              alt={current.name} 
              className={`w-full h-[400px] object-cover ${current.objectPosition}`} 
            />

            {/* Informações do Aluno */}
            <div className="p-5 text-center bg-zinc-900 text-white">
              <h4 className="text-lg font-bold">{current.name}</h4>
              <p className="text-xs text-emerald-400 mt-1">{current.role}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};