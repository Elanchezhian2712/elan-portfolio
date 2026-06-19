'use client';

import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

export const FadeInContainer = ({ children }: { children: ReactNode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05, 
    rootMargin: '0px 0px -10% 0px', 
  });

  return (
    <div
      ref={ref}
      className={`will-change-transform transition-all duration-1000 ease-in-out transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};
