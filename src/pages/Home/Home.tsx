import React from 'react';
import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero';
import { Services } from '../../components/Services/Services';
import { About } from '../../components/About/About';
import { VideoGrid } from '../../components/VideoGrid/VideoGrid'; // Novo componente de mosaico
import { Results } from '../../components/Testimonial/Testimonials';
import { Methodology } from '../../components/Methodology/Methodology';
import { BMICalculator } from '../../components/BMICalculator/BMICalculator';
import { Plans } from '../../components/Plans/Plans';
import { FAQ } from '../../components/FAQ/FAQ';
import { Ebook } from '../../components/Ebook/Ebook';
import { Contact } from '../../components/Contact/Contact';
import { FloatingWhatsApp } from '../../components/FloatingWhatsApp/FloatingWhatsApp';
import { Footer } from '../../components/Footer/Footer';
import { SectionReveal } from '../../components/ui/ScrollReveal';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans selection:bg-emerald-500 selection:text-zinc-950">
      <Header />
      
      <SectionReveal id="inicio">
        <Hero />
      </SectionReveal>

      <SectionReveal id="servicos">
        <Services />
      </SectionReveal>

      <SectionReveal id="sobre">
        <About />
      </SectionReveal>

      <SectionReveal id="videos">
        <VideoGrid />
      </SectionReveal>

      <SectionReveal id="resultados">
        <Results />
      </SectionReveal>

      <SectionReveal>
        <Methodology />
      </SectionReveal>

      <SectionReveal>
        <BMICalculator />
      </SectionReveal>

      <SectionReveal id="planos">
        <Plans />
      </SectionReveal>

      <SectionReveal>
        <FAQ />
      </SectionReveal>

      <SectionReveal id="blog">
        <Ebook />
      </SectionReveal>

      <SectionReveal id="contato">
        <Contact />
      </SectionReveal>

      <FloatingWhatsApp />
      
      <Footer />
    </div>
  );
};