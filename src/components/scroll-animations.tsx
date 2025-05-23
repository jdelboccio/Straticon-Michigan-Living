'use client';

import { useEffect } from 'react';

export function initScrollAnimations() {
  if (typeof window === 'undefined') return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add different animation classes based on data attributes
        if (entry.target.classList.contains('fade-in')) {
          entry.target.classList.add('visible');
        }
        if (entry.target.classList.contains('slide-up')) {
          entry.target.classList.add('slide-visible');
        }
        if (entry.target.classList.contains('scale-in')) {
          entry.target.classList.add('scale-visible');
        }
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .scale-in');
  animatedElements.forEach(element => {
    // Add initial state classes
    const htmlElement = element as HTMLElement;
    
    if (element.classList.contains('fade-in')) {
      htmlElement.style.opacity = '0';
      htmlElement.style.transform = 'translateY(30px)';
      htmlElement.style.transition = 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
    }
    if (element.classList.contains('slide-up')) {
      htmlElement.style.opacity = '0';
      htmlElement.style.transform = 'translateY(100px)';
      htmlElement.style.transition = 'opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1), transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
    }
    if (element.classList.contains('scale-in')) {
      htmlElement.style.opacity = '0';
      htmlElement.style.transform = 'scale(0.8)';
      htmlElement.style.transition = 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1), transform 1s cubic-bezier(0.4, 0, 0.2, 1)';
    }
    observer.observe(element);
  });

  // Add scroll-triggered parallax effect to sections
  const parallaxSections = document.querySelectorAll('.parallax-section');
  let ticking = false;

  const updateParallax = () => {
    parallaxSections.forEach((section) => {
      const htmlSection = section as HTMLElement;
      const distance = window.pageYOffset - htmlSection.offsetTop;
      const speed = 0.5;
      htmlSection.style.backgroundPositionY = `${distance * speed}px`;
    });
    ticking = false;
  };

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  };

  window.addEventListener('scroll', requestTick, { passive: true });

  // Add smooth scroll behavior to all internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
    anchor.addEventListener('click', function(this: HTMLAnchorElement, e: Event) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href) {
        document.querySelector(href)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  return () => {
    observer.disconnect();
    window.removeEventListener('scroll', requestTick);
  };
}

export default function ScrollAnimations() {
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return null;
}
