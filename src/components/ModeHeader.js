import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import '../styles/header.css';

const ModeHeader = () => {
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    // Animazione di entrata dell'header
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
    );
  }, []);
  
  // Chiudi il menu quando cambia la pagina
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'I Nostri Gusti', path: '/gusti' },
    { name: 'Chi Siamo', path: '/chi-siamo' },
    { name: 'Contatti', path: '/contatti' }
  ];
  
  return (
    <header 
      ref={headerRef}
      className={`header ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img 
              src="/assets/images/logo.png" 
              alt="Mamiblu Logo" 
            />
            <span>Mamiblu'</span>
          </Link>
        </div>
        
        {/* Menu Desktop */}
        <nav className="desktop-menu">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
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
        
        {/* Menu Mobile */}
        <div 
          className="mobile-menu-toggle"
          onClick={toggleMenu}
        >
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      
      {/* Mobile menu overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default ModeHeader;
