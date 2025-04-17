import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ChiSiamo from './pages/ChiSiamo';
import Gusti from './pages/Gusti';
import Contatti from './pages/Contatti';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/globals.css';
import './styles/header.css';

// Registra il plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Wrapper per gestire meglio gli errori
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div style={{padding: '40px', textAlign: 'center'}}>
        <h2>Qualcosa è andato storto.</h2>
        <button 
          onClick={() => window.location.reload()}
          style={{
            background: '#3B83BD',
            color: 'white',
            border: 'none',
            padding: '12px 25px',
            borderRadius: '30px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Ricarica la pagina
        </button>
      </div>;
    }

    return this.props.children; 
  }
}

// Cleanup globale per ScrollTrigger quando si dismonta l'app
const ScrollTriggerCleanup = ({ children }) => {
  React.useEffect(() => {
    return () => {
      // Pulisce tutte le istanze di ScrollTrigger quando l'app viene smontata
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return children;
};

// Importa l'App.js che contiene l'header e il footer
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <ScrollTriggerCleanup>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ScrollTriggerCleanup>
  </ErrorBoundary>
);
