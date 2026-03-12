
import React from 'react';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

const PurchaseButton = () => {
  const handlePurchase = () => {
    window.open('https://payfast.greenn.com.br/122280', '_blank');
  };

  return (
    <Button 
      onClick={handlePurchase}
      className="cta-button w-full px-8 py-4 text-lg font-bold text-white border-0 transition-all duration-300 rounded-lg"
    >
      <Zap className="w-6 h-6 mr-3" />
      GARANTIR MINHA VAGA AGORA
    </Button>
  );
};

export default PurchaseButton;
