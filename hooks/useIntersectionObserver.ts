import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const updateViewportState = () => {
      setIsMobileViewport(window.matchMedia('(max-width: 767px)').matches);
    };

    updateViewportState();
    window.addEventListener('resize', updateViewportState);

    return () => {
      window.removeEventListener('resize', updateViewportState);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mergedOptions: IntersectionObserverInit = {
      root: options?.root ?? null,
      rootMargin: options?.rootMargin ?? (isMobileViewport ? '20px 0px 20px 0px' : '0px 0px -20% 0px'),
      threshold: options?.threshold ?? (isMobileViewport ? 0.01 : 0.3),
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
          });
          setActiveSection(entry.target.id);
        }
      });
    }, mergedOptions);

    const delay = isMobileViewport ? 0 : 100;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const setupObserver = () => {
      sectionsRef.current.forEach((section) => {
        if (!section) return;

        observer.observe(section);

        if (isMobileViewport) {
          const rect = section.getBoundingClientRect();
          const isInViewport = rect.top < window.innerHeight * 1.2 && rect.bottom > -100;
          if (isInViewport) {
            section.classList.add('animate-fade-in-up');
            section.classList.remove('opacity-0');
            if (section.id) {
              setActiveSection(section.id);
            }
          }
        }
      });
    };

    if (delay === 0) {
      setupObserver();
    } else {
      timeoutId = setTimeout(setupObserver, delay);
    }

    return () => {
      observer.disconnect();
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [options, isMobileViewport]);

  return { sectionsRef, activeSection };
}
