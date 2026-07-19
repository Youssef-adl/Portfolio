import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-name-anim', 
        { y: 80, opacity: 0, skewY: 3 }, 
        { y: 0, opacity: 1, skewY: 0, duration: 1.2, ease: 'power4.out', delay: 2.2, stagger: 0.15 }
      );
      gsap.fromTo('.hero-sub-anim',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 2.8, stagger: 0.1 }
      );
      gsap.fromTo('.hero-cta-anim',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 3.1 }
      );
      gsap.fromTo('.hero-next-anim',
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, ease: 'power2.out', delay: 3.3 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #060804 0%, #0a0d04 40%, #0e1208 100%)' }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 25 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={`${(i+1)*4}%`} x2="100%" y2={`${(i+1)*4}%`} stroke="#D2FF00" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 16 }).map((_, i) => (
            <line key={`v${i}`} x1={`${(i+1)*6}%`} y1="0" x2={`${(i+1)*6}%`} y2="100%" stroke="#D2FF00" strokeWidth="0.5" />
          ))}
        </svg>
      </div>

      {/* Radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: '10%', top: '15%', width: '50vw', height: '60vh',
          background: 'radial-gradient(ellipse at 60% 40%, rgba(210,255,0,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-16 pt-28 w-full">
        {/* Title + Role */}
        <div className="mb-12">
          <h1 className="hero-name-anim hero-name-text">ADLANI</h1>
          <h1 className="hero-name-anim hero-name-text" style={{ color: 'var(--color-ln-lime)' }}>YOUSSOUF</h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="hero-sub-anim flex items-center gap-3 mb-4">
              <div className="section-divider" />
              <span className="section-label">Développeur Web Full Stack</span>
            </div>
            <p className="hero-sub-anim hero-subtitle text-white/40 mb-6">
              Passionné par le Clean Code & le Design Bauhaus
            </p>
            <div className="hero-cta-group hero-cta-anim">
              <a href="#projets" className="btn-ln-primary">Voir mes projets</a>
              <a href="/CV_Youssef_Adlani.pdf" download className="btn-ln-ghost flex items-center gap-2">
                Télécharger CV
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Next Project badge */}
          <div className="hero-next-anim next-badge">
            <span className="w-2 h-2 rounded-full bg-ln-lime animate-pulse" />
            <div className="flex flex-col">
              <span className="font-display text-[9px] uppercase tracking-[0.3em] text-ln-lime font-700">Prochain Projet</span>
              <span className="font-display text-sm font-600 text-white">Smart Veo 2.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="tap-lock-indicator">Scroll to explore</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-ln-lime/50 to-transparent animate-pulse" />
      </div>

      {/* Decorative corner */}
      <div className="absolute top-24 right-8 md:right-16 flex flex-col items-end gap-2 hero-sub-anim">
        <span className="font-display text-[9px] uppercase tracking-[0.35em] text-white/30">Basé à</span>
        <span className="font-display text-2xl md:text-4xl font-700 tracking-wider uppercase text-white">TEMARA</span>
        <span className="font-display text-[10px] font-500 tracking-[0.3em] uppercase text-white/40">MAROC</span>
      </div>
    </section>
  );
};

export default HeroSection;
