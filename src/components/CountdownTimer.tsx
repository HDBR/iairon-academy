
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
    <div className="flex items-center justify-center space-x-4 py-8">
      <div className="text-center">
        <div className="cyber-border p-4 rounded-lg animate-cyber-glow">
          <div className="text-3xl md:text-5xl font-orbitron font-bold cyber-text-glow">
            {formatTime(timeLeft.hours)}
          </div>
          <div className="text-sm text-muted-foreground mt-1">HORAS</div>
        </div>
      </div>
      
      <div className="text-4xl font-orbitron cyber-text-glow animate-cyber-pulse">:</div>
      
      <div className="text-center">
        <div className="cyber-border p-4 rounded-lg animate-cyber-glow">
          <div className="text-3xl md:text-5xl font-orbitron font-bold cyber-text-glow">
            {formatTime(timeLeft.minutes)}
          </div>
          <div className="text-sm text-muted-foreground mt-1">MINUTOS</div>
        </div>
      </div>
      
      <div className="text-4xl font-orbitron cyber-text-glow animate-cyber-pulse">:</div>
      
      <div className="text-center">
        <div className="cyber-border p-4 rounded-lg animate-cyber-glow">
          <div className="text-3xl md:text-5xl font-orbitron font-bold cyber-text-glow">
            {formatTime(timeLeft.seconds)}
          </div>
          <div className="text-sm text-muted-foreground mt-1">SEGUNDOS</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
