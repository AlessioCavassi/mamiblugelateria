import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Wrapper di sicurezza per elementi animati
function AnimatedElement({ children, animation = 'fadeUp', delay = 0, className = '', style = {} }) {
  const elementRef = useRef(null);
  
  useEffect(() => {
    if (!elementRef.current) return;
    
    const animations = {
      fadeUp: {
        from: { y: 50, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 0.8 }
      },
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1, duration: 0.8 }
      },
      fadeLeft: {
        from: { x: -50, opacity: 0 },
        to: { x: 0, opacity: 1, duration: 0.8 }
      },
      fadeRight: {
        from: { x: 50, opacity: 0 },
        to: { x: 0, opacity: 1, duration: 0.8 }
      }
    };
    
    const selectedAnimation = animations[animation] || animations.fadeUp;
    
    gsap.fromTo(
      elementRef.current,
      selectedAnimation.from,
      {
        ...selectedAnimation.to,
        delay,
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none none'
        }
      }
    );
  }, [animation, delay]);
  
  return (
    <div
      ref={elementRef}
      className={className}
      style={style}
    >
      {children}
    </div>
  );
}

export default AnimatedElement;
