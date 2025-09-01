import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Optimize for mobile performance
    const isMobile = window.innerWidth < 768;
    const optimizedOptions = {
      threshold: isMobile ? 0.1 : 0.2,
      rootMargin: isMobile ? '0px 0px -10% 0px' : '0px 0px -15% 0px'
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Use requestAnimationFrame for smoother animations
            requestAnimationFrame(() => {
              entry.target.classList.add('animate-fade-in-up');
              entry.target.classList.remove('opacity-0');
            });
            setActiveSection(entry.target.id);
          }
        });
      },
      options || optimizedOptions
    );

    // Add small delay for mobile to reduce initial load impact
    const delay = isMobile ? 150 : 100;
    const timeout = setTimeout(() => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.observe(section);
        }
      });
    }, delay);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [options]);

  return { sectionsRef, activeSection };
}
