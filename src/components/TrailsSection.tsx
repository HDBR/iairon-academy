import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Video, Camera, Briefcase, ChevronRight } from 'lucide-react';

const TrailsSection = () => {
  const trails = [
    {
      title: 'Vídeos com IA',
      description: 'Crie vídeos incríveis sem precisar aparecer',
      icon: Video,
      color: 'tech-blue',
      levels: {
        iniciante: ['Dominando o VEO3', 'Pack de Prompts VEO3', 'Edição com IA (CapCut)'],
        intermediario: ['Efeitos de Cinema com Runway', 'Áudio de IA com sotaque', '2 Personagens no mesmo vídeo', 'Clipes com IA'],
        avancado: ['Histórias Animadas com IA', 'Vídeos Virais', 'Flow Completo (Masterclass VEO3)']
      }
    },
    {
      title: 'Imagens com IA',
      description: 'Fotos e artes profissionais',
      icon: Camera,
      color: 'tech-purple',
      levels: {
        iniciante: ['Criando Artes com ChatGPT', 'Sessão de Fotos com IA'],
        intermediario: ['Qualidade Profissional em Imagens', 'Lovart - IA Proibida'],
        avancado: ['Influencer de IA do Zero', 'Influencer 100% Consistente', 'IADS - Método Clones Sentinela']
      }
    },
    {
      title: 'Negócios com IA',
      description: 'Automatize e escale seu negócio',
      icon: Briefcase,
      color: 'tech-cyan',
      levels: {
        iniciante: ['AIGRAM - Atendimento com IA', 'Meus Assistentes de IA'],
        intermediario: ['Sites com IA', 'Dashboards com IA', 'Agentes Express Personalizados'],
        avancado: ['N8N Expert - Automação Avançada', 'Automação com Cláudio Santiago']
      }
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'iniciante': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'intermediario': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'avancado': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return '';
    }
  };

  const getLevelLabel = (level: string) => {
    switch (level) {
      case 'iniciante': return 'INICIANTE';
      case 'intermediario': return 'INTERMEDIÁRIO';
      case 'avancado': return 'AVANÇADO';
      default: return '';
    }
  };

  const scrollToPricing = () => {
    const pricingSection = document.querySelector('#pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-spacing container-padding">
      <div className="section-divider mb-12"></div>

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Descubra a Trilha ideal para você
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-2">
            Na IAIRON, você tem uma formação personalizada, pensada exatamente para sua necessidade.
          </p>
          <p className="text-lg text-muted-foreground">
            Você vai definir seu objetivo e ter uma trilha <span className="gradient-text-accent font-semibold">100% dedicada</span> para executá-lo.
          </p>
        </div>

        {/* Trails Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {trails.map((trail, index) => {
            const Icon = trail.icon;
            return (
              <Card key={index} className="glass-card p-6 border-tech-blue/20 hover:border-tech-blue/40 transition-all duration-300">
                {/* Trail Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                  <div className={`p-3 rounded-xl bg-${trail.color}/20`}>
                    <Icon className={`w-6 h-6 text-${trail.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{trail.title}</h3>
                    <p className="text-sm text-muted-foreground">{trail.description}</p>
                  </div>
                </div>

                {/* Levels */}
                <div className="space-y-4">
                  {Object.entries(trail.levels).map(([level, courses]) => (
                    <div key={level}>
                      <Badge
                        variant="outline"
                        className={`text-xs mb-2 ${getLevelColor(level)}`}
                      >
                        {getLevelLabel(level)}
                      </Badge>
                      <ul className="space-y-2">
                        {courses.map((course, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ChevronRight className="w-4 h-4 text-tech-blue flex-shrink-0 mt-0.5" />
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={scrollToPricing}
            className="cta-button px-8 py-4 text-lg font-bold text-white border-0 transition-all duration-300 rounded-lg"
          >
            GARANTIR MINHA VAGA AGORA
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrailsSection;
