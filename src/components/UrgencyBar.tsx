
import React from 'react';

const UrgencyBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 urgency-bar">
      <div className="container mx-auto container-padding py-3">
        <div className="text-center text-white font-semibold text-sm animate-pulse-glow">
          🔥 ÚLTIMAS HORAS: Oferta expira hoje à MEIA-NOITE! 🔥
        </div>
      </div>
    </div>
  );
};

export default UrgencyBar;
