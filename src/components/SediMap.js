import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registra il plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function SediMap() {
  const sectionRef = useRef(null);
  const locations = [
    {
      id: 1,
      name: 'Vasto',
      address: 'Loggia Amblingh 41',
      image: '/assets/images/location/vasto.jpg',
      mapUrl: 'https://maps.google.com/?q=Vasto,+Loggia+Amblingh+41'
    },
    {
      id: 2,
      name: 'San Salvo Marina',
      address: 'Via Magellano 103',
      image: '/assets/images/location/san-salvo.jpg',
      mapUrl: 'https://maps.google.com/?q=San+Salvo+Marina,+via+Magellano+103'
    }
  ];
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Animazione del titolo
    const titleElement = sectionRef.current.querySelector('h2');
    if (titleElement) {
      gsap.fromTo(
        titleElement,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center+=100',
            toggleActions: 'play none none none'
          }
        }
      );
    }
    
    // Animazione delle cards delle location
    const cards = sectionRef.current.querySelectorAll('.location-card');
    if (!cards || cards.length === 0) return;
    
    cards.forEach((card, index) => {
      if (!card) return;
      
      gsap.fromTo(
        card,
        { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.3,
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=150',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }, []);
  
  return (
    <section
      ref={sectionRef}
      className="locations-section"
      style={{
        padding: '100px 0',
        background: 'white',
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h2 
          style={{ 
            textAlign: 'center',
            color: '#3B83BD',
            fontSize: '42px',
            marginBottom: '60px'
          }}
        >
          Le Nostre Sedi
        </h2>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
          {locations.map((location) => (
            <div 
              key={location.id}
              className="location-card"
              style={{
                flex: '1 1 500px',
                maxWidth: '500px',
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  y: -10,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                  duration: 0.3
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  y: 0,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  duration: 0.3
                });
              }}
            >
              <div 
                style={{
                  height: '300px',
                  backgroundImage: `url(${location.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              
              <div style={{ padding: '30px' }}>
                <h3 style={{ 
                  color: '#3B83BD', 
                  fontSize: '28px',
                  marginTop: 0,
                  marginBottom: '10px'
                }}>
                  {location.name}
                </h3>
                
                <p style={{ 
                  color: '#666',
                  fontSize: '18px',
                  marginBottom: '20px'
                }}>
                  {location.address}
                </p>
                
                <a 
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    color: '#3B83BD',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    padding: '8px 0',
                    borderBottom: '2px solid #3B83BD'
                  }}
                >
                  Vedi sulla mappa
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SediMap;
