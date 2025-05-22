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
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  }, observerOptions);

  // Observe all elements with fade-in class
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(element => observer.observe(element));

  return () => observer.disconnect();
}

export default function ScrollAnimations() {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return null;
}
