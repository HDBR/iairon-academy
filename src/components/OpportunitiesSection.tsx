
import React from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, Users, Briefcase, Zap, DollarSign, Target } from 'lucide-react';

const OpportunitiesSection = () => {
  const opportunities = [
    {
      icon: <Briefcase className="w-8 h-8 text-tech-blue" />,
      title: "Freelancer Especializado",
      description: "Ofereça serviços de criação de vídeos com IA para empresas e criadores de conteúdo"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-tech-purple" />,
      title: "Agência de Vídeos IA",
      description: "Monte sua própria agência especializada em produção de vídeos com inteligência artificial"
    },
    {
      icon: <Users className="w-8 h-8 text-tech-cyan" />,
      title: "Consultor em IA",
      description: "Ajude outras empresas a implementarem soluções de vídeo com IA em seus negócios"
    },
    {
      icon: <Target className="w-8 h-8 text-tech-amber" />,
      title: "Creator Economy",
      description: "Crie conteúdo para redes sociais e monetize com vídeos únicos criados por IA"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-tech-red" />,
      title: "Curso Online",
      description: "Ensine o que aprendeu criando seus próprios cursos sobre vídeos com IA"
    },
    {
      icon: <Zap className="w-8 h-8 text-tech-violet" />,
      title: "Automação de Processos",
      description: "Implemente soluções de vídeo automatizadas para grandes empresas"
    }
  ];

  return (
    <section className="section-spacing container-padding">
      <div className="section-divider mb-12"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Oportunidades Após Dominar Vídeos com IA
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubra como transformar seu conhecimento em vídeos com IA em múltiplas fontes de renda 
            e oportunidades profissionais no mercado em crescimento
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="glass-card glass-card-hover p-6 text-center">
              <div className="mb-4 flex justify-center">
                {opportunity.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 gradient-text-accent">
                {opportunity.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {opportunity.description}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Card className="glass-card price-highlight p-6 inline-block">
            <div className="text-2xl font-bold gradient-text-accent mb-2">
              💰 Mercado em Expansão
            </div>
            <p className="text-muted-foreground">
              O mercado de vídeos com IA deve crescer <span className="text-tech-blue font-semibold">300% em 2025</span>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;
