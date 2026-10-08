export interface MethodStep {
  id: string;
  title: string;
  description: string;
}

export const testimonials: MethodStep[] = [
  {
    id: '1',
    title: 'Avaliação & Alinhamento',
    description: 'Análise detalhada do seu histórico de saúde, nível de experiência, rotina diária e objetivos específicos (seja presencial ou online).'
  },
  {
    id: '2',
    title: 'Planejamento Sob Medida',
    description: 'Criação de estratégias de treino estruturadas com base na ciência e adaptadas perfeitamente à sua realidade e aos seus limites.'
  },
  {
    id: '3',
    title: 'Evolução & Suporte Contínuo',
    description: 'Acompanhamento de perto da execução, ajustes de cargas e estímulos constantes para garantir resultados sólidos e duradouros.'
  }
];