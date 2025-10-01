
import React from 'react';
import { Card } from '@/components/ui/card';
import { Star, Calendar, MapPin } from 'lucide-react';

const GoldenTicketBonus = () => {
  return (
    <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-yellow-400/10 via-amber-300/20 to-yellow-600/10 backdrop-blur-sm">
      {/* Background Golden Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-amber-500/10 to-yellow-600/5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent animate-shimmer"></div>
      
      {/* Golden Border */}
      <div className="absolute inset-0 border-2 border-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 rounded-lg opacity-40"></div>
      
      <div className="relative z-10 p-4 md:p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          {/* Golden Ticket Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img 
                src="/lovable-uploads/e3a0f118-0f95-463f-9e0e-7436ae0aaf48.png" 
                alt="Golden Ticket" 
                className="w-24 h-16 md:w-32 md:h-20 object-contain drop-shadow-lg"
              />
              {/* Glow effect around ticket */}
              <div className="absolute inset-0 bg-yellow-400/20 blur-lg rounded-lg -z-10"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 w-full">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-2 rounded-full flex-shrink-0">
                <Star className="w-5 h-5 md:w-6 md:h-6 text-black" />
              </div>
              <h3 className="font-bold text-lg md:text-2xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent text-center md:text-left">
                BÔNUS ESPECIAL: 🎫 GOLDEN TICKET - Ingresso VIP Evento Presencial
              </h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <p className="text-foreground font-medium text-base md:text-lg text-center md:text-left">
                🏆 Seu ingresso VIP para o evento mais exclusivo do ano!
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="flex items-center gap-3 bg-yellow-400/10 p-3 rounded-lg border border-yellow-400/20">
                  <Calendar className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-yellow-500 text-sm md:text-base">Quando</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Outubro 2025</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-yellow-400/10 p-3 rounded-lg border border-yellow-400/20">
                  <MapPin className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-yellow-500 text-sm md:text-base">Local</div>
                    <div className="text-xs md:text-sm text-muted-foreground">São Paulo - SP</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-400/10 to-amber-500/10 p-3 md:p-4 rounded-lg border border-yellow-400/30">
                <h4 className="font-bold text-yellow-500 mb-2 text-sm md:text-base">🎯 O que você vai vivenciar:</h4>
                <ul className="space-y-1 text-xs md:text-sm text-muted-foreground">
                  <li>• Networking exclusivo com outros profissionais</li>
                  <li>• Workshops práticos sobre VÍDEOS COM IA</li>
                  <li>• Estratégias avançadas de negócios</li>
                  <li>• Acesso VIP com benefícios especiais</li>
                </ul>
              </div>
              
              <div className="bg-red-500/10 p-3 rounded-lg border border-red-400/30">
                <p className="text-xs md:text-sm text-red-400 font-medium">
                  ⚠️ <strong>Importante:</strong> O Golden Ticket garante apenas o ingresso VIP. Gastos com deslocamento, hospedagem e alimentação não estão inclusos.
                </p>
              </div>
            </div>
            
            {/* Value Badge */}
            <div className="flex justify-center md:justify-start">
              <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-4 py-2 md:px-6 md:py-3 rounded-lg font-bold text-sm md:text-lg shadow-lg">
                Valor: R$ 500 | Seu preço: GRÁTIS
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Stars */}
        <div className="absolute top-2 right-2 md:top-4 md:right-4 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default GoldenTicketBonus;
