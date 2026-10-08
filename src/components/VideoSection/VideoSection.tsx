import React, { useEffect, useRef } from 'react';

export const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Quando a secção entra no ecrã, reproduz o vídeo
          videoElement.play().catch((error) => {
            console.log("Autoplay bloqueado pelo navegador:", error);
          });
        } else {
          // Quando sai do ecrã, pausa o vídeo
          videoElement.pause();
        }
      },
      { threshold: 0.5 } // Dispara quando 50% do vídeo estiver visível no ecrã
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-24 bg-zinc-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-2 block">Demonstração</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Veja como funciona o meu trabalho</h2>
        </div>

        <div className="relative w-full aspect-video bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl flex items-center justify-center">
          <video 
            ref={videoRef}
            src="/gleidsonVideo.mp4" 
            controls 
            playsInline
            muted // Recomendado para garantir que o navegador não bloqueie o autoplay
            className="w-full h-full object-cover"
          >
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
      </div>
    </section>
  );
};