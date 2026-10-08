import React from 'react';
import { MessageCircle } from 'lucide-react';
import { trainer } from '../../data/trainer';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href={trainer.whatsapp} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-zinc-950 text-emerald-500" />
    </a>
  );
};
