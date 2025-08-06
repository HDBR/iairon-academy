
import React from 'react';
import { Card } from '@/components/ui/card';
import { Zap, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TsunamiSection = () => {
  const handlePurchase = () => {
    window.open('https://payfast.greenn.com.br/122280/offer/3lXE3l?b_id_1=130096&b_offer_1=mXYbYh', '_blank');
  };

  return (
    <section className="section-spacing container-padding relative">
      <div className="section-divider mb-12"></div>
      
      <div className="container mx-auto max-w-4xl">
        <Card className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-tech-red/10 to-tech-amber/10 -z-10"></div>
          
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-tech-amber" />
              <h2 className="font-inter text-2xl md:text-3xl font-black gradient-text-accent">
                Os 5 PRIMEIROS que fecharem AGORA ganham:
              </h2>
              <Zap className="w-8 h-8 text-tech-amber" />
            </div>
          </div>
          
          <div className="glass-card p-6 md:p-8 rounded-2xl border-tech-amber/30 mb-8">
            <h3 className="text-xl md:text-2xl font-black gradient-text-accent mb-4">
              CONSULTORIA INDIVIDUAL DE 1 HORA NO ZOOM
            </h3>
            <p className="text-lg mb-3 text-foreground">Com o PETTRUS VAZ pessoalmente</p>
            <p className="text-tech-blue font-bold text-xl mb-6">Valor: R$ 3.000 - GRÁTIS para os 5 primeiros!</p>
            
            <Button 
              onClick={handlePurchase}
              className="urgency-bar text-white font-bold py-3 px-8 rounded-full animate-pulse hover:scale-105 transition-transform"
            >
              <Clock className="w-5 h-5 mr-2" />
              ⚠️ Inscreva-se agora!
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TsunamiSection;
