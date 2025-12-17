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
        
        
        {/* Decorative Stars */}
        
      </div>
    </Card>;
};
export default GoldenTicketBonus;