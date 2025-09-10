
import React from 'react';
import { Card } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string | React.ReactElement;
  value?: string;
  isBonus?: boolean;
  image?: string;
}

const FeatureCard = ({ title, description, value, isBonus = false, image }: FeatureCardProps) => {
  return (
    <Card className={`glass-card glass-card-hover transition-all duration-300 p-8 ${isBonus ? 'border-tech-purple/30' : 'border-tech-blue/20'}`}>
      {image ? (
        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-md mx-auto">
            <img 
              src={image} 
              alt={title}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="w-full text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className={`rounded-full p-2 flex-shrink-0 ${
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
              <h3 className={`font-bold text-xl ${
                isBonus ? 'gradient-text-accent' : 'text-foreground'
              }`}>
                {title}
              </h3>
            </div>
            <div className="text-muted-foreground mb-4 leading-relaxed text-base">
              {description}
            </div>
            {value && (
              <div className="glass-card px-4 py-2 rounded-lg inline-block">
                <div className="text-tech-blue font-semibold text-sm">
                  {value}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
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
            <div className="text-muted-foreground mb-4 leading-relaxed text-base">
              {description}
            </div>
            {value && (
              <div className="glass-card px-4 py-2 rounded-lg inline-block">
                <div className="text-tech-blue font-semibold text-sm">
                  {value}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </Card>
  );
};

export default FeatureCard;
