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
  return;
};
export default OpportunitiesSection;