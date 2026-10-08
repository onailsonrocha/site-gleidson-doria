import React from 'react';
import { Dumbbell, Laptop, ShieldCheck, BookOpen, Users, Award, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Dumbbell,
    title: "01 — Consultoria Presencial",
    description: "Acompanhamento individualizado e focado em alta performance, hipertrofia ou emagrecimento com correção biomecânica em tempo real e foco absoluto na segurança."
  },
  {
    icon: Laptop,
    title: "02 — Consultoria Online",
    description: "Planejamento de treinamento periodizado e acessível de qualquer lugar, com suporte contínuo, ajuste de cargas e avaliação de progresso à distância."
  },
  {
    icon: ShieldCheck,
    title: "03 — Reabilitação e Condicionamento Físico",
    description: "Trabalho técnico integrado para prevenção e recuperação de lesões, garantindo retorno seguro e progressivo às atividades e treinos de força."
  },
  {
    icon: Users,
    title: "04 — Avaliação Postural e Biomecânica",
    description: "Análise minuciosa dos padrões de movimento para identificar assimetrias, otimizar a execução dos exercícios e prevenir sobrecargas articulares."
  },
  {
    icon: BookOpen,
    title: "05 — E-book: Personal Trainer de Valor",
    description: "Material estratégico desenvolvido com base em anos de experiência para guiar profissionais que desejam ir além do básico e se destacar no mercado."
  },
  {
    icon: Award,
    title: "06 — Mentoria e Posicionamento Profissional",
    description: "Orientações práticas para treinadores que buscam elevar a qualidade do serviço prestado, construir autoridade e valorizar sua carreira na educação física."
  }
];

export const Services: React.FC = () => {
  // Número formatado apenas com dígitos (sem espaços ou traços)
  const phoneNumber = "5571993927472";
  
  // Mensagem Profissional. 
  // Substitua "[Nome do Aluno]" pela variável dinâmica do nome do cliente se houver,
  // ou altere para "Olá, gostaria de saber mais..."
  const message = encodeURIComponent("Olá! Gostaria de iniciar uma consultoria com o Gleidson Doria e levar meu treinamento para o próximo nível.");
  
  // Link direto para o WhatsApp (API)
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

  return (
    <section id="servicos" className="py-24 bg-white text-zinc-900 relative overflow-hidden">
      
      {/* Fundo Premium de Alta Performance (Textura Industrial + Iluminação Dramática) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* Gradientes radiais focados nas extremidades para profundidade */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px]" />

        {/* Padrão geométrico de linhas diagonais industriais (Textura de precisão) */}
        <div className="absolute inset-0 opacity-[0.035]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50px)`
        }} />

        {/* Linha divisória de luz central suave simulando feixe de arena */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-48 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent blur-2xl" />

        {/* Elemento gráfico de moldura técnica nos cantos superiores */}
        <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-emerald-500/20 rounded-tl-xl hidden lg:block" />
        <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-emerald-500/20 rounded-tr-xl hidden lg:block" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-3 block">Metodologia & Soluções</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Como posso ajudar você a evoluir</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={idx} 
                className="bg-zinc-50/90 backdrop-blur-md border border-zinc-200/90 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-emerald-500/50 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-700 transition-colors">{service.title}</h3>
                  <p className="text-zinc-600 leading-relaxed mb-6">{service.description}</p>
                </div>
                
                {/* Botão Saiba mais com link para WhatsApp */}
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 group-hover:text-emerald-700 transition-colors"
                >
                  Falar com a Assessoria <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};