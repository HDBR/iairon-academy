
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
    <Card className={`p-6 tech-border tech-glow-hover transition-all duration-200 ${isBonus ? 'accent-border' : ''}`}>
      <div className="flex items-start space-x-4">
        <div className={`mt-1 rounded-full p-1 ${isBonus ? 'bg-tech-green' : 'bg-muted'}`}>
          <Check className="w-4 h-4 text-black" />
        </div>
        <div className="flex-1">
          <h3 className={`font-semibold text-lg mb-2 ${isBonus ? 'text-tech-green' : 'text-foreground'}`}>
            {title}
          </h3>
          <p className="text-muted-foreground mb-3 leading-relaxed">{description}</p>
          {value && (
            <div className="text-tech-green font-medium text-sm">
              {value}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default FeatureCard;
