import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registra il plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function ChiSiamo() {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    // Animazione dei contenuti al momento dello scroll
    if (!sectionRef.current) return;
    
    const elements = sectionRef.current.querySelectorAll('.animated-element');
    if (!elements || elements.length === 0) return;
    
    elements.forEach((el, index) => {
      if (!el) return;
      
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: el,
            start: 'top bottom-=100',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }, []);
  
  return (
    <section
      ref={sectionRef}
      className="chi-siamo-section"
      style={{
        padding: '100px 0',
        background: '#E6C992', // Colore beige/dorato
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
          <div style={{ flex: '1 1 500px' }}>
            <h2 
              className="animated-element"
              style={{ 
                color: '#3B83BD', 
                fontSize: '42px', 
                marginBottom: '20px' 
              }}
            >
              Chi Siamo
            </h2>
            
            <p 
              className="animated-element"
              style={{ 
                fontSize: '18px',
                lineHeight: '1.6',
                color: '#333',
                marginBottom: '20px'
              }}
            >
              Dal 2010, Gelateria Mamiblu' porta avanti la tradizione del gelato artigianale italiano, combinando ricette tradizionali con innovazione e creatività.
            </p>
            
            <p 
              className="animated-element"
              style={{ 
                fontSize: '18px',
                lineHeight: '1.6',
                color: '#333',
                marginBottom: '20px'
              }}
            >
              Ogni gusto viene preparato giornalmente nei nostri laboratori, utilizzando solo ingredienti freschi e di prima qualità, senza conservanti o coloranti artificiali.
            </p>
            
            <p 
              className="animated-element"
              style={{ 
                fontSize: '18px',
                lineHeight: '1.6',
                color: '#333',
                marginBottom: '20px'
              }}
            >
              La nostra passione per il gelato ci ha portato ad aprire due sedi, a Vasto e San Salvo Marina, dove potete venire a gustare le nostre creazioni.
            </p>
            
            <button 
              className="animated-element btn-primary"
              style={{
                background: '#3B83BD',
                color: 'white',
                border: 'none',
                padding: '12px 25px',
                borderRadius: '30px',
                fontSize: '16px',
                cursor: 'pointer',
                boxShadow: '0 4px 10px rgba(59, 131, 189, 0.3)',
                marginTop: '20px'
              }}
            >
              Scopri di più
            </button>
          </div>
          
          <div 
            className="animated-element"
            style={{ 
              flex: '1 1 400px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
            }}
          >
            <img 
              src="/assets/images/location/laboratorio.jpg" 
              alt="Laboratorio Gelateria Mamiblu'" 
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChiSiamo;
