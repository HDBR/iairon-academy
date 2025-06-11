
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
import { Shield, Star, Zap, TrendingUp, Users, Play } from 'lucide-react';

const Index = () => {
  const features = [
    {
      title: "4 Imersões Ao Vivo no Zoom",
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
      title: "BÔNUS #2: Desconto Vitalício",
      description: "50% de desconto em TUDO que eu lançar em 2025 sobre IA!",
      value: "Valor: R$ 200+ | Seu preço: GRÁTIS"
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
    }
  ];

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
                <span className="text-tech-blue font-medium">🚀 Primeira turma exclusiva</span>
              </div>
              
              <div className="mb-6">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
                  <span className="gradient-text">LABVIDIA</span>
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-light mb-6 max-w-3xl mx-auto">
                Laboratório de Vídeos com IA
              </p>
              
              <div className="max-w-4xl mx-auto mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
                  A formação mais completa do Brasil para dominar o 
                  <span className="gradient-text-accent"> VEO 3 </span>
                  e outras IAs de vídeo e ainda faturar alto com vídeos criados por IA
                </h2>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
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
        <PriceSection />

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
              Dúvidas? WhatsApp: [SEU NÚMERO]
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
