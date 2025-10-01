import React from 'react';
import { Card } from '@/components/ui/card';
import { Star, Calendar, MapPin } from 'lucide-react';
const GoldenTicketBonus = () => {
  return <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-yellow-400/10 via-amber-300/20 to-yellow-600/10 backdrop-blur-sm">
      {/* Background Golden Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-amber-500/10 to-yellow-600/5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent animate-shimmer"></div>
      
      {/* Golden Border */}
      <div className="absolute inset-0 border-2 border-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 rounded-lg opacity-40"></div>
      
      <div className="relative z-10 p-4 sm:p-8">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          {/* Golden Ticket Image */}
          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <div className="relative">
              <img src="/lovable-uploads/e3a0f118-0f95-463f-9e0e-7436ae0aaf48.png" alt="Golden Ticket" className="w-24 h-16 sm:w-32 sm:h-20 object-contain drop-shadow-lg" />
              {/* Glow effect around ticket */}
              <div className="absolute inset-0 bg-yellow-400/20 blur-lg rounded-lg -z-10"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 w-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-2 rounded-full flex-shrink-0">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              </div>
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent leading-tight">
                BÔNUS ESPECIAL: 🎫 GOLDEN TICKET - Ingresso VIP Evento Presencial
              </h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <p className="text-foreground font-medium text-base sm:text-lg">
                🏆 Seu ingresso VIP para o evento mais exclusivo do ano!
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center gap-3 bg-yellow-400/10 p-3 rounded-lg border border-yellow-400/20">
                  <Calendar className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-yellow-500 text-sm sm:text-base">Quando</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">15 e 16 de Novembro</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-yellow-400/10 p-3 rounded-lg border border-yellow-400/20">
                  <MapPin className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-yellow-500 text-sm sm:text-base">Local</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">São Paulo - SP</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-400/10 to-amber-500/10 p-3 sm:p-4 rounded-lg border border-yellow-400/30">
                <h4 className="font-bold text-yellow-500 mb-2 text-sm sm:text-base">🎯 O que você vai vivenciar:</h4>
                <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                  <li>• Networking exclusivo com outros profissionais</li>
                  <li>• Workshops práticos sobre VÍDEOS COM IA</li>
                  <li>• Estratégias avançadas de negócios</li>
                  
                </ul>
              </div>
              
              <div className="bg-red-500/10 p-3 rounded-lg border border-red-400/30">
                <p className="text-xs sm:text-sm text-red-400 font-medium">
                  ⚠️ <strong>Importante:</strong> O Golden Ticket garante apenas o ingresso VIP. Gastos com deslocamento, hospedagem e alimentação não estão inclusos.
                </p>
              </div>
            </div>
            
            {/* Value Badge */}
            <div className="flex justify-center sm:justify-start">
              <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-base md:text-lg shadow-lg">
                Valor: R$ 500 | Seu preço: GRÁTIS
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Stars */}
        <div className="absolute top-4 right-4 flex gap-1">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}
        </div>
      </div>
    </Card>;
};
export default GoldenTicketBonus;