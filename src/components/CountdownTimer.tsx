
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      
      const difference = midnight.getTime() - now.getTime();
      
      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="flex items-center justify-center space-x-3 sm:space-x-8 py-8 sm:py-12">
      <div className="text-center">
        <div className="glass-card p-3 sm:p-6 rounded-xl sm:rounded-2xl tech-glow">
          <div className="text-2xl sm:text-4xl md:text-5xl font-mono font-bold gradient-text-accent glow-text">
            {formatTime(timeLeft.hours)}
          </div>
          <div className="text-[10px] sm:text-xs text-muted-foreground mt-1 sm:mt-2 uppercase tracking-wider font-medium">
            Horas
          </div>
        </div>
      </div>
      
      <div className="text-xl sm:text-3xl font-mono gradient-text-accent">:</div>
      
      <div className="text-center">
        <div className="glass-card p-3 sm:p-6 rounded-xl sm:rounded-2xl tech-glow">
          <div className="text-2xl sm:text-4xl md:text-5xl font-mono font-bold gradient-text-accent glow-text">
            {formatTime(timeLeft.minutes)}
          </div>
          <div className="text-[10px] sm:text-xs text-muted-foreground mt-1 sm:mt-2 uppercase tracking-wider font-medium">
            Minutos
          </div>
        </div>
      </div>
      
      <div className="text-xl sm:text-3xl font-mono gradient-text-accent">:</div>
      
      <div className="text-center">
        <div className="glass-card p-3 sm:p-6 rounded-xl sm:rounded-2xl tech-glow">
          <div className="text-2xl sm:text-4xl md:text-5xl font-mono font-bold gradient-text-accent glow-text">
            {formatTime(timeLeft.seconds)}
          </div>
          <div className="text-[10px] sm:text-xs text-muted-foreground mt-1 sm:mt-2 uppercase tracking-wider font-medium">
            Segundos
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
