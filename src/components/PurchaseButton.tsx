
import React from 'react';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

const PurchaseButton = () => {
  return (
    <div className="text-center py-12">
      <Button 
        size="lg" 
        className="cta-button w-full md:w-auto px-16 py-6 text-xl font-bold text-white border-0 transition-all duration-300 mb-6"
      >
        <Zap className="w-6 h-6 mr-3" />
        GARANTIR MINHA VAGA NO LABVIDIA
      </Button>
      
      <div className="glass-card inline-block px-6 py-3 rounded-full">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-tech-blue rounded-full animate-pulse"></span>
          Pagamento 100% seguro • Acesso imediato
        </p>
      </div>
    </div>
  );
};

export default PurchaseButton;
