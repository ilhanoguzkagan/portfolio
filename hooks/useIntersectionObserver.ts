import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            setActiveSection(entry.target.id);
          }
        });
      },
      options
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [options]);

  return { sectionsRef, activeSection };
}
