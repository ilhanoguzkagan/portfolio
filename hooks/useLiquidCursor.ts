import { useEffect, useRef } from 'react';

export function useLiquidCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let rafId: number | null = null;
    let mouseX = 0;
    let mouseY = 0;

    const updatePosition = () => {
      cursor.style.left = `${mouseX - 15}px`;
      cursor.style.top = `${mouseY - 15}px`;
      rafId = null;
    };

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!rafId) {
        rafId = requestAnimationFrame(updatePosition);
      }
    };

    const addHoverEffect = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a'))) {
        cursor.classList.add('hover');
      } else {
        cursor.classList.remove('hover');
      }
    };

    const addClickEffect = () => {
      cursor.classList.add('click');
      setTimeout(() => {
        cursor.classList.remove('click');
      }, 200);
    };

    // Set initial visibility
    cursor.style.opacity = '1';

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', addHoverEffect);
    document.addEventListener('mousedown', addClickEffect);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', addHoverEffect);
      document.removeEventListener('mousedown', addClickEffect);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return cursorRef;
}