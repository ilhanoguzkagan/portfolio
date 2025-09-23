import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Optimize for mobile performance
    const isMobile = window.innerWidth < 768;
    const optimizedOptions = {
      threshold: isMobile ? 0.01 : 0.2,
      rootMargin: isMobile ? '20px 0px 20px 0px' : '0px 0px -15% 0px'
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

    // Immediate setup - no delay on mobile
    const delay = isMobile ? 0 : 100;
    
    const setupObserver = () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.observe(section);
          // For mobile, immediately check all sections and make visible ones appear
          if (isMobile) {
            const rect = section.getBoundingClientRect();
            const isInViewport = rect.top < (window.innerHeight * 1.2) && rect.bottom > -100;
            if (isInViewport) {
              section.classList.add('animate-fade-in-up');
              section.classList.remove('opacity-0');
              if (section.id) {
                setActiveSection(section.id);
              }
            }
          }
        }
      });
    };

    if (delay === 0) {
      setupObserver();
    } else {
      const timeout = setTimeout(setupObserver, delay);
      return () => {
        observer.disconnect();
        clearTimeout(timeout);
      };
    }

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { sectionsRef, activeSection };
}
