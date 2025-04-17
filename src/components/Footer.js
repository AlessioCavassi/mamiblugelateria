import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{
      background: '#3B83BD',
      color: 'white',
      padding: '60px 0 40px 0'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px' }}>
          <div style={{ flex: '1 1 300px' }}>
            <img src="/assets/logo.svg" alt="Mamiblu Gelateria" height="40" style={{ marginBottom: '20px', filter: 'brightness(0) invert(1)' }} />
            <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
              Dal 2010, Gelateria Mamiblu' porta avanti la tradizione del gelato artigianale italiano, combinando ricette tradizionali con innovazione e creatività.
            </p>
          </div>
          
          <div style={{ flex: '1 1 250px' }}>
            <h3 style={{ fontSize: '22px', marginBottom: '20px', fontWeight: 'bold' }}>Contatti</h3>
            <p style={{ fontSize: '16px', marginBottom: '10px' }}>
              <strong>Email:</strong> info@mamiblu.it
            </p>
            <p style={{ fontSize: '16px', marginBottom: '10px' }}>
              <strong>Telefono:</strong> +39 0873 123456
            </p>
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 6.5H17.51" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div style={{ flex: '1 1 250px' }}>
            <h3 style={{ fontSize: '22px', marginBottom: '20px', fontWeight: 'bold' }}>Le Nostre Sedi</h3>
            <p style={{ fontSize: '16px', marginBottom: '10px' }}>
              <strong>Vasto:</strong> Loggia Amblingh 41
            </p>
            <p style={{ fontSize: '16px', marginBottom: '10px' }}>
              <strong>San Salvo Marina:</strong> Via Magellano 103
            </p>
          </div>
        </div>
        
        <div style={{ marginTop: '60px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '20px' }}>
          <p style={{ fontSize: '14px' }}>
            © {new Date().getFullYear()} Gelateria Mamiblu'. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
