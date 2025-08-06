
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
  const previousPrice = 1497;
  const currentPrice = 997;
  const savings = totalValue - currentPrice;
  const installmentValue = "102,51";

  const handlePurchase = () => {
    window.open('https://payfast.greenn.com.br/122280/offer/FlcBck', '_blank');
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

        {/* Segundo Card: Oferta Atual */}
        <Card className="glass-card price-highlight p-8 text-center relative overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/5 to-tech-purple/5 -z-10"></div>
          
          {/* Preço anterior riscado */}
          <div className="mb-4">
            <div className="text-lg text-orange-500 line-through font-medium">
              De R$ {previousPrice.toLocaleString()},00 por
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-6 gradient-text-accent">
            Seu investimento hoje:
          </h3>
          
          <div className="mb-6">
            {/* Destaque do Parcelado */}
            <div className="text-4xl md:text-5xl font-black gradient-text-accent mb-2">
              12x de R$ {installmentValue}
            </div>
            <div className="text-2xl md:text-3xl font-bold text-tech-blue mb-4">
              à vista R$ {currentPrice.toLocaleString()},00
            </div>
          </div>

          <div className="glass-card px-6 py-4 rounded-xl mb-6">
            <div className="text-xl font-bold text-tech-blue">
              💸 Economia de R$ {savings.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Mais de 93% de desconto!
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
            className="cta-button w-full px-8 py-4 text-lg font-bold text-white border-0 transition-all duration-300 rounded-lg mb-6"
          >
            GARANTIR MINHA VAGA AGORA
          </button>

          {/* CountdownTimer agora dentro do card */}
          <CountdownTimer />

          {/* Aviso sobre aumento do preço */}
          <div className="mt-6 p-4 bg-tech-red/10 border border-tech-red/20 rounded-lg">
            <div className="text-sm font-semibold text-tech-red mb-1">
              ⚠️ ATENÇÃO: OFERTA POR TEMPO LIMITADO
            </div>
            <div className="text-xs text-muted-foreground">
              Após o fim da contagem, o valor retorna para <span className="font-bold text-tech-red">R$ 1.497,00</span>
            </div>
          </div>
        </Card>

        <div className="text-center mb-8">
          <p className="text-xl font-bold text-tech-red">
            Todos os bônus estão disponíveis!!
          </p>
        </div>

        {/* Botão final de compra */}
        <div className="text-center">
          <button
            onClick={handlePurchase}
            className="cta-button px-8 py-4 text-lg font-bold text-white border-0 transition-all duration-300 rounded-lg"
          >
            GARANTIR MINHA VAGA AGORA
          </button>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
