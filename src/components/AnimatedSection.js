import React, { useRef, useEffect } from 'react';
import { animateIn } from '../utils/animations';

function AnimatedSection({ children, ...props }) {
  const sectionRef = useRef();
  useEffect(() => {
    animateIn(sectionRef);
  }, []);
  return (
    <section ref={sectionRef} {...props}>
      {children}
    </section>
  );
}

export default AnimatedSection;
