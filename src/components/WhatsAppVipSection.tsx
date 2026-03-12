import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageCircle, Users, Clock, Star } from 'lucide-react';
const WhatsAppVipSection = () => {
  const handlePurchase = () => {
    window.open('https://payfast.greenn.com.br/122280', '_blank');
  };
  return <section className="section-spacing container-padding">
      <div className="section-divider mb-12"></div>
      
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <Badge variant="outline" className="glass-card border-green-500/30 text-green-400 px-4 py-2 mb-4">
            ACESSO EXCLUSIVO
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Grupo VIP de Networking no WhatsApp entre os alunos
          </h2>
          <p className="text-xl text-muted-foreground">
            Faça contatos e crie novos negócios
          </p>
        </div>

        <Card className="glass-card p-8 md:p-12 border-green-500/30 relative overflow-hidden">
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-tech-blue/5 to-transparent"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-full">
                <MessageCircle className="w-12 h-12 text-white" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <Users className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">
                  Networking Exclusivo
                </h3>
                <p className="text-muted-foreground text-sm">
                  Conecte-se diretamente com outros profissionais da área
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <Clock className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">
                  1 Mês de Acesso
                </h3>
                <p className="text-muted-foreground text-sm">
                  Suporte direto do Pettrus por 30 dias completos
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <Star className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">
                  Suporte Personalizado
                </h3>
                <p className="text-muted-foreground text-sm">
                  Tire suas dúvidas diretamente com o mentor
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="glass-card px-6 py-4 rounded-lg inline-block mb-6">
                <p className="text-green-500 font-bold text-xl">
                  💬 Acesso VIP por 1 mês completo
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  Valor estimado: R$ 297 | Seu preço: GRÁTIS
                </p>
              </div>

              
            </div>
          </div>
        </Card>
      </div>
    </section>;
};
export default WhatsAppVipSection;