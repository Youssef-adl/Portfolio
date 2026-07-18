import React, { useEffect, useState, useCallback } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Preloader from './components/Preloader';
import MagneticCursor from './components/MagneticCursor';
import ScrollProgress from './components/ScrollProgress';
import Navigation from './components/Navigation';
import SceneNav from './components/SceneNav';
import WaveDivider from './components/WaveDivider';
import Hero from './components/Hero';
import About from './components/About';
import Manifesto from './components/Manifesto';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loaded, setLoaded] = useState(false);
  const handleLoadComplete = useCallback(() => setLoaded(true), []);

  useEffect(() => {
    if (!loaded) return;
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    setTimeout(() => ScrollTrigger.refresh(), 800);
    return () => { lenis.destroy(); };
  }, [loaded]);

  return (
    <div className="bg-bg-primary text-white min-h-screen relative">
      <Preloader onComplete={handleLoadComplete} />

      {/* Persistent atmosphere: fixed gradient blobs bleed through every
          transparent section instead of hard per-section color blocks
          (CRAV-inspired continuous background) */}
      <div className="app-atmosphere">
        <div className="atmosphere-blob" style={{ backgroundImage: "url('/glow-maroon.png')", top: '-15%', left: '-10%', width: '70vw', height: '70vw', opacity: 0.35 }} />
        <div className="atmosphere-blob" style={{ backgroundImage: "url('/glow-camel.png')", top: '35%', right: '-15%', width: '60vw', height: '60vw', opacity: 0.28 }} />
        <div className="atmosphere-blob" style={{ backgroundImage: "url('/glow-mesh.png')", bottom: '-20%', left: '10%', width: '80vw', height: '60vw', opacity: 0.22 }} />
        <div className="atmosphere-blob glow-jade" style={{ top: '60%', left: '40%', width: '45vw', height: '45vw', opacity: 0.18, filter: 'blur(80px)' }} />
        <div className="grid-dots absolute inset-0 opacity-[0.15]" />
      </div>

      {loaded && (
        <>
          <Navigation />
          <SceneNav />
          <main className="relative z-10">
            <Hero />
            <About />
            <Manifesto />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Contact />
            <Footer />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
