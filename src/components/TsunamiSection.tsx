import React from 'react';
import { Card } from '@/components/ui/card';
import { Zap, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
const TsunamiSection = () => {
  const handlePurchase = () => {
    window.open('https://payfast.greenn.com.br/122280', '_blank');
  };
  return <section className="section-spacing container-padding relative">
      <div className="section-divider mb-12"></div>
      
      
    </section>;
};
export default TsunamiSection;