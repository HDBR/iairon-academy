
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
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Star, Zap, TrendingUp, Users, Play, ArrowDown } from 'lucide-react';

const Index = () => {
  const features = [
    {
      title: "Hotseats semanais ao vivo no Zoom",
      description: "Mentorias de longa duração onde desenvolveremos suas habilidades com VEO 3 e outras ferramentas de IA"
    },
    {
      title: "2 Projetos Reais Desenvolvidos",
      description: "Criaremos vídeos dos próprios membros aplicando técnicas profissionais"
    },
    {
      title: "Área de Membros por 1 Ano",
      description: "Todo material gravado, templates exclusivos e atualizações constantes"
    },
    {
      title: "Grupo VIP no WhatsApp",
      description: "Acompanhamento direto e networking com outros profissionais"
    },
    {
      title: "Materiais de Apoio Exclusivos",
      description: "Templates, prompts otimizados e checklists para acelerar sua produção"
    }
  ];

  const bonuses = [
    {
      title: "BÔNUS #1: IAIRON ACADEMY",
      description: "Acesso completo a TODOS os meus treinamentos: clones, assistentes GPT, agentes para responder DM com IA, vídeos animados estilo desenho e muito mais!",
      value: "Valor: R$ 497/ano | Seu preço: GRÁTIS"
    },
    {
      title: "BÔNUS #3: Arsenal de Prompts e Assistentes",
      description: "Acesso aos meus prompts secretos e assistentes geradores para fotos, vídeos VEO3 e muito mais. Material que NUNCA foi vendido!",
      value: "Valor: R$ 297 | Seu preço: GRÁTIS"
    },
    {
      title: "BÔNUS #4: Imersões Presenciais VIP",
      description: "50% de desconto nas minhas imersões presenciais em Alphaville, Minas, Recife e Rio!",
      value: "Valor: R$ 500 | Seu preço: GRÁTIS"
    },
    {
      title: "BÔNUS #5: HUBBIA - Acesso Antecipado",
      description: "Seja um dos primeiros a acessar a HUBBIA, nossa central de IAs que substitui várias ferramentas! Ganhe 1 mês completamente GRÁTIS!",
      value: "Valor: R$ 97/mês | Seu preço: GRÁTIS no 1º mês"
    },
    {
      title: "BÔNUS #6: Processo de Clones Profissionais",
      description: "Acesso ao meu processo completo de estruturação de clones para conteúdos e anúncios. O mesmo que vendo por R$ 8.000!",
      value: "Valor: R$ 497 | Seu preço: GRÁTIS"
    },
    {
      title: "BÔNUS #7: Imersão \"Lançamento 100% IA\"",
      description: "Descubra como eu fiz ESTE lançamento inteiro com apenas 1 pessoa e 100% IA! Copy, criativos, página, automação, conteúdos!",
      value: "Valor: R$ 297 | Seu preço: GRÁTIS"
    },
    {
      title: "BÔNUS #8: Sorteio entre os membros",
      description: "Desenvolvimento de Funil de aquisição 100% com IA, onde vou ensinar como montar uma estrutura de funil para aquisição de cliente ou venda de infoproduto 100% com IA",
      value: "Valor: Inestimável | Seu preço: GRÁTIS"
    },
    {
      title: "BÔNUS #2: Desconto em próximos produtos",
      description: "Desconto nos próximos produtos que lançarei em 2025",
      value: "Valor: R$ 200+ | Seu preço: GRÁTIS"
    }
  ];

  const scrollToPricing = () => {
    const pricingSection = document.querySelector('#pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePurchase = () => {
    window.open('https://payfast.greenn.com.br/122280/offer/FlcBck', '_blank');
  };

  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundEffects />
      <UrgencyBar />
      
      <div className="main-content">
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

        {/* 1. Video Section */}
        <VideoSection />

        {/* 2. Features Section */}
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

        {/* 3. Bonuses Section */}
        <section className="section-spacing container-padding">
          <div className="section-divider mb-12"></div>
          
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
              Seus Bônus Exclusivos
            </h2>
            
            <div className="space-y-6">
              {bonuses.map((bonus, index) => (
                <FeatureCard
                  key={index}
                  title={bonus.title}
                  description={bonus.description}
                  value={bonus.value}
                  isBonus={true}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 4. Certificate Section */}
        <CertificateSection />

        {/* 5. Opportunities Section */}
        <OpportunitiesSection />

        {/* 6. Guarantee Section */}
        <section className="section-spacing container-padding">
          <div className="section-divider mb-12"></div>
          
          <div className="container mx-auto text-center max-w-4xl">
            <Card className="glass-card p-8 md:p-12 border-tech-blue/30">
              <Shield className="w-16 h-16 text-tech-blue mx-auto mb-8" />
              <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text-accent">
                Garantia Blindada de 7 Dias
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro em até 7 dias. 
                Sem perguntas, sem burocracia!
              </p>
            </Card>
          </div>
        </section>

        {/* 7. Tsunami Section */}
        <TsunamiSection />

        {/* 8. Price Section */}
        <div id="pricing-section">
          <PriceSection />
        </div>

        {/* 9. Mentor Section */}
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
