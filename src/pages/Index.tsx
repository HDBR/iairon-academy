
import React from 'react';
import UrgencyBar from '@/components/UrgencyBar';
import CountdownTimer from '@/components/CountdownTimer';
import PurchaseButton from '@/components/PurchaseButton';
import FeatureCard from '@/components/FeatureCard';
import { Card } from '@/components/ui/card';
import { Shield, Star } from 'lucide-react';

const Index = () => {
  const features = [
    {
      title: "4 Imersões Ao Vivo no Zoom",
      description: "Mentorias de longa duração onde desenvolveremos suas habilidades"
    },
    {
      title: "2 Projetos Reais Desenvolvidos",
      description: "Criaremos vídeos dos próprios membros (pode ser o seu projeto!)"
    },
    {
      title: "Área de Membros por 1 Ano",
      description: "Todo material gravado + materiais de apoio"
    },
    {
      title: "Grupo VIP no WhatsApp",
      description: "Acompanhamento direto comigo"
    },
    {
      title: "Materiais de Apoio Exclusivos",
      description: "Templates, prompts, checklists"
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
      <section className="pt-16 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="animate-fade-in mb-12">
            <h1 className="font-inter text-5xl md:text-7xl font-bold gradient-text mb-6">
              LABVIDIA
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8">
              Laboratório de Vídeos com IA
            </p>
            <h2 className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed">
              A formação mais completa do Brasil para dominar o VEO 3 e faturar alto com vídeos criados por IA
            </h2>
          </div>
        </div>
      </section>

      {/* Tsunami Effect */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="tech-border p-8 text-center">
            <div className="mb-8">
              <h2 className="font-inter text-2xl md:text-3xl font-bold text-tech-green mb-4">
                EFEITO TSUNAMI ATIVADO
              </h2>
              <p className="text-lg font-medium mb-6">Os 5 PRIMEIROS que fecharem AGORA ganham:</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-tech-green/30">
              <h3 className="text-xl font-bold text-tech-green mb-2">
                PRODUÇÃO PROFISSIONAL DE ATÉ 3 MINUTOS
              </h3>
              <p className="text-base mb-2">Feita pessoalmente pelo PETTRUS VAZ</p>
              <p className="text-tech-green font-semibold text-lg mb-4">Valor: R$ 3.000 - GRÁTIS para os 5 primeiros!</p>
              <div className="text-red-400 font-medium">
                ⚠️ Restam apenas 5 vagas com este bônus!
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Price Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text">
            Sua Oportunidade Única
          </h2>
          
          <Card className="price-card p-12 text-center">
            <div className="mb-6">
              <span className="text-lg line-through text-muted-foreground">De R$ 997</span>
              <span className="text-base mx-4 text-muted-foreground">por apenas:</span>
            </div>
            
            <div className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              R$ 497
            </div>
            
            <div className="text-lg mb-6 text-muted-foreground">ou 12x de R$ 49,70</div>
            
            <div className="text-xl font-semibold text-tech-green">
              Economia de R$ 2.885
            </div>
          </Card>
          
          <CountdownTimer />
          
          <div className="text-lg font-medium text-red-400">
            Depois da meia-noite, volta para R$ 997!
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">
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

      {/* Bonuses Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">
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

      {/* Guarantee Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto text-center max-w-3xl">
          <Card className="tech-border p-8">
            <Shield className="w-12 h-12 text-tech-green mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-6 text-tech-green">
              Garantia Blindada de 7 Dias
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro em até 7 dias. 
              Sem perguntas, sem burocracia!
            </p>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <PurchaseButton />
          
          <div className="mt-12 space-y-6">
            <p className="text-xl font-medium">
              Esta é sua chance de estar entre os primeiros especialistas em VEO 3 do Brasil!
            </p>
            <p className="text-lg text-muted-foreground">
              Enquanto outros ainda estão aprendendo, você já estará faturando!
            </p>
            <p className="text-xl font-semibold gradient-text">
              O futuro dos vídeos é agora. A decisão é sua.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground space-y-2">
          <p>
            Este é um produto digital. Você receberá os acessos por e-mail em até 24 horas.
          </p>
          <p>
            Dúvidas? WhatsApp: [SEU NÚMERO]
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
