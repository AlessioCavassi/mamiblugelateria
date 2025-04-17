import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ChiSiamo from './pages/ChiSiamo';
import Gusti from './pages/Gusti';
import Contatti from './pages/Contatti';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/layout.css';

function App() {
  return (
    <div className="app-container">
      <div className="header-wrapper">
        <Header />
      </div>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/gusti" element={<Gusti />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
