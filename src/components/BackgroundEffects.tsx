
import React, { useEffect, useRef } from 'react';

const BackgroundEffects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create neural network nodes
    const createNodes = () => {
      const nodeCount = window.innerWidth < 768 ? 15 : 30;
      
      for (let i = 0; i < nodeCount; i++) {
        const node = document.createElement('div');
        node.className = 'neural-node';
        node.style.left = `${Math.random() * 100}%`;
        node.style.top = `${Math.random() * 100}%`;
        node.style.animationDelay = `${Math.random() * 4}s`;
        container.appendChild(node);
      }
    };

    // Create connections between nodes
    const createConnections = () => {
      const connectionCount = window.innerWidth < 768 ? 8 : 15;
      
      for (let i = 0; i < connectionCount; i++) {
        const connection = document.createElement('div');
        connection.className = 'neural-connection';
        
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const endX = Math.random() * 100;
        const endY = Math.random() * 100;
        
        const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
        const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
        
        connection.style.left = `${startX}%`;
        connection.style.top = `${startY}%`;
        connection.style.width = `${length}%`;
        connection.style.transform = `rotate(${angle}deg)`;
        connection.style.animationDelay = `${Math.random() * 8}s`;
        
        container.appendChild(connection);
      }
    };

    // Create floating particles
    const createParticles = () => {
      if (window.innerWidth < 768) return; // Skip on mobile
      
      const particleCount = 20;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 20}s`;
        particle.style.animationDuration = `${15 + Math.random() * 10}s`;
        container.appendChild(particle);
      }
    };

    createNodes();
    createConnections();
    createParticles();

    // Cleanup function
    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef} className="neural-network" />;
};

export default BackgroundEffects;
