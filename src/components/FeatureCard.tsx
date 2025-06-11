
import React from 'react';
import { Card } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  value?: string;
  isBonus?: boolean;
}

const FeatureCard = ({ title, description, value, isBonus = false }: FeatureCardProps) => {
  return (
    <Card className={`glass-card glass-card-hover transition-all duration-300 p-8 ${isBonus ? 'border-tech-purple/30' : 'border-tech-blue/20'}`}>
      <div className="flex items-start space-x-4">
        <div className={`mt-1 rounded-full p-2 flex-shrink-0 ${
          isBonus 
            ? 'bg-gradient-to-r from-tech-purple to-tech-blue' 
            : 'bg-tech-blue/20 border border-tech-blue/30'
        }`}>
          {isBonus ? (
            <Star className="w-5 h-5 text-white" />
          ) : (
            <Check className="w-5 h-5 text-tech-blue" />
          )}
        </div>
        <div className="flex-1">
          <h3 className={`font-bold text-xl mb-3 ${
            isBonus ? 'gradient-text-accent' : 'text-foreground'
          }`}>
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 leading-relaxed text-base">
            {description}
          </p>
          {value && (
            <div className="glass-card px-4 py-2 rounded-lg inline-block">
              <div className="text-tech-blue font-semibold text-sm">
                {value}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default FeatureCard;
