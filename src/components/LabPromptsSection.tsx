import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, CheckCircle, Sparkles } from 'lucide-react';

const LabPromptsSection = () => {
  return (
    <section className="section-spacing container-padding">
      <div className="section-divider mb-12"></div>

      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <Badge variant="outline" className="glass-card border-tech-purple/30 text-tech-purple px-4 py-2 mb-4">
            ACERVO EXCLUSIVO
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            LABPROMPTS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tenha acesso ao meu acervo pessoal de Prompts, para toda e qualquer necessidade.
          </p>
        </div>

        <Card className="glass-card p-8 md:p-12 border-tech-purple/30 relative overflow-hidden">
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-tech-purple/10 via-tech-blue/5 to-transparent"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-r from-tech-purple to-tech-blue p-6 rounded-full">
                <FileText className="w-12 h-12 text-white" />
              </div>
            </div>

            <div className="text-center mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Chega de perder tempo, lutando com a IA para gerar algo de qualidade.
                Com o <span className="gradient-text-accent font-semibold">LabPrompts</span>,
                você vai ter acesso a todos os Prompts que eu uso nas minhas criações.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-tech-blue" />
                  <span className="text-foreground">Todos testados</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-tech-blue" />
                  <span className="text-foreground">Validados</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-tech-purple" />
                  <span className="text-foreground">Qualidade máxima</span>
                </div>
              </div>
            </div>

            <div className="glass-card px-6 py-4 rounded-lg text-center">
              <p className="text-tech-purple font-bold text-lg">
                Entregando qualidade máxima nas criações
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LabPromptsSection;
