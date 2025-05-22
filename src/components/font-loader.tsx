'use client';

import { useEffect } from 'react';

export default function FontLoader() {
  useEffect(() => {
    // Load Times New Roman font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Times+New+Roman:ital,wght@0,400;0,700;1,400;1,700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return null;
}
