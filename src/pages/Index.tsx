
import React from 'react';
import UrgencyBar from '@/components/UrgencyBar';
import CountdownTimer from '@/components/CountdownTimer';
import PurchaseButton from '@/components/PurchaseButton';
import FeatureCard from '@/components/FeatureCard';
import { Card } from '@/components/ui/card';
import { Shield, Clock, Star, Zap, Trophy, Gift } from 'lucide-react';

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
      title: "IAIRON ACADEMY",
      description: "Acesso completo a TODOS os meus treinamentos: clones, assistentes GPT, agentes para responder DM com IA, vídeos animados estilo desenho e muito mais!",
      value: "Valor: R$ 497/ano | Seu preço: GRÁTIS"
    },
    {
      title: "Desconto Vitalício",
      description: "50% de desconto em TUDO que eu lançar em 2025 sobre IA!",
      value: "Valor: R$ 200+ | Seu preço: GRÁTIS"
    },
    {
      title: "Arsenal de Prompts e Assistentes",
      description: "Acesso aos meus prompts secretos e assistentes geradores para fotos, vídeos VEO3 e muito mais. Material que NUNCA foi vendido!",
      value: "Valor: R$ 297 | Seu preço: GRÁTIS"
    },
    {
      title: "Imersões Presenciais VIP",
      description: "50% de desconto nas minhas imersões presenciais em Alphaville, Minas, Recife e Rio!",
      value: "Valor: R$ 500 | Seu preço: GRÁTIS"
    },
    {
      title: "HUBBIA - Acesso Antecipado",
      description: "Seja um dos primeiros a acessar a HUBBIA, nossa central de IAs que substitui várias ferramentas! Ganhe 1 mês completamente GRÁTIS!",
      value: "Valor: R$ 97/mês | Seu preço: GRÁTIS no 1º mês"
    },
    {
      title: "Processo de Clones Profissionais",
      description: "Acesso ao meu processo completo de estruturação de clones para conteúdos e anúncios. O mesmo que vendo por R$ 8.000!",
      value: "Valor: R$ 497 | Seu preço: GRÁTIS"
    },
    {
      title: "Imersão \"Lançamento 100% IA\"",
      description: "Descubra como eu fiz ESTE lançamento inteiro com apenas 1 pessoa e 100% IA! Copy, criativos, página, automação, conteúdos!",
      value: "Valor: R$ 297 | Seu preço: GRÁTIS"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <UrgencyBar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-floating mb-8">
            <h1 className="font-orbitron text-6xl md:text-8xl font-black cyber-text-glow mb-4">
              LABVIDIA
            </h1>
            <p className="text-xl md:text-2xl text-cyber-blue font-rajdhani font-medium">
              Laboratório de Vídeos com IA
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-foreground">
              A formação mais completa do Brasil para dominar o VEO 3 e faturar alto com vídeos criados por IA
            </h2>
          </div>
        </div>
      </section>

      {/* Tsunami Effect */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Card className="cyber-border p-8 text-center animate-cyber-glow">
            <div className="mb-6">
              <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-cyber-green cyber-text-glow mb-4">
                🚨 EFEITO TSUNAMI ATIVADO 🚨
              </h2>
              <p className="text-xl font-bold mb-6">Os 5 PRIMEIROS que fecharem AGORA ganham:</p>
            </div>
            
            <div className="bg-gradient-to-r from-cyber-green/20 to-cyber-blue/20 p-6 rounded-lg border border-cyber-green">
              <h3 className="text-2xl font-orbitron font-bold text-cyber-green mb-2">
                PRODUÇÃO PROFISSIONAL DE ATÉ 3 MINUTOS
              </h3>
              <p className="text-lg mb-2">Feita pessoalmente pelo PETTRUS VAZ</p>
              <p className="text-cyber-green font-bold text-xl mb-4">Valor: R$ 3.000 - GRÁTIS para os 5 primeiros!</p>
              <div className="text-red-400 font-bold text-lg animate-cyber-pulse">
                ⚠️ Restam apenas 5 vagas com este bônus! ⚠️
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Value Anchor */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-12 cyber-text-glow">
            📊 ANCORAGEM DE VALOR
          </h2>
          
          <Card className="cyber-border p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Se você fosse comprar tudo separadamente, pagaria:
            </h3>
            
            <div className="space-y-4 mb-8">
              {[
                { item: "LABVIDIA (4 Imersões + Área de Membros + Grupo VIP)", price: "R$ 997" },
                { item: "IAIRON ACADEMY (Acesso completo por 1 ano)", price: "R$ 497" },
                { item: "HUBBIA (1 mês grátis + acesso antecipado)", price: "R$ 97" },
                { item: "Prompts e Assistentes Exclusivos (nunca vendidos)", price: "R$ 297" },
                { item: "Processo de Estruturação de Clones", price: "R$ 497" },
                { item: "Imersão \"Como Fiz Este Lançamento 100% com IA\"", price: "R$ 297" },
                { item: "50% Desconto em Imersões Presenciais", price: "R$ 500" },
                { item: "50% Desconto em Lançamentos 2025", price: "R$ 200" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 border-b border-border">
                  <span className="text-foreground">{item.item}</span>
                  <span className="font-bold text-cyber-blue">{item.price}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center border-t border-cyber-blue pt-6">
              <div className="text-3xl font-orbitron font-bold cyber-text-glow">
                VALOR TOTAL: <span className="line-through text-muted-foreground">R$ 3.382</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Price Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-8 cyber-text-glow">
            💥 SUA OPORTUNIDADE ÚNICA
          </h2>
          
          <Card className="price-highlight p-12 max-w-2xl mx-auto animate-cyber-glow">
            <div className="mb-6">
              <span className="text-xl line-through text-muted-foreground">De R$ 997</span>
              <span className="text-lg mx-4">por apenas:</span>
            </div>
            
            <div className="text-6xl md:text-8xl font-orbitron font-black text-cyber-green cyber-text-glow mb-4">
              R$ 497
            </div>
            
            <div className="text-xl mb-6">ou 12x de R$ 49,70</div>
            
            <div className="text-2xl font-bold text-cyber-green animate-cyber-pulse">
              💸 ECONOMIA DE R$ 2.885! 💸
            </div>
          </Card>
          
          <CountdownTimer />
          
          <div className="text-xl font-bold text-red-400 animate-cyber-pulse">
            Depois da meia-noite, volta para R$ 997!
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-12 cyber-text-glow">
            📋 O QUE VOCÊ VAI RECEBER NO LABVIDIA:
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
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-12 cyber-text-glow">
            🎁 SEUS BÔNUS EXCLUSIVOS:
          </h2>
          
          <div className="space-y-6">
            {bonuses.map((bonus, index) => (
              <FeatureCard
                key={index}
                title={`🎓 BÔNUS #${index + 1}: ${bonus.title}`}
                description={bonus.description}
                value={bonus.value}
                isBonus={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto text-center">
          <Card className="cyber-border p-8 max-w-3xl mx-auto">
            <Shield className="w-16 h-16 text-cyber-green mx-auto mb-6" />
            <h2 className="text-3xl font-orbitron font-bold mb-6 text-cyber-green cyber-text-glow">
              🛡️ GARANTIA BLINDADA DE 7 DIAS
            </h2>
            <p className="text-xl text-foreground/80">
              Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro em até 7 dias. 
              Sem perguntas, sem burocracia!
            </p>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <PurchaseButton />
          
          <div className="mt-12 space-y-4">
            <p className="text-xl font-bold">
              Esta é sua chance de estar entre os primeiros especialistas em VEO 3 do Brasil!
            </p>
            <p className="text-lg text-cyber-blue">
              Enquanto outros ainda estão aprendendo, você já estará faturando!
            </p>
            <p className="text-xl font-orbitron font-bold cyber-text-glow">
              O futuro dos vídeos é agora. A decisão é sua.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p className="mb-2">
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
