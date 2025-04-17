import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registra il plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Array di esempio dei gusti di gelato
const gelatiGusti = [
  {
    id: 1,
    nome: 'Fragola',
    descrizione: 'Gelato alla fragola con pezzi di frutta fresca',
    immagine: '/assets/images/gelati/fragola.jpg',
    colore: '#E5446D'
  },
  {
    id: 2,
    nome: 'Pistacchio',
    descrizione: 'Cremoso gelato al pistacchio di Bronte',
    immagine: '/assets/images/gelati/pistacchio.jpg',
    colore: '#97C15C'
  },
  {
    id: 3,
    nome: 'Cioccolato',
    descrizione: 'Intenso gelato al cioccolato fondente',
    immagine: '/assets/images/gelati/cioccolato.jpg',
    colore: '#583C2F'
  },
  {
    id: 4,
    nome: 'Stracciatella',
    descrizione: 'Gelato alla panna con scaglie di cioccolato',
    immagine: '/assets/images/gelati/stracciatella.jpg',
    colore: '#F2F2F2'
  },
  {
    id: 5,
    nome: 'Mango',
    descrizione: 'Sorbetto al mango tropicale',
    immagine: '/assets/images/gelati/mango.jpg',
    colore: '#FFB736'
  },
  {
    id: 6,
    nome: 'Nocciola',
    descrizione: 'Gelato alla nocciola piemontese',
    immagine: '/assets/images/gelati/nocciola.jpg',
    colore: '#B3724A'
  }
];

// Componente singola card per un gusto di gelato
function GustoCard({ gusto, index }) {
  const cardRef = useRef(null);
  
  useEffect(() => {
    if (!cardRef.current) return;
    
    // Animazione all'hover
    gsap.to(cardRef.current, {
      scale: 1,
      duration: 0.4,
      clearProps: 'all'
    });
    
    // Evento hover
    const handleMouseEnter = () => {
      if (!cardRef.current) return;
      gsap.to(cardRef.current, {
        y: -10,
        scale: 1.05,
        boxShadow: '0 20px 30px rgba(0,0,0,0.15)',
        duration: 0.3
      });
    };
    
    const handleMouseLeave = () => {
      if (!cardRef.current) return;
      gsap.to(cardRef.current, {
        y: 0,
        scale: 1,
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        duration: 0.3
      });
    };
    
    cardRef.current.addEventListener('mouseenter', handleMouseEnter);
    cardRef.current.addEventListener('mouseleave', handleMouseLeave);
    
    // Animazione di entrata iniziale
    gsap.fromTo(cardRef.current, 
      { 
        y: 100, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none none'
        }
      }
    );
    
    // Cleanup
    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener('mouseenter', handleMouseEnter);
        cardRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [index]);
  
  return (
    <div 
      ref={cardRef}
      className="gusto-card" 
      style={{
        background: 'white',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        margin: '15px',
        maxWidth: '300px',
        transition: 'transform 0.3s ease',
        border: `2px solid ${gusto.colore}`
      }}
    >
      <div 
        className="gusto-img" 
        style={{
          height: '200px',
          backgroundImage: `url(${gusto.immagine})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="gusto-content" style={{ padding: '20px' }}>
        <h3 style={{ 
          color: gusto.colore, 
          margin: '0 0 10px 0',
          fontSize: '24px'
        }}>
          {gusto.nome}
        </h3>
        <p style={{ 
          margin: '0',
          color: '#666',
          fontSize: '16px'
        }}>
          {gusto.descrizione}
        </p>
      </div>
    </div>
  );
}

// Componente principale del carosello
function GustiCarousel({ hideTitle = false }) {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Animazione del titolo della sezione
    const titleElement = sectionRef.current.querySelector('h2');
    if (titleElement) {
      gsap.fromTo(
        titleElement,
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center+=100',
            toggleActions: 'play none none none'
          }
        }
      );
    }
    
    // Animazione della descrizione
    const descElement = sectionRef.current.querySelector('p.section-desc');
    if (descElement) {
      gsap.fromTo(
        descElement,
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center+=100',
            toggleActions: 'play none none none'
          }
        }
      );
    }
    
    // Animazione orizzontale del carosello (opzionale)
    /*
    gsap.to(carouselRef.current, {
      x: -carouselRef.current.scrollWidth + window.innerWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: carouselRef.current,
        start: 'top center',
        end: '+=2000',
        scrub: 1,
        pin: true
      }
    });
    */
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="gusti-section" 
      style={{
        padding: '80px 0',
        background: '#f9f9f9'
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        {!hideTitle && (
          <h2 
            style={{
              textAlign: 'center',
              color: '#3B83BD',
              fontSize: '42px',
              marginBottom: '20px'
            }}
          >
            I Nostri Gusti
          </h2>
        )}
        
        <p 
          className="section-desc"
          style={{
            textAlign: 'center',
            color: '#666',
            fontSize: '18px',
            maxWidth: '600px',
            margin: '0 auto 50px auto'
          }}
        >
          Scopri la nostra selezione di gelati artigianali, preparati ogni giorno con ingredienti freschi e di alta qualità
        </p>
        
        <div 
          ref={carouselRef}
          className="gusti-carousel" 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px'
          }}
        >
          {gelatiGusti.map((gusto, index) => (
            <GustoCard key={gusto.id} gusto={gusto} index={index} />
          ))}
        </div>
        
        <div 
          className="carousel-actions" 
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '40px'
          }}
        >
          <button 
            className="btn-secondary"
            style={{
              background: '#3B83BD',
              color: 'white',
              border: 'none',
              padding: '12px 25px',
              borderRadius: '30px',
              fontSize: '16px',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(59, 131, 189, 0.3)'
            }}
          >
            Scopri tutti i gusti
          </button>
        </div>
      </div>
    </section>
  );
}

export default GustiCarousel;
