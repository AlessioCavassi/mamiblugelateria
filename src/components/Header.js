import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import '../styles/header.css';
import '../styles/gelatinoEffect.css';
import GelatinoEffect from './GelatinoEffect';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const headerRef = useRef(null);
  const location = useLocation();
  
  // Definizione degli elementi del menu
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'I Nostri Gusti', path: '/gusti' },
    { name: 'Chi Siamo', path: '/chi-siamo' },
    { name: 'Contatti', path: '/contatti' }
  ];
  
  // Stato per l'header

  useEffect(() => {
    // Animazione iniziale
    const tl = gsap.timeline();

    if (logoRef.current) {
      tl.fromTo(logoRef.current, 
        { y: -50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );
    }

    if (navRef.current && navRef.current.children) {
      tl.fromTo(navRef.current.children, 
        { y: -30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' },
        '-=0.3'
      );
    }

    // Effetto scroll - header che diventa più piccolo
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Chiudi il menu mobile quando cambia la route
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);



  return (
    <header 
      ref={headerRef}
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        padding: isScrolled ? '10px 0' : '20px 0',
        transition: 'padding 0.3s ease, box-shadow 0.3s ease',
        background: 'white', /* Background sempre bianco */
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'
      }}

    >
      {/* Effetto gelato di sottofondo */}
      <GelatinoEffect />
      
      <div 
        className="container"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        <div className="logo">
          <Link 
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none'
            }}
          >
            <span 
              style={{
                fontFamily: "'Pacifico', cursive",
                color: '#3B83BD', // Colore blu del tema
                fontSize: '2rem',
                fontWeight: 'bold',
                textShadow: '1px 1px 2px rgba(255, 255, 255, 0.5)' // Aggiunto leggero text shadow per migliorare la leggibilità
              }}
            >
              Mamiblu Gelateria
            </span>
          </Link>
        </div>
        
        {/* Menu Desktop */}
        <nav ref={navRef} className={mobileMenuOpen ? 'mobile-open' : ''}>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} style={{ '--i': index }}>
                <Link 
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Pulsante menu mobile */}
        <div className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      {/* Bordo arcobaleno che si muove */}
      <div className="rainbow-border"></div>
    </header>
  );
}

export default Header;
