export interface EbookModule {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  readTime: string;
  date: string;
  image: string;
}

export const ebookModules: EbookModule[] = [
  {
    id: '1',
    title: 'Os Cinco Pilares da Carreira',
    category: 'Estratégia Profissional',
    summary: 'Construa uma carreira sólida e valorizada no mercado de Educação Física através de fundamentos testados e aprovados.',
    content: 'Conteúdo detalhado sobre os pilares fundamentais que diferenciam um profissional comum de um personal trainer de alto valor.',
    readTime: '5 min',
    date: '01 Out 2026',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Atendimento & Fidelização',
    category: 'Relacionamento com o Cliente',
    summary: 'Estratégias práticas para elevar o nível do seu atendimento e garantir a retenção contínua dos seus alunos.',
    content: 'Como transformar a experiência do aluno em fidelidade a longo prazo, criando um vínculo de confiança inabalável.',
    readTime: '6 min',
    date: '28 Set 2026',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Postura, Comunicação & Precificação',
    category: 'Valorização Profissional',
    summary: 'Como posicionar-se com autoridade no mercado, comunicar o seu verdadeiro valor e precificar o seu trabalho de forma justa.',
    content: 'Guia prático para alinhar a sua postura profissional, otimizar a comunicação verbal e não-verbal e cobrar o que realmente vale.',
    readTime: '7 min',
    date: '25 Set 2026',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800'
  }
];