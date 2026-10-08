export interface TrainerConfig {
  name: string;
  brand: string;
  slogan: string;
  profession: string;
  city: string;
  email: string;
  instagram: string;
  whatsapp: string;
  cref: string;
  bio: string;
  heroImages: string[];
}

export interface Plan {
  id: string;
  name: string;
  durationMonths: number;
  monthlyPrice: number;
  totalPrice: number;
  badge?: string;
  features: string[];
  paymentLinkKey: 'mensal' | 'trimestral' | 'semestral' | 'anual';
}

export interface Testimonial {
  id: string;
  name: string;
  goal: string;
  text: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  content: string;
  readTime: string;
  date: string;
  image: string;
}
