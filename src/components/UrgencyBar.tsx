
import React from 'react';

const UrgencyBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-tech-green">
      <div className="container mx-auto px-4 py-2">
        <div className="text-center text-black font-medium text-sm animate-pulse-subtle">
          Oferta expira hoje à meia-noite
        </div>
      </div>
    </div>
  );
};

export default UrgencyBar;
