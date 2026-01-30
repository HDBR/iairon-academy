import React from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star, Award, Users } from 'lucide-react';
import pettrusImg from '@/assets/mentor/pettrus.webp';

const MentorSection = () => {
  return (
    <section className="section-spacing container-padding">
      <div className="section-divider mb-12"></div>
      
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Quem Será Seu Mentor
        </h2>
        
        <Card className="mentor-card p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text-accent">
                Pettrus Vaz
              </h3>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Especialista em Inteligência Artificial e criador do método mais eficaz para dominar 
                ferramentas de IA no Brasil. Com anos de experiência no mercado digital, já treinou 
                milhares de pessoas a faturarem alto com tecnologia.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-tech-blue/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-tech-blue" />
                  </div>
                  <span className="text-foreground font-medium">
                    +2 anos especializando em IA e automações
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-tech-purple/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-tech-purple" />
                  </div>
                  <span className="text-foreground font-medium">
                    +1.000 alunos treinados com sucesso
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-tech-amber/20 flex items-center justify-center">
                    <Star className="w-5 h-5 text-tech-amber" />
                  </div>
                  <span className="text-foreground font-medium">
                    Criador da metodologia IAIRON
                  </span>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-gradient-to-br from-tech-blue to-tech-purple">
                  <AvatarImage
                    src={pettrusImg}
                    alt="Pettrus Vaz"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-4xl md:text-6xl font-bold gradient-text-accent bg-gradient-to-br from-muted to-background">
                    PV
                  </AvatarFallback>
                </Avatar>
                
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-tech-amber rounded-full flex items-center justify-center animate-pulse-glow">
                  <Star className="w-6 h-6 text-background" />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MentorSection;
