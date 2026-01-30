import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Video, Camera, Briefcase, Wand2, Globe, Bot, User, ShoppingBag } from 'lucide-react';

const WhatIsIAIRONSection = () => {
  const categories = [
    { name: 'Clipes com IA', icon: Video },
    { name: 'Vídeos com IA', icon: Video },
    { name: 'Fotos com IA', icon: Camera },
    { name: 'Artes com IA', icon: Wand2 },
    { name: 'Sites com IA', icon: Globe },
    { name: 'Clones com IA', icon: Bot },
    { name: 'Influencer com IA', icon: User },
    { name: 'IA para Produtos Físicos', icon: ShoppingBag },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center container-padding relative">
      <div className="section-divider mb-12"></div>

      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
            O que é a IAIRON ACADEMY?
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Uma plataforma de aprendizado que te entrega as principais formas de
            <span className="gradient-text-accent font-semibold"> fazer dinheiro com IA</span>,
            seja no seu ou num novo negócio.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Badge
                key={index}
                variant="outline"
                className="glass-card px-4 py-3 text-sm md:text-base font-medium border-tech-blue/30 hover:border-tech-blue/60 transition-all duration-300 hover:scale-105 cursor-default"
              >
                <Icon className="w-4 h-4 mr-2 text-tech-blue" />
                {category.name}
              </Badge>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIsIAIRONSection;
