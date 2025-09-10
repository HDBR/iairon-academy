import React from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, Users, Briefcase, Zap, DollarSign, Target } from 'lucide-react';
const OpportunitiesSection = () => {
  const opportunities = [{
    icon: <Briefcase className="w-8 h-8 text-tech-blue" />,
    title: "Freelancer Especializado",
    description: "Ofereça serviços de criação de vídeos com IA para empresas e criadores de conteúdo"
  }, {
    icon: <DollarSign className="w-8 h-8 text-tech-purple" />,
    title: "Agência de Vídeos IA",
    description: "Monte sua própria agência especializada em produção de vídeos com inteligência artificial"
  }, {
    icon: <Users className="w-8 h-8 text-tech-cyan" />,
    title: "Consultor em IA",
    description: "Ajude outras empresas a implementarem soluções de vídeo com IA em seus negócios"
  }, {
    icon: <Target className="w-8 h-8 text-tech-amber" />,
    title: "Creator Economy",
    description: "Crie conteúdo para redes sociais e monetize com vídeos únicos criados por IA"
  }, {
    icon: <TrendingUp className="w-8 h-8 text-tech-red" />,
    title: "Curso Online",
    description: "Ensine o que aprendeu criando seus próprios cursos sobre vídeos com IA"
  }, {
    icon: <Zap className="w-8 h-8 text-tech-violet" />,
    title: "Automação de Processos",
    description: "Implemente soluções de vídeo automatizadas para grandes empresas"
  }];
  
  return (
    <section className="section-spacing container-padding">
      <div className="section-divider mb-12"></div>
      
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 gradient-text">
          Oportunidades que se abrem para você
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Com o conhecimento do LABVIDIA, você pode explorar diversas oportunidades no mercado de vídeos com IA
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="glass-card glass-card-hover p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-tech-purple/20 to-tech-blue/20 p-4 rounded-full">
                  {opportunity.icon}
                </div>
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">
                {opportunity.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {opportunity.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default OpportunitiesSection;