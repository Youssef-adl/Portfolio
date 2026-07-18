import React, { useEffect, useState, useCallback } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Preloader from './components/Preloader';
import DynamicCaption from './components/DynamicCaption';
// ... (imports remain the same)
import Hero from './components/Hero';
// ...

const SECTIONS = [
  { id: 'hero', caption: '01 — The Foundation' },
  { id: 'about', caption: '02 — The Architect' },
  { id: 'skills', caption: '03 — The Tools' },
  { id: 'projects', caption: '04 — The Structure' },
  { id: 'contact', caption: '05 — The Connection' }
];

function App() {
  const [loaded, setLoaded] = useState(false);
  const handleLoadComplete = useCallback(() => setLoaded(true), []);

  // ... (useEffect remains the same)

  return (
    <div className="bg-bg-primary text-white min-h-screen relative">
      <Preloader onComplete={handleLoadComplete} />

      {loaded && (
        <>
          <DynamicCaption sections={SECTIONS} />
          {/* ... (rest of the content) */}
          <main className="relative z-10">
            <Hero />
            {/* ... */}
          </main>
        </>
      )}
    </div>
  );
}
