import React, { useState, useEffect, useRef } from 'react';
import { Volume2, X, Play } from 'lucide-react';

interface VideoItem {
  id: number;
  url: string;
  title: string;
  subtitle: string;
}

const demoVideos: VideoItem[] = [
  { id: 1, url: '/videos/video12.mp4', title: 'O Reflexo do Educador Físico', subtitle: 'Empatia e transformação' },
  { id: 2, url: '/videos/video13.mp4', title: 'A Arte de Atender', subtitle: 'Atendimento em tempo real' },
  { id: 3, url: '/videos/video14.mp4', title: 'Treinão de Domingo', subtitle: 'Mobilidade e corrida' },
  { id: 4, url: '/videos/video17.mp4', title: 'Reabilitação do LCA', subtitle: 'Pós-cirúrgico e funcional' },
  { id: 5, url: '/videos/video18.mp4', title: 'Membros Inferiores', subtitle: 'Força e estabilidade' },
  { id: 6, url: '/videos/video19.mp4', title: 'Resistência Avançada', subtitle: 'Foco e superação' },
  { id: 7, url: '/videos/video20.mp4', title: 'Profissional de Valor', subtitle: 'Atitude de excelência' },
  { id: 8, url: '/videos/video21.mp4', title: 'Autoridade no Ensino', subtitle: 'Liderança e prática' },
  { id: 9, url: '/videos/video15.mp4', title: 'Disciplina Constante', subtitle: 'Foco no objetivo' },
  { id: 10, url: '/videos/video16.mp4', title: 'Transformação Real', subtitle: 'Mude de patamar' },
];

export const VideoGrid: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  // Efeito para fechar o modal ao pressionar ESC
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveVideo(null);
      }
    };

    if (activeVideo) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeVideo]);

  return (
    <section className="w-full bg-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <span className="text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-2 block">Imersão</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">O Método na Prática</h2>
        <p className="text-zinc-300 mt-2 text-sm sm:text-base">Clique em qualquer cena para assistir com som e tela cheia</p>
      </div>

      {/* Mosaico Full Width estilo quebra-cabeça */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1 md:gap-2 bg-zinc-900 p-1 md:p-2">
        {demoVideos.map((video) => (
          <GridVideoCard 
            key={video.id} 
            video={video} 
            onSelect={() => setActiveVideo(video)} 
          />
        ))}
      </div>

      {/* Modal / Player Expandido com Áudio mantendo o tamanho original */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
          <button 
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 z-50 w-12 h-12 bg-zinc-800/80 hover:bg-zinc-700 text-white rounded-full flex items-center justify-center border border-zinc-600 transition-colors shadow-xl"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-full max-h-[90vh] bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl flex items-center justify-center">
            <video 
              src={activeVideo.url} 
              controls 
              autoPlay 
              playsInline
              className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-xl"
            />
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none rounded-b-2xl">
              <span className="text-xs font-semibold tracking-widest uppercase text-emerald-400">{activeVideo.subtitle}</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">{activeVideo.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Sub-componente para gerenciar o autoplay individual e hover de cada mosaico
const GridVideoCard: React.FC<{ video: VideoItem; onSelect: () => void }> = ({ video, onSelect }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.play().catch(() => {});
        } else {
          videoElement.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(videoElement);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      onClick={onSelect}
      className="relative aspect-[3/4] sm:aspect-[4/5] bg-zinc-800 overflow-hidden cursor-pointer group rounded-lg transition-transform duration-300 hover:scale-[1.02] hover:z-10 shadow-lg border border-zinc-800/50"
    >
      <video
        ref={videoRef}
        src={video.url}
        muted
        loop
        playsInline
        className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Gradiente de sobreposição para legibilidade do texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

      {/* Indicador de play ao passar o mouse */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900/30 backdrop-blur-[2px]">
        <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-zinc-950 shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
          <Play className="w-5 h-5 fill-zinc-950 ml-0.5" />
        </div>
      </div>

      {/* Informações no rodapé do card */}
      <div className="absolute bottom-3 left-3 right-3 z-10">
        <p className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold">{video.subtitle}</p>
        <h4 className="text-sm font-bold text-white truncate">{video.title}</h4>
      </div>

      <div className="absolute top-3 right-3 text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity">
        <Volume2 className="w-4 h-4" />
      </div>
    </div>
  );
};