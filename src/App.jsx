import React, { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import MarqueeSection from './components/MarqueeSection'
import HeroSection from './components/HeroSection'
import ManifesteSection from './components/ManifesteSection'
import OnTrackSection from './components/OnTrackSection'
import OffTrackSection from './components/OffTrackSection'
import HallOfFameSection from './components/HallOfFameSection'
import StoreSection from './components/StoreSection'
import SocialFooter from './components/SocialFooter'

gsap.registerPlugin(ScrollTrigger);

/**
 * Loader Component
 */
const Loader = ({ finished }) => (
  <div className={`loader-wrapper ${finished ? 'hidden' : ''}`}>
    <div className="loader-content">
      <div className="font-display text-ln-lime text-[10px] font-700 tracking-[0.5em] uppercase">ADLANI YOUSSOUF</div>
      <div className="loader-bar">
        <div className="loader-progress"></div>
      </div>
    </div>
  </div>
);

/**
 * Mobile Rotation Overlay
 */
const MobileOverlay = () => {
  const [isPortrait, setIsPortrait] = useState(
    typeof window !== 'undefined' && window.innerWidth < 768 && window.innerHeight > window.innerWidth
  );

  useEffect(() => {
    const check = () => {
      setIsPortrait(window.innerWidth < 768 && window.innerHeight > window.innerWidth);
    };
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (!isPortrait) return null;

  return (
    <div className="mobile-overlay">
      <svg className="w-12 h-12 text-ln-lime animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
      <p className="font-display text-xs font-700 uppercase tracking-[0.3em] text-white/60 text-center px-8">
        Please rotate your device
      </p>
      <p className="font-body text-[10px] text-white/30 text-center px-8">
        This is a vertical drive
      </p>
    </div>
  );
};

/**
 * Main Application
 */
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);

    // Smooth scroll with Lenis
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenis.on('scroll', ScrollTrigger.update);
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // SEO
    document.title = "ADLANI YOUSSOUF | Développeur Web Full Stack";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Portfolio de Adlani Youssouf, Développeur Web Full Stack spécialisé en React 19, Node.js, Three.js et GSAP. Passionné par le Clean Code et le design Bauhaus.";

    // Nav animations
    gsap.fromTo('.nav-element', 
      { y: -15, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.06, ease: 'power2.out', delay: 1.9 }
    );

    // Scroll reveals
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

    return () => {
      clearTimeout(timer);
      lenis.destroy();
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { label: 'On Track', href: '#skills' },
    { label: 'Off Track', href: '#offtrack' },
    { label: 'Hall of Fame', href: '#projets' },
    { label: 'Partnerships', href: '#partnerships' },
    { label: 'Store', href: '#store' },
  ];

  return (
    <div className="min-h-screen text-ln-white" style={{ background: '#060804' }}>
      <Loader finished={!loading} />
      <MobileOverlay />

      {/* ── Navigation ── */}
      <header role="banner">
        <nav
          className="fixed top-0 left-0 right-0 z-[50] flex justify-between items-center px-6 md:px-10 py-4"
          style={{ background: 'rgba(6, 8, 4, 0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(210,255,0,0.04)' }}
          aria-label="Navigation principale"
        >
          <a href="#home" className="font-display text-base font-700 tracking-tight text-white hover:text-ln-lime transition-colors duration-250 nav-element cursor-pointer uppercase flex items-center gap-1">
            ADLANI<span className="text-ln-lime">.</span>
          </a>
          <div className="flex gap-5 md:gap-7 items-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link hidden md:block nav-element cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="font-display text-[9px] font-700 uppercase tracking-[0.2em] bg-ln-lime text-ln-dark-green px-5 py-2.5 hover:bg-white transition-colors duration-250 nav-element cursor-pointer"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main>
        <HeroSection />
        <MarqueeSection />
        <ManifesteSection />
        <OnTrackSection />
        
        {/* Off Track wrapper with id */}
        <div id="offtrack">
          <OffTrackSection />
        </div>

        <HallOfFameSection />

        <div id="partnerships">
          <StoreSection />
        </div>

        <div id="store" />

        {/* Contact Section */}
        <ContactSection />

        <SocialFooter />
      </main>
    </div>
  );
}

/**
 * Contact Section (inline)
 */

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    if (data.get("_gotcha")) return;

    const formspreeId = import.meta.env.VITE_FORMSPREE_ID || "mgopagwl";
    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      setFormStatus("Merci ! Votre message a été envoyé.");
      form.reset();
    } else {
      setFormStatus("Erreur. Veuillez réessayer plus tard.");
    }
  };

  return (
    <section id="contact" className="py-28 md:py-40 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #080a04 0%, #060804 100%)' }}>
      <div className="ln-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Info */}
          <div className="w-full lg:w-2/5 reveal-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <div className="section-divider" />
              <span className="section-label">Contact</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-700 tracking-tight text-white leading-none mb-6">
              PARLONS DE<br/>VOTRE <span className="text-ln-lime">PROJET</span>
            </h2>
            <p className="font-body text-white/40 mb-10 max-w-sm text-sm">
              Disponible pour de nouvelles opportunités en développement Full-Stack et créatif.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-ln-lime/50 transition-colors duration-300">
                  <svg className="w-4 h-4 text-ln-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-display text-[9px] uppercase tracking-[0.25em] text-white/30 mb-0.5">Email</p>
                  <a href="mailto:youssoufadlani@gmail.com" className="font-display text-sm text-white hover:text-ln-lime transition-colors">youssoufadlani@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-ln-lime/50 transition-colors duration-300">
                  <svg className="w-4 h-4 text-ln-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-display text-[9px] uppercase tracking-[0.25em] text-white/30 mb-0.5">Localisation</p>
                  <p className="font-display text-sm text-white">Temara, Maroc</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-3/5 reveal-on-scroll">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-display text-[9px] uppercase tracking-[0.25em] text-white/40">Nom Complet</label>
                  <input required type="text" name="name" id="name" placeholder="John Doe" className="bg-transparent border-b border-white/10 py-3 px-1 text-white text-sm focus:border-ln-lime outline-none transition-colors duration-300" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-display text-[9px] uppercase tracking-[0.25em] text-white/40">Email</label>
                  <input required type="email" name="email" id="email" placeholder="john@example.com" className="bg-transparent border-b border-white/10 py-3 px-1 text-white text-sm focus:border-ln-lime outline-none transition-colors duration-300" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="font-display text-[9px] uppercase tracking-[0.25em] text-white/40">Sujet</label>
                <input required type="text" name="subject" id="subject" placeholder="Collaboration, Recrutement..." className="bg-transparent border-b border-white/10 py-3 px-1 text-white text-sm focus:border-ln-lime outline-none transition-colors duration-300" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-display text-[9px] uppercase tracking-[0.25em] text-white/40">Message</label>
                <textarea required name="message" id="message" rows="5" placeholder="Votre message ici..." className="bg-transparent border border-white/10 p-4 text-white text-sm focus:border-ln-lime outline-none transition-colors duration-300 resize-none"></textarea>
              </div>

              <input type="text" name="_gotcha" style={{ display: 'none' }} />

              <button type="submit" className="btn-ln-primary w-full py-4 mt-2 text-[10px] tracking-[0.3em]">
                Envoyer le message
              </button>

              {formStatus && (
                <p className={`mt-2 text-[10px] font-display uppercase tracking-widest text-center ${formStatus.includes('Erreur') ? 'text-red-400' : 'text-ln-lime'}`}>
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App
