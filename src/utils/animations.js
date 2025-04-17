// Utility per animazioni GSAP
import { gsap } from 'gsap';

export function animateIn(ref, options = {}) {
  if (ref.current) {
    gsap.fromTo(ref.current, {
      opacity: 0,
      y: 60
    }, {
      opacity: 1,
      y: 0,
      duration: 1.1,
      ease: 'power3.out',
      ...options
    });
  }
}
