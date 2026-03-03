import React from 'react';
import { Card } from '@/components/ui/card';
import { Check, ArrowRight, Zap } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const PriceSection = () => {
  const valueBreakdown = [
    { item: "Uma área de treinamentos que está sempre atualizada com novos cursos, com 12 meses de acesso!", value: "R$ 1.497" },
    { item: "Acesso por 1 mês uma comunidade de clareza, informações atualizadas e networking!", value: "R$ 1.000" },
    { item: "2 imersões ao vivo com o Pettrus no zoom aos sábados sem hora pra acabar!", value: "R$ 497" },
    { item: "8 tutorias, ao vivo no zoom com especialistas em cada área! Acesso 1 mês", value: "R$ 1.600" },
    { item: "Acesso ao LabPrompts", value: "R$ 383" },
  ];

  const totalValue = 4977;
  const originalPrice = 1297;
  const offerPrice = 997;
  const extraDiscount = originalPrice - offerPrice;
  const installmentValue = "102,51";
  const savings = totalValue - offerPrice;
  const discountPercent = Math.round((savings / totalValue) * 100);

  const planFeatures = [
    'Acesso aos cursos gravados por 1 ano',
    '4 semanas de tutoria ao vivo com tutores especialistas no zoom',
    '1 mês de grupo de Networking no Whatsapp',
    '2 imersões de sábado ao vivo o dia todo'
  ];

  const handlePurchase = () => {
    window.open('https://payfast.greenn.com.br/122280/offer/yC91i5', '_blank');
  };

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Veja tudo a que você terá acesso:
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja o valor real do que você está recebendo
          </p>
        </div>

        {/* Value Breakdown Card */}
        <Card className="glass-card p-8 mb-12">
          <h3 className="text-xl font-bold mb-6 text-center gradient-text-accent">
            Se você comprasse tudo separadamente:
          </h3>

          <div className="space-y-4 mb-6">
            {valueBreakdown.map((item, index) => (
              <div
                key={index}
                className="flex items-start justify-between gap-4 p-3 rounded-lg bg-muted/20"
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
              <span className="text-tech-red">R$ {totalValue.toLocaleString()}</span>
            </div>
          </div>
        </Card>

        {/* Single Plan Card */}
        <Card className="glass-card p-8 md:p-10 text-center relative overflow-hidden border-2 border-tech-blue shadow-lg shadow-tech-blue/20 mb-12">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/10 to-tech-purple/10 -z-10"></div>

          {/* Plan Name */}
          <h3 className="text-2xl font-bold mb-6 gradient-text-accent">
            PLANO PREMIUM
          </h3>

          {/* Previous Price */}
          <div className="mb-4">
            <div className="text-lg text-orange-500 line-through font-medium">
              De R$ {totalValue.toLocaleString()},00
            </div>
          </div>

          {/* Current Price */}
          <div className="mb-4">
            <div className="text-4xl md:text-5xl font-black gradient-text-accent mb-2">
              12x de R$ {installmentValue}
            </div>
            <div className="text-2xl md:text-3xl font-bold text-tech-blue">
              à vista R$ {offerPrice.toLocaleString()},00
            </div>
          </div>

          {/* Extra Discount Badge */}
          <div className="bg-green-500/15 border border-green-500/40 px-6 py-3 rounded-xl mb-4 inline-block">
            <div className="text-lg font-bold text-green-400">
              De R$ {originalPrice.toLocaleString()},00 por R$ {offerPrice.toLocaleString()},00
            </div>
            <div className="text-sm font-semibold text-green-300 mt-1">
              R$ {extraDiscount},00 de desconto!
            </div>
          </div>

          {/* Savings Badge */}
          <div className="glass-card px-6 py-4 rounded-xl mb-8 inline-block">
            <div className="text-xl font-bold text-tech-blue">
              Economia de R$ {savings.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Mais de {discountPercent}% de desconto!
            </div>
          </div>

          {/* Features */}
          <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
            {planFeatures.map((feature, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-3 p-3 rounded-lg ${
                  feature.includes('2 imersões')
                    ? 'bg-tech-blue/20 border-2 border-tech-blue/50'
                    : 'bg-muted/20'
                }`}
              >
                <Check className="w-5 h-5 text-tech-blue mt-0.5 flex-shrink-0" />
                <span className={`text-sm leading-relaxed ${
                  feature.includes('2 imersões')
                    ? 'font-bold text-foreground'
                    : 'text-foreground'
                }`}>
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="space-y-2 text-sm text-muted-foreground mb-8">
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

          {/* CTA Button */}
          <button
            onClick={handlePurchase}
            className="w-full max-w-md cta-button px-8 py-5 text-lg font-bold text-white border-0 transition-all duration-300 rounded-lg flex items-center justify-center gap-2 mx-auto"
          >
            <Zap className="w-5 h-5" />
            GARANTIR MINHA VAGA AGORA
          </button>

          {/* Limited Time Warning */}
          <div className="mt-6 p-4 bg-tech-red/10 border border-tech-red/20 rounded-lg max-w-md mx-auto">
            <div className="text-sm font-semibold text-tech-red mb-1">
              OFERTA POR TEMPO LIMITADO
            </div>
            <div className="text-xs text-muted-foreground">
              Após o fim da contagem, o valor retorna para <span className="font-bold text-tech-red">R$ 1.497,00</span>
            </div>
          </div>
        </Card>

        {/* Countdown Timer */}
        <div className="mb-8">
          <CountdownTimer />
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
