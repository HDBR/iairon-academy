import React from 'react';
import UrgencyBar from '@/components/UrgencyBar';
import MentorSection from '@/components/MentorSection';
import PriceSection from '@/components/PriceSection';
import CertificateSection from '@/components/CertificateSection';
import BackgroundEffects from '@/components/BackgroundEffects';
import WeeklyTutorialsSection from '@/components/WeeklyTutorialsSection';
import WhatsAppVipSection from '@/components/WhatsAppVipSection';
import WhatIsIAIRONSection from '@/components/WhatIsIAIRONSection';
import TrailsSection from '@/components/TrailsSection';
import AIToolsSection from '@/components/AIToolsSection';
import LabPromptsSection from '@/components/LabPromptsSection';
import CoursesCarouselSection from '@/components/CoursesCarouselSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ImmediateAccessSection } from '@/components/ImmediateAccessSection';
import { CircularGallerySection } from '@/components/CircularGallerySection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, ArrowDown } from 'lucide-react';
import bgHero from '@/assets/bg-hero.webp';

const Index = () => {
  const scrollToPricing = () => {
    const pricingSection = document.querySelector('#pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePurchase = () => {
    window.open('https://payfast.greenn.com.br/122280/offer/yC91i5?cupom=EXTRA', '_blank');
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Hero Image */}
      <div
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-center bg-no-repeat opacity-100 z-0"
        style={{
          backgroundImage: `url(${bgHero})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'top center'
        }}
      />

      <BackgroundEffects />
      <UrgencyBar />

      <div className="main-content relative z-10">
        {/* Hero Section - Dobra 01 - Fullscreen */}
        <section className="min-h-screen flex flex-col justify-center container-padding relative overflow-hidden">
          <div className="container mx-auto text-center max-w-5xl">
            <div className="">
              {/* Logo IAIRON Academy */}
              <div className="mb-8">
                <img
                  src="/lovable-uploads/iairon-academy-logo.png"
                  alt="IAIRON Academy Logo"
                  className="mx-auto max-w-2xl w-full h-auto"
                />
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Domine a Inteligência Artificial e construa{' '}
                <span className="gradient-text-accent">negócios lucrativos.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8 max-w-4xl mx-auto leading-relaxed">
                Na IAIRON Academy, você aprende a utilizar Inteligência Artificial para criar e
                escalar negócios numa plataforma que une{' '}
                <span className="text-tech-blue font-medium">formação</span>,{' '}
                <span className="text-tech-purple font-medium">conexão</span> e{' '}
                <span className="text-tech-cyan font-medium">execução</span>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button
                  onClick={handlePurchase}
                  size="lg"
                  className="cta-button px-8 py-4 text-lg font-bold text-white border-0 transition-all duration-300"
                >
                  <Zap className="w-6 h-6 mr-3" />
                  GARANTIR MINHA VAGA AGORA
                </Button>

                <Button
                  onClick={scrollToPricing}
                  variant="outline"
                  size="lg"
                  className="glass-card px-8 py-4 text-lg font-medium border-tech-blue/30 hover:bg-tech-blue/10 transition-all duration-300"
                >
                  <ArrowDown className="w-5 h-5 mr-2" />
                  Ver Parcelamento
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Dobra 02 - O que é a IAIRON Academy + Carrossel de Cursos */}
        <WhatIsIAIRONSection />
        <ImmediateAccessSection />

        {/* Dobra 03 - Depoimentos */}
        <TestimonialsSection />

        {/* Dobra 04 - Trilhas */}
        <TrailsSection />

        {/* Dobra 05 - Ferramentas de IA */}
        <AIToolsSection />

        {/* Dobra 06 - Cursos por Trilha (3 Carrosseis) */}
        <CoursesCarouselSection />

        {/* Dobra 07 - Tutorias */}
        <WeeklyTutorialsSection />

        {/* Dobra 08 - LabPrompts */}
        <LabPromptsSection />

        {/* Dobra 09 - WhatsApp VIP */}
        <WhatsAppVipSection />

        {/* Dobra 10 - Certificado */}
        <CertificateSection />

        {/* Dobra 11 - Garantia */}
        <section className="section-spacing container-padding">
          <div className="section-divider mb-12"></div>

          <div className="container mx-auto text-center max-w-4xl">
            <Card className="glass-card p-8 md:p-12 border-tech-purple/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-tech-purple/10 via-tech-blue/5 to-transparent"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-gradient-to-r from-tech-purple to-tech-blue p-4 rounded-full">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text-accent">
                  Esquece essa de "garantia de 7 dias"...
                </h2>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p className="text-xl font-semibold text-foreground">
                    Em 7 dias, você não vai querer seu dinheiro de volta.
                    <span className="gradient-text-accent"> Vai querer investir de novo.</span>
                  </p>

                  <p>
                    <strong className="text-foreground">Por quê?</strong> Porque eu vou te entregar um plano de ação completo,
                    com passo a passo real de como vender sites com IA e recuperar seu investimento logo na primeira venda.
                  </p>

                  <div className="glass-card px-6 py-4 rounded-lg inline-block">
                    <p className="text-tech-blue font-bold text-lg">
                      Resultado rápido. Nada de enrolação.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Dobra 12 & 13 - Preço */}
        <div id="pricing-section">
          <PriceSection />
        </div>

        {/* Dobra 14 - Mentor */}
        <MentorSection />

        {/* Galeria 3D Circular */}
        <CircularGallerySection />

        {/* Footer */}
        <footer className="section-spacing container-padding relative">
          <div className="container mx-auto text-center text-muted-foreground space-y-4">
            <p className="text-lg">
              Este é um produto digital. Você receberá os acessos por e-mail em até 24 horas.
            </p>
            <p className="text-base">
              © 2024 IAIRON Academy. Todos os direitos reservados.
              Este site não é afiliado ao Google ou a qualquer ferramenta de IA mencionada. Os resultados podem variar e dependem do esforço individual.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
