import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const partners = [
  { name: 'React 19', category: 'Frontend Framework' },
  { name: 'Node.js', category: 'Backend Runtime' },
  { name: 'Three.js', category: '3D WebGL' },
  { name: 'GSAP', category: 'Animation Engine' },
  { name: 'Tailwind CSS', category: 'Styling System' },
  { name: 'Vite', category: 'Build Tool' },
  { name: 'MySQL', category: 'SQL Database' },
  { name: 'MongoDB', category: 'NoSQL Database' },
];

const StoreSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.partner-item', {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.partners-grid', start: 'top 80%' }
      });
      gsap.from('.store-main', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.store-main', start: 'top 75%' }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 md:py-40 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #060804 0%, #0a0d04 100%)' }}
    >
      <div className="ln-container relative z-10">
        {/* Store Section - Hero Card */}
        <div className="store-main store-card rounded-2xl p-8 md:p-14 mb-24 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <span className="section-label mb-4 block">Collection Exclusive</span>
            <h2 className="font-display text-4xl md:text-6xl font-700 tracking-tight text-white leading-none mb-4">
              TECH <span className="text-ln-lime">STACK</span>
            </h2>
            <p className="font-body text-white/40 text-sm max-w-md mb-8">
              Célébrant les technologies qui propulsent mes projets. Chaque outil choisi avec précision pour la performance et l'élégance du code.
            </p>
            <a href="#skills" className="btn-ln-primary inline-flex items-center gap-2">
              Explorer le Stack
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          <div className="flex-shrink-0">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full flex items-center justify-center border border-ln-lime/20" style={{ background: 'radial-gradient(circle, rgba(210,255,0,0.06) 0%, transparent 70%)' }}>
              <div className="text-center">
                <span className="block font-impact text-5xl md:text-6xl text-ln-lime leading-none">15+</span>
                <span className="block font-display text-[9px] uppercase tracking-[0.3em] text-white/30 mt-2">Technologies</span>
              </div>
            </div>
          </div>
        </div>

        {/* Partners / Tech Grid */}
        <div>
          <div className="flex items-center gap-3 mb-4 reveal-on-scroll">
            <div className="section-divider" />
            <span className="section-label">Partenaires & Technologies</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-700 tracking-tight text-white leading-none mb-12 reveal-on-scroll">
            PARTNER<span className="text-white/20">SHIPS</span>
          </h2>

          <div className="partners-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {partners.map((p, i) => (
              <div
                key={p.name}
                className="partner-item pillar-card p-5 rounded-xl flex flex-col gap-2 cursor-default group text-center"
              >
                <span className="font-display text-sm font-700 text-white group-hover:text-ln-lime transition-colors duration-300 uppercase tracking-wide">
                  {p.name}
                </span>
                <span className="font-body text-[9px] text-white/30 uppercase tracking-wider">{p.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
