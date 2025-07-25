import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Se activa cuando entra o sale del viewport
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // 10% visible ya activa la animación
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return [ref, isVisible];
}