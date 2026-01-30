import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Video, Zap } from 'lucide-react';

const WeeklyTutorialsSection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.querySelector('#pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-spacing bg-gradient-to-b from-background/50 to-background">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
            Aqui, você não vai começar sozinho.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tenha 4 Semanas de Tutorias Ao Vivo no Zoom
          </p>
        </div>

        <div className="container mx-auto max-w-4xl">
          {/* Bonus Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Bonus 1 */}
            <Card className="glass-card p-6 border-tech-blue/30 hover:border-tech-blue/50 transition-all duration-300">
              <Badge variant="outline" className="bg-tech-blue/10 border-tech-blue/30 text-tech-blue mb-4">
                BÔNUS EXCLUSIVO #1
              </Badge>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-tech-blue/20">
                  <Calendar className="w-6 h-6 text-tech-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">4 Semanas de Tutorias</h3>
                  <p className="text-muted-foreground text-sm">
                    4 semanas completas de tutorias, 2x na semana (totalizando 8 tutorias),
                    para acelerar seus resultados na IA com especialistas AO VIVO!
                  </p>
                </div>
              </div>
            </Card>

            {/* Bonus 2 */}
            <Card className="glass-card p-6 border-tech-purple/30 hover:border-tech-purple/50 transition-all duration-300">
              <Badge variant="outline" className="bg-tech-purple/10 border-tech-purple/30 text-tech-purple mb-4">
                BÔNUS EXCLUSIVO #2
              </Badge>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-tech-purple/20">
                  <Users className="w-6 h-6 text-tech-purple" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">2 Imersões com Pettrus Vaz</h3>
                  <p className="text-muted-foreground text-sm">
                    Tenha 2x encontros de tira-dúvidas diretamente com Pettrus Vaz,
                    em verdadeiras imersões o dia inteiro no sábado!
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Value Anchor */}
          <Card className="glass-card p-8 border border-tech-purple/20 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Se fosse cobrar R$ 200,00 por cada tutoria durante 4 semanas, isso daria:
            </p>
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-3xl font-bold text-red-500 line-through">
                R$ 1.600
              </span>
              <span className="text-4xl font-bold gradient-text-accent">
                R$ 0,00
              </span>
            </div>
            <Badge variant="outline" className="bg-green-500/10 border-green-500/30 text-green-400">
              BÔNUS EXCLUSIVO incluído
            </Badge>
            <p className="text-sm text-muted-foreground mt-3">
              Baseado em 4 semanas completas de tutoriais
            </p>
          </Card>

          {/* CTA Button */}
          <div className="text-center mt-8">
            <button
              onClick={scrollToPricing}
              className="cta-button px-8 py-4 text-lg font-bold text-white border-0 transition-all duration-300 rounded-lg"
            >
              GARANTIR MINHA VAGA AGORA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyTutorialsSection;
