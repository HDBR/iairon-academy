
import React from 'react';

const UrgencyBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 urgency-bar animate-urgency">
      <div className="container mx-auto px-4 py-3">
        <div className="text-center text-black font-bold text-sm md:text-base animate-cyber-pulse">
          🔥 ÚLTIMAS HORAS: Oferta expira hoje à MEIA-NOITE! 🔥
        </div>
      </div>
    </div>
  );
};

export default UrgencyBar;
