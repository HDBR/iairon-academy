
import React from 'react';
import { Card } from '@/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import PurchaseButton from './PurchaseButton';

const PriceSection = () => {
  const valueBreakdown = [
    { item: "LABVIDIA (4 Imersões + Área de Membros + Grupo VIP)", value: "R$ 997" },
    { item: "IAIRON ACADEMY (Acesso completo por 1 ano)", value: "R$ 497" },
    { item: "HUBBIA (1 mês grátis + acesso antecipado)", value: "R$ 97" },
    { item: "Prompts e Assistentes Exclusivos", value: "R$ 297" },
    { item: "Processo de Estruturação de Clones", value: "R$ 497" },
    { item: "Imersão \"Lançamento 100% IA\"", value: "R$ 297" },
    { item: "50% Desconto em Imersões Presenciais", value: "R$ 500" },
    { item: "50% Desconto em Lançamentos 2025", value: "R$ 200" }
  ];

  const totalValue = 3382;
  const currentPrice = 497;
  const savings = totalValue - currentPrice;
  const installmentValue = (currentPrice / 12).toFixed(2);

  const handlePurchase = () => {
    window.open('https://payfast.greenn.com.br/122280', '_blank');
  };

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Sua Oportunidade Única
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja o valor real do que você está recebendo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Value Breakdown */}
          <Card className="glass-card p-8">
            <h3 className="text-xl font-bold mb-6 text-center gradient-text-accent">
              Se você comprasse tudo separadamente:
            </h3>
            
            <div className="space-y-4 mb-6">
              {valueBreakdown.map((item, index) => (
                <div key={index} className="flex items-start justify-between gap-4 p-3 rounded-lg bg-muted/20">
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
            </div>
          </Card>

          {/* Current Offer */}
          <Card className="glass-card price-highlight p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/5 to-tech-purple/5 -z-10"></div>
            
            <h3 className="text-xl font-bold mb-6 gradient-text-accent">
              Seu investimento hoje:
            </h3>
            
            <div className="mb-6">
              {/* Destaque do Parcelado */}
              <div className="text-3xl md:text-4xl font-black gradient-text-accent mb-2">
                12x de R$ {installmentValue}
              </div>
              <div className="text-lg text-muted-foreground mb-4">
                à vista R$ {currentPrice}
              </div>
            </div>

            <div className="glass-card px-6 py-4 rounded-xl mb-6">
              <div className="text-xl font-bold text-tech-blue">
                💸 Economia de R$ {savings.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Mais de 85% de desconto!
              </div>
            </div>

            <div className="space-y-3 text-sm text-muted-foreground mb-6">
              <div className="flex items-center justify-center gap-2">
                <ArrowRight className="w-4 h-4 text-tech-blue" />
                <span>Acesso imediato após o pagamento</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <ArrowRight className="w-4 h-4 text-tech-blue" />
                <span>Garantia de 7 dias</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <ArrowRight className="w-4 h-4 text-tech-blue" />
                <span>Pagamento 100% seguro</span>
              </div>
            </div>

            {/* Botão no card */}
            <button
              onClick={handlePurchase}
              className="cta-button w-full px-8 py-4 text-lg font-bold text-white border-0 transition-all duration-300 rounded-lg"
            >
              GARANTIR MINHA VAGA AGORA
            </button>
          </Card>
        </div>

        <CountdownTimer />
        
        <div className="text-center mb-8">
          <p className="text-xl font-bold text-tech-red">
            Depois da meia-noite, volta para R$ 997!
          </p>
        </div>

        <PurchaseButton />
      </div>
    </section>
  );
};

export default PriceSection;
