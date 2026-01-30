
import React from 'react';
import { Card } from '@/components/ui/card';
import { Award, CheckCircle, Star } from 'lucide-react';

const CertificateSection = () => {
  return (
    <section className="section-spacing container-padding">
      <div className="section-divider mb-12"></div>
      
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Certificado de Especialista em IA
        </h2>

        <Card className="glass-card p-8 md:p-12 text-center">
          <div className="mb-8">
            <Award className="w-20 h-20 text-tech-amber mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text-accent">
              Certificação Oficial IAIRON Academy
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ao concluir a IAIRON Academy, você receberá um certificado oficial que comprova sua
              especialização em criação de vídeos com Inteligência Artificial.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-tech-blue flex-shrink-0" />
              <span className="text-foreground">Reconhecimento profissional</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-tech-blue flex-shrink-0" />
              <span className="text-foreground">Diferencial no mercado</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-tech-blue flex-shrink-0" />
              <span className="text-foreground">Credibilidade com clientes</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-tech-blue flex-shrink-0" />
              <span className="text-foreground">Portfólio profissional</span>
            </div>
          </div>
          
          <div className="glass-card px-6 py-4 rounded-xl">
            <div className="flex items-center justify-center gap-2 text-tech-amber">
              <Star className="w-5 h-5" />
              <span className="font-semibold">Certificado Digital com QR Code de Validação</span>
              <Star className="w-5 h-5" />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CertificateSection;
