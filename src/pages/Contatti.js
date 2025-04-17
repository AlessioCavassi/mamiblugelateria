import React from 'react';

function Contatti() {
  return (
    <section style={{padding: '4rem 0', background: '#fff', textAlign: 'center'}}>
      <h2 style={{color: 'var(--color-primary)', fontFamily: 'Pacifico, cursive', fontSize: '2.2rem'}}>Contatti</h2>
      <p style={{maxWidth: 700, margin: '1.5rem auto', fontSize: '1.15rem'}}>
        Puoi trovarci nelle nostre sedi fisiche oppure scriverci una mail a <a href="mailto:info@mamiblu.it" style={{color: 'var(--color-primary)'}}>info@mamiblu.it</a>.<br/>
        Seguici su Instagram e Facebook per tutte le novità!
      </p>
    </section>
  );
}

export default Contatti;
