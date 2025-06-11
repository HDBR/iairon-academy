
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
    <div className="flex items-center justify-center space-x-6 py-8">
      <div className="text-center">
        <div className="tech-border p-4 rounded-lg">
          <div className="text-3xl md:text-4xl font-mono font-bold text-foreground">
            {formatTime(timeLeft.hours)}
          </div>
          <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Horas</div>
        </div>
      </div>
      
      <div className="text-2xl font-mono text-muted-foreground">:</div>
      
      <div className="text-center">
        <div className="tech-border p-4 rounded-lg">
          <div className="text-3xl md:text-4xl font-mono font-bold text-foreground">
            {formatTime(timeLeft.minutes)}
          </div>
          <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Minutos</div>
        </div>
      </div>
      
      <div className="text-2xl font-mono text-muted-foreground">:</div>
      
      <div className="text-center">
        <div className="tech-border p-4 rounded-lg">
          <div className="text-3xl md:text-4xl font-mono font-bold text-foreground">
            {formatTime(timeLeft.seconds)}
          </div>
          <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Segundos</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
