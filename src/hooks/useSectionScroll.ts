import { useEffect } from 'react';

export function useSectionScroll() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is interacting with an input, textarea, etc.
      if (
        document.activeElement &&
        ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)
      ) {
        return;
      }

      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();

        // Get all main structural blocks in the page in DOM order
        const selector = window.location.pathname === '/projects' 
          ? 'header, section, article, footer' 
          : 'header, section, footer';
        const sections = Array.from(document.querySelectorAll(selector));
        if (sections.length === 0) return;

        const currentScrollY = window.scrollY;
        const threshold = 10; // Pixel tolerance for float rounding

        let targetElement: HTMLElement | null = null;

        if (e.key === 'ArrowDown') {
          // Find the first element whose top is strictly below current scroll position
          targetElement = sections.find(
            (el) => (el as HTMLElement).offsetTop > currentScrollY + threshold
          ) as HTMLElement;
        } else if (e.key === 'ArrowUp') {
          // Find the last element whose top is strictly above current scroll position
          targetElement = [...sections].reverse().find(
            (el) => (el as HTMLElement).offsetTop < currentScrollY - threshold
          ) as HTMLElement;
        }

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          });
        }
      }
    };

    // Attach event listener with { passive: false } to allow preventDefault
    window.addEventListener('keydown', handleKeyDown, { passive: false });
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
}
