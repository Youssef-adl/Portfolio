import React, { useEffect, useRef, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'

import ImpactSection from './components/ImpactSection'
import MarqueeSection from './components/MarqueeSection'
import HorizontalScrollSection from './components/HorizontalScrollSection'
import SkillsSection from './components/SkillsSection'
import EducationSection from './components/EducationSection'
import ContactSection from './components/ContactSection'

/**
 * Main Application Component
 * Orchestrates the portfolio's lifecycle, including layout-level animations,
 * smooth scrolling initialization (Lenis), and global state management.
 * 
 * @returns {JSX.Element} The rendered application.
 */
/* ───────────────────────────────────────────────────────────────
   Components
─────────────────────────────────────────────────────────────── */

const Loader = ({ finished }) => (
  <div className={`loader-wrapper ${finished ? 'hidden' : ''}`}>
    <div className="loader-content">
      <div className="font-display text-ln-lime text-xs font-700 tracking-[0.5em] uppercase mb-2">Adlani Youssouf</div>
      <div className="loader-bar">
        <div className="loader-progress"></div>
      </div>
    </div>
  </div>
);

const AnimatedGrid = () => (
  <div className="hero-bg-grid overflow-hidden">
    {Array.from({ length: 8 }).map((_, i) => (
      <div key={`h-${i}`} className="grid-line horizontal" style={{ top: `${i * 15}%`, '--delay': `${i * 0.5}s`, '--ty': '50px' }} />
    ))}
    {Array.from({ length: 10 }).map((_, i) => (
      <div key={`v-${i}`} className="grid-line vertical" style={{ left: `${i * 10}%`, '--delay': `${i * 0.8}s`, '--tx': '30px' }} />
    ))}
  </div>
);

const HudGrid = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    {Array.from({ length: 20 }).map((_, i) => (
      <line key={`h${i}`} x1="0" y1={`${(i + 1) * 5}%`} x2="100%" y2={`${(i + 1) * 5}%`} stroke="#D2FF00" strokeOpacity="0.04" strokeWidth="1" />
    ))}
    {Array.from({ length: 14 }).map((_, i) => (
      <line key={`v${i}`} x1={`${(i + 1) * 7}%`} y1="0" x2={`${(i + 1) * 7}%`} y2="100%" stroke="#D2FF00" strokeOpacity="0.03" strokeWidth="1" />
    ))}
  </svg>
);

function App() {
  const heroRef = useRef(null);
  const hoverImgRef = useRef(null);
  const [loading, setLoading] = useState(true);

  const handleMouseMove = (e) => {
    if (!hoverImgRef.current) return;
    const rect = hoverImgRef.current.getBoundingClientRect();
    hoverImgRef.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    hoverImgRef.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    const ctx = gsap.context(() => {
      // Set Document Metadata (SEO Proof)
      document.title = "ADLANI YOUSSOUF | Développeur Web Full Stack";
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = "Portfolio de Adlani Youssouf, Développeur Web Full Stack spécialisé en React 19, Node.js et PHP. Passionné par le Clean Code et le design Bauhaus.";

      // Entry animations with Power3/Power4 eases for premium feel
      gsap.fromTo('.hero-name', { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 2.1 });
      gsap.fromTo('.hero-badge', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 2.5 });
      gsap.fromTo('.hero-location', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 2.7 });
      gsap.fromTo('.nav-element', { y: -15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power2.out', delay: 2 });
    }, heroRef); // Scoped to heroRef for modular integrity

    // Intersection Observer for Scroll Reveals (Paint/Composite optimized)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    
    // Strict Cleanup Lifecycle
    return () => { 
      clearTimeout(timer); 
      lenis.destroy(); 
      ctx.revert(); 
      observer.disconnect(); 
    };
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen text-ln-white" style={{ background: '#14180e' }}>
      <Loader finished={!loading} />

      {/* ── Floating Navbar ── */}
      <header role="banner">
        <nav
          className="fixed top-0 left-0 right-0 z-[50] flex justify-between items-center px-6 md:px-10 py-4"
          style={{ background: 'rgba(16, 20, 10, 0.88)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(210,255,0,0.05)' }}
          aria-label="Navigation principale"
        >
          <a href="#home" className="font-display text-xl font-700 tracking-tight text-ln-white hover:text-ln-lime transition-colors duration-250 nav-element cursor-pointer uppercase">
            ADLANI YOUSSOUF<span className="text-ln-lime">.</span>
          </a>
          <div className="flex gap-6 md:gap-8 items-center">
            {[
              { label: 'Home',       href: '#home' },
              { label: 'About',      href: '#about' },
              { label: 'Skills',     href: '#skills' },
              { label: 'Projects',   href: '#projets' },
              { label: 'Experience', href: '#experience' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-display text-[11px] font-600 uppercase tracking-[0.2em] text-ln-white/60 hover:text-ln-white transition-colors duration-250 nav-element hidden md:block cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="font-display text-[11px] font-700 uppercase tracking-[0.2em] bg-ln-lime text-ln-dark-green px-6 py-2.5 hover:bg-white transition-colors duration-250 nav-element cursor-pointer"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section
          id="home"
          aria-label="Hero"
          className="relative h-screen flex items-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #12160c 0%, #1a1e12 50%, #0e1208 100%)' }}
          onMouseMove={handleMouseMove}
        >
          <AnimatedGrid />
          <HudGrid />
          <div
            className="absolute pointer-events-none"
            aria-hidden="true"
            style={{
              right: '5%', top: '10%', width: '55vw', height: '80vh',
              background: 'radial-gradient(ellipse at 60% 40%, rgba(210,255,0,0.06) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10 flex flex-col justify-between h-full pt-28 pb-16 px-8 md:px-14 lg:px-20 w-full pointer-events-none">
            <div className="hero-name">
              <h1 className="font-impact text-[10vw] md:text-[8vw] leading-none tracking-tight text-ln-white uppercase">ADLANI YOUSSOUF</h1>
            </div>

            <div className="flex flex-col gap-1.5 hero-badge pointer-events-none" style={{ marginTop: '-8vh' }}>
              <span className="font-display text-[10px] font-600 tracking-[0.3em] uppercase text-ln-white/40">Rôle</span>
              <div className="inline-flex items-center px-4 py-3 self-start mb-6" style={{ background: 'rgba(5,7,2,0.85)', border: '1px solid rgba(210,255,0,0.12)' }}>
                <span className="font-display text-base md:text-xl font-700 tracking-[0.12em] uppercase text-ln-white">Développeur Full Stack</span>
              </div>
              <div className="hero-cta-group">
                <a href="#contact" className="btn-ln-primary cursor-pointer">Me contacter</a>
                <a href="/CV_Youssef_Adlani.pdf" download className="btn-ln-ghost flex items-center gap-2 cursor-pointer">
                  CV 
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="absolute bottom-14 right-10 md:right-16 flex flex-col items-end gap-0.5 hero-location">
              <span className="font-display text-[9px] font-600 tracking-[0.35em] uppercase text-ln-white/40 mb-1">Basé à</span>
              <span className="font-display text-3xl md:text-5xl font-700 tracking-wider uppercase text-ln-white">TEMARA</span>
              <span className="font-display text-xs md:text-sm font-500 tracking-[0.35em] uppercase text-ln-white/50 mt-0.5">MAROC</span>
              <div className="mt-2 flex flex-col items-end gap-1" aria-hidden="true">
                <div className="h-[2px] w-24 bg-ln-lime opacity-70" />
                <div className="h-[1px] w-14 bg-ln-lime opacity-35" />
              </div>
            </div>
          </div>

          <div className="hero-img-wrapper absolute right-0 top-0 bottom-0 z-[8] pointer-events-auto group" style={{ width: 'clamp(340px, 58vw, 860px)', borderLeft: '1px solid rgba(210,255,0,0.06)' }}>
            <img src="/images/hero.png" alt="Youssouf Adlani" className="absolute inset-x-0 bottom-0 w-full h-full object-contain object-right-bottom transition-transform duration-[800ms] ease-[cubic-bezier(0.65,0.05,0,1)] group-hover:scale-[1.02]" />
            <img ref={hoverImgRef} src="/images/hero-hover.png" alt="" aria-hidden="true" className="absolute inset-x-0 bottom-0 w-full h-full object-contain object-right-bottom pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ maskImage: 'radial-gradient(circle 380px at var(--mouse-x, 50%) var(--mouse-y, 50%), black 40%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle 380px at var(--mouse-x, 50%) var(--mouse-y, 50%), black 40%, transparent 100%)' }} />
            
            {/* Decorative corners to match Bauhaus style */}
            <div className="absolute top-10 left-10 w-6 h-6 border-t-2 border-l-2 border-ln-lime z-10 opacity-60" aria-hidden="true" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-ln-lime z-20 opacity-60" aria-hidden="true" />
        </section>

        <MarqueeSection />
        <ImpactSection />
        <SkillsSection />
        <EducationSection />
        <HorizontalScrollSection />
        

        <ContactSection />
      </main>

      <footer className="py-8 border-t border-white/5 px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4 bg-ln-dark-green text-[9px] text-white/20 uppercase tracking-[0.3em] font-display">
        <div className="flex gap-8">
          <a href="https://github.com/Youssef-adl" target="_blank" rel="noopener noreferrer" className="hover:text-ln-lime transition-colors">Github</a>
          <a href="#" className="hover:text-ln-lime transition-colors">LinkedIn</a>
        </div>
        <span>© 2026 Adlani Youssouf · Développeur Web Full Stack</span>
      </footer>
    </div>
  );
}

export default App;
