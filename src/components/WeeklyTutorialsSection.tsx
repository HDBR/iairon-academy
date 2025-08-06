import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, Brain, TrendingUp, Zap } from 'lucide-react';
const WeeklyTutorialsSection = () => {
  const [activeDay, setActiveDay] = useState(0);
  const tutorials = [{
    day: "Segunda",
    title: "Marketing, Tráfego e Posicionamento",
    time: "19h às 21h30",
    recommendation: "Para quem quer dominar estratégias de marketing digital e posicionamento de marca",
    icon: TrendingUp,
    color: "from-tech-blue to-tech-purple"
  }, {
    day: "Terça",
    title: "Tutoria Google Flow",
    time: "19h às 21h30",
    recommendation: "Para quem quer automatizar processos e otimizar fluxos de trabalho",
    icon: Zap,
    color: "from-tech-purple to-tech-blue"
  }, {
    day: "Quinta",
    title: "Tutoria Google Flow",
    time: "19h às 21h30",
    recommendation: "Continuação e aprofundamento em automações Google",
    icon: Zap,
    color: "from-tech-blue to-tech-purple"
  }, {
    day: "Sexta",
    title: "IA do Zero",
    time: "19h às 21h30",
    recommendation: "Para quem não sabe nada de IA e está começando do zero - ideal para iniciantes",
    icon: Brain,
    color: "from-tech-purple to-tech-blue"
  }, {
    day: "Sábado",
    title: "Imersão com Pettrus",
    time: "7+ horas de duração",
    recommendation: "Para quem quer uma experiência imersiva e resultados acelerados",
    icon: Users,
    color: "from-tech-blue to-tech-purple",
    special: true
  }];

  // Auto-rotate animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDay(prev => (prev + 1) % tutorials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const totalValue = 20 * 200; // 20 encontros × R$ 200

  return <section className="section-spacing bg-gradient-to-b from-background/50 to-background">
      <div className="container-padding">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-tech-blue" />
            <Badge variant="outline" className="glass-card border-tech-blue/30 text-tech-blue px-4 py-2">
              Tutorias Semanais
            </Badge>
          </div>
          
          <h2 className="heading-xl gradient-text mb-6">
            Tutorias Ao Vivo Semanais no Zoom
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Acompanhamento personalizado para acelerar seus resultados com especialistas
          </p>
        </div>

        {/* Weekly Calendar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {tutorials.map((tutorial, index) => {
          const Icon = tutorial.icon;
          const isActive = activeDay === index;
          return <Card key={tutorial.day} className={`glass-card glass-card-hover p-6 transition-all duration-500 cursor-pointer relative overflow-hidden ${isActive ? 'border-tech-blue/50 shadow-lg shadow-tech-blue/20 scale-105' : 'border-tech-blue/20 hover:border-tech-blue/40'} ${tutorial.special ? 'md:col-span-2 lg:col-span-1' : ''}`} onClick={() => setActiveDay(index)}>
                {/* Background gradient overlay when active */}
                {isActive && <div className={`absolute inset-0 bg-gradient-to-br ${tutorial.color} opacity-5 animate-pulse`} />}
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className={`${isActive ? 'border-tech-blue/50 text-tech-blue' : 'border-tech-blue/30'}`}>
                      {tutorial.day}
                    </Badge>
                    <div className={`p-2 rounded-full bg-gradient-to-r ${tutorial.color} ${isActive ? 'animate-pulse' : ''}`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <h3 className={`font-bold text-lg mb-3 ${isActive ? 'gradient-text' : 'text-foreground'}`}>
                    {tutorial.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{tutorial.time}</span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tutorial.recommendation}
                  </p>

                  {tutorial.special && <Badge variant="outline" className="mt-4 bg-tech-purple/10 border-tech-purple/30 text-tech-purple">
                      Imersão Especial
                    </Badge>}
                </div>

                {/* Active indicator */}
                {isActive && <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-tech-blue to-tech-purple animate-pulse" />}
              </Card>;
        })}
        </div>

        {/* Active Tutorial Details */}
        

        {/* Value Anchor */}
        <div className="glass-card p-8 max-w-2xl mx-auto mt-12 border border-tech-purple/20">
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Se fosse cobrar R$ 200,00 por cada encontro, isso daria:
            </p>
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-3xl font-bold text-red-500 line-through">
                R$ {totalValue.toLocaleString('pt-BR')}
              </span>
              <span className="text-4xl font-bold gradient-text-accent">
                R$ 0,00
              </span>
            </div>
            <Badge variant="outline" className="bg-green-500/10 border-green-500/30 text-green-400">
              Incluído no seu acesso
            </Badge>
            <p className="text-sm text-muted-foreground mt-3">
              Baseado em 20 encontros mensais
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg gradient-text-accent font-semibold">
            🚀 Para acelerar seus resultados!
          </p>
        </div>
      </div>
    </section>;
};
export default WeeklyTutorialsSection;