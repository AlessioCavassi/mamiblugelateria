import React from 'react';
import GustiCarousel from '../components/GustiCarousel';

function Gusti() {
  return (
    <main>
      <h2 style={{color: 'var(--color-primary)', fontFamily: 'Pacifico, cursive', fontSize: '2.2rem', textAlign: 'center', marginTop: '2rem'}}>I Nostri Gusti</h2>
      <GustiCarousel hideTitle={true} />
    </main>
  );
}

export default Gusti;
