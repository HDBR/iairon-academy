import React from 'react';
import UrgencyBar from '@/components/UrgencyBar';
import VideoSection from '@/components/VideoSection';
import MentorSection from '@/components/MentorSection';
import FeatureCard from '@/components/FeatureCard';
import TsunamiSection from '@/components/TsunamiSection';
import PriceSection from '@/components/PriceSection';
import CertificateSection from '@/components/CertificateSection';
import OpportunitiesSection from '@/components/OpportunitiesSection';
import BackgroundEffects from '@/components/BackgroundEffects';
import WeeklyTutorialsSection from '@/components/WeeklyTutorialsSection';
import WhatsAppVipSection from '@/components/WhatsAppVipSection';
import { ImmediateAccessSection } from '@/components/ImmediateAccessSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Star, Zap, TrendingUp, Users, Play, ArrowDown } from 'lucide-react';
import bgHero from '@/assets/bg-hero.webp';
import superpackParallax from '@/assets/superpack-parallax.webp';
import carouselGroup1 from '@/assets/carousel-group-1.webp';
import GoldenTicketBonus from '@/components/GoldenTicketBonus';

const Index = () => {
  const features = [
    {
      title: "4 Imersões de sábado com o Pettrus o dia todo!",
      description: "Mentorias de longa duração onde desenvolveremos suas habilidades com VEO 3 e outras ferramentas de IA. Todas as imersões ficarão gravadas para você revisar quando quiser"
    },
    {
      title: "Comunidade Fechada no Circle",
      description: "Acesso exclusivo à nossa comunidade privada no Circle, onde você terá networking direto com outros membros e suporte contínuo"
    },
    {
      title: "Área de Membros por 1 Ano",
      description: "Todo material gravado, templates exclusivos e atualizações constantes"
    }
  ];

  const bonuses = [
    {
      title: "BÔNUS #1: 4 Formas de Ganhar Dinheiro com IA",
      description: "4 formas de ganhar dinheiro com IA em 7 dias!",
      value: "Valor: R$ 497 | Seu preço: GRÁTIS",
      image: "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/banner%20curso.webp"
    },
    {
      title: "BÔNUS #2: Sites com IA - Estratégia Completa",
      description: "Sites com IA - Faça a partir de 3 salários mínimos por mês! Acesso a toda estratégia pronta para você executar!",
      value: "Valor: R$ 500 | Seu preço: GRÁTIS",
      image: "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/Sites%20com%20IA.webp"
    }
  ];

  const scrollToPricing = () => {
    const pricingSection = document.querySelector('#pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePurchase = () => {
    window.open('https://payfast.greenn.com.br/122280/offer/3lXE3l?b_id_1=130096&b_offer_1=mXYbYh', '_blank');
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
        {/* Hero Section with Video */}
        <section className="pt-16 pb-8 container-padding relative overflow-hidden">
          <div className="container mx-auto text-center max-w-5xl">
            <div className="mb-12">
              <div className="inline-block glass-card px-6 py-3 rounded-full mb-8 animate-shimmer">
                <span className="text-tech-blue font-medium">🚀 TURMA EXCLUSIVA</span>
              </div>
              
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/6a7a0740-082a-461e-a486-8ef7542d838e.png" 
                  alt="LABVIDIA Logo" 
                  className="mx-auto max-w-7xl w-full h-auto"
                />
              </div>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-light mb-4 max-w-3xl mx-auto">
                Laboratório de Vídeos com IA
              </p>
              
              <div className="max-w-4xl mx-auto mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
                  A formação mais completa do Brasil para dominar o 
                  <span className="gradient-text-accent"> VEO 3 </span>
                  e outras IAs de vídeo e ainda faturar alto com vídeos criados por IA
                </h2>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-tech-blue" />
                  <span>Turma limitada</span>
                </div>
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4 text-tech-purple" />
                  <span>Aulas ao vivo</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-tech-blue" />
                  <span>Projetos reais</span>
                </div>
              </div>

              {/* Botões de CTA na Hero */}
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

        {/* 1. Immediate Access Section */}
        <ImmediateAccessSection />

        {/* 2. Video Section */}
        <VideoSection />

        {/* 3. Testimonials Section */}
        <TestimonialsSection />

        {/* 4. Features Section */}
        <section className="section-spacing container-padding">
          <div className="section-divider mb-12"></div>
          
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
              O que você vai receber no LABVIDIA
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 5. Weekly Tutorials Section */}
        <WeeklyTutorialsSection />

        {/* 6. WhatsApp VIP Section */}
        <WhatsAppVipSection />

        {/* 7. Bonuses Section */}
        <section className="section-spacing container-padding">
          <div className="section-divider mb-12"></div>
          
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
              Seus Bônus Exclusivos
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8 justify-items-center">
              {bonuses.map((bonus, index) => (
                <FeatureCard
                  key={index}
                  title={bonus.title}
                  description={bonus.description}
                  value={bonus.value}
                  isBonus={true}
                  image={bonus.image}
                />
              ))}
            </div>
            
            {/* Golden Ticket Bonus - Destaque Especial */}
            <GoldenTicketBonus />
          </div>
        </section>

        {/* 6. Certificate Section */}
        <CertificateSection />

        {/* 7. Opportunities Section */}
        <OpportunitiesSection />

        {/* 8. Results Guarantee Section */}
        <section className="section-spacing container-padding">
          <div className="section-divider mb-12"></div>
          
          <div className="container mx-auto text-center max-w-4xl">
            <Card className="glass-card p-8 md:p-12 border-tech-purple/30 relative overflow-hidden">
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-tech-purple/10 via-tech-blue/5 to-transparent"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-gradient-to-r from-tech-purple to-tech-blue p-4 rounded-full">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text-accent">
                  💥 Esquece essa de "garantia de 7 dias"...
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
                      👉 Resultado rápido. Nada de enrolação.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* 9. Tsunami Section */}
        <TsunamiSection />

        {/* Parallax Image Section */}
        <section 
          className="h-[60vh] relative overflow-hidden"
          style={{
            backgroundImage: `url(${superpackParallax})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </section>

        {/* 10. Price Section */}
        <div id="pricing-section">
          <PriceSection />
        </div>

        {/* 11. Mentor Section */}
        <MentorSection />

        {/* Footer */}
        <footer className="section-spacing container-padding border-t border-border/50 relative">
          <div className="section-divider mb-8"></div>
          
          <div className="container mx-auto text-center text-muted-foreground space-y-4">
            <p className="text-lg">
              Este é um produto digital. Você receberá os acessos por e-mail em até 24 horas.
            </p>
            <p className="text-base">
              © 2024 Do Prompt ao Pix. Todos os direitos reservados.
              Este site não é afiliado ao Google ou à ferramenta VEO 3. Os resultados podem variar e dependem do esforço individual.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
