
import React from 'react';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  value?: string;
  isBonus?: boolean;
}

const FeatureCard = ({ title, description, value, isBonus = false }: FeatureCardProps) => {
  return (
    <Card className={`p-6 cyber-border holographic animate-holographic ${isBonus ? 'border-cyber-green' : ''}`}>
      <div className="flex items-start space-x-4">
        <div className={`mt-1 rounded-full p-1 ${isBonus ? 'bg-cyber-green' : 'bg-cyber-blue'}`}>
          <Check className="w-4 h-4 text-black" />
        </div>
        <div className="flex-1">
          <h3 className={`font-orbitron font-bold text-lg mb-2 ${isBonus ? 'text-cyber-green' : 'text-cyber-blue'} cyber-text-glow`}>
            {title}
          </h3>
          <p className="text-foreground/80 mb-3">{description}</p>
          {value && (
            <div className="text-cyber-blue font-bold text-sm">
              {value}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default FeatureCard;
