import React, { useEffect, useState, useRef } from 'react';

/**
 * GelatinoEffect - Un componente che aggiunge gocce di gelato animate all'header
 */
const GelatinoEffect = () => {
  const [drops, setDrops] = useState([]);
  const containerRef = useRef(null);
  const colors = ['#E5446D', '#97C15C', '#583C2F', '#FFB736', '#B3724A'];
  const TOTAL_DROPS = 8;
  
  // Genera una nuova goccia con posizione e colore casuali
  const createDrop = () => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      left: Math.random() * 100,
      delay: Math.random() * 5,
      size: 4 + Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)]
    };
  };
  
  useEffect(() => {
    const initialDrops = [];
    for (let i = 0; i < TOTAL_DROPS; i++) {
      initialDrops.push(createDrop());
    }
    setDrops(initialDrops);
    
    // Timer per creare nuove gocce periodicamente
    const interval = setInterval(() => {
      setDrops(prevDrops => {
        // Rimuove una goccia e ne aggiunge una nuova
        const newDrops = [...prevDrops];
        newDrops.shift();
        newDrops.push(createDrop());
        return newDrops;
      });
    }, 2000); // Ogni 2 secondi
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="gelatino-container"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 2
      }}
    >
      {drops.map(drop => (
        <div 
          key={drop.id}
          className="gelatino-drop"
          style={{
            position: 'absolute',
            top: 0,
            left: `${drop.left}%`,
            width: `${drop.size}px`,
            height: `${drop.size * 1.5}px`,
            background: drop.color,
            borderRadius: '50% 50% 5px 5px',
            animation: `gelatinoDrip 3s ease-in ${drop.delay}s infinite`,
            opacity: 0,
            zIndex: 2,
            filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.2))'
          }}
        />
      ))}
    </div>
  );
};

export default GelatinoEffect;
