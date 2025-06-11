
import React from 'react';
import { Button } from '@/components/ui/button';

const PurchaseButton = () => {
  return (
    <div className="text-center py-8">
      <Button 
        size="lg" 
        className="w-full md:w-auto px-12 py-4 text-lg font-semibold bg-tech-green text-black hover:bg-tech-green/90 transition-all duration-200"
      >
        Garantir Minha Vaga no LABVIDIA
      </Button>
      <p className="text-sm text-muted-foreground mt-3">
        Pagamento 100% seguro • Acesso imediato
      </p>
    </div>
  );
};

export default PurchaseButton;
