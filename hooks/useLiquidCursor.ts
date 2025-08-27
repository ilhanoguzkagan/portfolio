import { useEffect, useRef } from 'react';

export function useLiquidCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX - 30}px`;
      cursor.style.top = `${e.clientY - 30}px`;
      // Remove the transform override to allow natural system-speed movement
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
    };
  }, []);

  return cursorRef;
}