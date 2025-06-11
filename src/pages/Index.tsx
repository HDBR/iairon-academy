
import React from 'react';
import UrgencyBar from '@/components/UrgencyBar';
import CountdownTimer from '@/components/CountdownTimer';
import PurchaseButton from '@/components/PurchaseButton';
import FeatureCard from '@/components/FeatureCard';
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
    <div className="min-h-screen bg-background">
      <UrgencyBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-tech-blue/10 rounded-full blur-3xl floating-element"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-tech-purple/10 rounded-full blur-3xl floating-element-delayed"></div>
        </div>
        
        <div className="container mx-auto text-center max-w-6xl">
          <div className="mb-16">
            <div className="inline-block glass-card px-6 py-3 rounded-full mb-8 animate-shimmer">
              <span className="text-tech-blue font-medium">🚀 Primeira turma exclusiva</span>
            </div>
            
            <h1 className="font-inter text-6xl md:text-8xl font-black gradient-text mb-8 leading-tight">
              LABVIDIA
            </h1>
            
            <p className="text-2xl md:text-3xl text-muted-foreground font-light mb-8 max-w-4xl mx-auto">
              Laboratório de Vídeos com IA
            </p>
            
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-relaxed mb-12">
                A formação mais completa do Brasil para dominar o 
                <span className="gradient-text-accent"> VEO 3 </span>
                e faturar alto com vídeos criados por IA
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

      {/* Tsunami Effect */}
      <section className="py-20 px-4 relative">
        <div className="section-divider mb-16"></div>
        
        <div className="container mx-auto max-w-5xl">
          <Card className="glass-card p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-tech-red/10 to-tech-yellow/10 -z-10"></div>
            
            <div className="mb-12">
              <div className="inline-flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-tech-yellow" />
                <h2 className="font-inter text-3xl md:text-4xl font-black gradient-text-accent">
                  EFEITO TSUNAMI ATIVADO
                </h2>
                <Zap className="w-8 h-8 text-tech-yellow" />
              </div>
              <p className="text-xl font-semibold mb-12 text-foreground">
                Os 5 PRIMEIROS que fecharem AGORA ganham:
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl border-tech-yellow/30 mb-8">
              <h3 className="text-2xl font-black gradient-text-accent mb-4">
                PRODUÇÃO PROFISSIONAL DE ATÉ 3 MINUTOS
              </h3>
              <p className="text-lg mb-3 text-foreground">Feita pessoalmente pelo PETTRUS VAZ</p>
              <p className="text-tech-blue font-bold text-xl mb-6">Valor: R$ 3.000 - GRÁTIS para os 5 primeiros!</p>
              <div className="urgency-bar text-white font-bold py-3 px-6 rounded-full inline-block animate-pulse">
                ⚠️ Restam apenas 5 vagas com este bônus!
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Price Section */}
      <section className="py-24 px-4 relative">
        <div className="section-divider mb-16"></div>
        
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black mb-16 gradient-text">
            Sua Oportunidade Única
          </h2>
          
          <Card className="glass-card price-highlight p-16 text-center mb-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/5 to-tech-purple/5 -z-10"></div>
            
            <div className="mb-8">
              <span className="text-2xl line-through text-muted-foreground">De R$ 997</span>
              <span className="text-xl mx-6 text-muted-foreground">por apenas:</span>
            </div>
            
            <div className="text-7xl md:text-8xl font-black gradient-text-accent mb-8 glow-text">
              R$ 497
            </div>
            
            <div className="text-2xl mb-8 text-muted-foreground">ou 12x de R$ 49,70</div>
            
            <div className="glass-card px-8 py-4 rounded-full inline-block">
              <div className="text-2xl font-bold text-tech-blue">
                💸 Economia de R$ 2.885
              </div>
            </div>
          </Card>
          
          <CountdownTimer />
          
          <div className="text-xl font-bold text-tech-red mb-8">
            Depois da meia-noite, volta para R$ 997!
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 relative">
        <div className="section-divider mb-16"></div>
        
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-20 gradient-text">
            O que você vai receber no LABVIDIA
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Bonuses Section */}
      <section className="py-24 px-4 relative">
        <div className="section-divider mb-16"></div>
        
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-20 gradient-text">
            Seus Bônus Exclusivos
          </h2>
          
          <div className="space-y-8">
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

      {/* Guarantee Section */}
      <section className="py-24 px-4 relative">
        <div className="section-divider mb-16"></div>
        
        <div className="container mx-auto text-center max-w-4xl">
          <Card className="glass-card p-12 border-tech-blue/30">
            <Shield className="w-16 h-16 text-tech-blue mx-auto mb-8" />
            <h2 className="text-3xl font-black mb-8 gradient-text-accent">
              Garantia Blindada de 7 Dias
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro em até 7 dias. 
              Sem perguntas, sem burocracia!
            </p>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 relative">
        <div className="section-divider mb-16"></div>
        
        <div className="container mx-auto text-center max-w-5xl">
          <PurchaseButton />
          
          <div className="mt-16 space-y-8">
            <p className="text-2xl font-bold text-foreground">
              Esta é sua chance de estar entre os primeiros especialistas em VEO 3 do Brasil!
            </p>
            <p className="text-xl text-muted-foreground">
              Enquanto outros ainda estão aprendendo, você já estará faturando!
            </p>
            <p className="text-2xl font-bold gradient-text">
              O futuro dos vídeos é agora. A decisão é sua.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-border/50 relative">
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
  );
};

export default Index;
