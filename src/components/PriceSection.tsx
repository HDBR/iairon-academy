
import React from 'react';
import { Card } from '@/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const PriceSection = () => {
  const valueBreakdown = [
    { item: "Uma área de treinamentos que está sempre atualizada com novos cursos! Acesso 1 ano", value: "R$ 2.000", isOneMonth: false },
    { item: "Acesso a uma comunidade de clareza, informações atualizadas e networking! Acesso 1 ano", value: "R$ 1.000", isOneMonth: false },
    { item: "4 imersões ao vivo com o Pettrus no zoom aos sábados em hora pra acabar! Acesso 1 mês", value: "R$ 2.000", isOneMonth: true },
    { item: "Mais de 20 tutorias semanais ao vivo no zoom com especialistas em cada área! Acesso 1 mês", value: "R$ 4.000", isOneMonth: true },
    { item: "Grupo de whatsapp do Pettrus! Acesso 1 mês", value: "R$ 1.000", isOneMonth: true },
    { item: "Ingresso VIP para o evento presencial do Pettrus (VÍDEOS COM IA e Negócios) que vai acontecer em SP entre Agosto e Setembro!", value: "R$ 500", isOneMonth: false },
    { item: "Desconto de 50% em qualquer evento presencial organizado pelo Pettrus para membros durante 1 ano!", value: "Incalculável", isOneMonth: false },
    { item: "Os 5 primeiro terão uma consultoria individual com o Pettrus de 1 hora no zoom!", value: "R$ 3.000", isOneMonth: false },
    { item: "Acesso antecipado da HUBBIA com 1 mês grátis*! (Com uma quantidade de créditos disponível para uso)", value: "R$ 97", isOneMonth: false },
    { 
      item: "Acesso aos cursos da IAIRON ACADEMY: 🤖 Clones Sentinela • 📸 Fotos com IA • 🎨 Desenhos Animados com IA • 📱 AIGRAM • ⚡ Agentes Express", 
      value: "R$ 497", 
      isOneMonth: false 
    },
    { item: "4 formas de ganhar dinheiro com IA em 7 dias!", value: "R$ 497", isOneMonth: false },
    { item: "Sites com IA - Faça a partir de 3 salários mínimos por mês! Acesso a toda estratégia pronta para você executar!", value: "R$ 500", isOneMonth: false },
    { item: "Arsenal de PROMPTS e ASSISTENTES do Pettrus! (Gerador de prompts para VEO3, Gerador de prompts pra fotos com IA, Gerador de conteúdo para carrossel VIRAL, Gerador de prompts para artes e próximos assistentes)", value: "R$ 1.000", isOneMonth: false }
  ];

  const totalValue = 16091;

  const plans = [
    {
      id: 'basic',
      name: 'PLANO BÁSICO',
      price: 797,
      previousPrice: 1297,
      installmentValue: '82,04',
      savings: totalValue - 797,
      features: [
        'Acesso aos cursos gravados por 1 ano',
        '4 semanas de tutoria ao vivo com tutores especialistas no zoom',
        '1 mês de grupo de whatsapp do Pettrus',
        '1 imersão de sábado ao vivo o dia todo'
      ],
      purchaseUrl: 'https://payfast.greenn.com.br/122280',
      isPopular: false
    },
    {
      id: 'premium',
      name: 'PLANO PREMIUM',
      price: 997,
      previousPrice: 1497,
      installmentValue: '102,51',
      savings: totalValue - 997,
      features: [
        'Acesso aos cursos gravados por 1 ano',
        '4 semanas de tutoria ao vivo com tutores especialistas no zoom',
        '1 mês de grupo de whatsapp do Pettrus',
        '4 imersões de sábado ao vivo o dia todo 🔥'
      ],
      purchaseUrl: 'https://payfast.greenn.com.br/122280',
      isPopular: true,
      highlightFeature: '4 imersões de sábado ao vivo o dia todo'
    }
  ];

  const handlePurchase = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Sua Oportunidade Única
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja o valor real do que você está recebendo
          </p>
        </div>

        {/* Primeiro Card: Ancoragem de Valor */}
        <Card className="glass-card p-8 mb-12">
          <h3 className="text-xl font-bold mb-6 text-center gradient-text-accent">
            Se você comprasse tudo separadamente:
          </h3>
          
          <div className="space-y-4 mb-6">
            {valueBreakdown.map((item, index) => (
              <div 
                key={index} 
                className={`flex items-start justify-between gap-4 p-3 rounded-lg ${
                  item.isOneMonth 
                    ? 'bg-tech-purple/5 border border-tech-purple/20' 
                    : 'bg-muted/20'
                }`}
              >
                <div className="flex items-start gap-3 flex-1">
                  <Check className="w-5 h-5 text-tech-blue mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground leading-relaxed">{item.item}</span>
                </div>
                <span className="text-sm font-semibold text-tech-blue whitespace-nowrap">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          
          <div className="border-t border-border pt-4">
            <div className="flex justify-between items-center text-lg font-bold">
              <span className="text-foreground">VALOR TOTAL:</span>
              <span className="text-tech-red line-through">R$ {totalValue.toLocaleString()}</span>
            </div>
            <div className="text-xs text-muted-foreground mt-1 text-center">
              *Sem contar o valor incalculável dos descontos em eventos presenciais
            </div>
          </div>
        </Card>

        {/* Dois Planos Lado a Lado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`glass-card p-8 text-center relative overflow-hidden transition-all duration-300 ${
                plan.isPopular 
                  ? 'price-highlight border-2 border-tech-blue shadow-lg shadow-tech-blue/20 scale-105' 
                  : 'border border-border/50'
              }`}
            >
              {/* Badge "Mais Popular" */}
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-tech-blue to-tech-purple text-white px-6 py-1 rounded-full text-xs font-bold">
                    ⭐ MAIS POPULAR
                  </div>
                </div>
              )}

              <div className={`absolute inset-0 ${
                plan.isPopular 
                  ? 'bg-gradient-to-br from-tech-blue/10 to-tech-purple/10' 
                  : 'bg-gradient-to-br from-tech-blue/5 to-tech-purple/5'
              } -z-10`}></div>
              
              {/* Nome do Plano */}
              <h3 className={`text-xl font-bold mb-4 ${
                plan.isPopular ? 'gradient-text-accent' : 'text-foreground'
              }`}>
                {plan.name}
              </h3>

              {/* Preço anterior riscado */}
              <div className="mb-4">
                <div className="text-lg text-orange-500 line-through font-medium">
                  De R$ {plan.previousPrice.toLocaleString()},00
                </div>
              </div>
              
              {/* Preço */}
              <div className="mb-6">
                <div className={`text-3xl md:text-4xl font-black mb-2 ${
                  plan.isPopular ? 'gradient-text-accent' : 'text-tech-blue'
                }`}>
                  12x de R$ {plan.installmentValue}
                </div>
                <div className="text-xl md:text-2xl font-bold text-tech-blue mb-4">
                  à vista R$ {plan.price.toLocaleString()},00
                </div>
              </div>

              {/* Economia */}
              <div className="glass-card px-6 py-3 rounded-xl mb-6">
                <div className="text-lg font-bold text-tech-blue">
                  💸 Economia de R$ {plan.savings.toLocaleString()}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Mais de {Math.round((plan.savings / totalValue) * 100)}% de desconto!
                </div>
              </div>

              {/* Features do Plano */}
              <div className="space-y-3 mb-6 text-left">
                {plan.features.map((feature, idx) => (
                  <div 
                    key={idx}
                    className={`flex items-start gap-3 p-3 rounded-lg ${
                      plan.isPopular && feature.includes(plan.highlightFeature || '') 
                        ? 'bg-tech-blue/20 border-2 border-tech-blue/50 animate-pulse-glow' 
                        : 'bg-muted/20'
                    }`}
                  >
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      plan.isPopular && feature.includes(plan.highlightFeature || '') 
                        ? 'text-tech-blue' 
                        : 'text-tech-blue'
                    }`} />
                    <span className={`text-sm leading-relaxed ${
                      plan.isPopular && feature.includes(plan.highlightFeature || '') 
                        ? 'font-bold text-foreground' 
                        : 'text-foreground'
                    }`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Informações adicionais */}
              <div className="space-y-2 text-xs text-muted-foreground mb-6">
                <div className="flex items-center justify-center gap-2">
                  <ArrowRight className="w-3 h-3 text-tech-blue" />
                  <span>Acesso imediato após o pagamento</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <ArrowRight className="w-3 h-3 text-tech-blue" />
                  <span>Garantia de 7 dias</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <ArrowRight className="w-3 h-3 text-tech-blue" />
                  <span>Pagamento 100% seguro</span>
                </div>
              </div>

              {/* Botão de compra */}
              <button
                onClick={() => handlePurchase(plan.purchaseUrl)}
                className={`w-full px-6 py-4 text-base font-bold text-white border-0 transition-all duration-300 rounded-lg ${
                  plan.isPopular 
                    ? 'cta-button' 
                    : 'bg-tech-blue hover:bg-tech-blue/90'
                }`}
              >
                GARANTIR MINHA VAGA AGORA
              </button>

              {/* Aviso de tempo limitado */}
              {plan.isPopular && (
                <div className="mt-6 p-3 bg-tech-red/10 border border-tech-red/20 rounded-lg">
                  <div className="text-xs font-semibold text-tech-red mb-1">
                    ⚠️ OFERTA POR TEMPO LIMITADO
                  </div>
                  <div className="text-[10px] text-muted-foreground">
                    Após o fim da contagem, o valor retorna para <span className="font-bold text-tech-red">R$ {plan.previousPrice.toLocaleString()},00</span>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Contador centralizado */}
        <div className="mb-8">
          <CountdownTimer />
        </div>

        <div className="text-center">
          <p className="text-xl font-bold text-tech-red mb-4">
            Todos os bônus estão disponíveis em ambos os planos!!
          </p>
          <p className="text-sm text-muted-foreground">
            Escolha o plano que melhor se encaixa com suas necessidades
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
