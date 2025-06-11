
import React from 'react';
import { Button } from '@/components/ui/button';

const PurchaseButton = () => {
  return (
    <div className="text-center py-8">
      <Button 
        size="lg" 
        className="w-full md:w-auto px-12 py-6 text-xl font-bold bg-gradient-to-r from-cyber-green to-cyber-blue hover:from-cyber-blue hover:to-cyber-green transition-all duration-300 animate-cyber-glow cyber-text-glow"
      >
        🚀 QUERO GARANTIR MINHA VAGA NO LABVIDIA 🚀
      </Button>
      <p className="text-sm text-muted-foreground mt-4">
        Pagamento 100% seguro • Acesso imediato
      </p>
    </div>
  );
};

export default PurchaseButton;
